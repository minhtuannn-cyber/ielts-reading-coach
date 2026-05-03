// Cambridge IELTS 20 — Test 2 Passages
const CAM20_T2 = [

// ══════════════════════════════════════════════════════════════════════════
// TEST 2 — PASSAGE 1: Manatees
// ══════════════════════════════════════════════════════════════════════════
{
  id: 'cam20-t2-p1',
  title: 'Manatees',
  topic: 'Nature & Biology',
  band: '6.0 – 7.0',
  difficulty: 'Intermediate',
  source: '📗 Cambridge IELTS 20 — Test 2, Passage 1',
  wordCount: 780,
  estimatedTime: 20,
  text: `<strong>Manatees, also known as sea cows, are aquatic mammals that belong to a group of animals called Sirenia.</strong> This group also contains dugongs. Dugongs and manatees look quite alike – they are similar in size, colour and shape, and both have flexible flippers for forelimbs. However, the manatee has a broad, rounded tail, whereas the dugong's is fluked, like that of a whale. There are three species of manatees: the West Indian manatee, the African manatee and the Amazonian manatee.

Unlike most mammals, manatees have only six bones in their neck – most others, including humans and giraffes, have seven. This short neck allows a manatee to move its head up and down, but not side to side. To see something on its left or its right, a manatee must turn its entire body, steering with its flippers. Manatees have pectoral flippers but no back limbs, only a tail for propulsion. They do have pelvic bones, however, a leftover from their evolution from a four-legged to a fully aquatic animal. Manatees share some visual similarities to elephants. Like elephants, manatees have thick, wrinkled skin. They also have some hairs covering their bodies which help them sense vibrations in the water around them.

Seagrasses and other marine plants make up most of a manatee's diet. Manatees spend about eight hours each day grazing and uprooting plants. They eat up to 15% of their weight in food each day. African manatees are omnivorous – studies have shown that molluscs and fish make up a small part of their diets. West Indian and Amazonian manatees are both herbivores.

Manatees' teeth are all molars – flat, rounded teeth for grinding food. Due to manatees' abrasive aquatic plant diet, these teeth get worn down and they eventually fall out, so they continually grow new teeth that get pushed forward to replace the ones they lose. Instead of having incisors to grasp their food, manatees have lips which function like a pair of hands to help tear food away from the seafloor.

Manatees are fully aquatic, but as mammals, they need to come up to the surface to breathe. When awake, they typically surface every two to four minutes, but they can hold their breath for much longer. Adult manatees sleep underwater for 10–12 hours a day, but they come up for air every 15–20 minutes. Active manatees need to breathe more frequently. It is thought that manatees use their muscular diaphragm and breathing to adjust their buoyancy. They may use diaphragm contractions to compress and store gas in folds in their large intestine to help them float.

The West Indian manatee reaches about 3.5 metres long and weighs on average around 500 kilograms. It moves between fresh water and salt water, taking advantage of coastal mangroves and coral reefs, rivers, lakes and inland lagoons. There are two subspecies of West Indian manatee: the Antillean manatee is found in waters from the Bahamas to Brazil, whereas the Florida manatee is found in US waters. In winter, the Florida manatee is typically restricted to Florida. When the ambient water temperature drops below 20°C, it takes refuge in naturally and artificially warmed water, such as at the warm-water outfalls from powerplants.

The African manatee is also about 3.5 metres long and found in the sea along the west coast of Africa, from Mauritania down to Angola. The species also makes use of rivers, with the mammals seen in landlocked countries such as Mali and Niger. The Amazonian manatee is the smallest species. It grows to about 2.5 metres long and 350 kilogrammes. Amazonian manatees favour calm, shallow waters that are above 23°C.

All three manatee species are endangered or at a heightened risk of extinction. The African manatee and Amazonian manatee are both listed as Vulnerable by the IUCN. It is estimated that 140,000 Amazonian manatees were killed between 1935 and 1954 for their meat, fat and skin. In more recent years, African manatee decline has been tied to incidental capture in fishing nets and hunting.

The two subspecies of West Indian manatee are listed as Endangered by the IUCN. Both are also expected to undergo a decline of 20% over the next 40 years. A review of almost 1,800 cases of entanglement in fishing nets and of plastic consumption among marine mammals in US waters from 2009 to 2020 found that at least 700 cases involved manatees. The chief cause of death in Florida manatees is boat strikes. However, laws in certain parts of Florida now limit boat speeds during winter, allowing slow-moving manatees more time to respond.`,
  questions: [
    { id: 1, type: 'short', question: 'Q1: Manatees look similar to dugongs, but with a differently shaped (1) ___________.', answer: 'tail', hints: ['So sánh manatee và dugong ở đoạn 1.', 'Tìm "However, the manatee has a broad, rounded…"', 'Bộ phận nào khác nhau?'], explanation: 'tail — <em>"the manatee has a broad, rounded <strong>tail</strong>, whereas the dugong\'s is fluked"</em>.' },
    { id: 2, type: 'short', question: 'Q2: Manatees need to use their (2) ___________ to help turn their bodies to look sideways.', answer: 'flippers', hints: ['Đoạn 2 nói về cách manatee quay đầu.', 'Tìm "steering with its…"', 'Manatee dùng gì để lái?'], explanation: 'flippers — <em>"a manatee must turn its entire body, steering with its <strong>flippers</strong>"</em>.' },
    { id: 3, type: 'short', question: 'Q3: Manatees sense vibrations in the water by means of (3) ___________ on their skin.', answer: 'hairs', hints: ['Đoạn 2, phần nói về da manatee.', 'Tìm "help them sense vibrations"', 'Cái gì trên da giúp cảm nhận rung động?'], explanation: 'hairs — <em>"They also have some <strong>hairs</strong> covering their bodies which help them sense vibrations"</em>.' },
    { id: 4, type: 'short', question: 'Q4: Manatees eat mainly aquatic vegetation, such as (4) ___________.', answer: 'seagrasses', hints: ['Đoạn 3, dòng đầu tiên.', 'Tìm "make up most of a manatee\'s diet"', 'Loại thực vật biển nào được nêu tên đầu tiên?'], explanation: 'seagrasses — <em>"<strong>Seagrasses</strong> and other marine plants make up most of a manatee\'s diet"</em>.' },
    { id: 5, type: 'short', question: 'Q5: Manatees grasp and pull up plants with their (5) ___________.', answer: 'lips', hints: ['Đoạn 4, phần nói về cách ăn.', 'Tìm "function like a pair of hands"', 'Bộ phận nào thay thế incisors?'], explanation: 'lips — <em>"manatees have <strong>lips</strong> which function like a pair of hands to help tear food away"</em>.' },
    { id: 6, type: 'short', question: 'Q6: Manatees may regulate the (6) ___________ of their bodies using muscles of diaphragm.', answer: 'buoyancy', hints: ['Đoạn 5, phần nói về hô hấp và nổi.', 'Tìm "adjust their…"', 'Manatee điều chỉnh gì bằng cơ hoành?'], explanation: 'buoyancy — <em>"manatees use their muscular diaphragm and breathing to adjust their <strong>buoyancy</strong>"</em>.' },
    { id: 7, type: 'tfng', question: 'Q7: West Indian manatees can be found in a variety of different aquatic habitats.', answer: 'TRUE', hints: ['Đoạn 6 liệt kê nơi sống của West Indian manatee.', 'Tìm "coastal mangroves and coral reefs, rivers, lakes…"', 'Đó là nhiều loại môi trường khác nhau?'], explanation: 'TRUE — <em>"It moves between fresh water and salt water, taking advantage of coastal mangroves and coral reefs, rivers, lakes and inland lagoons"</em>.' },
    { id: 8, type: 'tfng', question: 'Q8: The Florida manatee lives in warmer waters than the Antillean manatee.', answer: 'NOT GIVEN', hints: ['Bài có so sánh nhiệt độ nước giữa 2 loài không?', 'Tìm thông tin nhiệt độ cho từng loài phụ.', 'Có dữ liệu cụ thể để so sánh không?'], explanation: 'NOT GIVEN — Bài nêu Florida manatee tránh nước dưới 20°C, nhưng không so sánh với Antillean.' },
    { id: 9, type: 'tfng', question: 'Q9: The African manatee\'s range is limited to coastal waters between Mauritania and Angola.', answer: 'FALSE', hints: ['Đoạn 7 nói gì về phạm vi sống của African manatee?', 'Tìm "also makes use of rivers"', 'Chúng chỉ sống ở ven biển thôi sao?'], explanation: 'FALSE — <em>"The species also makes use of rivers, with the mammals seen in landlocked countries such as Mali and Niger"</em>.' },
    { id: 10, type: 'tfng', question: 'Q10: The extent of the loss of Amazonian manatees in the mid-20th century was only revealed many years later.', answer: 'NOT GIVEN', hints: ['Bài có nói khi nào thông tin về số lượng bị giết được tiết lộ không?', 'Tìm đoạn về "140,000 Amazonian manatees"', 'Có nêu thời điểm phát hiện thông tin này không?'], explanation: 'NOT GIVEN — Bài nêu con số 140,000 nhưng không nói khi nào thông tin này được tiết lộ.' },
    { id: 11, type: 'tfng', question: 'Q11: It is predicted that West Indian manatee populations will fall in the coming decades.', answer: 'TRUE', hints: ['Tìm dự đoán về số lượng West Indian manatee.', 'Tìm "expected to undergo a decline"', 'Bao nhiêu phần trăm trong bao nhiêu năm?'], explanation: 'TRUE — <em>"Both are also expected to undergo a decline of 20% over the next 40 years"</em>.' },
    { id: 12, type: 'tfng', question: 'Q12: The risk to manatees from entanglement and plastic consumption increased significantly in the period 2009–2020.', answer: 'NOT GIVEN', hints: ['Bài có nói rủi ro TĂNG trong giai đoạn đó không?', 'Tìm đoạn về "1,800 cases"', 'Có so sánh với giai đoạn trước không?'], explanation: 'NOT GIVEN — Bài nêu 1,800 trường hợp trong 2009–2020 nhưng không so sánh với giai đoạn trước.' },
    { id: 13, type: 'tfng', question: 'Q13: There is some legislation in place which aims to reduce boat strikes on manatees in Florida.', answer: 'TRUE', hints: ['Đoạn cuối nói gì về luật ở Florida?', 'Tìm "laws in certain parts of Florida"', 'Luật đó nhằm mục đích gì?'], explanation: 'TRUE — <em>"laws in certain parts of Florida now limit boat speeds during winter, allowing slow-moving manatees more time to respond"</em>.' },
  ]
},

];

PASSAGES.push(...CAM20_T2);
