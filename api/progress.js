// api/progress.js — Vercel Serverless Function
// Acts as a CORS-safe proxy between the browser and the Notion API.

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DB_ID = process.env.NOTION_DB_ID;
const NOTION_VERSION = '2022-06-28';

const notionHeaders = {
  'Authorization': `Bearer ${NOTION_TOKEN}`,
  'Content-Type': 'application/json',
  'Notion-Version': NOTION_VERSION,
};

// ── Helper: allow CORS ─────────────────────────────────────────────────────
function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// ══════════════════════════════════════════════════════════════════════════════
export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (!NOTION_TOKEN || !NOTION_DB_ID) {
    return res.status(500).json({ error: 'Notion env vars not configured' });
  }

  // ── GET: fetch all sessions from Notion ──────────────────────────────────
  if (req.method === 'GET') {
    try {
      const response = await fetch(
        `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
        {
          method: 'POST',
          headers: notionHeaders,
          body: JSON.stringify({
            sorts: [{ property: 'date', direction: 'descending' }],
            page_size: 100,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) return res.status(response.status).json(data);

      // Map Notion page properties → simple JS objects
      const sessions = data.results.map(page => {
        const p = page.properties;
        return {
          id:           page.id,
          passageId:    prop(p, 'passage_id',    'rich_text'),
          passageTitle: prop(p, 'passage_title', 'rich_text'),
          correct:      prop(p, 'correct',       'number'),
          total:        prop(p, 'total',         'number'),
          timeSpent:    prop(p, 'time_spent',    'number'),
          hintsUsed:    prop(p, 'hints_used',    'number'),
          date:         prop(p, 'date',          'date'),
        };
      });

      return res.status(200).json({ sessions });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // ── POST: save a new session to Notion ───────────────────────────────────
  if (req.method === 'POST') {
    const { passageId, passageTitle, correct, total, timeSpent, hintsUsed } = req.body;
    if (!passageId || total === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const response = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: notionHeaders,
        body: JSON.stringify({
          parent: { database_id: NOTION_DB_ID },
          properties: {
            session_id:    titleProp(`${passageId}_${Date.now()}`),
            passage_id:    richTextProp(passageId),
            passage_title: richTextProp(passageTitle || passageId),
            correct:       numberProp(correct ?? 0),
            total:         numberProp(total),
            time_spent:    numberProp(timeSpent ?? 0),
            hints_used:    numberProp(hintsUsed ?? 0),
            date:          dateProp(new Date().toISOString()),
          },
        }),
      });
      const data = await response.json();
      if (!response.ok) return res.status(response.status).json(data);
      return res.status(201).json({ id: data.id });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

// ── Notion property helpers ───────────────────────────────────────────────
function prop(properties, name, type) {
  const p = properties[name];
  if (!p) return null;
  switch (type) {
    case 'title':     return p.title?.[0]?.plain_text ?? null;
    case 'rich_text': return p.rich_text?.[0]?.plain_text ?? null;
    case 'number':    return p.number ?? null;
    case 'date':      return p.date?.start ?? null;
    default:          return null;
  }
}
function titleProp(text)    { return { title:     [{ text: { content: String(text) } }] }; }
function richTextProp(text) { return { rich_text: [{ text: { content: String(text || '') } }] }; }
function numberProp(n)      { return { number: Number(n) }; }
function dateProp(iso)      { return { date: { start: iso } }; }
