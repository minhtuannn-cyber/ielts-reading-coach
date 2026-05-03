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
  },

  {
    id: 'biomimicry',
    title: 'Biomimicry: Nature\'s Blueprint for Innovation',
    topic: 'Science & Technology',
    band: '6.5 – 7.5',
    difficulty: 'Advanced',
    wordCount: 498,
    estimatedTime: 20,
    text: `Biomimicry — from the Greek <em>bios</em> (life) and <em>mimesis</em> (to imitate) — is an approach to innovation that seeks sustainable solutions by emulating nature's time-tested strategies. The core idea is that nature has already solved many of the problems humans face: energy generation, clean water, climate control, and durable structures. With 3.8 billion years of research and development behind it, evolution has produced designs of remarkable efficiency.\n\nOne of the most celebrated examples of biomimicry is the Velcro fastener, invented by Swiss engineer George de Mestral in 1941. After a walk in the Alps, de Mestral noticed that cocklebur seeds clung tenaciously to his dog's fur. Examining the seeds under a microscope, he discovered they were covered in tiny hooks that grabbed onto the loop-structured fibres of the coat. This observation inspired the hook-and-loop fastening system now used worldwide in everything from clothing to spacecraft.\n\nMore recently, engineers at Sharklet Technologies developed a surface texture inspired by shark skin. Sharks rarely suffer from algae or barnacle build-up because of a pattern of tiny, diamond-shaped scales called denticles. By replicating this pattern on hospital surfaces and medical devices, Sharklet's material significantly reduces bacterial adhesion without using any chemicals. Clinical studies have shown it reduces the spread of certain pathogens by up to 80%.\n\nArchitecture has also embraced biomimicry. The Eastgate Centre in Harare, Zimbabwe — a shopping centre and office complex designed by architect Mick Pearce — draws inspiration from self-cooling termite mounds. Despite intense African heat, termites maintain their mounds at a constant 31°C by opening and closing ventilation shafts throughout the day. Pearce replicated this principle, designing a building that maintains comfortable temperatures without conventional air conditioning and uses only 10% of the energy required by a comparable conventional building.\n\nTransportation offers another striking example. Japan's Shinkansen bullet train was redesigned by engineer Eiji Nakatsu, an avid birdwatcher, after the train produced a loud sonic boom each time it exited a tunnel. Nakatsu observed that the kingfisher could dive from air into water — two media of very different densities — with minimal disturbance. By reshaping the train's nose to mimic the kingfisher's beak, Nakatsu's team eliminated the sonic boom, reduced energy consumption by 15%, and allowed the train to travel 10% faster.\n\nCritics of biomimicry argue that while the approach yields creative solutions, scaling biological designs to industrial sizes presents significant technical challenges. Spider silk, for instance, is stronger by weight than steel, yet producing it in commercial quantities remains prohibitively expensive. Despite these obstacles, as climate pressures intensify, proponents argue that nature — having already solved the problem of sustainable living — may hold the key to our most urgent challenges.`,
    questions: [
      {
        id: 1, type: 'tfng',
        question: 'George de Mestral was a Swiss engineer who invented the Velcro fastener.',
        answer: 'TRUE',
        hints: [
          'Xem đoạn 2, nơi giới thiệu người phát minh ra Velcro.',
          'Tìm câu có chứa tên "George de Mestral".',
          'Đoạn văn ghi rõ quốc tịch và nghề nghiệp của ông.'
        ],
        explanation: 'TRUE — Đoạn 2 nêu rõ: <em>"invented by Swiss engineer George de Mestral in 1941"</em>.'
      },
      {
        id: 2, type: 'tfng',
        question: 'De Mestral noticed cocklebur seeds clinging to his own clothing after a walk.',
        answer: 'FALSE',
        hints: [
          'Xem đoạn 2, mô tả quan sát của de Mestral sau chuyến đi.',
          'Tìm câu mô tả những gì hạt giống bám vào.',
          'Chú ý sự khác biệt: câu hỏi nói "his clothing" — bài đọc thực sự nói gì?'
        ],
        explanation: 'FALSE — Bài đọc nêu hạt giống bám vào <em>"his dog\'s fur"</em> (lông chó), không phải quần áo của ông.'
      },
      {
        id: 3, type: 'tfng',
        question: 'Sharklet\'s antibacterial surface works by releasing chemical compounds.',
        answer: 'FALSE',
        hints: [
          'Xem đoạn 3, mô tả cách hoạt động của vật liệu Sharklet.',
          'Tìm cụm từ mô tả phương pháp hoạt động của vật liệu này.',
          'Đoạn văn có cụm từ quan trọng: "without using any..."'
        ],
        explanation: 'FALSE — Đoạn 3 nêu rõ vật liệu này <em>"reduces bacterial adhesion without using any chemicals"</em>.'
      },
      {
        id: 4, type: 'tfng',
        question: 'The Eastgate Centre uses 90% less energy than a comparable conventional building.',
        answer: 'TRUE',
        hints: [
          'Xem đoạn 4 về Trung tâm Eastgate ở Harare.',
          'Tìm số liệu phần trăm liên quan đến năng lượng.',
          '"uses only 10% of the energy" có nghĩa là tiết kiệm bao nhiêu phần trăm?'
        ],
        explanation: 'TRUE — Tòa nhà <em>"uses only 10% of the energy required by a comparable conventional building"</em>, tức là ít hơn 90%.'
      },
      {
        id: 5, type: 'tfng',
        question: 'Eiji Nakatsu had previously worked as a professional ornithologist before joining the Shinkansen project.',
        answer: 'NOT GIVEN',
        hints: [
          'Xem đoạn 5 về tàu Shinkansen và Eiji Nakatsu.',
          'Tìm mọi thông tin về nghề nghiệp trước đây của Nakatsu.',
          'Bài đọc gọi ông là "avid birdwatcher" — có nêu gì về công việc trước đó không?'
        ],
        explanation: 'NOT GIVEN — Bài đọc chỉ mô tả Nakatsu là <em>"an avid birdwatcher"</em>, không cung cấp thông tin về công việc trước đây của ông.'
      },
      {
        id: 6, type: 'mc',
        question: 'What was the PRIMARY outcome of redesigning the Shinkansen\'s nose?',
        options: [
          'A. The train could travel 10% faster',
          'B. Energy consumption was reduced by 15%',
          'C. The sonic boom when exiting tunnels was eliminated',
          'D. The train became safer inside tunnels'
        ],
        answer: 'C',
        hints: [
          'Xem đoạn 5, mô tả vấn đề ban đầu với tàu Shinkansen.',
          'Tìm lý do TẠI SAO Nakatsu bắt đầu thiết kế lại mũi tàu.',
          'Vấn đề ban đầu mà ông muốn giải quyết là gì?'
        ],
        explanation: 'C — Mục tiêu ban đầu là loại bỏ tiếng nổ sonic boom: <em>"after the train produced a loud sonic boom each time it exited a tunnel"</em>. Tốc độ và tiết kiệm năng lượng là lợi ích bổ sung.'
      },
      {
        id: 7, type: 'mc',
        question: 'What do critics of biomimicry primarily argue?',
        options: [
          'A. Nature\'s designs are too complex to study effectively',
          'B. Scaling biological solutions to industrial size is technically challenging',
          'C. Biomimicry only applies to the field of architecture',
          'D. Evolutionary pressures make biological designs unsafe'
        ],
        answer: 'B',
        hints: [
          'Xem đoạn cuối, nơi trình bày quan điểm của các nhà phê bình.',
          'Tìm luận điểm chính mà các nhà phê bình đưa ra.',
          'Ví dụ về tơ nhện được dùng để minh họa điều gì?'
        ],
        explanation: 'B — Đoạn cuối nêu: <em>"scaling biological designs to industrial sizes presents significant technical challenges"</em>, ví dụ tơ nhện khó sản xuất với số lượng lớn.'
      }
    ]
  },
  {
    id: 'sleep',
    title: 'The Science Behind Sleep',
    topic: 'Health & Biology',
    band: '6.0 – 7.0',
    difficulty: 'Intermediate–Advanced',
    wordCount: 476,
    estimatedTime: 18,
    text: `Sleep is one of the few universal behaviours shared across the animal kingdom, yet its precise function remained a mystery for much of the twentieth century. Over the past two decades, however, research has revealed that sleep is far from passive downtime — it is a period of intense neurological activity with profound consequences for memory, health, and cognitive performance.\n\nThe human sleep cycle alternates between non-rapid eye movement (NREM) and rapid eye movement (REM) sleep. NREM sleep comprises three stages, the deepest of which — Stage 3, or slow-wave sleep — is characterised by large, synchronised brain waves called delta waves. During this stage, the body primarily repairs tissue, builds muscle, and strengthens the immune system. REM sleep, by contrast, is associated with vivid dreaming and plays a crucial role in emotional regulation and memory consolidation.\n\nResearch at Harvard Medical School demonstrated that sleep deprivation dramatically impairs cognitive performance. In one landmark study, participants who slept only six hours per night for two weeks performed as poorly on cognitive tests as those kept awake for 48 consecutive hours. Critically, the sleep-deprived participants consistently underestimated their own level of impairment — suggesting that fatigue itself blunts our ability to assess our performance accurately.\n\nThe link between sleep and memory is particularly well established. During sleep, the hippocampus — a brain region central to forming new memories — replays the day's experiences and transfers information to the neocortex for long-term storage. This process, known as memory consolidation, explains why students who sleep after studying retain significantly more than those who stay awake. A 2014 study in <em>Nature Neuroscience</em> found that a 90-minute nap after learning could boost memory retention by nearly 20%.\n\nChronobiology, the science of biological rhythms, has highlighted individual differences in sleep timing. People are broadly classified as 'chronotypes': morning types ('larks') or evening types ('owls'). These preferences are largely genetically determined and shift with age — teenagers naturally gravitate toward owl-type schedules, while older adults tend to become larks. Forcing adolescents to attend early morning classes may work against their natural biology; several studies report that later school start times improve academic performance and reduce rates of depression in teenagers.\n\nDespite overwhelming evidence of its importance, sleep remains chronically undervalued. The WHO declared a 'global sleep loss epidemic' in 2019, noting that most industrialised nations sleep below the recommended seven to nine hours per night. Scientists are investigating pharmacological solutions, but most sleep researchers caution that artificial sleep does not fully replicate the restorative stages of the natural sleep cycle. The consensus is clear: adequate sleep is not a luxury but a biological necessity.`,
    questions: [
      {
        id: 1, type: 'tfng',
        question: 'The function of sleep was well understood by scientists before the twentieth century.',
        answer: 'FALSE',
        hints: [
          'Xem câu đầu tiên của đoạn 1.',
          'Tìm cụm từ mô tả mức độ hiểu biết về giấc ngủ trong lịch sử.',
          'Bài đọc nói gì về "the twentieth century" và sự hiểu biết về giấc ngủ?'
        ],
        explanation: 'FALSE — Đoạn 1 nêu: <em>"its precise function remained a mystery for much of the twentieth century"</em> — tức là chưa được hiểu rõ, không phải đã được hiểu.'
      },
      {
        id: 2, type: 'tfng',
        question: 'Stage 3 NREM sleep is the deepest stage of the human sleep cycle.',
        answer: 'TRUE',
        hints: [
          'Xem đoạn 2 mô tả các giai đoạn của chu kỳ ngủ.',
          'Tìm thông tin về "Stage 3" hay "slow-wave sleep".',
          'Từ nào trong đoạn 2 mô tả tính chất của Stage 3?'
        ],
        explanation: 'TRUE — Đoạn 2 mô tả Stage 3 là <em>"the deepest"</em> stage của NREM sleep.'
      },
      {
        id: 3, type: 'tfng',
        question: 'In the Harvard study, sleep-deprived participants were fully aware of how impaired they were.',
        answer: 'FALSE',
        hints: [
          'Xem đoạn 3 về nghiên cứu của Harvard.',
          'Tìm từ/cụm từ mô tả khả năng tự đánh giá của người thiếu ngủ.',
          'Từ "Critically" dẫn đến một phát hiện quan trọng — đó là gì?'
        ],
        explanation: 'FALSE — Đoạn 3 nêu người thiếu ngủ <em>"consistently underestimated their own level of impairment"</em> — họ không nhận ra mình đang bị ảnh hưởng nặng.'
      },
      {
        id: 4, type: 'tfng',
        question: 'Chronotypes are entirely determined by a person\'s lifestyle and daily habits.',
        answer: 'FALSE',
        hints: [
          'Xem đoạn 5 về chronobiology và chronotypes.',
          'Tìm câu giải thích điều gì quyết định chronotype của một người.',
          'Bài đọc dùng từ gì để mô tả nguồn gốc của các chronotype?'
        ],
        explanation: 'FALSE — Đoạn 5 nêu rõ chronotype <em>"are largely genetically determined"</em> (do gene quyết định), không phải thói quen sống.'
      },
      {
        id: 5, type: 'tfng',
        question: 'The RAND Corporation study examined sleep deprivation costs in the United States.',
        answer: 'NOT GIVEN',
        hints: [
          'Xem đoạn cuối, tìm thông tin về RAND Corporation.',
          'Bài đọc có đề cập đến RAND Corporation không?',
          'Kiểm tra cẩn thận — thông tin này có thực sự xuất hiện trong bài đọc không?'
        ],
        explanation: 'NOT GIVEN — Bài đọc này không đề cập đến RAND Corporation hay bất kỳ nghiên cứu nào về chi phí kinh tế của việc thiếu ngủ.'
      },
      {
        id: 6, type: 'mc',
        question: 'What happens in the hippocampus during sleep, according to the passage?',
        options: [
          'A. It generates delta waves to consolidate memory',
          'B. It replays daily experiences and transfers them for long-term storage',
          'C. It produces the chemicals that induce REM sleep',
          'D. It repairs neural tissue damaged during waking hours'
        ],
        answer: 'B',
        hints: [
          'Xem đoạn 4 về mối liên hệ giữa giấc ngủ và trí nhớ.',
          'Tìm câu mô tả hoạt động của hippocampus trong khi ngủ.',
          'Đoạn văn dùng từ "replays" để mô tả điều gì?'
        ],
        explanation: 'B — Đoạn 4 nêu: <em>"the hippocampus replays the day\'s experiences and transfers information to the neocortex for long-term storage"</em>.'
      },
      {
        id: 7, type: 'mc',
        question: 'What is the main concern of sleep researchers regarding pharmacological sleep aids?',
        options: [
          'A. They are too expensive for widespread use',
          'B. They may cause dangerous side effects',
          'C. They do not fully replicate all stages of natural sleep',
          'D. They are not yet approved for clinical use'
        ],
        answer: 'C',
        hints: [
          'Xem đoạn cuối, phần nói về giải pháp dược lý.',
          'Tìm lý do tại sao các nhà nghiên cứu cảnh báo về thuốc ngủ.',
          'Cụm từ "does not fully replicate" có xuất hiện không?'
        ],
        explanation: 'C — Đoạn cuối nêu: <em>"artificial sleep does not fully replicate the restorative stages of the natural sleep cycle"</em>.'
      }
    ]
  },
  {
    id: 'urban-farming',
    title: 'Urban Farming: Growing Up',
    topic: 'Environment & Society',
    band: '5.5 – 6.5',
    difficulty: 'Intermediate',
    wordCount: 442,
    estimatedTime: 16,
    text: `As cities around the world continue to expand, a quiet agricultural revolution is taking place on rooftops, in warehouses, and along the walls of urban buildings. Urban farming — the practice of growing food within city boundaries — is gaining momentum as residents, entrepreneurs, and city planners seek to address food security, reduce carbon emissions, and reconnect communities with their food supply.\n\nThe concept is not entirely new. Throughout history, city dwellers have grown food in gardens, parks, and communal spaces. However, modern urban farming has taken on greater technological sophistication. Vertical farms stack crops in layers under artificial lighting, using hydroponics — growing plants in nutrient-rich water rather than soil — or aeroponics, where plant roots are suspended in mist. These systems can produce yields up to ten times greater per square metre than traditional field agriculture, while using up to 95% less water.\n\nNew York City is home to one of the world's largest rooftop farms, Brooklyn Grange, which spans two sites totalling 5.6 acres. The farm produces over 100,000 pounds of organic vegetables annually, supplies local restaurants and farmers' markets, and runs educational workshops for schoolchildren. Its founders argue that urban farms meaningfully reduce 'food miles' — the distance food travels from farm to table — thereby lowering the carbon footprint of food transport.\n\nHowever, urban farming faces significant economic challenges. The cost of establishing a vertical farm, including infrastructure, lighting, and climate control, is substantially higher than conventional farming. Critics point out that while urban farms may be more productive per square metre, the energy demands of artificial lighting often offset environmental savings. A 2022 report by Cornell University found that some indoor-grown crops have a higher carbon footprint than field-grown equivalents when electricity comes from non-renewable sources.\n\nProponents counter that as renewable energy becomes cheaper, the environmental case for vertical farming will strengthen. They also argue that urban farms deliver benefits that conventional metrics fail to capture: green spaces that improve air quality, social programmes that reduce urban isolation, and hands-on education that reconnects children with food production.\n\nWhether urban farming becomes a mainstream component of the global food system or remains a niche supplement to conventional agriculture is still uncertain. What is clear is that growing food in cities is no longer merely a hobby — it has become a serious industry attracting significant investment and policy attention worldwide.`,
    questions: [
      {
        id: 1, type: 'tfng',
        question: 'Urban farming is an entirely new concept that first emerged in the 21st century.',
        answer: 'FALSE',
        hints: [
          'Xem đoạn 2, câu đầu tiên.',
          'Bài đọc có nói rằng ý tưởng trồng rau trong thành phố là hoàn toàn mới không?',
          'Tìm cụm từ "not entirely new" hoặc tương tự.'
        ],
        explanation: 'FALSE — Đoạn 2 nêu rõ: <em>"The concept is not entirely new. Throughout history, city dwellers have grown food..."</em>'
      },
      {
        id: 2, type: 'tfng',
        question: 'In hydroponic systems, plant roots are suspended in nutrient-rich mist.',
        answer: 'FALSE',
        hints: [
          'Xem đoạn 2, phần giải thích hydroponics và aeroponics.',
          'Tìm định nghĩa của từng phương pháp.',
          'Câu hỏi mô tả hydroponics hay aeroponics?'
        ],
        explanation: 'FALSE — Đó là mô tả của <em>aeroponics</em>. Hydroponics là <em>"growing plants in nutrient-rich water"</em> (nước giàu dinh dưỡng), không phải sương mù.'
      },
      {
        id: 3, type: 'tfng',
        question: 'Brooklyn Grange supplies organic vegetables directly to local schools.',
        answer: 'NOT GIVEN',
        hints: [
          'Xem đoạn 3 về Brooklyn Grange.',
          'Liệt kê tất cả những gì Brooklyn Grange làm theo bài đọc.',
          'Bài đọc có nói về việc cung cấp thực phẩm cho trường học không?'
        ],
        explanation: 'NOT GIVEN — Bài đọc nêu Brooklyn Grange cung cấp cho <em>"local restaurants and farmers\' markets"</em> và tổ chức hội thảo giáo dục, nhưng không đề cập đến việc cung cấp thực phẩm cho trường học.'
      },
      {
        id: 4, type: 'tfng',
        question: 'According to a 2022 Cornell University report, some indoor crops may have greater emissions than field-grown ones.',
        answer: 'TRUE',
        hints: [
          'Xem đoạn 4, phần đề cập đến báo cáo của Cornell University.',
          'Tìm kết quả chính của báo cáo năm 2022.',
          'Điều kiện nào khiến cây trồng trong nhà có carbon footprint cao hơn?'
        ],
        explanation: 'TRUE — Đoạn 4 nêu: <em>"some indoor-grown crops have a higher carbon footprint than field-grown equivalents when electricity comes from non-renewable sources"</em>.'
      },
      {
        id: 5, type: 'mc',
        question: 'What advantage of vertical farming is specifically mentioned in the passage?',
        options: [
          'A. Lower initial setup costs than traditional farming',
          'B. Yields up to ten times greater per square metre',
          'C. Complete elimination of carbon emissions',
          'D. Ability to grow crops in any climate without lighting'
        ],
        answer: 'B',
        hints: [
          'Xem đoạn 2, nơi mô tả ưu điểm của vertical farms.',
          'Tìm số liệu cụ thể được đề cập trong đoạn này.',
          'Cụm từ "ten times" xuất hiện ở đâu?'
        ],
        explanation: 'B — Đoạn 2 nêu: <em>"can produce yields up to ten times greater per square metre than traditional field agriculture"</em>.'
      },
      {
        id: 6, type: 'mc',
        question: 'Which of the following is given as a non-economic benefit of urban farming by its supporters?',
        options: [
          'A. Reducing the cost of organic food for consumers',
          'B. Replacing conventional agriculture entirely',
          'C. Social programmes that reduce urban isolation',
          'D. Eliminating the need for food imports'
        ],
        answer: 'C',
        hints: [
          'Xem đoạn 5, nơi những người ủng hộ trình bày lợi ích của urban farming.',
          'Tìm những lợi ích được mô tả là nằm ngoài các thước đo thông thường.',
          'Đoạn văn đề cập đến "social programmes" như thế nào?'
        ],
        explanation: 'C — Đoạn 5 liệt kê các lợi ích bổ sung: <em>"social programmes that reduce urban isolation"</em> là một trong số đó.'
      }
    ]
  }
];

const SKILL_TYPES = {
  tfng:  { label: 'True / False / Not Given', color: '#3B82F6', icon: '✓✗?' },
  mc:    { label: 'Multiple Choice',           color: '#8B5CF6', icon: '⊙' },
  short: { label: 'Note / Summary Completion', color: '#F59E0B', icon: '✎' }
};
