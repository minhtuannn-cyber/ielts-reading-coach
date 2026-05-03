// ─── State ───────────────────────────────────────────────────────────────────
const state = {
  view: 'dashboard',
  passage: null,
  answers: {},
  hintsUsed: {},
  startTime: null,
  timerInterval: null,
  timeLeft: 0,
  reviewData: null
};

// ─── Storage (Hybrid: localStorage cache + Notion sync) ──────────────────────
const API = '/api/progress';

function defaultProgress() {
  return {
    streak: 0,
    lastStudyDate: null,
    totalSessions: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    completedPassages: [],
    skills: { tfng: { correct: 0, total: 0 }, mc: { correct: 0, total: 0 }, short: { correct: 0, total: 0 } },
    sessions: []
  };
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('ielts_progress')) || defaultProgress();
  } catch { return defaultProgress(); }
}

function saveProgress(p) {
  localStorage.setItem('ielts_progress', JSON.stringify(p));
}

// Rebuild local progress from Notion sessions array
function rebuildFromSessions(sessions) {
  const p = defaultProgress();
  sessions.forEach(s => {
    p.totalSessions++;
    p.totalQuestions += (s.total || 0);
    p.totalCorrect   += (s.correct || 0);
    if (s.passageId && !p.completedPassages.includes(s.passageId))
      p.completedPassages.push(s.passageId);
    p.sessions.push({
      passageId:    s.passageId,
      passageTitle: s.passageTitle,
      date:         s.date || new Date().toISOString(),
      correct:      s.correct || 0,
      total:        s.total   || 0,
      time:         Math.round((s.timeSpent || 0) / 60)
    });
  });
  // Streak: check last session date
  if (p.sessions.length > 0) {
    const lastDate = new Date(p.sessions[p.sessions.length - 1].date).toDateString();
    const today    = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    p.lastStudyDate = lastDate;
    p.streak = (lastDate === today || lastDate === yesterday) ? 1 : 0;
  }
  return p;
}

// Sync sessions from Notion → update localStorage cache
async function syncFromNotion() {
  try {
    const res = await fetch(API);
    if (!res.ok) return;            // silently fail if API not configured yet
    const { sessions } = await res.json();
    if (!Array.isArray(sessions)) return;
    const p = rebuildFromSessions(sessions);
    saveProgress(p);
    return p;
  } catch (e) {
    console.warn('[Notion sync] Could not fetch:', e.message);
  }
}

// Save one session to Notion (fire-and-forget, localStorage already updated)
async function pushSessionToNotion(session) {
  try {
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(session)
    });
  } catch (e) {
    console.warn('[Notion sync] Could not push session:', e.message);
  }
}


// ─── Navigation ───────────────────────────────────────────────────────────────
function navigate(view, data) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  state.view = view;
  if (view === 'dashboard') renderDashboard();
  if (view === 'select')    renderSelect();
  if (view === 'practice' && data) startPractice(data);
  if (view === 'review' && data)   renderReview(data);
  if (view === 'progress')  renderProgress();
  window.scrollTo(0, 0);
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function renderDashboard() {
  const p = loadProgress();
  updateStreak(p);

  // Overall accuracy
  const acc = p.totalQuestions > 0 ? Math.round(p.totalCorrect / p.totalQuestions * 100) : 0;
  setEl('stat-accuracy', acc + '%');
  setEl('stat-sessions', p.totalSessions);
  setEl('stat-questions', p.totalQuestions);
  setEl('stat-streak', p.streak + ' 🔥');

  // Skill bars
  const skillsEl = document.getElementById('skill-bars');
  skillsEl.innerHTML = '';
  Object.entries(p.skills).forEach(([key, val]) => {
    const pct = val.total > 0 ? Math.round(val.correct / val.total * 100) : 0;
    const info = SKILL_TYPES[key];
    const color = pct >= 70 ? '#10B981' : pct >= 50 ? '#F59E0B' : '#EF4444';
    skillsEl.innerHTML += `
      <div class="skill-row">
        <div class="skill-label">
          <span>${info.label}</span>
          <span class="skill-pct" style="color:${color}">${val.total > 0 ? pct + '%' : '—'}</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" style="width:${pct}%;background:${color}"></div>
        </div>
        <div class="skill-meta">${val.correct}/${val.total} câu đúng</div>
      </div>`;
  });

  // Recent passages
  const recEl = document.getElementById('recent-list');
  recEl.innerHTML = '';
  const recent = p.sessions.slice(-4).reverse();
  if (recent.length === 0) {
    recEl.innerHTML = '<p class="empty-state">Chưa có bài học nào. Bắt đầu luyện tập ngay!</p>';
  } else {
    recent.forEach(s => {
      const pass = PASSAGES.find(x => x.id === s.passageId);
      if (!pass) return;
      const pct = Math.round(s.correct / s.total * 100);
      recEl.innerHTML += `
        <div class="recent-card">
          <div class="recent-card-left">
            <div class="recent-title">${pass.title}</div>
            <div class="recent-meta">${new Date(s.date).toLocaleDateString('vi-VN')} • ${s.time} phút</div>
          </div>
          <div class="recent-score" style="color:${pct>=70?'#10B981':pct>=50?'#F59E0B':'#EF4444'}">${pct}%</div>
        </div>`;
    });
  }
}

