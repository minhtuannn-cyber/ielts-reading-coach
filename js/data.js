const PASSAGES = [
  // ══════════════════════════════════════════════════════════════════════
  // CAMBRIDGE IELTS 20 — TEST 1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'cam20-t1-p1',
    title: 'The kākāpō',
    topic: 'Nature & Conservation',
    band: '6.0 – 7.0',
    difficulty: 'Intermediate',
    source: '📗 Cambridge IELTS 20 — Test 1, Passage 1',
    wordCount: 620,
    estimatedTime: 20,
    text: `<strong>The kākāpō is a nocturnal, flightless parrot that is critically endangered and one of New Zealand's unique treasures.</strong>

The kākāpō, also known as the owl parrot, is a large, forest-dwelling bird, with a pale owl-like face. Up to 64 cm in length, it has predominantly yellow-green feathers, forward-facing eyes, a large grey beak, large blue feet, and relatively short wings and tail. It is the world's only flightless parrot, and is also possibly one of the world's longest-living birds, with a reported lifespan of up to 100 years. Kākāpō are solitary birds and tend to occupy the same home range for many years. They forage on the ground and climb high into trees. They often leap from trees and flap their wings, but at best manage a controlled descent to the ground. They are entirely vegetarian, with their diet including the leaves, roots and bark of trees as well as bulbs, and fern fronds. Kākāpō breed in summer and autumn, but only in years when food is plentiful. Males play no part in incubation or chick-rearing – females alone incubate eggs and feed the chicks. The 1–4 eggs are laid in soil, which is repeatedly turned over before and during incubation. The female kākāpō has to spend long periods away from the nest searching for food, which leaves the unattended eggs and chicks particularly vulnerable to predators.

Before humans arrived, kākāpō were common throughout New Zealand's forests. However, this all changed with the arrival of the first Polynesian settlers about 700 years ago. For the early settlers, the flightless kākāpō was easy prey. They ate its meat and used its feathers to make soft cloaks. With them came the Polynesian dog and rat, which also preyed on kākāpō. By the time European colonisers arrived in the early 1800s, kākāpō had become confined to the central North Island and forested parts of the South Island. The fall in kākāpō numbers was accelerated by European colonisation. A great deal of habitat was lost through forest clearance, and introduced species such as deer depleted the remaining forests of food. Other predators such as cats, stoats and two more species of rat were also introduced. The kākāpō were in serious trouble.

In 1894, the New Zealand government launched its first attempt to save the kākāpō. Conservationist Richard Henry led an effort to relocate several hundred of the birds to predator-free Resolution Island in Fiordland. Unfortunately, the island didn't remain predator free – stoats arrived within six years, eventually destroying the kākāpō population. By the mid-1900s, the kākāpō was practically a lost species. Only a few clung to life in the most isolated parts of New Zealand. From 1949 to 1973, the newly formed New Zealand Wildlife Service made over 60 expeditions to find kākāpō, focusing mainly on Fiordland. Six were caught, but there were no females amongst them and all but one died within a few months of captivity. In 1974, a new initiative was launched, and by 1977, 18 more kākāpō were found in Fiordland. However, there were still no females. In 1977, a large population of males was spotted in Rakiura – a large island free from stoats, ferrets and weasels. There were about 200 individuals, and in 1980 it was confirmed females were also present. These birds have been the foundation of all subsequent work in managing the species. Unfortunately, predation by feral cats on Rakiura Island led to a rapid decline in kākāpō numbers. As a result, during 1980–97, the surviving population was evacuated to three island sanctuaries: Codfish Island, Maud Island and Little Barrier Island. However, breeding success was hard to achieve. Rats were found to be a major predator of kākāpō chicks and an insufficient number of chicks survived to offset adult mortality. By 1995, although at least 12 chicks had been produced on the islands, only three had survived. The kākāpō population had dropped to 51 birds. The critical situation prompted an urgent review of kākāpō management in New Zealand.

In 1996, a new Recovery Plan was launched, together with a specialist advisory group called the Kākāpō Scientific and Technical Advisory Committee and a higher amount of funding. Renewed steps were taken to control predators on the three islands. Cats were eradicated from Little Barrier Island in 1980, and possums were eradicated from Codfish Island by 1986. However, the population did not start to increase until rats were removed from all three islands, and the birds were more intensively managed. This involved moving the birds between islands, supplementary feeding of adults and rescuing and hand-raising any failing chicks. After the first five years of the Recovery Plan, the population was on target. By 2000, five new females had been produced, and the total population had grown to 62 birds. For the first time, there was cautious optimism for the future of kākāpō and by June 2020, a total of 210 birds was recorded. Today, kākāpō management continues to be guided by the kākāpō Recovery Plan. Its key goals are: minimise the loss of genetic diversity in the kākāpō population, restore or maintain sufficient habitat to accommodate the expected increase in the kākāpō population, and ensure stakeholders continue to be fully engaged in the preservation of the species.`,
    questions: [
      {
        id: 1, type: 'tfng',
        question: 'There are other parrots that share the kākāpō\'s inability to fly.',
        answer: 'FALSE',
        hints: [
          'Xem đoạn 1, câu mô tả đặc điểm độc đáo của kākāpō.',
          'Tìm cụm từ "world\'s only" trong bài.',
          'Bài đọc dùng từ gì để nhấn mạnh tính duy nhất của kākāpō?'
        ],
        explanation: 'FALSE — Đoạn 1 nêu rõ: <em>"It is the world\'s only flightless parrot"</em> — không có loài vẹt nào khác không bay được.'
      },
      {
        id: 2, type: 'tfng',
        question: 'Adult kākāpō produce chicks every year.',
        answer: 'FALSE',
        hints: [
          'Xem đoạn 1, phần nói về tập tính sinh sản của kākāpō.',
          'Tìm câu nói về thời điểm kākāpō sinh sản.',
          'Điều kiện nào mới khiến kākāpō sinh sản?'
        ],
        explanation: 'FALSE — Bài đọc nêu: <em>"Kākāpō breed in summer and autumn, but only in years when food is plentiful"</em> — chúng chỉ sinh sản khi thức ăn dồi dào, không phải mỗi năm.'
      },
      {
        id: 3, type: 'tfng',
        question: 'Adult male kākāpō bring food back to nesting females.',
        answer: 'FALSE',
        hints: [
          'Xem đoạn 1, phần mô tả vai trò của con đực và con cái.',
          'Tìm câu nói về "males" trong quá trình ấp trứng.',
          'Từ "no part" xuất hiện trong bối cảnh nào?'
        ],
        explanation: 'FALSE — Bài đọc nêu: <em>"Males play no part in incubation or chick-rearing – females alone incubate eggs and feed the chicks"</em> — con đực không tham gia chăm sóc.'
      },
      {
        id: 4, type: 'tfng',
        question: 'The Polynesian rat was a greater threat to the kākāpō than Polynesian settlers.',
        answer: 'NOT GIVEN',
        hints: [
          'Xem đoạn 2, phần nói về người định cư Polynesia.',
          'Bài đọc có so sánh mức độ nguy hiểm giữa chuột và con người không?',
          'Tìm xem bài đọc có nói cái nào nguy hiểm HƠN không.'
        ],
        explanation: 'NOT GIVEN — Bài đọc đề cập cả hai mối đe dọa (người và chuột Polynesia) nhưng không so sánh mức độ nguy hiểm của chúng.'
      },
      {
        id: 5, type: 'tfng',
        question: 'Kākāpō were transferred from Rakiura Island to other locations because they were at risk from feral cats.',
        answer: 'TRUE',
        hints: [
          'Xem đoạn 4, phần nói về Rakiura Island.',
          'Tìm lý do tại sao kākāpō phải rời Rakiura.',
          'Loài động vật nào gây ra sự suy giảm số lượng trên đảo Rakiura?'
        ],
        explanation: 'TRUE — Bài đọc nêu: <em>"predation by feral cats on Rakiura Island led to a rapid decline in kākāpō numbers. As a result, during 1980–97, the surviving population was evacuated"</em>.'
      },
      {
        id: 6, type: 'tfng',
        question: 'One Recovery Plan initiative that helped increase the kākāpō population size was caring for struggling young birds.',
        answer: 'TRUE',
        hints: [
          'Xem đoạn cuối, mô tả các hoạt động của Recovery Plan.',
          'Tìm các biện pháp cụ thể được thực hiện để tăng số lượng.',
          'Cụm từ "hand-raising any failing chicks" có nghĩa là gì?'
        ],
        explanation: 'TRUE — Recovery Plan bao gồm <em>"rescuing and hand-raising any failing chicks"</em> — chăm sóc các con chim non đang yếu.'
      },
      {
        id: 7, type: 'mc',
        question: 'Questions 7–13: Complete the notes. Choose ONE WORD AND/OR A NUMBER.\n\nThe kākāpō\'s diet consists of fern fronds, various parts of a tree and ___________.',
        options: [
          'A. insects',
          'B. bulbs',
          'C. seeds',
          'D. berries'
        ],
        answer: 'B',
        hints: [
          'Xem đoạn 1, phần mô tả chế độ ăn của kākāpō.',
          'Tìm danh sách thức ăn của kākāpō trong đoạn này.',
          'Ngoài "fern fronds" và các bộ phận cây, kākāpō còn ăn gì nữa?'
        ],
        explanation: 'B — Bài đọc liệt kê: <em>"their diet including the leaves, roots and bark of trees as well as <strong>bulbs</strong>, and fern fronds"</em>.'
      },
      {
        id: 8, type: 'mc',
        question: 'Kākāpō nests are created in ___________ where eggs are laid.',
        options: [
          'A. trees',
          'B. rocks',
          'C. soil',
          'D. grass'
        ],
        answer: 'C',
        hints: [
          'Xem đoạn 1, tìm câu mô tả nơi đẻ trứng.',
          'Từ nào mô tả chất liệu của tổ kākāpō?',
          'Trứng được đặt ở đâu?'
        ],
        explanation: 'C — Bài đọc nêu: <em>"The 1–4 eggs are laid in <strong>soil</strong>, which is repeatedly turned over before and during incubation"</em>.'
      },
      {
        id: 9, type: 'short',
        question: 'Questions 9–13: Complete the notes. Write ONE WORD AND/OR A NUMBER.\n\nArrival of Polynesian settlers:\n• The (9) ___________ of the kākāpō were used to make clothes.',
        answer: 'feathers',
        hints: [
          'Xem đoạn 2, phần mô tả cách người Polynesia sử dụng kākāpō.',
          'Họ ăn thịt kākāpō và dùng bộ phận nào để làm quần áo?',
          'Tìm từ đi với "make soft cloaks" — bộ phận cơ thể nào của kākāpō?'
        ],
        explanation: 'feathers — Đoạn 2 nêu: <em>"They ate its meat and used its <strong>feathers</strong> to make soft cloaks"</em>.'
      },
      {
        id: 10, type: 'short',
        question: 'Arrival of European colonisers:\n• (10) ___________ were an animal which they introduced that ate the kākāpō\'s food sources.',
        answer: 'deer',
        hints: [
          'Xem đoạn 2, phần nói về tác động của người định cư châu Âu.',
          'Loài động vật nào được du nhập đã ăn hết nguồn thức ăn của kākāpō?',
          'Tìm động từ "depleted the remaining forests of food" — con vật nào làm điều này?'
        ],
        explanation: 'deer — Đoạn 2 nêu: <em>"introduced species such as <strong>deer</strong> depleted the remaining forests of food"</em>.'
      },
      {
        id: 11, type: 'short',
        question: 'Protecting kākāpō:\n• A definite sighting of female kākāpō on Rakiura Island was reported in the year (11) ___________.',
        answer: '1980',
        hints: [
          'Xem đoạn 4, phần nói về đảo Rakiura.',
          'Tìm năm mà con cái được xác nhận có mặt trên đảo.',
          'Từ "confirmed females were also present" xuất hiện ở năm nào?'
        ],
        explanation: '1980 — Đoạn 4 nêu: <em>"in <strong>1980</strong> it was confirmed females were also present"</em>.'
      },
      {
        id: 12, type: 'short',
        question: 'The Recovery Plan included an increase in (12) ___________.',
        answer: 'funding',
        hints: [
          'Xem đoạn cuối, mô tả những gì Recovery Plan năm 1996 bao gồm.',
          'Ngoài advisory group, còn có gì được tăng thêm?',
          'Tìm từ đi cùng với "a higher amount of..."'
        ],
        explanation: 'funding — Đoạn cuối nêu: <em>"a new Recovery Plan was launched... and a higher amount of <strong>funding</strong>"</em>.'
      },
      {
        id: 13, type: 'short',
        question: 'A current goal of the Recovery Plan is to maintain the involvement of (13) ___________ in kākāpō protection.',
        answer: 'stakeholders',
        hints: [
          'Xem đoạn cuối, phần liệt kê các mục tiêu hiện tại của Recovery Plan.',
          'Tìm "key goals" — mục tiêu cuối cùng là gì?',
          'Nhóm người nào được nhắc đến cần tiếp tục tham gia?'
        ],
        explanation: 'stakeholders — Mục tiêu cuối: <em>"ensure <strong>stakeholders</strong> continue to be fully engaged in the preservation of the species"</em>.'
      }
    ]
  },
  {
    id: 'cam20-t1-p2',
    title: 'Bringing elms back to Britain',
    topic: 'Environment & Science',
    band: '6.5 – 7.5',
    difficulty: 'Advanced',
    source: '📗 Cambridge IELTS 20 — Test 1, Passage 2',
    wordCount: 710,
    estimatedTime: 20,
    text: `<strong>Mark Rowe investigates attempts to reintroduce elms to Britain.</strong>

<strong>A</strong> Around 25 million elms, accounting for 90% of all elm trees in the UK, died during the 1960s and '70s of Dutch elm disease. In the aftermath, the elm, once so dominant in the British landscape, was largely forgotten. However, there's now hope the elm may be reintroduced to the countryside of central and southern England. Any reintroduction will start from a very low base. 'The impact of the disease is difficult to picture if you hadn't seen what was there before,' says Matt Elliot of the Woodland Trust. 'You look at old photographs from the 1960s and it's only then that you realise the impact [elms had] ... They were significant, large trees... then they were gone'.

<strong>B</strong> The disease is caused by a fungus that blocks the elms' vascular (water, nutrient and food transport) system, causing branches to wilt and die. A first epidemic, which occurred in the 1920s, gradually died down, but in the '70s a second epidemic was triggered by shipments of elm from Canada. The wood came in the form of logs destined for boat building and its intact bark was perfect for the elm bark beetles that spread the deadly fungus. This time, the beetles carried a much more virulent strain that destroyed the vast majority of British elms.

<strong>C</strong> Today, elms still exist in the southern English countryside but mostly only in low hedgerows between fields. 'We have millions of small elms in hedgerows but they get targeted by the beetle as soon as they reach a certain size,' says Karen Russell, co-author of the report 'Where we are with elm'. Once the trunk of the elm reaches 10–15 centimetres or so in diameter, it becomes a perfect size for beetles to lay eggs and for the fungus to take hold. Yet mature specimens have been identified, in counties such as Cambridgeshire, that are hundreds of years old, and have mysteriously escaped the epidemic. The key, Russell says, is to identify and study those trees that have survived and work out why they stood tall when millions of others succumbed. Nevertheless, opportunities are limited as the number of these mature survivors is relatively small. 'What are the reasons for their survival?' asks Russell. 'Avoidance, tolerance, resistance? We don't know where the balance lies between the three. I don't see how it can be entirely down to luck'.

<strong>D</strong> For centuries, elm ran a close second to oak as the hardwood tree of choice in Britain and was in many instances the most prominent tree in the landscape. Not only was elm common in European forests, it became a key component of birch, ash and hazel woodlands. The use of elm is thought to go back to the Bronze Age, when it was widely used for tools. Elm was also the preferred material for shields and early swords. In the 18th century, it was planted more widely and its wood was used for items such as storage crates and flooring. It was also suitable for items that experienced high levels of impact and was used to build the keel of the 19th-century sailing ship Cutty Sark as well as mining equipment.

<strong>E</strong> Given how ingrained elm is in British culture, it's unsurprising the tree has many advocates. Amongst them is Peter Bourne of the National Elm Collection in Brighton. 'I saw Dutch elm disease unfold as a small boy,' he says. 'The elm seemed to be part of rural England, but I remember watching trees just lose their leaves and that really stayed with me'. Today, the city of Brighton's elms total about 17,000. Local factors appear to have contributed to their survival. Strong winds from the sea make it difficult for the determined elm bark beetle to attack this coastal city's elm population. However, the situation is precarious. 'The beetles can just march in if we're not careful, as the threat is right on our doorstep,' says Bourne.

<strong>F</strong> Any prospect of the elm returning relies heavily on trees being either resistant to, or tolerant of, the disease. This means a widespread reintroduction would involve existing or new hybrid strains derived from resistant, generally non-native elm species. A new generation of seedlings have been bred and tested to see if they can withstand the fungus by cutting a small slit on the bark and injecting a tiny amount of the pathogen. 'The effects are very quick,' says Russell. 'You return in four to six weeks and trees that are resistant show no symptoms, whereas those that are susceptible show leaf loss and may even have died completely'.

<strong>G</strong> All of this raises questions of social acceptance, acknowledges Russell. 'If we're putting elm back into the landscape, a small element of it is not native – are we bothered about that?' For her, the environmental case for reintroducing elm is strong. 'They will host wildlife, which is a good thing.' Others are more wary. 'On the face of it, it seems like a good idea,' says Elliot. The problem, he suggests, is that, 'You're replacing a native species with a horticultural analogue. You're effectively cloning'. There's also the risk of introducing new diseases. Rather than plant new elms, the Woodland Trust emphasises providing space to those elms that have survived independently. 'Sometimes the best thing you can do is just give nature time to recover over time, you might get resistance,' says Elliot.`,
    questions: [
      {
        id: 1, type: 'mc',
        question: 'Questions 14–18: Which section (A–G) contains the following information?\n\nReference to the research problems that arise from there being only a few surviving large elms.',
        options: ['A. Section A', 'B. Section B', 'C. Section C', 'D. Section D'],
        answer: 'C',
        hints: [
          'Tìm đoạn nói về các cây elm trưởng thành sống sót.',
          'Đoạn nào đề cập đến khó khăn trong nghiên cứu?',
          'Tìm từ "opportunities are limited" hoặc "relatively small".'
        ],
        explanation: 'C — Section C nêu: <em>"opportunities are limited as the number of these mature survivors is relatively small"</em> — vấn đề nghiên cứu do số cây sống sót ít.'
      },
      {
        id: 2, type: 'mc',
        question: 'Which section contains details of a difference of opinion about the value of reintroducing elms to Britain?',
        options: ['A. Section E', 'B. Section F', 'C. Section G', 'D. Section B'],
        answer: 'C',
        hints: [
          'Tìm đoạn có ý kiến trái chiều về việc tái du nhập cây elm.',
          'Đoạn nào có cả quan điểm ủng hộ lẫn phản đối?',
          'Russell và Elliot đồng ý hay bất đồng?'
        ],
        explanation: 'C — Section G thể hiện bất đồng: Russell ủng hộ tái du nhập (<em>"the environmental case is strong"</em>), trong khi Elliot lo ngại (<em>"You\'re replacing a native species"</em>).'
      },
      {
        id: 3, type: 'mc',
        question: 'Which section contains reference to how Dutch elm disease was brought into Britain?',
        options: ['A. Section A', 'B. Section B', 'C. Section C', 'D. Section F'],
        answer: 'B',
        hints: [
          'Tìm đoạn mô tả nguồn gốc dịch bệnh elm lần thứ hai.',
          'Dịch bệnh đến từ đâu và qua phương tiện nào?',
          'Tìm từ "Canada" hoặc "shipments".'
        ],
        explanation: 'B — Section B nêu: <em>"a second epidemic was triggered by shipments of elm from Canada"</em> — dịch bệnh lây lan qua gỗ nhập khẩu từ Canada.'
      },
      {
        id: 4, type: 'mc',
        question: 'Which section contains a description of the conditions that have enabled a location in Britain to escape Dutch elm disease?',
        options: ['A. Section C', 'B. Section D', 'C. Section E', 'D. Section G'],
        answer: 'C',
        hints: [
          'Tìm đoạn đề cập đến một địa điểm cụ thể thoát khỏi dịch bệnh.',
          'Brighton được đề cập ở đoạn nào?',
          'Điều kiện tự nhiên nào đã bảo vệ thành phố này?'
        ],
        explanation: 'C — Section E mô tả Brighton với <em>"Strong winds from the sea make it difficult for the determined elm bark beetle to attack"</em>.'
      },
      {
        id: 5, type: 'mc',
        question: 'Which section contains reference to the stage at which young elms become vulnerable to Dutch elm disease?',
        options: ['A. Section B', 'B. Section C', 'C. Section F', 'D. Section G'],
        answer: 'B',
        hints: [
          'Tìm đoạn nói về kích thước cây elm và sự dễ bị tổn thương.',
          'Đường kính thân cây bao nhiêu thì cây trở nên nguy hiểm?',
          'Tìm số liệu "10–15 centimetres".'
        ],
        explanation: 'B — Section C nêu: <em>"Once the trunk of the elm reaches 10–15 centimetres or so in diameter, it becomes a perfect size for beetles to lay eggs"</em>.'
      },
      {
        id: 6, type: 'mc',
        question: 'Questions 19–23: Match statements with the correct person.\n\n"If a tree gets infected with Dutch elm disease, the damage rapidly becomes visible." — Who said this?',
        options: ['A. Matt Elliot', 'B. Karen Russell', 'C. Peter Bourne', 'D. Richard Henry'],
        answer: 'B',
        hints: [
          'Tìm đoạn mô tả tốc độ biểu hiện của bệnh.',
          'Ai nói về việc kiểm tra cây sau 4–6 tuần?',
          'Section F, ai là người nói về thử nghiệm bệnh?'
        ],
        explanation: 'B — Karen Russell trong Section F: <em>"The effects are very quick... You return in four to six weeks and trees that are resistant show no symptoms"</em>.'
      },
      {
        id: 7, type: 'mc',
        question: '"It may be better to wait and see if the mature elms that have survived continue to flourish." — Who said this?',
        options: ['A. Matt Elliot', 'B. Karen Russell', 'C. Peter Bourne', 'D. Mark Rowe'],
        answer: 'A',
        hints: [
          'Tìm đoạn G, quan điểm về việc để thiên nhiên tự phục hồi.',
          'Ai ủng hộ việc "give nature time to recover"?',
          'Ai từ Woodland Trust đưa ra quan điểm thận trọng?'
        ],
        explanation: 'A — Matt Elliot (Woodland Trust) trong Section G: <em>"Sometimes the best thing you can do is just give nature time to recover over time, you might get resistance"</em>.'
      },
      {
        id: 8, type: 'mc',
        question: 'Questions 24–26: Complete the summary (ONE WORD ONLY).\n\nFor hundreds of years, the only tree more popular in Britain than elm was ___________.',
        options: ['A. ash', 'B. oak', 'C. birch', 'D. hazel'],
        answer: 'B',
        hints: [
          'Xem Section D, câu đầu tiên.',
          'Tìm cây nào đứng số 1 về độ phổ biến ở Anh.',
          'Elm đứng "a close second" sau cây nào?'
        ],
        explanation: 'B — Section D nêu: <em>"elm ran a close second to <strong>oak</strong> as the hardwood tree of choice in Britain"</em>.'
      },
      {
        id: 9, type: 'mc',
        question: '"We need to be aware that insects carrying Dutch elm disease are not very far away." — Who said this?',
        options: ['A. Matt Elliot', 'B. Karen Russell', 'C. Peter Bourne', 'D. Mark Rowe'],
        answer: 'C',
        hints: [
          'Tìm ai nói về mối đe dọa gần kề của bọ cánh cứng.',
          'Đoạn E, ai là người cảnh báo về nguy cơ tấn công?',
          'Tìm cụm từ "right on our doorstep".'
        ],
        explanation: 'C — Peter Bourne trong Section E: <em>"The beetles can just march in if we\'re not careful, as the threat is right on our doorstep"</em>.'
      },
      {
        id: 10, type: 'mc',
        question: '"There must be an explanation for the survival of some mature elms." — Who said this?',
        options: ['A. Matt Elliot', 'B. Karen Russell', 'C. Peter Bourne', 'D. Mark Rowe'],
        answer: 'B',
        hints: [
          'Tìm ai bày tỏ sự ngạc nhiên về cây elm sống sót.',
          'Đoạn C, ai đặt câu hỏi về lý do sống sót?',
          'Tìm câu "I don\'t see how it can be entirely down to luck".'
        ],
        explanation: 'B — Karen Russell trong Section C: <em>"I don\'t see how it can be entirely down to luck"</em> — ngụ ý phải có lý do cụ thể.'
      },
      {
        id: 11, type: 'mc',
        question: '"You understand the effect Dutch elm disease has had when you see evidence of how prominent the tree once was." — Who said this?',
        options: ['A. Matt Elliot', 'B. Karen Russell', 'C. Peter Bourne', 'D. Mark Rowe'],
        answer: 'A',
        hints: [
          'Tìm ai nói về việc nhìn ảnh cũ để hiểu tác động của dịch bệnh.',
          'Đoạn A, ai mô tả cảm xúc khi nhìn lại ảnh từ thập niên 1960?',
          'Tìm cụm từ "old photographs from the 1960s".'
        ],
        explanation: 'A — Matt Elliot trong Section A: <em>"You look at old photographs from the 1960s and it\'s only then that you realise the impact [elms had]"</em>.'
      },
      {
        id: 12, type: 'short',
        question: 'Questions 25–26: Complete the summary. Write ONE WORD ONLY.\n\nIn the 18th century, elm was grown to provide wood for boxes and (25) ___________.',
        answer: 'flooring',
        hints: [
          'Xem Section D, phần nói về công dụng của gỗ elm thế kỷ 18.',
          'Ngoài "storage crates" (hộp), gỗ elm còn dùng để làm gì?',
          'Tìm từ đi cùng "crates and..." trong Section D.'
        ],
        explanation: 'flooring — Section D nêu: <em>"its wood was used for items such as storage crates and <strong>flooring</strong>"</em>.'
      },
      {
        id: 13, type: 'short',
        question: 'Due to its strength, elm was often used for mining equipment and the Cutty Sark\'s (26) ___________ was also constructed from elm.',
        answer: 'keel',
        hints: [
          'Xem Section D, phần nói về tàu Cutty Sark.',
          'Bộ phận nào của tàu Cutty Sark được làm từ gỗ elm?',
          'Tìm từ đi với "the 19th-century sailing ship Cutty Sark".'
        ],
        explanation: 'keel — Section D nêu: <em>"used to build the <strong>keel</strong> of the 19th-century sailing ship Cutty Sark"</em>.'
      }
    ]
  }
];

const SKILL_TYPES = {
  tfng:  { label: 'True / False / Not Given', color: '#3B82F6', icon: '✓✗?' },
  mc:    { label: 'Multiple Choice',           color: '#8B5CF6', icon: '⊙' },
  short: { label: 'Note / Summary Completion', color: '#F59E0B', icon: '✎' }
};