function updateStreak(p) {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (p.lastStudyDate === today) return;
  if (p.lastStudyDate === yesterday) p.streak += 1;
  else if (p.lastStudyDate !== today) p.streak = 0;
}

// ─── Passage Select ───────────────────────────────────────────────────────────
function renderSelect() {
  const p = loadProgress();
  const grid = document.getElementById('passage-grid');
  grid.innerHTML = '';
  PASSAGES.forEach(pass => {
    const done = p.completedPassages.includes(pass.id);
    const lastSession = p.sessions.filter(s => s.passageId === pass.id).slice(-1)[0];
    const scoreHtml = lastSession
      ? `<span class="badge badge-score">${Math.round(lastSession.correct/lastSession.total*100)}%</span>`
      : '';
    const sourceHtml = pass.source ? `<div class="passage-source">${pass.source}</div>` : '';
    grid.innerHTML += `
      <div class="passage-card" onclick="navigate('practice','${pass.id}')">
        ${sourceHtml}
        <div class="passage-card-header">
          <span class="badge badge-${pass.difficulty === 'Intermediate' ? 'mid' : 'adv'}">${pass.difficulty}</span>
          ${done ? '<span class="badge badge-done">✓ Đã làm</span>' : ''}
          ${scoreHtml}
        </div>
        <div class="passage-card-title">${pass.title}</div>
        <div class="passage-card-meta">
          <span>📚 ${pass.topic}</span>
          <span>🎯 Band ${pass.band}</span>
        </div>
        <div class="passage-card-footer">
          <span>📝 ${pass.questions.length} câu hỏi</span>
          <span>⏱ ~${pass.estimatedTime} phút</span>
        </div>
      </div>`;
  });
}

// ─── Practice ─────────────────────────────────────────────────────────────────
function startPractice(passageId) {
  const pass = PASSAGES.find(p => p.id === passageId);
  if (!pass) { navigate('select'); return; }
  state.passage = pass;
  state.answers = {};
  state.hintsUsed = {};
  state.startTime = Date.now();

  // Render passage
  document.getElementById('practice-title').textContent = pass.title;
  document.getElementById('practice-meta').textContent =
    `${pass.topic} • Band ${pass.band} • ${pass.questions.length} câu hỏi`;
  document.getElementById('passage-text').innerHTML = pass.text;

  // Render questions
  const qEl = document.getElementById('questions-panel');
  qEl.innerHTML = '';
  pass.questions.forEach((q, i) => {
    qEl.innerHTML += buildQuestionHTML(q, i);
  });

  // Progress dots
  const dots = document.getElementById('q-dots');
  dots.innerHTML = pass.questions.map((_, i) =>
    `<span class="q-dot" id="dot-${i}" onclick="scrollToQ(${i})"></span>`
  ).join('');

  // Timer
  state.timeLeft = pass.estimatedTime * 60;
  startTimer();

  // Submit button
  document.getElementById('btn-submit').onclick = submitPractice;
}

function buildQuestionHTML(q, i) {
  const typeLabel = SKILL_TYPES[q.type]?.label || q.type.toUpperCase();
  let bodyHtml = '';

  if (q.type === 'tfng') {
    bodyHtml = ['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => `
      <label class="option-label" id="opt-${i}-${opt}">
        <input type="radio" name="q${i}" value="${opt}" onchange="selectAnswer(${i},'${opt}')">
        <span class="option-btn">${opt}</span>
      </label>`).join('');
  } else if (q.type === 'mc') {
    bodyHtml = q.options.map((opt, oi) => `
      <label class="option-label" id="opt-${i}-${oi}">
        <input type="radio" name="q${i}" value="${oi}" onchange="selectAnswer(${i},${oi})">
        <span class="option-btn">${opt}</span>
      </label>`).join('');
  } else if (q.type === 'short') {
    bodyHtml = `
      <div class="short-answer-wrap">
        <input type="text" class="short-input" id="short-${i}"
          placeholder="Nhập đáp án (ONE WORD AND/OR A NUMBER)"
          oninput="selectAnswer(${i}, this.value)"
          autocomplete="off" spellcheck="false">
        <span class="short-hint-label">ONE WORD AND/OR A NUMBER</span>
      </div>`;
  }

  return `
    <div class="question-card" id="qcard-${i}">
      <div class="question-header">
        <span class="q-num">Câu ${i + 1}</span>
        <span class="q-type-badge">${typeLabel}</span>
      </div>
      <p class="question-text">${q.question}</p>
      <div class="options-group">${bodyHtml}</div>
      <div class="hint-section" id="hint-${i}">
        <button class="btn-hint" onclick="showHint(${i})">💡 Gợi ý (${q.hints.length} mức)</button>
        <div class="hint-text" id="hint-text-${i}" hidden></div>
      </div>
    </div>`;
}

function selectAnswer(qIdx, val) {
  // For short answer, only register if non-empty
  if (val === '' || val === null || val === undefined) {
    delete state.answers[qIdx];
  } else {
    state.answers[qIdx] = val;
  }
  // Update dot
  const dot = document.getElementById('dot-' + qIdx);
  if (dot) {
    const answered = state.answers[qIdx] !== undefined;
    dot.classList.toggle('answered', answered);
  }
  // Update answered count
  const answered = Object.keys(state.answers).length;
  const total = state.passage.questions.length;
  setEl('answered-count', `${answered}/${total} câu đã trả lời`);
}

function scrollToQ(i) {
  document.getElementById('qcard-' + i)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

let hintLevel = {};
function showHint(qIdx) {
  if (!hintLevel[qIdx]) hintLevel[qIdx] = 0;
  const q = state.passage.questions[qIdx];
  const level = hintLevel[qIdx];
  if (level >= q.hints.length) return;
  const hintEl = document.getElementById('hint-text-' + qIdx);
  hintEl.hidden = false;
  hintEl.innerHTML += `<div class="hint-item">💡 <strong>Gợi ý ${level + 1}:</strong> ${q.hints[level]}</div>`;
  hintLevel[qIdx]++;
  if (!state.hintsUsed[qIdx]) state.hintsUsed[qIdx] = 0;
  state.hintsUsed[qIdx]++;
  const btn = document.querySelector(`#hint-${qIdx} .btn-hint`);
  const remaining = q.hints.length - hintLevel[qIdx];
  if (remaining > 0) btn.textContent = `💡 Thêm gợi ý (còn ${remaining})`;
  else btn.textContent = '✓ Hết gợi ý';
}

// ─── Timer ────────────────────────────────────────────────────────────────────
function startTimer() {
  clearInterval(state.timerInterval);
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      submitPractice(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.timeLeft / 60).toString().padStart(2, '0');
  const s = (state.timeLeft % 60).toString().padStart(2, '0');
  const el = document.getElementById('timer-display');
  if (!el) return;
  el.textContent = `${m}:${s}`;
  el.className = 'timer-display' + (state.timeLeft < 120 ? ' timer-warning' : '');
}

function stopTimer() { clearInterval(state.timerInterval); }

// ─── Submit ───────────────────────────────────────────────────────────────────
function submitPractice(timeout = false) {
  if (!timeout) {
    const unanswered = state.passage.questions.length - Object.keys(state.answers).length;
    if (unanswered > 0) {
      if (!confirm(`Bạn còn ${unanswered} câu chưa trả lời. Vẫn nộp bài?`)) return;
    }
  }
  stopTimer();
  const elapsed = Math.round((Date.now() - state.startTime) / 60000);
  const results = evaluateAnswers();
  updateProgressData(results, elapsed);
  navigate('review', { results, elapsed, timeout });
}

function evaluateAnswers() {
  return state.passage.questions.map((q, i) => {
    const userAns = state.answers[i] !== undefined ? String(state.answers[i]) : null;
    let correct;
    if (q.type === 'tfng') {
      correct = userAns === q.answer;
    } else if (q.type === 'mc') {
      const answerIndex = 'ABCD'.indexOf(q.answer);
      correct = userAns === String(answerIndex);
    } else if (q.type === 'short') {
      if (userAns === null) { correct = false; }
      else {
        // Accept any of the valid answers (pipe-separated), case-insensitive
        const validAnswers = q.answer.toLowerCase().split('|').map(a => a.trim());
        const normalised = userAns.toLowerCase().trim();
        correct = validAnswers.some(a => normalised === a);
      }
    }
    return { q, userAns, correct: !!correct, hintUsed: !!state.hintsUsed[i] };
  });
}

function updateProgressData(results, elapsed) {
  const p = loadProgress();
  const correct = results.filter(r => r.correct).length;
  const hintsTotal = Object.values(state.hintsUsed).reduce((a, b) => a + b, 0);

  p.totalSessions++;
  p.totalQuestions += results.length;
  p.totalCorrect   += correct;
  p.lastStudyDate   = new Date().toDateString();
  p.streak = Math.max(1, p.streak);

  results.forEach(r => {
    const type = r.q.type;
    if (!p.skills[type]) p.skills[type] = { correct: 0, total: 0 };
    p.skills[type].total++;
    if (r.correct) p.skills[type].correct++;
  });

  if (!p.completedPassages.includes(state.passage.id))
    p.completedPassages.push(state.passage.id);

  const sessionObj = {
    passageId:    state.passage.id,
    passageTitle: state.passage.title,
    date:         new Date().toISOString(),
    correct,
    total:        results.length,
    time:         elapsed,
    timeSpent:    elapsed * 60,
    hintsUsed:    hintsTotal
  };
  p.sessions.push(sessionObj);
  saveProgress(p);

  // Push to Notion in background (non-blocking)
  pushSessionToNotion(sessionObj);
}

// ─── Review ───────────────────────────────────────────────────────────────────
function renderReview({ results, elapsed, timeout }) {
  const correct = results.filter(r => r.correct).length;
  const total = results.length;
  const pct = Math.round(correct / total * 100);
  const scoreColor = pct >= 70 ? '#10B981' : pct >= 50 ? '#F59E0B' : '#EF4444';

  setEl('review-title', state.passage.title);
  setEl('review-score-num', `${correct}/${total}`);
  setEl('review-score-pct', `${pct}%`);
  document.getElementById('review-score-pct').style.color = scoreColor;
  setEl('review-time', `${elapsed} phút`);
  setEl('review-band', estimateBand(pct));
  if (timeout) setEl('review-note', '⏰ Hết giờ — bài đã được nộp tự động');

  const hintsCount = Object.values(state.hintsUsed).reduce((a,b) => a + b, 0);
  setEl('review-hints', hintsCount > 0 ? `Đã dùng ${hintsCount} gợi ý` : 'Không dùng gợi ý ✨');

  const listEl = document.getElementById('review-list');
  listEl.innerHTML = '';
  results.forEach((r, i) => {
    const { q, userAns, correct: isCorrect } = r;
    let userDisplay = userAns !== null ? userAns : '<em>Chưa trả lời</em>';
    if (q.type === 'mc' && userAns !== null) {
      userDisplay = q.options[parseInt(userAns)] || userAns;
    }
    let correctDisplay = q.answer;
    if (q.type === 'mc') {
      const idx = 'ABCD'.indexOf(q.answer);
      correctDisplay = q.options[idx] || q.answer;
    }
    if (q.type === 'short') {
      // Show all valid answers if pipe-separated
      correctDisplay = q.answer.split('|').join(' hoặc ');
    }

    listEl.innerHTML += `
      <div class="review-card ${isCorrect ? 'review-correct' : 'review-wrong'}">
        <div class="review-card-header">
          <span class="review-q-num">Câu ${i + 1}</span>
          <span class="review-verdict">${isCorrect ? '✓ Đúng' : '✗ Sai'}</span>
        </div>
        <p class="review-question">${q.question}</p>
        <div class="review-answers">
          ${!isCorrect ? `<div class="review-user-ans">Câu trả lời của bạn: <strong>${userDisplay}</strong></div>` : ''}
          <div class="review-correct-ans">Đáp án đúng: <strong>${correctDisplay}</strong></div>
        </div>
        <div class="review-explanation">📖 ${q.explanation}</div>
        ${r.hintUsed ? '<div class="review-hint-note">💡 Đã sử dụng gợi ý</div>' : ''}
      </div>`;
  });

  // Encouragement message
  const msg = pct >= 80 ? '🏆 Xuất sắc! Bạn đang tiến gần đến band 7+!'
            : pct >= 60 ? '👍 Khá tốt! Tiếp tục luyện tập để cải thiện!'
            : '💪 Đừng nản! Xem lại giải thích và thử lại nhé!';
  setEl('review-message', msg);
}

function estimateBand(pct) {
  if (pct >= 90) return '8.0+';
  if (pct >= 80) return '7.0–7.5';
  if (pct >= 65) return '6.0–6.5';
  if (pct >= 50) return '5.5';
  return '5.0 trở xuống';
}

// ─── Progress ─────────────────────────────────────────────────────────────────
function renderProgress() {
  const p = loadProgress();
  const acc = p.totalQuestions > 0 ? Math.round(p.totalCorrect / p.totalQuestions * 100) : 0;
  setEl('prog-sessions', p.totalSessions);
  setEl('prog-accuracy', acc + '%');
  setEl('prog-streak', p.streak);
  setEl('prog-questions', p.totalQuestions);

  const chartEl = document.getElementById('skill-chart');
  chartEl.innerHTML = '';
  Object.entries(p.skills).forEach(([key, val]) => {
    const pct = val.total > 0 ? Math.round(val.correct / val.total * 100) : 0;
    const info = SKILL_TYPES[key];
    const color = pct >= 70 ? '#10B981' : pct >= 50 ? '#F59E0B' : '#EF4444';
    const status = pct >= 70 ? '✓ Tốt' : pct >= 50 ? '~ Trung bình' : '✗ Cần cải thiện';
    chartEl.innerHTML += `
      <div class="chart-row">
        <div class="chart-label">${info.label}</div>
        <div class="chart-bar-wrap">
          <div class="chart-bar" style="width:${pct}%;background:${color}"></div>
          <span class="chart-pct" style="color:${color}">${val.total > 0 ? pct + '%' : '—'}</span>
        </div>
        <div class="chart-status">${val.total > 0 ? status : 'Chưa có dữ liệu'}</div>
      </div>`;
  });

  // Session history
  const histEl = document.getElementById('session-history');
  histEl.innerHTML = '';
  p.sessions.slice().reverse().slice(0, 8).forEach(s => {
    const pass = PASSAGES.find(x => x.id === s.passageId);
    const pct = Math.round(s.correct / s.total * 100);
    const color = pct >= 70 ? '#10B981' : pct >= 50 ? '#F59E0B' : '#EF4444';
    histEl.innerHTML += `
      <div class="history-row">
        <div class="history-title">${pass?.title || s.passageId}</div>
        <div class="history-meta">${new Date(s.date).toLocaleDateString('vi-VN')}</div>
        <div class="history-score" style="color:${color}">${pct}%</div>
      </div>`;
  });
  if (p.sessions.length === 0) {
    histEl.innerHTML = '<p class="empty-state">Chưa có lịch sử học tập.</p>';
  }
}

// ─── Utils ────────────────────────────────────────────────────────────────────
function setEl(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function resetProgress() {
  if (confirm('Bạn có chắc muốn xóa toàn bộ tiến độ?')) {
    localStorage.removeItem('ielts_progress');
    navigate('dashboard');
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  navigate('dashboard');          // render immediately from localStorage cache
  const fresh = await syncFromNotion(); // sync from Notion in background
  if (fresh) renderDashboard();   // re-render if we got fresher data
});

