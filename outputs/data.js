const HISTORY_DATA = {
  years: [1453, 1500, 1879, 1914],
  yearCapsules: createYearCapsules(),
  lenses: createLenses(),
  lensTracks: createLensTracks(),
  lineageNodes: createLineageNodes(),
  sources: createSources(),
  macroAreas: createMacroAreas(),
  places: createPlaces(),
  regionSnapshots: createRegionSnapshots(),
  regionPhases: createRegionPhases(),
  regionLineages: createRegionLineages(),
  connections: [],
  categoryAliases: {
    "War": "war-military",
    "Military": "war-military",
    "Politics": "state-empire",
    "Empire": "state-empire",
    "Economy": "economy-trade",
    "Trade": "economy-trade",
    "Religion": "religion-belief",
    "Belief": "religion-belief",
    "Science": "science-technology",
    "Technology": "science-technology",
    "Art": "art",
    "Literature": "literature",
    "Fashion": "fashion-daily-life",
    "Daily Life": "fashion-daily-life",
    "Entertainment": "entertainment-media",
    "Media": "entertainment-media",
    "Disaster": "disaster-climate",
    "Climate": "disaster-climate",
    "Architecture": "architecture"
  },
  categories: [
    "All",
    "War / Military",
    "State / Empire",
    "Economy / Trade",
    "Religion / Belief",
    "Science / Technology",
    "Art",
    "Literature",
    "Fashion / Daily Life",
    "Entertainment / Media",
    "Disaster / Climate",
    "Architecture"
  ],
  bridgeOverview: [
    "Trade Routes",
    "Empire Power",
    "Knowledge Migration",
    "Trauma",
    "Patronage",
    "Technology Diffusion",
    "Climate Pressure",
    "State Power",
    "Industrial Power",
    "Gender Roles",
    "Religion / Orthodox World",
    "Global Silver / Ming Economy"
  ],
  regions: [
    { id: "Europe", label: "Europe", x: 42, y: 23, w: 19, h: 19 },
    { id: "Middle East", label: "Middle East", x: 56, y: 41, w: 17, h: 15 },
    { id: "Africa", label: "Africa", x: 43, y: 53, w: 21, h: 24 },
    { id: "India", label: "India", x: 68, y: 52, w: 12, h: 13 },
    { id: "China", label: "China", x: 78, y: 34, w: 17, h: 17 },
    { id: "Japan", label: "Japan", x: 91, y: 29, w: 8, h: 13 },
    { id: "Americas", label: "Americas", x: 7, y: 32, w: 24, h: 36 }
  ],
  snapshots: {
    1453: [
      { region: "China", period: "Ming Dynasty", summary: "The Ming state governed a large agrarian empire with growing commercial complexity." },
      { region: "Japan", period: "Muromachi period", summary: "Ashikaga rule shaped court culture while regional warrior power continued to rise." },
      { region: "Korea", period: "Joseon Dynasty", summary: "Joseon consolidated Confucian institutions and state scholarship." },
      { region: "Middle East", period: "Ottoman Empire rising", summary: "Ottoman power expanded from Anatolia into a major imperial force." },
      { region: "Europe", period: "Late Middle Ages / early Renaissance transition", summary: "European polities entered a transitional age of war, commerce, and humanist learning." },
      { region: "Americas", period: "Aztec and Inca civilizations", summary: "Large Indigenous empires developed sophisticated urban, political, and ritual systems." },
      { region: "Africa", period: "Mali declining / Songhai rising", summary: "West African power shifted as Songhai expanded along trans-Saharan trade networks." }
    ],
    1879: [
      { region: "China", period: "Qing Dynasty, Guangxu period", summary: "Qing China faced internal reform pressures and foreign imperial encroachment." },
      { region: "Japan", period: "Meiji Era", summary: "Japan accelerated industrial, military, and institutional modernization." },
      { region: "India", period: "British Raj", summary: "India was governed under British imperial administration with expanding rail and bureaucratic systems." },
      { region: "Europe", period: "Second Industrial Revolution / imperial powers", summary: "European industry, finance, and empire intensified through electricity, steel, and chemicals." },
      { region: "Middle East", period: "Late Ottoman Empire", summary: "The Ottoman state navigated reform, debt, and great-power pressure." },
      { region: "Americas", period: "United States Gilded Age", summary: "The United States experienced rapid industrial growth, urbanization, and inequality." }
    ],
    1914: [
      { region: "China", period: "early Republic of China", summary: "China's young republic struggled with regional power and constitutional instability." },
      { region: "Japan", period: "Taisho era", summary: "Japan balanced party politics, imperial ambitions, and modern mass culture." },
      { region: "Europe", period: "World War I begins", summary: "Alliance systems, nationalism, and imperial rivalries turned crisis into continental war." },
      { region: "Middle East", period: "Late Ottoman Empire", summary: "The Ottoman Empire entered a final wartime phase that would reshape the region." },
      { region: "India", period: "British Raj", summary: "India contributed soldiers, labor, and resources to the British war effort." },
      { region: "Americas", period: "United States Progressive Era", summary: "The United States remained formally neutral while reform politics continued at home." }
    ]
  },
  events: [
    {
      id: "fall-constantinople",
      year: 1453,
      title: "Fall of Constantinople",
      region: "Europe",
      place: "Constantinople / Eastern Mediterranean",
      categories: ["War", "Empire", "Politics", "Religion", "Economy"],
      summary: "Ottoman forces captured Constantinople, ending the Byzantine Empire and changing eastern Mediterranean power, trade, and learning networks."
    },
    {
      id: "edison-light-bulb",
      year: 1879,
      title: "Edison practical incandescent light bulb",
      region: "Americas",
      place: "Menlo Park / United States",
      categories: ["Technology", "Science", "Economy", "Entertainment"],
      summary: "Edison's practical incandescent lamp became part of a broader electrical system for lighting, distribution, and urban infrastructure."
    },
    {
      id: "world-war-i",
      year: 1914,
      title: "World War I begins",
      region: "Europe",
      place: "Europe / global imperial networks",
      categories: ["War", "Politics", "Empire", "Literature", "Fashion", "Economy"],
      summary: "A European crisis escalated into global war through alliances, mobilization, imperial commitments, and mass politics."
    },
    {
      id: "altair-8800",
      year: 1975,
      title: "Altair 8800 sparks hobbyist microcomputing",
      region: "Americas",
      place: "United States",
      categories: ["Technology", "Science", "Economy"],
      trackIds: ["computing-pc"],
      summary: "The Altair 8800 helped popularize microcomputer kits and hobbyist computing communities.",
      titleZh: "Altair 8800 推动爱好者微型计算机文化",
      summaryZh: "Altair 8800 帮助微型计算机套件和爱好者计算社群进入更广泛的视野。",
      sources: ["britannica", "wikidata"]
    },
    {
      id: "apple-ii",
      year: 1977,
      title: "Apple II enters the personal computer market",
      region: "Americas",
      place: "United States",
      categories: ["Technology", "Economy", "Entertainment"],
      trackIds: ["computing-pc"],
      summary: "The Apple II became one of the early successful personal computer platforms for homes, schools, and small businesses.",
      titleZh: "Apple II 进入个人电脑市场",
      summaryZh: "Apple II 成为早期成功的个人电脑平台之一，进入家庭、学校和小型商业场景。",
      sources: ["britannica", "wikidata"]
    },
    {
      id: "ibm-pc",
      year: 1981,
      title: "IBM PC standardizes a mass-market platform",
      region: "Americas",
      place: "United States",
      categories: ["Technology", "Economy"],
      trackIds: ["computing-pc"],
      summary: "The IBM PC helped establish a widely copied personal computer platform for business and consumer markets.",
      titleZh: "IBM PC 标准化大众市场平台",
      summaryZh: "IBM PC 帮助确立了被广泛复制的个人电脑平台，影响商业与消费市场。",
      sources: ["britannica", "wikidata"]
    },
    {
      id: "macintosh",
      year: 1984,
      title: "Macintosh popularizes graphical personal computing",
      region: "Americas",
      place: "United States",
      categories: ["Technology", "Entertainment", "Art"],
      trackIds: ["computing-pc"],
      summary: "The Macintosh brought graphical user interfaces and desktop publishing ideas to a wider personal computing audience.",
      titleZh: "Macintosh 推广图形化个人计算",
      summaryZh: "Macintosh 将图形用户界面和桌面出版观念带给更广泛的个人计算用户。",
      sources: ["britannica", "wikidata"]
    },
    {
      id: "arpanet-first-nodes",
      year: 1969,
      title: "ARPANET first nodes connect",
      region: "Americas",
      place: "United States",
      categories: ["Technology", "Science", "Military"],
      trackIds: ["networks-internet"],
      summary: "Early ARPANET nodes demonstrated networked computer communication in a research and defense context.",
      titleZh: "ARPANET 首批节点连接",
      summaryZh: "早期 ARPANET 节点在研究与国防语境中展示了计算机网络通信。",
      sources: ["britannica", "wikidata"]
    },
    {
      id: "tcp-ip-transition",
      year: 1983,
      title: "TCP/IP becomes the ARPANET standard",
      region: "Americas",
      place: "United States / research networks",
      categories: ["Technology", "Science"],
      trackIds: ["networks-internet"],
      summary: "The TCP/IP transition helped make separately developed networks interoperable through shared protocols.",
      titleZh: "TCP/IP 成为 ARPANET 标准",
      summaryZh: "TCP/IP 转换通过共享协议帮助不同网络实现互操作。",
      sources: ["britannica", "wikidata"]
    },
    {
      id: "world-wide-web-proposal",
      year: 1989,
      title: "World Wide Web proposal",
      region: "Europe",
      place: "CERN / Switzerland",
      categories: ["Technology", "Science", "Media"],
      trackIds: ["networks-internet"],
      summary: "Tim Berners-Lee proposed a linked information system that became the World Wide Web.",
      titleZh: "万维网提案",
      summaryZh: "Tim Berners-Lee 提出一种链接式信息系统，后来发展为万维网。",
      sources: ["britannica", "wikidata"]
    },
    {
      id: "world-wide-web-public",
      year: 1991,
      title: "World Wide Web opens publicly",
      region: "Europe",
      place: "CERN / global internet",
      categories: ["Technology", "Science", "Media"],
      trackIds: ["networks-internet"],
      summary: "The Web became publicly accessible, giving the internet a linked publishing layer for broader use.",
      titleZh: "万维网开放公众使用",
      summaryZh: "万维网开始公开可用，为互联网提供了面向大众的链接出版层。",
      sources: ["britannica", "wikidata"]
    }
  ],
  connectionPaths: [
    {
      id: "trade-route-bridge",
      eventId: "fall-constantinople",
      bridge: "Trade Routes",
      title: "Trade Route Bridge",
      explanation: "Mediterranean pressure helped redirect European ambition toward oceanic routes and new global trade circuits.",
      categories: ["Economy", "Empire", "Technology"],
      nodes: [
        { id: "n-fall", year: "1453", title: "Fall of Constantinople", region: "Europe / Middle East", place: "Constantinople / Eastern Mediterranean", categories: ["War", "Empire", "Religion", "Economy"], summary: "Ottoman capture of the city ended the Byzantine Empire and shifted control over a strategic eastern Mediterranean gateway.", whyMatters: "This is the pressure point: one city changes trade anxieties, imperial geography, and religious imagination at once." },
        { id: "n-sea-routes", year: "late 15th c.", title: "European search for sea routes", region: "Europe", place: "Portuguese and Spanish Atlantic courts", categories: ["Economy", "Technology", "Empire"], summary: "Atlantic monarchies backed maritime projects that sought new access to Asian goods and trading partners.", whyMatters: "The thread turns from a Mediterranean shock into Atlantic experimentation." },
        { id: "n-columbus", year: "1492", title: "Columbus reaches the Americas", region: "Americas / Europe", place: "Caribbean / Spanish Atlantic", categories: ["Empire", "Economy"], summary: "Atlantic voyaging connected Europe and the Americas in violent new imperial and commercial networks.", whyMatters: "This is where route-seeking becomes a new oceanic world system." },
        { id: "n-global-silver", year: "16th-17th c.", title: "Global silver trade", region: "Americas / Europe / China", place: "Potosi, Mexico, Manila, Ming China", categories: ["Economy", "Empire"], summary: "Silver from the Americas entered global trade networks linking Atlantic extraction, Pacific shipping, and Asian markets.", whyMatters: "This is where Atlantic colonization becomes connected to East Asian monetary history." },
        { id: "n-ming-silver", year: "16th-17th c.", title: "Ming China silver economy", region: "China", place: "Ming China", categories: ["Economy", "Politics"], summary: "Taxation and commerce became increasingly tied to silver flows from global trade.", whyMatters: "The endpoint shows the long reach of the 1453 story: a Mediterranean event eventually touches Chinese fiscal life." }
      ],
      edges: [
        { from: "n-fall", to: "n-sea-routes", label: "through trade-route pressure", mechanism: "trade-route pressure", type: "influenced", strength: "indirect", explanation: "Ottoman control sharpened European concern over eastern access.", detailExplanation: "The fall of Constantinople did not single-handedly cause oceanic exploration, but it made control over eastern Mediterranean routes feel more politically urgent. That pressure interacted with older commercial ambitions, Atlantic navigation, and royal patronage." },
        { from: "n-sea-routes", to: "n-columbus", label: "through Atlantic experimentation", mechanism: "maritime experimentation", type: "enabled", strength: "strong", explanation: "Route competition made Atlantic voyages worth funding.", detailExplanation: "Portuguese and Spanish courts were already testing Atlantic routes, ships, maps, and financial models. The search for access to Asian trade made risky westward voyages legible as strategy rather than mere adventure." },
        { from: "n-columbus", to: "n-global-silver", label: "through colonial extraction", mechanism: "colonial extraction", type: "led to", strength: "strong", explanation: "Conquest turned American resources into global bullion flows.", detailExplanation: "Columbus's voyages opened the way for Spanish conquest and colonization. Mines, coerced labor, and imperial finance transformed American silver into a global medium moving through Atlantic and Pacific circuits." },
        { from: "n-global-silver", to: "n-ming-silver", label: "through global demand", mechanism: "Atlantic silver flows", type: "influenced", strength: "strong", explanation: "Chinese silver demand pulled American bullion into East Asian markets.", detailExplanation: "Ming fiscal reforms and commercial demand made silver increasingly important inside China. American silver moved through Europe, Manila, and Asian trade networks, tying Chinese monetary history to Atlantic colonization." }
      ]
    },
    {
      id: "knowledge-migration-bridge",
      eventId: "fall-constantinople",
      bridge: "Knowledge Migration",
      title: "Knowledge Migration Bridge",
      explanation: "Scholars, manuscripts, and language expertise moved into Italian humanist circles.",
      categories: ["Art", "Literature", "Religion"],
      nodes: [
        { id: "n-fall", year: "1453", title: "Fall of Constantinople", region: "Europe / Middle East", place: "Constantinople / Eastern Mediterranean", categories: ["War", "Empire", "Religion", "Economy"], summary: "The city's fall accelerated movement of people and texts already circulating around the Mediterranean.", whyMatters: "The same event that shifts power also moves knowledge, languages, and manuscripts." },
        { id: "n-greek-scholars", year: "mid-15th c.", title: "Greek scholars in Italy", region: "Europe", place: "Florence, Venice, Rome", categories: ["Literature", "Religion"], summary: "Greek-speaking scholars and manuscripts supported renewed study of ancient texts.", whyMatters: "Human carriers make the bridge visible: texts move because people move." },
        { id: "n-humanism", year: "15th-16th c.", title: "Renaissance humanism", region: "Europe", place: "Italian city-states", categories: ["Art", "Literature", "Religion"], summary: "Humanist learning emphasized classical sources, rhetoric, philology, and new forms of artistic patronage.", whyMatters: "The migration of knowledge becomes a new intellectual style and educational program." },
        { id: "n-printed-classics", year: "late 15th-16th c.", title: "Printed classical texts and humanist learning", region: "Europe", place: "Venice, Basel, Paris, university towns", categories: ["Literature", "Technology", "Art"], summary: "Printing helped classical and humanist texts circulate through schools, libraries, and scholarly networks.", whyMatters: "The thread ends with scale: manuscripts and scholars become reproducible learning networks." }
      ],
      edges: [
        { from: "n-fall", to: "n-greek-scholars", label: "through knowledge migration", mechanism: "knowledge migration", type: "contributed to", strength: "medium", explanation: "Scholars and manuscripts moved into Italian centers.", detailExplanation: "The fall intensified a longer pattern of scholarly movement from the Greek-speaking eastern Mediterranean into Italy. Refugees, diplomats, teachers, and manuscript collectors helped concentrate Greek expertise in humanist circles." },
        { from: "n-greek-scholars", to: "n-humanism", label: "through classical texts", mechanism: "textual transmission", type: "enabled", strength: "medium", explanation: "Greek expertise strengthened humanist classical study.", detailExplanation: "Greek scholars brought language skills and texts that expanded what Italian humanists could read, translate, teach, and imitate. The result was not a simple cause, but a real strengthening of Renaissance humanist learning." },
        { from: "n-humanism", to: "n-printed-classics", label: "through print circulation", mechanism: "printing and pedagogy", type: "enabled", strength: "strong", explanation: "Print made humanist texts travel farther and faster.", detailExplanation: "Humanist demand for edited classical texts met the new capacity of print. Printers, schools, and scholars turned elite manuscript culture into a wider European infrastructure for learning." }
      ]
    },
    {
      id: "empire-power-bridge",
      eventId: "fall-constantinople",
      bridge: "Empire Power",
      title: "Empire Power Bridge",
      explanation: "The capture of the city anchored Ottoman imperial expansion and sharpened rivalry in central Europe.",
      categories: ["Empire", "War", "Politics"],
      nodes: [
        { id: "n-fall", year: "1453", title: "Fall of Constantinople", region: "Europe / Middle East", place: "Constantinople / Eastern Mediterranean", categories: ["War", "Empire"], summary: "The Byzantine capital became an Ottoman imperial capital.", whyMatters: "The city becomes a platform for imperial legitimacy, administration, and projection." },
        { id: "n-ottoman-expansion", year: "15th-16th c.", title: "Ottoman expansion", region: "Middle East / Europe", place: "Anatolia, Balkans, eastern Mediterranean", categories: ["Empire", "War"], summary: "Ottoman power expanded through military organization, administration, and strategic geography.", whyMatters: "The thread moves from conquest of a city to consolidation of a transregional empire." },
        { id: "n-habsburg-rivalry", year: "16th-17th c.", title: "Ottoman-Habsburg rivalry", region: "Europe", place: "Central Europe and Mediterranean frontiers", categories: ["Empire", "War", "Politics"], summary: "Ottoman and Habsburg power contested borders, legitimacy, and trade routes.", whyMatters: "This turns Ottoman expansion into a long-running European power structure." },
        { id: "n-med-power-shift", year: "16th c.", title: "Mediterranean power shift", region: "Europe / Middle East", place: "Eastern Mediterranean, Balkans, Venice, Vienna", categories: ["Empire", "War", "Economy"], summary: "Ottoman, Habsburg, Venetian, and other powers adjusted to a Mediterranean shaped by new imperial pressure.", whyMatters: "The endpoint shows that 1453 reorganized a whole regional balance, not just one capital city." }
      ],
      edges: [
        { from: "n-fall", to: "n-ottoman-expansion", label: "through imperial capital", mechanism: "imperial consolidation", type: "enabled", strength: "strong", explanation: "The city strengthened Ottoman imperial capacity.", detailExplanation: "Control of Constantinople gave the Ottomans a symbolic capital, a strategic strait, and administrative depth. It helped turn a conquest frontier into a durable imperial center." },
        { from: "n-ottoman-expansion", to: "n-habsburg-rivalry", label: "through imperial rivalry", mechanism: "frontier militarization", type: "led to", strength: "strong", explanation: "Expansion created recurring confrontation with Habsburg power.", detailExplanation: "Ottoman movement into the Balkans and central Europe pressed against Habsburg ambitions. The result was a recurring pattern of war, diplomacy, fortress building, and claims to universal rule." },
        { from: "n-habsburg-rivalry", to: "n-med-power-shift", label: "through Mediterranean contest", mechanism: "imperial rivalry", type: "contributed to", strength: "medium", explanation: "Rivalry reshaped diplomacy, trade, and naval strategy.", detailExplanation: "The Ottoman-Habsburg rivalry affected the wider Mediterranean world by changing military priorities, diplomatic alliances, commercial anxieties, and the strategic roles of Venice, Vienna, and eastern Mediterranean ports." }
      ]
    },
    {
      id: "orthodox-world-bridge",
      eventId: "fall-constantinople",
      bridge: "Religion / Orthodox World",
      title: "Religion / Orthodox World Bridge",
      explanation: "The fall changed the symbolic geography of Eastern Orthodox Christianity and political identity.",
      categories: ["Religion", "Politics", "Empire"],
      nodes: [
        { id: "n-fall", year: "1453", title: "Fall of Constantinople", region: "Europe / Middle East", place: "Constantinople / Eastern Mediterranean", categories: ["War", "Empire", "Religion"], summary: "The old Byzantine capital and seat of the Ecumenical Patriarch came under Ottoman rule.", whyMatters: "This is a religious rupture as well as a military and imperial event." },
        { id: "n-orthodox-center", year: "late 15th c.", title: "Shift of Orthodox Christian center", region: "Europe", place: "Constantinople, Balkan lands, Muscovy", categories: ["Religion", "Politics"], summary: "Orthodox communities adjusted to a world where Constantinople remained sacred but no longer ruled by a Christian emperor.", whyMatters: "The thread follows authority after the loss of its old imperial home." },
        { id: "n-third-rome", year: "late 15th-16th c.", title: "Moscow Third Rome idea", region: "Europe", place: "Moscow / Muscovy", categories: ["Religion", "Politics", "Empire"], summary: "Muscovite writers and rulers used the idea of Moscow as a successor center of Orthodox legitimacy.", whyMatters: "A symbolic claim turns religious memory into political identity." },
        { id: "n-orthodox-identity", year: "16th c. onward", title: "Eastern Orthodox political identity", region: "Europe", place: "Muscovy, Balkans, Orthodox communities", categories: ["Religion", "Politics"], summary: "Orthodox identity became entangled with rulership, memory of Byzantium, and claims to protection or succession.", whyMatters: "The endpoint shows how 1453 echoes in political-religious imagination long after the siege." }
      ],
      edges: [
        { from: "n-fall", to: "n-orthodox-center", label: "through sacred displacement", mechanism: "religious center shift", type: "led to", strength: "strong", explanation: "The Orthodox world had to reinterpret authority after 1453.", detailExplanation: "Constantinople remained central to Orthodox memory and hierarchy, but Ottoman rule changed the political frame. Communities had to separate sacred prestige from Byzantine imperial power." },
        { from: "n-orthodox-center", to: "n-third-rome", label: "through succession claims", mechanism: "religious-political succession", type: "contributed to", strength: "medium", explanation: "Moscow used Byzantine loss to imagine a new role.", detailExplanation: "Muscovite claims did not simply replace Constantinople, but the loss of Byzantine imperial rule gave Moscow's rulers and writers a powerful language of Orthodox succession and protection." },
        { from: "n-third-rome", to: "n-orthodox-identity", label: "through political theology", mechanism: "political theology", type: "influenced", strength: "medium", explanation: "Succession language shaped Orthodox political identity.", detailExplanation: "The Third Rome idea linked sacred history, rulership, and Orthodox legitimacy. It helped make religious identity part of a broader political imagination in eastern Europe." }
      ]
    },
    {
      id: "global-silver-ming-bridge",
      eventId: "fall-constantinople",
      bridge: "Global Silver / Ming Economy",
      title: "Global Silver / Ming Economy Bridge",
      explanation: "Atlantic colonization and silver extraction connected the Americas to East Asian monetary history.",
      categories: ["Economy", "Empire", "Politics"],
      nodes: [
        { id: "n-columbus", year: "1492", title: "Columbus reaches the Americas", region: "Americas / Europe", place: "Caribbean / Spanish Atlantic", categories: ["Empire", "Economy"], summary: "Atlantic voyaging connected Europe and the Americas in violent new imperial and commercial networks.", whyMatters: "This is the gateway from route-seeking to colonization." },
        { id: "n-atlantic-colonization", year: "16th c.", title: "Atlantic colonization", region: "Americas / Europe", place: "Caribbean, Mexico, Andes, Iberian Atlantic", categories: ["Empire", "Economy", "War"], summary: "Spanish and Portuguese imperial projects reorganized land, labor, trade, and extraction across the Atlantic.", whyMatters: "Colonial rule creates the political machinery that makes silver extraction global." },
        { id: "n-spanish-silver", year: "16th c.", title: "Spanish silver mining", region: "Americas", place: "Potosi and Zacatecas", categories: ["Economy", "Empire"], summary: "Major American silver mines became central to Spanish imperial finance and global trade.", whyMatters: "The thread becomes material here: silver is mined, taxed, shipped, and monetized." },
        { id: "n-global-silver", year: "16th-17th c.", title: "Global silver trade", region: "Americas / Europe / China", place: "Atlantic routes, Manila galleons, Asian markets", categories: ["Economy", "Empire"], summary: "Silver moved through Atlantic and Pacific circuits into Europe, the Ottoman world, and Asia.", whyMatters: "This is the connective tissue between American extraction and Chinese markets." },
        { id: "n-ming-silver", year: "16th-17th c.", title: "Ming China silver economy", region: "China", place: "Ming China", categories: ["Economy", "Politics"], summary: "Ming taxation and commerce became increasingly tied to silver availability.", whyMatters: "The final node makes the global connection explicit: East Asian monetary history is linked to Atlantic empire." }
      ],
      edges: [
        { from: "n-columbus", to: "n-atlantic-colonization", label: "through imperial conquest", mechanism: "Atlantic colonization", type: "led to", strength: "strong", explanation: "Voyaging opened the way for conquest and colonial systems.", detailExplanation: "Columbus's voyages became part of a broader Spanish and Portuguese imperial expansion. Conquest, settlement, forced conversion, and coerced labor reshaped the Atlantic world." },
        { from: "n-atlantic-colonization", to: "n-spanish-silver", label: "through extractive empire", mechanism: "extractive colonial labor", type: "enabled", strength: "strong", explanation: "Colonial rule organized labor and mining around silver.", detailExplanation: "Silver mining depended on imperial control, labor coercion, taxation, and transport systems. It was not just a resource story; it was an institutional and human story of extraction." },
        { from: "n-spanish-silver", to: "n-global-silver", label: "through bullion circulation", mechanism: "Atlantic silver flows", type: "led to", strength: "strong", explanation: "Mined silver entered Atlantic and Pacific circuits.", detailExplanation: "Spanish silver financed empire, paid debts, moved through merchants, and crossed the Pacific through Manila. It became one of the first truly global monetary connectors." },
        { from: "n-global-silver", to: "n-ming-silver", label: "through Ming demand", mechanism: "silver monetization", type: "influenced", strength: "strong", explanation: "Ming demand pulled global silver into Chinese commerce.", detailExplanation: "Chinese tax reforms and market activity increased demand for silver. That demand helped draw American silver into East Asian circulation and linked Ming fiscal life to global extraction." }
      ]
    },
    {
      id: "technology-diffusion-light",
      eventId: "edison-light-bulb",
      bridge: "Technology Diffusion",
      title: "Technology Diffusion",
      explanation: "A device became transformative once paired with systems, grids, business models, and urban adoption.",
      categories: ["Technology", "Science", "Entertainment"],
      nodes: [
        { id: "n-bulb", year: "1879", title: "Practical incandescent light bulb", region: "Americas", place: "Menlo Park / United States", categories: ["Technology", "Science"], summary: "The lamp was designed as part of a usable electrical lighting system." },
        { id: "n-lighting-systems", year: "1880s", title: "Electric lighting systems", region: "Americas", place: "New York and other cities", categories: ["Technology", "Economy"], summary: "Generation, wiring, meters, and business infrastructure made electric light scalable." },
        { id: "n-urban-electrification", year: "1880s-1900s", title: "Urban electrification", region: "Europe", place: "Industrial cities", categories: ["Technology", "Economy"], summary: "Cities adopted electric networks that altered streets, transit, industry, and domestic life." },
        { id: "n-nightlife", year: "1900s", title: "Modern night life and entertainment districts", region: "Americas", place: "Broadway, fairgrounds, shopping streets", categories: ["Entertainment", "Technology"], summary: "Electric light extended commercial evening activity and reshaped spectacle, advertising, and leisure." }
      ],
      edges: [
        { from: "n-bulb", to: "n-lighting-systems", label: "through system design", mechanism: "technology diffusion", type: "enabled", strength: "strong", explanation: "The bulb mattered because it worked inside a complete generation and distribution system." },
        { from: "n-lighting-systems", to: "n-urban-electrification", label: "through infrastructure", mechanism: "electric infrastructure", type: "led to", strength: "strong", explanation: "Lighting networks encouraged broader urban electrical grids and services." },
        { from: "n-urban-electrification", to: "n-nightlife", label: "through illuminated streets", mechanism: "urban illumination", type: "influenced", strength: "medium", explanation: "Reliable light made nighttime commerce, performance, and public spectacle safer and more profitable." }
      ]
    },
    {
      id: "industrial-power-light",
      eventId: "edison-light-bulb",
      bridge: "Industrial Power",
      title: "Industrial Power",
      explanation: "Electrical infrastructure became part of a wider industrial transformation of labor and production.",
      categories: ["Technology", "Economy"],
      nodes: [
        { id: "n-second-industrial", year: "late 1800s", title: "Second Industrial Revolution", region: "Europe", place: "Industrial Europe and North America", categories: ["Technology", "Economy"], summary: "Electricity, steel, chemicals, and new corporate forms expanded industrial capacity." },
        { id: "n-electric-infra", year: "1880s-1900s", title: "Electric infrastructure", region: "Americas", place: "Factories, stations, urban grids", categories: ["Technology", "Economy"], summary: "Power generation and wiring changed how factories and cities organized energy." },
        { id: "n-factory-work", year: "1900s", title: "Modern factory work", region: "Europe", place: "Industrial cities", categories: ["Economy", "Technology"], summary: "Electrified workplaces supported new layouts, longer hours, and tighter production rhythms." }
      ],
      edges: [
        { from: "n-second-industrial", to: "n-electric-infra", label: "through industrial capital", mechanism: "industrial investment", type: "enabled", strength: "strong", explanation: "Capital, engineering, and demand from industrial growth funded electrical infrastructure." },
        { from: "n-electric-infra", to: "n-factory-work", label: "through power distribution", mechanism: "distributed power", type: "influenced", strength: "medium", explanation: "Electric motors and lighting made factories less dependent on centralized steam shafts and daylight." }
      ]
    },
    {
      id: "trauma-bridge-wwi",
      eventId: "world-war-i",
      bridge: "Trauma",
      title: "Trauma Bridge",
      explanation: "Mass violence and disillusionment reshaped literary form, voice, and trust in old certainties.",
      categories: ["War", "Literature", "Art"],
      nodes: [
        { id: "n-wwi", year: "1914-1918", title: "World War I", region: "Europe", place: "European fronts and global empires", categories: ["War", "Politics"], summary: "Industrial war mobilized societies and exposed millions to unprecedented violence." },
        { id: "n-disillusionment", year: "1918-1920s", title: "Trauma and disillusionment", region: "Europe", place: "Veteran societies and cities", categories: ["War", "Literature"], summary: "Survivors and civilians processed grief, shell shock, and the collapse of heroic war ideals." },
        { id: "n-modernist-lit", year: "1920s", title: "Modernist literature", region: "Europe", place: "London, Paris, Dublin, Berlin", categories: ["Literature", "Art"], summary: "Fragmented narration, interiority, and formal experiment registered a changed sense of reality." }
      ],
      edges: [
        { from: "n-wwi", to: "n-disillusionment", label: "through trauma", mechanism: "trauma", type: "led to", strength: "strong", explanation: "Industrialized violence produced psychological shock and social disillusionment across combatant societies." },
        { from: "n-disillusionment", to: "n-modernist-lit", label: "through broken forms", mechanism: "aesthetic rupture", type: "influenced", strength: "medium", explanation: "Writers used fragmented forms to express rupture, memory, alienation, and distrust of inherited narratives." }
      ]
    },
    {
      id: "state-power-wwi",
      eventId: "world-war-i",
      bridge: "State Power",
      title: "State Power Bridge",
      explanation: "Total war expanded state capacity, propaganda, mass mobilization, and postwar political reordering.",
      categories: ["War", "Politics", "Empire"],
      nodes: [
        { id: "n-total-war", year: "1914-1918", title: "Total war", region: "Europe", place: "Home fronts and battle fronts", categories: ["War", "Politics", "Economy"], summary: "Governments coordinated industry, food, labor, soldiers, and public opinion at mass scale." },
        { id: "n-propaganda", year: "1914-1918", title: "Propaganda and mobilization", region: "Europe", place: "Mass press, posters, schools, streets", categories: ["Politics", "War"], summary: "States used media and administration to justify sacrifice and direct behavior." },
        { id: "n-empire-collapse", year: "1918-1920s", title: "Empire collapse and new political order", region: "Europe", place: "Central Europe, Russia, Ottoman lands", categories: ["Empire", "Politics"], summary: "Imperial systems fractured, creating new states, mandates, revolutions, and borders." }
      ],
      edges: [
        { from: "n-total-war", to: "n-propaganda", label: "through mass mobilization", mechanism: "state mobilization", type: "enabled", strength: "strong", explanation: "Total war required governments to coordinate morale, labor, conscription, and public messaging." },
        { from: "n-propaganda", to: "n-empire-collapse", label: "through legitimacy crisis", mechanism: "political legitimacy crisis", type: "influenced", strength: "indirect", explanation: "Mobilization raised expectations and pressures that helped expose fragile imperial legitimacy after defeat and exhaustion." }
      ]
    },
    {
      id: "gender-roles-wwi",
      eventId: "world-war-i",
      bridge: "Gender Roles",
      title: "Gender Roles Bridge",
      explanation: "Wartime labor and public presence altered debates over gender, citizenship, fashion, and society.",
      categories: ["War", "Fashion", "Politics", "Economy"],
      nodes: [
        { id: "n-wartime-labor", year: "1914-1918", title: "Wartime labor", region: "Europe", place: "Factories, transport, offices, farms", categories: ["War", "Economy"], summary: "Women entered or expanded roles in munitions, transport, clerical work, and public services." },
        { id: "n-public-roles", year: "1918-1920s", title: "Changing women's public roles", region: "Europe", place: "Cities and postwar politics", categories: ["Politics", "Economy"], summary: "Public work and organizing strengthened claims for rights, visibility, and independence." },
        { id: "n-postwar-fashion", year: "1920s", title: "Postwar fashion and society", region: "Europe", place: "Urban consumer culture", categories: ["Fashion", "Entertainment"], summary: "Shorter hems, looser silhouettes, and leisure culture reflected wider changes in public gender expression." }
      ],
      edges: [
        { from: "n-wartime-labor", to: "n-public-roles", label: "through wartime labor", mechanism: "labor substitution", type: "influenced", strength: "medium", explanation: "Wartime labor did not create equality, but it made women's public work harder to ignore." },
        { from: "n-public-roles", to: "n-postwar-fashion", label: "through social visibility", mechanism: "gender role renegotiation", type: "influenced", strength: "indirect", explanation: "Changing roles helped reshape ideals of mobility, leisure, and appearance in postwar urban culture." }
      ]
    }
  ],
  artLineage: {
    sideBridges: ["Religion", "Patronage", "Trade", "Technology", "War"],
    nodes: [
      { id: "art-ancient", title: "Ancient Art", period: "c. 3000-500 BCE", region: "Africa / Middle East / Asia", categories: ["Art", "Religion", "Politics"], summary: "Temple, tomb, palace, and ritual art linked power, cosmology, and material craft." },
      { id: "art-classical", title: "Classical Art", period: "c. 500 BCE-500 CE", region: "Mediterranean", categories: ["Art", "Politics", "Religion"], summary: "Greek and Roman visual traditions developed ideals of proportion, civic memory, empire, and public monument." },
      { id: "art-medieval", title: "Medieval / Byzantine Art", period: "c. 500-1400", region: "Europe / Eastern Mediterranean", categories: ["Art", "Religion", "Empire"], summary: "Icons, manuscripts, mosaics, and sacred architecture placed image-making inside religious devotion and imperial order." },
      { id: "art-renaissance", title: "Renaissance Art", period: "c. 1400-1600", region: "Europe", categories: ["Art", "Science", "Religion"], summary: "Artists combined classical revival, perspective, anatomy, and elite patronage into new visual languages." },
      { id: "art-baroque", title: "Baroque", period: "c. 1600-1750", region: "Europe / Americas", categories: ["Art", "Religion", "Empire"], summary: "Dramatic light, movement, and spectacle served churches, courts, colonies, and public persuasion." },
      { id: "art-impressionism", title: "Impressionism", period: "c. 1860s-1880s", region: "Europe", categories: ["Art", "Technology", "Entertainment"], summary: "Artists captured modern urban leisure, changing light, portable paint, photography, and new exhibition systems." },
      { id: "art-modernism", title: "Modernism", period: "c. 1900-1970", region: "Europe / Americas", categories: ["Art", "War", "Technology"], summary: "Avant-garde movements broke inherited forms while responding to cities, machines, war, psychology, and mass media." },
      { id: "art-contemporary", title: "Contemporary Art", period: "c. 1970-present", region: "Global", categories: ["Art", "Technology", "Politics"], summary: "Contemporary practice uses global networks, installation, media, identity, markets, and institutional critique." }
    ],
    edges: [
      { from: "art-ancient", to: "art-classical", label: "through trade and empire", mechanism: "trade and imperial contact", type: "influenced", strength: "indirect", explanation: "Mediterranean contact moved motifs, materials, and workshop knowledge across cultures." },
      { from: "art-classical", to: "art-medieval", label: "through religion", mechanism: "religious transformation", type: "influenced", strength: "strong", explanation: "Classical visual forms were adapted into Christian, Byzantine, and Islamic sacred contexts." },
      { from: "art-medieval", to: "art-renaissance", label: "through patronage", mechanism: "patronage and textual recovery", type: "enabled", strength: "medium", explanation: "Court, church, and merchant patronage supported artists who reworked classical and Byzantine inheritances." },
      { from: "art-renaissance", to: "art-baroque", label: "through church power", mechanism: "religion and state spectacle", type: "led to", strength: "medium", explanation: "Counter-Reformation churches and absolutist courts favored emotionally persuasive, theatrical art." },
      { from: "art-baroque", to: "art-impressionism", label: "through markets", mechanism: "art markets and urban publics", type: "influenced", strength: "indirect", explanation: "Changing patronage, public exhibition, and city life gradually shifted art toward modern viewing publics." },
      { from: "art-impressionism", to: "art-modernism", label: "through technology", mechanism: "technology and formal experiment", type: "enabled", strength: "strong", explanation: "Photography, industrial materials, and urban modernity encouraged artists to question representation itself." },
      { from: "art-modernism", to: "art-contemporary", label: "through war and media", mechanism: "war, media, and institutions", type: "influenced", strength: "medium", explanation: "Postwar institutions, global media, and political critique expanded art beyond single styles or mediums." }
    ]
  }
};

function createSources() {
  return {
    wikidata: { id: "wikidata", title: "Wikidata", type: "entity-data", usage: "Entity ids, dates, places, coordinate candidates; not used as final interpretation." },
    "met-heilbrunn": { id: "met-heilbrunn", title: "The Met Heilbrunn Timeline of Art History", type: "museum-timeline", usage: "Art and architecture period overviews." },
    smarthistory: { id: "smarthistory", title: "Smarthistory", type: "art-history", usage: "Art, architecture, and visual culture explanations." },
    "khan-academy": { id: "khan-academy", title: "Khan Academy World History / Art History", type: "education", usage: "Broad teaching explanations for world history and art history." },
    "world-history-encyclopedia": { id: "world-history-encyclopedia", title: "World History Encyclopedia", type: "world-history", usage: "World history, state, religion, trade, war, and architecture context." },
    britannica: { id: "britannica", title: "Britannica", type: "reference", usage: "Secondary confirmation for major themes, people, periods, and events." },
    "fashion-history-timeline": { id: "fashion-history-timeline", title: "Fashion History Timeline", type: "fashion-history", usage: "Fashion and daily life period context." },
    "google-arts-culture": { id: "google-arts-culture", title: "Google Arts & Culture", type: "visual-culture", usage: "Visual and museum entry points for fashion, art, and media." },
    "our-world-in-data": { id: "our-world-in-data", title: "Our World in Data", type: "data-reference", usage: "War, disaster, climate, and modern trend data reference." }
  };
}

function createMacroAreas() {
  return [
    { id: "east-asia", title: "East Asia", titleZh: "东亚" },
    { id: "southeast-asia", title: "Southeast Asia", titleZh: "东南亚" },
    { id: "south-asia", title: "South Asia", titleZh: "南亚" },
    { id: "middle-east", title: "Middle East", titleZh: "中东" },
    { id: "europe", title: "Europe", titleZh: "欧洲" },
    { id: "africa", title: "Africa", titleZh: "非洲" },
    { id: "americas", title: "Americas", titleZh: "美洲" },
    { id: "global", title: "Global / Transregional", titleZh: "全球 / 跨区域" }
  ];
}

function createPlaces() {
  const note = "Places are modern reference areas; historical phases may refer to earlier states, cultures, or polities in or around that area.";
  const noteZh = "地点是现代参照区域；历史阶段可能指该区域内或周边曾存在的政权、文化或社会。";
  const specs = [
    ["china", "China", "中国", "east-asia", "A reference area for histories around the Chinese mainland and adjacent cultural-political worlds.", "以现代中国为参照，用来组织中国大陆及周边相关文化与政治世界的历史。"],
    ["japan", "Japan", "日本", "east-asia", "A reference area for the Japanese archipelago and its historical polities.", "以日本列岛为参照，用来组织该地区历代政权、社会与文化。"],
    ["korea", "Korea", "朝鲜半岛", "east-asia", "A reference area for the Korean peninsula across dynastic and modern political changes.", "以朝鲜半岛为参照，用来组织其王朝、殖民与现代政治变化。"],
    ["malaysia", "Malaysia", "马来西亚", "southeast-asia", "A reference area for histories around the Malay Peninsula, northern Borneo, Melaka, Malaya, and modern Malaysia.", "以马来半岛、北婆罗洲、马六甲、马来亚与现代马来西亚为参照，组织相关历史。"],
    ["india", "India", "印度", "south-asia", "A reference area for South Asian histories centered on the Indian subcontinent.", "以印度次大陆为参照，用来组织南亚相关历史。"],
    ["turkey-anatolia", "Turkey / Anatolia", "土耳其 / 安纳托利亚", "middle-east", "A reference area for Anatolia and nearby imperial worlds, including Byzantine and Ottoman histories.", "以安纳托利亚及现代土耳其为参照，容纳拜占庭、奥斯曼等周边帝国世界。"],
    ["iran-persia", "Iran / Persia", "伊朗 / 波斯", "middle-east", "A reference area for Iranian plateau and Persianate political-cultural histories.", "以伊朗高原与波斯文化政治世界为参照。"],
    ["arab-middle-east", "Arab Middle East", "阿拉伯中东", "middle-east", "A reference area for Arabic-speaking Middle Eastern societies and polities.", "以阿拉伯语中东社会与政权为参照。"],
    ["egypt-north-africa", "Egypt / North Africa", "埃及 / 北非", "africa", "A reference area for Egypt, the Nile, and North African imperial and social histories.", "以埃及、尼罗河与北非帝国和社会历史为参照。"],
    ["france", "France", "法国", "europe", "A reference area for present-day France and earlier Frankish/French polities.", "以现代法国及其周边早期法兰克、法国政权为参照。"],
    ["britain-uk", "Britain / UK", "不列颠 / 英国", "europe", "A reference area for the British Isles and later United Kingdom-centered histories.", "以不列颠群岛及后来的英国为参照。"],
    ["german-lands", "German lands", "德意志地区", "europe", "A reference area for German-speaking lands before and after modern German state formation.", "以德语地区为参照，覆盖现代德国形成前后的历史。"],
    ["italian-states", "Italian states", "意大利诸邦", "europe", "A reference area for the Italian peninsula, city-states, papal lands, and modern Italy.", "以意大利半岛、城邦、教皇领地与现代意大利为参照。"],
    ["greece-balkans", "Greece / Balkans", "希腊 / 巴尔干", "europe", "A reference area for Greek, Balkan, and southeastern European histories across ancient, Byzantine, Ottoman, and modern contexts.", "以希腊、巴尔干和东南欧为参照，组织古典、拜占庭、奥斯曼与现代相关历史。"],
    ["low-countries", "Low Countries", "低地国家", "europe", "A reference area for the Netherlands, Belgium, and adjacent Low Countries histories.", "以荷兰、比利时及相邻低地地区为参照。"],
    ["switzerland-alps", "Switzerland / Alps", "瑞士 / 阿尔卑斯", "europe", "A reference area for Swiss and Alpine histories, including transnational institutions based there.", "以瑞士和阿尔卑斯地区为参照，也容纳设于此地的跨国机构。"],
    ["ireland", "Ireland", "爱尔兰", "europe", "A reference area for Ireland and Irish histories across medieval, colonial, and modern periods.", "以爱尔兰为参照，组织其中世纪、殖民与现代历史。"],
    ["iberia-spain", "Iberia / Spain", "伊比利亚 / 西班牙", "europe", "A reference area for Iberian kingdoms, Spain, Portugal, and Atlantic imperial histories.", "以伊比利亚诸王国、西班牙、葡萄牙及大西洋帝国历史为参照。"],
    ["russia", "Russia", "俄罗斯", "europe", "A reference area for Rus', Muscovy, the Russian Empire, Soviet and post-Soviet histories.", "以罗斯、莫斯科公国、俄罗斯帝国、苏联与后苏联历史为参照。"],
    ["united-states", "United States", "美国", "americas", "A reference area for histories centered on the United States and North American expansion.", "以美国及北美扩张为参照。"],
    ["mexico-mesoamerica", "Mexico / Mesoamerica", "墨西哥 / 中美洲", "americas", "A reference area for Mesoamerican worlds, colonial Mexico, and modern Mexico.", "以中美洲文明、殖民墨西哥与现代墨西哥为参照。"],
    ["andes-peru", "Andes / Peru", "安第斯 / 秘鲁", "americas", "A reference area for Andean societies, Inca worlds, colonial Peru, and modern Peru.", "以安第斯社会、印加世界、殖民秘鲁与现代秘鲁为参照。"],
    ["brazil", "Brazil", "巴西", "americas", "A reference area for Portuguese America and Brazil.", "以葡属美洲和巴西为参照。"],
    ["west-africa", "West Africa", "西非", "africa", "A reference area for West African states, trade networks, societies, and colonial/postcolonial histories.", "以西非国家、贸易网络、社会以及殖民与后殖民历史为参照。"],
    ["east-africa", "East Africa", "东非", "africa", "A reference area for East African societies, early human histories, coastal networks, and modern states.", "以东非社会、早期人类历史、海岸网络和现代国家为参照。"],
    ["global-transregional", "Global / Transregional", "全球 / 跨区域", "global", "A reference shell for events whose main meaning is transregional or institutional rather than tied to one modern place.", "用于组织主要意义跨区域或制度性的事件，而不是强行归入单一现代地点。"]
  ];
  return specs.map(([id, title, titleZh, macroAreaId, summary, summaryZh]) => ({
    id,
    title,
    titleZh,
    macroAreaId,
    type: "reference-region",
    summary,
    summaryZh,
    modernReferenceNote: note,
    modernReferenceNoteZh: noteZh,
    sourceRefs: ["britannica", "wikidata"]
  }));
}

function createYearCapsules() {
  return [
    {
      year: 1453,
      keywords: [
        "Fall of Constantinople",
        "Ming Dynasty",
        "Muromachi Japan",
        "Joseon Korea",
        "Aztec and Inca worlds",
        "Ottoman rise",
        "Early Renaissance"
      ],
      highlights: [
        "While Constantinople was falling, Ming China continued to rule a vast empire.",
        "The same world contained Muromachi Japan, Joseon Korea, and the Aztec and Inca civilizations.",
        "Ottoman rise and early Renaissance Europe belonged to the same historical moment.",
        "West African power was shifting as Mali declined and Songhai rose along trans-Saharan networks.",
        "A Mediterranean crisis could sit beside East Asian court cultures and American urban civilizations.",
        "One point in time held war, empire, religion, trade, and artistic transition at once."
      ],
      relatedEvents: ["fall-constantinople"],
      relatedRegions: ["Europe", "Middle East", "China", "Japan", "Korea", "Americas", "Africa"],
      relatedLenses: ["state-empire", "war-military", "religion-belief", "economy-trade", "art"]
    },
    {
      year: 1500,
      keywords: [
        "Renaissance art",
        "Oceanic routes",
        "Ming-Qing imperial order",
        "Ottoman-Safavid age",
        "Mughal beginnings",
        "Atlantic worlds"
      ],
      highlights: [
        "Around 1500, Renaissance art and oceanic expansion were unfolding beside powerful Asian and Islamic imperial worlds.",
        "European maritime projects existed alongside Ming commercial systems and Indian Ocean trade.",
        "The early modern world was becoming more connected, but not yet centered on one region."
      ],
      relatedEvents: [],
      relatedRegions: ["Europe", "China", "Middle East", "India", "Americas"],
      relatedLenses: ["art", "architecture", "economy-trade", "state-empire"]
    },
    {
      year: 1879,
      keywords: [
        "Electric light",
        "Second Industrial Revolution",
        "Meiji Japan",
        "Qing China",
        "British Raj",
        "Gilded Age"
      ],
      highlights: [
        "While Edison worked on practical electric lighting, Japan was modernizing under the Meiji state.",
        "Industrial Europe, the British Raj, Qing China, and the United States Gilded Age shared the same moment.",
        "Electric systems were part of a wider world of empire, infrastructure, factories, and urban change."
      ],
      relatedEvents: ["edison-light-bulb"],
      relatedRegions: ["Americas", "Europe", "Japan", "China", "India", "Middle East"],
      relatedLenses: ["science-technology", "economy-trade", "state-empire", "entertainment-media"]
    },
    {
      year: 1914,
      keywords: [
        "World War I begins",
        "Early Republic of China",
        "Taisho Japan",
        "Late Ottoman Empire",
        "British Raj",
        "Progressive Era"
      ],
      highlights: [
        "As World War I began in Europe, China was navigating its early republican years.",
        "The same year held Taisho Japan, the late Ottoman Empire, the British Raj, and the United States Progressive Era.",
        "A European war quickly became a global imperial and social crisis."
      ],
      relatedEvents: ["world-war-i"],
      relatedRegions: ["Europe", "Middle East", "China", "Japan", "India", "Americas"],
      relatedLenses: ["war-military", "state-empire", "literature", "fashion-daily-life", "economy-trade"]
    }
  ];
}

function createRegionSnapshots() {
  const specs = {
    1453: [
      ["europe", "Europe", "Late medieval Europe and Renaissance transition", "European polities were shaped by dynastic war, commercial cities, church authority, and early humanist learning.", ["state-empire", "religion-belief", "art"], ["late-medieval", "renaissance-transition"], ["fall-constantinople"], "high"],
      ["middle-east", "Middle East", "Ottoman power rising", "Ottoman expansion made the eastern Mediterranean a central arena of imperial, commercial, and religious change.", ["state-empire", "war-military", "religion-belief"], ["ottoman-rise", "eastern-mediterranean"], ["fall-constantinople"], "high"],
      ["china", "China", "Ming Dynasty", "Ming China governed a large agrarian empire with commercial growth and later links to global silver flows.", ["state-empire", "economy-trade"], ["ming", "silver-economy"], [], "high"],
      ["japan", "Japan", "Muromachi period", "Ashikaga rule, court culture, and regional warrior power shaped Japan's political and cultural landscape.", ["state-empire", "art", "war-military"], ["muromachi", "warrior-rule"], [], "medium"],
      ["india", "India", "Regional sultanates and Vijayanagara", "The subcontinent contained multiple regional powers, including the Delhi Sultanate's successors and Vijayanagara in the south.", ["state-empire", "religion-belief", "economy-trade"], ["regional-polities", "indian-ocean"], [], "medium"],
      ["africa", "Africa", "Mali declining / Songhai rising", "West African power shifted along trans-Saharan trade networks while other African regions followed distinct local trajectories.", ["economy-trade", "state-empire"], ["west-africa", "trans-saharan"], [], "medium"],
      ["americas", "Americas", "Aztec and Inca civilizations", "Large Indigenous states and many other societies developed complex political, urban, and ritual systems before sustained European colonization.", ["state-empire", "religion-belief", "architecture"], ["aztec", "inca", "pre-columbian"], [], "high"],
      ["united-states", "United States", "Indigenous North America", "The region later called the United States was home to diverse Indigenous societies with varied economies, settlements, and diplomatic worlds.", ["state-empire", "economy-trade", "religion-belief"], ["indigenous-north-america"], [], "medium"],
      ["latin-america", "Latin America", "Mesoamerican and Andean worlds", "Mesoamerican and Andean civilizations were major centers of power, agriculture, ritual, and urban life.", ["state-empire", "architecture", "religion-belief"], ["mesoamerica", "andes"], [], "high"],
      ["korea", "Korea", "Joseon Dynasty", "Joseon Korea consolidated Confucian institutions, court scholarship, and state administration.", ["state-empire", "religion-belief", "literature"], ["joseon", "confucian-state"], [], "high"]
    ],
    1879: [
      ["europe", "Europe", "Second Industrial Revolution", "European powers intensified industrial production, imperial competition, and scientific-technical change.", ["science-technology", "economy-trade", "state-empire"], ["industrialization", "imperial-powers"], [], "high"],
      ["middle-east", "Middle East", "Late Ottoman reform era", "The Ottoman state navigated reform, debt, infrastructure projects, and pressure from European powers.", ["state-empire", "economy-trade"], ["late-ottoman", "reform"], [], "high"],
      ["china", "China", "Qing Dynasty, Guangxu period", "Qing China faced foreign pressure, reform debates, and internal strains after decades of upheaval.", ["state-empire", "economy-trade"], ["qing", "reform-pressure"], [], "high"],
      ["japan", "Japan", "Meiji Era", "Japan pursued state-led modernization, industrialization, military reform, and international recognition.", ["state-empire", "science-technology", "war-military"], ["meiji", "modernization"], [], "high"],
      ["india", "India", "British Raj", "India was governed through British imperial administration, railways, revenue systems, and expanding political debate.", ["state-empire", "economy-trade"], ["british-raj", "railways"], [], "high"],
      ["africa", "Africa", "Imperial pressure before the Scramble", "African societies and states faced expanding European commercial, missionary, and military pressure before formal partition accelerated.", ["state-empire", "economy-trade", "war-military"], ["imperial-pressure", "african-states"], [], "medium"],
      ["americas", "Americas", "Industrial and postcolonial transformations", "The Americas included the industrializing United States and Latin American states tied to export economies and nation-building.", ["economy-trade", "state-empire"], ["gilded-age", "export-economies"], ["edison-light-bulb"], "high"],
      ["united-states", "United States", "Gilded Age", "The United States experienced rapid industrial growth, urbanization, inequality, and technological experimentation.", ["economy-trade", "science-technology"], ["gilded-age", "urbanization"], ["edison-light-bulb"], "high"],
      ["latin-america", "Latin America", "Export economies and republics", "Many Latin American republics were shaped by export agriculture, mining, railways, and elite-led state building.", ["economy-trade", "state-empire"], ["export-economies", "republics"], [], "medium"],
      ["korea", "Korea", "Late Joseon under pressure", "Joseon Korea faced internal reform challenges and growing pressure from regional imperial powers.", ["state-empire", "economy-trade"], ["late-joseon", "regional-pressure"], [], "medium"]
    ],
    1914: [
      ["europe", "Europe", "World War I begins", "Alliance systems, nationalism, imperial rivalry, and mobilization turned crisis into continental and global war.", ["war-military", "state-empire"], ["world-war-i", "mobilization"], ["world-war-i"], "high"],
      ["middle-east", "Middle East", "Late Ottoman Empire", "The Ottoman Empire entered a final wartime phase that would reshape borders, mandates, and political futures.", ["state-empire", "war-military"], ["late-ottoman", "wartime-order"], ["world-war-i"], "high"],
      ["china", "China", "Early Republic of China", "China's young republic struggled with regional power, constitutional instability, and post-imperial transition.", ["state-empire", "war-military"], ["early-republic", "post-imperial"], [], "high"],
      ["japan", "Japan", "Taisho era", "Japan combined party politics, modern mass culture, industrial growth, and imperial ambition.", ["state-empire", "economy-trade", "entertainment-media"], ["taisho", "imperial-japan"], [], "high"],
      ["india", "India", "British Raj and wartime contribution", "India contributed soldiers, labor, and resources to the British war effort while political movements developed.", ["state-empire", "war-military", "economy-trade"], ["british-raj", "wartime-labor"], ["world-war-i"], "high"],
      ["africa", "Africa", "Colonial rule and wartime campaigns", "Much of Africa was under European colonial rule, and the war affected labor, soldiers, and campaigns across the continent.", ["state-empire", "war-military", "economy-trade"], ["colonial-africa", "wartime-campaigns"], ["world-war-i"], "medium"],
      ["americas", "Americas", "Progressive era and regional republics", "The Americas ranged from U.S. Progressive reform to Latin American republics navigating export economies and diplomacy.", ["state-empire", "economy-trade"], ["progressive-era", "republics"], [], "medium"],
      ["united-states", "United States", "Progressive Era neutrality", "The United States remained formally neutral at the outbreak of war while reform politics and industrial power continued.", ["state-empire", "economy-trade"], ["progressive-era", "neutrality"], [], "high"],
      ["latin-america", "Latin America", "Republics in a global economy", "Latin American states were linked to global export markets while managing diplomacy, social change, and state consolidation.", ["economy-trade", "state-empire"], ["export-markets", "state-building"], [], "medium"],
      ["korea", "Korea", "Korea under Japanese colonial rule", "Korea was under Japanese colonial rule, with political, economic, and cultural life shaped by imperial administration.", ["state-empire", "economy-trade"], ["colonial-korea", "imperial-rule"], [], "high"]
    ]
  };
  return Object.entries(specs).flatMap(([year, rows]) => rows.map((row) => regionSnapshot(Number(year), row)));
}

function regionSnapshot(year, row) {
  const [regionId, regionName, title, summary, primaryLensIds, lineageTags, relatedEventIds, confidence] = row;
  return {
    id: `snapshot-${year}-${regionId}`,
    year,
    regionId,
    regionName,
    title,
    summary,
    primaryLensIds,
    lineageTags,
    relatedEventIds,
    confidence,
    sources: ["world-history-encyclopedia", "britannica", "wikidata"]
  };
}

function createRegionPhases() {
  const specs = [
    ["china", "china-ming", "Ming Dynasty", "明朝", 1368, 1644, "1368-1644", 1453, ["state-empire", "economy-trade", "art"], "The Ming state governed a large agrarian empire while commercial networks, urban craft, and later silver flows tied China to wider worlds.", "明朝治理庞大的农业帝国，同时商业网络、城市工艺与后来的白银流动把中国连接到更广阔的世界。"],
    ["china", "china-qing", "Qing Dynasty", "清朝", 1644, 1912, "1644-1912", 1879, ["state-empire", "economy-trade"], "Qing rule expanded imperial territory and managed multiethnic governance, while nineteenth-century crises exposed pressures from rebellion, reform, and foreign empire.", "清朝扩展帝国疆域并治理多民族国家，十九世纪危机则暴露出叛乱、改革与外国帝国压力。"],
    ["china", "china-modern", "Republican, socialist, and reform eras", "民国、社会主义与改革时代", 1912, 2026, "1912-present", 1914, ["state-empire", "war-military", "economy-trade"], "Republican fragmentation, revolution, socialist state-building, reform, and global integration reshaped political authority and everyday life.", "民国分裂、革命、社会主义国家建设、改革与全球化重塑了政治权威和日常生活。"],

    ["japan", "japan-medieval", "Warrior governments and medieval Japan", "武家政权与中世日本", 1185, 1603, "1185-1603", 1453, ["state-empire", "war-military", "art"], "Shogunal rule, warrior houses, temple networks, and regional conflict reshaped power away from court aristocracy toward military governance.", "幕府统治、武家、寺院网络与地区冲突让权力从宫廷贵族转向军事治理。"],
    ["japan", "japan-tokugawa", "Tokugawa order", "德川秩序", 1603, 1868, "1603-1868", 1603, ["state-empire", "economy-trade", "entertainment-media"], "Tokugawa rule stabilized warrior government, castle towns, urban culture, commercial publishing, and managed foreign contact.", "德川统治稳定了武家政权、城下町、城市文化、商业出版与受控的对外接触。"],
    ["japan", "japan-meiji-modern", "Meiji, imperial, and modern Japan", "明治、帝国与现代日本", 1868, 2026, "1868-present", 1879, ["state-empire", "science-technology", "war-military", "entertainment-media"], "Modern Japan was shaped by state-led reform, empire, war, postwar reconstruction, high-growth industry, media culture, and demographic change.", "现代日本由国家主导改革、帝国、战争、战后重建、高速增长工业、媒体文化和人口变化塑造。"],

    ["korea", "korea-joseon", "Joseon Dynasty", "朝鲜王朝", 1392, 1897, "1392-1897", 1453, ["state-empire", "religion-belief", "literature"], "Joseon built a Confucian state order, court scholarship, social hierarchy, and administrative institutions that shaped Korean identity.", "朝鲜王朝建立儒家国家秩序、宫廷学术、社会等级和行政制度，深刻塑造朝鲜半岛身份。"],
    ["korea", "korea-modern", "Colonial division and modern Korea", "殖民、分裂与现代朝鲜半岛", 1897, 2026, "1897-present", 1910, ["state-empire", "war-military", "economy-trade"], "Empire, Japanese colonial rule, division, war, industrialization, and rival states made modern Korea a central Cold War and global economic story.", "帝国、日本殖民统治、分裂、战争、工业化与对立国家让现代朝鲜半岛成为冷战和全球经济的重要故事。"],

    ["malaysia", "malaysia-maritime-crossroads", "Early maritime crossroads and Indian Ocean exchange", "早期海上十字路口与印度洋交流", -200, 1400, "c. 200 BCE-1400", 200, ["economy-trade", "religion-belief", "state-empire"], "Malay Peninsula and Borneo port-polities connected Indian Ocean, South China Sea, Austronesian, Indic, Buddhist, and Islamic currents before Melaka's rise.", "马来半岛与婆罗洲港口政体在马六甲兴起前连接印度洋、南中国海、南岛、印度化、佛教和伊斯兰交流。"],
    ["malaysia", "malaysia-melaka-sultanate", "Melaka Sultanate and Islamicate trade", "马六甲苏丹国与伊斯兰贸易", 1400, 1511, "c. 1400-1511", 1400, ["state-empire", "economy-trade", "religion-belief"], "Melaka became a major entrepot linking Malay rule, Islam, Chinese voyages, Indian Ocean merchants, and Southeast Asian commercial diplomacy.", "马六甲成为重要转口港，把马来统治、伊斯兰、中国航行、印度洋商人和东南亚商业外交连接起来。"],
    ["malaysia", "malaysia-straits-competition", "Portuguese, Dutch, and Straits competition", "葡萄牙、荷兰与海峡竞争", 1511, 1786, "1511-1786", 1511, ["state-empire", "war-military", "economy-trade"], "European seizure of Melaka and later Dutch control made the Straits a contested commercial and military corridor while Malay polities adapted around it.", "欧洲夺取马六甲以及后来的荷兰控制，使海峡成为商业与军事竞争走廊，周边马来政权也随之调整。"],
    ["malaysia", "malaysia-british-malaya", "British Malaya, tin, rubber, and plural society", "英属马来亚、锡矿、橡胶与多元社会", 1786, 1941, "1786-1941", 1786, ["state-empire", "economy-trade", "science-technology"], "British ports, protectorates, tin mining, rubber plantations, railways, and migration created colonial Malaya's export economy and plural society.", "英国港口、保护国、锡矿、橡胶种植园、铁路和移民共同塑造殖民马来亚的出口经济与多元社会。"],
    ["malaysia", "malaysia-occupation-emergency-independence", "Japanese occupation, Emergency, and independence", "日本占领、紧急状态与独立", 1941, 1963, "1941-1963", 1941, ["war-military", "state-empire", "economy-trade"], "Japanese occupation, postwar anti-colonial politics, communist insurgency, emergency rule, and negotiated independence reshaped Malaya before Malaysia's formation.", "日本占领、战后反殖民政治、共产主义叛乱、紧急状态和谈判独立，在马来西亚形成前重塑马来亚。"],
    ["malaysia", "malaysia-development-digital", "Malaysia, development state, and digital economy", "马来西亚、发展型国家与数字经济", 1963, 2026, "1963-present", 1963, ["state-empire", "economy-trade", "science-technology", "architecture"], "Federation, ethnic power-sharing, development planning, industrial policy, urban megaprojects, and digital corridors shaped modern Malaysia.", "联邦制、族群权力分享、发展规划、产业政策、城市巨型项目和数字走廊塑造现代马来西亚。"],

    ["india", "india-sultanate-mughal", "Sultanates and Mughal India", "苏丹国与莫卧儿印度", 1200, 1757, "c. 1200-1757", 1526, ["state-empire", "religion-belief", "architecture"], "Islamic sultanates and Mughal power joined court culture, land revenue, Persianate administration, religious plurality, and monumental architecture.", "伊斯兰苏丹国与莫卧儿权力结合宫廷文化、土地收入、波斯化行政、宗教多元和纪念性建筑。"],
    ["india", "india-british-raj", "Company rule and British Raj", "公司统治与英属印度", 1757, 1947, "1757-1947", 1879, ["state-empire", "economy-trade"], "British rule reorganized revenue, railways, law, education, extraction, and political resistance across the subcontinent.", "英国统治重组了次大陆的税收、铁路、法律、教育、资源开采与政治反抗。"],
    ["india", "india-independent", "Independent India and South Asian republics", "独立印度与南亚共和国", 1947, 2026, "1947-present", 1947, ["state-empire", "economy-trade", "science-technology"], "Independence, partition, democracy, planning, liberalization, technology, and social movements reshaped modern South Asia.", "独立、分治、民主、计划经济、自由化、技术与社会运动重塑了现代南亚。"],

    ["turkey-anatolia", "anatolia-byzantine-ottoman", "Byzantine frontier and Ottoman rise", "拜占庭边疆与奥斯曼兴起", 1071, 1453, "1071-1453", 1453, ["state-empire", "war-military", "religion-belief"], "Anatolia and the eastern Mediterranean became a frontier where Byzantine contraction, Turkish principalities, and Ottoman expansion overlapped.", "安纳托利亚与东地中海成为拜占庭收缩、突厥诸侯和奥斯曼扩张交叠的边疆。"],
    ["turkey-anatolia", "anatolia-ottoman", "Ottoman Empire", "奥斯曼帝国", 1299, 1922, "1299-1922", 1453, ["state-empire", "war-military", "religion-belief", "economy-trade"], "Ottoman rule connected Anatolia, the Balkans, Arab lands, and the Mediterranean through imperial administration, military power, law, and trade.", "奥斯曼统治通过帝国行政、军事力量、法律和贸易连接安纳托利亚、巴尔干、阿拉伯地区和地中海。"],
    ["turkey-anatolia", "anatolia-republic", "Republican Turkey", "土耳其共和国", 1923, 2026, "1923-present", 1923, ["state-empire", "religion-belief", "economy-trade"], "The republic redefined state identity through secular reform, nationalism, urbanization, migration, and changing relations with Europe and the Middle East.", "共和国通过世俗改革、民族主义、城市化、迁移以及与欧洲和中东关系的变化重新定义国家身份。"],

    ["france", "france-absolutism-revolution", "Absolutism and revolution", "专制王权与革命", 1328, 1815, "1328-1815", 1789, ["state-empire", "war-military", "art"], "War, monarchy, court culture, fiscal pressure, Enlightenment critique, and revolution transformed French sovereignty and citizenship.", "战争、君主制、宫廷文化、财政压力、启蒙批判与革命改变了法国主权和公民身份。"],
    ["france", "france-modern", "Republics, empire, and modern France", "共和国、帝国与现代法国", 1815, 2026, "1815-present", 1870, ["state-empire", "economy-trade", "art"], "Republican politics, empire, industry, world wars, decolonization, and European integration shaped modern France.", "共和政治、帝国、工业、世界大战、去殖民化与欧洲一体化塑造了现代法国。"],

    ["britain-uk", "britain-empire-industrial", "British Empire and industrial power", "大英帝国与工业力量", 1485, 1945, "1485-1945", 1750, ["state-empire", "economy-trade", "science-technology"], "Maritime power, empire, parliamentary politics, finance, coal, factories, and global trade made Britain a major industrial-imperial center.", "海权、帝国、议会政治、金融、煤炭、工厂和全球贸易让不列颠成为重要工业帝国中心。"],
    ["britain-uk", "britain-postwar", "Postwar Britain", "战后英国", 1945, 2026, "1945-present", 1945, ["state-empire", "economy-trade", "entertainment-media"], "Welfare state building, decolonization, immigration, media culture, financial services, and constitutional change shaped postwar Britain.", "福利国家建设、去殖民化、移民、媒体文化、金融服务和宪制变化塑造了战后英国。"],

    ["german-lands", "german-holy-roman", "Holy Roman and German lands", "神圣罗马与德意志地区", 962, 1806, "962-1806", 1500, ["state-empire", "religion-belief", "war-military"], "The German lands were organized through imperial, princely, urban, religious, and commercial structures rather than one unified nation-state.", "德意志地区通过帝国、诸侯、城市、宗教和商业结构组织，而不是单一民族国家。"],
    ["german-lands", "german-modern", "German unification and modern Germany", "德意志统一与现代德国", 1806, 2026, "1806-present", 1871, ["state-empire", "war-military", "science-technology"], "National unification, industry, world wars, division, reunification, and European integration shaped modern German history.", "民族统一、工业、世界大战、分裂、统一和欧洲一体化塑造了现代德国历史。"],

    ["italian-states", "italy-renaissance", "Italian city-states and Renaissance", "意大利城邦与文艺复兴", 1000, 1550, "c. 1000-1550", 1453, ["art", "economy-trade", "state-empire"], "City-states, merchant wealth, papal power, humanism, and patronage made the Italian peninsula a major Renaissance center.", "城邦、商人财富、教皇权力、人文主义和赞助让意大利半岛成为文艺复兴中心。"],
    ["italian-states", "italy-modern", "Unification and modern Italy", "统一与现代意大利", 1550, 2026, "1550-present", 1861, ["state-empire", "art", "economy-trade"], "Foreign domination, regional states, nationalism, unification, fascism, republic, migration, and design culture shaped modern Italy.", "外来统治、地区国家、民族主义、统一、法西斯主义、共和国、迁移和设计文化塑造了现代意大利。"],

    ["iberia-spain", "iberia-medieval-cities", "Iberian kingdoms and Mediterranean cities", "伊比利亚诸王国与地中海城市", 1000, 1492, "c. 1000-1492", 1298, ["state-empire", "economy-trade", "architecture", "religion-belief"], "Christian, Muslim, and Jewish Iberian worlds, maritime trade, Mediterranean cities, Gothic building, and dynastic kingdoms shaped the peninsula before 1492.", "1492 年以前，基督教、伊斯兰与犹太伊比利亚世界、海上贸易、地中海城市、哥特式建筑和王朝诸国共同塑造半岛。"],
    ["iberia-spain", "iberia-spanish-empire", "Spanish empire, Habsburg and Bourbon rule", "西班牙帝国、哈布斯堡与波旁统治", 1492, 1808, "1492-1808", 1492, ["state-empire", "economy-trade", "religion-belief", "art"], "Atlantic empire, Habsburg and Bourbon monarchy, Catholic institutions, silver flows, court culture, and imperial administration reshaped Spain and its wider worlds.", "大西洋帝国、哈布斯堡与波旁君主制、天主教制度、白银流动、宫廷文化和帝国行政重塑西班牙及其更广阔世界。"],
    ["iberia-spain", "iberia-liberal-industrial-catalonia", "Liberal Spain, industrial Catalonia, and modern urban culture", "自由主义西班牙、工业加泰罗尼亚与现代城市文化", 1808, 1939, "1808-1939", 1888, ["state-empire", "economy-trade", "architecture", "art"], "Liberal constitutional struggles, imperial crisis, industrial Catalonia, urban reform, modernisme, republican politics, and civil conflict transformed Spain before Franco.", "自由主义宪政斗争、帝国危机、工业加泰罗尼亚、城市改革、现代主义建筑、共和政治和内战在佛朗哥时代前改变西班牙。"],
    ["iberia-spain", "iberia-franco-democracy-contemporary", "Franco, democracy, tourism, and contemporary Spain", "佛朗哥、民主、旅游与当代西班牙", 1939, 2026, "1939-present", 1975, ["state-empire", "economy-trade", "art", "entertainment-media", "architecture"], "Dictatorship, democratic transition, regional autonomy, mass tourism, cultural institutions, European integration, and urban renewal shaped contemporary Spain.", "独裁、民主转型、地区自治、大众旅游、文化机构、欧洲一体化和城市更新塑造当代西班牙。"],

    ["united-states", "us-republic-expansion", "Republic, expansion, and civil war", "共和国、扩张与内战", 1776, 1865, "1776-1865", 1776, ["state-empire", "war-military", "economy-trade"], "Independence, constitutional government, westward expansion, slavery, capitalism, and civil war defined the early United States.", "独立、宪政、西进扩张、奴隶制、资本主义和内战定义了早期美国。"],
    ["united-states", "us-industrial-power", "Industrial and global United States", "工业化与全球美国", 1865, 1945, "1865-1945", 1879, ["economy-trade", "science-technology", "state-empire"], "Industry, immigration, cities, corporate capitalism, mass culture, reform, and world wars turned the United States into a global power.", "工业、移民、城市、公司资本主义、大众文化、改革和世界大战让美国成为全球强权。"],
    ["united-states", "us-digital-superpower", "Cold War, digital, and platform United States", "冷战、数字与平台美国", 1945, 2026, "1945-present", 1969, ["state-empire", "science-technology", "entertainment-media"], "Cold War institutions, civil rights, suburbanization, computing, internet platforms, finance, and global military reach shaped the contemporary United States.", "冷战制度、民权、郊区化、计算机、互联网平台、金融和全球军事力量塑造了当代美国。"],

    ["mexico-mesoamerica", "mesoamerica-classical", "Mesoamerican civilizations", "中美洲文明", -1500, 1521, "c. 1500 BCE-1521", 1325, ["state-empire", "religion-belief", "architecture"], "Olmec, Maya, Mexica/Aztec and other worlds developed cities, calendars, ritual landscapes, trade, and powerful political centers.", "奥尔梅克、玛雅、墨西卡/阿兹特克等世界发展出城市、历法、仪式景观、贸易和强大的政治中心。"],
    ["mexico-mesoamerica", "mexico-colonial-modern", "Colonial and modern Mexico", "殖民与现代墨西哥", 1521, 2026, "1521-present", 1521, ["state-empire", "economy-trade", "religion-belief"], "Spanish conquest, colonial society, independence, revolution, land, migration, and modern state formation reshaped Mexico.", "西班牙征服、殖民社会、独立、革命、土地、迁移和现代国家形成重塑了墨西哥。"],

    ["andes-peru", "andes-inca", "Andean worlds and Inca power", "安第斯世界与印加权力", -1000, 1532, "before 1532", 1438, ["state-empire", "architecture", "economy-trade"], "Andean societies built highland agriculture, road systems, ritual landscapes, and the Inca imperial system before Spanish conquest.", "安第斯社会发展高地农业、道路系统、仪式景观和印加帝国体系，直到西班牙征服前夕。"],
    ["andes-peru", "peru-colonial-modern", "Colonial Peru and modern Andes", "殖民秘鲁与现代安第斯", 1532, 2026, "1532-present", 1545, ["state-empire", "economy-trade"], "Silver mining, colonial rule, Indigenous labor systems, republican states, and resource politics reshaped the Andes.", "白银开采、殖民统治、原住民劳动制度、共和国国家和资源政治重塑了安第斯。"],

    ["west-africa", "west-africa-sahel", "Sahelian states and trade", "萨赫勒国家与贸易", 700, 1600, "c. 700-1600", 1453, ["state-empire", "economy-trade", "religion-belief"], "Ghana, Mali, Songhai and other West African worlds connected gold, salt, scholarship, Islam, cities, and trans-Saharan routes.", "加纳、马里、桑海等西非世界连接黄金、盐、学术、伊斯兰、城市与跨撒哈拉路线。"],
    ["west-africa", "west-africa-modern", "Atlantic, colonial, and postcolonial West Africa", "大西洋、殖民与后殖民西非", 1600, 2026, "1600-present", 1800, ["state-empire", "economy-trade", "war-military"], "Atlantic slavery, colonial partition, cash crops, anti-colonial movements, and postcolonial states reshaped West Africa.", "大西洋奴隶贸易、殖民瓜分、经济作物、反殖民运动和后殖民国家重塑了西非。"],

    ["egypt-north-africa", "egypt-ancient-islamic", "Ancient, Islamic, and Ottoman Egypt", "古埃及、伊斯兰与奥斯曼埃及", -3000, 1882, "c. 3000 BCE-1882", -2600, ["state-empire", "religion-belief", "architecture"], "Nile societies, ancient kingdoms, Islamic rule, Ottoman power, and Mediterranean trade made Egypt a long-running political and cultural center.", "尼罗河社会、古代王国、伊斯兰统治、奥斯曼权力和地中海贸易让埃及长期成为政治与文化中心。"],
    ["egypt-north-africa", "egypt-modern", "Modern Egypt and North Africa", "现代埃及与北非", 1882, 2026, "1882-present", 1919, ["state-empire", "economy-trade"], "Colonial rule, nationalism, the Suez Canal, postcolonial states, urbanization, and regional politics shaped modern Egypt and North Africa.", "殖民统治、民族主义、苏伊士运河、后殖民国家、城市化和地区政治塑造了现代埃及与北非。"]
  ];
  const additionalSpecs = [
    ["china", "china-early-dynasties", "Early dynastic and Zhou worlds", "早期王朝与周代世界", -1600, -221, "c. 1600-221 BCE", -1046, ["state-empire", "religion-belief", "war-military"], "Shang and Zhou worlds joined bronze ritual, lineage politics, warfare, writing, and regional lordship before imperial unification.", "商周世界在帝国统一之前把青铜礼制、宗族政治、战争、书写和诸侯统治结合起来。"],
    ["china", "china-qin-han", "Qin-Han imperial formation", "秦汉帝国形成", -221, 220, "221 BCE-220 CE", -221, ["state-empire", "war-military", "economy-trade"], "Qin and Han institutions made imperial bureaucracy, standardized rule, frontier war, roads, and classical learning durable features of Chinese history.", "秦汉制度让帝国官僚、标准化治理、边疆战争、道路和经典学术成为中国历史的持久特征。"],
    ["china", "china-tang-song", "Tang-Song transformations", "唐宋转型", 618, 1279, "618-1279", 618, ["state-empire", "economy-trade", "science-technology", "literature"], "Tang and Song eras reshaped China through cosmopolitan empire, civil government, commercial growth, printing, urban life, and literati culture.", "唐宋时代通过开放帝国、文官治理、商业增长、印刷、城市生活和士人文化重塑中国。"],

    ["japan", "japan-early-state", "Yayoi, Kofun, and early court formation", "弥生、古坟与早期朝廷形成", -300, 710, "c. 300 BCE-710 CE", 250, ["state-empire", "religion-belief", "economy-trade"], "Rice agriculture, metallurgy, tomb culture, and continental connections helped form early Japanese political centers.", "水稻农业、冶金、古坟文化和大陆联系推动日本早期政治中心形成。"],
    ["japan", "japan-nara-heian", "Nara and Heian court culture", "奈良与平安宫廷文化", 710, 1185, "710-1185", 794, ["state-empire", "religion-belief", "literature", "art"], "Imperial capitals, Buddhism, court rank, poetry, writing, and aristocratic culture shaped early Japanese elite society.", "都城、佛教、官位、诗歌、书写和贵族文化塑造日本早期上层社会。"],
    ["japan", "japan-postwar", "Postwar and contemporary Japan", "战后与当代日本", 1945, 2026, "1945-present", 1945, ["state-empire", "economy-trade", "science-technology", "entertainment-media"], "Occupation reform, pacifism, high-speed growth, consumer technology, media culture, and demographic change defined postwar Japan.", "占领改革、和平主义、高速增长、消费技术、媒体文化和人口变化定义战后日本。"],

    ["india", "india-indus-vedic", "Indus and Vedic worlds", "印度河与吠陀世界", -2600, -600, "c. 2600-600 BCE", -2600, ["state-empire", "religion-belief", "architecture", "economy-trade"], "Urban Indus settlements and later Vedic ritual cultures shaped early South Asian social, religious, and political foundations.", "印度河城市聚落和后来的吠陀仪式文化塑造南亚早期社会、宗教和政治基础。"],
    ["india", "india-maurya-gupta", "Maurya, Gupta, and classical India", "孔雀、笈多与古典印度", -322, 550, "322 BCE-550 CE", -322, ["state-empire", "religion-belief", "science-technology", "literature"], "Imperial rule, Buddhist and Hindu traditions, Sanskrit learning, mathematics, medicine, and trade shaped classical South Asia.", "帝国统治、佛教与印度教传统、梵文学术、数学、医学和贸易塑造古典南亚。"],
    ["india", "india-regional-oceanic", "Regional kingdoms and Indian Ocean worlds", "地区王国与印度洋世界", 550, 1200, "550-1200", 850, ["state-empire", "economy-trade", "religion-belief", "architecture"], "Regional courts, temple networks, maritime trade, and religious exchange connected South Asia across the Indian Ocean.", "地区宫廷、寺庙网络、海上贸易和宗教交流把南亚连接到印度洋世界。"],

    ["turkey-anatolia", "anatolia-hittite-classical", "Hittite, Greek, Roman, and Byzantine Anatolia", "赫梯、希腊、罗马与拜占庭安纳托利亚", -1650, 1071, "c. 1650 BCE-1071 CE", -1650, ["state-empire", "war-military", "religion-belief", "architecture"], "Anatolia moved through Hittite, Greek, Roman, and Byzantine worlds as a bridge between the Mediterranean, Black Sea, and Near East.", "安纳托利亚经历赫梯、希腊、罗马和拜占庭世界，成为地中海、黑海和近东之间的桥梁。"],
    ["turkey-anatolia", "anatolia-seljuk-beyliks", "Seljuk Anatolia and Turkish principalities", "塞尔柱安纳托利亚与突厥诸侯", 1071, 1299, "1071-1299", 1071, ["state-empire", "war-military", "religion-belief", "architecture"], "Seljuk power, frontier warfare, Sufi networks, towns, and principalities transformed Anatolia before Ottoman consolidation.", "塞尔柱权力、边疆战争、苏菲网络、城镇和诸侯在奥斯曼整合前改变安纳托利亚。"],
    ["turkey-anatolia", "anatolia-tanzimat-late-ottoman", "Tanzimat and late Ottoman reform", "坦志麦特与奥斯曼晚期改革", 1839, 1922, "1839-1922", 1839, ["state-empire", "economy-trade", "religion-belief", "war-military"], "Reform, constitutionalism, debt, nationalism, migration, and war reshaped Ottoman rule in its final century.", "改革、宪政、债务、民族主义、迁徙和战争重塑奥斯曼帝国最后一个世纪。"],

    ["france", "france-capetian-medieval", "Capetian and medieval France", "卡佩王朝与中世纪法国", 987, 1328, "987-1328", 987, ["state-empire", "religion-belief", "architecture", "war-military"], "Royal authority, feudal lordship, Gothic cathedrals, crusading, towns, and universities shaped medieval France.", "王权、封建领主、哥特式大教堂、十字军、城镇和大学塑造中世纪法国。"],
    ["france", "france-valois-bourbon", "Valois, Bourbon, and court monarchy", "瓦卢瓦、波旁与宫廷君主制", 1328, 1789, "1328-1789", 1515, ["state-empire", "war-military", "art", "economy-trade"], "Dynastic war, Renaissance culture, religious conflict, absolutist monarchy, and fiscal pressure shaped early modern France.", "王朝战争、文艺复兴文化、宗教冲突、专制王权和财政压力塑造近世法国。"],
    ["france", "france-revolution-napoleon", "Revolutionary and Napoleonic France", "革命与拿破仑法国", 1789, 1815, "1789-1815", 1789, ["state-empire", "war-military", "economy-trade"], "Revolution and empire remade citizenship, law, military mobilization, nationalism, and European political order.", "革命与帝国重塑公民身份、法律、军事动员、民族主义和欧洲政治秩序。"],
    ["france", "france-third-republic-empire", "Republic, empire, and mass politics", "共和国、帝国与大众政治", 1870, 1945, "1870-1945", 1870, ["state-empire", "economy-trade", "art", "war-military"], "Republican institutions, colonial empire, secular education, mass politics, modern art, and world wars shaped modern France.", "共和制度、殖民帝国、世俗教育、大众政治、现代艺术和世界大战塑造现代法国。"],

    ["britain-uk", "britain-medieval-kingdoms", "Medieval kingdoms and parliament", "中世纪王国与议会", 1066, 1485, "1066-1485", 1066, ["state-empire", "war-military", "religion-belief"], "Norman conquest, monarchy, common law, parliament, war with France, and plague reshaped medieval Britain.", "诺曼征服、君主制、普通法、议会、对法战争和瘟疫重塑中世纪不列颠。"],
    ["britain-uk", "britain-tudor-stuart", "Tudor, Stuart, and Atlantic Britain", "都铎、斯图亚特与大西洋不列颠", 1485, 1714, "1485-1714", 1534, ["state-empire", "religion-belief", "economy-trade", "war-military"], "Reformation, civil war, overseas companies, Atlantic trade, and parliamentary conflict reshaped British power.", "宗教改革、内战、海外公司、大西洋贸易和议会冲突重塑英国权力。"],
    ["britain-uk", "britain-industrial-empire", "Industrial Britain and global empire", "工业英国与全球帝国", 1714, 1914, "1714-1914", 1771, ["economy-trade", "science-technology", "state-empire"], "Factories, coal, finance, naval power, empire, railways, and urbanization made Britain a global industrial center.", "工厂、煤炭、金融、海军力量、帝国、铁路和城市化让英国成为全球工业中心。"],
    ["britain-uk", "britain-worldwar-welfare", "World wars, welfare state, and decolonization", "世界大战、福利国家与去殖民化", 1914, 1979, "1914-1979", 1914, ["war-military", "state-empire", "economy-trade"], "Two world wars, welfare reforms, decolonization, immigration, and economic change transformed Britain's global role.", "两次世界大战、福利改革、去殖民化、移民和经济变化改变英国的全球角色。"],

    ["united-states", "us-indigenous", "Indigenous North American worlds", "北美原住民世界", -1000, 1607, "before 1607", 1050, ["state-empire", "economy-trade", "religion-belief"], "Diverse Indigenous societies built towns, trade routes, diplomacy, agriculture, and sacred landscapes before European colonization.", "多样的原住民社会在欧洲殖民前建立城镇、贸易路线、外交、农业和神圣景观。"],
    ["united-states", "us-colonial", "Colonial British America", "英属北美殖民地", 1607, 1776, "1607-1776", 1607, ["state-empire", "economy-trade", "religion-belief"], "Settlement, Indigenous dispossession, slavery, religious communities, Atlantic trade, and imperial conflict shaped colonial America.", "定居、原住民被剥夺、奴隶制、宗教社群、大西洋贸易和帝国冲突塑造殖民地美国。"],
    ["united-states", "us-coldwar-digital", "Cold War, civil rights, and digital power", "冷战、民权与数字力量", 1945, 2026, "1945-present", 1945, ["state-empire", "science-technology", "entertainment-media", "economy-trade"], "Cold War institutions, civil rights, computing, finance, media, platforms, and military reach shaped the contemporary United States.", "冷战制度、民权、计算机、金融、媒体、平台和军事力量塑造当代美国。"],

    ["mexico-mesoamerica", "mesoamerica-preclassic", "Preclassic Mesoamerican worlds", "前古典期中美洲世界", -1500, 250, "c. 1500 BCE-250 CE", -1200, ["state-empire", "religion-belief", "architecture"], "Olmec and early Mesoamerican societies developed ritual centers, maize agriculture, iconography, and long-distance exchange.", "奥尔梅克和早期中美洲社会发展仪式中心、玉米农业、图像体系和长距离交换。"],
    ["mexico-mesoamerica", "mesoamerica-classic-postclassic", "Classic Maya, Toltec, and Mexica worlds", "古典玛雅、托尔特克与墨西卡世界", 250, 1521, "250-1521", 250, ["state-empire", "religion-belief", "architecture", "economy-trade"], "Cities, calendars, tribute, warfare, markets, and sacred landscapes shaped Maya, Toltec, Mexica, and neighboring worlds.", "城市、历法、贡赋、战争、市场和神圣景观塑造玛雅、托尔特克、墨西卡及周边世界。"],
    ["mexico-mesoamerica", "mexico-new-spain", "New Spain and colonial society", "新西班牙与殖民社会", 1521, 1821, "1521-1821", 1521, ["state-empire", "economy-trade", "religion-belief"], "Conquest, Catholic institutions, silver, Indigenous communities, caste categories, and Atlantic-Pacific trade shaped New Spain.", "征服、天主教制度、白银、原住民社群、种姓分类和大西洋-太平洋贸易塑造新西班牙。"],
    ["mexico-mesoamerica", "mexico-republic-revolution", "Republic, reform, and revolution", "共和国、改革与革命", 1821, 1940, "1821-1940", 1821, ["state-empire", "war-military", "economy-trade"], "Independence, liberal reform, foreign invasion, dictatorship, revolution, land, and state-building reshaped Mexico.", "独立、自由改革、外来入侵、独裁、革命、土地和国家建设重塑墨西哥。"],

    ["egypt-north-africa", "egypt-pharaonic", "Pharaonic Egypt", "法老埃及", -3100, -332, "c. 3100-332 BCE", -3100, ["state-empire", "religion-belief", "architecture"], "Kingship, Nile agriculture, writing, temples, pyramids, and afterlife beliefs made pharaonic Egypt a long-lived civilization.", "王权、尼罗河农业、书写、神庙、金字塔和来世信仰使法老埃及成为长寿文明。"],
    ["egypt-north-africa", "egypt-hellenistic-roman", "Hellenistic, Roman, and Byzantine Egypt", "希腊化、罗马与拜占庭埃及", -332, 641, "332 BCE-641 CE", -332, ["state-empire", "religion-belief", "science-technology"], "Alexandria, Hellenistic monarchy, Roman grain rule, Christianity, and learning connected Egypt to Mediterranean empires.", "亚历山大城、希腊化王权、罗马粮食统治、基督教和学术把埃及连接到地中海帝国。"],
    ["egypt-north-africa", "egypt-islamic-mamluk-ottoman", "Islamic, Mamluk, and Ottoman Egypt", "伊斯兰、马穆鲁克与奥斯曼埃及", 641, 1882, "641-1882", 969, ["state-empire", "religion-belief", "economy-trade", "architecture"], "Islamic rule, Cairo, Mamluk military power, Ottoman administration, trade, and scholarship shaped medieval and early modern Egypt.", "伊斯兰统治、开罗、马穆鲁克军事权力、奥斯曼行政、贸易和学术塑造中世纪与近世埃及。"],
    ["egypt-north-africa", "egypt-nationalist-republic", "Nationalism, republic, and regional power", "民族主义、共和国与地区力量", 1882, 2026, "1882-present", 1919, ["state-empire", "war-military", "economy-trade"], "British occupation, nationalist politics, Suez, military republic, Arab nationalism, and regional diplomacy shaped modern Egypt.", "英国占领、民族主义政治、苏伊士、军人共和国、阿拉伯民族主义和地区外交塑造现代埃及。"],

    ["west-africa", "west-africa-early-urban", "Early West African settlements and networks", "早期西非聚落与网络", -500, 700, "c. 500 BCE-700 CE", -500, ["state-empire", "economy-trade", "religion-belief"], "Ironworking, farming, river routes, towns, and regional exchange supported early West African social complexity.", "铁器、农业、河流路线、城镇和地区交换支撑早期西非社会复杂性。"],
    ["west-africa", "west-africa-ghana-mali-songhai", "Ghana, Mali, and Songhai", "加纳、马里与桑海", 700, 1600, "700-1600", 800, ["state-empire", "economy-trade", "religion-belief"], "Sahelian states connected gold, salt, caravan trade, Islam, scholarship, and urban centers across West Africa.", "萨赫勒国家连接黄金、盐、商队贸易、伊斯兰、学术和西非城市中心。"],
    ["west-africa", "west-africa-atlantic-slavery", "Atlantic slavery and coastal states", "大西洋奴隶贸易与沿海国家", 1600, 1884, "1600-1884", 1650, ["economy-trade", "war-military", "state-empire"], "Atlantic slavery, firearms, coastal trade, interior states, and resistance violently reshaped West African societies.", "大西洋奴隶贸易、火器、沿海贸易、内陆国家和反抗暴力重塑西非社会。"],
    ["west-africa", "west-africa-colonial-postcolonial", "Colonial and postcolonial West Africa", "殖民与后殖民西非", 1884, 2026, "1884-present", 1884, ["state-empire", "economy-trade", "war-military"], "Colonial partition, forced labor, cash crops, anti-colonial movements, independence, and urbanization shaped modern West Africa.", "殖民瓜分、强迫劳动、经济作物、反殖民运动、独立和城市化塑造现代西非。"]
  ];
  return [...specs, ...additionalSpecs].map(regionPhase);
}

function regionPhase(spec) {
  const [placeId, id, title, titleZh, startYear, endYear, yearLabel, entryYear, lensIds, summary, summaryZh] = spec;
  return {
    id,
    placeId,
    title,
    titleZh,
    startYear,
    endYear,
    yearLabel,
    entryYear,
    lensIds,
    summary,
    summaryZh,
    phaseIntro: summary,
    phaseIntroZh: summaryZh,
    fromPrevious: "This phase marks a change in how this place organized power, culture, economy, or social life compared with earlier arrangements.",
    fromPreviousZh: "这一阶段标志着该地点在权力、文化、经济或社会生活组织方式上相对前一阶段发生变化。",
    definingFeatures: [
      "Regional institutions and identities become more visible.",
      "Local change is shaped by wider trade, war, belief, or imperial systems.",
      "The phase helps locate exact events inside a longer place-based history."
    ],
    definingFeaturesZh: [
      "地区制度和身份变得更加清晰。",
      "地方变化受到更广泛的贸易、战争、信仰或帝国体系塑造。",
      "这一阶段帮助把精确事件放入更长的地点历史中。"
    ],
    towardNext: "Later phases reworked these institutions through conquest, reform, revolution, globalization, or state transformation.",
    towardNextZh: "后续阶段会通过征服、改革、革命、全球化或国家转型重新组织这些制度。",
    representativeEvents: [],
    sourceRefs: ["world-history-encyclopedia", "britannica", "wikidata"],
    confidence: "medium",
    notes: "Curated reference-region phase; boundaries are approximate."
  };
}

function createRegionLineages() {
  const specs = [
    ["europe", "Europe", [["Classical Mediterranean worlds","c. 800 BCE-500 CE","Greek, Roman, and neighboring societies shaped political, urban, military, and cultural patterns.",["state-empire","architecture"],["middle-east"],[]],["Medieval Christian and Islamic frontiers","c. 500-1450","Europe developed through kingdoms, cities, churches, trade routes, and frontier zones.",["religion-belief","state-empire"],["middle-east","africa"],["fall-constantinople"]],["Renaissance and Reformation","c. 1400-1650","Humanism, print, religious reform, and state competition reshaped European society.",["art","religion-belief","literature"],["middle-east"],["fall-constantinople"]],["Imperial and commercial expansion","c. 1500-1800","European states built overseas empires and trade systems with global consequences.",["economy-trade","state-empire"],["americas","africa","india","china"],[]],["Industrial and national age","c. 1750-1914","Industrialization, nationalism, and imperial rivalry transformed politics and everyday life.",["science-technology","state-empire"],["united-states","india","africa"],["edison-light-bulb"]],["World wars and European integration","c. 1914-present","War, reconstruction, welfare states, decolonization, and integration shaped modern Europe.",["war-military","state-empire"],["middle-east","united-states"],["world-war-i"]]]],
    ["middle-east", "Middle East", [["Ancient river and city civilizations","c. 3500-500 BCE","Early states, writing, law, and urban life emerged across Mesopotamia, Anatolia, Egypt, and neighboring regions.",["state-empire","architecture"],["africa","europe"],[]],["Classical and late antique empires","c. 500 BCE-600 CE","Persian, Hellenistic, Roman, Byzantine, and local powers connected the region to wider imperial worlds.",["state-empire","religion-belief"],["europe"],[]],["Islamic caliphates and scholarship","c. 600-1250","Islamic polities, trade, cities, and scholarship linked the region across Afro-Eurasia.",["religion-belief","economy-trade"],["africa","india","china"],[]],["Turkic, Mongol, and regional powers","c. 1000-1500","The region saw shifting military and political formations before and during Ottoman expansion.",["war-military","state-empire"],["europe","china"],["fall-constantinople"]],["Ottoman and Safavid age","c. 1500-1800","Imperial rivalry, administration, trade, and religious institutions shaped early modern politics.",["state-empire","religion-belief"],["europe","india"],["fall-constantinople"]],["Reform, empire, and modern states","c. 1800-present","Reform, colonial pressure, war, oil, nationalism, and state formation shaped the modern region.",["state-empire","economy-trade"],["europe","united-states"],["world-war-i"]]]],
    ["china", "China", [["Early dynastic foundations","c. 1600-221 BCE","Bronze Age states and classical traditions laid foundations for later Chinese political culture.",["state-empire","religion-belief"],["korea","japan"],[]],["Imperial unification and Han order","221 BCE-220 CE","Qin and Han institutions shaped empire, bureaucracy, frontiers, and classical learning.",["state-empire","war-military"],["middle-east"],[]],["Division, Buddhism, and Tang cosmopolitanism","c. 220-907","Periods of division and reunification connected China to Buddhism, steppe worlds, and Silk Road exchange.",["religion-belief","economy-trade"],["india","japan","korea"],[]],["Song-Yuan transformations","c. 960-1368","Commercial growth, printing, urbanization, and Mongol rule reshaped Chinese and Eurasian connections.",["economy-trade","science-technology"],["middle-east","europe"],[]],["Ming-Qing imperial order","c. 1368-1911","Ming and Qing rule combined agrarian empire, commerce, frontier expansion, and global silver links.",["state-empire","economy-trade"],["americas","europe"],["fall-constantinople"]],["Republican, socialist, and reform eras","1912-present","China moved through republic, revolution, socialist state-building, reform, and global economic integration.",["state-empire","economy-trade"],["japan","united-states"],[]]]],
    ["japan", "Japan", [["Yayoi and early state formation","c. 300 BCE-700 CE","Agriculture, metallurgy, and early political centers developed in connection with Korea and China.",["state-empire","economy-trade"],["korea","china"],[]],["Nara and Heian court culture","c. 700-1185","Imperial institutions, Buddhism, literature, and court culture shaped early Japanese identity.",["religion-belief","literature"],["china","korea"],[]],["Warrior governments and medieval society","c. 1185-1600","Shogunates, warrior elites, temples, and regional lords structured political life.",["war-military","state-empire"],["china","korea"],[]],["Tokugawa order","c. 1600-1868","Peace, urban culture, status order, and controlled foreign relations shaped early modern Japan.",["state-empire","entertainment-media"],["china","europe"],[]],["Meiji and imperial Japan","c. 1868-1945","Modernization, industry, empire, and war transformed Japan's place in the world.",["science-technology","state-empire"],["china","korea","united-states"],[]],["Postwar and contemporary Japan","1945-present","Reconstruction, economic growth, media culture, and demographic change shaped modern Japan.",["economy-trade","entertainment-media"],["united-states","china"],[]]]],
    ["india", "India", [["Indus and early urban worlds","c. 2600-1500 BCE","Urban planning and trade characterized early South Asian civilization.",["architecture","economy-trade"],["middle-east"],[]],["Vedic, Mauryan, and classical formations","c. 1500 BCE-500 CE","Religious traditions, empires, trade, and learning developed across the subcontinent.",["religion-belief","state-empire"],["china","middle-east"],[]],["Regional kingdoms and Indian Ocean links","c. 500-1200","Regional powers and trade connected South Asia to Southeast Asia, China, and the Middle East.",["economy-trade","religion-belief"],["china","middle-east","africa"],[]],["Sultanates and Vijayanagara","c. 1200-1550","Islamic sultanates and regional Hindu kingdoms reshaped politics, culture, and architecture.",["state-empire","architecture"],["middle-east"],[]],["Mughal and early modern worlds","c. 1526-1750","Mughal power, regional states, agriculture, craft production, and trade shaped early modern India.",["state-empire","art"],["europe","middle-east"],[]],["Colonial, nationalist, and postcolonial India","c. 1750-present","Company rule, British Raj, nationalism, partition, and independent state-building shaped modern India.",["state-empire","economy-trade"],["europe","china"],["world-war-i"]]]],
    ["africa", "Africa", [["Ancient Nile and Saharan worlds","c. 3000 BCE-500 CE","Nile valley states, Saharan mobility, and regional societies shaped early African histories.",["state-empire","architecture"],["middle-east"],[]],["Trans-Saharan and Swahili networks","c. 700-1500","Trade, Islam, gold, cities, and coastal exchange linked African regions to wider worlds.",["economy-trade","religion-belief"],["middle-east","india"],[]],["West African empires","c. 1200-1600","Mali, Songhai, and related states connected trade, scholarship, and political power.",["state-empire","economy-trade"],["middle-east","europe"],[]],["Atlantic slave trade and African states","c. 1500-1800","Atlantic systems violently reshaped societies while African states and communities adapted and resisted.",["economy-trade","war-military"],["americas","europe"],[]],["Colonial partition and resistance","c. 1800-1960","European conquest, colonial rule, and African resistance transformed political and economic life.",["state-empire","war-military"],["europe"],["world-war-i"]],["Decolonization and contemporary Africa","c. 1950-present","Independence, development debates, urbanization, regional organizations, and cultural production shape modern Africa.",["state-empire","economy-trade"],["europe","united-states"],[]]]],
    ["americas", "Americas", [["First peoples and regional societies","before 1500","Diverse Indigenous societies built varied economies, settlements, trade networks, and political systems.",["state-empire","religion-belief"],["latin-america","united-states"],[]],["Mesoamerican and Andean states","c. 1200-1530","Aztec, Inca, and other societies shaped urban, agricultural, and ritual worlds.",["state-empire","architecture"],["latin-america"],[]],["Conquest and colonial worlds","c. 1492-1800","European conquest, Indigenous resilience, African slavery, and colonial extraction reshaped the hemisphere.",["state-empire","economy-trade"],["europe","africa"],["fall-constantinople"]],["Atlantic revolutions and republics","c. 1776-1850","Revolution, independence, slavery debates, and republic-building transformed political life.",["state-empire","war-military"],["europe","latin-america","united-states"],[]],["Industrial and export economies","c. 1850-1914","Railways, migration, mining, agriculture, and urbanization linked the hemisphere to global markets.",["economy-trade","science-technology"],["europe"],["edison-light-bulb"]],["Modern Americas","c. 1914-present","Mass politics, reform, media, migration, and global power shaped modern American regions.",["state-empire","entertainment-media"],["europe","asia"],[]]]],
    ["united-states", "United States", [["Indigenous North America","before 1600","Many Indigenous societies organized land, diplomacy, trade, and culture across North America.",["state-empire","economy-trade"],["americas"],[]],["Colonial British America","c. 1600-1776","Colonial settlement, Indigenous dispossession, slavery, and Atlantic trade shaped early America.",["state-empire","economy-trade"],["europe","africa"],[]],["Revolution and republic","c. 1776-1865","Independence, constitutionalism, expansion, slavery, and civil war reshaped the republic.",["state-empire","war-military"],["europe","americas"],[]],["Industrial and Gilded Age","c. 1865-1914","Industrial capitalism, immigration, urbanization, and technological systems transformed society.",["economy-trade","science-technology"],["europe","americas"],["edison-light-bulb"]],["Progressive, war, and New Deal eras","c. 1900-1945","Reform, world war, depression, and federal state expansion reshaped U.S. institutions.",["state-empire","war-military"],["europe"],["world-war-i"]],["Cold War to digital age","1945-present","The U.S. became a global power shaped by civil rights, media, technology, finance, and political conflict.",["state-empire","science-technology"],["europe","china","japan"],[]]]]
  ];
  return specs.map(([regionId, regionName, nodes]) => ({
    id: `region-lineage-${regionId}`,
    regionId,
    regionName,
    nodes: nodes.map((node, index) => regionLineageNode(regionId, node, index))
  }));
}

function regionLineageNode(regionId, node, index) {
  const [title, period, summary, lensIds, relatedRegionIds, relatedEventIds] = node;
  const years = parsePeriodYears(period);
  return {
    id: `${regionId}-lineage-${String(index + 1).padStart(2, "0")}`,
    regionId,
    title,
    titleZh: title,
    period,
    yearLabel: period,
    startYear: years.startYear,
    endYear: years.endYear,
    summary,
    summaryZh: summary,
    lensIds,
    relatedRegionIds,
    relatedEventIds,
    sources: ["world-history-encyclopedia", "britannica", "wikidata"],
    sourceRefs: ["world-history-encyclopedia", "britannica", "wikidata"],
    confidence: "medium"
  };
}

function parsePeriodYears(period) {
  const text = String(period || "");
  if (/before/i.test(text)) {
    const years = parseYearsFromText(text);
    return { startYear: -Infinity, endYear: years[0] || null };
  }
  if (/present/i.test(text)) {
    const years = parseYearsFromText(text);
    return { startYear: years[0] || null, endYear: 2026 };
  }
  const years = parseYearsFromText(text);
  if (years.length >= 2) return { startYear: years[0], endYear: years[years.length - 1] };
  if (years.length === 1) return { startYear: years[0], endYear: years[0] };
  return { startYear: null, endYear: null };
}

function parseYearsFromText(value) {
  const text = String(value || "");
  const onlyBce = /BCE/i.test(text) && !/\bCE\b/i.test(text.replace(/BCE/gi, ""));
  return [...text.matchAll(/(\d{1,7})(?:\s*(BCE|CE))?/gi)]
    .map((match) => {
      const year = Number(match[1]);
      const suffix = (match[2] || "").toUpperCase();
      return suffix === "BCE" || (!suffix && onlyBce) ? -year : year;
    })
    .sort((a, b) => a - b);
}

function createLenses() {
  return [
    lens("war-military", "War / Military", "How organized violence, military systems, strategy, and mobilization change societies.", ["World History Encyclopedia", "Britannica", "Our World in Data"], ["state-empire", "economy-trade", "science-technology", "disaster-climate"], ["mobilization", "frontier pressure", "military technology", "trauma", "state capacity"]),
    lens("state-empire", "State / Empire", "How states, empires, laws, borders, and legitimacy form and transform.", ["World History Encyclopedia", "Britannica", "Khan Academy", "Wikidata"], ["war-military", "economy-trade", "religion-belief", "architecture"], ["administration", "imperial rivalry", "law", "taxation", "legitimacy"]),
    lens("economy-trade", "Economy / Trade", "How exchange, labor, money, infrastructure, and markets connect regions.", ["World History Encyclopedia", "Britannica", "Khan Academy", "Wikidata"], ["state-empire", "science-technology", "fashion-daily-life", "war-military"], ["trade routes", "silver flows", "labor systems", "industrialization", "consumer demand"]),
    lens("religion-belief", "Religion / Belief", "How belief systems, ritual, institutions, reform, and identity move through history.", ["World History Encyclopedia", "Britannica", "Khan Academy", "Wikidata"], ["state-empire", "art", "architecture", "literature"], ["conversion", "sacred authority", "pilgrimage", "reform", "political theology"]),
    lens("science-technology", "Science / Technology", "How tools, scientific methods, energy systems, and media infrastructures reshape life.", ["Khan Academy", "Britannica", "Wikidata"], ["economy-trade", "war-military", "entertainment-media", "architecture"], ["knowledge systems", "infrastructure", "diffusion", "standardization", "automation"]),
    lens("art", "Art", "How image-making, style, patronage, markets, and institutions form visual lineages.", ["The Met Heilbrunn Timeline of Art History", "Smarthistory", "Khan Academy"], ["religion-belief", "architecture", "entertainment-media", "fashion-daily-life"], ["patronage", "religion", "trade", "technology", "war"]),
    lens("literature", "Literature", "How oral, manuscript, print, national, modern, and digital literary cultures develop.", ["Britannica", "Khan Academy", "World History Encyclopedia"], ["religion-belief", "state-empire", "art", "entertainment-media"], ["language standardization", "print", "education", "trauma", "public sphere"]),
    lens("fashion-daily-life", "Fashion / Daily Life", "How clothing, domestic life, consumption, labor, and identity shift across periods.", ["Fashion History Timeline", "Google Arts & Culture", "Britannica"], ["economy-trade", "art", "entertainment-media", "science-technology"], ["textiles", "sumptuary rules", "industrial production", "gender roles", "consumer culture"]),
    lens("entertainment-media", "Entertainment / Media", "How performance, spectacle, recording, broadcast, games, and platforms organize attention.", ["Google Arts & Culture", "Britannica", "Khan Academy"], ["science-technology", "art", "literature", "fashion-daily-life"], ["performance spaces", "mass media", "electrification", "recording", "platform networks"]),
    lens("disaster-climate", "Disaster / Climate", "How climate pressure, disease, famine, disasters, and risk systems shape history.", ["World History Encyclopedia", "Britannica", "Our World in Data"], ["war-military", "state-empire", "economy-trade", "science-technology"], ["climate pressure", "disease ecology", "food systems", "risk governance", "adaptation"]),
    lens("architecture", "Architecture", "How built environments, materials, power, faith, and engineering organize space.", ["The Met Heilbrunn Timeline of Art History", "Smarthistory", "Khan Academy"], ["art", "religion-belief", "state-empire", "science-technology"], ["patronage", "sacred space", "urban planning", "engineering", "imperial display"])
  ];
}

function createLensTracks() {
  return [
    {
      id: "war-global-conflicts",
      parentLensId: "war-military",
      title: "Major Wars / Global Conflicts",
      shortDescription: "A focused track for revolutionary wars, world wars, proxy conflicts, nuclear deterrence, and networked warfare.",
      relatedLensIds: ["state-empire", "economy-trade", "science-technology", "religion-belief"],
      bridgeMechanisms: ["mobilization", "alliances", "industrial capacity", "logistics", "civilian vulnerability"]
    },
    {
      id: "computing-pc",
      parentLensId: "science-technology",
      title: "Computing / Personal Computers",
      shortDescription: "A focused track for calculation machines, electronic computing, personal computer platforms, and AI-assisted personal devices.",
      relatedLensIds: ["economy-trade", "entertainment-media", "war-military"],
      bridgeMechanisms: ["automation", "standardization", "platform diffusion", "miniaturization", "consumer adoption"]
    },
    {
      id: "networks-internet",
      parentLensId: "science-technology",
      title: "Networks / Internet",
      shortDescription: "A focused track for communication networks, packet switching, web platforms, mobile internet, and cloud services.",
      relatedLensIds: ["economy-trade", "entertainment-media", "state-empire"],
      bridgeMechanisms: ["network effects", "protocol standardization", "infrastructure", "platform networks", "information flow"]
    },
    {
      id: "software-os",
      parentLensId: "science-technology",
      title: "Software / Operating Systems",
      shortDescription: "A focused track for programming, operating systems, software platforms, open source, and software engineering practice.",
      relatedLensIds: ["economy-trade", "entertainment-media", "state-empire"],
      bridgeMechanisms: ["abstraction", "standardization", "developer communities", "platform ecosystems", "automation"]
    },
    {
      id: "databases-information-systems",
      parentLensId: "science-technology",
      title: "Databases / Information Systems",
      shortDescription: "A focused track for tabulation, databases, enterprise systems, data platforms, and AI-era information infrastructure.",
      relatedLensIds: ["economy-trade", "state-empire", "entertainment-media"],
      bridgeMechanisms: ["record keeping", "query languages", "institutional memory", "scale", "data infrastructure"]
    },
    {
      id: "cybersecurity",
      parentLensId: "science-technology",
      title: "Cybersecurity",
      shortDescription: "A focused track for cryptography, computer security, internet threats, state cyber operations, and cloud security.",
      relatedLensIds: ["war-military", "state-empire", "economy-trade"],
      bridgeMechanisms: ["trust", "encryption", "access control", "risk governance", "adversarial systems"]
    },
    {
      id: "ai-ml",
      parentLensId: "science-technology",
      title: "AI / Machine Learning",
      shortDescription: "A focused track for symbolic AI, machine learning, deep learning, foundation models, generative AI, and AI governance.",
      relatedLensIds: ["economy-trade", "entertainment-media", "war-military"],
      bridgeMechanisms: ["modeling", "automation", "data scale", "prediction", "human-machine collaboration"]
    },
    {
      id: "semiconductors-hardware",
      parentLensId: "science-technology",
      title: "Semiconductors / Hardware",
      shortDescription: "A focused track for electronics, chips, microprocessors, fabrication, GPUs, and AI accelerators.",
      relatedLensIds: ["economy-trade", "war-military", "architecture"],
      bridgeMechanisms: ["miniaturization", "manufacturing scale", "supply chains", "specialization", "energy efficiency"]
    },
    {
      id: "film-cinema-industry",
      parentLensId: "entertainment-media",
      title: "Film / Cinema Industry",
      shortDescription: "A focused track for projected images, cinema exhibition, studio systems, film festivals, blockbusters, franchises, and streaming-era distribution.",
      relatedLensIds: ["art", "science-technology", "economy-trade", "literature"],
      bridgeMechanisms: ["projection", "studio systems", "distribution windows", "star systems", "platform networks"]
    },
    {
      id: "music-recording-culture",
      parentLensId: "entertainment-media",
      title: "Music / Recording Culture",
      shortDescription: "A focused track for music notation, public performance, recorded sound, popular music industries, music video, streaming, and algorithmic discovery.",
      relatedLensIds: ["art", "science-technology", "economy-trade", "fashion-daily-life"],
      bridgeMechanisms: ["recording", "broadcast", "youth culture", "platforms", "algorithmic discovery"]
    },
    {
      id: "painting-visual-art",
      parentLensId: "art",
      title: "Painting / Visual Art",
      shortDescription: "A focused track for painting, drawing, pictorial space, oil media, abstraction, and contemporary visual practice.",
      relatedLensIds: ["religion-belief", "architecture", "entertainment-media", "literature"],
      bridgeMechanisms: ["patronage", "visual language", "materials", "markets", "institutions"]
    },
    {
      id: "sculpture-public-art",
      parentLensId: "art",
      title: "Sculpture / Public Art",
      shortDescription: "A focused track for carved, cast, assembled, monumental, civic, and public artworks.",
      relatedLensIds: ["state-empire", "religion-belief", "architecture", "fashion-daily-life"],
      bridgeMechanisms: ["monumentality", "materials", "public space", "ritual", "memory"]
    },
    {
      id: "photography-visual-media",
      parentLensId: "art",
      title: "Photography / Visual Media",
      shortDescription: "A focused track for photography, documentary images, photojournalism, art photography, and networked image culture.",
      relatedLensIds: ["science-technology", "entertainment-media", "state-empire"],
      bridgeMechanisms: ["reproducibility", "documentation", "mass circulation", "witnessing", "platform networks"]
    },
    {
      id: "digital-new-media-art",
      parentLensId: "art",
      title: "Digital / New Media Art",
      shortDescription: "A focused track for video art, computer art, interactive media, internet art, generative systems, and AI-era art.",
      relatedLensIds: ["science-technology", "entertainment-media", "economy-trade"],
      bridgeMechanisms: ["software", "interactivity", "networks", "platforms", "generative systems"]
    }
  ];
}

function lens(id, title, shortDescription, recommendedSourceTypes, relatedLenses, bridgeMechanisms) {
  return { id, title, shortDescription, recommendedSourceTypes, defaultView: "lineage", relatedLenses, bridgeMechanisms };
}

function createLineageNodes() {
  const sets = [
    ["war-military", ["world-history-encyclopedia", "britannica", "our-world-in-data"], [["Early fortifications and organized conflict",-3500,-1200,"c. 3500-1200 BCE","Mesopotamia / Egypt"],["Classical citizen armies and empires",-800,500,"c. 800 BCE-500 CE","Mediterranean / China"],["Steppe warfare and mobile empires",300,1400,"c. 300-1400","Eurasian steppe"],["Gunpowder warfare",1200,1700,"c. 1200-1700","China / Middle East / Europe"],["Professional armies and fiscal states",1500,1800,"c. 1500-1800","Europe / Ottoman world"],["Industrial war and mass mobilization",1800,1945,"c. 1800-1945","Europe / Americas / Japan"],["Cold War nuclear and proxy systems",1945,1991,"1945-1991","Global"],["Asymmetric and networked warfare",1991,2026,"1991-present","Global"]], ["mobilization","military technology","state power"]],
    ["state-empire", ["world-history-encyclopedia", "britannica", "khan-academy"], [["Early city-states and palace rule",-3500,-1000,"c. 3500-1000 BCE","Mesopotamia / Egypt"],["Classical empires",-550,500,"c. 550 BCE-500 CE","Mediterranean / Persia / China"],["Post-classical imperial worlds",500,1450,"c. 500-1450","Eurasia / Africa"],["Gunpowder empires",1300,1800,"c. 1300-1800","Ottoman / Safavid / Mughal"],["European colonial empires",1500,1945,"c. 1500-1945","Europe / Americas / Asia / Africa"],["Nation-states and revolutions",1750,1914,"c. 1750-1914","Atlantic world / Europe"],["Total war and welfare states",1914,1980,"c. 1914-1980","Europe / Americas / Asia"],["Postcolonial and global governance",1945,2026,"1945-present","Global"]], ["legitimacy","administration","law"]],
    ["economy-trade", ["world-history-encyclopedia", "britannica", "khan-academy"], [["Agrarian surplus and early exchange",-10000,-3000,"c. 10000-3000 BCE","Southwest Asia / multiple regions"],["Bronze Age trade networks",-3000,-1000,"c. 3000-1000 BCE","Mediterranean / Near East"],["Silk Roads and Indian Ocean exchange",-200,1500,"c. 200 BCE-1500 CE","Eurasia / Indian Ocean"],["Trans-Saharan and African trade",700,1600,"c. 700-1600","West Africa / North Africa"],["Atlantic trade and colonial extraction",1500,1800,"c. 1500-1800","Atlantic world"],["Industrial capitalism",1750,1914,"c. 1750-1914","Europe / Americas"],["Mass consumer economies",1900,1980,"c. 1900-1980","Global North / urban centers"],["Digital and platform economies",1990,2026,"1990-present","Global"]], ["trade routes","labor systems","money"]],
    ["religion-belief", ["world-history-encyclopedia", "britannica", "khan-academy"], [["Ritual landscapes and ancestor worlds",-10000,-3000,"c. 10000-3000 BCE","Multiple regions"],["Temple religions and priestly institutions",-3000,-500,"c. 3000-500 BCE","Mesopotamia / Egypt / South Asia"],["Axial age traditions",-800,200,"c. 800-200 BCE","Eurasia"],["Imperial and missionary religions",200,1000,"c. 200-1000","Mediterranean / Asia"],["Islamic worlds and scholarship",600,1500,"c. 600-1500","Middle East / Africa / Asia"],["Reform, confession, and print",1400,1700,"c. 1400-1700","Europe / global missions"],["Secularization and revival",1700,2000,"c. 1700-2000","Global"],["Pluralism and digital religion",2000,2026,"2000-present","Global"]], ["conversion","sacred authority","reform"]],
    ["science-technology", ["khan-academy", "britannica", "wikidata"], [["Stone tools and fire",-2500000,-10000,"deep prehistory","Africa / global"],["Agriculture and metallurgy",-10000,-1000,"c. 10000-1000 BCE","Multiple regions"],["Classical mathematics and medicine",-600,500,"c. 600 BCE-500 CE","Mediterranean / India / China"],["Islamic and medieval knowledge systems",700,1400,"c. 700-1400","Middle East / Europe / Asia"],["Scientific Revolution",1500,1700,"c. 1500-1700","Europe"],["Industrial and electrical systems",1750,1914,"c. 1750-1914","Europe / Americas"],["Computing, space, and nuclear age",1940,1990,"c. 1940-1990","Global"],["Internet, AI, and biotech",1990,2026,"1990-present","Global"]], ["knowledge transmission","infrastructure","automation"]],
    ["art", ["met-heilbrunn", "smarthistory", "khan-academy"], [["Ancient art",-3000,-500,"c. 3000-500 BCE","Africa / Middle East / Asia"],["Classical art",-500,500,"c. 500 BCE-500 CE","Mediterranean"],["Medieval and Byzantine art",500,1400,"c. 500-1400","Europe / Eastern Mediterranean"],["Renaissance art",1400,1600,"c. 1400-1600","Europe"],["Baroque and court spectacle",1600,1750,"c. 1600-1750","Europe / Americas"],["Impressionism and modern life",1860,1890,"c. 1860s-1890","Europe"],["Modernism",1900,1970,"c. 1900-1970","Europe / Americas"],["Contemporary global art",1970,2026,"c. 1970-present","Global"]], ["patronage","religion","technology"]],
    ["literature", ["britannica", "khan-academy", "world-history-encyclopedia"], [["Oral epic and mythic traditions",-2000,-500,"before c. 500 BCE","Multiple regions"],["Classical literary canons",-800,500,"c. 800 BCE-500 CE","Mediterranean / India / China"],["Sacred texts and manuscript cultures",200,1400,"c. 200-1400","Eurasia / Africa"],["Courtly and vernacular literatures",1000,1500,"c. 1000-1500","Europe / Middle East / Asia"],["Print publics and early modern literature",1450,1800,"c. 1450-1800","Europe / global print centers"],["The novel and national literatures",1700,1900,"c. 1700-1900","Europe / Americas / Asia"],["Modernism and postcolonial writing",1900,1980,"c. 1900-1980","Global"],["Digital and transmedia literature",1980,2026,"c. 1980-present","Global"]], ["print","education","public sphere"]],
    ["fashion-daily-life", ["fashion-history-timeline", "google-arts-culture", "britannica"], [["Ancient dress and social rank",-3000,500,"c. 3000 BCE-500 CE","Multiple regions"],["Silk, wool, and courtly textiles",500,1400,"c. 500-1400","Eurasia / Africa"],["Renaissance clothing and sumptuary rules",1400,1600,"c. 1400-1600","Europe"],["Global trade and fashionable materials",1600,1800,"c. 1600-1800","Atlantic / Indian Ocean worlds"],["Industrial textiles and ready-made clothing",1800,1914,"c. 1800-1914","Europe / Americas"],["Modern silhouettes and gender roles",1914,1945,"c. 1914-1945","Europe / Americas"],["Youth culture and mass fashion",1945,1990,"c. 1945-1990","Global"],["Fast fashion and sustainable critique",1990,2026,"1990-present","Global"]], ["textiles","gender roles","consumer culture"]],
    ["entertainment-media", ["google-arts-culture", "britannica", "khan-academy"], [["Ritual performance and storytelling",-3000,-500,"before c. 500 BCE","Multiple regions"],["Theater, games, and public spectacle",-500,500,"c. 500 BCE-500 CE","Mediterranean / Asia"],["Court entertainment and festivals",500,1500,"c. 500-1500","Eurasia / Africa"],["Print, ballads, and urban publics",1450,1800,"c. 1450-1800","Europe / global cities"],["Photography, cinema, and recorded sound",1800,1930,"c. 1800-1930","Europe / Americas"],["Radio, television, and mass culture",1920,1980,"c. 1920-1980","Global"],["Video games and cable-era media",1970,2000,"c. 1970-2000","Global"],["Streaming, social media, and platforms",2000,2026,"2000-present","Global"]], ["mass media","electrification","platforms"]],
    ["disaster-climate", ["world-history-encyclopedia", "britannica", "our-world-in-data"], [["Holocene climate and agriculture",-10000,-3000,"c. 10000-3000 BCE","Multiple regions"],["River floods and early state risk",-3000,-500,"c. 3000-500 BCE","Nile / Tigris-Euphrates / Indus / Yellow River"],["Pandemics in connected worlds",500,1500,"c. 500-1500","Eurasia / Africa"],["Little Ice Age pressures",1300,1850,"c. 1300-1850","Northern Hemisphere"],["Industrial pollution and urban risk",1800,1950,"c. 1800-1950","Industrial cities"],["Modern disaster governance",1900,2000,"c. 1900-2000","Global"],["Climate science and warming",1950,2026,"1950-present","Global"],["Adaptation and resilience debates",2000,2026,"2000-present","Global"]], ["climate pressure","disease ecology","risk governance"]],
    ["architecture", ["met-heilbrunn", "smarthistory", "khan-academy"], [["Monumental sacred and funerary building",-3000,-500,"c. 3000-500 BCE","Egypt / Mesopotamia / Americas"],["Classical orders and urban monuments",-600,500,"c. 600 BCE-500 CE","Mediterranean"],["Buddhist, Hindu, and Islamic sacred space",200,1500,"c. 200-1500","Asia / Middle East"],["Romanesque and Gothic architecture",1000,1500,"c. 1000-1500","Europe"],["Renaissance and Baroque planning",1400,1750,"c. 1400-1750","Europe / Americas"],["Industrial materials and modern cities",1800,1930,"c. 1800-1930","Europe / Americas"],["Modernism and international style",1920,1970,"c. 1920-1970","Global"],["Sustainable and computational architecture",1970,2026,"c. 1970-present","Global"]], ["sacred space","engineering","urban planning"]]
  ];
  const baseNodes = sets.flatMap(([lensId, sourceRefs, entries, sideBridges]) => entries.map((entry, index) => lineageNode(lensId, sourceRefs, sideBridges, entry, index, entries)));
  return [...baseNodes, ...createScienceTechnologyTrackNodes()];
}

function lineageNode(lensId, sourceRefs, sideBridges, entry, index, entries) {
  const [title, startYear, endYear, yearLabel, regions] = entry;
  const id = `${lensId}-${String(index + 1).padStart(2, "0")}`;
  return {
    id,
    lensId,
    title,
    startYear,
    endYear,
    yearLabel,
    primaryRegions: regions.split(" / "),
    relatedRegions: regions.includes("Global") ? ["Global"] : regions.split(" / ").slice(1),
    categories: [getLensTitle(lensId)],
    summary: getPhaseExplanation(id, "en"),
    summaryZh: getPhaseExplanation(id, "zh"),
    ...getGeneratedPhaseDetail(lensId, null, entry, index, entries, sideBridges),
    ...getPhaseDetailEnhancement(id),
    sideBridges,
    representativeEvents: [],
    sourceRefs,
    confidence: title.includes("Digital") || title.includes("present") || title.includes("Approx") ? "medium" : "high",
    notes: "Curated seed node; approximate periodization."
  };
}

function createScienceTechnologyTrackNodes() {
  const sources = ["britannica", "khan-academy", "wikidata"];
  const trackParentLensById = Object.fromEntries(createLensTracks().map((track) => [track.id, track.parentLensId]));
  const tracks = [
    ["war-global-conflicts", [
      ["Revolutionary and Napoleonic wars", 1775, 1815, "c. 1775-1815", "Americas / France / Europe", "Revolutionary politics, mass armies, and imperial ambition made war a force for remaking states, citizenship, and continental order.", 1789],
      ["Industrial wars and imperial crises", 1850, 1914, "c. 1850-1914", "Europe / Americas / Japan / Russia", "Railways, telegraphs, rifles, steamships, mass conscription, and imperial competition changed the speed, scale, and administration of war.", 1861],
      ["World War I and total war", 1914, 1918, "1914-1918", "Europe / Middle East / Global empires", "World War I turned alliance crisis into industrialized total war, linking trenches, empires, civilians, propaganda, and global supply systems.", 1914],
      ["Interwar militarization and civil wars", 1919, 1939, "c. 1919-1939", "Europe / Asia / Global", "The unsettled peace after World War I produced militarized states, ideological conflict, civil wars, and imperial expansion before another world war.", 1931],
      ["World War II and mechanized global war", 1939, 1945, "1939-1945", "Europe / Asia-Pacific / Global", "World War II fused mechanized warfare, genocide, strategic bombing, amphibious operations, occupation, resistance, and atomic weapons.", 1939],
      ["Cold War, proxy wars, and nuclear deterrence", 1945, 1991, "1945-1991", "Global", "Cold War conflict often moved through nuclear deterrence, proxy wars, military alliances, intelligence systems, and decolonizing states.", 1950],
      ["Post-Cold War, asymmetric, and networked war", 1991, 2026, "1991-present", "Global", "Post-Cold War conflict combined precision weapons, insurgency, terrorism, cyber operations, drones, media systems, and renewed great-power war.", 2001]
    ], ["mobilization", "alliances", "industrial capacity", "logistics"]],
    ["computing-pc", [
      ["Mechanical calculation and tabulation", 1600, 1930, "c. 1600-1930", "Europe / Americas", "Mechanical calculation connected mathematics, bureaucracy, and large-scale counting before electronic computers.", 1890],
      ["Wartime electronic computing", 1939, 1946, "c. 1939-1946", "Europe / Americas", "Wartime codebreaking, ballistics, and engineering helped accelerate electronic computing prototypes."],
      ["Mainframes and institutional computing", 1950, 1970, "c. 1950-1970", "Americas / Europe / Japan", "Large organizations used mainframes for administration, research, finance, and state-scale data work."],
      ["Minicomputers and hobbyist computing", 1965, 1980, "c. 1965-1980", "Americas / Europe / Japan", "Smaller machines and hobbyist cultures made computing feel less centralized and more experimental."],
      ["Personal computer platforms", 1975, 1995, "c. 1975-1995", "Americas / Japan / Europe", "Personal computer platforms brought programmable machines into offices, homes, schools, and small businesses.", 1981],
      ["GUI, productivity software, and home computing", 1984, 2000, "c. 1984-2000", "Americas / Japan / Europe", "Graphical interfaces and office software made personal computing more accessible to non-specialists."],
      ["Mobile and cloud-connected personal devices", 2000, 2020, "c. 2000-2020", "Global", "Personal computing shifted toward phones, laptops, cloud storage, and always-connected services."],
      ["AI-assisted personal computing", 2020, 2026, "c. 2020-present", "Global", "AI systems began to reshape search, writing, coding, media creation, and everyday computer use."]
    ], ["automation", "miniaturization", "platform diffusion"]],
    ["networks-internet", [
      ["Telegraph and early electrical networks", 1830, 1900, "c. 1830-1900", "Europe / Americas / Asia", "Electrical communication compressed distance for markets, empires, news, and diplomacy."],
      ["Telephone and switching networks", 1870, 1970, "c. 1870-1970", "Americas / Europe / Japan", "Telephone networks made voice communication part of urban, business, and household infrastructure."],
      ["Packet switching and ARPANET", 1960, 1983, "c. 1960-1983", "Americas / Europe", "Packet switching reframed networks as resilient systems for routing data between computers."],
      ["Internet protocols and academic networks", 1970, 1990, "c. 1970-1990", "Americas / Europe / Global", "Shared protocols and research networks made independent computer networks increasingly interoperable."],
      ["World Wide Web and browsers", 1989, 2000, "c. 1989-2000", "Europe / Americas / Global", "The web gave the internet a public-facing layer of pages, links, browsers, and publishing.", 1989],
      ["Broadband, search, and platform web", 2000, 2010, "c. 2000-2010", "Global", "Faster access, search engines, and web platforms turned the internet into everyday infrastructure."],
      ["Social and mobile internet", 2007, 2020, "c. 2007-2020", "Global", "Smartphones and social platforms made networked media portable, personal, and constant."],
      ["Cloud, streaming, and AI networked services", 2010, 2026, "c. 2010-present", "Global", "Cloud platforms, streaming media, and AI services pushed computing into large networked systems."]
    ], ["protocol standardization", "network effects", "infrastructure"]],
    ["software-os", [
      ["Early programming and stored-program systems", 1940, 1955, "c. 1940-1955", "Britain / Americas", "Programming emerged from wiring, machine code, mathematical labor, and the stored-program idea that instructions could become data.", 1948],
      ["Mainframe software, compilers, and operating systems", 1955, 1970, "c. 1955-1970", "Americas / Europe", "Compilers, batch systems, and operating systems turned computers into shared institutional platforms rather than one-off machines.", 1957],
      ["Unix, C, and portable software", 1969, 1985, "c. 1969-1985", "Americas / Europe", "Unix and C made software more portable, modular, and reusable across research, industry, and later networked systems.", 1969],
      ["Personal software and desktop platforms", 1980, 1995, "c. 1980-1995", "Americas / Japan / Europe", "Personal software linked operating systems, office tools, games, and graphical interfaces to mass-market PCs.", 1981],
      ["Open source and web software", 1991, 2005, "c. 1991-2005", "Global", "Open source communities and web software made code collaboration, server software, and public protocols central to internet growth.", 1991],
      ["Mobile app ecosystems", 2007, 2015, "c. 2007-2015", "Global", "App stores, SDKs, and mobile operating systems reorganized software distribution around phones and platform gatekeepers.", 2008],
      ["DevOps, containers, and platform engineering", 2013, 2022, "c. 2013-2022", "Global", "Containers, cloud automation, continuous delivery, and orchestration changed how teams build and operate software.", 2014],
      ["AI-assisted software development", 2021, 2026, "2021-present", "Global", "Code assistants and language models began reshaping programming interfaces, debugging, documentation, and developer workflows.", 2021]
    ], ["abstraction", "developer communities", "platform ecosystems"]],
    ["databases-information-systems", [
      ["Tabulation and administrative data", 1890, 1960, "c. 1890-1960", "Americas / Europe", "Punched cards and tabulating machines made population, business, and state information mechanically sortable at scale.", 1890],
      ["Relational model and database theory", 1970, 1980, "c. 1970-1980", "Americas / Europe", "The relational model reframed data as tables, relations, and queries independent of physical storage details.", 1970],
      ["SQL and enterprise databases", 1974, 1990, "c. 1974-1990", "Americas / Europe / Japan", "SQL systems and commercial databases made structured data a core tool of banking, administration, and enterprise computing.", 1979],
      ["ERP and institutional information systems", 1990, 2005, "c. 1990-2005", "Europe / Americas / Asia", "Enterprise systems integrated finance, logistics, human resources, and production into shared organizational data models.", 1992],
      ["Data warehouses and business intelligence", 1990, 2010, "c. 1990-2010", "Americas / Europe", "Warehouses, analytics tools, and dashboards turned operational records into management knowledge.", 1996],
      ["Web-scale databases and NoSQL", 2005, 2015, "c. 2005-2015", "Global", "Large web platforms pushed databases toward distributed storage, horizontal scale, and flexible data models.", 2006],
      ["Big data, streaming, and cloud data platforms", 2010, 2022, "c. 2010-2022", "Global", "Cloud warehouses, streaming systems, and data lakes made data infrastructure elastic and continuously updated.", 2014],
      ["Vector databases and AI data infrastructure", 2019, 2026, "2019-present", "Global", "Embeddings, retrieval, and vector search made data infrastructure part of AI application design.", 2021]
    ], ["record keeping", "query languages", "data infrastructure"]],
    ["cybersecurity", [
      ["Cryptography and wartime codebreaking", 1930, 1950, "c. 1930-1950", "Europe / Americas", "Modern cryptanalysis connected mathematics, machines, intelligence work, and wartime state power.", 1940],
      ["Early computer access control", 1960, 1980, "c. 1960-1980", "Americas / Europe", "Time-sharing, passwords, and operating-system protection made security part of shared computing.", 1965],
      ["Network worms and internet security", 1988, 1995, "c. 1988-1995", "Americas / Global", "The first widely visible network incidents showed that connected systems could fail and spread risk quickly.", 1988],
      ["Public-key infrastructure and SSL/TLS", 1976, 2000, "c. 1976-2000", "Americas / Europe", "Public-key cryptography and browser security made encrypted commerce and authentication possible at internet scale.", 1994],
      ["Malware, botnets, and cybercrime", 2000, 2010, "c. 2000-2010", "Global", "Worms, botnets, spam, and credential theft turned security into an everyday economic and infrastructural problem.", 2000],
      ["State cyber operations", 2010, 2020, "c. 2010-2020", "Global", "Cyber operations became part of state competition, espionage, sabotage, and critical-infrastructure risk.", 2010],
      ["Ransomware and supply-chain security", 2017, 2022, "c. 2017-2022", "Global", "Ransomware and software supply-chain attacks showed how digital dependence could become operational vulnerability.", 2017],
      ["Cloud security and zero trust", 2020, 2026, "2020-present", "Global", "Cloud identity, remote work, and distributed systems pushed security toward continuous verification and least privilege.", 2020]
    ], ["trust", "encryption", "access control", "risk governance"]],
    ["ai-ml", [
      ["Foundations of automata, logic, and computation", 1936, 1956, "c. 1936-1956", "Britain / Americas / Europe", "Formal models of computation created a language for machines, symbols, algorithms, and intelligent behavior.", 1950],
      ["Symbolic AI and early laboratories", 1956, 1974, "c. 1956-1974", "Americas / Britain", "Early AI labs explored symbolic reasoning, search, language, robotics, and problem solving.", 1956],
      ["Expert systems and knowledge engineering", 1970, 1990, "c. 1970-1990", "Americas / Japan / Europe", "Expert systems encoded specialist knowledge into rules, making AI useful in narrow institutional domains.", 1980],
      ["Statistical machine learning", 1990, 2012, "c. 1990-2012", "Global", "Machine learning shifted AI toward data, probability, benchmarks, and pattern recognition.", 1997],
      ["Deep learning", 2012, 2017, "c. 2012-2017", "Americas / Britain / China", "Deep neural networks scaled with GPUs, large datasets, and new architectures for perception and prediction.", 2012],
      ["Transformers and foundation models", 2017, 2022, "c. 2017-2022", "Global", "Transformers made large-scale pretraining a general method for language, vision, coding, and multimodal AI.", 2017],
      ["Generative AI products", 2022, 2026, "2022-present", "Global", "Generative AI moved model capabilities into public products for writing, image-making, coding, search, and work.", 2022],
      ["AI infrastructure and governance", 2023, 2026, "2023-present", "Global", "AI development became tied to compute supply, model evaluation, regulation, safety debates, and platform control.", 2023]
    ], ["modeling", "automation", "data scale", "human-machine collaboration"]],
    ["semiconductors-hardware", [
      ["Vacuum tubes and early electronics", 1900, 1947, "c. 1900-1947", "Europe / Americas", "Electronic switching and amplification began with tubes, radio, radar, and early digital machines.", 1943],
      ["Transistors and solid-state electronics", 1947, 1958, "c. 1947-1958", "Americas / Japan / Europe", "The transistor made electronics smaller, more reliable, and less power-hungry than vacuum-tube systems.", 1947],
      ["Integrated circuits", 1958, 1971, "c. 1958-1971", "Americas / Japan / Europe", "Integrated circuits put multiple components onto chips, creating the basis for modern microelectronics.", 1958],
      ["Microprocessors and personal computing hardware", 1971, 1990, "c. 1971-1990", "Americas / Japan / Europe", "Microprocessors concentrated computing power into commodity chips used in calculators, PCs, consoles, and embedded devices.", 1971],
      ["RISC, workstations, and specialized chips", 1980, 2000, "c. 1980-2000", "Americas / Japan / Europe", "Processor design diversified through RISC architectures, graphics hardware, signal processors, and workstations.", 1985],
      ["Fabless design, EDA, and foundries", 1987, 2010, "c. 1987-2010", "Taiwan / Americas / Global", "Chip production split into design, tools, fabrication, packaging, and global supply chains.", 1987],
      ["GPUs, mobile SoCs, and parallel computing", 2000, 2020, "c. 2000-2020", "Global", "Graphics processors and system-on-chip designs made parallel computing central to phones, games, data centers, and AI.", 2006],
      ["Advanced nodes and AI accelerators", 2020, 2026, "2020-present", "Global", "Advanced manufacturing, accelerators, packaging, and export controls made chips a strategic infrastructure of AI.", 2020]
    ], ["miniaturization", "manufacturing scale", "supply chains", "specialization"]],
    ["film-cinema-industry", [
      ["Optical toys and projected images", 1830, 1895, "c. 1830-1895", "Europe / Americas", "Optical toys, photography, chronophotography, and projection devices made moving images technically and commercially imaginable.", 1878],
      ["Early cinema and nickelodeons", 1895, 1915, "c. 1895-1915", "France / United States / Europe", "Short films, public screenings, traveling exhibitors, and small storefront theaters turned motion pictures into popular entertainment.", 1895],
      ["Silent feature films and studio formation", 1915, 1927, "c. 1915-1927", "United States / Europe / India", "Feature-length storytelling, stars, film grammar, and vertically organized studios began to define cinema as an industry.", 1919],
      ["Sound cinema and classical studio systems", 1927, 1948, "c. 1927-1948", "United States / Europe / Japan", "Synchronized sound reorganized acting, writing, music, theater technology, and the mature Hollywood studio system.", 1927],
      ["Postwar cinema, television pressure, and art film", 1948, 1967, "c. 1948-1967", "Europe / Japan / United States / India", "Television pressure, decolonization, film festivals, auteur criticism, and national new waves widened cinema beyond classical studio formulas.", 1951],
      ["New Hollywood and global blockbuster cinema", 1967, 1989, "c. 1967-1989", "United States / Europe / Japan / Global", "Youth culture, directors, ratings, summer releases, special effects, and franchise logic reshaped popular cinema.", 1975],
      ["Digital effects, home video, and franchise cinema", 1989, 2008, "c. 1989-2008", "United States / Japan / Global", "CGI, home video, DVD, global distribution, and intellectual-property franchises changed film production and revenue models.", 1993],
      ["Streaming-era cinema and platform distribution", 2008, 2026, "2008-present", "Global", "Streaming platforms, changing release windows, global festivals, fandom, and data-driven distribution reshaped what counts as cinema.", 2013]
    ], ["projection", "studio systems", "distribution", "platform networks"]],
    ["music-recording-culture", [
      ["Ritual, oral, and court music cultures", -3000, 1500, "before 1500", "Multiple regions", "Music moved through ritual, memory, court ceremony, oral transmission, and early notation before modern recording or mass media existed.", 1025],
      ["Print, notation, opera, and public music", 1500, 1800, "1500-1800", "Europe / global cities", "Music print, notation, opera, public theaters, and commercial patronage turned performance into a more portable urban culture.", 1600],
      ["Concert publics, nationalism, and commercial music", 1800, 1900, "1800-1900", "Europe / Americas", "Concert halls, virtuoso culture, music publishing, nationalism, and urban middle-class publics reshaped music as public art and business.", 1808],
      ["Phonograph, gramophone, and recorded sound", 1877, 1930, "1877-1930", "Americas / Europe", "Recorded sound detached performance from the moment of performance, creating new technologies, archives, stars, and record markets.", 1877],
      ["Radio, jazz, blues, and popular music industries", 1920, 1960, "1920-1960", "Americas / global cities", "Radio, records, jazz, blues, microphones, jukeboxes, and labels turned popular music into broadcast and recording industries.", 1920],
      ["Rock, youth culture, albums, and global pop", 1950, 1980, "1950-1980", "United States / Britain / Japan / Global", "Rock, soul, folk, pop, festivals, albums, portable listening, and youth identity made music a central mass-cultural language.", 1964],
      ["MTV, hip-hop, electronic music, CDs, and global music video", 1980, 2005, "1980-2005", "United States / Japan / Global", "Music video, hip-hop, electronic instruments, sampling, CDs, file sharing, and global cable media remade how music circulated.", 1981],
      ["Streaming platforms, social music, and algorithmic discovery", 2005, 2026, "2005-present", "Global", "Streaming platforms, social video, playlists, recommendation systems, and creator economies reorganized music around networked discovery.", 2008]
    ], ["recording", "broadcast", "youth culture", "platforms"]],
    ["painting-visual-art", [
      ["Pigments, walls, and sacred images", -40000, -3000, "before c. 3000 BCE", "Europe / Africa / Asia", "Pigments on bodies, objects, and walls made image-making part of ritual, memory, and shared symbolic life long before formal art institutions.", -17000],
      ["Court, tomb, and temple painting", -3000, -500, "c. 3000-500 BCE", "Egypt / Mesopotamia / China", "Painting served rulers, temples, tombs, and ritual systems, tying images to authority, afterlife beliefs, and written cultures.", -1350],
      ["Classical and manuscript image worlds", -500, 1000, "c. 500 BCE-1000 CE", "Mediterranean / South Asia / East Asia", "Painted images moved between walls, scrolls, manuscripts, panels, and portable objects across classical and religious cultures.", 79],
      ["Icon, fresco, and devotional painting", 500, 1400, "c. 500-1400", "Europe / Byzantine world / Asia", "Religious painting shaped sacred space, devotion, teaching, and the visual authority of churches, courts, monasteries, and temples.", 1305],
      ["Renaissance perspective and oil painting", 1400, 1600, "c. 1400-1600", "Europe", "Perspective, oil techniques, portraiture, and humanist patronage transformed painting into a field of spatial illusion, authorship, and prestige.", 1511],
      ["Baroque, court, and global painting markets", 1600, 1800, "c. 1600-1800", "Europe / Americas / Asia", "Dramatic light, court spectacle, collecting, print circulation, and global trade reshaped painting as both devotion and market object.", 1656],
      ["Modern painting and abstraction", 1800, 1970, "c. 1800-1970", "Europe / Americas / Japan", "Industrial cities, photography, colonial encounters, and avant-garde movements pushed painting away from imitation toward color, surface, and abstraction.", 1874],
      ["Contemporary global visual art", 1970, 2026, "1970-present", "Global", "Painting persisted inside a global art world of biennials, markets, identity politics, installation, digital circulation, and hybrid media.", 1989]
    ], ["patronage", "visual language", "materials", "markets"]],
    ["sculpture-public-art", [
      ["Ritual objects and early carved forms", -40000, -3000, "before c. 3000 BCE", "Multiple regions", "Carved, modeled, and assembled objects gave bodies, animals, ancestors, and ritual forces durable material form.", -25000],
      ["Monumental royal and funerary sculpture", -3000, -500, "c. 3000-500 BCE", "Egypt / Mesopotamia / Americas", "Large-scale sculpture made rulers, gods, tombs, and cities visible through stone, clay, metal, and monumental labor.", -2500],
      ["Classical figural sculpture", -600, 500, "c. 600 BCE-500 CE", "Mediterranean / South Asia", "Figural sculpture became a language for bodies, gods, rulers, civic ideals, and technical mastery in stone and bronze.", -450],
      ["Sacred sculpture across religious worlds", 200, 1500, "c. 200-1500", "Asia / Europe / Africa", "Sculpture filled temples, churches, shrines, and pilgrimage sites with sacred presence, narrative, and ritual focus.", 600],
      ["Renaissance sculpture and civic monuments", 1400, 1600, "c. 1400-1600", "Europe", "Artists revived classical form while civic patrons used sculpture to stage memory, virtue, status, and urban identity.", 1504],
      ["Baroque monuments and imperial display", 1600, 1800, "c. 1600-1800", "Europe / Americas", "Dynamic sculpture, fountains, altars, and monuments turned power, faith, and urban planning into theatrical public experience.", 1652],
      ["Modern sculpture, abstraction, and public memory", 1800, 1970, "c. 1800-1970", "Europe / Americas", "Sculpture moved from academic monuments toward abstraction, found materials, memorials, and experiments with space.", 1917],
      ["Installation, public art, and social practice", 1970, 2026, "1970-present", "Global", "Sculpture expanded into installation, land art, participatory works, public controversy, and community-based practice.", 1977]
    ], ["monumentality", "materials", "public space", "memory"]],
    ["photography-visual-media", [
      ["Camera obscura and optical image experiments", 1500, 1839, "c. 1500-1839", "Europe / China / Islamic world", "Optical devices, chemistry, and drawing aids prepared the idea that light itself could produce images.", 1600],
      ["Daguerreotype and early photographic studios", 1839, 1860, "c. 1839-1860", "France / Britain / United States", "Early photography turned portraiture, documentation, science, and memory into chemically fixed images.", 1839],
      ["Documentary, portrait, and colonial photography", 1860, 1914, "c. 1860-1914", "Europe / Americas / Asia / Africa", "Photography entered archives, family albums, police systems, colonial surveys, war reporting, and commercial studios.", 1871],
      ["Modernist photography and mass magazines", 1914, 1945, "c. 1914-1945", "Europe / Americas / Japan", "Small cameras, magazines, avant-garde design, and war imagery made photography central to modern visual culture.", 1925],
      ["Photojournalism, advertising, and art photography", 1945, 1980, "c. 1945-1980", "Global", "Photography shaped news, advertising, documentary truth claims, museum collections, and postwar consumer culture.", 1955],
      ["Color photography and postmodern image culture", 1970, 2000, "c. 1970-2000", "Global", "Color, appropriation, staged images, and theory challenged older divisions between art, media, and everyday images.", 1976],
      ["Digital photography and networked images", 1990, 2010, "c. 1990-2010", "Global", "Digital cameras, editing software, image databases, and the web changed how photographs were made, stored, and shared.", 2000],
      ["Smartphone, platform, and AI image culture", 2010, 2026, "2010-present", "Global", "Phones, social platforms, filters, computer vision, and generative tools made image-making continuous and networked.", 2010]
    ], ["reproducibility", "documentation", "mass circulation", "platform networks"]],
    ["digital-new-media-art", [
      ["Film, video, and electronic image experiments", 1920, 1965, "c. 1920-1965", "Europe / Americas", "Artists used film, television signals, electronics, and performance to loosen art from static objects.", 1963],
      ["Computer art and algorithmic graphics", 1965, 1985, "c. 1965-1985", "Europe / Americas", "Early computer artists used plotters, algorithms, labs, and engineering contexts to make images through code and systems.", 1968],
      ["Video art, installation, and media critique", 1965, 1990, "c. 1965-1990", "Americas / Europe / Japan", "Portable video and installation let artists critique television, surveillance, performance, and the gallery itself.", 1974],
      ["Interactive multimedia and CD-ROM art", 1985, 2000, "c. 1985-2000", "Americas / Europe / Japan", "Multimedia interfaces, CD-ROMs, games, and early interactive systems made viewers into users and participants.", 1993],
      ["Internet art and networked participation", 1994, 2010, "c. 1994-2010", "Global", "Net art used websites, mailing lists, browsers, code, and online communities as artistic material.", 1994],
      ["Social media, platforms, and post-internet art", 2010, 2020, "c. 2010-2020", "Global", "Artists responded to platform culture, feeds, memes, surveillance, online identity, and the collapse of online/offline image worlds.", 2012],
      ["Blockchain, NFTs, and digital ownership debates", 2017, 2022, "c. 2017-2022", "Global", "Crypto markets and NFTs reframed digital scarcity, ownership, speculation, and artist economies.", 2021],
      ["Generative AI and synthetic image culture", 2022, 2026, "2022-present", "Global", "AI image systems made prompting, training data, authorship, labor, and synthetic media central artistic questions.", 2022]
    ], ["software", "interactivity", "networks", "generative systems"]]
  ];

  return tracks.flatMap(([trackId, entries, sideBridges]) => entries.map(([title, startYear, endYear, yearLabel, regions, summary, focusYear], index) => {
    const id = `${trackId}-${String(index + 1).padStart(2, "0")}`;
    const entry = [title, startYear, endYear, yearLabel, regions, summary, focusYear];
    const parentLensId = trackParentLensById[trackId] || "science-technology";
    return {
      id,
      lensId: parentLensId,
      trackIds: [trackId],
      title,
      titleZh: getTrackPhaseTitleZh(id),
      startYear,
      endYear,
      yearLabel,
      primaryRegions: regions.split(" / "),
      relatedRegions: regions.includes("Global") ? ["Global"] : regions.split(" / ").slice(1),
      categories: [getLensTitle(parentLensId)],
      summary: getPhaseExplanation(id, "en") || summary,
      summaryZh: getPhaseExplanation(id, "zh") || getTrackPhaseSummaryZh(id) || summary,
      ...getGeneratedPhaseDetail(parentLensId, trackId, entry, index, entries, sideBridges),
      ...getPhaseDetailEnhancement(id),
      ...(focusYear ? { focusYear } : {}),
      sideBridges,
      representativeEvents: [],
      sourceRefs: sources,
      confidence: endYear >= 2026 ? "medium" : "high",
      notes: `Focused ${getLensTitle(parentLensId)} track node; curated broad periodization.`
    };
  }));
}

function getTrackPhaseTitleZh(id) {
  const titles = {
    "war-global-conflicts-01": "革命战争与拿破仑战争",
    "war-global-conflicts-02": "工业战争与帝国危机",
    "war-global-conflicts-03": "第一次世界大战与总体战",
    "war-global-conflicts-04": "战间期军事化与内战",
    "war-global-conflicts-05": "第二次世界大战与机械化全球战争",
    "war-global-conflicts-06": "冷战、代理战争与核威慑",
    "war-global-conflicts-07": "后冷战、非对称与网络化战争",
    "software-os-01": "早期编程与存储程序系统",
    "software-os-02": "大型机软件、编译器与操作系统",
    "software-os-03": "Unix、C 与可移植软件",
    "software-os-04": "个人软件与桌面平台",
    "software-os-05": "开源与 Web 软件",
    "software-os-06": "移动应用生态",
    "software-os-07": "DevOps、容器与平台工程",
    "software-os-08": "AI 辅助软件开发",
    "databases-information-systems-01": "制表与行政数据",
    "databases-information-systems-02": "关系模型与数据库理论",
    "databases-information-systems-03": "SQL 与企业数据库",
    "databases-information-systems-04": "ERP 与机构信息系统",
    "databases-information-systems-05": "数据仓库与商业智能",
    "databases-information-systems-06": "Web 规模数据库与 NoSQL",
    "databases-information-systems-07": "大数据、流处理与云数据平台",
    "databases-information-systems-08": "向量数据库与 AI 数据基础设施",
    "cybersecurity-01": "密码学与战时代码破译",
    "cybersecurity-02": "早期计算机访问控制",
    "cybersecurity-03": "网络蠕虫与互联网安全",
    "cybersecurity-04": "公钥基础设施与 SSL/TLS",
    "cybersecurity-05": "恶意软件、僵尸网络与网络犯罪",
    "cybersecurity-06": "国家网络行动",
    "cybersecurity-07": "勒索软件与供应链安全",
    "cybersecurity-08": "云安全与零信任",
    "ai-ml-01": "自动机、逻辑与计算基础",
    "ai-ml-02": "符号 AI 与早期实验室",
    "ai-ml-03": "专家系统与知识工程",
    "ai-ml-04": "统计机器学习",
    "ai-ml-05": "深度学习",
    "ai-ml-06": "Transformer 与基础模型",
    "ai-ml-07": "生成式 AI 产品",
    "ai-ml-08": "AI 基础设施与治理",
    "semiconductors-hardware-01": "真空管与早期电子技术",
    "semiconductors-hardware-02": "晶体管与固态电子",
    "semiconductors-hardware-03": "集成电路",
    "semiconductors-hardware-04": "微处理器与个人计算硬件",
    "semiconductors-hardware-05": "RISC、工作站与专用芯片",
    "semiconductors-hardware-06": "无晶圆厂设计、EDA 与代工",
    "semiconductors-hardware-07": "GPU、移动 SoC 与并行计算",
    "semiconductors-hardware-08": "先进制程与 AI 加速器",
    "film-cinema-industry-01": "光学玩具与投影影像",
    "film-cinema-industry-02": "早期电影与镍币影院",
    "film-cinema-industry-03": "默片长片与制片厂形成",
    "film-cinema-industry-04": "有声电影与经典制片厂体系",
    "film-cinema-industry-05": "战后电影、电视压力与艺术电影",
    "film-cinema-industry-06": "新好莱坞与全球大片电影",
    "film-cinema-industry-07": "数字特效、家庭录像与系列电影",
    "film-cinema-industry-08": "流媒体时代电影与平台发行",
    "music-recording-culture-01": "仪式、口传与宫廷音乐文化",
    "music-recording-culture-02": "印刷、记谱、歌剧与公共音乐",
    "music-recording-culture-03": "音乐会公众、民族主义与商业音乐",
    "music-recording-culture-04": "留声机、唱片机与录音",
    "music-recording-culture-05": "广播、爵士、布鲁斯与流行音乐产业",
    "music-recording-culture-06": "摇滚、青年文化、专辑与全球流行",
    "music-recording-culture-07": "MTV、嘻哈、电子音乐、CD 与全球音乐视频",
    "music-recording-culture-08": "流媒体、社交音乐与算法发现",
    "painting-visual-art-01": "颜料、墙面与神圣图像",
    "painting-visual-art-02": "宫廷、墓葬与神庙绘画",
    "painting-visual-art-03": "古典与手稿图像世界",
    "painting-visual-art-04": "圣像、湿壁画与宗教绘画",
    "painting-visual-art-05": "文艺复兴透视与油画",
    "painting-visual-art-06": "巴洛克、宫廷与全球绘画市场",
    "painting-visual-art-07": "现代绘画与抽象",
    "painting-visual-art-08": "当代全球视觉艺术",
    "sculpture-public-art-01": "仪式物与早期雕刻形式",
    "sculpture-public-art-02": "纪念性王权与墓葬雕塑",
    "sculpture-public-art-03": "古典人物雕塑",
    "sculpture-public-art-04": "宗教世界中的神圣雕塑",
    "sculpture-public-art-05": "文艺复兴雕塑与城市纪念物",
    "sculpture-public-art-06": "巴洛克纪念物与帝国展示",
    "sculpture-public-art-07": "现代雕塑、抽象与公共记忆",
    "sculpture-public-art-08": "装置、公共艺术与社会实践",
    "photography-visual-media-01": "暗箱与光学图像实验",
    "photography-visual-media-02": "银版摄影与早期照相馆",
    "photography-visual-media-03": "纪实、肖像与殖民摄影",
    "photography-visual-media-04": "现代主义摄影与大众杂志",
    "photography-visual-media-05": "新闻摄影、广告与艺术摄影",
    "photography-visual-media-06": "彩色摄影与后现代图像文化",
    "photography-visual-media-07": "数字摄影与网络图像",
    "photography-visual-media-08": "智能手机、平台与 AI 图像文化",
    "digital-new-media-art-01": "电影、视频与电子图像实验",
    "digital-new-media-art-02": "计算机艺术与算法图形",
    "digital-new-media-art-03": "视频艺术、装置与媒介批判",
    "digital-new-media-art-04": "互动多媒体与 CD-ROM 艺术",
    "digital-new-media-art-05": "互联网艺术与网络参与",
    "digital-new-media-art-06": "社交媒体、平台与后互联网艺术",
    "digital-new-media-art-07": "区块链、NFT 与数字所有权争论",
    "digital-new-media-art-08": "生成式 AI 与合成图像文化"
  };
  return titles[id] || "";
}

function getTrackPhaseSummaryZh(id) {
  const summaries = {
    "war-global-conflicts-01": "革命政治、大众动员和拿破仑帝国扩张让战争成为重塑国家、公民身份和欧洲秩序的力量。",
    "war-global-conflicts-02": "铁路、电报、步枪、蒸汽船、征兵和帝国竞争改变战争的速度、规模和行政组织。",
    "war-global-conflicts-03": "第一次世界大战把同盟危机变成工业化总体战，把战壕、帝国、平民、宣传和全球补给体系连接起来。",
    "war-global-conflicts-04": "第一次世界大战后的不稳定和平制造了军事化国家、意识形态冲突、内战和帝国扩张。",
    "war-global-conflicts-05": "第二次世界大战把机械化战争、种族灭绝、战略轰炸、两栖作战、占领、抵抗和原子武器合并为全球战争。",
    "war-global-conflicts-06": "冷战冲突常通过核威慑、代理战争、军事同盟、情报体系和去殖民国家展开。",
    "war-global-conflicts-07": "后冷战冲突结合精确武器、叛乱、恐怖主义、网络行动、无人机、媒介系统和重新出现的大国战争。",
    "software-os-01": "编程从接线、机器码、数学劳动和存储程序思想中出现：指令本身开始可以像数据一样被保存和修改。",
    "software-os-02": "编译器、批处理系统和操作系统让计算机从一次性机器变成机构共享的平台。",
    "software-os-03": "Unix 和 C 让软件更可移植、模块化、可复用，并影响研究、工业和后来的网络系统。",
    "software-os-04": "个人软件把操作系统、办公工具、游戏和图形界面连接到大众 PC 市场。",
    "software-os-05": "开源社群和 Web 软件让代码协作、服务器软件和公共协议成为互联网增长的核心。",
    "software-os-06": "应用商店、SDK 和移动操作系统围绕手机与平台守门人重组软件分发。",
    "software-os-07": "容器、云自动化、持续交付和编排改变团队构建与运行软件的方式。",
    "software-os-08": "代码助手和语言模型开始改变编程界面、调试、文档和开发者工作流。",
    "databases-information-systems-01": "穿孔卡和制表机器让人口、商业与国家信息能够被机械化地大规模排序。",
    "databases-information-systems-02": "关系模型把数据重新理解为表、关系和查询，使其不再依赖具体物理存储细节。",
    "databases-information-systems-03": "SQL 系统和商业数据库让结构化数据成为银行、行政和企业计算的核心工具。",
    "databases-information-systems-04": "企业系统把财务、物流、人力和生产整合进共享的组织数据模型。",
    "databases-information-systems-05": "数据仓库、分析工具和仪表盘把运营记录转化为管理知识。",
    "databases-information-systems-06": "大型 Web 平台推动数据库走向分布式存储、横向扩展和更灵活的数据模型。",
    "databases-information-systems-07": "云仓库、流处理和数据湖让数据基础设施变得弹性化并持续更新。",
    "databases-information-systems-08": "嵌入、检索和向量搜索让数据基础设施成为 AI 应用设计的一部分。",
    "cybersecurity-01": "现代密码分析把数学、机器、情报工作和战时国家权力连接起来。",
    "cybersecurity-02": "分时系统、密码和操作系统保护让安全成为共享计算的一部分。",
    "cybersecurity-03": "早期网络事件显示互联系统会快速扩散故障与风险。",
    "cybersecurity-04": "公钥密码和浏览器安全让互联网规模的加密商务与身份认证成为可能。",
    "cybersecurity-05": "蠕虫、僵尸网络、垃圾邮件和凭证盗窃让安全成为日常经济和基础设施问题。",
    "cybersecurity-06": "网络行动成为国家竞争、间谍、破坏和关键基础设施风险的一部分。",
    "cybersecurity-07": "勒索软件和软件供应链攻击显示数字依赖会变成运营脆弱性。",
    "cybersecurity-08": "云身份、远程工作和分布式系统推动安全走向持续验证和最小权限。",
    "ai-ml-01": "计算的形式模型为机器、符号、算法和智能行为建立了语言。",
    "ai-ml-02": "早期 AI 实验室探索符号推理、搜索、语言、机器人和问题求解。",
    "ai-ml-03": "专家系统把专业知识编码为规则，让 AI 在狭窄机构领域中可用。",
    "ai-ml-04": "机器学习把 AI 推向数据、概率、基准测试和模式识别。",
    "ai-ml-05": "深度神经网络依靠 GPU、大数据集和新架构在感知与预测任务上扩展。",
    "ai-ml-06": "Transformer 让大规模预训练成为语言、视觉、代码和多模态 AI 的通用方法。",
    "ai-ml-07": "生成式 AI 把模型能力带进面向公众的写作、图像、编程、搜索和工作产品。",
    "ai-ml-08": "AI 发展越来越与算力供应、模型评估、监管、安全争论和平台控制绑定。",
    "semiconductors-hardware-01": "电子开关和放大从真空管、无线电、雷达和早期数字机器中发展出来。",
    "semiconductors-hardware-02": "晶体管让电子系统比真空管更小、更可靠，也更省电。",
    "semiconductors-hardware-03": "集成电路把多个元件放到芯片上，奠定现代微电子基础。",
    "semiconductors-hardware-04": "微处理器把计算能力集中到商品芯片中，用于计算器、PC、游戏机和嵌入式设备。",
    "semiconductors-hardware-05": "处理器设计通过 RISC、图形硬件、信号处理器和工作站不断分化。",
    "semiconductors-hardware-06": "芯片生产分裂为设计、工具、制造、封装和全球供应链。",
    "semiconductors-hardware-07": "GPU 和系统级芯片让并行计算成为手机、游戏、数据中心和 AI 的核心。",
    "semiconductors-hardware-08": "先进制造、加速器、封装和出口管制让芯片成为 AI 的战略基础设施。",
    "film-cinema-industry-01": "光学玩具、摄影、连续摄影和投影设备让活动影像在技术和商业上变得可以想象。",
    "film-cinema-industry-02": "短片、公共放映、巡回放映商和小型街边影院把电影变成大众娱乐。",
    "film-cinema-industry-03": "长片叙事、明星、电影语言和垂直整合制片厂开始把电影定义为一种工业。",
    "film-cinema-industry-04": "同步声音重组了表演、编剧、音乐、影院技术和成熟的好莱坞制片厂体系。",
    "film-cinema-industry-05": "电视压力、去殖民化、电影节、作者论和各国新浪潮让电影超出经典制片厂公式。",
    "film-cinema-industry-06": "青年文化、导演中心、分级制度、暑期档、特效和系列化逻辑重塑大众电影。",
    "film-cinema-industry-07": "CGI、家庭录像、DVD、全球发行和知识产权系列改变电影制作与收益模式。",
    "film-cinema-industry-08": "流媒体平台、发行窗口变化、全球电影节、粉丝文化和数据驱动分发重塑了电影的边界。",
    "music-recording-culture-01": "音乐通过仪式、记忆、宫廷礼仪、口传和早期记谱流动，早于现代录音和大众媒体。",
    "music-recording-culture-02": "乐谱印刷、记谱、歌剧、公共剧场和商业赞助让音乐表演变成更可传播的城市文化。",
    "music-recording-culture-03": "音乐厅、炫技演奏、音乐出版、民族主义和城市中产公众把音乐重塑为公共艺术与商业。",
    "music-recording-culture-04": "录音技术把表演从现场时刻中分离出来，制造了新的技术、档案、明星和唱片市场。",
    "music-recording-culture-05": "广播、唱片、爵士、布鲁斯、麦克风、点唱机和唱片公司把流行音乐变成广播与录音产业。",
    "music-recording-culture-06": "摇滚、灵魂乐、民谣、流行乐、音乐节、专辑、便携聆听和青年身份让音乐成为大众文化核心语言。",
    "music-recording-culture-07": "音乐电视、嘻哈、电子乐器、采样、CD、文件分享和全球有线媒体重塑音乐流通方式。",
    "music-recording-culture-08": "流媒体平台、社交视频、播放列表、推荐系统和创作者经济围绕网络化发现重组音乐。",
    "painting-visual-art-01": "身体、物体和墙面上的颜料让图像制作在正式艺术机构出现之前，就已经成为仪式、记忆和共同象征生活的一部分。",
    "painting-visual-art-02": "绘画服务于统治者、神庙、墓葬和仪式系统，把图像和权威、来世信仰、文字文化连接起来。",
    "painting-visual-art-03": "绘画在壁画、卷轴、手稿、木板和便携物品之间流动，进入古典文化与宗教文化的视觉世界。",
    "painting-visual-art-04": "宗教绘画塑造神圣空间、敬拜实践、教学图像，以及教会、宫廷、修道院和寺庙的视觉权威。",
    "painting-visual-art-05": "透视法、油画技术、肖像和人文主义赞助让绘画成为空间幻觉、作者身份和社会声望的场域。",
    "painting-visual-art-06": "戏剧性光影、宫廷景观、收藏、版画传播和全球贸易让绘画同时成为信仰对象与市场对象。",
    "painting-visual-art-07": "工业城市、摄影、殖民遭遇和先锋运动推动绘画从再现转向色彩、表面、形式和抽象。",
    "painting-visual-art-08": "绘画在全球艺术世界中继续存在，并与双年展、市场、身份政治、装置、数字传播和混合媒介交织。",
    "sculpture-public-art-01": "雕刻、塑造和组合的物件让身体、动物、祖先与仪式力量获得可触摸、可保存的形态。",
    "sculpture-public-art-02": "大型雕塑通过石材、陶土、金属和集体劳动，让统治者、神灵、墓葬和城市权力变得可见。",
    "sculpture-public-art-03": "人物雕塑成为表达身体、神灵、统治者、公民理想和技术熟练度的重要语言。",
    "sculpture-public-art-04": "雕塑充满寺庙、教堂、圣地和朝圣空间，承担神圣在场、叙事和仪式焦点的功能。",
    "sculpture-public-art-05": "艺术家复兴古典形式，城市赞助者则用雕塑组织记忆、德性、身份和公共空间。",
    "sculpture-public-art-06": "动态雕塑、喷泉、祭坛和纪念物把权力、信仰与城市规划变成戏剧化的公共经验。",
    "sculpture-public-art-07": "雕塑从学院式纪念物走向抽象、现成材料、纪念空间和对空间本身的实验。",
    "sculpture-public-art-08": "雕塑扩展为装置、土地艺术、参与式作品、公共争议和基于社区的社会实践。",
    "photography-visual-media-01": "光学装置、化学实验和绘图辅助工具逐步准备了一个观念：光本身可以制造图像。",
    "photography-visual-media-02": "早期摄影把肖像、记录、科学观察和记忆转化为可被化学固定的图像。",
    "photography-visual-media-03": "摄影进入档案、家庭相册、警务系统、殖民调查、战争报道和商业照相馆。",
    "photography-visual-media-04": "小型相机、杂志、先锋设计和战争图像让摄影成为现代视觉文化的核心媒介。",
    "photography-visual-media-05": "摄影塑造新闻、广告、纪实真实感、博物馆收藏和战后消费文化。",
    "photography-visual-media-06": "彩色、挪用、摆拍图像和理论挑战了艺术、媒体与日常图像之间的旧边界。",
    "photography-visual-media-07": "数码相机、编辑软件、图像数据库和 Web 改变了照片的制作、保存与分享方式。",
    "photography-visual-media-08": "手机、社交平台、滤镜、计算机视觉和生成工具让图像制作变得持续、联网且算法化。",
    "digital-new-media-art-01": "艺术家使用电影、电视信号、电子设备和表演，让艺术摆脱静态物件的限制。",
    "digital-new-media-art-02": "早期计算机艺术家通过绘图仪、算法、实验室和工程环境，用代码与系统生成图像。",
    "digital-new-media-art-03": "便携视频和装置让艺术家批判电视、监控、表演机制以及画廊空间本身。",
    "digital-new-media-art-04": "多媒体界面、CD-ROM、游戏和早期互动系统把观看者转变为用户和参与者。",
    "digital-new-media-art-05": "网络艺术把网站、邮件列表、浏览器、代码和在线社群本身变成艺术材料。",
    "digital-new-media-art-06": "艺术家回应平台文化、信息流、模因、监控、在线身份，以及线上线下图像世界的融合。",
    "digital-new-media-art-07": "加密市场和 NFT 重新组织了数字稀缺性、所有权、投机和艺术家经济的讨论。",
    "digital-new-media-art-08": "AI 图像系统让提示词、训练数据、作者身份、劳动和合成媒介成为新的艺术问题。"
  };
  return summaries[id] || "";
}

function getGeneratedPhaseDetail(lensId, trackId, entry, index, entries, sideBridges) {
  const [title, startYear, endYear, yearLabel, regions] = entry;
  const id = trackId ? `${trackId}-${String(index + 1).padStart(2, "0")}` : `${lensId}-${String(index + 1).padStart(2, "0")}`;
  const summary = getPhaseExplanation(id, "en") || entry[5] || `${title} marks a broad phase in ${getLensTitle(lensId)}.`;
  const summaryZh = getPhaseExplanation(id, "zh") || getTrackPhaseSummaryZh(id) || entry[5] || `${title} 是 ${getLensTitle(lensId)} 的一个宽泛阶段。`;
  const lens = getPhaseLensProfile(lensId, trackId);
  const previous = entries[index - 1];
  const next = entries[index + 1];
  const previousTitle = previous ? previous[0] : "";
  const nextTitle = next ? next[0] : "";
  const regionText = regions || "multiple regions";
  const regionTextZh = localizeRegionPhrase(regions || "multiple regions");
  const forceText = sideBridges && sideBridges.length ? sideBridges.join(", ") : lens.forceText;
  const forceTextZh = sideBridges && sideBridges.length ? sideBridges.map(localizeForceTerm).join("、") : lens.forceTextZh;
  const image = getDefaultPhaseImage(lensId, trackId, id, title);

  return {
    phaseIntro: `${summary} In this phase, ${getLensTitle(lensId)} is best read as a changing system rather than a single event: its institutions, materials, practices, and audiences are reorganized across ${regionText}.`,
    phaseIntroZh: `${summaryZh} 在这个阶段，${localizeLensTitle(getLensTitle(lensId))} 更适合被理解为一个变化中的系统，而不是单一事件；它的制度、材料、实践和受众在${regionTextZh}之间重新组织。`,
    fromPrevious: previous
      ? `${title} follows ${previousTitle}. The shift is not a clean break, but the center of gravity changes: older forms continue, while ${lens.changeFocus} becomes more visible and historically decisive.`
      : `${title} is the opening phase in this lens. It establishes the basic conditions that later phases build on: ${lens.foundationFocus}.`,
    fromPreviousZh: previous
      ? `${title} 接续 ${previousTitle}。这不是彻底断裂，而是重心转移：旧形式继续存在，但${lens.changeFocusZh}变得更可见，也更具有历史决定性。`
      : `${title} 是这个视角中的起始阶段。它建立了后续阶段会继续使用或改造的基本条件：${lens.foundationFocusZh}。`,
    definingFeatures: [
      `${title} is defined by changes in ${lens.domainFocus}.`,
      `Its main shaping forces include ${forceText}.`,
      `The phase matters because it changes who can participate, who holds power, and what kinds of practices become normal.`,
      `Its geography is broad but uneven: ${regionText} are important reference points, not a complete map of the whole story.`
    ],
    definingFeaturesZh: [
      `${title} 的定义性变化集中在${lens.domainFocusZh}。`,
      `主要塑造因素包括${forceTextZh}。`,
      `这个阶段重要，因为它改变了谁能参与、谁掌握权力，以及哪些实践变成常态。`,
      `它的地理范围很广但并不均匀：${regionTextZh}是重要参照点，不是完整地图。`
    ],
    towardNext: next
      ? `The tensions, tools, and expectations formed here carry into ${nextTitle}. The next phase does not erase this one; it selects from it, reacts against it, and pushes its unresolved problems into a new setting.`
      : `This phase remains open-ended in the current prototype. Its unresolved questions continue into the present, where older structures persist alongside new technologies, institutions, and cultural expectations.`,
    towardNextZh: next
      ? `这里形成的张力、工具和期待会进入 ${nextTitle}。下一阶段并不会抹去这一阶段，而是从中选择、反应，并把未解决的问题带入新的语境。`
      : `在当前 prototype 中，这一阶段仍是开放的。它的问题延续到当下，旧结构与新技术、新制度和新文化期待并存。`,
    ...image
  };
}

function getPhaseLensProfile(lensId, trackId) {
  const profiles = {
    "war-military": {
      domainFocus: "organized violence, military labor, command systems, and the technologies that make coercion scalable",
      domainFocusZh: "组织化暴力、军事劳动、指挥体系，以及让强制力扩大规模的技术",
      changeFocus: "mobilization, logistics, weapon systems, and state capacity",
      changeFocusZh: "动员、后勤、武器系统和国家能力",
      foundationFocus: "defense, coercion, collective organization, and the relationship between violence and authority",
      foundationFocusZh: "防御、强制、集体组织，以及暴力与权威的关系",
      forceText: "mobilization, military technology, state power",
      forceTextZh: "动员、军事技术、国家权力"
    },
    "state-empire": {
      domainFocus: "rule, legitimacy, administration, territory, and the institutions that make authority durable",
      domainFocusZh: "统治、合法性、行政、领土，以及让权威持续存在的制度",
      changeFocus: "administration, law, sovereignty, and political identity",
      changeFocusZh: "行政、法律、主权和政治身份",
      foundationFocus: "authority, taxation, record keeping, ritual legitimacy, and control over people and land",
      foundationFocusZh: "权威、税收、记录、仪式合法性，以及对人群和土地的控制",
      forceText: "legitimacy, administration, law",
      forceTextZh: "合法性、行政、法律"
    },
    "economy-trade": {
      domainFocus: "production, exchange, labor, money, routes, and the infrastructures that move value",
      domainFocusZh: "生产、交换、劳动、货币、路线，以及移动价值的基础设施",
      changeFocus: "market scale, labor organization, monetary systems, and long-distance exchange",
      changeFocusZh: "市场规模、劳动组织、货币体系和远距离交换",
      foundationFocus: "surplus, storage, specialization, trust, and repeated exchange",
      foundationFocusZh: "剩余、储存、分工、信任和重复交换",
      forceText: "trade routes, labor systems, money",
      forceTextZh: "贸易路线、劳动体系、货币"
    },
    "religion-belief": {
      domainFocus: "ritual authority, sacred texts, institutions, conversion, community, and moral order",
      domainFocusZh: "仪式权威、圣典、制度、皈依、社群和道德秩序",
      changeFocus: "authority, interpretation, institutional reach, and religious community",
      changeFocusZh: "权威、解释、制度扩展和宗教社群",
      foundationFocus: "sacred place, death, memory, seasonal rhythm, and social obligation",
      foundationFocusZh: "圣地、死亡、记忆、季节节律和社会义务",
      forceText: "conversion, sacred authority, reform",
      forceTextZh: "皈依、神圣权威、改革"
    },
    "science-technology": {
      domainFocus: trackId ? "tools, systems, standards, infrastructures, users, and technical communities" : "knowledge, tools, methods, energy systems, infrastructures, and applied experimentation",
      domainFocusZh: trackId ? "工具、系统、标准、基础设施、用户和技术社群" : "知识、工具、方法、能源系统、基础设施和应用实验",
      changeFocus: trackId ? "standardization, access, infrastructure, and everyday adoption" : "evidence, instruments, infrastructure, and the scale of technical systems",
      changeFocusZh: trackId ? "标准化、可接近性、基础设施和日常采用" : "证据、仪器、基础设施和技术系统的尺度",
      foundationFocus: "making, measurement, experimentation, transmission, and practical problem solving",
      foundationFocusZh: "制造、测量、实验、传播和实际问题解决",
      forceText: trackId ? "standardization, infrastructure, platform diffusion" : "knowledge transmission, infrastructure, automation",
      forceTextZh: trackId ? "标准化、基础设施、平台扩散" : "知识传播、基础设施、自动化"
    },
    art: {
      domainFocus: "visual language, materials, patronage, sacred and civic meaning, and the status of makers",
      domainFocusZh: "视觉语言、材料、赞助、神圣与公民意义，以及创作者地位",
      changeFocus: "style, patronage, media, authorship, and visual audiences",
      changeFocusZh: "风格、赞助、媒介、作者身份和视觉受众",
      foundationFocus: "image making, craft, ritual, display, memory, and power",
      foundationFocusZh: "图像制作、工艺、仪式、展示、记忆和权力",
      forceText: "patronage, religion, technology",
      forceTextZh: "赞助、宗教、技术"
    },
    literature: {
      domainFocus: "voice, text, genre, language, reading publics, memory, and institutions of circulation",
      domainFocusZh: "声音、文本、体裁、语言、阅读公众、记忆和传播制度",
      changeFocus: "literacy, genre, publication, interpretation, and imagined community",
      changeFocusZh: "识字、体裁、出版、解释和想象共同体",
      foundationFocus: "storytelling, memory, performance, authority, and transmission",
      foundationFocusZh: "讲述、记忆、表演、权威和传承",
      forceText: "print, education, public sphere",
      forceTextZh: "印刷、教育、公共领域"
    },
    "fashion-daily-life": {
      domainFocus: "clothing, domestic routines, textiles, gender, status, consumption, and everyday identity",
      domainFocusZh: "服装、家庭日常、纺织品、性别、地位、消费和日常身份",
      changeFocus: "materials, labor, gender roles, consumption, and the pace of style change",
      changeFocusZh: "材料、劳动、性别角色、消费和风格变化速度",
      foundationFocus: "body covering, social rank, household labor, climate, and ritual presentation",
      foundationFocusZh: "身体覆盖、社会等级、家庭劳动、气候和仪式呈现",
      forceText: "textiles, gender roles, consumer culture",
      forceTextZh: "纺织品、性别角色、消费文化"
    },
    "entertainment-media": {
      domainFocus: "performance, audiences, media technologies, distribution systems, attention, and shared public culture",
      domainFocusZh: "表演、观众、媒介技术、分发系统、注意力和共享公共文化",
      changeFocus: "audience scale, reproducibility, media infrastructure, and commercial circulation",
      changeFocusZh: "观众规模、可复制性、媒介基础设施和商业流通",
      foundationFocus: "ritual performance, communal memory, spectacle, and social gathering",
      foundationFocusZh: "仪式表演、共同记忆、奇观和社会聚集",
      forceText: "mass media, electrification, platforms",
      forceTextZh: "大众媒介、电气化、平台"
    },
    "disaster-climate": {
      domainFocus: "environmental pressure, vulnerability, disease, infrastructure, risk knowledge, and collective response",
      domainFocusZh: "环境压力、脆弱性、疾病、基础设施、风险知识和集体回应",
      changeFocus: "risk perception, administrative response, scientific measurement, and uneven vulnerability",
      changeFocusZh: "风险感知、行政回应、科学测量和不均等脆弱性",
      foundationFocus: "climate stability, food security, water management, settlement, and seasonal risk",
      foundationFocusZh: "气候稳定、食物安全、水管理、定居和季节性风险",
      forceText: "climate pressure, disease ecology, risk governance",
      forceTextZh: "气候压力、疾病生态、风险治理"
    },
    architecture: {
      domainFocus: "materials, structure, sacred and civic space, engineering, urban form, and social order",
      domainFocusZh: "材料、结构、神圣与公民空间、工程、城市形态和社会秩序",
      changeFocus: "building technology, spatial organization, patronage, urban planning, and social ideals",
      changeFocusZh: "建筑技术、空间组织、赞助、城市规划和社会理想",
      foundationFocus: "sacred space, collective labor, monumentality, landscape, and authority",
      foundationFocusZh: "神圣空间、集体劳动、纪念性、景观和权威",
      forceText: "sacred space, engineering, urban planning",
      forceTextZh: "神圣空间、工程、城市规划"
    }
  };
  return profiles[lensId] || profiles["state-empire"];
}

function localizeLensTitle(title) {
  const titles = {
    "War / Military": "战争 / 军事",
    "State / Empire": "国家 / 帝国",
    "Economy / Trade": "经济 / 贸易",
    "Religion / Belief": "宗教 / 信仰",
    "Science / Technology": "科学 / 技术",
    Art: "艺术",
    Literature: "文学",
    "Fashion / Daily Life": "时尚 / 日常生活",
    "Entertainment / Media": "娱乐 / 媒体",
    "Disaster / Climate": "灾难 / 气候",
    Architecture: "建筑"
  };
  return titles[title] || title;
}

function localizeRegionPhrase(value) {
  return String(value || "")
    .replaceAll(" / ", "、")
    .replaceAll("Global", "全球")
    .replaceAll("multiple regions", "多个地区")
    .replaceAll("Multiple regions", "多个地区")
    .replaceAll("Europe", "欧洲")
    .replaceAll("Americas", "美洲")
    .replaceAll("America", "美洲")
    .replaceAll("Asia", "亚洲")
    .replaceAll("Africa", "非洲")
    .replaceAll("Middle East", "中东")
    .replaceAll("Mediterranean", "地中海")
    .replaceAll("China", "中国")
    .replaceAll("India", "印度")
    .replaceAll("Japan", "日本")
    .replaceAll("Eurasia", "欧亚大陆")
    .replaceAll("Atlantic world", "大西洋世界")
    .replaceAll("Indian Ocean", "印度洋")
    .replaceAll("Ottoman world", "奥斯曼世界")
    .replaceAll("Global North", "全球北方");
}

function localizeForceTerm(value) {
  const terms = {
    mobilization: "动员",
    "military technology": "军事技术",
    "state power": "国家权力",
    legitimacy: "合法性",
    administration: "行政",
    law: "法律",
    "trade routes": "贸易路线",
    "labor systems": "劳动体系",
    money: "货币",
    conversion: "皈依",
    "sacred authority": "神圣权威",
    reform: "改革",
    "knowledge transmission": "知识传播",
    infrastructure: "基础设施",
    automation: "自动化",
    patronage: "赞助",
    religion: "宗教",
    technology: "技术",
    print: "印刷",
    education: "教育",
    "public sphere": "公共领域",
    textiles: "纺织品",
    "gender roles": "性别角色",
    "consumer culture": "消费文化",
    "mass media": "大众媒介",
    electrification: "电气化",
    platforms: "平台",
    "climate pressure": "气候压力",
    "disease ecology": "疾病生态",
    "risk governance": "风险治理",
    "sacred space": "神圣空间",
    engineering: "工程",
    "urban planning": "城市规划",
    miniaturization: "小型化",
    "platform diffusion": "平台扩散",
    "protocol standardization": "协议标准化",
    "network effects": "网络效应"
  };
  return terms[value] || value;
}

function getDefaultPhaseImage(lensId, trackId, id, title) {
  const phaseImages = {
    "war-military-01": ["Walls_of_Jericho.jpg", "early fortified settlement walls", "早期防御性聚落城墙"],
    "war-military-02": ["Roman_soldiers_on_Trajan%27s_Column.jpg", "classical imperial soldiers carved on Trajan's Column", "图拉真柱上的古典帝国士兵"],
    "war-military-03": ["MongolCavalrymen.jpg", "mounted steppe warriors", "草原骑兵"],
    "war-military-04": ["Siege_of_Constantinople_BnF_Fr._9087_fol._207v.jpg", "gunpowder siege warfare", "火药攻城战"],
    "war-military-05": ["Battle_of_Fontenoy_1745.jpg", "eighteenth-century professional battlefield armies", "十八世纪职业化战场军队"],
    "war-military-06": ["Cheshire_Regiment_trench_Somme_1916.jpg", "industrial trench warfare and mass mobilization", "工业化堑壕战与大众动员"],
    "war-military-07": ["Operation_Crossroads_Baker_Edit.jpg", "nuclear age military systems", "核时代军事体系"],
    "war-military-08": ["MQ-9_Reaper_in_flight.jpg", "networked and remote warfare", "网络化与远程战争"],

    "war-global-conflicts-01": ["Jacques-Louis_David_-_Bonaparte_franchissant_le_Grand-Saint-Bernard,_20_mai_1800_-_Google_Art_Project.jpg", "revolutionary and Napoleonic military politics", "革命与拿破仑时代军事政治"],
    "war-global-conflicts-02": ["Roger_Fenton_-_Valley_of_the_Shadow_of_Death.jpg", "industrial-era battlefield photography and imperial war", "工业时代战场摄影与帝国战争"],
    "war-global-conflicts-03": ["Cheshire_Regiment_trench_Somme_1916.jpg", "World War I trench warfare and total mobilization", "第一次世界大战堑壕战与总体动员"],
    "war-global-conflicts-04": ["Bundesarchiv_Bild_102-00888,_Spanien,_Guernica,_Ruinen.jpg", "interwar civil war and militarization", "战间期内战与军事化"],
    "war-global-conflicts-05": ["Into_the_Jaws_of_Death_23-0455M_edit.jpg", "World War II amphibious mechanized warfare", "第二次世界大战两栖机械化战争"],
    "war-global-conflicts-06": ["Operation_Crossroads_Baker_Edit.jpg", "nuclear deterrence and Cold War military systems", "核威慑与冷战军事体系"],
    "war-global-conflicts-07": ["MQ-9_Reaper_in_flight.jpg", "remote, asymmetric, and networked warfare", "远程、非对称与网络化战争"],

    "state-empire-01": ["Standard_of_Ur_-_War.jpg", "city-state power and palace rule", "城邦权力与宫殿统治"],
    "state-empire-02": ["Persepolis_Apadana_stairs.jpg", "classical imperial ceremonial power", "古典帝国的仪式性权力"],
    "state-empire-03": ["Charlemagne_and_Pope_Adrian_I.jpg", "post-classical imperial and religious authority", "后古典帝国与宗教权威"],
    "state-empire-04": ["Suleiman_the_Magnificent_of_the_Ottoman_Empire.jpg", "gunpowder imperial sovereignty", "火药帝国主权"],
    "state-empire-05": ["Colonial_empires_in_1800.svg", "global colonial empires around 1800", "1800 年前后的全球殖民帝国"],
    "state-empire-06": ["Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg", "revolutionary political citizenship", "革命时代的政治公民身份"],
    "state-empire-07": ["United_Nations_General_Assembly_hall.jpg", "twentieth-century state systems and international order", "二十世纪国家体系与国际秩序"],
    "state-empire-08": ["United_Nations_General_Assembly_Hall_(3).jpg", "postcolonial and global governance institutions", "后殖民与全球治理制度"],

    "economy-trade-01": ["Ploughing_with_water_buffalo.jpg", "agrarian production and surplus", "农业生产与剩余"],
    "economy-trade-02": ["Uluburun_shipwreck_replica.jpg", "Bronze Age maritime exchange", "青铜时代海上交换"],
    "economy-trade-03": ["Silk_Road_in_the_1st_century_CE.png", "Silk Roads and Indian Ocean exchange", "丝绸之路与印度洋交换"],
    "economy-trade-04": ["Great_Mosque_of_Djenne_1.jpg", "Sahelian cities and trans-Saharan exchange", "萨赫勒城市与跨撒哈拉交换"],
    "economy-trade-05": ["Slaveshipposter.jpg", "Atlantic trade and colonial extraction", "大西洋贸易与殖民开采"],
    "economy-trade-06": ["Power_Loom_Weaving_1835.jpg", "mechanized textile production", "机械化纺织生产"],
    "economy-trade-07": ["Supermarket_in_Portland,_Oregon.jpg", "mass consumer economies", "大众消费经济"],
    "economy-trade-08": ["Amazon_Fulfillment_center.jpg", "platform logistics and digital commerce", "平台物流与数字商业"],

    "religion-belief-01": ["Stonehenge2007_07_30.jpg", "ritual landscape and sacred orientation", "仪式景观与神圣方位"],
    "religion-belief-02": ["Ziggurat_of_Ur.jpg", "temple institutions and priestly authority", "神庙制度与祭司权威"],
    "religion-belief-03": ["Confucius_Tang_Dynasty.jpg", "Axial age ethical and philosophical traditions", "轴心时代伦理与哲学传统"],
    "religion-belief-04": ["Hagia_Sophia_Mars_2013.jpg", "imperial sacred architecture and missionary religion", "帝国神圣建筑与传教宗教"],
    "religion-belief-05": ["Dome_of_the_Rock_BW_14.JPG", "Islamic sacred space and scholarship", "伊斯兰神圣空间与学术"],
    "religion-belief-06": ["Luther_95_Theses.png", "religious reform and print controversy", "宗教改革与印刷争论"],
    "religion-belief-07": ["Azusa_Street_Revival.jpg", "modern religious revival and public religion", "现代宗教复兴与公共宗教"],
    "religion-belief-08": ["Praying_hands.jpg", "plural and mediated religious practice", "多元且媒介化的宗教实践"],

    "science-technology-01": ["Stone_tool.jpg", "stone tools and early technical control", "石器与早期技术控制"],
    "science-technology-02": ["Bronze_Age_sword.jpg", "metallurgy and agricultural tool systems", "冶金与农业工具体系"],
    "science-technology-03": ["Euclid_statue_Oxford_University_Museum_of_Natural_History.jpg", "classical mathematics and learned medicine", "古典数学与医学知识"],
    "science-technology-04": ["Arabic_Astrolabe.jpg", "medieval astronomical and mathematical instruments", "中世纪天文与数学仪器"],
    "science-technology-05": ["Galileo.arp.300pix.jpg", "observational science and mathematical nature", "观察科学与数学化自然"],
    "science-technology-06": ["Crystal_Palace_-_interior.jpg", "industrial engineering and exhibition culture", "工业工程与展览文化"],
    "science-technology-07": ["Apollo_11_Launch_-_GPN-2000-000630.jpg", "space, nuclear, and computing systems", "航天、核能与计算系统"],
    "science-technology-08": ["DNA_orbit_animated_static.png", "biotechnology, data, and networked computation", "生物技术、数据与网络化计算"],

    "art-01": ["Warka_Vase.jpg", "ancient image-making and ritual art", "古代图像制作与仪式艺术"],
    "art-02": ["Parthenon_frieze_from_the_west,_II,_2,_British_Museum.jpg", "classical art and sculptural ideals", "古典艺术与雕塑理想"],
    "art-03": ["Christ_Pantocrator_Deesis_mosaic_Hagia_Sophia.jpg", "Byzantine sacred image systems", "拜占庭神圣图像体系"],
    "art-04": ["%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg", "Renaissance perspective and humanist art", "文艺复兴透视法与人文主义艺术"],
    "art-05": ["Las_Meninas_01.jpg", "Baroque court spectacle and pictorial drama", "巴洛克宫廷奇观与绘画戏剧性"],
    "art-06": ["Claude_Monet,_Impression,_soleil_levant.jpg", "Impressionist painting and modern perception", "印象派绘画与现代感知"],
    "art-07": ["Kazimir_Malevich,_1915,_Black_Suprematic_Square.jpg", "modernist abstraction and formal rupture", "现代主义抽象与形式断裂"],
    "art-08": ["Ai_Weiwei_Sunflower_Seeds.jpg", "contemporary global installation and political art", "当代全球装置与政治艺术"],

    "literature-01": ["Gilgamesh_tablet.jpg", "oral epic and mythic narrative", "口传史诗与神话叙事"],
    "literature-02": ["Vergilius_Vaticanus_Aeneid.jpg", "classical literary canons", "古典文学经典"],
    "literature-03": ["Codex_Sinaiticus_Matthew_6,4-32.jpg", "sacred manuscript cultures", "神圣文本与手稿文化"],
    "literature-04": ["The_Canterbury_Tales_Manuscript.jpg", "vernacular and courtly manuscript literature", "俗语与宫廷手稿文学"],
    "literature-05": ["Gutenberg_Bible,_Lenox_Copy,_New_York_Public_Library,_2009._Pic_01.jpg", "print publics and early modern reading", "印刷公共与近世阅读"],
    "literature-06": ["Jane_Austen_coloured_version.jpg", "the novel and national literary publics", "小说与民族文学公共"],
    "literature-07": ["James_Joyce_by_Alex_Ehrenzweig,_1915_restored.jpg", "modernist and postcolonial literary experimentation", "现代主义与后殖民文学实验"],
    "literature-08": ["Amazon_Kindle_3.JPG", "digital and transmedia reading", "数字与跨媒体阅读"],

    "fashion-daily-life-01": ["Nefertari_tomb_women.jpg", "ancient dress and social rank", "古代服饰与社会等级"],
    "fashion-daily-life-02": ["Byzantine_silk_with_elephants.jpg", "courtly textiles and luxury exchange", "宫廷纺织品与奢侈品交换"],
    "fashion-daily-life-03": ["Elizabeth_I_Rainbow_Portrait.jpg", "Renaissance dress and sumptuary display", "文艺复兴服饰与服饰法展示"],
    "fashion-daily-life-04": ["Robe_a_la_francaise_MET_CI60.40.1a-b_Fd.jpg", "global trade and fashionable materials", "全球贸易与时尚材料"],
    "fashion-daily-life-05": ["Singer_sewing_machine.jpg", "industrial textiles and sewing technology", "工业纺织品与缝纫技术"],
    "fashion-daily-life-06": ["Flapper_on_Boardwalk_1920s.jpg", "modern silhouettes and gender roles", "现代廓形与性别角色"],
    "fashion-daily-life-07": ["Twiggy_1967.jpg", "youth culture and mass fashion", "青年文化与大众时尚"],
    "fashion-daily-life-08": ["Fast_fashion_store.jpg", "fast fashion and sustainability critique", "快时尚与可持续批判"],

    "entertainment-media-01": ["Dionysos_theater_Athens.jpg", "ritual performance and collective storytelling", "仪式表演与集体叙事"],
    "entertainment-media-02": ["Colosseum_in_Rome,_Italy_-_April_2007.jpg", "public spectacle and games", "公共奇观与竞技娱乐"],
    "entertainment-media-03": ["Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_juin.jpg", "courtly festivals and seasonal entertainment", "宫廷节庆与季节娱乐"],
    "entertainment-media-04": ["The_Country_Dance,_by_Johann_Georg_Platzer.jpg", "urban publics, print, and popular performance", "城市公共、印刷与大众表演"],
    "entertainment-media-05": ["Lumiere_Brothers_cinematograph.jpg", "cinema, photography, and recorded sound", "电影、摄影与录音"],
    "entertainment-media-06": ["Television_set_1958.jpg", "broadcast media and mass culture", "广播电视与大众文化"],
    "entertainment-media-07": ["Magnavox-Odyssey-Console-Set.jpg", "video games and cable-era media", "电子游戏与有线电视时代媒介"],
    "entertainment-media-08": ["Netflix_2015_logo.svg", "streaming platforms and social media entertainment", "流媒体平台与社交媒体娱乐"],

    "film-cinema-industry-01": ["Muybridge_race_horse_animated.gif", "chronophotography and motion studies", "连续摄影与运动研究"],
    "film-cinema-industry-02": ["Lumiere_Brothers_cinematograph.jpg", "public film projection", "公共电影放映"],
    "film-cinema-industry-03": ["Charlie_Chaplin_portrait.jpg", "silent feature stars and studio formation", "默片明星与制片厂形成"],
    "film-cinema-industry-04": ["The_Jazz_Singer_Warner_Bros_1927.jpg", "sound cinema and talkies", "有声电影与有声片"],
    "film-cinema-industry-05": ["Rashomon_poster.jpg", "postwar international art cinema", "战后国际艺术电影"],
    "film-cinema-industry-06": ["Jaws_movie_poster.jpg", "blockbuster theatrical release", "大片院线发行"],
    "film-cinema-industry-07": ["Jurassic_Park_logo.svg", "digital effects and franchise cinema", "数字特效与系列电影"],
    "film-cinema-industry-08": ["Netflix_2015_logo.svg", "streaming-era platform cinema", "流媒体时代平台电影"],

    "music-recording-culture-01": ["Guidonian_hand.jpg", "notation, chant, and oral music memory", "记谱、圣咏与口传音乐记忆"],
    "music-recording-culture-02": ["Jacopo_Peri_-_L%E2%80%99Euridice_-_title_page_of_the_libretto_-_Florence_1600.png", "opera, notation, and public music print", "歌剧、记谱与公共音乐印刷"],
    "music-recording-culture-03": ["Bayreuth-Rheingold-1876.jpg", "concert publics and national music institutions", "音乐会公众与民族音乐制度"],
    "music-recording-culture-04": ["Edison_and_phonograph_edit2.jpg", "phonograph and recorded sound", "留声机与录音"],
    "music-recording-culture-05": ["Frank_Conrad_radio_station_8XK_1920.jpg", "radio, jazz, blues, and popular records", "广播、爵士、布鲁斯与流行唱片"],
    "music-recording-culture-06": ["Woodstock_redmond_stage.JPG", "rock festivals, youth culture, and albums", "摇滚音乐节、青年文化与专辑"],
    "music-recording-culture-07": ["Roland_TR-808_-_the_classic_drum_machine.jpg", "music video, hip-hop, electronic instruments, and CDs", "音乐电视、嘻哈、电子乐器与 CD"],
    "music-recording-culture-08": ["Spotify_logo_2008%E2%80%932012.svg", "streaming platforms and algorithmic music discovery", "流媒体平台与算法音乐发现"],

    "disaster-climate-01": ["Holocene_Temperature_Variations.png", "Holocene climate and agriculture", "全新世气候与农业"],
    "disaster-climate-02": ["Nile_River_flooding.jpg", "river floods and state risk", "河流洪水与国家风险"],
    "disaster-climate-03": ["The_Triumph_of_Death_by_Pieter_Bruegel_the_Elder.jpg", "pandemic mortality in connected worlds", "互联世界中的大流行死亡"],
    "disaster-climate-04": ["Hunters_in_the_Snow_(Winter).jpg", "Little Ice Age environmental pressure", "小冰期环境压力"],
    "disaster-climate-05": ["Great_Smog_of_London_1952.jpg", "industrial pollution and urban risk", "工业污染与城市风险"],
    "disaster-climate-06": ["FEMA_-_17306_-_Photograph_by_Andrea_Booher_taken_on_09-04-2005_in_Louisiana.jpg", "modern disaster response and governance", "现代灾害响应与治理"],
    "disaster-climate-07": ["Global_Temperature_Anomaly.svg", "climate science and warming evidence", "气候科学与升温证据"],
    "disaster-climate-08": ["Sea_wall_in_Japan.jpg", "adaptation, resilience, and infrastructure", "适应、韧性与基础设施"],

    "architecture-01": ["Great_Pyramid_of_Giza_2010.jpg", "monumental sacred and funerary architecture", "纪念性神圣与墓葬建筑"],
    "architecture-02": ["Parthenon_from_west.jpg", "classical orders and urban monuments", "古典柱式与城市纪念建筑"],
    "architecture-03": ["Taj_Mahal_in_March_2004.jpg", "Buddhist, Hindu, and Islamic sacred space", "佛教、印度教与伊斯兰神圣空间"],
    "architecture-04": ["Chartres_Cathedral_West_Facade.jpg", "Romanesque and Gothic sacred architecture", "罗曼式与哥特式宗教建筑"],
    "architecture-05": ["Versailles_Garden_facade.jpg", "Renaissance and Baroque planning", "文艺复兴与巴洛克规划"],
    "architecture-06": ["Crystal_Palace_-_interior.jpg", "industrial materials and modern cities", "工业材料与现代城市"],
    "architecture-07": ["Villa_Savoye.jpg", "modernist architecture and international style", "现代主义建筑与国际风格"],
    "architecture-08": ["One_Central_Park_Sydney.jpg", "sustainable and computational architecture", "可持续与计算建筑"],

    "computing-pc-01": ["Pascaline-CnAM_823-1-IMG_1506-black.jpg", "mechanical calculation machines", "机械计算机器"],
    "computing-pc-02": ["ENIAC-changing_a_tube.jpg", "wartime electronic computing", "战时电子计算"],
    "computing-pc-03": ["IBM_System_360_Model_30.jpg", "mainframe institutional computing", "大型机与制度性计算"],
    "computing-pc-04": ["Altair_8800_Computer.jpg", "hobbyist microcomputing", "爱好者微型计算"],
    "computing-pc-05": ["IBM_PC_5150.jpg", "personal computer platforms", "个人电脑平台"],
    "computing-pc-06": ["Apple_Macintosh_Desktop.jpg", "graphical user interfaces and home computing", "图形界面与家庭计算"],
    "computing-pc-07": ["IPhone_1st_Gen.svg", "mobile and cloud-connected personal devices", "移动与云连接个人设备"],
    "computing-pc-08": ["ChatGPT_logo.svg", "AI-assisted personal computing", "AI 辅助个人计算"],

    "networks-internet-01": ["Cooke_and_Wheatstone_telegraph.jpg", "telegraph and early electrical networks", "电报与早期电气网络"],
    "networks-internet-02": ["Telephone_switchboard_operators.jpg", "telephone switching networks", "电话交换网络"],
    "networks-internet-03": ["Arpanet_1974.svg", "packet switching and ARPANET", "分组交换与 ARPANET"],
    "networks-internet-04": ["Internet_map_1024.jpg", "internet protocols and academic networks", "互联网协议与学术网络"],
    "networks-internet-05": ["First_Web_Server.jpg", "World Wide Web and browsers", "万维网与浏览器"],
    "networks-internet-06": ["Google_1998.png", "search and platform web", "搜索与平台化网页"],
    "networks-internet-07": ["IPhone_1st_Gen.svg", "social and mobile internet", "社交与移动互联网"],
    "networks-internet-08": ["Data_center_interior.jpg", "cloud, streaming, and AI networked services", "云、流媒体与 AI 网络服务"]
  };

  const buildPhaseImage = (entry) => {
    if (!entry) return null;
    const [fileName, subject, subjectZh] = entry;
    const encodedFileName = fileName.includes("%") ? fileName : encodeURIComponent(fileName);
    const sourceFileName = decodeURIComponent(fileName).replaceAll(" ", "_");
    return {
      image: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodedFileName}`,
      imageAlt: `${subject} for ${title}`,
      imageCaption: `${title} is represented by ${subject}, chosen to signal the specific world of this phase rather than the whole lens.`,
      imageCaptionZh: `${title} 以${subjectZh}作为代表图，用来提示这个阶段本身，而不是整个大类。`,
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: `https://commons.wikimedia.org/wiki/File:${sourceFileName}`
    };
  };

  const phaseImage = buildPhaseImage(phaseImages[id]);
  if (phaseImage) return phaseImage;

  const trackImages = {
    "computing-pc": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/IBM%20PC%205150.jpg",
      imageAlt: "IBM PC 5150 personal computer",
      imageCaption: `${title} sits within the longer history of computers becoming personal, programmable, and commercially standardized.`,
      imageCaptionZh: `${title} 属于计算机逐渐变得个人化、可编程并商业标准化的长过程。`,
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:IBM_PC_5150.jpg"
    },
    "networks-internet": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/First%20Web%20Server.jpg",
      imageAlt: "The NeXT computer used as the first web server",
      imageCaption: `${title} belongs to the history of communication systems becoming interoperable, public, and networked at scale.`,
      imageCaptionZh: `${title} 属于通信系统变得可互操作、公共化并大规模联网的历史。`,
      imageCredit: "Image: Wikimedia Commons / CERN",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:First_Web_Server.jpg"
    },
    "software-os": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ken%20Thompson%20and%20Dennis%20Ritchie--1973.jpg",
      imageAlt: "Ken Thompson and Dennis Ritchie working around Unix and C",
      imageCaption: `${title} belongs to the history of software becoming portable, layered, collaborative, and platform-like.`,
      imageCaptionZh: `${title} 属于软件逐渐变得可移植、分层、协作化并平台化的历史。`,
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Ken_Thompson_and_Dennis_Ritchie--1973.jpg"
    },
    "databases-information-systems": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/HollerithMachine.CHM.jpg",
      imageAlt: "Hollerith tabulating machine",
      imageCaption: `${title} belongs to the history of turning records, institutions, and business processes into queryable data systems.`,
      imageCaptionZh: `${title} 属于把记录、制度和业务流程转化为可查询数据系统的历史。`,
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:HollerithMachine.CHM.jpg"
    },
    cybersecurity: {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Enigma-machine.jpg",
      imageAlt: "Enigma cipher machine",
      imageCaption: `${title} belongs to the history of protecting, breaking, governing, and abusing information systems.`,
      imageCaptionZh: `${title} 属于保护、破解、治理和滥用信息系统的历史。`,
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Enigma-machine.jpg"
    },
    "ai-ml": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alan%20Turing%20Aged%2016.jpg",
      imageAlt: "Alan Turing as a young student",
      imageCaption: `${title} belongs to the history of formalizing intelligence, learning from data, and deploying model systems.`,
      imageCaptionZh: `${title} 属于形式化智能、从数据学习并部署模型系统的历史。`,
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Alan_Turing_Aged_16.jpg"
    },
    "semiconductors-hardware": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/First-Transistor.jpg",
      imageAlt: "The first transistor at Bell Labs",
      imageCaption: `${title} belongs to the hardware history of making computation smaller, faster, cheaper, and more specialized.`,
      imageCaptionZh: `${title} 属于让计算变得更小、更快、更便宜并更专用化的硬件历史。`,
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:First-Transistor.jpg"
    }
  };
  if (trackId && trackImages[trackId]) return trackImages[trackId];

  const lensImages = {
    "war-military": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bayeux%20Tapestry%20scene57%20Harold%20death.jpg",
      imageAlt: "Battle scene from the Bayeux Tapestry",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Bayeux_Tapestry_scene57_Harold_death.jpg"
    },
    "state-empire": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colonial%20empires%20in%201800.svg",
      imageAlt: "Historical map of empires",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Colonial_empires_in_1800.svg"
    },
    "economy-trade": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Power%20Loom%20Weaving%201835.jpg",
      imageAlt: "Power loom weaving in an industrial textile mill",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Power_Loom_Weaving_1835.jpg"
    },
    "religion-belief": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia%20Sophia%20Mars%202013.jpg",
      imageAlt: "Interior of Hagia Sophia",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg"
    },
    "science-technology": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crystal%20Palace%20-%20interior.jpg",
      imageAlt: "Interior of the Crystal Palace",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Crystal_Palace_-_interior.jpg"
    },
    art: {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/%22The%20School%20of%20Athens%22%20by%20Raffaello%20Sanzio%20da%20Urbino.jpg",
      imageAlt: "Raphael's School of Athens fresco",
      imageCredit: "Image: Wikimedia Commons / Vatican Museums",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg"
    },
    literature: {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gutenberg%20Bible%2C%20Lenox%20Copy%2C%20New%20York%20Public%20Library%2C%202009.%20Pic%2001.jpg",
      imageAlt: "Gutenberg Bible page",
      imageCredit: "Image: Wikimedia Commons / New York Public Library",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Gutenberg_Bible,_Lenox_Copy,_New_York_Public_Library,_2009._Pic_01.jpg"
    },
    "fashion-daily-life": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Les%20Tr%C3%A8s%20Riches%20Heures%20du%20duc%20de%20Berry%20juin.jpg",
      imageAlt: "Medieval calendar scene showing clothing and labor",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_juin.jpg"
    },
    "entertainment-media": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lumiere%20Brothers%20cinematograph.jpg",
      imageAlt: "Lumiere brothers cinematograph",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Lumiere_Brothers_cinematograph.jpg"
    },
    "disaster-climate": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ship_tracks_in_the_Pacific_Ocean.jpg",
      imageAlt: "Cloud patterns over the Pacific Ocean",
      imageCredit: "Image: Wikimedia Commons / NASA",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Ship_tracks_in_the_Pacific_Ocean.jpg"
    },
    architecture: {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Villa%20Savoye.jpg",
      imageAlt: "Villa Savoye by Le Corbusier",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Villa_Savoye.jpg"
    }
  };

  const image = lensImages[lensId];
  if (!image) return {};
  return {
    ...image,
    imageCaption: `${title} is represented here with an image that signals the wider material, spatial, or institutional world of this phase.`,
    imageCaptionZh: `这里的图片用于提示 ${title} 所处阶段更广泛的物质、空间或制度世界。`
  };
}

function getPhaseExplanation(id, locale) {
  const en = {
    "war-military-01": "This phase follows the emergence of fortified settlements, organized raiding, and early forms of command around food storage, walls, and regional rivalry. Warfare was becoming tied to settlement, surplus, and political authority rather than only small-scale conflict.",
    "war-military-02": "This phase centers on armies shaped by city-states, republics, and empires: hoplite and legionary systems in the Mediterranean, imperial armies in China, and organized military citizenship or service. War became a tool for territorial rule and civic identity.",
    "war-military-03": "Mounted warfare, pastoral mobility, and steppe confederations changed the military balance across Eurasia. Fast-moving armies could pressure agrarian empires, carry technologies and tactics across regions, and build large but often fluid imperial formations.",
    "war-military-04": "Gunpowder weapons changed siegecraft, fortification, and battlefield organization. The phase is not only about firearms, but about states learning to fund artillery, adapt walls, and reorganize armies around new destructive power.",
    "war-military-05": "European and Ottoman military systems increasingly depended on paid troops, drill, taxation, credit, and permanent administration. War became more closely linked to fiscal capacity and the growth of centralized state institutions.",
    "war-military-06": "Industrial production, railways, steamships, telegraphy, and mass politics transformed war into a large-scale social and economic undertaking. Armies, factories, civilians, colonies, and states became more tightly integrated in military mobilization.",
    "war-military-07": "Nuclear deterrence, alliance blocs, proxy wars, and ideological competition defined military power after 1945. Direct great-power war became constrained by nuclear risk, while conflict often moved through client states, insurgencies, and technological rivalry.",
    "war-military-08": "After the Cold War, warfare increasingly mixed insurgency, drones, cyber operations, private contractors, terrorism, and information conflict. Military power became less centered on formal battlefields and more dispersed across networks, cities, media, and infrastructure.",
    "state-empire-01": "This phase traces the rise of city-states, palace economies, and early bureaucratic rule. Political authority became anchored in urban centers, record keeping, taxation, ritual legitimacy, and control over agricultural hinterlands.",
    "state-empire-02": "Classical empires developed durable models of law, administration, roads, taxation, military command, and imperial ideology. Large states could connect many peoples under shared institutions while also producing new pressures of rebellion and frontier defense.",
    "state-empire-03": "After the classical empires, power reorganized through successor kingdoms, caliphates, dynasties, and regional imperial systems. Rule often combined older administrative traditions with new religious, military, and commercial networks.",
    "state-empire-04": "Ottoman, Safavid, and Mughal power shows how artillery, cavalry, court culture, land revenue, and religious legitimacy could support large early modern empires. The phase emphasizes imperial consolidation across diverse populations and frontier zones.",
    "state-empire-05": "European colonial empires expanded through maritime power, chartered companies, conquest, settlement, slavery, and extraction. Political authority increasingly linked distant territories to imperial centers through trade, bureaucracy, and violence.",
    "state-empire-06": "Revolutions and nationalism challenged dynastic and imperial legitimacy while strengthening ideas of popular sovereignty and citizenship. The modern state became increasingly tied to constitutions, armies, schools, censuses, and national identity.",
    "state-empire-07": "World wars, mass mobilization, and postwar welfare systems changed what states were expected to do. Governments expanded their roles in economy, security, health, education, reconstruction, and social rights.",
    "state-empire-08": "Decolonization and global institutions reshaped state power after 1945. New nation-states, international law, development programs, and global governance emerged alongside continuing inequalities and contested sovereignty.",
    "economy-trade-01": "Agriculture created new patterns of surplus, storage, labor, and exchange. Economic life became more tied to land, seasonal production, household specialization, and early regional networks.",
    "economy-trade-02": "Bronze Age trade linked metals, textiles, grain, luxury goods, and diplomatic exchange across palace and merchant networks. Economies became more interdependent, but also vulnerable to political disruption and resource bottlenecks.",
    "economy-trade-03": "The Silk Roads and Indian Ocean routes connected cities, ports, caravan corridors, and maritime merchants across Afro-Eurasia. Goods, money, religions, technologies, and diseases moved through layered networks rather than a single road.",
    "economy-trade-04": "Trans-Saharan and African trade connected West African states, Saharan routes, North African markets, and Islamic commercial worlds. Gold, salt, slaves, scholarship, and urban centers shaped regional power.",
    "economy-trade-05": "Atlantic trade joined colonial extraction, plantation labor, slavery, silver, sugar, and maritime empires. This phase marks a brutal expansion of global commerce built on coerced labor and imperial control.",
    "economy-trade-06": "Industrial capitalism reorganized production around factories, wage labor, fossil fuels, finance, and global markets. Economic growth accelerated, but so did inequality, urban pressure, labor conflict, and imperial extraction.",
    "economy-trade-07": "Mass consumer economies expanded through standardized goods, advertising, credit, supermarkets, cars, appliances, and postwar welfare or wage growth. Everyday life became more strongly shaped by consumption and corporate distribution.",
    "economy-trade-08": "Digital and platform economies center on data, software, logistics, online marketplaces, financial networks, and algorithmic coordination. Value increasingly moves through platforms that mediate work, attention, consumption, and infrastructure.",
    "religion-belief-01": "Ritual landscapes and ancestor worlds show religious life before centralized textual traditions. Sacred places, burial practices, seasonal cycles, and kinship memory shaped how communities related to land, death, and authority.",
    "religion-belief-02": "Temple religions and priestly institutions connected ritual authority with cities, states, calendars, writing, and redistribution. Religion became part of administrative life as well as cosmology.",
    "religion-belief-03": "The Axial Age names a broad period when major ethical, philosophical, and religious traditions took shape across Eurasia. Ideas about moral order, salvation, law, self-cultivation, and cosmic truth became enduring frameworks.",
    "religion-belief-04": "Imperial and missionary religions spread through states, roads, translation, monastic networks, and conversion. Religious communities became transregional institutions that could support, challenge, or outlast empires.",
    "religion-belief-05": "Islamic worlds linked belief, law, scholarship, trade, cities, and empire across the Middle East, Africa, and Asia. Religious authority operated through courts, schools, Sufi networks, pilgrimage, and learned exchange.",
    "religion-belief-06": "Reform, confession, and print changed how religious authority circulated and fractured. Printing, vernacular texts, missions, state churches, and confessional conflict made belief a central force in early modern politics.",
    "religion-belief-07": "Secularization and revival describe two movements at once: public institutions often became less formally religious, while revival movements, new denominations, and reform traditions remained powerful. Religion did not disappear; it changed arenas.",
    "religion-belief-08": "Pluralism and digital religion reflect a world of migration, interfaith contact, online practice, new spiritual movements, and contested public religion. Belief communities now operate through both physical institutions and digital networks.",
    "science-technology-01": "Stone tools and fire mark a long human transformation in making, cooking, hunting, protection, and social learning. Technology here is not separate from survival; it is part of how humans adapted bodies, environments, and cooperation.",
    "science-technology-02": "Agriculture and metallurgy changed how people produced food, worked materials, stored value, and organized labor. Knowledge became embedded in fields, furnaces, tools, calendars, and craft specialization.",
    "science-technology-03": "Classical mathematics and medicine gathered observation, calculation, anatomy, astronomy, and philosophical explanation into durable bodies of knowledge. These traditions travelled through schools, texts, courts, and translation.",
    "science-technology-04": "Islamic and medieval knowledge systems preserved, criticized, translated, and extended earlier learning. Astronomy, medicine, optics, mathematics, engineering, and scholastic inquiry moved through libraries, madrasas, monasteries, and courts.",
    "science-technology-05": "The Scientific Revolution changed standards of evidence, experiment, mathematics, instruments, and publication. Knowledge became increasingly tied to measurement, reproducibility, learned societies, and new models of nature.",
    "science-technology-06": "Industrial and electrical systems joined scientific knowledge to machines, factories, energy, transport, communications, and urban infrastructure. Technology became a large-scale system that reorganized work, distance, time, and everyday life.",
    "science-technology-07": "Computing, space, and nuclear technologies concentrated science inside states, corporations, laboratories, and military-industrial systems. This phase made calculation, rockets, atomic energy, satellites, and electronics central to power and knowledge.",
    "science-technology-08": "Internet, AI, and biotech describe a phase where information networks, genetic tools, machine learning, and digital platforms reshape research, labor, communication, health, and culture. The boundaries between science, media, and daily life become harder to separate.",
    "art-01": "Ancient art includes images, objects, monuments, and ritual forms tied to power, burial, divinity, fertility, and social memory. Art was often inseparable from ceremony, rulership, craft, and cosmology.",
    "art-02": "Classical art emphasizes idealized bodies, civic monuments, narrative reliefs, proportion, and public visual culture in Mediterranean traditions. Later societies repeatedly returned to this phase as a model of order, beauty, and authority.",
    "art-03": "Medieval and Byzantine art organized visual culture around sacred presence, liturgy, manuscripts, icons, mosaics, and courtly devotion. Its priorities were not realism alone, but spiritual meaning, hierarchy, and ritual use.",
    "art-04": "Renaissance art joined humanism, patronage, perspective, anatomy, classical revival, and urban competition. Artists increasingly appeared as named intellectual makers, not only skilled craftsmen.",
    "art-05": "Baroque and court spectacle used movement, drama, illusion, scale, and theatrical emotion to shape religious and political experience. Art became a powerful language for courts, churches, colonies, and public display.",
    "art-06": "Impressionism and modern life shifted attention toward urban leisure, light, speed, perception, and everyday scenes. The phase challenged academic finish and made modern experience itself a subject.",
    "art-07": "Modernism broke inherited rules of representation through abstraction, fragmentation, collage, design, and new ideas of the avant-garde. Art became a way to test modernity, crisis, technology, and subjectivity.",
    "art-08": "Contemporary global art expands across installation, performance, video, digital media, biennials, archives, activism, and global markets. Art becomes less tied to one center and more shaped by circulation, identity, memory, and institutions.",
    "literature-01": "Oral epic and mythic traditions preserved memory, ancestry, heroic models, cosmology, and law through performance. Literature here lived in voice, rhythm, repetition, and communal transmission before many texts were fixed in writing.",
    "literature-02": "Classical literary canons formed through epics, drama, philosophy, poetry, histories, and learned commentary. These works became standards for education, imitation, moral reflection, and political imagination.",
    "literature-03": "Sacred texts and manuscript cultures placed writing at the center of religious authority, commentary, copying, and interpretation. Manuscripts circulated slowly but deeply through monasteries, courts, schools, and scholarly communities.",
    "literature-04": "Courtly and vernacular literatures expanded writing beyond sacred and classical languages. Romance, lyric, chronicles, and court poetry helped shape elite identity, love, morality, and regional languages.",
    "literature-05": "Print publics and early modern literature changed scale: texts could circulate faster, cheaper, and more widely. Pamphlets, plays, religious works, news, and books created new publics and new struggles over censorship.",
    "literature-06": "The novel and national literatures developed with expanding literacy, print markets, serialized publication, and national education. Fiction became a major form for exploring private life, society, class, gender, and nation.",
    "literature-07": "Modernism and postcolonial writing challenged inherited forms under the pressure of war, empire, migration, and psychological rupture. Writers experimented with voice, time, language, memory, and political identity.",
    "literature-08": "Digital and transmedia literature moves across screens, games, fan communities, platforms, hypertext, and multimedia storytelling. Literary culture becomes interactive, networked, and often collaborative.",
    "fashion-daily-life-01": "Ancient dress and social rank linked clothing to climate, labor, gender, ritual, and hierarchy. Materials and silhouettes signaled status and community long before fashion became a rapid market system.",
    "fashion-daily-life-02": "Silk, wool, and courtly textiles show how cloth became a carrier of wealth, diplomacy, craft knowledge, and elite display. Textile routes connected workshops, courts, merchants, and household labor.",
    "fashion-daily-life-03": "Renaissance clothing and sumptuary rules made dress a visible field of status competition and regulation. Clothing expressed rank, gender, city identity, moral anxiety, and access to global materials.",
    "fashion-daily-life-04": "Global trade and fashionable materials brought cotton, silk, dyes, lace, porcelain, and colonial goods into changing habits of consumption. Daily life became increasingly linked to empire, slavery, and maritime commerce.",
    "fashion-daily-life-05": "Industrial textiles and ready-made clothing transformed production, price, labor, and availability. Mechanized spinning, weaving, sewing, department stores, and standardized sizes changed how people acquired clothes.",
    "fashion-daily-life-06": "Modern silhouettes and gender roles shifted with war, work, sport, cinema, and changing public life. Clothing became a visible language for mobility, modern femininity, masculinity, and social reform.",
    "fashion-daily-life-07": "Youth culture and mass fashion made style faster, more informal, and more connected to music, media, protest, and consumer markets. Fashion increasingly signaled generation, subculture, and lifestyle.",
    "fashion-daily-life-08": "Fast fashion and sustainable critique describe a system of rapid production, global supply chains, trend acceleration, and environmental concern. Clothing becomes a debate about labor, waste, identity, and responsibility.",
    "entertainment-media-01": "Ritual performance and storytelling linked entertainment to ceremony, myth, memory, and communal identity. Performance was not separate from religion or politics; it helped societies rehearse meaning.",
    "entertainment-media-02": "Theater, games, and public spectacle became organized forms of civic, imperial, and social gathering. Audiences, arenas, festivals, and dramatic traditions made entertainment part of public life.",
    "entertainment-media-03": "Court entertainment and festivals mixed music, dance, poetry, sport, ceremony, and display. Entertainment reinforced hierarchy while also creating spaces for urban celebration and popular participation.",
    "entertainment-media-04": "Print, ballads, and urban publics made entertainment portable and repeatable. Songs, cheap print, illustrated materials, and public venues helped popular culture circulate through growing cities.",
    "entertainment-media-05": "Photography, cinema, and recorded sound changed entertainment from live presence to reproducible media. Images, voices, and performances could travel, be archived, and reach mass audiences.",
    "entertainment-media-06": "Radio, television, and mass culture brought entertainment into households and national schedules. Broadcasting created shared publics, celebrity systems, advertising models, and new forms of political communication.",
    "entertainment-media-07": "Video games and cable-era media fragmented audiences while expanding interactive and niche entertainment. Screens became more personal, programmable, and tied to global media franchises.",
    "entertainment-media-08": "Streaming, social media, and platforms make entertainment continuous, personalized, and algorithmically distributed. Audiences also become creators, while attention itself becomes a central economic resource.",
    "disaster-climate-01": "Holocene climate and agriculture describes the environmental stability that helped farming societies expand, while also making communities dependent on rainfall, seasons, soils, and stored food. Climate became a condition of social organization.",
    "disaster-climate-02": "River floods and early state risk show how environmental danger shaped early administration. Irrigation, flood control, granaries, calendars, and ritual authority developed around both abundance and catastrophe.",
    "disaster-climate-03": "Pandemics in connected worlds became more likely as trade, cities, war, and migration linked distant populations. Disease could alter labor, belief, state capacity, and patterns of exchange.",
    "disaster-climate-04": "Little Ice Age pressures describe a broad period of cooler climate variability, harvest stress, storms, and social strain in many northern regions. Climate did not cause events alone, but it intensified vulnerability.",
    "disaster-climate-05": "Industrial pollution and urban risk emerged from coal, factories, sanitation problems, crowding, and industrial accidents. Modern growth created new hazards even as science and public health began to identify them.",
    "disaster-climate-06": "Modern disaster governance developed through insurance, emergency management, public health, engineering standards, warning systems, and international aid. Disasters became problems for states, experts, and institutions to manage.",
    "disaster-climate-07": "Climate science and warming tracks the rise of measurement, modeling, atmospheric science, and public debate around human-caused warming. Climate became a planetary historical force and a political problem.",
    "disaster-climate-08": "Adaptation and resilience debates focus on how societies prepare for heat, floods, fires, migration, food stress, and infrastructure risk. The phase is about living with climate change as an uneven global condition.",
    "architecture-01": "Monumental sacred and funerary building made architecture a language of power, afterlife, divinity, and collective labor. Temples, tombs, pyramids, and ceremonial centers turned landscape into political and sacred order.",
    "architecture-02": "Classical orders and urban monuments developed durable vocabularies of columns, proportion, civic space, theaters, baths, roads, and forums. Architecture expressed public life, empire, engineering, and idealized order.",
    "architecture-03": "Buddhist, Hindu, and Islamic sacred space shaped architecture through pilgrimage, ritual movement, geometry, ornament, domes, stupas, temples, mosques, and gardens. Sacred buildings organized both devotion and urban identity.",
    "architecture-04": "Romanesque and Gothic architecture transformed European sacred space through stone vaulting, towers, stained glass, pilgrimage routes, and urban cathedral building. Structure, light, and worship became tightly linked.",
    "architecture-05": "Renaissance and Baroque planning revived classical vocabularies while using perspective, geometry, ceremony, and spectacle to organize cities, churches, palaces, and colonial spaces. Architecture became a tool for order and display.",
    "architecture-06": "Industrial materials and modern cities introduced iron, steel, glass, elevators, rail stations, factories, and new urban infrastructure. Building changed with engineering, capital, speed, and metropolitan growth.",
    "architecture-07": "Modernism and international style rejected ornament in favor of function, abstraction, standardization, and new materials. Architecture became linked to social reform, corporate power, housing, and global modernity.",
    "architecture-08": "Sustainable and computational architecture responds to ecological limits, digital design, parametric modeling, adaptive reuse, and energy performance. Buildings are increasingly understood as environmental systems as well as cultural forms.",
    "computing-pc-01": "This phase follows calculation before electronic computing: mechanical devices, punched cards, census tabulation, accounting machines, and office automation. Computing began as a response to large-scale counting, bureaucracy, commerce, and scientific calculation.",
    "computing-pc-02": "Wartime electronic computing joined military urgency with engineering, mathematics, codebreaking, and ballistics. The phase matters because electronic machines moved computation from mechanical assistance toward programmable, high-speed systems.",
    "computing-pc-03": "Mainframes made computing an institutional resource for governments, universities, banks, corporations, and laboratories. Computers were expensive centralized systems, managed by specialists and used for administration, research, and control.",
    "computing-pc-04": "Minicomputers and hobbyist computing lowered the threshold for experimentation. Smaller machines, clubs, kits, and university labs made computing feel less like a closed institutional tool and more like a field people could personally explore.",
    "computing-pc-05": "Personal computer platforms brought programmable machines into offices, schools, homes, and small businesses. Hardware standards, operating systems, software markets, and user communities made the computer a personal and commercial platform.",
    "computing-pc-06": "Graphical interfaces, productivity software, desktop publishing, games, and home computing changed who could use computers and what they were for. The computer became a general-purpose everyday tool rather than only a technical machine.",
    "computing-pc-07": "Mobile and cloud-connected personal devices shifted personal computing from desks to pockets and networked services. Phones, laptops, app stores, cloud storage, and wireless access made computing continuous and portable.",
    "computing-pc-08": "AI-assisted personal computing changes the interface between users and machines through language models, recommendation systems, generative tools, and coding assistants. The computer becomes less only an instrument and more an active collaborator.",
    "networks-internet-01": "Telegraph networks made communication electrical, fast, and infrastructural. Messages could move faster than people or goods, changing diplomacy, markets, news, empire, and the management of distance.",
    "networks-internet-02": "Telephone and switching networks brought real-time voice communication into business, government, and households. The network became a social utility built from operators, exchanges, cables, standards, and everyday habits.",
    "networks-internet-03": "Packet switching and ARPANET changed the logic of networks by breaking messages into routed packets. The phase joins research, defense funding, resilience, and computer-to-computer communication.",
    "networks-internet-04": "Internet protocols and academic networks made separate networks interoperable through shared technical rules. This phase is about standards, research communities, email, and the slow formation of a network of networks.",
    "networks-internet-05": "The World Wide Web and browsers gave the internet a public-facing layer of pages, links, addresses, and visual navigation. It turned network access into a publishing and browsing experience for non-specialists.",
    "networks-internet-06": "Broadband, search, and the platform web made the internet faster, searchable, commercial, and central to everyday tasks. Platforms began to organize information, advertising, shopping, work, and social presence.",
    "networks-internet-07": "Social and mobile internet made networked life portable, personal, and constant. Smartphones and social platforms changed communication, identity, news, entertainment, protest, and attention.",
    "networks-internet-08": "Cloud, streaming, and AI networked services move computing into vast remote infrastructures. Storage, media, software, and machine learning increasingly operate through always-on platforms and data centers."
  };
  const zh = {
    "war-military-01": "这一阶段关注防御聚落、组织化袭击与早期指挥形式的出现。战争逐渐和粮食储存、城墙、剩余资源、地方竞争与政治权威绑定，而不只是小规模冲突。",
    "war-military-02": "这一阶段的军队由城邦、共和国和帝国塑造：地中海的公民兵与军团体系，中国的帝国军队，以及围绕服役、公民身份和疆域控制形成的军事制度。",
    "war-military-03": "骑马作战、游牧机动性和草原联盟改变了欧亚大陆的军事平衡。快速移动的军队能压迫农耕帝国，也能把战术、技术和政治形式带到很远的地区。",
    "war-military-04": "火药武器改变了攻城、筑城和战场组织。这个阶段不只是枪炮本身，而是国家如何资助火炮、调整城防，并围绕新的破坏力重组军队。",
    "war-military-05": "欧洲与奥斯曼等军事体系越来越依赖雇佣军、操练、税收、信用和常设行政。战争与财政能力、中央国家机构的成长变得更紧密。",
    "war-military-06": "工业生产、铁路、蒸汽船、电报与大众政治把战争变成大规模社会和经济动员。军队、工厂、平民、殖民地和国家机器被更紧密地卷入战争。",
    "war-military-07": "1945 年后的军事权力由核威慑、阵营联盟、代理战争和意识形态竞争塑造。大国直接战争受核风险约束，冲突常转移到客户国、叛乱和技术竞争中。",
    "war-military-08": "冷战后，战争越来越混合叛乱、无人机、网络行动、私人军事承包、恐怖主义和信息冲突。军事力量不再只集中在正式战场，而分布在网络、城市、媒体和基础设施中。",
    "state-empire-01": "这一阶段追踪城邦、宫廷经济和早期官僚统治的出现。政治权威开始固定在城市中心、记录书写、税收、仪式合法性和农业腹地控制之上。",
    "state-empire-02": "古典帝国发展出法律、行政、道路、税收、军事指挥和帝国意识形态的持久模型。大国能把多种人群纳入共同制度，同时也制造反叛和边疆防御压力。",
    "state-empire-03": "古典帝国之后，权力通过继承王国、哈里发国、王朝和地区性帝国体系重新组织。统治常把旧行政传统与新的宗教、军事和商业网络结合起来。",
    "state-empire-04": "奥斯曼、萨法维和莫卧儿等权力展示了火炮、骑兵、宫廷文化、土地收入和宗教合法性如何支撑大型近世帝国。重点是多元人口与边疆地带的帝国整合。",
    "state-empire-05": "欧洲殖民帝国通过海权、特许公司、征服、定居、奴隶制和资源开采扩张。政治权威把远方领土通过贸易、官僚和暴力连接到帝国中心。",
    "state-empire-06": "革命和民族主义挑战王朝与帝国合法性，同时强化人民主权和公民身份的观念。现代国家越来越依赖宪法、军队、学校、人口统计和民族身份。",
    "state-empire-07": "世界大战、大众动员和战后福利制度改变了人们对国家的期待。政府在经济、安全、健康、教育、重建和社会权利中的角色扩大。",
    "state-empire-08": "1945 年后的去殖民化和全球制度重塑国家权力。新的民族国家、国际法、发展项目和全球治理出现，同时主权与不平等仍持续被争夺。",
    "economy-trade-01": "农业创造了剩余、储存、劳动和交换的新模式。经济生活越来越依附土地、季节生产、家庭分工和早期地区网络。",
    "economy-trade-02": "青铜时代贸易把金属、纺织品、粮食、奢侈品和外交交换连在宫廷与商人网络中。经济更相互依赖，也更容易受到政治崩解和资源瓶颈影响。",
    "economy-trade-03": "丝绸之路与印度洋航线连接了亚非欧的城市、港口、商队走廊和海上商人。商品、货币、宗教、技术和疾病通过多层网络移动，而不是沿着单一道路。",
    "economy-trade-04": "跨撒哈拉与非洲贸易连接了西非国家、撒哈拉路线、北非市场和伊斯兰商业世界。黄金、盐、奴隶、学术和城市中心共同塑造地区权力。",
    "economy-trade-05": "大西洋贸易把殖民开采、种植园劳动、奴隶制、白银、糖和海洋帝国连接起来。这是建立在强迫劳动和帝国控制上的全球商业扩张。",
    "economy-trade-06": "工业资本主义围绕工厂、工资劳动、化石燃料、金融和全球市场重组生产。经济增长加速，同时不平等、城市压力、劳工冲突和帝国开采也加剧。",
    "economy-trade-07": "大众消费经济通过标准化商品、广告、信贷、超市、汽车、家电以及战后工资或福利增长扩展。日常生活更强烈地被消费和企业分销塑造。",
    "economy-trade-08": "数字与平台经济围绕数据、软件、物流、线上市场、金融网络和算法协调展开。价值越来越通过平台流动，平台调解工作、注意力、消费和基础设施。",
    "religion-belief-01": "仪式景观与祖先世界指向集中化文本传统之前的宗教生活。圣地、墓葬、季节循环和亲族记忆塑造社群如何理解土地、死亡和权威。",
    "religion-belief-02": "神庙宗教与祭司制度把仪式权威和城市、国家、历法、书写及再分配连接起来。宗教既是宇宙观，也是行政生活的一部分。",
    "religion-belief-03": "轴心时代是一个宽泛分期，指欧亚大陆多种伦理、哲学和宗教传统成形的时期。关于道德秩序、救赎、法律、自我修养和宇宙真理的观念成为长期框架。",
    "religion-belief-04": "帝国与传教宗教通过国家、道路、翻译、修道网络和皈依扩散。宗教社群成为跨地区制度，既可能支持、挑战，也可能超越帝国。",
    "religion-belief-05": "伊斯兰世界把信仰、法律、学术、贸易、城市和帝国连接在中东、非洲与亚洲之间。宗教权威通过法院、学校、苏菲网络、朝觐和知识交流运作。",
    "religion-belief-06": "改革、教派与印刷改变了宗教权威的传播和分裂方式。印刷、白话文本、传教、国家教会和教派冲突让信仰成为近世政治中心力量。",
    "religion-belief-07": "世俗化与复兴同时发生：公共制度常变得不那么正式宗教化，但复兴运动、新教派和改革传统仍然强大。宗教没有消失，而是改变了活动场域。",
    "religion-belief-08": "多元主义与数字宗教反映迁移、跨信仰接触、线上实践、新灵性运动和公共宗教争议的世界。信仰社群同时通过实体制度和数字网络运作。",
    "science-technology-01": "石器、工具与火标志着制造、烹饪、狩猎、防护和社会学习的漫长转变。技术在这里不是独立领域，而是人类适应身体、环境和合作方式的一部分。",
    "science-technology-02": "农业与冶金改变了食物生产、材料加工、价值储存和劳动组织。知识被嵌入田地、炉火、工具、历法和专业手艺之中。",
    "science-technology-03": "古典数学与医学把观察、计算、解剖、天文学和哲学解释组织成持久的知识体系。这些传统通过学校、文本、宫廷和翻译流动。",
    "science-technology-04": "伊斯兰与中世纪知识体系保存、批判、翻译并扩展更早的学问。天文学、医学、光学、数学、工程和经院式探究通过图书馆、学院、修道院和宫廷移动。",
    "science-technology-05": "科学革命改变了证据、实验、数学、仪器和出版的标准。知识越来越依赖测量、可重复性、学会组织和新的自然模型。",
    "science-technology-06": "工业与电气系统把科学知识连接到机器、工厂、能源、交通、通信和城市基础设施。技术成为重组工作、距离、时间和日常生活的大规模系统。",
    "science-technology-07": "计算、太空与核技术把科学集中到国家、企业、实验室和军工体系中。计算、火箭、原子能、卫星和电子技术成为权力与知识的核心。",
    "science-technology-08": "互联网、AI 与生物技术描述信息网络、基因工具、机器学习和数字平台重塑研究、劳动、沟通、健康和文化的阶段。科学、媒体与日常生活的边界变得更难分开。",
    "art-01": "古代艺术包括图像、器物、纪念物和仪式形式，它们与权力、墓葬、神性、生育和社会记忆相连。艺术常常无法与仪式、统治、工艺和宇宙观分开。",
    "art-02": "古典艺术强调理想化身体、公民纪念物、叙事浮雕、比例和公共视觉文化。后世不断回到这一阶段，把它当作秩序、美和权威的模型。",
    "art-03": "中世纪与拜占庭艺术围绕神圣临在、礼拜、手稿、圣像、马赛克和宫廷虔敬组织视觉文化。它的重点不只是写实，而是精神意义、等级和仪式用途。",
    "art-04": "文艺复兴艺术结合人文主义、赞助、透视、解剖、古典复兴和城市竞争。艺术家越来越被视为有名的知识型创造者，而不只是熟练工匠。",
    "art-05": "巴洛克与宫廷奇观利用运动、戏剧性、幻觉、尺度和情感强度塑造宗教与政治体验。艺术成为宫廷、教会、殖民空间和公共展示的有力语言。",
    "art-06": "印象派与现代生活把注意力转向城市休闲、光线、速度、感知和日常场景。它挑战学院派完成度，并把现代经验本身变成题材。",
    "art-07": "现代主义通过抽象、碎片、拼贴、设计和先锋观念打破继承下来的再现规则。艺术成为测试现代性、危机、技术和主体性的方式。",
    "art-08": "当代全球艺术扩展到装置、行为、影像、数字媒体、双年展、档案、行动主义和全球市场。艺术不再只依附单一中心，而被流通、身份、记忆和制度塑造。",
    "literature-01": "口传史诗与神话传统通过表演保存记忆、祖先、英雄模型、宇宙观和法律。文学在许多文本固定之前存在于声音、节奏、重复和社群传承中。",
    "literature-02": "古典文学经典通过史诗、戏剧、哲学、诗歌、史书和注释传统形成。它们成为教育、模仿、道德反思和政治想象的标准。",
    "literature-03": "圣典与手稿文化把书写置于宗教权威、注释、抄写和解释的中心。手稿传播缓慢，却深深嵌入修道院、宫廷、学校和学者社群。",
    "literature-04": "宫廷与俗语文学让写作超出神圣语言和古典语言。传奇、抒情诗、编年史和宫廷诗歌塑造精英身份、爱情观、道德和地区语言。",
    "literature-05": "印刷公共与近世文学改变了文本规模：文字能更快、更便宜、更广泛地传播。小册子、戏剧、宗教作品、新闻和书籍创造新公众，也带来新的审查斗争。",
    "literature-06": "小说与民族文学伴随识字率、印刷市场、连载出版和国民教育扩展而发展。小说成为探索私人生活、社会、阶级、性别和民族的重要形式。",
    "literature-07": "现代主义与后殖民写作在战争、帝国、迁移和心理断裂压力下挑战继承形式。作家实验声音、时间、语言、记忆和政治身份。",
    "literature-08": "数字与跨媒体文学在屏幕、游戏、粉丝社群、平台、超文本和多媒体叙事之间移动。文学文化变得互动、网络化，并常常具有协作性。",
    "fashion-daily-life-01": "古代服饰与社会等级把衣着和气候、劳动、性别、仪式及等级连接起来。在时尚成为快速市场系统之前，材料和轮廓已能标记身份和社群。",
    "fashion-daily-life-02": "丝绸、羊毛与宫廷纺织显示布料如何承载财富、外交、工艺知识和精英展示。纺织路线连接作坊、宫廷、商人和家庭劳动。",
    "fashion-daily-life-03": "文艺复兴服装与奢侈限制让穿着成为地位竞争和社会规训的可见场域。服装表达等级、性别、城市身份、道德焦虑和全球材料的可得性。",
    "fashion-daily-life-04": "全球贸易与时尚材料把棉、丝、染料、蕾丝、瓷器和殖民商品带入消费习惯变化中。日常生活越来越连接到帝国、奴隶制和海上商业。",
    "fashion-daily-life-05": "工业纺织与成衣改变了生产、价格、劳动和可得性。机械纺织、缝纫、百货商店和标准尺码改变人们获得衣服的方式。",
    "fashion-daily-life-06": "现代轮廓与性别角色随着战争、工作、运动、电影和公共生活变化而移动。服装成为流动性、现代女性气质、男性气质和社会改革的可见语言。",
    "fashion-daily-life-07": "青年文化与大众时尚让风格更快、更非正式，并更连接音乐、媒体、抗议和消费市场。时尚越来越标记世代、亚文化和生活方式。",
    "fashion-daily-life-08": "快时尚与可持续批判描述快速生产、全球供应链、趋势加速和环境担忧构成的系统。衣服成为关于劳动、浪费、身份和责任的争论。",
    "entertainment-media-01": "仪式表演与讲故事把娱乐和仪式、神话、记忆及社群身份连接起来。表演并不脱离宗教或政治，而帮助社会反复演练意义。",
    "entertainment-media-02": "剧场、游戏与公共奇观成为公民、帝国和社会聚集的组织化形式。观众、竞技场、节庆和戏剧传统让娱乐成为公共生活的一部分。",
    "entertainment-media-03": "宫廷娱乐与节庆混合音乐、舞蹈、诗歌、运动、仪式和展示。娱乐强化等级，同时也为城市庆典和大众参与创造空间。",
    "entertainment-media-04": "印刷、民谣与城市公众让娱乐变得便携、可重复。歌曲、廉价印刷品、插图材料和公共场所帮助流行文化在成长中的城市中流通。",
    "entertainment-media-05": "摄影、电影与录音把娱乐从现场转向可复制媒介。图像、声音和表演可以旅行、归档，并触达大众观众。",
    "entertainment-media-06": "广播、电视与大众文化把娱乐带入家庭和全国时间表。广播电视创造共同公众、明星系统、广告模式和新的政治传播形式。",
    "entertainment-media-07": "电子游戏与有线电视时代媒体分散了观众，同时扩展互动和小众娱乐。屏幕变得更个人化、可编程，并和全球媒体系列相连。",
    "entertainment-media-08": "流媒体、社交媒体与平台让娱乐连续、个性化，并由算法分发。观众也成为创作者，而注意力本身成为核心经济资源。",
    "disaster-climate-01": "全新世气候与农业描述较稳定环境如何帮助农业社会扩展，同时也让社群依赖降雨、季节、土壤和储粮。气候成为社会组织的条件。",
    "disaster-climate-02": "河流洪水与早期国家风险显示环境危险如何塑造早期行政。灌溉、防洪、粮仓、历法和仪式权威围绕丰收与灾害同时发展。",
    "disaster-climate-03": "连接世界中的瘟疫随着贸易、城市、战争和迁移连接远方人口而更可能发生。疾病能改变劳动、信仰、国家能力和交换模式。",
    "disaster-climate-04": "小冰期压力描述北半球许多地区较冷气候波动、歉收压力、风暴和社会紧张的宽泛时期。气候并不单独造成事件，但会加剧脆弱性。",
    "disaster-climate-05": "工业污染与城市风险来自煤、工厂、卫生问题、拥挤和工业事故。现代增长创造新危险，同时科学和公共卫生也开始识别这些危险。",
    "disaster-climate-06": "现代灾害治理通过保险、应急管理、公共卫生、工程标准、预警系统和国际援助发展。灾害成为国家、专家和制度需要管理的问题。",
    "disaster-climate-07": "气候科学与变暖追踪测量、模型、大气科学和围绕人为变暖的公共争论。气候成为一种行星尺度的历史力量和政治问题。",
    "disaster-climate-08": "适应与韧性争论关注社会如何面对高温、洪水、火灾、迁移、粮食压力和基础设施风险。这个阶段关乎在不均衡的全球气候变化条件下生活。",
    "architecture-01": "纪念性宗教与墓葬建筑让建筑成为权力、来世、神性和集体劳动的语言。神庙、陵墓、金字塔和仪式中心把景观转化为政治与神圣秩序。",
    "architecture-02": "古典柱式与城市纪念物发展出柱式、比例、公民空间、剧场、浴场、道路和广场等持久词汇。建筑表达公共生活、帝国、工程和理想秩序。",
    "architecture-03": "佛教、印度教与伊斯兰圣地建筑通过朝圣、仪式动线、几何、装饰、穹顶、佛塔、寺庙、清真寺和花园塑造空间。圣地建筑组织虔敬，也组织城市身份。",
    "architecture-04": "罗曼式与哥特式建筑通过石拱顶、塔楼、彩色玻璃、朝圣路线和城市主教座堂建造改变欧洲神圣空间。结构、光线与礼拜被紧密连接。",
    "architecture-05": "文艺复兴与巴洛克规划复兴古典词汇，同时用透视、几何、仪式和奇观组织城市、教堂、宫殿和殖民空间。建筑成为秩序与展示的工具。",
    "architecture-06": "工业材料与现代城市引入铁、钢、玻璃、电梯、火车站、工厂和新城市基础设施。建筑随工程、资本、速度和大都市成长而改变。",
    "architecture-07": "现代主义与国际风格拒绝装饰，强调功能、抽象、标准化和新材料。建筑与社会改革、企业权力、住房和全球现代性相连。",
    "architecture-08": "可持续与计算建筑回应生态限制、数字设计、参数化建模、适应性再利用和能源表现。建筑越来越被理解为环境系统，也是文化形式。",
    "computing-pc-01": "这一阶段关注电子计算机之前的计算：机械装置、穿孔卡、人口普查制表、会计机器和办公室自动化。计算起初是回应大规模计数、官僚、商业和科学计算的需要。",
    "computing-pc-02": "战时电子计算把军事紧迫性与工程、数学、破译和弹道学结合起来。它的重要性在于，计算从机械辅助走向可编程、高速电子系统。",
    "computing-pc-03": "大型机让计算成为政府、大学、银行、企业和实验室的制度性资源。计算机是昂贵的集中系统，由专家管理，用于行政、研究和控制。",
    "computing-pc-04": "小型机与爱好者计算降低了实验门槛。较小机器、俱乐部、套件和大学实验室让计算不再只是封闭的制度工具，而成为个人可探索的领域。",
    "computing-pc-05": "个人电脑平台把可编程机器带入办公室、学校、家庭和小型企业。硬件标准、操作系统、软件市场和用户社群让电脑成为个人与商业平台。",
    "computing-pc-06": "图形界面、生产力软件、桌面出版、游戏和家庭计算改变了谁能使用电脑以及电脑用来做什么。电脑成为日常通用工具，而不只是技术机器。",
    "computing-pc-07": "移动与云连接个人设备把个人计算从桌面转移到口袋和网络服务中。手机、笔记本、应用商店、云存储和无线接入让计算持续且便携。",
    "computing-pc-08": "AI 辅助个人计算通过语言模型、推荐系统、生成工具和编程助手改变人与机器的界面。电脑不再只是工具，也越来越像主动协作者。",
    "networks-internet-01": "电报网络让通信变得电气化、快速且基础设施化。信息可以比人和货物移动得更快，改变外交、市场、新闻、帝国和距离管理。",
    "networks-internet-02": "电话与交换网络把实时语音通信带入商业、政府和家庭。网络成为由接线员、交换机、电缆、标准和日常习惯构成的社会公用事业。",
    "networks-internet-03": "分组交换与 ARPANET 通过把信息分成可路由的数据包，改变了网络逻辑。这个阶段连接研究、国防资助、韧性和计算机对计算机通信。",
    "networks-internet-04": "互联网协议与学术网络通过共享技术规则让不同网络互操作。这个阶段关乎标准、研究社群、电子邮件，以及“网络之网络”的缓慢形成。",
    "networks-internet-05": "万维网与浏览器给互联网提供了由网页、链接、地址和视觉导航组成的公共层。它把网络接入变成非专业用户也能参与的出版和浏览体验。",
    "networks-internet-06": "宽带、搜索与平台网络让互联网更快、可搜索、商业化，并成为日常任务的中心。平台开始组织信息、广告、购物、工作和社会存在。",
    "networks-internet-07": "社交与移动互联网让联网生活变得便携、个人化且持续。智能手机和社交平台改变沟通、身份、新闻、娱乐、抗议和注意力。",
    "networks-internet-08": "云、流媒体与 AI 网络服务把计算转移到庞大的远程基础设施中。存储、媒体、软件和机器学习越来越通过持续在线的平台与数据中心运作。"
  };
  return (locale === "zh" ? zh : en)[id] || "";
}

function getPhaseDetailEnhancement(id) {
  const details = {
    "art-04": {
      phaseIntro: "Renaissance art names a broad transformation in European image-making, especially in Italian and northern urban centers. Artists and patrons reworked classical antiquity, Christian subjects, mathematical perspective, anatomy, and individual authorship into a new visual language of human presence and spatial order.",
      phaseIntroZh: "文艺复兴艺术指欧洲图像制作的一次宽泛转变，尤其发生在意大利和北方城市中心。艺术家与赞助者把古典传统、基督教题材、数学透视、解剖学和个人作者身份重新组合成一种强调人、空间和秩序的新视觉语言。",
      fromPrevious: "Compared with medieval and Byzantine visual systems, Renaissance art gave more weight to naturalistic bodies, measurable space, named artists, and revived classical forms. Sacred imagery remained central, but it increasingly shared space with civic pride, portraiture, mythology, and humanist learning.",
      fromPreviousZh: "相较于中世纪与拜占庭视觉体系，文艺复兴艺术更强调自然主义身体、可测量空间、有名艺术家和古典形式复兴。宗教图像仍然重要，但它越来越与城市自豪、肖像、神话和人文主义学习并存。",
      definingFeatures: [
        "Linear perspective and constructed space made paintings feel architecturally ordered.",
        "Human anatomy, portraiture, and gesture became central tools for meaning.",
        "Courts, churches, guilds, republics, and wealthy families shaped commissions.",
        "Classical texts and ruins supplied models for bodies, buildings, and civic ideals."
      ],
      definingFeaturesZh: [
        "线性透视和构造空间让绘画呈现建筑般的秩序。",
        "人体解剖、肖像和姿态成为表达意义的核心工具。",
        "宫廷、教会、行会、共和国和富裕家族塑造了委托体系。",
        "古典文本与遗迹为身体、建筑和公民理想提供模型。"
      ],
      towardNext: "Its experiments with space, drama, patronage, and religious imagery helped prepare Baroque art, where movement, theatrical emotion, and political spectacle became even more intense.",
      towardNextZh: "它对空间、戏剧性、赞助和宗教图像的实验，为之后的巴洛克艺术铺路；在巴洛克中，运动感、剧场化情感和政治奇观变得更强烈。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/%22The%20School%20of%20Athens%22%20by%20Raffaello%20Sanzio%20da%20Urbino.jpg",
      imageAlt: "Raphael's School of Athens fresco in the Vatican",
      imageCaption: "Raphael's School of Athens is a compact visual emblem of Renaissance classicism, perspective, and humanist learning.",
      imageCaptionZh: "拉斐尔《雅典学院》集中体现了文艺复兴的古典复兴、透视法和人文主义学习。",
      imageCredit: "Image: Wikimedia Commons / Vatican Museums",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg"
    },
    "art-07": {
      phaseIntro: "Modernism is not one style but a cluster of experiments that questioned inherited ways of seeing, representing, and making art. It developed under the pressure of cities, machines, photography, colonial encounters, war, psychoanalysis, and new political movements.",
      phaseIntroZh: "现代主义不是单一风格，而是一组质疑既有观看、再现和艺术制作方式的实验。它在城市、机器、摄影、殖民接触、战争、精神分析和新政治运动的压力下发展。",
      fromPrevious: "After Impressionism made modern perception and everyday life legitimate subjects, modernists pushed further: they fractured form, rejected academic finish, borrowed from non-European visual systems, and treated abstraction as a serious language.",
      fromPreviousZh: "印象派让现代感知和日常生活成为正当题材之后，现代主义进一步推进：它拆解形式，拒绝学院派完成度，借鉴非欧洲视觉体系，并把抽象当作严肃语言。",
      definingFeatures: [
        "Abstraction, fragmentation, collage, and formal reduction challenged naturalism.",
        "The avant-garde positioned art as a site of rupture, critique, and renewal.",
        "New media, mass culture, and design blurred the boundary between art and everyday life.",
        "War and displacement made crisis, memory, and instability central artistic problems."
      ],
      definingFeaturesZh: [
        "抽象、碎片、拼贴和形式简化挑战自然主义。",
        "先锋派把艺术变成断裂、批判和更新的场域。",
        "新媒介、大众文化和设计模糊了艺术与日常生活的边界。",
        "战争与流亡让危机、记忆和不稳定成为核心艺术问题。"
      ],
      towardNext: "Modernism opened the door to postwar contemporary art, where installation, performance, conceptual practice, video, institutions, markets, and global identity debates became increasingly important.",
      towardNextZh: "现代主义为战后当代艺术打开道路；装置、行为、观念实践、影像、制度、市场和全球身份议题变得越来越重要。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kazimir%20Malevich%2C%201915%2C%20Black%20Suprematic%20Square.jpg",
      imageAlt: "Kazimir Malevich's Black Square",
      imageCaption: "Malevich's Black Square is often used as a symbol of modernist abstraction and radical reduction.",
      imageCaptionZh: "马列维奇《黑方块》常被视为现代主义抽象与激进简化的象征。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Kazimir_Malevich,_1915,_Black_Suprematic_Square.jpg"
    },
    "science-technology-06": {
      phaseIntro: "Industrial and electrical systems describe the moment when science, engineering, energy, machines, and infrastructure began to operate as interconnected systems. Technology was no longer only a tool or craft; it became a large-scale environment for production, communication, transport, and urban life.",
      phaseIntroZh: "工业与电气系统描述科学、工程、能源、机器和基础设施开始作为相互连接的系统运作的阶段。技术不再只是工具或手艺，而成为生产、通信、交通和城市生活的大规模环境。",
      fromPrevious: "The Scientific Revolution changed how knowledge was tested and described; this phase shows that knowledge becoming embedded in factories, railways, telegraphs, electrical grids, laboratories, and corporate systems.",
      fromPreviousZh: "科学革命改变了知识被验证和描述的方式；这一阶段则显示这些知识如何嵌入工厂、铁路、电报、电网、实验室和企业体系。",
      definingFeatures: [
        "Steam, coal, electricity, steel, chemicals, and machines reorganized production.",
        "Railways, telegraphs, and later electrical networks compressed distance and time.",
        "Factories and laboratories tied invention to capital, labor, patents, and states.",
        "Urban life changed through lighting, transport, sanitation, media, and new work rhythms."
      ],
      definingFeaturesZh: [
        "蒸汽、煤、电力、钢铁、化学和机器重组生产。",
        "铁路、电报以及后来的电力网络压缩距离与时间。",
        "工厂和实验室把发明与资本、劳动、专利和国家连接起来。",
        "城市生活因照明、交通、卫生、媒体和新的工作节奏而改变。"
      ],
      towardNext: "The same systems of energy, infrastructure, laboratories, and state-industry coordination later supported electronics, computing, nuclear power, aerospace, and mass communication.",
      towardNextZh: "这些能源、基础设施、实验室和国家-产业协调体系，后来支撑了电子、计算、核能、航天和大众通信。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crystal%20Palace%20-%20interior.jpg",
      imageAlt: "Interior view of the Crystal Palace",
      imageCaption: "The Crystal Palace is a useful emblem of industrial materials, exhibition culture, engineering, and global display.",
      imageCaptionZh: "水晶宫可以作为工业材料、展览文化、工程和全球展示的象征。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Crystal_Palace_-_interior.jpg"
    },
    "computing-pc-05": {
      phaseIntro: "Personal computer platforms mark the shift from computing as an institutional resource to computing as a product ecosystem for offices, homes, schools, and small businesses. The important change was not only smaller hardware, but the creation of platforms: machines, operating systems, software, peripherals, magazines, retailers, and user communities.",
      phaseIntroZh: "个人电脑平台标志着计算从制度性资源转向办公室、家庭、学校和小型企业的产品生态。关键变化不只是硬件变小，而是平台形成：机器、操作系统、软件、外设、杂志、零售和用户社群相互连接。",
      fromPrevious: "Hobbyist and minicomputer cultures made computing more accessible to experimenters, but personal computer platforms turned that experimentation into standardized markets and repeatable everyday use.",
      fromPreviousZh: "爱好者与小型机文化让计算更容易被实验者接触，但个人电脑平台把这种实验转化成标准化市场和可重复的日常使用。",
      definingFeatures: [
        "Hardware standards and operating systems made software markets possible.",
        "Business applications, spreadsheets, word processors, and games gave PCs everyday purposes.",
        "Retail, magazines, clubs, and schools helped users imagine the computer as personal.",
        "Compatibility and platform lock-in became as important as the machine itself."
      ],
      definingFeaturesZh: [
        "硬件标准和操作系统让软件市场成为可能。",
        "商业应用、电子表格、文字处理和游戏赋予个人电脑日常用途。",
        "零售、杂志、俱乐部和学校帮助用户把电脑想象成个人工具。",
        "兼容性和平台锁定变得和机器本身一样重要。"
      ],
      towardNext: "Once personal computers became common platforms, graphical interfaces, productivity software, networking, and home computing could expand to much wider non-specialist audiences.",
      towardNextZh: "当个人电脑成为常见平台后，图形界面、生产力软件、联网和家庭计算才能扩展到更广泛的非专业用户。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/IBM%20PC%205150.jpg",
      imageAlt: "IBM Personal Computer 5150",
      imageCaption: "The IBM PC 5150 became a reference point for business computing and the wider PC-compatible market.",
      imageCaptionZh: "IBM PC 5150 成为商业计算和更广泛 PC 兼容市场的重要参照点。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:IBM_PC_5150.jpg"
    },
    "networks-internet-05": {
      phaseIntro: "The World Wide Web and browsers turned the internet into something ordinary people could navigate visually. Earlier networks connected computers and specialists; the web made linking, publishing, browsing, and searching feel like a public information space.",
      phaseIntroZh: "万维网与浏览器把互联网变成普通人可以视觉化浏览的空间。更早的网络连接计算机和专业社群；网页则让链接、出版、浏览和搜索变成公共信息空间。",
      fromPrevious: "Internet protocols and academic networks created the technical layer for interconnection. The web added a human-facing layer: URLs, pages, hyperlinks, browsers, and eventually search engines and websites.",
      fromPreviousZh: "互联网协议与学术网络创造了互联的技术层。万维网增加了面向人的层：URL、网页、超链接、浏览器，以及后来的搜索引擎和网站。",
      definingFeatures: [
        "Hyperlinks made documents part of a navigable information network.",
        "Browsers gave non-specialists a visual interface to networked information.",
        "Web servers and websites made publishing easier for institutions and individuals.",
        "Open standards helped the web expand beyond one company or platform."
      ],
      definingFeaturesZh: [
        "超链接让文档成为可导航信息网络的一部分。",
        "浏览器给非专业用户提供了访问联网信息的视觉界面。",
        "网页服务器和网站让机构与个人更容易发布内容。",
        "开放标准帮助万维网超越单一公司或平台。"
      ],
      towardNext: "The web's public layer made room for broadband access, search engines, e-commerce, social platforms, streaming media, and the platform internet of the 2000s.",
      towardNextZh: "万维网的公共层为宽带接入、搜索引擎、电子商务、社交平台、流媒体和 2000 年代的平台互联网创造了空间。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/First%20Web%20Server.jpg",
      imageAlt: "The NeXT computer used as the first web server",
      imageCaption: "The first web server is a compact symbol of the web's early link between software, hardware, and open publication.",
      imageCaptionZh: "第一台网页服务器象征着早期万维网中软件、硬件和开放出版之间的连接。",
      imageCredit: "Image: Wikimedia Commons / CERN",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:First_Web_Server.jpg"
    },
    "state-empire-05": {
      phaseIntro: "European colonial empires describe a phase when maritime states, chartered companies, settlers, missionaries, armies, and merchants turned overseas expansion into territorial rule and economic extraction. Empire became global in scale while remaining deeply uneven in power and violence.",
      phaseIntroZh: "欧洲殖民帝国描述海洋国家、特许公司、定居者、传教士、军队和商人把海外扩张转化为领土统治与经济开采的阶段。帝国变成全球尺度，同时充满权力不平等和暴力。",
      fromPrevious: "Earlier gunpowder empires often expanded across connected land frontiers. European colonial empires relied more heavily on oceanic navigation, naval force, overseas settlement, plantation systems, chartered companies, and long-distance extraction.",
      fromPreviousZh: "较早的火药帝国多沿相连陆地边疆扩张；欧洲殖民帝国则更依赖海洋航行、海军力量、海外定居、种植园制度、特许公司和远距离开采。",
      definingFeatures: [
        "Navies and shipping routes connected distant colonies to imperial centers.",
        "Chartered companies blurred private commerce and state power.",
        "Plantations, mines, slavery, and coerced labor structured colonial economies.",
        "Colonial rule remade law, land, religion, race, and political identity."
      ],
      definingFeaturesZh: [
        "海军与航线把远方殖民地连接到帝国中心。",
        "特许公司模糊了私人商业与国家权力的边界。",
        "种植园、矿山、奴隶制和强迫劳动构成殖民经济。",
        "殖民统治重塑法律、土地、宗教、种族和政治身份。"
      ],
      towardNext: "Colonial empires later generated nationalist resistance, abolition movements, settler states, imperial rivalries, world wars, and the postcolonial state system.",
      towardNextZh: "殖民帝国后来催生民族主义抵抗、废奴运动、定居者国家、帝国竞争、世界大战和后殖民国家体系。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colonial%20empires%20in%201800.svg",
      imageAlt: "Map of colonial empires around 1800",
      imageCaption: "Maps of colonial empire help show how maritime expansion turned distant territories into connected imperial systems.",
      imageCaptionZh: "殖民帝国地图有助于显示海洋扩张如何把远方领土变成相互连接的帝国体系。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Colonial_empires_in_1800.svg"
    },
    "economy-trade-06": {
      phaseIntro: "Industrial capitalism describes a phase when production, labor, energy, finance, and markets reorganized around factories and mechanized systems. Capital accumulated through industrial production, colonial extraction, wage labor, infrastructure, and global trade.",
      phaseIntroZh: "工业资本主义描述生产、劳动、能源、金融和市场围绕工厂与机械化系统重组的阶段。资本通过工业生产、殖民开采、工资劳动、基础设施和全球贸易积累。",
      fromPrevious: "Atlantic trade and colonial extraction had already tied empire, commerce, slavery, and global commodities together. Industrial capitalism intensified those links by adding mechanized production, fossil fuels, factory discipline, and new financial systems.",
      fromPreviousZh: "大西洋贸易与殖民开采已经把帝国、商业、奴隶制和全球商品连接起来。工业资本主义通过机械化生产、化石燃料、工厂纪律和新金融体系强化这些连接。",
      definingFeatures: [
        "Factories concentrated labor, machinery, time discipline, and supervision.",
        "Coal, steam, railways, and later electricity accelerated production and circulation.",
        "Wage labor and class conflict became central social questions.",
        "Industrial growth depended on global raw materials, colonial markets, and finance."
      ],
      definingFeaturesZh: [
        "工厂集中劳动、机器、时间纪律和监督。",
        "煤、蒸汽、铁路以及后来的电力加速生产和流通。",
        "工资劳动与阶级冲突成为核心社会问题。",
        "工业增长依赖全球原料、殖民市场和金融。"
      ],
      towardNext: "Industrial capitalism later fed mass consumer economies, welfare politics, corporate capitalism, labor movements, environmental pressures, and new forms of global inequality.",
      towardNextZh: "工业资本主义后来推动大众消费经济、福利政治、公司资本主义、劳工运动、环境压力和新的全球不平等形式。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Power%20Loom%20Weaving%201835.jpg",
      imageAlt: "Power loom weaving in an industrial textile mill",
      imageCaption: "Textile mills and power looms are common symbols of mechanized labor, factory discipline, and industrial capitalism.",
      imageCaptionZh: "纺织厂与动力织机常被用来象征机械化劳动、工厂纪律和工业资本主义。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Power_Loom_Weaving_1835.jpg"
    },
    "architecture-07": {
      phaseIntro: "Modernism and international style describe an architectural phase that rejected historical ornament and emphasized function, abstraction, new materials, and standardized forms. Buildings were imagined as instruments for modern life, social reform, corporate identity, and global urban development.",
      phaseIntroZh: "现代主义与国际风格描述一种拒绝历史装饰、强调功能、抽象、新材料和标准化形式的建筑阶段。建筑被想象成现代生活、社会改革、企业身份和全球城市发展的工具。",
      fromPrevious: "Industrial materials and modern cities had already introduced steel, glass, elevators, rail stations, factories, and dense metropolitan life. Modernism turned those technical conditions into an explicit design ideology.",
      fromPreviousZh: "工业材料与现代城市已经引入钢、玻璃、电梯、火车站、工厂和密集大都市生活。现代主义把这些技术条件转化成明确的设计意识形态。",
      definingFeatures: [
        "Flat roofs, open plans, pilotis, glass walls, and reinforced concrete became key motifs.",
        "Architects treated buildings as functional systems rather than decorated historical objects.",
        "Housing, schools, offices, and civic buildings became laboratories for modern social life.",
        "International circulation made similar forms appear across very different cities and climates."
      ],
      definingFeaturesZh: [
        "平屋顶、开放平面、底层架空柱、玻璃墙和钢筋混凝土成为关键母题。",
        "建筑师把建筑视为功能系统，而不是带装饰的历史物件。",
        "住宅、学校、办公楼和公共建筑成为现代社会生活的实验场。",
        "国际传播让相似形式出现在非常不同的城市与气候中。"
      ],
      towardNext: "Its universal claims later provoked critique, postmodern responses, regional modernisms, preservation debates, and eventually sustainable and computational approaches.",
      towardNextZh: "它的普遍主义主张后来引发批判、后现代回应、地区现代主义、保护争论，并最终通向可持续与计算建筑方法。",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Villa%20Savoye.jpg",
      imageAlt: "Villa Savoye by Le Corbusier",
      imageCaption: "Villa Savoye is often used as an emblem of modernist architecture and Le Corbusier's principles.",
      imageCaptionZh: "萨伏伊别墅常被视为现代主义建筑和勒·柯布西耶原则的象征。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Villa_Savoye.jpg"
    }
  };
  return details[id] || {};
}

function getLensTitle(lensId) {
  const titles = {
    "war-military": "War / Military",
    "state-empire": "State / Empire",
    "economy-trade": "Economy / Trade",
    "religion-belief": "Religion / Belief",
    "science-technology": "Science / Technology",
    art: "Art",
    literature: "Literature",
    "fashion-daily-life": "Fashion / Daily Life",
    "entertainment-media": "Entertainment / Media",
    "disaster-climate": "Disaster / Climate",
    architecture: "Architecture"
  };
  return titles[lensId] || lensId;
}

function inferPlaceIdsForEvent(event) {
  const text = [event.region, event.place, event.title, event.summary].filter(Boolean).join(" ").toLowerCase();
  const rules = [
    ["turkey-anatolia", ["constantinople", "istanbul", "ottoman", "anatolia", "eastern mediterranean", "byzantine", "gallipoli", "nicaea"]],
    ["iran-persia", ["iran", "persia", "persian", "achaemenid", "safavid", "isfahan", "chaldiran", "semipalatinsk"]],
    ["arab-middle-east", ["mesopotamia", "uruk", "babylon", "iraq", "baghdad", "abbasid", "arab", "syria", "kadesh", "afghanistan", "islamic world", "jerusalem", "first temple", "medina", "hijra", "jericho", "fertile crescent", "hebrew", "prophetic", "gesher", "ya'aqov"]],
    ["china", ["china", "ming", "qing", "beijing", "nanjing", "qin", "han", "kaifeng", "song", "mongol steppe"]],
    ["japan", ["japan", "tokyo", "kyoto", "osaka", "meiji", "taisho"]],
    ["korea", ["korea", "joseon", "seoul"]],
    ["malaysia", ["malaysia", "malaya", "malay", "malacca", "melaka", "penang", "perak", "kuala lumpur", "petronas", "multimedia super corridor", "cyberjaya", "proton saga", "pangkor"]],
    ["india", ["india", "south asia", "bengal", "delhi", "mughal", "plassey"]],
    ["france", ["france", "paris", "poissy", "versailles", "gaul", "catalaunian", "lascaux", "great famine", "revolutions of 1848"]],
    ["britain-uk", ["britain", "british", "united kingdom", "london", "derbyshire", "manchester", "birmingham", "bletchley", "greenwich", "chaucer", "canterbury", "pride and prejudice", "austen", "armada portrait"]],
    ["german-lands", ["germany", "german", "berlin", "weimar", "mainz", "westphalia", "bavaria", "holy roman empire", "darmstadt", "dessau", "teutoburg", "germania", "strasbourg"]],
    ["italian-states", ["italy", "rome", "florence", "vatican", "venice", "genoa", "bologna", "milan", "pompeii", "copernicus"]],
    ["greece-balkans", ["greece", "greek", "athens", "marathon", "parthenon", "dionysia", "homeric", "aeschylus", "mohi", "hungary", "balkans", "knossos", "crete", "lepanto", "venus de milo"]],
    ["low-countries", ["netherlands", "dutch", "amsterdam", "rotterdam", "low countries", "rembrandt", "night watch", "burgundian"]],
    ["switzerland-alps", ["switzerland", "swiss", "geneva", "cern", "ipcc", "world wide web proposed", "web proposed"]],
    ["ireland", ["ireland", "irish", "newgrange"]],
    ["iberia-spain", ["spain", "iberia", "portugal", "spanish", "caribbean / spanish", "madrid", "lisbon", "barcelona", "catalonia", "catalan", "gaudi", "gaudí", "sagrada familia", "eixample", "montjuic", "montjuïc", "miró", "miro", "mies pavilion", "barcelona pavilion"]],
    ["russia", ["russia", "russian", "soviet", "moscow", "petrograd", "ukraine"]],
    ["united-states", ["united states", "new york", "st. louis", "highland park", "menlo park", "ncs", "america", "americas", "cuba", "washington", "california", "online ai systems"]],
    ["mexico-mesoamerica", ["mexico", "mesoamerica", "aztec", "mexica", "tenochtitlan"]],
    ["andes-peru", ["peru", "andes", "inca", "potosi", "cusco"]],
    ["brazil", ["brazil", "rio de janeiro", "são paulo", "sao paulo"]],
    ["egypt-north-africa", ["egypt", "nile", "north africa", "giza", "alexandria", "cairo"]],
    ["west-africa", ["west africa", "mali", "songhai", "ghana", "timbuktu", "elmina", "dahomey", "gold coast", "nigeria", "things fall apart"]],
    ["east-africa", ["east africa", "oldowan", "tanzania", "kenya", "ethiopia"]],
    ["global-transregional", ["covid-19", "global", "fashion industry sustainability", "religious services move online", "year of africa", "oil crisis", "world wide web", "internet", "online", "upper paleolithic", "black death", "year without a summer", "medieval wool trade", "wartime industrial labor", "finland", "finnish", "taiwan", "canada", "philippines", "european union", "global windows networks", "global ai communities", "global cloud platforms", "global semiconductor industry"]]
  ];
  const matches = rules
    .filter(([, terms]) => terms.some((term) => matchesPlaceTerm(text, term)))
    .map(([placeId]) => placeId);
  return [...new Set(matches)];
}

function matchesPlaceTerm(text, term) {
  const escaped = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
}

augmentPhaseLinkedExactEvents();

function augmentPhaseLinkedExactEvents() {
  const eventDefaults = {
    "fall-constantinople": {
      lensIds: ["state-empire", "war-military", "religion-belief", "economy-trade"],
      primaryLensId: "state-empire",
      phaseIds: ["state-empire-04", "war-military-04", "religion-belief-04", "economy-trade-04"],
      primaryPhaseId: "state-empire-04",
      placeIds: ["turkey-anatolia"],
      primaryPlaceId: "turkey-anatolia",
      eventType: "conquest",
      scope: "regional power shift",
      titleZh: "君士坦丁堡陷落",
      summaryZh: "奥斯曼军队攻占君士坦丁堡，终结拜占庭帝国，并改变东地中海的权力、贸易与知识网络。",
      wikiPage: "https://en.wikipedia.org/wiki/Fall_of_Constantinople",
      wikidataId: "Q12546",
      sources: ["world-history-encyclopedia", "britannica", "wikidata"]
    },
    "edison-light-bulb": {
      lensIds: ["science-technology", "economy-trade", "entertainment-media"],
      primaryLensId: "science-technology",
      phaseIds: ["science-technology-06", "economy-trade-06", "entertainment-media-05"],
      primaryPhaseId: "science-technology-06",
      placeIds: ["united-states"],
      primaryPlaceId: "united-states",
      eventType: "invention-system",
      scope: "urban infrastructure",
      titleZh: "爱迪生实用白炽灯",
      summaryZh: "爱迪生的实用白炽灯成为更大电力系统的一部分，连接照明、配电与城市基础设施。",
      wikiPage: "https://en.wikipedia.org/wiki/Incandescent_light_bulb",
      wikidataId: "Q47616",
      sources: ["britannica", "wikidata"]
    },
    "world-war-i": {
      lensIds: ["war-military", "state-empire", "literature", "fashion-daily-life", "economy-trade"],
      primaryLensId: "war-military",
      phaseIds: ["war-military-06", "state-empire-06", "literature-07", "fashion-daily-life-06"],
      primaryPhaseId: "war-military-06",
      placeIds: ["france", "german-lands", "britain-uk", "turkey-anatolia", "india", "egypt-north-africa"],
      primaryPlaceId: "france",
      eventType: "war",
      scope: "global imperial conflict",
      titleZh: "第一次世界大战爆发",
      summaryZh: "欧洲危机通过联盟体系、动员、帝国承诺和大众政治升级为全球战争。",
      wikiPage: "https://en.wikipedia.org/wiki/World_War_I",
      wikidataId: "Q361",
      sources: ["britannica", "world-history-encyclopedia", "wikidata"]
    },
    "altair-8800": {
      lensIds: ["science-technology", "economy-trade"],
      primaryLensId: "science-technology",
      primaryTrackId: "computing-pc",
      phaseIds: ["computing-pc-05", "science-technology-07"],
      primaryPhaseId: "computing-pc-05",
      eventType: "platform",
      scope: "hobbyist computing"
    },
    "apple-ii": {
      lensIds: ["science-technology", "economy-trade", "entertainment-media"],
      primaryLensId: "science-technology",
      primaryTrackId: "computing-pc",
      phaseIds: ["computing-pc-05", "science-technology-07"],
      primaryPhaseId: "computing-pc-05",
      eventType: "platform",
      scope: "personal computing"
    },
    "ibm-pc": {
      lensIds: ["science-technology", "economy-trade"],
      primaryLensId: "science-technology",
      primaryTrackId: "computing-pc",
      phaseIds: ["computing-pc-05", "science-technology-07"],
      primaryPhaseId: "computing-pc-05",
      eventType: "platform-standard",
      scope: "mass-market computing",
      wikiPage: "https://en.wikipedia.org/wiki/IBM_Personal_Computer",
      wikidataId: "Q207551"
    },
    macintosh: {
      lensIds: ["science-technology", "art", "entertainment-media"],
      primaryLensId: "science-technology",
      primaryTrackId: "computing-pc",
      phaseIds: ["computing-pc-05", "computing-pc-06", "science-technology-07"],
      primaryPhaseId: "computing-pc-05",
      eventType: "interface",
      scope: "personal computing",
      wikiPage: "https://en.wikipedia.org/wiki/Macintosh_128K",
      wikidataId: "Q184198"
    },
    "arpanet-first-nodes": {
      lensIds: ["science-technology", "war-military"],
      primaryLensId: "science-technology",
      primaryTrackId: "networks-internet",
      phaseIds: ["networks-internet-03", "science-technology-07"],
      primaryPhaseId: "networks-internet-03",
      eventType: "network-infrastructure",
      scope: "research network"
    },
    "tcp-ip-transition": {
      lensIds: ["science-technology"],
      primaryLensId: "science-technology",
      primaryTrackId: "networks-internet",
      phaseIds: ["networks-internet-04", "science-technology-07"],
      primaryPhaseId: "networks-internet-04",
      eventType: "protocol-standard",
      scope: "network interoperability"
    },
    "world-wide-web-proposal": {
      lensIds: ["science-technology", "entertainment-media", "economy-trade"],
      primaryLensId: "science-technology",
      primaryTrackId: "networks-internet",
      phaseIds: ["networks-internet-05", "science-technology-08"],
      primaryPhaseId: "networks-internet-05",
      placeIds: ["france", "britain-uk"],
      primaryPlaceId: "france",
      eventType: "proposal",
      scope: "public information infrastructure",
      wikiPage: "https://en.wikipedia.org/wiki/World_Wide_Web",
      wikidataId: "Q466"
    },
    "world-wide-web-public": {
      lensIds: ["science-technology", "entertainment-media", "economy-trade"],
      primaryLensId: "science-technology",
      primaryTrackId: "networks-internet",
      phaseIds: ["networks-internet-05", "science-technology-08"],
      primaryPhaseId: "networks-internet-05",
      placeIds: ["france", "britain-uk"],
      primaryPlaceId: "france",
      eventType: "public-release",
      scope: "public internet"
    }
  };

  const filmEvent = ({
    id,
    year,
    title,
    titleZh,
    region,
    place,
    phaseId,
    summary,
    summaryZh,
    placeIds,
    extraLensIds = [],
    parentPhaseIds = [],
    eventType = "film-industry-event",
    scope = "cinema industry",
    details = {}
  }) => {
    const event = eventSeed(
      id,
      year,
      title,
      region,
      place,
      ["Entertainment", "Media", "Film", "Cinema"],
      uniqueValues(["entertainment-media", ...extraLensIds]),
      uniqueValues([phaseId, ...parentPhaseIds]),
      summary,
      titleZh,
      summaryZh,
      ["film-cinema-industry"]
    );
    return {
      ...event,
      placeIds,
      primaryPlaceId: placeIds[0] || null,
      eventType,
      scope,
      importance: "core",
      ...details
    };
  };

  const newEvents = [
    eventSeed("school-of-athens", 1511, "School of Athens completed", "Europe", "Vatican / Rome", ["Art", "Religion", "Literature"], ["art"], ["art-04"], "Raphael's fresco became an emblem of Renaissance classicism, perspective, and humanist learning.", "《雅典学院》完成", "拉斐尔的壁画成为文艺复兴古典复兴、透视法与人文主义学习的象征。"),
    eventSeed("sistine-ceiling", 1512, "Sistine Chapel ceiling completed", "Europe", "Vatican / Rome", ["Art", "Religion"], ["art"], ["art-04"], "Michelangelo's ceiling joined monumental Christian imagery with the Renaissance study of the human body.", "西斯廷礼拜堂天顶画完成", "米开朗基罗的天顶画把宏大的基督教图像与文艺复兴的人体研究结合起来。"),
    eventSeed("vasari-lives", 1550, "Vasari publishes Lives of the Artists", "Europe", "Florence / Italy", ["Art", "Literature"], ["art", "literature"], ["art-04"], "Vasari's book helped frame Renaissance art around named artists, biographies, and stylistic development.", "瓦萨里出版《艺苑名人传》", "瓦萨里的著作帮助把文艺复兴艺术理解为由艺术家、传记和风格发展构成的历史。"),
    eventSeed("printing-press-europe", 1450, "Movable-type printing spreads in Europe", "Europe", "Mainz / German lands", ["Technology", "Literature", "Art"], ["science-technology", "literature", "art"], ["art-04", "literature-05", "science-technology-05"], "Movable-type printing expanded the circulation of texts, images, humanist editions, and religious debate.", "欧洲活字印刷扩散", "活字印刷扩大了文本、图像、人文主义版本和宗教争论的传播。"),

    eventSeed("picasso-demoiselles", 1907, "Picasso paints Les Demoiselles d'Avignon", "Europe", "Paris / France", ["Art"], ["art"], ["art-07"], "Picasso's painting helped break academic figure painting into angular, confrontational modernist form.", "毕加索创作《亚威农少女》", "这幅画帮助把学院式人物画推向棱角化、对抗性的现代主义形式。"),
    eventSeed("armory-show", 1913, "Armory Show introduces European modernism to New York", "Americas", "New York / United States", ["Art"], ["art"], ["art-07"], "The exhibition made avant-garde European art a major public controversy in the United States.", "军械库展览把欧洲现代主义带到纽约", "这次展览让欧洲先锋艺术在美国成为重要公共争论。"),
    eventSeed("black-square", 1915, "Malevich exhibits Black Square", "Europe", "Petrograd / Russian Empire", ["Art"], ["art"], ["art-07"], "Black Square became a radical statement of abstraction and reduction in modernist art.", "马列维奇展出《黑方块》", "《黑方块》成为现代主义艺术中抽象与极简化的激进宣言。"),
    eventSeed("bauhaus-founded", 1919, "Bauhaus founded", "Europe", "Weimar / Germany", ["Art", "Architecture", "Technology"], ["art", "architecture"], ["art-07", "architecture-07"], "The Bauhaus connected modernist art, design, architecture, craft, and industrial production.", "包豪斯成立", "包豪斯连接了现代主义艺术、设计、建筑、工艺与工业生产。"),

    eventSeed("great-exhibition", 1851, "Great Exhibition opens", "Europe", "London / United Kingdom", ["Technology", "Economy", "Architecture"], ["science-technology", "economy-trade", "architecture"], ["science-technology-06", "economy-trade-06", "architecture-06"], "The exhibition staged industrial machinery, global commodities, empire, and engineering as public spectacle.", "万国工业博览会开幕", "这次展览把工业机器、全球商品、帝国和工程变成公共奇观。"),
    eventSeed("bessemer-process", 1856, "Bessemer steel process patented", "Europe", "United Kingdom", ["Technology", "Economy"], ["science-technology", "economy-trade"], ["science-technology-06", "economy-trade-06"], "Cheaper mass steel production reshaped railways, bridges, machines, weapons, and cities.", "贝塞麦炼钢法获专利", "更廉价的大规模钢铁生产重塑铁路、桥梁、机器、武器和城市。"),
    eventSeed("transatlantic-cable", 1866, "Durable transatlantic telegraph cable completed", "Europe", "Atlantic cable / Britain and North America", ["Technology", "Economy", "Media"], ["science-technology", "economy-trade", "entertainment-media"], ["science-technology-06", "economy-trade-06", "networks-internet-01"], "A reliable Atlantic cable compressed communication time between Europe and North America.", "稳定跨大西洋电报电缆完成", "可靠的大西洋电缆压缩了欧洲与北美之间的通信时间。"),
    eventSeed("pearl-street-station", 1882, "Pearl Street Station begins service", "Americas", "New York / United States", ["Technology", "Economy"], ["science-technology", "economy-trade"], ["science-technology-06", "economy-trade-06"], "Edison's central power station demonstrated electric lighting as an urban infrastructure system.", "珍珠街电站开始运行", "爱迪生的中央电站展示了电灯作为城市基础设施系统的可能。"),

    eventSeed("columbus-americas", 1492, "Columbus reaches the Americas", "Americas", "Caribbean / Spanish Atlantic", ["Empire", "Economy"], ["state-empire", "economy-trade"], ["state-empire-05", "economy-trade-04"], "The voyage helped open violent Atlantic colonial systems linking Europe, Africa, and the Americas.", "哥伦布抵达美洲", "这次航行帮助开启连接欧洲、非洲和美洲的暴力大西洋殖民体系。"),
    eventSeed("east-india-company", 1600, "English East India Company chartered", "Europe", "London / Indian Ocean world", ["Empire", "Economy"], ["state-empire", "economy-trade"], ["state-empire-05", "economy-trade-05"], "The company became a key example of chartered commerce turning into imperial power.", "英国东印度公司获特许状", "这家公司成为特许商业转化为帝国权力的关键例子。"),
    eventSeed("battle-plassey", 1757, "Battle of Plassey", "India", "Bengal / South Asia", ["Empire", "War", "Economy"], ["state-empire", "war-military", "economy-trade"], ["state-empire-05", "war-military-05", "economy-trade-06"], "The battle helped expand East India Company power in Bengal and British imperial influence in South Asia.", "普拉西战役", "这场战役帮助扩大东印度公司在孟加拉的权力和英国在南亚的帝国影响。"),
    eventSeed("berlin-conference", 1884, "Berlin Conference begins", "Europe", "Berlin / Africa partition diplomacy", ["Empire", "Politics", "Economy"], ["state-empire", "economy-trade"], ["state-empire-05", "economy-trade-06"], "European powers formalized rules for colonial claims in Africa without African political participation.", "柏林会议开始", "欧洲列强在没有非洲政治参与的情况下，为非洲殖民主张制定规则。"),

    eventSeed("cromford-mill", 1771, "Cromford Mill opens", "Europe", "Derbyshire / United Kingdom", ["Economy", "Technology"], ["economy-trade", "science-technology"], ["economy-trade-06", "science-technology-06"], "Arkwright's mill became a model for factory organization in mechanized textile production.", "克罗姆福德纺织厂开工", "阿克莱特的工厂成为机械化纺织生产中工厂组织的模型。"),
    eventSeed("stockton-darlington", 1825, "Stockton and Darlington Railway opens", "Europe", "United Kingdom", ["Economy", "Technology"], ["economy-trade", "science-technology"], ["economy-trade-06", "science-technology-06"], "The railway helped show how steam transport could reorganize industrial circulation.", "斯托克顿—达灵顿铁路开通", "这条铁路展示了蒸汽交通如何重组工业流通。"),
    eventSeed("communist-manifesto", 1848, "Communist Manifesto published", "Europe", "London / European revolutionary politics", ["Economy", "Politics", "Literature"], ["economy-trade", "state-empire", "literature"], ["economy-trade-06", "state-empire-06", "literature-06"], "The manifesto framed industrial capitalism around class conflict, labor, capital, and historical change.", "《共产党宣言》出版", "这份宣言围绕阶级冲突、劳动、资本和历史变化来解释工业资本主义。"),
    eventSeed("ford-assembly-line", 1913, "Ford moving assembly line introduced", "Americas", "Highland Park / United States", ["Economy", "Technology"], ["economy-trade", "science-technology"], ["economy-trade-06", "science-technology-06"], "The moving assembly line became a symbol of mass production, labor discipline, and consumer industry.", "福特移动装配线投入使用", "移动装配线成为大规模生产、劳动纪律和消费工业的象征。"),

    eventSeed("villa-savoye", 1931, "Villa Savoye completed", "Europe", "Poissy / France", ["Architecture", "Art"], ["architecture", "art"], ["architecture-07", "art-07"], "Le Corbusier's house became a canonical example of modernist architectural principles.", "萨伏伊别墅完成", "勒·柯布西耶的住宅成为现代主义建筑原则的经典案例。"),
    eventSeed("international-style-exhibition", 1932, "International Style exhibition opens", "Americas", "Museum of Modern Art / New York", ["Architecture", "Art"], ["architecture", "art"], ["architecture-07", "art-07"], "The exhibition helped name and circulate the idea of an international modernist architecture.", "国际风格展览开幕", "这次展览帮助命名并传播了国际现代主义建筑的观念。"),
    eventSeed("lever-house", 1952, "Lever House completed", "Americas", "New York / United States", ["Architecture", "Economy"], ["architecture", "economy-trade"], ["architecture-07"], "Lever House became an influential glass-and-steel corporate modernist tower.", "利华大厦完成", "利华大厦成为有影响力的玻璃钢结构企业现代主义高楼。"),
    eventSeed("pruitt-igoe-demolition", 1972, "Pruitt-Igoe demolition begins", "Americas", "St. Louis / United States", ["Architecture", "Politics"], ["architecture", "state-empire"], ["architecture-07"], "The demolition became a widely cited symbol in critiques of modernist planning and public housing policy.", "普鲁伊特-艾戈住宅拆除开始", "这次拆除成为批判现代主义规划和公共住房政策时常被引用的象征。"),

    eventSeed("mosaic-browser", 1993, "Mosaic browser released", "Americas", "NCSA / United States", ["Technology", "Media"], ["science-technology", "entertainment-media"], ["networks-internet-05", "science-technology-08"], "Mosaic helped make web browsing visual, approachable, and important to non-specialist users.", "Mosaic 浏览器发布", "Mosaic 帮助网页浏览变得视觉化、易接近，并面向非专业用户。", ["networks-internet"]),
    eventSeed("netscape-navigator", 1994, "Netscape Navigator released", "Americas", "United States", ["Technology", "Media", "Economy"], ["science-technology", "entertainment-media", "economy-trade"], ["networks-internet-05", "science-technology-08"], "Netscape helped turn the web browser into a mass-market software platform.", "Netscape Navigator 发布", "Netscape 帮助把网页浏览器变成大众市场软件平台。", ["networks-internet"]),
    eventSeed("windows-1", 1985, "Microsoft Windows 1.0 released", "Americas", "United States", ["Technology", "Economy"], ["science-technology", "economy-trade"], ["computing-pc-05", "computing-pc-06"], "Windows 1.0 was an early step in bringing graphical operating environments to IBM-compatible PCs.", "Microsoft Windows 1.0 发布", "Windows 1.0 是把图形化操作环境带向 IBM 兼容 PC 的早期步骤。", ["computing-pc"]),
    eventSeed("visicalc", 1979, "VisiCalc spreadsheet released", "Americas", "United States", ["Technology", "Economy"], ["science-technology", "economy-trade"], ["computing-pc-05"], "VisiCalc made the personal computer newly compelling as a business calculation tool.", "VisiCalc 电子表格发布", "VisiCalc 让个人电脑作为商业计算工具变得格外有吸引力。", ["computing-pc"]),

    filmEvent({
      id: "muybridge-horse-motion",
      year: 1878,
      title: "Muybridge photographs a horse in motion",
      titleZh: "迈布里奇拍摄奔跑中的马",
      region: "Americas",
      place: "California / United States",
      phaseId: "film-cinema-industry-01",
      parentPhaseIds: ["entertainment-media-05", "science-technology-06"],
      extraLensIds: ["science-technology", "art"],
      summary: "Eadweard Muybridge's sequential photographs made motion analyzable as a series of images, linking photography, science, spectacle, and later cinema.",
      summaryZh: "爱德华·迈布里奇的连续摄影把运动分解为一连串图像，连接了摄影、科学、奇观和后来的电影。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "lumiere-public-screening",
      year: 1895,
      title: "Lumiere brothers hold public film screening",
      titleZh: "卢米埃尔兄弟举行公开电影放映",
      region: "Europe",
      place: "Paris / France",
      phaseId: "film-cinema-industry-02",
      parentPhaseIds: ["entertainment-media-05"],
      extraLensIds: ["science-technology", "economy-trade"],
      summary: "The Lumiere program helped establish projected moving pictures as a paid public entertainment rather than only a laboratory or fairground curiosity.",
      summaryZh: "卢米埃尔的放映帮助把活动影像确立为付费公共娱乐，而不只是实验室或集市中的新奇装置。",
      placeIds: ["france"],
      details: {
        eventIntro: "The Paris screening organized short films, projection equipment, an audience, and ticketed exhibition into a repeatable commercial format.",
        eventIntroZh: "巴黎放映把短片、放映设备、观众和售票展映组织成一种可以复制的商业形式。",
        whyMatters: "It matters less as the single birth of cinema than as a clear industrial template: films could be shown publicly, charged for, repeated, and exported.",
        whyMattersZh: "它的重要性不在于把它神话成电影的唯一诞生点，而在于它提供了清楚的工业模板：电影可以公开放映、收费、重复并出口。",
        phaseRelation: "This event belongs to early cinema because it turns technical motion photography into exhibition practice and audience habit.",
        phaseRelationZh: "它属于早期电影阶段，因为它把技术性的活动摄影转化为展映实践和观众习惯。",
        connectionHint: "It connects projection technology, urban leisure, commercial entertainment, and later global film distribution.",
        connectionHintZh: "它连接了放映技术、城市休闲、商业娱乐和后来的全球电影发行。"
      }
    }),
    filmEvent({
      id: "trip-to-the-moon-release",
      year: 1902,
      title: "A Trip to the Moon released",
      titleZh: "《月球旅行记》上映",
      region: "Europe",
      place: "France",
      phaseId: "film-cinema-industry-02",
      parentPhaseIds: ["entertainment-media-05", "art-07"],
      extraLensIds: ["art", "literature"],
      summary: "Georges Melies used staging, editing, painted sets, and fantasy storytelling to show that cinema could become imaginative narrative spectacle.",
      summaryZh: "乔治·梅里爱用舞台调度、剪辑、手绘布景和幻想叙事展示电影可以成为想象性的叙事奇观。",
      placeIds: ["france"]
    }),
    filmEvent({
      id: "nickelodeon-theaters-spread",
      year: 1905,
      title: "Nickelodeon theaters spread in the United States",
      titleZh: "美国镍币影院扩散",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-02",
      parentPhaseIds: ["entertainment-media-05", "economy-trade-07"],
      extraLensIds: ["economy-trade"],
      summary: "Small storefront movie theaters made cinema an everyday urban business and helped stabilize regular filmgoing audiences.",
      summaryZh: "小型街边电影院让电影成为日常城市商业，并帮助形成稳定的观影人群。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "birth-of-a-nation-release",
      year: 1915,
      title: "The Birth of a Nation released",
      titleZh: "《一个国家的诞生》上映",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-03",
      parentPhaseIds: ["entertainment-media-05", "state-empire-07"],
      extraLensIds: ["art", "state-empire"],
      summary: "The film demonstrated the commercial power of feature-length cinema while also showing how film spectacle could amplify racist myth and political memory.",
      summaryZh: "这部电影展示了长片电影的商业力量，同时也显示电影奇观如何放大种族主义神话和政治记忆。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "united-artists-founded",
      year: 1919,
      title: "United Artists founded",
      titleZh: "联美公司成立",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-03",
      parentPhaseIds: ["entertainment-media-05", "economy-trade-07"],
      extraLensIds: ["economy-trade", "art"],
      summary: "Chaplin, Pickford, Fairbanks, and Griffith formed United Artists as a challenge to studio control over distribution and creative labor.",
      summaryZh: "卓别林、璧克馥、范朋克和格里菲斯创立联美，挑战制片厂对发行和创作劳动的控制。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "jazz-singer-release",
      year: 1927,
      title: "The Jazz Singer released",
      titleZh: "《爵士歌手》上映",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-04",
      parentPhaseIds: ["entertainment-media-05", "science-technology-07"],
      extraLensIds: ["science-technology", "economy-trade"],
      summary: "The film accelerated the transition to synchronized sound, forcing studios, theaters, performers, and audiences to adapt to talkies.",
      summaryZh: "这部电影加速了向同步声音的转变，迫使制片厂、影院、演员和观众适应有声片。",
      placeIds: ["united-states"],
      details: {
        eventIntro: "The Jazz Singer did not invent sound film, but it made synchronized dialogue and song commercially unavoidable.",
        eventIntroZh: "《爵士歌手》并没有发明有声电影，但它让同步对白和歌曲在商业上变得无法回避。",
        whyMatters: "Sound changed acting styles, screenwriting, theater equipment, music rights, language markets, and the global circulation of films.",
        whyMattersZh: "声音改变了表演方式、剧本写作、影院设备、音乐版权、语言市场和电影的全球流通。",
        phaseRelation: "It sits at the opening of the sound-cinema phase because it made sound conversion an industry-wide investment problem.",
        phaseRelationZh: "它位于有声电影阶段的开端，因为它把声音转型变成整个行业的投资问题。",
        connectionHint: "It links media technology, capital costs, labor retraining, musical performance, and the studio system.",
        connectionHintZh: "它连接了媒介技术、资本成本、劳动再训练、音乐表演和制片厂体系。"
      }
    }),
    filmEvent({
      id: "academy-awards-first",
      year: 1929,
      title: "First Academy Awards held",
      titleZh: "首届奥斯卡金像奖举办",
      region: "Americas",
      place: "Hollywood / United States",
      phaseId: "film-cinema-industry-04",
      parentPhaseIds: ["entertainment-media-06", "economy-trade-07"],
      extraLensIds: ["economy-trade"],
      summary: "The Academy Awards helped formalize prestige, publicity, professional recognition, and industrial self-presentation in Hollywood.",
      summaryZh: "奥斯卡帮助好莱坞制度化声望、宣传、职业认可和行业自我呈现。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "snow-white-premiere",
      year: 1937,
      title: "Snow White and the Seven Dwarfs premieres",
      titleZh: "《白雪公主与七个小矮人》首映",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-04",
      parentPhaseIds: ["entertainment-media-06", "art-07"],
      extraLensIds: ["art", "economy-trade"],
      summary: "Disney's feature-length animated film showed that animation could support major theatrical releases and family entertainment franchises.",
      summaryZh: "迪士尼的长篇动画证明动画可以支撑大型院线发行和家庭娱乐品牌。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "paramount-decree",
      year: 1948,
      title: "Paramount Decree breaks studio theater ownership",
      titleZh: "派拉蒙判决打破制片厂影院所有权",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-05",
      parentPhaseIds: ["entertainment-media-06", "state-empire-08"],
      extraLensIds: ["state-empire", "economy-trade"],
      summary: "The antitrust ruling forced major studios to separate production-distribution power from theater ownership, weakening classical vertical integration.",
      summaryZh: "这项反垄断判决迫使大型制片厂把制作发行权力与影院所有权分离，削弱了经典垂直整合。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "rashomon-venice",
      year: 1951,
      title: "Rashomon wins at Venice",
      titleZh: "《罗生门》在威尼斯获奖",
      region: "Asia",
      place: "Japan / Venice",
      phaseId: "film-cinema-industry-05",
      parentPhaseIds: ["entertainment-media-06", "art-07"],
      extraLensIds: ["art"],
      summary: "Rashomon's international recognition helped make postwar Japanese cinema visible in global festival culture.",
      summaryZh: "《罗生门》的国际认可帮助战后日本电影进入全球电影节文化视野。",
      placeIds: ["japan", "italian-states"],
      details: {
        eventIntro: "The film's Venice success brought Akira Kurosawa and Japanese cinema into a wider international art-film circuit.",
        eventIntroZh: "这部电影在威尼斯的成功把黑泽明和日本电影带入更广阔的国际艺术电影网络。",
        whyMatters: "It shows how festivals could make national cinemas legible to global audiences, critics, distributors, and institutions.",
        whyMattersZh: "它显示电影节如何让民族电影被全球观众、影评人、发行商和机构看见。",
        phaseRelation: "It belongs to the postwar art-film phase because prestige increasingly moved through festivals, criticism, and international circulation.",
        phaseRelationZh: "它属于战后艺术电影阶段，因为声望越来越通过电影节、评论和国际流通产生。",
        connectionHint: "It connects postwar cultural diplomacy, art cinema, festival institutions, and global distribution.",
        connectionHintZh: "它连接了战后文化外交、艺术电影、电影节制度和全球发行。"
      }
    }),
    filmEvent({
      id: "seven-samurai-release",
      year: 1954,
      title: "Seven Samurai released",
      titleZh: "《七武士》上映",
      region: "Asia",
      place: "Japan",
      phaseId: "film-cinema-industry-05",
      parentPhaseIds: ["entertainment-media-06", "art-07"],
      extraLensIds: ["art", "war-military"],
      summary: "Kurosawa's film became a landmark of action editing, ensemble storytelling, historical drama, and global remake culture.",
      summaryZh: "黑泽明的电影成为动作剪辑、群像叙事、历史剧和全球翻拍文化的标志。",
      placeIds: ["japan"]
    }),
    filmEvent({
      id: "four-hundred-blows-release",
      year: 1959,
      title: "The 400 Blows released",
      titleZh: "《四百击》上映",
      region: "Europe",
      place: "France",
      phaseId: "film-cinema-industry-05",
      parentPhaseIds: ["entertainment-media-06", "art-07"],
      extraLensIds: ["art"],
      summary: "Truffaut's film became a key marker of the French New Wave and a new model of personal, low-budget modern cinema.",
      summaryZh: "特吕弗的电影成为法国新浪潮的关键标志，也代表一种个人化、低成本的现代电影模式。",
      placeIds: ["france"]
    }),
    filmEvent({
      id: "godfather-release",
      year: 1972,
      title: "The Godfather released",
      titleZh: "《教父》上映",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-06",
      parentPhaseIds: ["entertainment-media-06", "art-08"],
      extraLensIds: ["art", "literature"],
      summary: "The film became a defining New Hollywood success, joining studio resources, director prestige, crime narrative, and mass audience appeal.",
      summaryZh: "这部电影成为新好莱坞的代表性成功，把制片厂资源、导演声望、犯罪叙事和大众吸引力结合起来。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "jaws-release",
      year: 1975,
      title: "Jaws released",
      titleZh: "《大白鲨》上映",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-06",
      parentPhaseIds: ["entertainment-media-06", "economy-trade-07"],
      extraLensIds: ["economy-trade"],
      summary: "Jaws helped define the wide-release summer blockbuster as a major Hollywood business model.",
      summaryZh: "《大白鲨》帮助确立大规模发行的暑期大片作为好莱坞的重要商业模式。",
      placeIds: ["united-states"],
      details: {
        eventIntro: "Jaws combined national advertising, wide release, suspense-driven genre filmmaking, and summer audience timing into a repeatable commercial strategy.",
        eventIntroZh: "《大白鲨》把全国广告、大规模发行、悬念类型片和暑期观众时机结合成一种可复制的商业策略。",
        whyMatters: "It shifted attention from long platform releases toward opening weekends, saturation booking, marketing, and event-style theatrical attendance.",
        whyMattersZh: "它把行业注意力从长期平台式发行转向开画周末、饱和排片、营销和事件式院线观影。",
        phaseRelation: "It belongs to the New Hollywood and blockbuster phase because it helped turn creative risk into franchise-minded release strategy.",
        phaseRelationZh: "它属于新好莱坞与大片阶段，因为它帮助把创作风险转化为面向系列化的发行策略。",
        connectionHint: "It connects cinema, advertising, television promotion, summer leisure, and corporate entertainment strategy.",
        connectionHintZh: "它连接了电影、广告、电视宣传、暑期休闲和企业娱乐策略。"
      }
    }),
    filmEvent({
      id: "star-wars-release",
      year: 1977,
      title: "Star Wars released",
      titleZh: "《星球大战》上映",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-06",
      parentPhaseIds: ["entertainment-media-06", "science-technology-07"],
      extraLensIds: ["science-technology", "economy-trade"],
      summary: "Star Wars joined special effects, merchandising, fandom, sequel logic, and mythic storytelling into a new franchise model.",
      summaryZh: "《星球大战》把特效、商品授权、粉丝文化、续集逻辑和神话叙事结合成新的系列电影模式。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "jurassic-park-release",
      year: 1993,
      title: "Jurassic Park released",
      titleZh: "《侏罗纪公园》上映",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-07",
      parentPhaseIds: ["entertainment-media-07", "science-technology-08"],
      extraLensIds: ["science-technology", "economy-trade"],
      summary: "Jurassic Park made computer-generated creatures central to mainstream spectacle and helped normalize digital effects pipelines.",
      summaryZh: "《侏罗纪公园》让计算机生成生物成为主流奇观的核心，并帮助数字特效流程常态化。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "toy-story-release",
      year: 1995,
      title: "Toy Story released",
      titleZh: "《玩具总动员》上映",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-07",
      parentPhaseIds: ["entertainment-media-07", "science-technology-08"],
      extraLensIds: ["science-technology", "art"],
      summary: "Pixar's feature showed that fully computer-animated storytelling could support theatrical family cinema and a new animation industry model.",
      summaryZh: "皮克斯的长片证明全计算机动画叙事可以支撑院线家庭电影和新的动画工业模式。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "titanic-release",
      year: 1997,
      title: "Titanic released",
      titleZh: "《泰坦尼克号》上映",
      region: "Americas",
      place: "United States / global box office",
      phaseId: "film-cinema-industry-07",
      parentPhaseIds: ["entertainment-media-07", "economy-trade-08"],
      extraLensIds: ["economy-trade"],
      summary: "Titanic became a global box-office phenomenon, showing the scale of late-1990s international theatrical distribution and event cinema.",
      summaryZh: "《泰坦尼克号》成为全球票房现象，显示 1990 年代末国际院线发行和事件电影的规模。",
      placeIds: ["united-states", "global-transregional"]
    }),
    filmEvent({
      id: "netflix-streaming-begins",
      year: 2007,
      title: "Netflix launches streaming service",
      titleZh: "Netflix 推出流媒体服务",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-08",
      parentPhaseIds: ["entertainment-media-08", "networks-internet-07"],
      extraLensIds: ["science-technology", "economy-trade"],
      summary: "Netflix streaming helped move screen entertainment from discs and schedules toward on-demand platform access.",
      summaryZh: "Netflix 流媒体推动屏幕娱乐从光盘和节目表转向按需平台访问。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "house-of-cards-netflix",
      year: 2013,
      title: "House of Cards premieres on Netflix",
      titleZh: "《纸牌屋》在 Netflix 首播",
      region: "Americas",
      place: "United States",
      phaseId: "film-cinema-industry-08",
      parentPhaseIds: ["entertainment-media-08", "networks-internet-08"],
      extraLensIds: ["science-technology", "economy-trade"],
      summary: "The series signaled that streaming platforms could finance prestige screen production and release seasons outside broadcast schedules.",
      summaryZh: "这部剧显示流媒体平台可以资助高端影视制作，并在广播电视档期之外发布整季内容。",
      placeIds: ["united-states"]
    }),
    filmEvent({
      id: "parasite-palme-dor",
      year: 2019,
      title: "Parasite wins Palme d'Or",
      titleZh: "《寄生虫》获得金棕榈",
      region: "Asia",
      place: "South Korea / Cannes",
      phaseId: "film-cinema-industry-08",
      parentPhaseIds: ["entertainment-media-08", "art-08"],
      extraLensIds: ["art", "economy-trade"],
      summary: "Parasite's festival success showed the global circulation of Korean cinema before its wider international awards breakthrough.",
      summaryZh: "《寄生虫》的电影节成功显示韩国电影在更广泛国际奖项突破之前已经具备全球流通能力。",
      placeIds: ["korea", "france"]
    }),
    filmEvent({
      id: "covid-streaming-release-shift",
      year: 2020,
      title: "COVID-19 accelerates streaming release shifts",
      titleZh: "COVID-19 加速流媒体发行转向",
      region: "Global",
      place: "Global film distribution",
      phaseId: "film-cinema-industry-08",
      parentPhaseIds: ["entertainment-media-08", "disaster-climate-08"],
      extraLensIds: ["disaster-climate", "economy-trade"],
      summary: "Pandemic theater closures pushed studios, audiences, and platforms to test shortened release windows and direct-to-streaming premieres.",
      summaryZh: "疫情导致影院关闭，推动制片厂、观众和平台测试缩短发行窗口和直接流媒体首映。",
      placeIds: ["global-transregional"]
    }),
    filmEvent({
      id: "barbenheimer-theatrical-event",
      year: 2023,
      title: "Barbenheimer becomes a theatrical event",
      titleZh: "“芭本海默”成为院线事件",
      region: "Americas",
      place: "United States / global box office",
      phaseId: "film-cinema-industry-08",
      parentPhaseIds: ["entertainment-media-08", "economy-trade-08"],
      extraLensIds: ["economy-trade", "art"],
      summary: "The simultaneous success of Barbie and Oppenheimer showed that theatrical moviegoing could still become a social media-driven public event.",
      summaryZh: "《芭比》和《奥本海默》的同时成功显示院线观影仍然可以成为由社交媒体推动的公共事件。",
      placeIds: ["united-states", "global-transregional"]
    })
  ];

  newEvents.forEach((event) => {
    if (!HISTORY_DATA.events.some((item) => item.id === event.id)) HISTORY_DATA.events.push(event);
  });
  createRegionalEventCatalog().forEach((event) => {
    if (!HISTORY_DATA.events.some((item) => item.id === event.id)) HISTORY_DATA.events.push(event);
  });
  createRegionalEventBackfillCatalog().forEach((event) => {
    if (!HISTORY_DATA.events.some((item) => item.id === event.id)) HISTORY_DATA.events.push(event);
  });

  mergeGeneratedContent();
  normalizeEventMetadata(eventDefaults);
  syncRegionPhaseRepresentativeEvents();

  const phaseEvents = {
    "art-04": ["printing-press-europe", "school-of-athens", "sistine-ceiling", "vasari-lives"],
    "art-07": ["picasso-demoiselles", "armory-show", "black-square", "bauhaus-founded"],
    "science-technology-06": ["great-exhibition", "bessemer-process", "transatlantic-cable", "edison-light-bulb", "pearl-street-station"],
    "computing-pc-05": ["altair-8800", "apple-ii", "visicalc", "ibm-pc", "macintosh", "windows-1"],
    "networks-internet-05": ["world-wide-web-proposal", "world-wide-web-public", "mosaic-browser", "netscape-navigator"],
    "state-empire-05": ["columbus-americas", "east-india-company", "battle-plassey", "berlin-conference"],
    "economy-trade-06": ["cromford-mill", "stockton-darlington", "communist-manifesto", "ford-assembly-line"],
    "architecture-07": ["bauhaus-founded", "villa-savoye", "international-style-exhibition", "lever-house", "pruitt-igoe-demolition"],
    "film-cinema-industry-01": ["muybridge-horse-motion"],
    "film-cinema-industry-02": ["lumiere-public-screening", "trip-to-the-moon-release", "nickelodeon-theaters-spread"],
    "film-cinema-industry-03": ["birth-of-a-nation-release", "united-artists-founded"],
    "film-cinema-industry-04": ["jazz-singer-release", "academy-awards-first", "snow-white-premiere"],
    "film-cinema-industry-05": ["paramount-decree", "rashomon-venice", "seven-samurai-release", "four-hundred-blows-release"],
    "film-cinema-industry-06": ["godfather-release", "jaws-release", "star-wars-release"],
    "film-cinema-industry-07": ["jurassic-park-release", "toy-story-release", "titanic-release"],
    "film-cinema-industry-08": ["netflix-streaming-begins", "house-of-cards-netflix", "parasite-palme-dor", "covid-streaming-release-shift", "barbenheimer-theatrical-event"],
    "music-recording-culture-01": ["slice-guidonian-hand-1025"],
    "music-recording-culture-02": ["slice-euridice-opera-1600", "slice-vivaldi-four-seasons-1725", "slice-magic-flute-premiere-1791"],
    "music-recording-culture-03": ["slice-beethoven-fifth-premiere-1808", "slice-bayreuth-festival-opens-1876"],
    "music-recording-culture-04": ["slice-edison-phonograph-1877", "slice-berliner-gramophone-patent-1887", "slice-first-jazz-recording-1917"],
    "music-recording-culture-05": ["slice-kdka-broadcast-1920", "slice-lp-record-introduced-1948"],
    "music-recording-culture-06": ["slice-elvis-sun-studio-recording-1954", "slice-beatles-ed-sullivan-1964", "slice-woodstock-festival-1969", "slice-hip-hop-sedgwick-party-1973", "slice-sony-walkman-launches-1979"],
    "music-recording-culture-07": ["slice-roland-tr808-release-1980", "slice-mtv-launches-1981", "slice-compact-disc-player-launch-1982", "slice-napster-launches-1999", "slice-ipod-introduced-2001", "slice-itunes-store-launches-2003"],
    "music-recording-culture-08": ["slice-spotify-launches-2008", "slice-gangnam-style-youtube-breakthrough-2012", "slice-tiktok-douyin-launches-2016"]
  };

  ensurePhaseEventFoundation(phaseEvents);
  normalizeEventMetadata(eventDefaults);
  applyRegionalEventTranslationFixes();
  syncRegionPhaseRepresentativeEvents();

  const imageFallbacks = {
    "art-04": ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Sanzio_01.jpg/1280px-Sanzio_01.jpg"],
    "art-07": ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square.jpg/800px-Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square.jpg"],
    "science-technology-06": ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Crystal_Palace_-_interior.jpg/1280px-Crystal_Palace_-_interior.jpg"],
    "computing-pc-05": ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IBM_PC_5150.jpg/1024px-IBM_PC_5150.jpg"],
    "networks-internet-05": ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/First_Web_Server.jpg/1024px-First_Web_Server.jpg"],
    "architecture-07": ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/VillaSavoye.jpg/1280px-VillaSavoye.jpg"]
  };

  HISTORY_DATA.lineageNodes.forEach((node) => {
    if (phaseEvents[node.id]) node.representativeEvents = phaseEvents[node.id];
    node.entryYear = getPhaseEntryYear(node);
    if (node.image) node.imageSourceUrl = node.imageSourceUrl || node.image;
    if (imageFallbacks[node.id]) {
      node.imageSourceUrl = node.image;
      node.imageFallbacks = imageFallbacks[node.id];
    }
  });
  dedupeCanonicalEvents();
  syncRegionPhaseRepresentativeEvents();

  HISTORY_DATA.validatePhaseModalData = function validatePhaseModalData() {
    const eventIds = new Set(HISTORY_DATA.events.map((event) => event.id));
    const phaseIds = new Set(HISTORY_DATA.lineageNodes.map((node) => node.id));
    const requiredTextFields = ["phaseIntro", "phaseIntroZh", "fromPrevious", "fromPreviousZh", "towardNext", "towardNextZh"];
    const missing = [];
    const imageIssues = [];
    const representativeEventIssues = [];
    const eventIssues = [];
    const entryYearIssues = [];
    const placeholderEventPattern = /Opening marker|Mature pattern|Transition marker|开端锚点|成熟形态|转折锚点|seed event|teaching marker|phase-anchor/i;

    HISTORY_DATA.lineageNodes.forEach((node) => {
      requiredTextFields.forEach((field) => {
        if (!node[field]) missing.push(`${node.id}:${field}`);
      });
      if (!Array.isArray(node.definingFeatures) || node.definingFeatures.length < 3) missing.push(`${node.id}:definingFeatures`);
      if (!Array.isArray(node.definingFeaturesZh) || node.definingFeaturesZh.length < 3) missing.push(`${node.id}:definingFeaturesZh`);
      if (node.image && (!node.imageAlt || !node.imageCaption || !node.imageCaptionZh || !node.imageCredit || !node.imageSourceUrl)) {
        imageIssues.push(node.id);
      }
      if (typeof (node.entryYear ?? node.startYear) !== "number") {
        entryYearIssues.push(`${node.id}:entryYear`);
      } else if (
        typeof node.entryYear === "number"
        && Number.isFinite(node.startYear)
        && Number.isFinite(node.endYear)
        && (node.entryYear < node.startYear || node.entryYear > node.endYear)
      ) {
        entryYearIssues.push(`${node.id}:entryYear-out-of-range`);
      }
      (node.representativeEvents || []).forEach((eventId) => {
        if (!eventIds.has(eventId)) representativeEventIssues.push(`${node.id}:${eventId}`);
      });
    });

    HISTORY_DATA.events.forEach((event) => {
      if (/phase-anchor/i.test(event.id || "")) eventIssues.push(`${event.id}:placeholder-id`);
      if (!Array.isArray(event.phaseIds) || !event.phaseIds.length) eventIssues.push(`${event.id}:phaseIds`);
      if (!event.primaryPhaseId) eventIssues.push(`${event.id}:primaryPhaseId`);
      if (!Array.isArray(event.placeIds) || !event.placeIds.length) eventIssues.push(`${event.id}:placeIds`);
      if (!event.primaryPlaceId) eventIssues.push(`${event.id}:primaryPlaceId`);
      if (!Array.isArray(event.sourceRefs) || !event.sourceRefs.length) eventIssues.push(`${event.id}:sourceRefs`);
      if (!event.title || !event.titleZh || !event.summary || !event.summaryZh) eventIssues.push(`${event.id}:localized-content`);
      if (placeholderEventPattern.test([event.id, event.title, event.titleZh, event.summary, event.summaryZh, event.eventType, event.scope].join(" "))) {
        eventIssues.push(`${event.id}:placeholder-content`);
      }
      (event.phaseIds || []).forEach((phaseId) => {
        if (!phaseIds.has(phaseId)) eventIssues.push(`${event.id}:unknown-phase:${phaseId}`);
      });
    });

    return {
      lineageNodeCount: HISTORY_DATA.lineageNodes.length,
      eventCount: HISTORY_DATA.events.length,
      missing,
      imageIssues,
      representativeEventIssues,
      entryYearIssues,
      eventIssues,
      ok: !missing.length && !imageIssues.length && !representativeEventIssues.length && !entryYearIssues.length && !eventIssues.length
    };
  };
}

function mergeGeneratedContent() {
  const generated = globalThis.HISTORY_GENERATED_CONTENT || {};
  const generatedEvents = Array.isArray(generated.events) ? generated.events : [];
  const generatedRegionPhases = Array.isArray(generated.regionPhases) ? generated.regionPhases : [];

  generatedRegionPhases.forEach((phase) => {
    const existing = HISTORY_DATA.regionPhases.find((item) => item.id === phase.id);
    if (existing) {
      Object.assign(existing, phase);
    } else {
      HISTORY_DATA.regionPhases.push(phase);
    }
  });

  generatedEvents.forEach((event) => {
    const existing = HISTORY_DATA.events.find((item) => item.id === event.id);
    if (existing) {
      mergeGeneratedEvent(existing, event);
    } else {
      HISTORY_DATA.events.push({ ...event });
    }
  });
}

function mergeGeneratedEvent(existing, incoming) {
  const existingArrays = {
    categories: existing.categories || [],
    lensIds: existing.lensIds || [],
    trackIds: existing.trackIds || [],
    phaseIds: existing.phaseIds || [],
    placeIds: existing.placeIds || [],
    regionPhaseIds: existing.regionPhaseIds || [],
    sources: existing.sources || [],
    sourceRefs: existing.sourceRefs || []
  };
  Object.assign(existing, incoming);
  existing.categories = uniqueValues([...(existingArrays.categories || []), ...(incoming.categories || [])]);
  existing.lensIds = uniqueValues([...(existingArrays.lensIds || []), ...(incoming.lensIds || [])]);
  existing.trackIds = uniqueValues([...(existingArrays.trackIds || []), ...(incoming.trackIds || [])]);
  existing.phaseIds = uniqueValues([...(existingArrays.phaseIds || []), ...(incoming.phaseIds || [])]);
  existing.placeIds = incoming.placeIds && incoming.placeIds.length
    ? uniqueValues(incoming.placeIds)
    : uniqueValues(existingArrays.placeIds);
  existing.regionPhaseIds = uniqueValues([...(existingArrays.regionPhaseIds || []), ...(incoming.regionPhaseIds || [])]);
  existing.sources = uniqueValues([...(existingArrays.sources || []), ...(incoming.sources || incoming.sourceRefs || [])]);
  existing.sourceRefs = uniqueValues([...(existingArrays.sourceRefs || []), ...(incoming.sourceRefs || incoming.sources || [])]);
}

function eventSeed(id, year, title, region, place, categories, lensIds, phaseIds, summary, titleZh, summaryZh, trackIds = []) {
  return {
    id,
    year,
    title,
    region,
    place,
    categories,
    lensIds,
    trackIds,
    phaseIds,
    primaryLensId: lensIds[0] || null,
    primaryTrackId: trackIds[0] || null,
    primaryPhaseId: phaseIds[0] || null,
    eventType: "representative-event",
    scope: "phase anchor",
    summary,
    titleZh,
    summaryZh,
    sources: ["britannica", "wikidata"],
    sourceRefs: ["britannica", "wikidata"]
  };
}

function createRegionalEventCatalog() {
  const e = (id, year, title, titleZh, summary, summaryZh, lensIds = null, place = "") => ({
    id, year, title, titleZh, summary, summaryZh, lensIds, place
  });
  const catalog = {
    "china-ming": [
      e("founding", 1368, "Ming Dynasty founded", "明朝建立", "Zhu Yuanzhang founded the Ming after the collapse of Yuan rule, recentralizing imperial authority in China.", "朱元璋在元朝崩溃后建立明朝，重新集中中国帝国权威。"),
      e("zheng-he", 1405, "Zheng He's first voyage begins", "郑和首次下西洋", "The first Ming treasure voyage projected court power through maritime diplomacy across the Indian Ocean.", "明朝首次宝船航行通过印度洋海上外交展示朝廷权力。", ["state-empire", "economy-trade"]),
      e("beijing-capital", 1421, "Ming capital moved to Beijing", "明朝迁都北京", "The Yongle emperor made Beijing the imperial capital, linking northern defense, court ritual, and monumental urban planning.", "永乐帝迁都北京，把北方防御、宫廷礼制和纪念性城市规划连接起来。", ["state-empire", "architecture"])
    ],
    "china-qing": [
      e("qing-takes-beijing", 1644, "Qing forces enter Beijing", "清军入关并进入北京", "The Qing conquest began a new multiethnic imperial order after the fall of the Ming capital.", "清军入关和进入北京开启了明都陷落后的多民族帝国秩序。"),
      e("kangxi-reign", 1661, "Kangxi Emperor begins reign", "康熙帝即位", "Kangxi's reign consolidated Qing rule through military campaigns, administration, and patronage of learning.", "康熙朝通过军事行动、行政治理和学术赞助巩固清朝统治。"),
      e("opium-war", 1839, "First Opium War begins", "第一次鸦片战争爆发", "War with Britain exposed Qing vulnerability to maritime empire, treaty ports, and unequal diplomacy.", "对英战争暴露清朝面对海上帝国、通商口岸和不平等外交时的脆弱性。", ["state-empire", "war-military", "economy-trade"])
    ],
    "china-modern": [
      e("xinhai", 1911, "Xinhai Revolution begins", "辛亥革命爆发", "Revolution overthrew Qing rule and opened a republican but unstable post-imperial political order.", "革命推翻清朝统治，开启共和但不稳定的后帝国政治秩序。"),
      e("prc-founded", 1949, "People's Republic of China proclaimed", "中华人民共和国成立", "The Communist victory created a socialist state that reorganized sovereignty, land, industry, and political authority.", "共产党胜利建立社会主义国家，重组主权、土地、工业和政治权威。"),
      e("reform-opening", 1978, "Reform and Opening begins", "改革开放开始", "Market reforms and global integration transformed China's economy, cities, labor, and international role.", "市场改革和全球融合改变中国经济、城市、劳动和国际角色。", ["state-empire", "economy-trade"])
    ],
    "china-early-dynasties": [
      e("shang-anyang", -1250, "Late Shang capital at Anyang flourishes", "商代晚期安阳都城繁荣", "Oracle bones, bronze ritual vessels, and royal tombs made Shang kingship visible through writing and ritual.", "甲骨、青铜礼器和王陵通过书写与礼制显示商王权。"),
      e("zhou-conquest", -1046, "Zhou conquest of Shang", "周灭商", "Zhou victory replaced Shang rule and framed kingship through the Mandate of Heaven.", "周的胜利取代商朝统治，并以天命观念解释王权。"),
      e("western-zhou-fall", -771, "Western Zhou collapses", "西周灭亡", "The fall of Western Zhou weakened royal authority and opened a fragmented aristocratic order.", "西周灭亡削弱王室权威，开启分裂的贵族政治秩序。")
    ],
    "japan-medieval": [
      e("kamakura", 1192, "Kamakura shogunate established", "镰仓幕府建立", "Military government shifted political authority toward warrior rule while the imperial court remained symbolically important."),
      e("mongol-invasion", 1274, "First Mongol invasion of Japan", "蒙古第一次入侵日本", "Mongol attack tested warrior mobilization, coastal defense, and Kamakura authority.", "蒙古进攻考验武士动员、沿海防御和镰仓权威。", ["war-military", "state-empire"]),
      e("ashikaga", 1336, "Ashikaga shogunate founded", "室町幕府建立", "Ashikaga rule reorganized warrior politics, court relations, and regional power in medieval Japan.")
    ],
    "japan-tokugawa": [
      e("tokugawa", 1603, "Tokugawa shogunate established", "德川幕府建立", "Tokugawa Ieyasu's shogunate stabilized rule through a warrior government and domain system."),
      e("sakoku", 1639, "Tokugawa maritime restrictions consolidated", "德川海禁体制巩固", "Restrictions on overseas contact shaped diplomacy, trade, Christianity, and controlled exchange.", "对外接触限制塑造外交、贸易、基督教和受控交流。"),
      e("meiji-restoration", 1868, "Meiji Restoration", "明治维新", "The restoration ended Tokugawa rule and redirected Japan toward centralized state reform.", "维新终结德川统治，把日本推向中央集权国家改革。")
    ],
    "japan-early-state": [
      e("kofun", 250, "Kofun tomb culture expands", "古坟文化扩展", "Large keyhole tombs marked elite power, ritual, and early political consolidation.", "大型前方后圆坟标志精英权力、仪式和早期政治整合。"),
      e("buddhism-arrives", 538, "Buddhism introduced to Yamato court", "佛教传入大和朝廷", "Buddhism arrived through continental diplomacy and became tied to court authority.", "佛教经大陆外交传入，并与朝廷权威结合。", ["religion-belief", "state-empire"]),
      e("taika", 645, "Taika Reform begins", "大化改新开始", "Court reforms borrowed continental models to reorganize land, rank, and administration.", "朝廷改革借鉴大陆制度，重组土地、官位和行政。")
    ],
    "turkey-anatolia": [
    ],
    "anatolia-republic": [
      e("republic", 1923, "Republic of Turkey proclaimed", "土耳其共和国成立", "The republic replaced Ottoman imperial rule with a nationalist state centered on Ankara."),
      e("alphabet-reform", 1928, "Turkish alphabet reform", "土耳其文字改革", "Latin-script reform became a major symbol of republican secular modernization.", "拉丁字母改革成为共和国世俗现代化的重要象征。"),
      e("multiparty", 1950, "First peaceful multiparty transfer of power", "首次和平多党政权轮替", "The 1950 election shifted Turkey into competitive electoral politics.", "1950年选举使土耳其进入竞争性选举政治。")
    ],
    "anatolia-seljuk-beyliks": [
      e("manzikert", 1071, "Battle of Manzikert", "曼齐刻尔特战役", "Byzantine defeat opened Anatolia to expanding Turkish political and military settlement.", "拜占庭失败使安纳托利亚向突厥政治和军事定居开放。", ["war-military", "state-empire"]),
      e("rum-sultanate", 1077, "Sultanate of Rum founded", "罗姆苏丹国建立", "The Seljuk sultanate rooted Turkish-Islamic rule in central Anatolia.", "塞尔柱苏丹国把突厥-伊斯兰统治扎根于中部安纳托利亚。"),
      e("kose-dag", 1243, "Battle of Kose Dag", "克塞山战役", "Mongol victory weakened Seljuk power and opened space for Anatolian principalities.", "蒙古胜利削弱塞尔柱权力，为安纳托利亚诸侯兴起打开空间。", ["war-military", "state-empire"])
    ],
    "anatolia-tanzimat-late-ottoman": [
      e("tanzimat", 1839, "Tanzimat reforms proclaimed", "坦志麦特改革颁布", "The Ottoman state announced reforms in law, administration, taxation, and subjecthood."),
      e("constitution", 1876, "First Ottoman constitution proclaimed", "奥斯曼第一部宪法颁布", "Constitutional politics tried to reshape imperial citizenship and government.", "宪政政治试图重塑帝国公民身份和政府。"),
      e("young-turk", 1908, "Young Turk Revolution", "青年土耳其革命", "The revolution restored constitutional rule and intensified debates over empire, nationalism, and reform.", "革命恢复宪政统治，并加剧帝国、民族主义和改革争论。")
    ],
    "france-absolutism-revolution": [
      e("estates-general", 1789, "Estates-General convenes", "三级会议召开", "Fiscal crisis forced the monarchy to summon representative estates, opening revolutionary politics."),
      e("bastille", 1789, "Storming of the Bastille", "攻占巴士底狱", "The Paris uprising became a symbol of popular revolution against royal authority.", "巴黎起义成为反抗王权的大众革命象征。"),
      e("declaration-rights", 1789, "Declaration of the Rights of Man adopted", "《人权和公民权宣言》通过", "The declaration framed citizenship, law, and sovereignty through universal rights.")
    ],
    "france-valois-bourbon": [
      e("marignano", 1515, "Battle of Marignano", "马里尼亚诺战役", "Francis I's victory marked Valois ambition in Italian politics and Renaissance monarchy.", "弗朗索瓦一世的胜利体现瓦卢瓦王朝在意大利政治和文艺复兴君主制中的雄心。"),
      e("edict-nantes", 1598, "Edict of Nantes", "南特敕令", "The edict managed religious conflict by granting limited protections to French Protestants.", "敕令通过给予法国新教徒有限保护来处理宗教冲突。"),
      e("versailles-court", 1682, "Louis XIV moves court to Versailles", "路易十四迁宫凡尔赛", "Versailles made court ritual, aristocratic discipline, and royal spectacle central to absolutism.", "凡尔赛让宫廷礼仪、贵族规训和王权奇观成为专制王权核心。")
    ],
    "france-revolution-napoleon": [
      e("republic", 1792, "French Republic proclaimed", "法兰西共和国宣布成立", "The republic abolished monarchy and redefined sovereignty in revolutionary terms."),
      e("napoleon-emperor", 1804, "Napoleon crowns himself emperor", "拿破仑加冕为皇帝", "Napoleon turned revolutionary military authority into imperial rule.", "拿破仑把革命军事权威转化为帝国统治。"),
      e("waterloo", 1815, "Battle of Waterloo", "滑铁卢战役", "Napoleon's defeat ended the empire and opened a conservative European settlement.", "拿破仑失败终结帝国，并开启保守的欧洲秩序。", ["war-military", "state-empire"])
    ],
    "britain-medieval-kingdoms": [
      e("norman", 1066, "Norman Conquest", "诺曼征服", "William's conquest reshaped monarchy, landholding, aristocracy, and law in England."),
      e("magna-carta", 1215, "Magna Carta sealed", "《大宪章》签署", "The charter became a lasting reference point for limits on royal power.", "宪章成为限制王权的持久参照点。"),
      e("model-parliament", 1295, "Model Parliament summoned", "模范议会召开", "Parliamentary representation became more visible in royal taxation and political negotiation.", "议会代表在王室征税和政治协商中变得更加清晰。")
    ],
    "us-republic-expansion": [
      e("declaration", 1776, "Declaration of Independence adopted", "《独立宣言》通过", "The declaration turned colonial resistance into a claim of national sovereignty."),
      e("constitution", 1787, "United States Constitution drafted", "美国宪法起草", "The Constitution built a federal framework for republican government.", "宪法建立共和政府的联邦框架。"),
      e("civil-war", 1861, "American Civil War begins", "美国内战爆发", "Secession and slavery pushed the republic into a war over union and emancipation.", "分裂和奴隶制把共和国推入关于联邦与解放的战争。", ["war-military", "state-empire"])
    ],
    "us-colonial": [
      e("jamestown", 1607, "Jamestown founded", "詹姆斯敦建立", "The settlement became the first durable English colony in mainland North America."),
      e("mayflower", 1620, "Mayflower arrives", "五月花号抵达", "Puritan migration created a New England settlement tied to covenant community and Atlantic colonization.", "清教徒迁徙建立与契约社群和大西洋殖民相连的新英格兰聚落。"),
      e("seven-years-war", 1754, "French and Indian War begins", "法印战争爆发", "Imperial war over North America reshaped British rule and colonial politics.", "北美帝国战争重塑英国统治和殖民地政治。", ["war-military", "state-empire"])
    ],
    "mexico-new-spain": [
      e("tenochtitlan-falls", 1521, "Tenochtitlan falls to Spanish forces", "特诺奇蒂特兰陷落", "Spanish conquest and Indigenous alliances destroyed the Mexica imperial capital.", "西班牙征服者和原住民盟友摧毁墨西卡帝国首都。"),
      e("virreinato", 1535, "Viceroyalty of New Spain established", "新西班牙总督辖区建立", "Spanish imperial administration organized taxation, conversion, labor, and silver extraction.", "西班牙帝国行政组织税收、改宗、劳动和白银开采。"),
      e("guadalupe", 1531, "Virgin of Guadalupe apparition tradition begins", "瓜达卢佩圣母显现传统开始", "The Guadalupe cult became central to colonial and later Mexican religious identity.", "瓜达卢佩崇拜成为殖民时期及后来墨西哥宗教身份的核心。", ["religion-belief", "state-empire"])
    ],
    "mesoamerica-preclassic": [
      e("san-lorenzo", -1200, "San Lorenzo flourishes", "圣洛伦索繁荣", "The Olmec center shows early monumental art, elite power, and regional exchange.", "奥尔梅克中心显示早期纪念性艺术、精英权力和地区交换。"),
      e("olmec-heads", -900, "Olmec colossal heads carved", "奥尔梅克巨石头像雕刻", "Colossal heads made rulership and public monumentality visible in early Mesoamerica.", "巨石头像让早期中美洲的统治和公共纪念性变得可见。", ["art", "state-empire"]),
      e("monte-alban", -500, "Monte Alban founded", "蒙特阿尔班建立", "The hilltop city became a major political and ceremonial center in Oaxaca.", "这座山顶城市成为瓦哈卡的重要政治和仪式中心。")
    ],
    "mesoamerica-classic-postclassic": [
      e("teotihuacan", 150, "Teotihuacan expands", "特奥蒂瓦坎扩张", "The metropolis shaped urban planning, ritual, and exchange in Classic Mesoamerica.", "这座大都市塑造古典期中美洲的城市规划、仪式和交换。"),
      e("chichen-itza", 900, "Chichen Itza flourishes", "奇琴伊察繁荣", "The city connected Maya politics, pilgrimage, trade, and monumental architecture.", "这座城市连接玛雅政治、朝圣、贸易和纪念性建筑。"),
      e("tenochtitlan-founded", 1325, "Tenochtitlan founded", "特诺奇蒂特兰建立", "The Mexica capital grew into a lake city at the center of imperial tribute.", "墨西卡首都发展为帝国贡赋中心的湖上城市。")
    ],
    "mexico-republic-revolution": [
      e("independence", 1821, "Mexican independence achieved", "墨西哥独立", "Independence ended Spanish rule and opened the challenge of republican state-building."),
      e("constitution-1857", 1857, "Liberal Constitution of 1857", "1857年自由派宪法", "The constitution made liberal reform, church power, and citizenship central political issues."),
      e("revolution-1910", 1910, "Mexican Revolution begins", "墨西哥革命爆发", "Revolution against dictatorship opened struggles over land, labor, state power, and national identity.", "反独裁革命开启围绕土地、劳动、国家权力和民族身份的斗争。", ["war-military", "state-empire"])
    ],
    "egypt-modern": [
      e("british-occupation", 1882, "British occupation of Egypt begins", "英国占领埃及开始", "British occupation reshaped Egyptian sovereignty, finance, army, and imperial strategy."),
      e("suez-nationalized", 1956, "Suez Canal nationalized", "苏伊士运河国有化", "Nasser's nationalization made the canal a symbol of postcolonial sovereignty.", "纳赛尔国有化运河，使其成为后殖民主权象征。"),
      e("camp-david", 1978, "Camp David Accords", "戴维营协议", "Egyptian-Israeli diplomacy reshaped regional politics and Egypt's international position.", "埃以外交重塑地区政治和埃及国际地位。")
    ],
    "egypt-nationalist-republic": [
      e("1919-revolution", 1919, "Egyptian Revolution of 1919", "1919年埃及革命", "Mass nationalist protest challenged British occupation and demanded political autonomy."),
      e("free-officers", 1952, "Free Officers Revolution", "自由军官革命", "Military officers overthrew the monarchy and opened a republican nationalist era.", "军官推翻君主制，开启共和国民族主义时代。"),
      e("aswan-dam", 1970, "Aswan High Dam completed", "阿斯旺高坝完工", "The dam symbolized state-led development, river control, electricity, and social transformation.", "大坝象征国家主导发展、河流控制、电力和社会转型。", ["state-empire", "science-technology", "economy-trade"])
    ],
    "west-africa-early-urban": [
      e("nok-iron", -500, "Nok culture ironworking appears", "诺克文化铁器出现", "Ironworking and terracotta traditions show early technological and artistic complexity.", "铁器和陶塑传统显示早期技术与艺术复杂性。", ["science-technology", "art"]),
      e("jenne-jeno", 250, "Jenne-Jeno grows", "杰内-杰诺发展", "The inland Niger Delta town shows urban growth without a centralized empire.", "尼日尔内陆三角洲城镇显示没有中央帝国也能出现城市增长。"),
      e("ghana-emerges", 700, "Ghana Empire emerges", "加纳帝国兴起", "Ghana linked taxation, gold, salt, and caravan routes across the Sahel.", "加纳连接税收、黄金、盐和萨赫勒商路。")
    ],
    "west-africa-sahel": [
      e("ghana-gold", 800, "Ghana controls gold-salt trade", "加纳控制金盐贸易", "Ghana's rulers drew power from taxing caravan exchange across the Sahel."),
      e("mansa-musa", 1324, "Mansa Musa makes pilgrimage", "曼萨·穆萨朝觐", "The pilgrimage displayed Mali's gold wealth and Islamic connections across North Africa.", "朝觐展示马里的黄金财富和横跨北非的伊斯兰联系。"),
      e("songhai-timbuktu", 1468, "Songhai takes Timbuktu", "桑海控制廷巴克图", "Songhai power joined Niger River cities, trade, and Islamic scholarship.", "桑海权力连接尼日尔河城市、贸易和伊斯兰学术。")
    ],
    "west-africa-modern": [
      e("ghana-independence", 1957, "Ghana becomes independent", "加纳独立", "Ghana's independence became a landmark for anti-colonial politics in Africa."),
      e("ecowas", 1975, "ECOWAS founded", "西非经共体成立", "Regional cooperation addressed trade, mobility, development, and political coordination.", "地区合作处理贸易、流动、发展和政治协调。"),
      e("lagos-boom", 1991, "Lagos becomes a global megacity", "拉各斯成为全球巨型城市", "Urban growth made Lagos a major center of migration, media, commerce, and culture.", "城市增长让拉各斯成为迁移、媒体、商业和文化中心。", ["economy-trade", "entertainment-media"])
    ]
  };

  return Object.entries(catalog).flatMap(([phaseId, events]) => events.map((event) => regionalEventSeed(phaseId, event)));
}

function createRegionalEventBackfillCatalog() {
  const e = (id, year, title, titleZh, summary, summaryZh, lensIds = null, place = "") => ({
    id, year, title, titleZh, summary, summaryZh, lensIds, place
  });
  const catalog = {
    "china-qin-han": [
      e("qin-unification", -221, "Qin unifies China", "秦统一中国", "Qin conquest joined military organization, standardization, law, and imperial administration.", "秦的征服把军事组织、标准化、法律和帝国行政结合起来。"),
      e("han-founded", -202, "Han Dynasty founded", "汉朝建立", "The Han rebuilt imperial rule after Qin collapse and gave lasting form to bureaucracy and classical learning.", "汉朝在秦亡后重建帝国统治，并让官僚制度和经典学术形成持久形态。"),
      e("zhang-qian", -138, "Zhang Qian sent west", "张骞出使西域", "Han diplomacy opened routes that later supported Silk Road exchange and frontier strategy.", "汉朝外交打开后来支撑丝绸之路交换和边疆战略的路线。", ["state-empire", "economy-trade"])
    ],
    "china-tang-song": [
      e("tang-founded", 618, "Tang Dynasty founded", "唐朝建立", "Tang rule built a cosmopolitan empire connected to Inner Asia, Buddhism, and long-distance trade.", "唐朝建立了连接内亚、佛教和长途贸易的开放帝国。"),
      e("diamond-sutra", 868, "Diamond Sutra printed", "《金刚经》印刷本", "The printed scroll shows how Buddhist devotion, woodblock printing, and text circulation overlapped.", "这件印刷卷轴显示佛教信仰、雕版印刷和文本流通如何重叠。", ["religion-belief", "science-technology"]),
      e("song-founded", 960, "Song Dynasty founded", "宋朝建立", "Song rule made civil bureaucracy, commerce, printing, and urban culture central to imperial life.", "宋朝让文官官僚、商业、印刷和城市文化成为帝国生活的核心。")
    ],
    "japan-meiji-modern": [
      e("meiji-restoration", 1868, "Meiji Restoration", "明治维新", "The restoration centralized power and redirected Japan toward state-led reform and industrialization.", "维新集中权力，并把日本推向国家主导改革和工业化。"),
      e("constitution-1889", 1889, "Meiji Constitution promulgated", "《明治宪法》颁布", "The constitution framed monarchy, cabinet government, parliament, and modern state institutions.", "宪法组织君主制、内阁、议会和现代国家制度。"),
      e("postwar-constitution", 1947, "Postwar Constitution takes effect", "战后宪法施行", "The constitution redefined sovereignty, rights, pacifism, and democratic institutions after empire and war.", "战后宪法在帝国与战争之后重新定义主权、权利、和平主义和民主制度。")
    ],
    "japan-nara-heian": [
      e("nara-capital", 710, "Nara becomes capital", "平城京成为都城", "A permanent capital helped organize imperial administration, Buddhism, and court ceremony.", "固定都城帮助组织帝国行政、佛教和宫廷礼仪。"),
      e("heian-capital", 794, "Heian-kyo becomes capital", "平安京迁都", "The new capital anchored aristocratic court culture and imperial ceremony for centuries.", "新都城长期奠定贵族宫廷文化和帝国仪式。"),
      e("genji", 1008, "The Tale of Genji circulates", "《源氏物语》流传", "Court literature gave Heian aristocratic life a lasting literary form.", "宫廷文学为平安贵族生活留下持久的文学形式。", ["literature", "art"])
    ],
    "japan-postwar": [
      e("constitution", 1947, "Postwar Constitution takes effect", "战后宪法施行", "The constitution reshaped sovereignty, rights, and pacifism in postwar Japan.", "宪法重塑战后日本的主权、权利和和平主义。"),
      e("tokyo-olympics", 1964, "Tokyo Olympics open", "东京奥运会开幕", "The Olympics signaled reconstruction, infrastructure, media visibility, and Japan's return to global public life.", "奥运会象征重建、基础设施、媒体可见性和日本重返全球公共生活。", ["entertainment-media", "state-empire"]),
      e("walkman", 1979, "Sony Walkman released", "索尼 Walkman 发布", "Portable music linked Japanese electronics, consumer design, and global media culture.", "便携音乐连接日本电子工业、消费设计和全球媒体文化。", ["science-technology", "entertainment-media"])
    ],
    "india-british-raj": [
      e("plassey", 1757, "Battle of Plassey", "普拉西战役", "Company victory helped turn commerce into territorial and fiscal control in Bengal.", "公司胜利帮助把商业存在转化为孟加拉的领土和财政控制。"),
      e("rebellion-1857", 1857, "Indian Rebellion begins", "印度民族起义爆发", "The rebellion ended Company rule and led to direct Crown government in India.", "起义终结东印度公司统治，并导致英国王室直接治理印度。"),
      e("inc-founded", 1885, "Indian National Congress founded", "印度国民大会党成立", "The organization became a major forum for constitutional politics and nationalist mobilization.", "该组织成为宪政政治和民族主义动员的重要平台。")
    ],
    "india-independent": [
      e("independence", 1947, "India and Pakistan become independent", "印度与巴基斯坦独立", "Partition and independence transformed British India into postcolonial states amid violence and migration.", "分治和独立在暴力与迁徙中把英属印度转化为后殖民国家。"),
      e("constitution", 1950, "Constitution of India takes effect", "印度宪法生效", "The constitution established a democratic republic with federal institutions and universal citizenship.", "宪法建立拥有联邦制度和普遍公民身份的民主共和国。"),
      e("economic-liberalization", 1991, "India launches economic liberalization", "印度启动经济自由化", "Reforms opened markets, investment, services, and technology-driven growth.", "改革打开市场、投资、服务业和技术驱动增长。", ["economy-trade", "science-technology"])
    ],
    "india-indus-vedic": [
      e("mohenjo-daro", -2500, "Mohenjo-daro urban life flourishes", "摩亨佐-达罗城市生活繁荣", "The city shows planning, drainage, craft production, and urban coordination in the Indus world.", "这座城市显示印度河世界的规划、排水、手工业和城市协调。"),
      e("late-harappan", -1900, "Indus urban system declines", "印度河城市体系衰落", "Urban contraction changed settlement, trade, and regional organization in northwest South Asia.", "城市收缩改变南亚西北部的聚落、贸易和地区组织。"),
      e("vedic-ritual", -1200, "Vedic ritual traditions develop", "吠陀仪式传统发展", "Vedic hymns and ritual knowledge shaped priestly authority and social imagination.", "吠陀颂歌和仪式知识塑造祭司权威和社会想象。", ["religion-belief", "literature"])
    ],
    "india-maurya-gupta": [
      e("maurya-founded", -322, "Mauryan Empire founded", "孔雀帝国建立", "Mauryan rule built a large imperial state across much of South Asia.", "孔雀王朝在南亚大部建立大型帝国国家。"),
      e("ashoka-edicts", -260, "Ashoka's edicts issued", "阿育王铭文发布", "The edicts linked kingship, Buddhism, moral rule, and written imperial communication.", "铭文连接王权、佛教、道德治理和书面帝国传播。"),
      e("aryabhata", 499, "Aryabhata completes astronomical treatise", "阿耶波多完成天文学著作", "Mathematical astronomy became part of classical Indian learned culture.", "数学天文学成为古典印度学术文化的一部分。", ["science-technology"])
    ],
    "india-regional-oceanic": [
      e("chola-rise", 850, "Chola power rises in South India", "朱罗势力在南印度兴起", "Chola rule connected temples, agrarian revenue, ports, and Indian Ocean exchange.", "朱罗统治连接寺庙、农业收入、港口和印度洋交换。"),
      e("chola-raid", 1025, "Chola naval raid on Srivijaya", "朱罗海军袭击室利佛逝", "The raid shows South Indian naval reach and Indian Ocean political competition.", "这次袭击显示南印度海上力量和印度洋政治竞争。", ["war-military", "economy-trade"]),
      e("khajuraho", 1050, "Khajuraho temple building flourishes", "克久拉霍神庙建筑繁荣", "Temple patronage linked regional kingship, religion, sculpture, and architecture.", "神庙赞助连接地区王权、宗教、雕塑和建筑。", ["architecture", "religion-belief"])
    ],
    "anatolia-hittite-classical": [
      e("hittite-empire", -1650, "Hittite kingdom emerges", "赫梯王国兴起", "Hittite power made Anatolia a major Bronze Age imperial center.", "赫梯权力让安纳托利亚成为青铜时代重要帝国中心。"),
      e("constantinople-founded", 330, "Constantinople dedicated", "君士坦丁堡落成", "The new imperial capital linked Roman power to the Bosporus and eastern Mediterranean.", "新帝国首都把罗马权力连接到博斯普鲁斯和东地中海。"),
      e("hagia-sophia", 537, "Hagia Sophia completed", "圣索菲亚大教堂完成", "The church embodied Byzantine sacred architecture, imperial ceremony, and urban identity.", "这座教堂体现拜占庭神圣建筑、帝国仪式和城市身份。", ["architecture", "religion-belief"])
    ],
    "france-capetian-medieval": [
      e("capet", 987, "Hugh Capet elected king", "于格·卡佩当选国王", "Capetian kingship became the base for later French royal expansion.", "卡佩王权成为后来法国王权扩张的基础。"),
      e("notre-dame", 1163, "Notre-Dame de Paris construction begins", "巴黎圣母院开工", "Gothic cathedral building connected urban religion, monarchy, craft, and civic identity.", "哥特式大教堂建设连接城市宗教、王权、工艺和市民身份。", ["architecture", "religion-belief"]),
      e("bouvines", 1214, "Battle of Bouvines", "布汶战役", "Royal victory strengthened Capetian authority and French monarchical prestige.", "王室胜利加强卡佩王权和法国君主声望。", ["war-military", "state-empire"])
    ],
    "britain-postwar": [
      e("nhs", 1948, "National Health Service begins", "英国国民医疗服务体系启动", "The NHS became a central institution of postwar welfare citizenship.", "NHS 成为战后福利公民身份的核心制度。"),
      e("windrush", 1948, "Empire Windrush arrives", "帝国温德拉什号抵达", "Caribbean migration reshaped postwar British society and identity.", "加勒比移民重塑战后英国社会和身份。"),
      e("brexit-referendum", 2016, "Brexit referendum", "英国脱欧公投", "The vote exposed conflicts over sovereignty, migration, economy, and Britain's place in Europe.", "公投暴露围绕主权、移民、经济和英国欧洲位置的冲突。")
    ],
    "britain-tudor-stuart": [
      e("act-supremacy", 1534, "Act of Supremacy", "《至尊法案》", "The act made the English crown supreme over the church in England.", "法案使英格兰王权成为英格兰教会最高权威。", ["state-empire", "religion-belief"]),
      e("east-india", 1600, "English East India Company chartered", "英国东印度公司获特许状", "The charter linked monarchy, commerce, and overseas expansion.", "特许状连接君主制、商业和海外扩张。", ["economy-trade", "state-empire"]),
      e("glorious", 1688, "Glorious Revolution", "光荣革命", "The revolution reshaped monarchy, parliament, rights, and fiscal-military power.", "革命重塑君主制、议会、权利和财政军事权力。")
    ],
    "britain-worldwar-welfare": [
      e("wwi-entry", 1914, "Britain enters World War I", "英国参战第一次世界大战", "War mobilization transformed empire, labor, industry, and state capacity.", "战争动员改变帝国、劳动、工业和国家能力。", ["war-military", "state-empire"]),
      e("beveridge", 1942, "Beveridge Report published", "贝弗里奇报告发表", "The report framed postwar welfare reform around social security and public responsibility.", "报告以社会保障和公共责任构想战后福利改革。"),
      e("india-independence", 1947, "India becomes independent", "印度独立", "Indian independence marked a decisive break in Britain's imperial order.", "印度独立标志英国帝国秩序的决定性断裂。")
    ],
    "us-indigenous": [
      e("cahokia", 1050, "Cahokia grows near Mississippi", "卡霍基亚在密西西比附近发展", "The city became a major Mississippian center of mound building, trade, and ceremony.", "这座城市成为密西西比文化中土丘建筑、贸易和仪式的重要中心。"),
      e("iroquois", 1450, "Haudenosaunee Confederacy develops", "豪德诺索尼联盟形成", "The confederacy organized diplomacy, law, and alliance among northeastern nations.", "联盟组织东北部各民族之间的外交、法律和结盟。"),
      e("pueblo-revolt", 1680, "Pueblo Revolt", "普韦布洛起义", "Pueblo communities expelled Spanish authorities and defended religious and political autonomy.", "普韦布洛社群驱逐西班牙当局，维护宗教和政治自主。", ["war-military", "state-empire"])
    ],
    "egypt-pharaonic": [
      e("unification", -3100, "Early dynastic Egypt forms", "早王朝埃及形成", "Unification joined kingship, writing, taxation, and ritual authority along the Nile.", "统一把王权、书写、税收和仪式权威沿尼罗河结合起来。"),
      e("great-pyramid", -2570, "Great Pyramid of Giza completed", "吉萨大金字塔完成", "The pyramid expressed royal power, labor organization, engineering, and afterlife belief.", "金字塔表达王权、劳动组织、工程和来世信仰。", ["architecture", "religion-belief"]),
      e("akhenaten", -1353, "Akhenaten begins reign", "阿肯那顿即位", "The reign disrupted Egyptian religious and artistic conventions around Aten worship.", "这一统治围绕阿吞崇拜打破埃及宗教和艺术惯例。", ["religion-belief", "art"])
    ],
    "egypt-hellenistic-roman": [
      e("alexandria-founded", -331, "Alexandria founded", "亚历山大城建立", "The city became a Mediterranean center of rule, trade, scholarship, and urban culture.", "这座城市成为地中海统治、贸易、学术和城市文化中心。"),
      e("rosetta-stone", -196, "Rosetta Stone decree inscribed", "罗塞塔石碑铭文刻成", "The decree shows Ptolemaic kingship using multiple scripts and languages for authority.", "铭文显示托勒密王权用多种文字和语言表达权威。"),
      e("roman-annexation", -30, "Rome annexes Egypt", "罗马吞并埃及", "Egypt became a Roman province central to grain supply and imperial wealth.", "埃及成为罗马行省，对粮食供应和帝国财富至关重要。")
    ],
    "egypt-islamic-mamluk-ottoman": [
      e("arab-conquest", 641, "Arab conquest of Egypt", "阿拉伯征服埃及", "Egypt entered Islamic political and cultural worlds after Byzantine rule.", "拜占庭统治之后，埃及进入伊斯兰政治和文化世界。"),
      e("cairo-founded", 969, "Cairo founded", "开罗建立", "Fatimid Cairo became a new center of rule, learning, and religious authority.", "法蒂玛开罗成为新的统治、学术和宗教权威中心。"),
      e("ottoman-egypt", 1517, "Ottomans conquer Egypt", "奥斯曼征服埃及", "Ottoman conquest incorporated Egypt into a wider imperial Mediterranean and Red Sea system.", "奥斯曼征服把埃及纳入更广泛的地中海和红海帝国体系。")
    ],
    "west-africa-atlantic-slavery": [
      e("elu-mina", 1482, "Elmina Castle founded", "埃尔米纳城堡建立", "The Portuguese fort became a major Atlantic trading post on the Gold Coast.", "葡萄牙堡垒成为黄金海岸重要的大西洋贸易据点。"),
      e("dahomey-rise", 1720, "Dahomey expands", "达荷美扩张", "Dahomey's military state grew within Atlantic trade, firearms, captives, and regional rivalry.", "达荷美军事国家在大西洋贸易、火器、俘虏和地区竞争中成长。"),
      e("british-abolition", 1807, "Britain abolishes slave trade", "英国废除奴隶贸易", "Abolition changed Atlantic commerce while slavery and coercive labor continued in new forms.", "废奴改变大西洋商业，但奴隶制和强制劳动以新形式继续存在。", ["economy-trade", "state-empire"])
    ]
  };
  return Object.entries(catalog).flatMap(([phaseId, events]) => events.map((event) => regionalEventSeed(phaseId, event)));
}

function applyRegionalEventTranslationFixes() {
  const summaryZhById = {
    "regional-japan-medieval-kamakura": "军事政权把政治权威转向武士统治，同时天皇朝廷仍保留象征意义。",
    "regional-japan-medieval-ashikaga": "足利统治重新组织了中世日本的武士政治、朝廷关系和地方权力。",
    "regional-japan-tokugawa-tokugawa": "德川家康建立的幕府通过武家政权和藩国体制稳定统治。",
    "regional-anatolia-republic-republic": "共和国以安卡拉为中心的民族国家取代了奥斯曼帝国统治。",
    "regional-anatolia-tanzimat-late-ottoman-tanzimat": "奥斯曼国家宣布在法律、行政、税收和臣民身份上进行改革。",
    "regional-france-absolutism-revolution-estates-general": "财政危机迫使王权召开三级会议，由此打开革命政治。",
    "regional-france-absolutism-revolution-declaration-rights": "这份宣言用普遍权利重新表述公民身份、法律和主权。",
    "regional-france-revolution-napoleon-republic": "共和国废除君主制，并以革命语言重新定义主权。",
    "regional-britain-medieval-kingdoms-norman": "威廉的征服重塑了英格兰的君主制、土地持有、贵族结构和法律。",
    "regional-us-republic-expansion-declaration": "《独立宣言》把殖民地抵抗转化为民族主权主张。",
    "regional-us-colonial-jamestown": "詹姆斯敦成为英格兰在北美大陆第一个持久殖民据点。",
    "regional-mexico-republic-revolution-independence": "独立终结了西班牙统治，也开启了共和国国家建设的难题。",
    "regional-mexico-republic-revolution-constitution-1857": "这部宪法使自由派改革、教会权力和公民身份成为核心政治议题。",
    "regional-egypt-modern-british-occupation": "英国占领重塑了埃及的主权、财政、军队和帝国战略地位。",
    "regional-egypt-nationalist-republic-1919-revolution": "大规模民族主义抗议挑战英国占领，并要求政治自治。",
    "regional-west-africa-sahel-ghana-gold": "加纳统治者从萨赫勒商队交换征税中获得权力。",
    "regional-west-africa-modern-ghana-independence": "加纳独立成为非洲反殖民政治的重要标志。"
  };

  HISTORY_DATA.events.forEach((event) => {
    if (summaryZhById[event.id]) event.summaryZh = summaryZhById[event.id];
  });
}

function regionalEventSeed(regionPhaseId, spec) {
  const phase = (HISTORY_DATA.regionPhases || []).find((item) => item.id === regionPhaseId);
  if (!phase) return null;
  const place = (HISTORY_DATA.places || []).find((item) => item.id === phase.placeId);
  const lensIds = spec.lensIds || phase.lensIds || [];
  const phaseIds = (HISTORY_DATA.lineageNodes || [])
    .filter((node) => lensIds.includes(node.lensId))
    .filter((node) => spec.year >= node.startYear && spec.year <= node.endYear)
    .filter((node) => !(node.trackIds || []).length)
    .map((node) => node.id);
  return {
    id: `regional-${regionPhaseId}-${spec.id}`,
    year: spec.year,
    title: spec.title,
    titleZh: spec.titleZh,
    region: place ? place.title : phase.placeId,
    place: spec.place || (place ? place.title : phase.placeId),
    categories: lensIds,
    lensIds,
    trackIds: [],
    phaseIds,
    primaryLensId: lensIds[0] || null,
    primaryTrackId: null,
    primaryPhaseId: phaseIds[0] || null,
    placeIds: [phase.placeId],
    primaryPlaceId: phase.placeId,
    regionPhaseIds: [regionPhaseId],
    primaryRegionPhaseId: regionPhaseId,
    eventType: "regional-exact-event",
    importance: "core",
    scope: "regional phase evidence",
    summary: spec.summary,
    summaryZh: spec.summaryZh,
    sources: ["britannica", "world-history-encyclopedia", "wikidata"],
    sourceRefs: ["britannica", "world-history-encyclopedia", "wikidata"]
  };
}

function normalizeEventMetadata(eventDefaults = {}) {
  HISTORY_DATA.events.forEach((event) => {
    const defaults = eventDefaults[event.id] || {};
    const inferredLensIds = defaults.lensIds || event.lensIds || inferLensIdsFromCategories(event.categories);
    const inferredPhaseIds = defaults.phaseIds || event.phaseIds || [];
    const inferredTrackIds = defaults.trackIds || event.trackIds || [];
    Object.assign(event, {
      lensIds: inferredLensIds,
      primaryLensId: defaults.primaryLensId || event.primaryLensId || inferredLensIds[0] || null,
      trackIds: inferredTrackIds,
      primaryTrackId: defaults.primaryTrackId || event.primaryTrackId || inferredTrackIds[0] || null,
      phaseIds: inferredPhaseIds,
      primaryPhaseId: defaults.primaryPhaseId || event.primaryPhaseId || inferredPhaseIds[0] || null,
      eventType: normalizeExactEventType(defaults.eventType || event.eventType),
      scope: normalizeExactEventScope(defaults.scope || event.scope),
      importance: defaults.importance || event.importance || "supporting",
      wikiPage: defaults.wikiPage || event.wikiPage || "",
      wikidataId: defaults.wikidataId || event.wikidataId || "",
      titleZh: defaults.titleZh || event.titleZh || event.title,
      summaryZh: defaults.summaryZh || event.summaryZh || event.summary,
      sources: defaults.sources || event.sources || event.sourceRefs || ["britannica", "wikidata"],
      sourceRefs: defaults.sources || event.sources || event.sourceRefs || ["britannica", "wikidata"]
    });
    const inferredPlaceIds = defaults.placeIds
      || (event.placeIds && event.placeIds.length ? event.placeIds : inferPlaceIdsForEvent(event));
    event.placeIds = uniqueValues(inferredPlaceIds);
    event.primaryPlaceId = defaults.primaryPlaceId || event.primaryPlaceId || event.placeIds[0] || null;
    const matchingRegionPhases = (HISTORY_DATA.regionPhases || [])
      .filter((phase) => event.placeIds.includes(phase.placeId))
      .filter((phase) => event.year >= phase.startYear && event.year <= phase.endYear)
      .filter((phase) => !event.lensIds.length || phase.lensIds.some((lensId) => event.lensIds.includes(lensId)))
      .map((phase) => phase.id);
    event.regionPhaseIds = uniqueValues([...(event.regionPhaseIds || []), ...matchingRegionPhases]);
    event.primaryRegionPhaseId = event.primaryRegionPhaseId || event.regionPhaseIds[0] || null;
    event.detailLevel = event.detailLevel || deriveRuntimeEventDetailLevel(event);
  });
}

function deriveRuntimeEventDetailLevel(event) {
  const modalFields = [
    "eventIntro",
    "eventIntroZh",
    "whyMatters",
    "whyMattersZh",
    "phaseRelation",
    "phaseRelationZh",
    "connectionHint",
    "connectionHintZh"
  ];
  const imageFields = [
    "image",
    "imageAlt",
    "imageCaption",
    "imageCaptionZh",
    "imageCredit",
    "imageSourceUrl"
  ];
  const requiredBaseFields = [
    "id",
    "year",
    "title",
    "titleZh",
    "primaryPlaceId",
    "primaryLensId",
    "primaryPhaseId"
  ];
  const requiredBaseArrays = ["placeIds", "lensIds", "phaseIds", "sourceRefs"];
  const placeholderPattern = /phase-anchor|opening anchor|mature form|transition anchor|开端锚点|成熟形态|转折锚点|seed event|teaching marker/i;
  const hasBaseFields = requiredBaseFields.every((field) => hasEventDetailText(event[field]));
  const hasBaseArrays = requiredBaseArrays.every((field) => Array.isArray(event[field]) && event[field].length > 0);
  const hasBaseText = (hasEventDetailText(event.summary) && hasEventDetailText(event.summaryZh))
    || (hasEventDetailText(event.eventIntro) && hasEventDetailText(event.eventIntroZh));
  const placeholderText = [
    event.id,
    event.title,
    event.titleZh,
    event.summary,
    event.summaryZh,
    event.eventType,
    event.scope
  ].filter(Boolean).join(" ");
  if (!hasBaseFields || !hasBaseArrays || !hasBaseText || placeholderPattern.test(placeholderText)) {
    return "needs-review";
  }
  const hasFullModal = modalFields.every((field) => hasEventDetailText(event[field]));
  const hasFullImage = imageFields.every((field) => hasEventDetailText(event[field]));
  return hasFullModal && hasFullImage ? "full" : "slice";
}

function hasEventDetailText(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function normalizeExactEventType(eventType) {
  if (!eventType || eventType === "representative-event" || eventType === "historical-event") return "exact-event";
  return eventType;
}

function normalizeExactEventScope(scope) {
  if (!scope || scope === "phase anchor" || scope === "representative event") return "representative exact event";
  return scope;
}

function syncRegionPhaseRepresentativeEvents() {
  (HISTORY_DATA.regionPhases || []).forEach((phase) => {
    phase.representativeEvents = HISTORY_DATA.events
      .filter((event) => (event.regionPhaseIds || []).includes(phase.id))
      .sort((a, b) => {
        const rank = { core: 0, supporting: 1, candidate: 2 };
        const rankDiff = (rank[a.importance] ?? 1) - (rank[b.importance] ?? 1);
        if (rankDiff) return rankDiff;
        return Math.abs(a.year - phase.entryYear) - Math.abs(b.year - phase.entryYear);
      })
      .slice(0, 6)
      .map((event) => event.id);
  });
}

function dedupeCanonicalEvents() {
  const canonicalByKey = new Map();
  const aliasMap = new Map();
  const dedupedEvents = [];

  HISTORY_DATA.events.forEach((event) => {
    const key = getCanonicalEventKey(event);
    if (!key) {
      dedupedEvents.push(event);
      return;
    }

    const existing = canonicalByKey.get(key);
    if (!existing) {
      canonicalByKey.set(key, event);
      dedupedEvents.push(event);
      return;
    }

    mergeDuplicateEvent(existing, event);
    aliasMap.set(event.id, existing.id);
  });

  if (!aliasMap.size) return;

  HISTORY_DATA.events = dedupedEvents;
  rewriteRepresentativeEventRefs(aliasMap);
}

function getCanonicalEventKey(event) {
  if (typeof event.year !== "number") return "";
  const titleKey = normalizeEventTitleForDedupe(event.titleZh || event.title);
  if (!titleKey) return "";
  const placeKey = event.primaryPlaceId
    || (event.placeIds && event.placeIds[0])
    || normalizeEventTitleForDedupe(event.place || event.region || "");
  return `${event.year}|${placeKey}|${titleKey}`;
}

function normalizeEventTitleForDedupe(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\bconnected\b/g, "connect")
    .replace(/\bconnects\b/g, "connect")
    .replace(/\bfirst nodes?\b/g, "first node")
    .replace(/\s+/g, "")
    .replace(/[\u3000\s·・,，.。:：;；'"“”‘’()（）/\\-]/g, "");
}

function mergeDuplicateEvent(target, duplicate) {
  [
    "categories",
    "lensIds",
    "trackIds",
    "phaseIds",
    "placeIds",
    "regionPhaseIds",
    "sources",
    "sourceRefs"
  ].forEach((field) => {
    target[field] = uniqueValues([...(target[field] || []), ...(duplicate[field] || [])]);
  });

  [
    "primaryLensId",
    "primaryTrackId",
    "primaryPhaseId",
    "primaryPlaceId",
    "primaryRegionPhaseId",
    "eventType",
    "scope",
    "importance",
    "wikiPage",
    "wikidataId",
    "image",
    "imageAlt",
    "imageCaption",
    "imageCredit",
    "imageSourceUrl"
  ].forEach((field) => {
    if (!target[field] && duplicate[field]) target[field] = duplicate[field];
  });

  [
    "summary",
    "summaryZh",
    "eventIntro",
    "eventIntroZh",
    "whyMatters",
    "whyMattersZh",
    "phaseRelation",
    "phaseRelationZh",
    "connectionHint",
    "connectionHintZh"
  ].forEach((field) => {
    if (isBetterTextValue(duplicate[field], target[field])) target[field] = duplicate[field];
  });
}

function isBetterTextValue(candidate, current) {
  if (!candidate) return false;
  if (!current) return true;
  return String(candidate).length > String(current).length + 20;
}

function rewriteRepresentativeEventRefs(aliasMap) {
  const remap = (eventId) => aliasMap.get(eventId) || eventId;
  const remapList = (ids) => uniqueValues((ids || []).map(remap));

  HISTORY_DATA.lineageNodes.forEach((node) => {
    node.representativeEvents = remapList(node.representativeEvents);
  });
  (HISTORY_DATA.regionPhases || []).forEach((phase) => {
    phase.representativeEvents = remapList(phase.representativeEvents);
  });
  (HISTORY_DATA.connectionPaths || []).forEach((path) => {
    if (path.eventId) path.eventId = remap(path.eventId);
  });
}

function ensurePhaseEventFoundation(phaseEvents) {
  HISTORY_DATA.lineageNodes.forEach((node) => {
    const existingRepresentativeIds = phaseEvents[node.id] || [];
    const linkedIds = HISTORY_DATA.events
      .filter((event) => (event.phaseIds || []).includes(node.id))
      .map((event) => event.id);
    const representativeIds = uniqueValues([...existingRepresentativeIds, ...linkedIds]);

    for (let index = 0; ; index += 1) {
      const seed = getCuratedPhaseEventSeed(node.id, index);
      if (!seed) break;
      const event = createCuratedPhaseEvent(node, index, seed);
      const existing = findExistingCuratedEvent(event);
      if (existing) {
        mergeCuratedEventMetadata(existing, event);
        representativeIds.push(existing.id);
      } else {
        HISTORY_DATA.events.push(event);
        representativeIds.push(event.id);
      }
    }

    phaseEvents[node.id] = uniqueValues(representativeIds);
  });
}

function getPhaseEntryYear(node) {
  if (typeof node.entryYear === "number") return node.entryYear;
  const events = (node.representativeEvents || [])
    .map((eventId) => HISTORY_DATA.events.find((event) => event.id === eventId))
    .filter(Boolean)
    .filter((event) => typeof event.year === "number");
  const inRangeEvent = events.find((event) => {
    const start = Number.isFinite(node.startYear) ? node.startYear : -Infinity;
    const end = Number.isFinite(node.endYear) ? node.endYear : Infinity;
    return event.year >= start && event.year <= end;
  });
  if (inRangeEvent) return inRangeEvent.year;
  if (events[0]) return events[0].year;
  if (typeof node.startYear === "number") return node.startYear;
  return null;
}

function uniqueValues(values) {
  return [...new Set((values || []).filter(Boolean))];
}

function getCuratedPhaseEventSeed(phaseId, index) {
  const e = (year, title, titleZh, region, place, summary, summaryZh, scope = "representative event") => ({
    year, title, titleZh, region, place, summary, summaryZh, scope
  });
  const seeds = {
    "war-military-01": [
      e(-3000, "Uruk city walls expanded", "乌鲁克城墙扩建", "Middle East", "Uruk / Mesopotamia", "Large city walls made organized defense, labor mobilization, and urban conflict visible in early state formation.", "大型城墙让防御组织、劳动力动员和城市冲突在早期国家形成中变得可见。"),
      e(-2574, "Khufu pyramid complex completed", "胡夫金字塔建筑群完成", "Africa", "Giza / Egypt", "The pyramid complex shows how centralized power could mobilize labor, logistics, and sacred authority on a monumental scale.", "金字塔建筑群显示集中权力如何以纪念性规模动员劳力、后勤和神圣权威。"),
      e(-1274, "Battle of Kadesh", "卡迭石战役", "Middle East", "Kadesh / Syria", "Egyptian and Hittite armies fought one of the best documented Bronze Age battles, showing chariots, diplomacy, and imperial rivalry.", "埃及与赫梯军队进行了一场记录最充分的青铜时代战役，体现战车、外交与帝国竞争。")
    ],
    "war-military-02": [
      e(-490, "Battle of Marathon", "马拉松战役", "Europe", "Marathon / Greece", "Athenian hoplite victory became a lasting example of citizen militia warfare and polis identity.", "雅典重装步兵的胜利成为公民军队与城邦身份的经典例子。"),
      e(-221, "Qin unifies China", "秦统一中国", "China", "Qin state / China", "Qin conquest joined military organization, administration, and empire-building into a durable imperial model.", "秦的征服把军事组织、行政制度和帝国建设结合成持久的帝国模型。"),
      e(9, "Battle of the Teutoburg Forest", "条顿堡森林战役", "Europe", "Germania / Roman frontier", "Roman defeat on the frontier exposed the limits of classical imperial expansion and military logistics.", "罗马在边疆的失败暴露了古典帝国扩张和军事后勤的限制。")
    ],
    "war-military-03": [
      e(451, "Battle of the Catalaunian Plains", "卡塔alaunian平原战役", "Europe", "Gaul / Western Roman world", "Roman and allied forces confronted the Huns, illustrating mobile steppe pressure on settled imperial systems.", "罗马及其盟军对抗匈人，体现草原机动力对定居帝国体系的压力。"),
      e(1206, "Temujin proclaimed Genghis Khan", "铁木真被推举为成吉思汗", "China", "Mongol steppe", "The Mongol confederation transformed steppe mobility into a world-conquering military organization.", "蒙古联盟把草原机动力转化为征服世界的军事组织。"),
      e(1241, "Battle of Mohi", "莫希战役", "Europe", "Hungary", "Mongol victory in Hungary showed how mobile cavalry, intelligence, and coordinated attacks could overwhelm European armies.", "蒙古在匈牙利的胜利显示机动骑兵、情报和协同攻击如何压倒欧洲军队。")
    ],
    "war-military-04": [
      e(1453, "Fall of Constantinople", "君士坦丁堡陷落", "Europe", "Constantinople / Eastern Mediterranean", "Ottoman siege artillery helped end Byzantine rule and demonstrated gunpowder's role in reshaping fortified warfare.", "奥斯曼攻城炮帮助终结拜占庭统治，并显示火药如何重塑攻城战。"),
      e(1514, "Battle of Chaldiran", "查尔迪兰战役", "Middle East", "Eastern Anatolia", "Ottoman firearms and artillery helped defeat Safavid forces, marking gunpowder's importance in imperial rivalry.", "奥斯曼火器和炮兵帮助击败萨法维军队，标志火药在帝国竞争中的重要性。"),
      e(1571, "Battle of Lepanto", "勒班陀海战", "Europe", "Gulf of Patras / Mediterranean", "A major galley battle used gunpowder weapons within Mediterranean naval rivalry and religious-imperial conflict.", "这场大型桨帆船海战在地中海海权与宗教帝国冲突中使用火药武器。")
    ],
    "war-military-05": [
      e(1648, "Peace of Westphalia", "威斯特伐利亚和约", "Europe", "Westphalia / Central Europe", "The settlement linked warfare, diplomacy, taxation, and state sovereignty after decades of fiscal-military conflict.", "和约在长期财政军事冲突后连接战争、外交、税收和国家主权。"),
      e(1704, "Battle of Blenheim", "布伦海姆战役", "Europe", "Bavaria / Holy Roman Empire", "Coalition armies, professional command, and state finance shaped a major battle of European balance-of-power war.", "联盟军、职业指挥和国家财政塑造了欧洲均势战争中的关键战役。"),
      e(1757, "Battle of Plassey", "普拉西战役", "India", "Bengal / South Asia", "Company military power helped turn commercial presence into territorial and fiscal control in Bengal.", "公司军事力量帮助把商业存在转化为孟加拉的领土与财政控制。")
    ],
    "war-military-06": [
      e(1861, "American Civil War begins", "美国内战爆发", "Americas", "United States", "Railways, industry, mass armies, and political mobilization made the war a major step toward industrial conflict.", "铁路、工业、大规模军队和政治动员使这场战争成为工业化战争的重要阶段。"),
      e(1914, "World War I begins", "第一次世界大战爆发", "Europe", "Europe / global imperial networks", "Alliance systems and mass mobilization turned a European crisis into industrial global war.", "联盟体系和大众动员把欧洲危机转化为工业化全球战争。"),
      e(1945, "Atomic bombing of Hiroshima", "广岛原子弹爆炸", "Japan", "Hiroshima / Japan", "Nuclear weapons closed World War II and opened a new age of military technology, civilian vulnerability, and state power.", "核武器结束第二次世界大战，并开启军事技术、平民脆弱性和国家权力的新阶段。")
    ],
    "war-military-07": [
      e(1949, "Soviet Union tests first atomic bomb", "苏联首次原子弹试验", "Europe", "Semipalatinsk / Soviet Union", "The Soviet test ended the American nuclear monopoly and made deterrence a bipolar military system.", "苏联试验结束美国核垄断，使威慑成为两极军事体系。"),
      e(1962, "Cuban Missile Crisis", "古巴导弹危机", "Americas", "Cuba / United States / Soviet Union", "The crisis brought nuclear brinkmanship into direct diplomatic confrontation.", "危机把核边缘政策带入直接外交对抗。"),
      e(1979, "Soviet-Afghan War begins", "苏阿战争爆发", "Middle East", "Afghanistan", "A major proxy conflict showed how Cold War power operated through regional wars and external support.", "这场代理冲突显示冷战权力如何通过地区战争和外部支持运作。")
    ],
    "war-military-08": [
      e(2001, "September 11 attacks", "九一一袭击", "Americas", "New York / Washington, D.C.", "The attacks reshaped security policy, counterterrorism, surveillance, and asymmetric warfare.", "袭击重塑安全政策、反恐、监控和非对称战争。"),
      e(2003, "Iraq War begins", "伊拉克战争爆发", "Middle East", "Iraq", "The invasion showed networked command, media warfare, occupation, insurgency, and contested state-building.", "入侵体现网络化指挥、媒体战争、占领、叛乱和有争议的国家建设。"),
      e(2022, "Russia invades Ukraine", "俄罗斯全面入侵乌克兰", "Europe", "Ukraine", "The war combined conventional battle, drones, cyber operations, sanctions, and global information conflict.", "这场战争结合常规战、无人机、网络行动、制裁和全球信息冲突。")
    ],

    "state-empire-01": [
      e(-3100, "Early dynastic Egypt forms", "早王朝埃及形成", "Africa", "Nile Valley / Egypt", "Egyptian unification joined kingship, writing, taxation, and ritual authority into a durable palace state.", "埃及统一把王权、书写、税收和仪式权威结合成持久的宫殿国家。"),
      e(-2500, "Royal Tombs of Ur built", "乌尔王陵建成", "Middle East", "Ur / Mesopotamia", "The tombs show palace wealth, hierarchy, ritual death, and early urban state power.", "王陵显示宫殿财富、等级秩序、死亡仪式和早期城市国家权力。"),
      e(-1754, "Code of Hammurabi inscribed", "汉谟拉比法典刻成", "Middle East", "Babylon / Mesopotamia", "The law stele connected kingship, justice, social hierarchy, and written administration.", "法典石碑连接王权、正义、社会等级和书面行政。")
    ],
    "state-empire-02": [
      e(-550, "Cyrus founds the Achaemenid Empire", "居鲁士建立阿契美尼德帝国", "Middle East", "Persia", "Persian imperial rule developed large-scale administration across diverse peoples and territories.", "波斯帝国统治发展出跨越多民族与广阔领土的大规模行政。"),
      e(-27, "Augustus becomes first Roman emperor", "奥古斯都成为罗马首位皇帝", "Europe", "Rome", "Roman republican institutions were reshaped into imperial monarchy and provincial governance.", "罗马共和制度被重塑为帝国君主制与行省治理。"),
      e(220, "Han Dynasty collapses", "汉朝灭亡", "China", "China", "The end of Han rule exposed the fragility of classical imperial unity and opened centuries of division.", "汉朝终结暴露古典帝国统一的脆弱性，并开启长期分裂。")
    ],
    "state-empire-03": [
      e(750, "Abbasid Revolution", "阿拔斯革命", "Middle East", "Iraq / Islamic world", "The Abbasids shifted imperial power toward Baghdad and new administrative-cultural networks.", "阿拔斯王朝把帝国权力转向巴格达和新的行政文化网络。"),
      e(800, "Charlemagne crowned emperor", "查理曼加冕为皇帝", "Europe", "Rome / Frankish Empire", "The coronation revived western imperial claims through Christianity and Frankish kingship.", "加冕通过基督教和法兰克王权复兴西方帝国主张。"),
      e(960, "Song Dynasty founded", "宋朝建立", "China", "Kaifeng / China", "Song rule rebuilt Chinese imperial governance around civil bureaucracy, economy, and literati culture.", "宋朝围绕文官官僚、经济和士人文化重建中国帝国治理。")
    ],
    "state-empire-04": [
      e(1453, "Fall of Constantinople", "君士坦丁堡陷落", "Europe", "Constantinople / Eastern Mediterranean", "Ottoman conquest turned Constantinople into an imperial capital and symbol of gunpowder state power.", "奥斯曼征服把君士坦丁堡转变为帝国首都和火药国家权力的象征。"),
      e(1526, "Mughal Empire founded after Panipat", "第一次帕尼帕特战役后莫卧儿帝国建立", "India", "Panipat / North India", "Babur's victory helped establish Mughal rule through cavalry, firearms, and Indo-Persian kingship.", "巴布尔的胜利通过骑兵、火器和印度-波斯王权建立莫卧儿统治。"),
      e(1639, "Safavid capital at Isfahan flourishes", "萨法维伊斯法罕盛期", "Middle East", "Isfahan / Iran", "Safavid Isfahan displayed Shi'a kingship, urban planning, trade, and imperial ceremony.", "萨法维伊斯法罕展现什叶派王权、城市规划、贸易和帝国仪式。")
    ],
    "state-empire-05": [
      e(1492, "Columbus reaches the Americas", "哥伦布抵达美洲", "Americas", "Caribbean / Spanish Atlantic", "The voyage helped open violent Atlantic colonial systems linking Europe, Africa, and the Americas.", "这次航行帮助开启连接欧洲、非洲和美洲的暴力大西洋殖民体系。"),
      e(1600, "English East India Company chartered", "英国东印度公司获特许状", "Europe", "London / Indian Ocean world", "The company became a key example of chartered commerce turning into imperial power.", "这家公司成为特许商业转化为帝国权力的关键例子。"),
      e(1884, "Berlin Conference begins", "柏林会议开始", "Europe", "Berlin / Africa partition diplomacy", "European powers formalized rules for colonial claims in Africa without African political participation.", "欧洲列强在没有非洲政治参与的情况下，为非洲殖民主张制定规则。")
    ],
    "state-empire-06": [
      e(1776, "United States Declaration of Independence", "美国《独立宣言》发表", "Americas", "Philadelphia / United States", "The declaration framed sovereignty through popular consent and anti-imperial revolution.", "宣言以人民同意和反帝国革命来界定主权。"),
      e(1789, "French Revolution begins", "法国大革命爆发", "Europe", "France", "Revolutionary politics challenged monarchy and made citizenship, rights, and nationhood central.", "革命政治挑战君主制，并使公民、权利和民族成为核心。"),
      e(1848, "Revolutions of 1848", "1848年革命", "Europe", "European cities", "A wave of revolutions linked nationalism, liberal reform, labor politics, and constitutional demands.", "革命浪潮连接民族主义、自由改革、劳工政治和宪政诉求。")
    ],
    "state-empire-07": [
      e(1919, "Treaty of Versailles signed", "《凡尔赛条约》签署", "Europe", "Versailles / France", "The treaty redrew borders, punished Germany, and shaped interwar state politics.", "条约重画边界、惩罚德国，并塑造战间期国家政治。"),
      e(1945, "United Nations founded", "联合国成立", "Americas", "San Francisco / United States", "The UN institutionalized postwar hopes for collective security and international governance.", "联合国把战后集体安全与国际治理的希望制度化。"),
      e(1948, "Britain creates National Health Service", "英国国民医疗服务体系建立", "Europe", "United Kingdom", "The NHS became a major example of postwar welfare-state citizenship.", "NHS 成为战后福利国家公民身份的重要例子。")
    ],
    "state-empire-08": [
      e(1947, "India and Pakistan become independent", "印度与巴基斯坦独立", "India", "South Asia", "Partition and independence transformed empire into postcolonial states amid mass migration and violence.", "分治与独立在大规模迁徙和暴力中把帝国转化为后殖民国家。"),
      e(1960, "Year of Africa independence wave", "非洲独立年", "Africa", "Africa", "Seventeen African countries became independent, marking a major wave of decolonization.", "十七个非洲国家独立，标志非殖民化的重要浪潮。"),
      e(1991, "Soviet Union dissolves", "苏联解体", "Europe", "Soviet Union", "The collapse reordered global governance, sovereignty, borders, and post-Cold War politics.", "苏联解体重组了全球治理、主权、边界和后冷战政治。")
    ],

    "economy-trade-01": [
      e(-9500, "Jericho farming settlement grows", "耶利哥农业聚落发展", "Middle East", "Jericho / Levant", "Early farming settlement connected food surplus, storage, and exchange before cities.", "早期农业聚落把食物剩余、储藏和交换连接在城市出现之前。"),
      e(-6500, "Catalhoyuk flourishes", "恰塔霍裕克繁荣", "Middle East", "Anatolia", "Dense farming households show domestic production, exchange, ritual, and craft specialization.", "密集农业住户显示家庭生产、交换、仪式和手工业分化。"),
      e(-3200, "Uruk trade and accounting expand", "乌鲁克贸易与记账扩展", "Middle East", "Uruk / Mesopotamia", "Tokens, seals, and early writing grew from managing goods, labor, and surplus.", "筹码、印章和早期文字从管理货物、劳力和剩余中发展。")
    ],
    "economy-trade-02": [
      e(-2500, "Indus-Mesopotamia trade appears", "印度河与美索不达米亚贸易出现", "India", "Indus Valley / Persian Gulf", "Seals and goods show Bronze Age exchange across the Gulf and urban economies.", "印章和货物显示青铜时代跨海湾交换与城市经济。"),
      e(-1600, "Uluburun shipwreck cargo assembled", "乌鲁布伦沉船货物形成", "Middle East", "Eastern Mediterranean", "The shipwreck cargo shows copper, tin, glass, ivory, and luxury goods moving through Bronze Age networks.", "沉船货物显示铜、锡、玻璃、象牙和奢侈品在青铜时代网络中流动。"),
      e(-1200, "Late Bronze Age trade systems collapse", "青铜时代晚期贸易体系崩溃", "Middle East", "Eastern Mediterranean", "Palace economies and long-distance exchange fractured amid warfare, migration, and political breakdown.", "宫殿经济和长途交换在战争、迁徙和政治崩溃中断裂。")
    ],
    "economy-trade-03": [
      e(-138, "Zhang Qian sent west", "张骞出使西域", "China", "Han China / Central Asia", "Han diplomacy opened routes that later supported Silk Road exchange.", "汉朝外交打开后来支撑丝绸之路交换的路线。"),
      e(618, "Tang Dynasty founded", "唐朝建立", "China", "China / Inner Asia", "Tang rule supported cosmopolitan trade, tribute, and exchange across Eurasia.", "唐朝统治支撑跨欧亚的国际贸易、朝贡和交换。"),
      e(1498, "Vasco da Gama reaches India", "达伽马抵达印度", "India", "Calicut / Indian Ocean", "Portuguese arrival inserted armed European maritime power into Indian Ocean trade.", "葡萄牙抵达把欧洲武装海权插入印度洋贸易。")
    ],
    "economy-trade-04": [
      e(800, "Ghana Empire controls gold routes", "加纳帝国控制黄金路线", "Africa", "West Africa", "Ghana's power grew from taxing gold, salt, and caravan exchange.", "加纳的权力来自对黄金、盐和商队交换的征税。"),
      e(1324, "Mansa Musa makes pilgrimage", "曼萨·穆萨朝觐", "Africa", "Mali / Cairo / Mecca", "Mansa Musa's pilgrimage displayed West African gold wealth within Islamic trade networks.", "曼萨·穆萨的朝觐在伊斯兰贸易网络中展示西非黄金财富。"),
      e(1464, "Sonni Ali expands Songhai", "桑尼·阿里扩张桑海", "Africa", "Niger River / West Africa", "Songhai expansion tied river cities, Islamic scholarship, and trans-Saharan commerce.", "桑海扩张连接河流城市、伊斯兰学术和跨撒哈拉商业。")
    ],
    "economy-trade-05": [
      e(1492, "Columbus reaches the Americas", "哥伦布抵达美洲", "Americas", "Caribbean", "Atlantic voyages opened violent colonial exchange among Europe, Africa, and the Americas.", "大西洋航行开启欧洲、非洲和美洲之间的暴力殖民交换。"),
      e(1545, "Potosi silver mine begins production", "波托西银矿开始生产", "Americas", "Potosi / Andes", "American silver became a central commodity in global trade and imperial finance.", "美洲白银成为全球贸易和帝国财政的核心商品。"),
      e(1713, "Asiento granted to Britain", "英国获得阿西恩托奴隶贸易权", "Europe", "Atlantic world", "The contract linked state diplomacy, slave trading, and Atlantic imperial commerce.", "这一契约连接国家外交、奴隶贸易和大西洋帝国商业。")
    ],
    "economy-trade-06": [
      e(1771, "Cromford Mill opens", "克罗姆福德纺织厂开工", "Europe", "Derbyshire / United Kingdom", "Arkwright's mill became a model for factory organization in mechanized textile production.", "阿克莱特的工厂成为机械化纺织生产中工厂组织的模型。"),
      e(1825, "Stockton and Darlington Railway opens", "斯托克顿—达灵顿铁路开通", "Europe", "United Kingdom", "The railway helped show how steam transport could reorganize industrial circulation.", "这条铁路展示了蒸汽交通如何重组工业流通。"),
      e(1848, "Communist Manifesto published", "《共产党宣言》出版", "Europe", "London / European revolutionary politics", "The manifesto framed industrial capitalism around class conflict, labor, capital, and historical change.", "这份宣言围绕阶级冲突、劳动、资本和历史变化来解释工业资本主义。")
    ],
    "economy-trade-07": [
      e(1913, "Ford moving assembly line introduced", "福特移动装配线投入使用", "Americas", "Highland Park / United States", "Assembly-line production linked mass manufacturing, wages, automobiles, and consumer markets.", "装配线生产连接大规模制造、工资、汽车和消费市场。"),
      e(1944, "Bretton Woods Conference", "布雷顿森林会议", "Americas", "New Hampshire / United States", "The conference built institutions for postwar monetary order and global development finance.", "会议建立战后货币秩序和全球发展金融制度。"),
      e(1973, "Oil crisis begins", "石油危机爆发", "Middle East", "OPEC / global markets", "Oil shocks exposed the vulnerability of consumer economies to energy politics.", "石油冲击暴露消费经济对能源政治的脆弱性。")
    ],
    "economy-trade-08": [
      e(1995, "Amazon launches online bookstore", "亚马逊上线网上书店", "Americas", "United States", "Amazon helped turn web retail into a platform model for logistics, data, and scale.", "亚马逊帮助把网络零售转化为物流、数据和规模化的平台模式。"),
      e(2008, "Bitcoin white paper published", "比特币白皮书发布", "Americas", "Online networks", "The white paper proposed decentralized digital money outside traditional banking infrastructure.", "白皮书提出一种脱离传统银行基础设施的去中心化数字货币。"),
      e(2014, "Alibaba IPO", "阿里巴巴上市", "China", "New York / China", "Alibaba's IPO signaled the global scale of Chinese platform commerce.", "阿里巴巴上市显示中国平台商业的全球规模。")
    ],

    "religion-belief-01": [
      e(-9600, "Gobekli Tepe ritual enclosures built", "哥贝克力石阵仪式建筑兴建", "Middle East", "Anatolia", "Monumental ritual spaces show collective belief and labor before urban states.", "纪念性仪式空间显示城市国家之前的集体信仰与劳动。"),
      e(-3200, "Newgrange passage tomb built", "纽格兰奇通道墓建成", "Europe", "Ireland", "The tomb aligned monumentality, ancestors, seasonal time, and ritual landscape.", "通道墓连接纪念性、祖先、季节时间和仪式景观。"),
      e(-2500, "Stonehenge sarsen circle erected", "巨石阵主体石圈竖立", "Europe", "Britain", "Stonehenge became a durable ritual landscape tied to astronomy, burial, and gathering.", "巨石阵成为连接天象、墓葬和聚会的持久仪式景观。")
    ],
    "religion-belief-02": [
      e(-2100, "Ziggurat of Ur built", "乌尔大塔庙建成", "Middle East", "Ur / Mesopotamia", "The ziggurat connected temple economy, priesthood, city identity, and divine kingship.", "大塔庙连接神庙经济、祭司群体、城市身份和神圣王权。"),
      e(-1500, "Vedic ritual tradition develops", "吠陀仪式传统发展", "India", "South Asia", "Vedic hymns and sacrifice shaped priestly authority and ritual knowledge.", "吠陀颂歌与祭祀塑造祭司权威和仪式知识。"),
      e(-586, "First Temple destroyed", "第一圣殿被毁", "Middle East", "Jerusalem", "The destruction reshaped Jewish memory, exile, scripture, and sacred authority.", "圣殿毁灭重塑犹太记忆、流亡、经文和神圣权威。")
    ],
    "religion-belief-03": [
      e(-528, "Buddha's awakening traditionally dated", "佛陀觉悟传统年代", "India", "Bodh Gaya / India", "Buddhist tradition centers awakening, suffering, discipline, and liberation as a new religious path.", "佛教传统以觉悟、苦、修行和解脱为新的宗教道路核心。"),
      e(-500, "Confucius teaches in Lu", "孔子在鲁国讲学", "China", "Lu / China", "Confucian teaching made ethics, ritual, family, and governance central to social order.", "儒家教导把伦理、礼仪、家庭和治理置于社会秩序核心。"),
      e(-450, "Hebrew prophetic traditions compiled", "希伯来先知传统整理", "Middle East", "Judah / Babylonian diaspora", "Prophetic traditions linked covenant, justice, exile, and moral criticism of power.", "先知传统连接盟约、正义、流亡和对权力的道德批判。")
    ],
    "religion-belief-04": [
      e(313, "Edict of Milan", "米兰敕令", "Europe", "Roman Empire", "Imperial tolerance helped Christianity move from persecuted movement toward public institution.", "帝国宽容帮助基督教从受迫害运动转向公共制度。"),
      e(325, "Council of Nicaea", "尼西亚会议", "Europe", "Nicaea / Roman Empire", "The council linked doctrine, imperial authority, and institutional Christianity.", "会议连接教义、帝国权威和制度化基督教。"),
      e(645, "Xuanzang returns to China", "玄奘归国", "China", "Chang'an / China", "Xuanzang's translations connected Buddhist pilgrimage, scholarship, and East Asian religious culture.", "玄奘翻译连接佛教朝圣、学术和东亚宗教文化。")
    ],
    "religion-belief-05": [
      e(622, "Hijra to Medina", "希吉拉迁徙麦地那", "Middle East", "Mecca / Medina", "The migration became the starting point for Islamic community, calendar, and political-religious order.", "迁徙成为伊斯兰共同体、历法和政教秩序的起点。"),
      e(762, "Baghdad founded", "巴格达建立", "Middle East", "Baghdad / Abbasid Caliphate", "Baghdad became a center of Islamic rule, scholarship, translation, and trade.", "巴格达成为伊斯兰统治、学术、翻译和贸易中心。"),
      e(970, "Al-Azhar founded", "爱资哈尔建立", "Middle East", "Cairo / Egypt", "Al-Azhar became a long-lasting institution of Islamic learning and authority.", "爱资哈尔成为持久的伊斯兰学习与权威机构。")
    ],
    "religion-belief-06": [
      e(1455, "Gutenberg Bible printed", "古腾堡圣经印成", "Europe", "Mainz / German lands", "Printed scripture changed the circulation of religious texts and debate.", "印刷经文改变宗教文本和争论的传播方式。"),
      e(1517, "Luther publishes Ninety-five Theses", "路德发表《九十五条论纲》", "Europe", "Wittenberg / German lands", "The theses became a flashpoint for Reformation controversy and print polemic.", "论纲成为宗教改革争论和印刷论战的爆发点。"),
      e(1545, "Council of Trent opens", "特伦托会议开幕", "Europe", "Trent / Italy", "The council shaped Catholic reform, doctrine, discipline, and confessional boundaries.", "会议塑造天主教改革、教义、纪律和宗派边界。")
    ],
    "religion-belief-07": [
      e(1791, "French Civil Constitution of the Clergy controversy", "法国教士公民组织法争议", "Europe", "France", "Revolutionary politics brought church, state, citizenship, and secular authority into conflict.", "革命政治使教会、国家、公民身份和世俗权威发生冲突。"),
      e(1906, "Azusa Street Revival begins", "阿苏萨街复兴运动开始", "Americas", "Los Angeles / United States", "Pentecostal revival reshaped global Christianity through charismatic worship and missionary networks.", "五旬节复兴通过灵恩崇拜和传教网络重塑全球基督教。"),
      e(1979, "Iranian Revolution", "伊朗革命", "Middle East", "Iran", "The revolution showed religion's continuing power in modern politics and state formation.", "革命显示宗教在现代政治和国家形成中的持续力量。")
    ],
    "religion-belief-08": [
      e(2001, "Wikipedia launches", "维基百科上线", "Americas", "Online networks", "Digital knowledge platforms changed how religious information and debate circulate.", "数字知识平台改变宗教信息和争论的传播方式。"),
      e(2013, "Pope Francis elected", "方济各当选教宗", "Europe", "Vatican City", "His election signaled global Catholic attention to poverty, migration, climate, and reform.", "他的当选显示全球天主教对贫困、移民、气候和改革的关注。"),
      e(2020, "Religious services move online during COVID-19", "新冠期间宗教礼拜转向线上", "Global", "Global", "Lockdowns pushed many communities toward livestreamed worship and digital religious practice.", "封锁推动许多社群转向直播礼拜和数字宗教实践。")
    ],

    "science-technology-01": [
      e(-2600000, "Oldowan stone tools appear", "奥杜威石器出现", "Africa", "East Africa", "Early stone tools mark durable technological behavior and food-processing strategies.", "早期石器标志持久的技术行为和食物处理策略。"),
      e(-790000, "Controlled fire at Gesher Benot Ya'aqov", "盖谢尔贝诺特雅各布遗址用火证据", "Middle East", "Levant", "Evidence of controlled fire shows changing human diets, landscapes, and social life.", "受控用火证据显示人类饮食、景观和社会生活的变化。"),
      e(-40000, "Upper Paleolithic cave art expands", "旧石器时代晚期洞穴艺术扩展", "Europe", "Europe", "Image-making, tools, and symbolic behavior became increasingly visible in human communities.", "图像制作、工具和象征行为在人类社群中越来越可见。")
    ],
    "science-technology-02": [
      e(-9500, "Neolithic farming begins in the Fertile Crescent", "新石器农业在肥沃月湾开始", "Middle East", "Southwest Asia", "Cultivation and domestication changed food systems, settlement, and tool use.", "栽培和驯化改变食物体系、定居和工具使用。"),
      e(-3300, "Bronze metallurgy spreads in Mesopotamia", "青铜冶金在美索不达米亚扩展", "Middle East", "Mesopotamia", "Bronze tools and weapons connected craft knowledge, mining, and long-distance exchange.", "青铜工具和武器连接工艺知识、采矿和长途交换。"),
      e(-1200, "Ironworking expands after Bronze Age collapse", "青铜时代崩溃后铁器技术扩展", "Middle East", "Eastern Mediterranean / Near East", "Ironworking gradually reshaped tools, weapons, agriculture, and regional power.", "铁器技术逐渐重塑工具、武器、农业和地区权力。")
    ],
    "science-technology-03": [
      e(-300, "Euclid writes Elements", "欧几里得撰写《几何原本》", "Europe", "Alexandria / Egypt", "Elements organized geometry into a durable model of mathematical proof.", "《几何原本》把几何组织成持久的数学证明模型。"),
      e(150, "Ptolemy writes Almagest", "托勒密撰写《天文学大成》", "Africa", "Alexandria / Egypt", "The Almagest synthesized mathematical astronomy for centuries of later scholarship.", "《天文学大成》综合数学天文学，影响后世学术数百年。"),
      e(200, "Classical Ayurveda texts circulate", "古典阿育吠陀文本流传", "India", "South Asia", "Medical compendia organized anatomy, diagnosis, treatment, and learned healing traditions.", "医学汇编组织解剖、诊断、治疗和学术医疗传统。")
    ],
    "science-technology-04": [
      e(830, "House of Wisdom translation movement", "智慧宫翻译运动", "Middle East", "Baghdad / Abbasid Caliphate", "Translation and commentary connected Greek, Persian, Indian, and Arabic knowledge systems.", "翻译与注释连接希腊、波斯、印度和阿拉伯知识体系。"),
      e(1025, "Ibn Sina completes Canon of Medicine", "伊本·西那完成《医典》", "Middle East", "Persia / Islamic world", "The Canon became a major medical synthesis across Islamic and European learning.", "《医典》成为连接伊斯兰与欧洲知识的重要医学综合。"),
      e(1088, "Shen Kuo writes Dream Pool Essays", "沈括撰写《梦溪笔谈》", "China", "Song China", "The text recorded observations in astronomy, geology, technology, and statecraft.", "这部著作记录天文、地质、技术和治术观察。")
    ],
    "science-technology-05": [
      e(1543, "Copernicus publishes De revolutionibus", "哥白尼出版《天体运行论》", "Europe", "Nuremberg / Europe", "Heliocentric astronomy challenged inherited cosmology and mathematical models.", "日心说天文学挑战既有宇宙论和数学模型。"),
      e(1609, "Galileo uses telescope for astronomy", "伽利略用望远镜进行天文观测", "Europe", "Italy", "Telescopic observation transformed evidence, instruments, and debate about the heavens.", "望远镜观测改变关于天空的证据、仪器和争论。"),
      e(1687, "Newton publishes Principia", "牛顿出版《自然哲学的数学原理》", "Europe", "London / England", "Newtonian mechanics linked mathematics, motion, gravity, and natural philosophy.", "牛顿力学连接数学、运动、引力和自然哲学。")
    ],
    "science-technology-06": [
      e(1851, "Great Exhibition opens", "万国工业博览会开幕", "Europe", "London / United Kingdom", "The exhibition staged industrial machinery, global commodities, empire, and engineering as public spectacle.", "这次展览把工业机器、全球商品、帝国和工程变成公共奇观。"),
      e(1856, "Bessemer steel process patented", "贝塞麦炼钢法获专利", "Europe", "United Kingdom", "Cheaper mass steel production reshaped railways, bridges, machines, weapons, and cities.", "更廉价的大规模钢铁生产重塑铁路、桥梁、机器、武器和城市。"),
      e(1882, "Pearl Street Station begins service", "珍珠街电站开始运行", "Americas", "New York / United States", "Edison's central station demonstrated electric lighting as urban infrastructure.", "爱迪生中央电站展示了电灯作为城市基础设施系统的可能。")
    ],
    "science-technology-07": [
      e(1945, "Trinity nuclear test", "三位一体核试验", "Americas", "New Mexico / United States", "The first nuclear explosion opened a new relationship between physics, state power, and warfare.", "第一次核爆开启物理学、国家权力与战争的新关系。"),
      e(1957, "Sputnik 1 launched", "斯普特尼克1号发射", "Europe", "Soviet Union / orbit", "The satellite made space technology central to Cold War science and prestige.", "这颗卫星使航天技术成为冷战科学与声望竞争的核心。"),
      e(1969, "ARPANET first nodes connected", "ARPANET 首批节点连接", "Americas", "California / United States", "The research network became a foundation for later internet protocols and networked computing.", "这个研究网络成为后来互联网协议和联网计算的基础。")
    ],
    "science-technology-08": [
      e(1990, "Human Genome Project begins", "人类基因组计划启动", "Americas", "United States / international laboratories", "The project tied biology to large-scale data, sequencing, and international scientific coordination.", "该计划把生物学与大规模数据、测序和国际科学协作连接起来。"),
      e(2007, "iPhone introduced", "iPhone 发布", "Americas", "California / United States", "The smartphone fused computing, sensors, media, and network access into a personal device.", "智能手机把计算、传感器、媒体和网络接入融合进个人设备。"),
      e(2022, "ChatGPT released publicly", "ChatGPT 公开发布", "Americas", "Online AI systems", "Generative AI made machine language systems visible in everyday writing, search, work, and education.", "生成式 AI 让机器语言系统进入日常写作、搜索、工作和教育。")
    ],

    "art-01": [
      e(-2600, "Standard of Ur made", "乌尔军旗制作", "Middle East", "Ur / Mesopotamia", "The object shows royal power, war, hierarchy, and narrative image-making in early art.", "这件器物展现早期艺术中的王权、战争、等级和叙事图像。"),
      e(-1350, "Bust of Nefertiti created", "娜芙蒂蒂胸像制作", "Africa", "Amarna / Egypt", "The sculpture became a striking example of royal portraiture and artistic refinement.", "这件雕塑成为王室肖像和艺术精细化的突出例子。"),
      e(-210, "Terracotta Army buried", "兵马俑下葬", "China", "Qin tomb / China", "The terracotta figures joined imperial death, military imagery, and mass workshop production.", "兵马俑连接帝国死亡、军事图像和大规模作坊生产。")
    ],
    "art-02": [
      e(-447, "Parthenon construction begins", "帕特农神庙开工", "Europe", "Athens / Greece", "The building and sculpture program became a defining monument of classical civic art.", "建筑和雕塑计划成为古典公民艺术的代表性纪念物。"),
      e(-150, "Venus de Milo sculpted", "《米洛的维纳斯》雕成", "Europe", "Hellenistic Mediterranean", "The sculpture shows the lasting prestige of classical bodies and Hellenistic style.", "雕塑显示古典人体和希腊化风格的持久声望。"),
      e(113, "Trajan's Column completed", "图拉真柱完成", "Europe", "Rome", "The column turned imperial conquest into monumental public narrative.", "纪念柱把帝国征服转化为公共纪念叙事。")
    ],
    "art-03": [
      e(537, "Hagia Sophia completed", "圣索菲亚大教堂完成", "Europe", "Constantinople", "Its mosaics and space shaped Byzantine sacred visual culture.", "其马赛克和空间塑造拜占庭神圣视觉文化。"),
      e(787, "Second Council of Nicaea restores icons", "第二次尼西亚会议恢复圣像", "Europe", "Nicaea / Byzantine Empire", "The council defended icons and clarified sacred image practice.", "会议维护圣像并明确神圣图像实践。"),
      e(1130, "Palatine Chapel mosaics completed", "帕拉蒂纳礼拜堂马赛克完成", "Europe", "Palermo / Sicily", "The mosaics joined Byzantine, Islamic, and Latin court cultures.", "马赛克连接拜占庭、伊斯兰和拉丁宫廷文化。")
    ],
    "art-04": [
      e(1450, "Movable-type printing spreads in Europe", "欧洲活字印刷扩散", "Europe", "Mainz / German lands", "Printing expanded the circulation of texts, images, humanist editions, and religious debate.", "活字印刷扩大文本、图像、人文主义版本和宗教争论的传播。"),
      e(1511, "School of Athens completed", "《雅典学院》完成", "Europe", "Vatican / Rome", "Raphael's fresco became an emblem of Renaissance classicism, perspective, and humanist learning.", "拉斐尔的壁画成为文艺复兴古典复兴、透视法与人文主义学习的象征。"),
      e(1512, "Sistine Chapel ceiling completed", "西斯廷礼拜堂天顶画完成", "Europe", "Vatican / Rome", "Michelangelo's ceiling joined Christian imagery with Renaissance study of the body.", "米开朗基罗天顶画把基督教图像与文艺复兴人体研究结合起来。")
    ],
    "art-05": [
      e(1600, "Caravaggio paints The Calling of Saint Matthew", "卡拉瓦乔创作《圣马太蒙召》", "Europe", "Rome / Italy", "Dramatic light and realism made sacred painting feel immediate and theatrical.", "强烈明暗和现实感让宗教绘画具有现场感和剧场性。"),
      e(1642, "Rembrandt completes The Night Watch", "伦勃朗完成《夜巡》", "Europe", "Amsterdam / Dutch Republic", "The painting turned civic militia portraiture into dynamic public drama.", "这幅画把市民民兵肖像变成动态公共戏剧。"),
      e(1656, "Velazquez paints Las Meninas", "委拉斯开兹创作《宫娥》", "Europe", "Madrid / Spain", "The painting explored court power, spectatorship, and the status of the artist.", "这幅画探索宫廷权力、观看关系和艺术家的地位。")
    ],
    "art-06": [
      e(1863, "Salon des Refuses opens", "落选者沙龙开幕", "Europe", "Paris / France", "The exhibition made official taste and modern artistic rebellion publicly visible.", "展览让官方品味和现代艺术反叛变得公开可见。"),
      e(1874, "First Impressionist exhibition", "第一次印象派展览", "Europe", "Paris / France", "Independent artists presented modern light, leisure, movement, and urban perception.", "独立艺术家展示现代光线、休闲、运动和城市感知。"),
      e(1886, "Final Impressionist exhibition", "最后一次印象派展览", "Europe", "Paris / France", "The final exhibition showed Impressionism branching into Post-Impressionist experiments.", "最后一次展览显示印象派分化为后印象派实验。")
    ],
    "art-07": [
      e(1907, "Picasso paints Les Demoiselles d'Avignon", "毕加索创作《亚威农少女》", "Europe", "Paris / France", "The painting helped break academic figure painting into angular modernist form.", "这幅画帮助把学院式人物画推向棱角化的现代主义形式。"),
      e(1915, "Malevich exhibits Black Square", "马列维奇展出《黑方块》", "Europe", "Petrograd / Russian Empire", "Black Square became a radical statement of abstraction and reduction.", "《黑方块》成为抽象与极简化的激进宣言。"),
      e(1919, "Bauhaus founded", "包豪斯成立", "Europe", "Weimar / Germany", "The Bauhaus connected art, design, architecture, craft, and industrial production.", "包豪斯连接艺术、设计、建筑、工艺与工业生产。")
    ],
    "art-08": [
      e(1977, "Centre Pompidou opens", "蓬皮杜中心开放", "Europe", "Paris / France", "The museum made contemporary art, architecture, and public culture central to urban spectacle.", "这座美术馆把当代艺术、建筑和公共文化置于城市奇观中心。"),
      e(1989, "Magiciens de la Terre opens", "《大地魔术师》展览开幕", "Europe", "Paris / France", "The exhibition tried to rethink contemporary art beyond a purely Western canon.", "展览试图超越纯西方经典来重新思考当代艺术。"),
      e(2010, "Ai Weiwei's Sunflower Seeds installed", "艾未未《葵花籽》装置展出", "Europe", "Tate Modern / London", "The installation connected craft labor, mass production, politics, and global contemporary art.", "装置连接手工劳动、大规模生产、政治和全球当代艺术。")
    ],

    "literature-01": [
      e(-1800, "Epic of Gilgamesh written in Old Babylonian form", "《吉尔伽美什史诗》形成古巴比伦版本", "Middle East", "Mesopotamia", "The epic preserved kingship, mortality, friendship, and myth in written literary form.", "史诗以书面文学形式保存王权、死亡、友谊和神话。"),
      e(-750, "Homeric epics take shape", "荷马史诗成形", "Europe", "Greek world", "The Iliad and Odyssey anchored heroic memory, oral performance, and later literary canon.", "《伊利亚特》和《奥德赛》奠定英雄记忆、口传表演和后世文学经典。"),
      e(-500, "Mahabharata traditions develop", "《摩诃婆罗多》传统发展", "India", "South Asia", "Epic traditions connected kinship, war, duty, and cosmic order.", "史诗传统连接亲族、战争、义务和宇宙秩序。")
    ],
    "literature-02": [
      e(-458, "Aeschylus stages Oresteia", "埃斯库罗斯上演《俄瑞斯忒亚》", "Europe", "Athens / Greece", "Greek tragedy turned myth into civic reflection on justice, violence, and law.", "希腊悲剧把神话转化为关于正义、暴力和法律的公民反思。"),
      e(-300, "Book of Songs canonized in China", "《诗经》成为中国经典", "China", "China", "The anthology became a central model for poetry, governance, and moral interpretation.", "这部诗歌总集成为诗歌、治理和道德解释的核心模型。"),
      e(-19, "Virgil's Aeneid completed", "维吉尔《埃涅阿斯纪》完成", "Europe", "Rome", "The poem linked Roman empire, mythic ancestry, and Augustan political imagination.", "这首诗连接罗马帝国、神话祖先和奥古斯都时代政治想象。")
    ],
    "literature-03": [
      e(325, "Biblical canon debates at Nicaea era", "尼西亚时代圣经典范争论", "Europe", "Roman Empire", "Christian institutions increasingly defined authoritative texts and doctrine.", "基督教制度越来越明确权威文本和教义。"),
      e(650, "Quranic text standardized under Uthman", "奥斯曼时期《古兰经》文本标准化", "Middle East", "Medina / Islamic world", "Textual standardization shaped Islamic recitation, law, and scholarship.", "文本标准化塑造伊斯兰诵读、法律和学术。"),
      e(868, "Diamond Sutra printed", "《金刚经》印刷", "China", "Tang China", "The printed scroll shows Buddhist scripture, woodblock technology, and manuscript-to-print transition.", "印本显示佛教经文、雕版技术和从手稿到印刷的转变。")
    ],
    "literature-04": [
      e(1000, "The Tale of Genji written", "《源氏物语》写成", "Japan", "Heian Japan", "The courtly narrative became a landmark of prose fiction and aristocratic culture.", "这部宫廷叙事成为散文小说和贵族文化的里程碑。"),
      e(1200, "Nibelungenlied composed", "《尼伯龙根之歌》成书", "Europe", "German lands", "The epic preserved heroic legend within medieval vernacular literature.", "这部史诗在中世纪俗语文学中保存英雄传说。"),
      e(1387, "Chaucer begins The Canterbury Tales", "乔叟开始创作《坎特伯雷故事集》", "Europe", "England", "The work used vernacular storytelling to portray social voices and pilgrimage culture.", "作品用俗语叙事呈现社会声音和朝圣文化。")
    ],
    "literature-05": [
      e(1455, "Gutenberg Bible printed", "古腾堡圣经印成", "Europe", "Mainz / German lands", "Movable-type printing transformed book production and reading publics.", "活字印刷改变书籍生产和阅读公众。"),
      e(1605, "Don Quixote Part I published", "《堂吉诃德》第一部出版", "Europe", "Spain", "The novel played with romance, realism, print culture, and modern self-conscious fiction.", "这部小说处理骑士传奇、现实主义、印刷文化和现代自觉小说。"),
      e(1759, "Voltaire publishes Candide", "伏尔泰出版《老实人》", "Europe", "France / Geneva", "Satirical fiction became a weapon of Enlightenment criticism.", "讽刺小说成为启蒙批判的武器。")
    ],
    "literature-06": [
      e(1719, "Robinson Crusoe published", "《鲁滨逊漂流记》出版", "Europe", "London / England", "The novel linked individualism, empire, commerce, and prose realism.", "这部小说连接个人主义、帝国、商业和散文现实主义。"),
      e(1813, "Pride and Prejudice published", "《傲慢与偏见》出版", "Europe", "England", "Austen's novel explored marriage, property, gender, and social observation.", "奥斯丁小说探索婚姻、财产、性别和社会观察。"),
      e(1862, "Les Miserables published", "《悲惨世界》出版", "Europe", "France", "Hugo tied the novel to revolution, poverty, law, and national memory.", "雨果把小说连接革命、贫困、法律和民族记忆。")
    ],
    "literature-07": [
      e(1922, "Ulysses published", "《尤利西斯》出版", "Europe", "Paris / Ireland", "Joyce's novel became a landmark of modernist form and interior consciousness.", "乔伊斯小说成为现代主义形式和内心意识的里程碑。"),
      e(1958, "Things Fall Apart published", "《瓦解》出版", "Africa", "Nigeria", "Achebe's novel reframed colonial encounter through Igbo society and African narrative voice.", "阿契贝小说通过伊博社会和非洲叙事声音重构殖民遭遇。"),
      e(1967, "One Hundred Years of Solitude published", "《百年孤独》出版", "Americas", "Colombia / Latin America", "The novel made magical realism a global literary language of history and memory.", "这部小说使魔幻现实主义成为表现历史和记忆的全球文学语言。")
    ],
    "literature-08": [
      e(1987, "HyperCard released", "HyperCard 发布", "Americas", "United States", "Hypertext tools opened new ways to link text, media, and user navigation.", "超文本工具开启连接文本、媒介和用户导航的新方式。"),
      e(2007, "Kindle released", "Kindle 发布", "Americas", "United States", "E-readers changed book distribution, reading habits, and platform publishing.", "电子阅读器改变书籍发行、阅读习惯和平台出版。"),
      e(2011, "Wattpad reaches mobile readership", "Wattpad 扩展移动阅读", "Americas", "Online platforms", "Networked platforms turned serial writing, fan communities, and mobile reading into global literary practice.", "联网平台把连载写作、粉丝社群和移动阅读变成全球文学实践。")
    ],

    "fashion-daily-life-01": [
      e(-2500, "Egyptian linen dress traditions visible in tomb art", "埃及墓葬艺术呈现亚麻服饰传统", "Africa", "Egypt", "Tomb images show dress as a marker of labor, gender, rank, and ritual status.", "墓葬图像显示服饰作为劳动、性别、等级和仪式身份的标记。"),
      e(-210, "Terracotta Army uniforms modeled", "兵马俑服饰甲胄塑造", "China", "Qin tomb / China", "The figures preserve rank, armor, hairstyle, and military clothing as social codes.", "兵马俑保存等级、甲胄、发式和军服作为社会编码。"),
      e(79, "Pompeii clothing and domestic life preserved", "庞贝服饰与家庭生活遗存", "Europe", "Pompeii / Roman Empire", "The eruption preserved evidence of Roman dress, shops, homes, food, and daily objects.", "火山喷发保存罗马服饰、店铺、住宅、食物和日用品证据。")
    ],
    "fashion-daily-life-02": [
      e(552, "Silkworm eggs brought to Byzantium", "蚕种传入拜占庭", "Europe", "Byzantine Empire", "Silk production became tied to court luxury, diplomacy, and textile technology.", "丝绸生产与宫廷奢侈、外交和纺织技术相连。"),
      e(800, "Abbasid luxury textiles circulate", "阿拔斯奢侈纺织品流通", "Middle East", "Baghdad / Islamic world", "Textiles moved through courts, markets, gifts, and religious-cultural exchange.", "纺织品通过宫廷、市场、礼物和宗教文化交换流动。"),
      e(1200, "Medieval wool trade expands", "中世纪羊毛贸易扩展", "Europe", "England / Flanders", "Wool and cloth linked rural production, urban guilds, and long-distance trade.", "羊毛和布匹连接乡村生产、城市行会和长途贸易。")
    ],
    "fashion-daily-life-03": [
      e(1483, "Venetian sumptuary laws renewed", "威尼斯服饰限制法更新", "Europe", "Venice / Italy", "Dress regulation made clothing a visible site of rank, gender, morality, and civic order.", "服饰管制使衣着成为等级、性别、道德和城市秩序的可见场域。"),
      e(1533, "Catherine de' Medici marries Henry of France", "凯瑟琳·德·美第奇嫁给法国亨利", "Europe", "France / Italy", "Court marriage helped circulate Italian fashion, court manners, and elite display.", "宫廷婚姻帮助传播意大利时尚、宫廷礼仪和精英展示。"),
      e(1588, "Armada Portrait of Elizabeth I painted", "伊丽莎白一世无敌舰队肖像绘成", "Europe", "England", "Royal dress and jewels projected sovereignty, gendered power, and imperial ambition.", "王室服饰与珠宝投射主权、性别化权力和帝国野心。")
    ],
    "fashion-daily-life-04": [
      e(1600, "English East India Company chartered", "英国东印度公司获特许状", "Europe", "London / Indian Ocean world", "Asian textiles increasingly entered European markets and fashionable consumption.", "亚洲纺织品越来越进入欧洲市场和时尚消费。"),
      e(1664, "French East India Company founded", "法国东印度公司成立", "Europe", "France / Indian Ocean world", "State-backed trade companies helped move cottons, silks, dyes, and luxury goods.", "国家支持的贸易公司推动棉布、丝绸、染料和奢侈品流动。"),
      e(1770, "Robe a la francaise becomes court fashion", "法式长袍成为宫廷时尚", "Europe", "France", "Court dress displayed textile wealth, gender codes, and global luxury materials.", "宫廷服饰展示纺织财富、性别规范和全球奢侈材料。")
    ],
    "fashion-daily-life-05": [
      e(1830, "Barthelemy Thimonnier patents sewing machine", "蒂莫尼耶缝纫机获专利", "Europe", "France", "Sewing technology began changing garment production and labor.", "缝纫技术开始改变服装生产和劳动。"),
      e(1851, "Singer sewing machine patented", "胜家缝纫机获专利", "Americas", "United States", "Commercial sewing machines helped industrialize clothing production.", "商业缝纫机帮助服装生产工业化。"),
      e(1911, "Triangle Shirtwaist Factory fire", "三角衬衫厂火灾", "Americas", "New York / United States", "The disaster exposed labor conditions in garment manufacturing and pushed reform.", "灾难暴露服装制造业劳动条件并推动改革。")
    ],
    "fashion-daily-life-06": [
      e(1915, "Women enter wartime industrial labor", "女性进入战时工业劳动", "Europe", "Europe / wartime industries", "War labor changed public roles, workwear, and debates over women's independence.", "战时劳动改变女性公共角色、工作服和独立性争论。"),
      e(1926, "Chanel little black dress publicized", "香奈儿小黑裙被推广", "Europe", "Paris / fashion press", "The dress became a symbol of modern simplicity, urban femininity, and fashion media.", "小黑裙成为现代简洁、城市女性气质和时尚媒体的象征。"),
      e(1947, "Dior New Look launched", "迪奥 New Look 发布", "Europe", "Paris / France", "The silhouette reworked postwar femininity, luxury, rationing memory, and couture power.", "这一廓形重塑战后女性气质、奢华、配给记忆和高级定制权力。")
    ],
    "fashion-daily-life-07": [
      e(1955, "Blue jeans become youth fashion", "牛仔裤成为青年时尚", "Americas", "United States", "Denim moved from workwear into youth identity, cinema, and mass fashion.", "牛仔布从工装转入青年身份、电影和大众时尚。"),
      e(1966, "Mary Quant popularizes the miniskirt", "玛丽·匡特推广迷你裙", "Europe", "London / United Kingdom", "The miniskirt became tied to youth culture, gender change, and mass media style.", "迷你裙与青年文化、性别变化和大众媒介风格相连。"),
      e(1984, "Nike Air Jordan released", "Nike Air Jordan 发布", "Americas", "United States", "Sneaker culture connected sport, celebrity, branding, race, and street fashion.", "球鞋文化连接体育、名人、品牌、种族和街头时尚。")
    ],
    "fashion-daily-life-08": [
      e(2005, "Fast fashion global expansion accelerates", "快时尚全球扩张加速", "Europe", "Global retail chains", "Rapid production cycles changed clothing consumption, labor pressure, and waste.", "快速生产周期改变服装消费、劳动压力和废弃物。"),
      e(2013, "Rana Plaza collapse", "拉纳广场倒塌", "India", "Dhaka / Bangladesh", "The disaster exposed global garment supply chains, labor risk, and consumer responsibility.", "灾难暴露全球服装供应链、劳动风险和消费者责任。"),
      e(2018, "Fashion industry sustainability pledges expand", "时尚行业可持续承诺扩展", "Europe", "Global fashion forums", "Sustainability moved from critique toward corporate reporting, recycling claims, and regulation debates.", "可持续性从批判转向企业报告、回收承诺和监管争论。")
    ],

    "entertainment-media-01": [
      e(-2500, "Egyptian festival scenes painted in tombs", "埃及墓葬绘制节庆场景", "Africa", "Egypt", "Tomb scenes preserve music, dance, ritual performance, and collective storytelling.", "墓葬场景保存音乐、舞蹈、仪式表演和集体叙事。"),
      e(-534, "Athenian Dionysia dramatic contests begin", "雅典酒神节戏剧竞赛开始", "Europe", "Athens / Greece", "Public drama connected ritual, civic identity, competition, and spectatorship.", "公共戏剧连接仪式、公民身份、竞争和观看。"),
      e(-300, "Sanskrit performance traditions develop", "梵语表演传统发展", "India", "South Asia", "Classical performance linked drama, music, gesture, and religious-cultural storytelling.", "古典表演连接戏剧、音乐、手势和宗教文化叙事。")
    ],
    "entertainment-media-02": [
      e(-80, "Theatre of Pompey opens", "庞培剧场开放", "Europe", "Rome", "Permanent theater architecture made public spectacle part of urban political culture.", "永久剧场建筑使公共娱乐成为城市政治文化的一部分。"),
      e(80, "Colosseum inaugurated", "罗马斗兽场启用", "Europe", "Rome", "The amphitheater staged imperial power through games, crowds, and violence.", "圆形竞技场通过游戏、人群和暴力展示帝国权力。"),
      e(712, "Kojiki compiled with performance traditions", "《古事记》编成并保存表演传统", "Japan", "Nara Japan", "Myth, recitation, and court culture preserved early narrative performance.", "神话、诵读和宫廷文化保存早期叙事表演。")
    ],
    "entertainment-media-03": [
      e(787, "Nara court performances flourish", "奈良宫廷表演繁荣", "Japan", "Nara Japan", "Court performance connected music, dance, ritual, and elite cultural exchange.", "宫廷表演连接音乐、舞蹈、仪式和精英文化交流。"),
      e(1375, "Noh theater patronized by Ashikaga court", "足利幕府赞助能剧", "Japan", "Muromachi Japan", "Noh became a refined performance form linking warrior elites, Buddhism, and aesthetics.", "能剧成为连接武士精英、佛教和审美的精致表演形式。"),
      e(1450, "Burgundian court festivals staged", "勃艮第宫廷节庆上演", "Europe", "Burgundy / Low Countries", "Court festivals used pageantry, music, costume, and spectacle to display power.", "宫廷节庆用仪仗、音乐、服饰和奇观展示权力。")
    ],
    "entertainment-media-04": [
      e(1605, "First newspaper Relation begins publication", "《Relation》报纸开始发行", "Europe", "Strasbourg", "Periodical print helped create urban publics for news and entertainment.", "定期印刷品帮助形成新闻与娱乐的城市公众。"),
      e(1660, "English theaters reopen", "英国剧院重新开放", "Europe", "London / England", "Restoration theater created new commercial stages, celebrity actors, and urban audiences.", "王政复辟剧场创造商业舞台、明星演员和城市观众。"),
      e(1731, "The Beggar's Opera becomes a hit", "《乞丐歌剧》走红", "Europe", "London / England", "Ballad opera joined print, popular song, satire, and commercial theater.", "民谣歌剧连接印刷、流行歌曲、讽刺和商业剧场。")
    ],
    "entertainment-media-05": [
      e(1839, "Daguerreotype announced", "达盖尔摄影法公布", "Europe", "Paris / France", "Photography changed visual memory, portraiture, evidence, and popular media.", "摄影改变视觉记忆、肖像、证据和大众媒介。"),
      e(1895, "Lumiere brothers screen films", "卢米埃尔兄弟放映电影", "Europe", "Paris / France", "Public film projection helped launch cinema as mass entertainment.", "公共电影放映帮助电影成为大众娱乐。"),
      e(1927, "The Jazz Singer released", "《爵士歌王》上映", "Americas", "United States", "Synchronized sound transformed cinema, performance, music, and media industry economics.", "同步声音改变电影、表演、音乐和媒介产业经济。")
    ],
    "entertainment-media-06": [
      e(1920, "KDKA radio broadcast", "KDKA 广播播出", "Americas", "Pittsburgh / United States", "Commercial radio broadcasting created new shared audiences for news, music, and advertising.", "商业广播为新闻、音乐和广告创造新的共同受众。"),
      e(1936, "BBC Television Service begins", "BBC 电视服务开始", "Europe", "London / United Kingdom", "Regular television broadcasting made moving images domestic and scheduled.", "常规电视广播让动态图像进入家庭和节目表。"),
      e(1969, "Apollo 11 moon landing broadcast", "阿波罗11号登月直播", "Americas", "Global television networks", "A global television audience watched a scientific and political spectacle in real time.", "全球电视观众实时观看一场科学与政治奇观。")
    ],
    "entertainment-media-07": [
      e(1972, "Magnavox Odyssey released", "Magnavox Odyssey 发布", "Americas", "United States", "The first home video game console introduced interactive screen entertainment.", "第一台家用电子游戏机引入互动屏幕娱乐。"),
      e(1980, "CNN launches", "CNN 开播", "Americas", "United States", "Cable news changed the tempo and format of mass media information.", "有线新闻改变大众媒介信息的节奏和形式。"),
      e(1985, "Nintendo Entertainment System released in North America", "任天堂 NES 在北美发布", "Americas", "United States / Japan", "Nintendo helped rebuild home video games as a platform industry.", "任天堂帮助把家用电子游戏重建为平台产业。")
    ],
    "entertainment-media-08": [
      e(2005, "YouTube launches", "YouTube 上线", "Americas", "Online platforms", "User-uploaded video changed entertainment distribution, creators, and audience participation.", "用户上传视频改变娱乐发行、创作者和观众参与。"),
      e(2007, "Netflix begins streaming", "Netflix 开始流媒体服务", "Americas", "United States", "Streaming shifted film and television from scheduled broadcast to on-demand platforms.", "流媒体把电影电视从固定播出转向点播平台。"),
      e(2016, "TikTok/Douyin launches", "抖音 / TikTok 上线", "China", "China / global platforms", "Short-video platforms reshaped music, comedy, attention, and algorithmic entertainment.", "短视频平台重塑音乐、喜剧、注意力和算法娱乐。")
    ],

    "disaster-climate-01": [
      e(-9600, "Younger Dryas ends", "新仙女木期结束", "Global", "Northern Hemisphere", "Abrupt warming helped reshape environments in which agriculture later expanded.", "突然变暖重塑了后来农业扩张所处的环境。"),
      e(-8200, "8.2 kiloyear climate event", "8.2千年气候事件", "Global", "Northern Hemisphere", "A cooling event tested early farming communities and Holocene adaptation.", "降温事件考验早期农业社群和全新世适应。"),
      e(-6200, "Early irrigation appears in Mesopotamia", "美索不达米亚早期灌溉出现", "Middle East", "Mesopotamia", "Water management linked agriculture, climate variability, and collective labor.", "水管理连接农业、气候波动和集体劳动。")
    ],
    "disaster-climate-02": [
      e(-3000, "Nile flood records begin", "尼罗河洪水记录开始", "Africa", "Egypt", "Flood measurement helped states connect agriculture, taxation, and risk.", "洪水测量帮助国家连接农业、税收和风险。"),
      e(-1900, "Indus urban decline begins", "印度河城市衰落开始", "India", "Indus Valley", "Environmental change and river shifts likely contributed to urban transformation.", "环境变化和河流改道可能促成城市转型。"),
      e(-602, "Yellow River course shift recorded", "黄河改道记录", "China", "Yellow River / China", "River change exposed the long relationship between floods, settlement, and state response.", "河流变化暴露洪水、定居和国家响应之间的长期关系。")
    ],
    "disaster-climate-03": [
      e(541, "Plague of Justinian begins", "查士丁尼瘟疫爆发", "Europe", "Eastern Mediterranean", "Pandemic disease moved through connected trade, military, and imperial networks.", "大流行疾病通过互联贸易、军事和帝国网络传播。"),
      e(1347, "Black Death reaches the Mediterranean", "黑死病抵达地中海", "Europe", "Mediterranean ports", "Plague mortality transformed labor, religion, economy, and social memory.", "瘟疫死亡重塑劳动、宗教、经济和社会记忆。"),
      e(1520, "Smallpox reaches Aztec world", "天花传入阿兹特克世界", "Americas", "Mesoamerica", "Epidemic disease became a devastating part of colonial encounter.", "流行病成为殖民遭遇中毁灭性的一部分。")
    ],
    "disaster-climate-04": [
      e(1315, "Great Famine begins in Europe", "欧洲大饥荒开始", "Europe", "Northern Europe", "Cold and wet years caused crop failures, hunger, and social stress.", "寒冷潮湿年份导致歉收、饥饿和社会压力。"),
      e(1601, "Huaynaputina eruption cools climate", "瓦伊纳普蒂纳火山喷发导致降温", "Americas", "Peru / global climate", "Volcanic cooling contributed to harvest failures and hardship across regions.", "火山降温导致多地区歉收和困苦。"),
      e(1816, "Year Without a Summer", "无夏之年", "Europe", "Northern Hemisphere", "Tambora-linked cooling brought crop failures, migration, and cultural responses.", "坦博拉相关降温带来歉收、迁徙和文化反应。")
    ],
    "disaster-climate-05": [
      e(1858, "Great Stink in London", "伦敦大恶臭", "Europe", "London / United Kingdom", "Urban pollution pushed sewer reform and modern public health infrastructure.", "城市污染推动下水道改革和现代公共卫生基础设施。"),
      e(1930, "Dust Bowl begins", "沙尘暴灾害开始", "Americas", "Great Plains / United States", "Drought, farming practices, and economic crisis produced environmental displacement.", "干旱、耕作方式和经济危机造成环境流离失所。"),
      e(1952, "Great Smog of London", "伦敦大烟雾", "Europe", "London / United Kingdom", "Air pollution killed thousands and accelerated clean air legislation.", "空气污染造成数千人死亡，并加速清洁空气立法。")
    ],
    "disaster-climate-06": [
      e(1923, "Great Kanto earthquake", "关东大地震", "Japan", "Tokyo / Japan", "The disaster reshaped urban planning, emergency response, and social violence in Japan.", "灾难重塑日本城市规划、应急响应和社会暴力。"),
      e(1984, "Bhopal gas disaster", "博帕尔毒气灾难", "India", "Bhopal / India", "Industrial catastrophe exposed corporate risk, regulation failure, and environmental justice.", "工业灾难暴露企业风险、监管失败和环境正义问题。"),
      e(2005, "Hurricane Katrina hits Gulf Coast", "卡特里娜飓风袭击墨西哥湾沿岸", "Americas", "New Orleans / United States", "The disaster exposed inequality, infrastructure failure, and crisis governance problems.", "灾难暴露不平等、基础设施失败和危机治理问题。")
    ],
    "disaster-climate-07": [
      e(1958, "Keeling Curve measurements begin", "基林曲线测量开始", "Americas", "Mauna Loa / Hawaii", "Continuous CO2 measurement made atmospheric warming visible as a long-term trend.", "持续二氧化碳测量让大气变暖成为可见的长期趋势。"),
      e(1988, "IPCC established", "政府间气候变化专门委员会成立", "Global", "United Nations", "The IPCC organized climate science for international policy debate.", "IPCC 为国际政策争论组织气候科学。"),
      e(2015, "Paris Agreement adopted", "《巴黎协定》通过", "Europe", "Paris / France", "States agreed on a global framework for limiting warming and reporting climate action.", "各国达成限制升温和报告气候行动的全球框架。")
    ],
    "disaster-climate-08": [
      e(2005, "Hyogo Framework for Action adopted", "《兵库行动框架》通过", "Japan", "Kobe / Japan", "The framework promoted disaster risk reduction as an international governance priority.", "该框架把减灾作为国际治理重点。"),
      e(2015, "Sendai Framework adopted", "《仙台减灾框架》通过", "Japan", "Sendai / Japan", "The framework emphasized resilience, preparedness, and disaster risk governance.", "该框架强调韧性、准备和灾害风险治理。"),
      e(2021, "COP26 climate adaptation finance debates", "COP26 气候适应资金争论", "Europe", "Glasgow / United Kingdom", "Adaptation finance became central to global climate justice and resilience debates.", "适应资金成为全球气候正义和韧性争论的核心。")
    ],

    "architecture-01": [
      e(-2560, "Great Pyramid of Giza completed", "吉萨大金字塔完成", "Africa", "Giza / Egypt", "The pyramid joined funerary belief, state labor, geometry, and monumental authority.", "金字塔连接墓葬信仰、国家劳力、几何和纪念性权威。"),
      e(-2100, "Ziggurat of Ur built", "乌尔大塔庙建成", "Middle East", "Ur / Mesopotamia", "The temple platform expressed sacred hierarchy, urban identity, and political order.", "神庙台基表达神圣等级、城市身份和政治秩序。"),
      e(-1450, "Minoan palace at Knossos rebuilt", "克诺索斯宫殿重建", "Europe", "Crete / Aegean", "The palace combined storage, ritual, administration, and elite display.", "宫殿结合储藏、仪式、行政和精英展示。")
    ],
    "architecture-02": [
      e(-447, "Parthenon construction begins", "帕特农神庙开工", "Europe", "Athens / Greece", "The temple became a defining example of classical orders and civic monumentality.", "神庙成为古典柱式和公民纪念性的代表。"),
      e(-70, "Roman Colosseum construction begins", "罗马斗兽场开工", "Europe", "Rome", "Amphitheater architecture organized mass spectacle and imperial urban identity.", "圆形竞技场建筑组织大众奇观和帝国城市身份。"),
      e(125, "Pantheon completed", "万神殿完成", "Europe", "Rome", "The dome and interior space showed Roman concrete engineering and sacred monumentality.", "穹顶和内部空间显示罗马混凝土工程与神圣纪念性。")
    ],
    "architecture-03": [
      e(537, "Hagia Sophia completed", "圣索菲亚大教堂完成", "Europe", "Constantinople", "Its dome and luminous interior became a model of imperial sacred space.", "其穹顶与明亮内部成为帝国神圣空间的模型。"),
      e(1199, "Qutb Minar construction begins", "顾特卜塔开工", "India", "Delhi / India", "The tower and mosque complex marked Islamic rule and architectural adaptation in North India.", "塔和清真寺建筑群标志北印度伊斯兰统治和建筑适应。"),
      e(1632, "Taj Mahal construction begins", "泰姬陵开工", "India", "Agra / Mughal India", "The mausoleum joined imperial memory, garden planning, and Indo-Islamic craft.", "陵墓连接帝国记忆、花园规划和印度-伊斯兰工艺。")
    ],
    "architecture-04": [
      e(1030, "Speyer Cathedral construction begins", "施派尔大教堂开工", "Europe", "German lands", "Romanesque mass, vaulting, and imperial patronage shaped monumental church building.", "罗曼式体量、拱顶和帝国赞助塑造纪念性教堂建筑。"),
      e(1144, "Saint-Denis choir consecrated", "圣丹尼教堂唱诗班席祝圣", "Europe", "France", "Pointed arches, rib vaults, and light helped define early Gothic architecture.", "尖拱、肋拱和光线帮助定义早期哥特建筑。"),
      e(1220, "Chartres Cathedral largely completed", "沙特尔大教堂主体完成", "Europe", "France", "Chartres became a landmark of Gothic structure, stained glass, and pilgrimage space.", "沙特尔成为哥特结构、彩窗和朝圣空间的里程碑。")
    ],
    "architecture-05": [
      e(1420, "Brunelleschi begins Florence Cathedral dome", "布鲁内莱斯基开始建造佛罗伦萨大教堂穹顶", "Europe", "Florence / Italy", "The dome joined engineering, civic pride, and Renaissance architectural ambition.", "穹顶连接工程、城市自豪和文艺复兴建筑雄心。"),
      e(1506, "New St. Peter's Basilica construction begins", "新圣彼得大教堂开工", "Europe", "Rome", "The project linked papal power, Renaissance design, and monumental urban transformation.", "工程连接教皇权力、文艺复兴设计和纪念性城市改造。"),
      e(1661, "Versailles expansion begins under Louis XIV", "路易十四开始扩建凡尔赛", "Europe", "Versailles / France", "Palace planning turned architecture, gardens, ceremony, and monarchy into a controlled spectacle.", "宫殿规划把建筑、花园、礼仪和君主制变成受控奇观。")
    ],
    "architecture-06": [
      e(1851, "Crystal Palace opens", "水晶宫开放", "Europe", "London / United Kingdom", "Iron and glass construction staged industrial materials as public architecture.", "铁与玻璃建筑把工业材料变成公共建筑。"),
      e(1889, "Eiffel Tower opens", "埃菲尔铁塔开放", "Europe", "Paris / France", "The tower made iron engineering, exhibition culture, and modern urban spectacle visible.", "铁塔让铁结构工程、展览文化和现代城市奇观可见。"),
      e(1913, "Woolworth Building completed", "伍尔沃斯大厦完成", "Americas", "New York / United States", "The skyscraper showed how steel frames, elevators, and finance changed city form.", "摩天楼显示钢框架、电梯和金融如何改变城市形态。")
    ],
    "architecture-07": [
      e(1931, "Villa Savoye completed", "萨伏伊别墅完成", "Europe", "Poissy / France", "Le Corbusier's house became a canonical example of modernist architectural principles.", "勒·柯布西耶的住宅成为现代主义建筑原则的经典案例。"),
      e(1932, "International Style exhibition opens", "国际风格展览开幕", "Americas", "Museum of Modern Art / New York", "The exhibition helped name and circulate international modernist architecture.", "这次展览帮助命名并传播国际现代主义建筑。"),
      e(1952, "Lever House completed", "利华大厦完成", "Americas", "New York / United States", "Lever House became an influential glass-and-steel corporate modernist tower.", "利华大厦成为有影响力的玻璃钢结构企业现代主义高楼。")
    ],
    "architecture-08": [
      e(1977, "Centre Pompidou opens", "蓬皮杜中心开放", "Europe", "Paris / France", "High-tech architecture made services, structure, and cultural infrastructure visible.", "高技派建筑让服务系统、结构和文化基础设施可见。"),
      e(1997, "Guggenheim Museum Bilbao opens", "毕尔巴鄂古根海姆博物馆开放", "Europe", "Bilbao / Spain", "Digital design, spectacle, and urban regeneration became central architectural themes.", "数字设计、奇观和城市再生成为核心建筑主题。"),
      e(2014, "Bosco Verticale completed", "垂直森林完成", "Europe", "Milan / Italy", "The towers made vegetation, housing, and environmental performance part of architectural identity.", "这些塔楼把植被、住宅和环境表现纳入建筑身份。")
    ],

    "computing-pc-01": [
      e(1642, "Pascal builds the Pascaline", "帕斯卡制造 Pascaline 计算器", "Europe", "France", "Mechanical calculation connected mathematics, commerce, and administrative counting.", "机械计算连接数学、商业和行政计数。"),
      e(1801, "Jacquard loom uses punched cards", "雅卡尔织机使用穿孔卡", "Europe", "France", "Punched-card control linked textiles to later programmable machine ideas.", "穿孔卡控制把纺织与后来可编程机器思想连接起来。"),
      e(1890, "Hollerith tabulators used in U.S. census", "霍列瑞斯制表机用于美国人口普查", "Americas", "United States", "Punched-card tabulation made large-scale data processing practical for bureaucracy.", "穿孔卡制表使官僚机构的大规模数据处理变得可行。")
    ],
    "computing-pc-02": [
      e(1943, "Colossus begins codebreaking work", "Colossus 开始密码破译工作", "Europe", "Bletchley Park / United Kingdom", "Electronic computing accelerated wartime codebreaking and specialized machine design.", "电子计算加速战时密码破译和专用机器设计。"),
      e(1945, "ENIAC completed", "ENIAC 完成", "Americas", "United States", "ENIAC demonstrated large-scale electronic computation for military calculation.", "ENIAC 展示用于军事计算的大规模电子计算。"),
      e(1946, "Von Neumann architecture report circulates", "冯·诺依曼体系结构报告流传", "Americas", "United States", "Stored-program ideas shaped later general-purpose computers.", "存储程序思想塑造后来的通用计算机。")
    ],
    "computing-pc-03": [
      e(1951, "UNIVAC I delivered", "UNIVAC I 交付", "Americas", "United States", "Commercial electronic computing entered government and business administration.", "商业电子计算进入政府和商业行政。"),
      e(1964, "IBM System/360 announced", "IBM System/360 发布", "Americas", "United States", "Compatible mainframe families made institutional computing more standardized.", "兼容大型机系列使制度性计算更加标准化。"),
      e(1969, "Unix development begins", "Unix 开发开始", "Americas", "Bell Labs / United States", "Unix shaped multiuser computing, software portability, and later networked systems.", "Unix 塑造多用户计算、软件可移植性和后来的联网系统。")
    ],
    "computing-pc-04": [
      e(1965, "PDP-8 introduced", "PDP-8 发布", "Americas", "United States", "Minicomputers lowered the cost and size of institutional computing.", "小型机降低制度性计算的成本和体积。"),
      e(1975, "Altair 8800 sparks hobbyist microcomputing", "Altair 8800 激发爱好者微型计算", "Americas", "United States", "The Altair 8800 helped popularize microcomputer kits and hobbyist computing communities.", "Altair 8800 帮助普及微型计算机套件和爱好者计算社群。"),
      e(1976, "Homebrew Computer Club grows", "家酿计算机俱乐部发展", "Americas", "California / United States", "Hobbyist networks shared designs, software, and visions of personal computing.", "爱好者网络分享设计、软件和个人计算愿景。")
    ],
    "computing-pc-05": [
      e(1977, "Apple II released", "Apple II 发布", "Americas", "United States", "The Apple II helped bring personal computers to homes, schools, and small businesses.", "Apple II 帮助个人电脑进入家庭、学校和小型企业。"),
      e(1981, "IBM PC released", "IBM PC 发布", "Americas", "United States", "The IBM PC standardized a mass-market platform and a wider compatible ecosystem.", "IBM PC 标准化大众市场平台和更广泛兼容生态。"),
      e(1984, "Macintosh introduced", "Macintosh 发布", "Americas", "United States", "The Macintosh brought graphical interfaces and mouse interaction to a broader public.", "Macintosh 把图形界面和鼠标交互带给更广泛公众。")
    ],
    "computing-pc-06": [
      e(1985, "Microsoft Windows 1.0 released", "Microsoft Windows 1.0 发布", "Americas", "United States", "Windows began bringing graphical operating environments to IBM-compatible PCs.", "Windows 开始把图形化操作环境带向 IBM 兼容 PC。"),
      e(1989, "Microsoft Office introduced", "Microsoft Office 推出", "Americas", "United States", "Bundled productivity software made the PC central to office work.", "捆绑生产力软件使 PC 成为办公工作的核心。"),
      e(1995, "Windows 95 released", "Windows 95 发布", "Americas", "United States", "Windows 95 made graphical home and office computing a mass-market norm.", "Windows 95 使图形化家庭与办公计算成为大众市场常态。")
    ],
    "computing-pc-07": [
      e(2007, "iPhone introduced", "iPhone 发布", "Americas", "California / United States", "The smartphone shifted personal computing toward touch, sensors, apps, and mobility.", "智能手机把个人计算转向触控、传感器、应用和移动性。"),
      e(2010, "iPad released", "iPad 发布", "Americas", "United States", "Tablet computing reframed personal devices for media, education, and lightweight work.", "平板计算重新定义面向媒体、教育和轻量工作的个人设备。"),
      e(2011, "iCloud launched", "iCloud 上线", "Americas", "United States", "Cloud services tied personal devices to synchronized storage and networked identity.", "云服务把个人设备连接到同步存储和网络身份。")
    ],
    "computing-pc-08": [
      e(2020, "Apple M1 Macs released", "苹果 M1 Mac 发布", "Americas", "United States", "Integrated chips changed performance, battery life, and personal computer design.", "集成芯片改变性能、电池续航和个人电脑设计。"),
      e(2022, "ChatGPT released publicly", "ChatGPT 公开发布", "Americas", "Online AI systems", "Generative AI entered everyday writing, coding, search, and personal productivity.", "生成式 AI 进入日常写作、编程、搜索和个人生产力。"),
      e(2024, "AI PCs enter consumer marketing", "AI PC 进入消费市场宣传", "Americas", "Global computer industry", "Computer makers began selling local AI acceleration as a new personal computing category.", "电脑厂商开始把本地 AI 加速作为新的个人计算类别销售。")
    ],

    "networks-internet-01": [
      e(1837, "Cooke and Wheatstone telegraph patented", "库克与惠斯通电报获专利", "Europe", "United Kingdom", "Electrical signaling began compressing communication time across distance.", "电信号开始压缩远距离通信时间。"),
      e(1866, "Durable transatlantic telegraph cable completed", "稳定跨大西洋电报电缆完成", "Europe", "Atlantic cable / Britain and North America", "A reliable Atlantic cable compressed communication time between Europe and North America.", "可靠的大西洋电缆压缩欧洲与北美之间的通信时间。"),
      e(1871, "Indo-European Telegraph Line completed", "印度-欧洲电报线完成", "India", "India / Europe", "Telegraph infrastructure linked empire, markets, diplomacy, and news.", "电报基础设施连接帝国、市场、外交和新闻。")
    ],
    "networks-internet-02": [
      e(1876, "Bell patents the telephone", "贝尔电话获专利", "Americas", "United States", "Voice transmission turned electrical networks into a medium for direct conversation.", "语音传输把电气网络变成直接对话媒介。"),
      e(1891, "Strowger automatic telephone exchange patented", "斯特罗杰自动电话交换机获专利", "Americas", "United States", "Automatic switching reduced dependence on manual operators and scaled telephone networks.", "自动交换减少对人工接线员依赖并扩大电话网络。"),
      e(1915, "First transcontinental telephone call", "首次横贯美国电话通话", "Americas", "United States", "Long-distance voice networks linked cities, business, and national infrastructure.", "长途语音网络连接城市、商业和国家基础设施。")
    ],
    "networks-internet-03": [
      e(1965, "First wide-area computer network experiment", "首次广域计算机网络实验", "Americas", "United States", "Researchers connected computers over distance, testing ideas that led toward packet networks.", "研究者远距离连接计算机，测试通向分组网络的思想。"),
      e(1969, "ARPANET first nodes connected", "ARPANET 首批节点连接", "Americas", "California / United States", "The first ARPANET nodes made packet-switched research networking operational.", "首批 ARPANET 节点使分组交换研究网络开始运行。"),
      e(1971, "Email created for ARPANET", "ARPANET 电子邮件诞生", "Americas", "United States", "Email quickly became a central use of networked computing.", "电子邮件很快成为联网计算的核心用途。")
    ],
    "networks-internet-04": [
      e(1974, "TCP described by Cerf and Kahn", "瑟夫与卡恩描述 TCP", "Americas", "United States", "TCP proposed a way to interconnect different packet networks.", "TCP 提出连接不同分组网络的方法。"),
      e(1983, "ARPANET transitions to TCP/IP", "ARPANET 转向 TCP/IP", "Americas", "United States", "The protocol transition became a foundational moment for internet interoperability.", "协议转换成为互联网互操作性的基础时刻。"),
      e(1988, "NSFNET backbone upgraded", "NSFNET 主干网升级", "Americas", "United States", "Academic networking expanded capacity and connected more institutions before the public web.", "学术网络在公共网页出现前扩大容量并连接更多机构。")
    ],
    "networks-internet-05": [
      e(1989, "World Wide Web proposed", "万维网提案提出", "Europe", "CERN / Switzerland", "Berners-Lee proposed linked documents as a way to organize networked information.", "伯纳斯-李提出用链接文档组织联网信息。"),
      e(1991, "World Wide Web opens publicly", "万维网公开开放", "Europe", "CERN / global internet", "Public web access made pages and hyperlinks available beyond the original laboratory.", "公共网页访问让页面和超链接走出最初实验室。"),
      e(1993, "Mosaic browser released", "Mosaic 浏览器发布", "Americas", "NCSA / United States", "Mosaic made web browsing visual, approachable, and important to non-specialist users.", "Mosaic 让网页浏览变得视觉化、易接近，并面向非专业用户。")
    ],
    "networks-internet-06": [
      e(1998, "Google founded", "Google 成立", "Americas", "California / United States", "Search became a central interface for navigating the expanding web.", "搜索成为导航不断扩张网页的核心界面。"),
      e(2004, "Facebook launches", "Facebook 上线", "Americas", "Harvard / United States", "Social networking turned personal identity and relationships into web platform data.", "社交网络把个人身份和关系转化为网页平台数据。"),
      e(2006, "Amazon Web Services launches", "亚马逊云服务上线", "Americas", "United States", "Cloud infrastructure turned computing resources into on-demand network services.", "云基础设施把计算资源转化为按需网络服务。")
    ],
    "networks-internet-07": [
      e(2007, "iPhone introduced", "iPhone 发布", "Americas", "California / United States", "Smartphones made internet access portable, touch-based, and constant.", "智能手机让互联网接入变得便携、触控化和持续在线。"),
      e(2009, "WhatsApp launches", "WhatsApp 上线", "Americas", "United States", "Mobile messaging shifted communication toward app-based global networks.", "移动消息把通信转向基于应用的全球网络。"),
      e(2016, "TikTok/Douyin launches", "抖音 / TikTok 上线", "China", "China / global platforms", "Short-video platforms tied mobile internet to algorithmic entertainment and social attention.", "短视频平台把移动互联网连接到算法娱乐和社交注意力。")
    ],
    "networks-internet-08": [
      e(2006, "Amazon Web Services launches", "亚马逊云服务上线", "Americas", "United States", "Cloud infrastructure made remote computing power a general-purpose platform service.", "云基础设施使远程计算能力成为通用平台服务。"),
      e(2007, "Netflix begins streaming", "Netflix 开始流媒体服务", "Americas", "United States", "Streaming media shifted entertainment delivery toward cloud platforms and broadband networks.", "流媒体把娱乐分发转向云平台和宽带网络。"),
      e(2022, "ChatGPT released publicly", "ChatGPT 公开发布", "Americas", "Online AI systems", "AI services showed how cloud infrastructure, data, and interfaces could deliver networked intelligence.", "AI 服务显示云基础设施、数据和界面如何提供联网智能。")
    ],

    "software-os-01": [
      e(1948, "Manchester Baby runs first stored-program test", "曼彻斯特 Baby 运行首个存储程序测试", "Europe", "Manchester / United Kingdom", "The Manchester Baby demonstrated that electronic instructions could be stored in memory and executed by the machine.", "曼彻斯特 Baby 展示了电子指令可以被存入内存并由机器执行。"),
      e(1949, "EDSAC runs first practical stored-program workloads", "EDSAC 运行早期实用存储程序", "Europe", "Cambridge / United Kingdom", "EDSAC showed stored-program computing as a practical service for scientific calculation.", "EDSAC 显示存储程序计算可以作为科学计算的实用服务。"),
      e(1951, "UNIVAC I delivered to the U.S. Census Bureau", "UNIVAC I 交付美国人口普查局", "Americas", "United States", "UNIVAC I made electronic data processing visible as a governmental and commercial software problem.", "UNIVAC I 让电子数据处理成为政府与商业软件问题。")
    ],
    "software-os-02": [
      e(1957, "FORTRAN compiler released", "FORTRAN 编译器发布", "Americas", "United States", "FORTRAN made high-level programming practical for scientific and engineering users.", "FORTRAN 让科学与工程用户能够实际使用高级语言编程。"),
      e(1959, "COBOL design begins", "COBOL 设计启动", "Americas", "United States", "COBOL made business data processing a central software domain for institutions.", "COBOL 使商业数据处理成为机构软件的核心领域。"),
      e(1964, "IBM System/360 announced", "IBM System/360 发布", "Americas", "United States", "System/360 tied operating systems, compatibility, and enterprise software to a major hardware platform.", "System/360 把操作系统、兼容性和企业软件绑定到大型硬件平台上。")
    ],
    "software-os-03": [
      e(1969, "Unix development begins at Bell Labs", "Unix 在贝尔实验室开始开发", "Americas", "United States", "Unix introduced a portable, multiuser operating system culture built around tools, files, and composable programs.", "Unix 开启了围绕工具、文件和可组合程序建立的可移植多用户操作系统文化。"),
      e(1972, "C programming language developed", "C 语言形成", "Americas", "United States", "C helped make system software portable across machines while staying close to hardware.", "C 语言帮助系统软件在贴近硬件的同时跨机器移植。"),
      e(1978, "The C Programming Language published", "《C 程序设计语言》出版", "Americas", "United States", "Kernighan and Ritchie's book standardized C style and spread Unix-oriented programming practice.", "Kernighan 与 Ritchie 的著作标准化了 C 风格并传播 Unix 式编程实践。")
    ],
    "software-os-04": [
      e(1981, "MS-DOS ships with the IBM PC", "MS-DOS 随 IBM PC 发售", "Americas", "United States", "MS-DOS became a dominant operating environment for IBM-compatible personal computers.", "MS-DOS 成为 IBM 兼容个人电脑的主导操作环境。"),
      e(1985, "Microsoft Windows 1.0 released", "Microsoft Windows 1.0 发布", "Americas", "United States", "Windows 1.0 marked an early step toward graphical operating environments on mass-market PCs.", "Windows 1.0 标志大众 PC 图形化操作环境的早期一步。"),
      e(1990, "Windows 3.0 released", "Windows 3.0 发布", "Americas", "United States", "Windows 3.0 helped make graphical PC software commercially mainstream.", "Windows 3.0 帮助图形化 PC 软件进入商业主流。")
    ],
    "software-os-05": [
      e(1991, "Linux kernel announced", "Linux 内核发布", "Europe", "Finland", "Linux showed how open collaboration could build core operating-system infrastructure.", "Linux 显示开放协作也能构建核心操作系统基础设施。"),
      e(1995, "Apache HTTP Server released", "Apache HTTP Server 发布", "Americas", "United States / internet communities", "Apache became foundational open-source web server software for the early web.", "Apache 成为早期网页的重要开源服务器软件。"),
      e(2005, "Git released", "Git 发布", "Europe", "Finland / global open source", "Git changed distributed software collaboration and became central to open-source development.", "Git 改变了分布式软件协作，并成为开源开发的核心工具。")
    ],
    "software-os-06": [
      e(2007, "iPhone introduced", "iPhone 发布", "Americas", "California / United States", "The iPhone turned mobile software into a mass-market platform for touch interfaces and networked apps.", "iPhone 把移动软件变成触控界面和联网应用的大众平台。"),
      e(2008, "Apple App Store launches", "Apple App Store 上线", "Americas", "United States", "The App Store standardized mobile app distribution, payment, review, and developer ecosystems.", "App Store 标准化了移动应用分发、支付、审核和开发者生态。"),
      e(2008, "Android 1.0 released", "Android 1.0 发布", "Americas", "United States / global mobile industry", "Android made smartphone software a multi-vendor platform tied to mobile internet services.", "Android 让智能手机软件成为连接移动互联网服务的多厂商平台。")
    ],
    "software-os-07": [
      e(2013, "Docker released", "Docker 发布", "Americas", "United States", "Docker popularized containerized software packaging for development and deployment.", "Docker 推广了用于开发与部署的容器化软件打包方式。"),
      e(2014, "Kubernetes announced", "Kubernetes 发布", "Americas", "United States", "Kubernetes made container orchestration a foundation for cloud-native platform engineering.", "Kubernetes 让容器编排成为云原生平台工程的基础。"),
      e(2019, "GitHub Actions launches", "GitHub Actions 上线", "Americas", "United States", "GitHub Actions folded CI/CD automation into everyday repository workflows.", "GitHub Actions 把 CI/CD 自动化嵌入日常代码仓库流程。")
    ],
    "software-os-08": [
      e(2021, "GitHub Copilot technical preview begins", "GitHub Copilot 技术预览开始", "Americas", "United States", "Copilot brought code completion based on large language models into mainstream developer tools.", "Copilot 把基于大语言模型的代码补全带入主流开发工具。"),
      e(2022, "ChatGPT released publicly", "ChatGPT 公开发布", "Americas", "Online AI systems", "ChatGPT made conversational programming help and code explanation visible to broad audiences.", "ChatGPT 让对话式编程帮助和代码解释进入广泛用户视野。"),
      e(2023, "GPT-4 released", "GPT-4 发布", "Americas", "Online AI systems", "GPT-4 strengthened AI-assisted software work across debugging, explanation, refactoring, and prototyping.", "GPT-4 强化了 AI 在调试、解释、重构和原型开发中的辅助作用。")
    ],

    "databases-information-systems-01": [
      e(1890, "Hollerith tabulating machines used in U.S. census", "霍勒里斯制表机用于美国人口普查", "Americas", "United States", "Punched-card tabulation made administrative data processing faster and more mechanized.", "穿孔卡制表让行政数据处理更快、更机械化。"),
      e(1935, "IBM Social Security contract begins", "IBM 承接美国社保数据处理", "Americas", "United States", "Large administrative programs turned information processing into a core institutional technology.", "大型行政项目让信息处理成为机构核心技术。"),
      e(1951, "UNIVAC I delivered to the U.S. Census Bureau", "UNIVAC I 交付美国人口普查局", "Americas", "United States", "Electronic computing moved administrative records from punched cards toward programmable data processing.", "电子计算把行政记录从穿孔卡推向可编程数据处理。")
    ],
    "databases-information-systems-02": [
      e(1970, "Codd publishes relational model paper", "科德发表关系模型论文", "Americas", "United States", "The relational model separated logical data structure from physical storage and reshaped database theory.", "关系模型把逻辑数据结构与物理存储分离，重塑数据库理论。"),
      e(1974, "IBM System R project begins", "IBM System R 项目启动", "Americas", "United States", "System R explored relational database implementation and helped develop SQL practice.", "System R 探索关系数据库实现，并推动 SQL 实践形成。"),
      e(1976, "Entity-relationship model published", "实体关系模型发表", "Americas", "United States", "The ER model gave designers a conceptual way to model entities, relationships, and information systems.", "ER 模型为实体、关系和信息系统设计提供了概念建模方法。")
    ],
    "databases-information-systems-03": [
      e(1979, "Oracle releases first commercial SQL database", "Oracle 发布首个商业 SQL 数据库", "Americas", "United States", "Oracle helped turn relational database theory into enterprise software business.", "Oracle 帮助把关系数据库理论转化为企业软件业务。"),
      e(1983, "IBM DB2 released", "IBM DB2 发布", "Americas", "United States", "DB2 made relational databases a central part of enterprise mainframe computing.", "DB2 让关系数据库成为企业大型机计算的核心组成。"),
      e(1989, "Microsoft SQL Server 1.0 released", "Microsoft SQL Server 1.0 发布", "Americas", "United States", "SQL Server tied relational databases to the growing PC server and enterprise software market.", "SQL Server 把关系数据库连接到增长中的 PC 服务器和企业软件市场。")
    ],
    "databases-information-systems-04": [
      e(1992, "SAP R/3 released", "SAP R/3 发布", "Europe", "Germany", "SAP R/3 integrated finance, logistics, human resources, and operations into enterprise information systems.", "SAP R/3 把财务、物流、人力和运营整合进企业信息系统。"),
      e(1999, "Salesforce founded", "Salesforce 成立", "Americas", "United States", "Salesforce made CRM a web-delivered enterprise information system.", "Salesforce 让客户关系管理成为通过网页交付的企业信息系统。"),
      e(2000, "ERP adoption accelerates after Y2K remediation", "Y2K 修复后 ERP 采用加速", "Americas", "Global enterprise IT", "Y2K work pushed many organizations to inventory, replace, and integrate core information systems.", "Y2K 工作推动许多组织盘点、替换并整合核心信息系统。")
    ],
    "databases-information-systems-05": [
      e(1996, "Teradata reaches terabyte-scale warehouse", "Teradata 达到 TB 级数据仓库", "Americas", "United States", "Large data warehouses made historical business data a resource for analysis and decision support.", "大型数据仓库让历史业务数据成为分析与决策支持资源。"),
      e(2006, "Amazon Redshift precursor cloud data warehouse work begins", "云数据仓库商业化前奏出现", "Americas", "United States", "Cloud infrastructure began changing expectations for scalable analytical databases.", "云基础设施开始改变可扩展分析数据库的预期。"),
      e(2012, "Amazon Redshift announced", "Amazon Redshift 发布", "Americas", "United States", "Redshift helped popularize cloud data warehousing as a managed service.", "Redshift 帮助把云数据仓库作为托管服务推广。")
    ],
    "databases-information-systems-06": [
      e(2006, "Google Bigtable paper published", "Google Bigtable 论文发表", "Americas", "United States", "Bigtable showed how web-scale services could organize sparse, distributed data.", "Bigtable 展示了网络规模服务如何组织稀疏分布式数据。"),
      e(2009, "MongoDB released", "MongoDB 发布", "Americas", "United States", "MongoDB popularized document databases for flexible web application data.", "MongoDB 推广了适合灵活 Web 应用数据的文档数据库。"),
      e(2012, "Amazon DynamoDB launched", "Amazon DynamoDB 上线", "Americas", "United States", "DynamoDB brought managed NoSQL databases into mainstream cloud application architecture.", "DynamoDB 把托管 NoSQL 数据库带入主流云应用架构。")
    ],
    "databases-information-systems-07": [
      e(2011, "Apache Kafka open sourced", "Apache Kafka 开源", "Americas", "United States", "Kafka made event streams and log-based data movement central to modern data platforms.", "Kafka 让事件流和基于日志的数据流动成为现代数据平台核心。"),
      e(2014, "Apache Spark becomes a top-level Apache project", "Apache Spark 成为 Apache 顶级项目", "Americas", "United States", "Spark helped unify big data processing, SQL, streaming, and machine learning workflows.", "Spark 帮助统一大数据处理、SQL、流处理和机器学习工作流。"),
      e(2020, "Snowflake goes public", "Snowflake 上市", "Americas", "United States", "Snowflake signaled the commercial rise of cloud-native data platforms.", "Snowflake 上市标志云原生数据平台的商业崛起。")
    ],
    "databases-information-systems-08": [
      e(2019, "Milvus vector database released", "Milvus 向量数据库发布", "China", "China / open source", "Milvus made vector search infrastructure visible as AI applications needed similarity retrieval.", "Milvus 让向量检索基础设施随着 AI 应用的相似性检索需求变得可见。"),
      e(2021, "Pinecone launches managed vector database", "Pinecone 推出托管向量数据库", "Americas", "United States", "Managed vector databases turned embeddings into application infrastructure.", "托管向量数据库把嵌入向量变成应用基础设施。"),
      e(2023, "Vector search added to major cloud databases", "主流云数据库加入向量搜索", "Americas", "Global cloud platforms", "Vector search moved from specialized systems toward ordinary database and cloud products.", "向量搜索从专用系统进入常规数据库和云产品。")
    ],

    "cybersecurity-01": [
      e(1940, "Bombe codebreaking machines deployed", "Bombe 破译机器投入使用", "Europe", "Bletchley Park / United Kingdom", "Electromechanical codebreaking made cryptanalysis an industrial and military information process.", "机电破译让密码分析成为工业化、军事化的信息处理过程。"),
      e(1943, "Colossus becomes operational", "Colossus 投入运行", "Europe", "Bletchley Park / United Kingdom", "Colossus used electronic computation to attack encrypted wartime communications.", "Colossus 使用电子计算攻击战时加密通信。"),
      e(1949, "Shannon publishes Communication Theory of Secrecy Systems", "香农发表保密系统通信理论", "Americas", "United States", "Shannon gave cryptography a mathematical information-theoretic foundation.", "香农为密码学提供了数学化的信息论基础。")
    ],
    "cybersecurity-02": [
      e(1965, "Multics security design begins", "Multics 安全设计启动", "Americas", "United States", "Multics explored access control, rings, and time-sharing security for shared computers.", "Multics 探索共享计算机的访问控制、保护环和分时安全。"),
      e(1972, "Anderson Report on computer security published", "安德森计算机安全报告发表", "Americas", "United States", "The report framed computer security as a problem of policy, access, audit, and system design.", "报告把计算机安全定义为政策、访问、审计和系统设计问题。"),
      e(1983, "Orange Book published", "《橙皮书》发布", "Americas", "United States", "The Orange Book formalized trusted computer system evaluation criteria.", "《橙皮书》形式化了可信计算机系统评估标准。")
    ],
    "cybersecurity-03": [
      e(1988, "Morris Worm spreads across the internet", "Morris 蠕虫在互联网传播", "Americas", "United States", "The worm exposed the fragility of connected Unix systems and made internet security a public issue.", "这条蠕虫暴露联网 Unix 系统的脆弱性，并让互联网安全成为公共议题。"),
      e(1988, "CERT Coordination Center established", "CERT 协调中心成立", "Americas", "United States", "CERT institutionalized vulnerability response and incident coordination for networked computing.", "CERT 把漏洞响应和事件协调制度化。"),
      e(1995, "SATAN security scanner released", "SATAN 安全扫描器发布", "Americas", "United States", "Automated scanning made vulnerability assessment more visible and controversial.", "自动化扫描让漏洞评估更可见，也更具争议。")
    ],
    "cybersecurity-04": [
      e(1976, "Diffie and Hellman publish public-key cryptography", "迪菲与赫尔曼发表公钥密码学", "Americas", "United States", "Public-key cryptography changed how strangers could establish secrets over open networks.", "公钥密码学改变了陌生双方如何在开放网络上建立秘密。"),
      e(1977, "RSA cryptosystem published", "RSA 密码系统发表", "Americas", "United States", "RSA gave public-key cryptography a widely taught and deployed mathematical form.", "RSA 为公钥密码学提供了广泛教学和部署的数学形式。"),
      e(1994, "Netscape introduces SSL", "Netscape 引入 SSL", "Americas", "United States", "SSL helped make encrypted web commerce and authentication practical for browsers.", "SSL 让浏览器中的加密商业和身份认证变得可行。")
    ],
    "cybersecurity-05": [
      e(2000, "ILOVEYOU worm spreads globally", "ILOVEYOU 蠕虫全球传播", "Asia", "Philippines / global networks", "The worm showed how email, social engineering, and weak defaults could create global damage.", "这条蠕虫显示电子邮件、社会工程和脆弱默认设置如何造成全球破坏。"),
      e(2008, "Conficker worm begins spreading", "Conficker 蠕虫开始传播", "Americas", "Global Windows networks", "Conficker demonstrated the scale of botnet-era malware across unpatched systems.", "Conficker 展示了僵尸网络时代恶意软件在未修补系统中的规模。"),
      e(2013, "Target data breach disclosed", "Target 数据泄露披露", "Americas", "United States", "The breach made payment-card theft and third-party access risk visible to major retailers.", "这次泄露让支付卡盗窃和第三方访问风险进入大型零售商视野。")
    ],
    "cybersecurity-06": [
      e(2010, "Stuxnet discovered", "Stuxnet 被发现", "Middle East", "Iran / industrial control systems", "Stuxnet showed malware could target physical infrastructure and industrial control systems.", "Stuxnet 显示恶意软件可以攻击物理基础设施和工业控制系统。"),
      e(2013, "Snowden disclosures begin", "斯诺登披露开始", "Americas", "United States / global networks", "The disclosures made state surveillance, encryption, and platform cooperation central public issues.", "披露让国家监控、加密和平台合作成为核心公共议题。"),
      e(2015, "Ukraine power grid cyberattack", "乌克兰电网遭网络攻击", "Europe", "Ukraine", "The attack demonstrated cyber operations against civilian energy infrastructure.", "这次攻击展示了针对民用能源基础设施的网络行动。")
    ],
    "cybersecurity-07": [
      e(2017, "WannaCry ransomware outbreak", "WannaCry 勒索软件爆发", "Europe", "Global Windows networks", "WannaCry showed how ransomware could scale through leaked exploits and unpatched systems.", "WannaCry 显示勒索软件如何借助泄露漏洞和未修补系统大规模扩散。"),
      e(2020, "SolarWinds compromise disclosed", "SolarWinds 供应链攻击披露", "Americas", "United States", "The incident made software supply-chain compromise a central security concern.", "这次事件让软件供应链攻击成为核心安全问题。"),
      e(2021, "Colonial Pipeline ransomware attack", "Colonial Pipeline 勒索攻击", "Americas", "United States", "The attack linked ransomware to fuel distribution, infrastructure disruption, and public policy.", "这次攻击把勒索软件与燃料配送、基础设施中断和公共政策连接起来。")
    ],
    "cybersecurity-08": [
      e(2020, "NIST zero trust architecture published", "NIST 零信任架构发布", "Americas", "United States", "Zero trust reframed security around continuous verification rather than fixed network perimeters.", "零信任把安全从固定网络边界转向持续验证。"),
      e(2021, "U.S. executive order mandates zero-trust planning", "美国行政令要求零信任规划", "Americas", "United States", "Federal policy pushed zero trust, software supply-chain security, and incident reporting into procurement practice.", "联邦政策把零信任、软件供应链安全和事件报告推入采购实践。"),
      e(2023, "SEC cybersecurity disclosure rules adopted", "美国 SEC 网络安全披露规则通过", "Americas", "United States", "Cyber risk became more tightly linked to corporate governance and public reporting.", "网络风险更紧密地连接到公司治理和公开披露。")
    ],

    "ai-ml-01": [
      e(1936, "Turing publishes On Computable Numbers", "图灵发表《论可计算数》", "Europe", "United Kingdom", "Turing formalized computation as a mathematical process and set foundations for later AI theory.", "图灵把计算形式化为数学过程，为后来的 AI 理论奠定基础。"),
      e(1943, "McCulloch and Pitts model artificial neurons", "麦卡洛克与皮茨提出人工神经元模型", "Americas", "United States", "Their model linked logic, nervous systems, and computation in early neural-network thinking.", "他们的模型把逻辑、神经系统和计算连接进早期神经网络思想。"),
      e(1950, "Turing proposes the imitation game", "图灵提出模仿游戏", "Europe", "United Kingdom", "Turing reframed machine intelligence as observable conversational behavior.", "图灵把机器智能重新表述为可观察的对话行为。")
    ],
    "ai-ml-02": [
      e(1956, "Dartmouth AI workshop convenes", "达特茅斯 AI 研讨会召开", "Americas", "United States", "The workshop helped name artificial intelligence as a research field.", "这次研讨会帮助把人工智能命名为一个研究领域。"),
      e(1958, "Perceptron announced", "感知机发布", "Americas", "United States", "The perceptron made machine learning from examples a public research ambition.", "感知机让从样本学习的机器学习成为公开研究愿景。"),
      e(1966, "ELIZA chatbot described", "ELIZA 聊天程序被描述", "Americas", "United States", "ELIZA showed how simple language rules could create the appearance of conversation.", "ELIZA 显示简单语言规则也能制造对话表象。")
    ],
    "ai-ml-03": [
      e(1972, "MYCIN expert system work begins", "MYCIN 专家系统研究开始", "Americas", "United States", "MYCIN showed how rule-based systems could encode specialist medical reasoning.", "MYCIN 显示规则系统可以编码医学专家推理。"),
      e(1980, "XCON expert system deployed at DEC", "DEC 部署 XCON 专家系统", "Americas", "United States", "XCON made expert systems commercially persuasive for configuration tasks.", "XCON 让专家系统在配置任务中具有商业说服力。"),
      e(1987, "Expert systems market downturn begins", "专家系统市场降温开始", "Americas", "United States / Japan", "Maintenance costs and brittle rules exposed limits of knowledge-engineering approaches.", "维护成本和脆弱规则暴露知识工程方法的限制。")
    ],
    "ai-ml-04": [
      e(1997, "Deep Blue defeats Garry Kasparov", "深蓝击败卡斯帕罗夫", "Americas", "United States", "The match showed the power of search, evaluation, and specialized hardware in symbolic game AI.", "这场比赛显示搜索、评估和专用硬件在符号式游戏 AI 中的力量。"),
      e(2006, "Netflix Prize begins", "Netflix Prize 开始", "Americas", "United States", "The competition popularized recommender systems and large-scale predictive modeling.", "这项竞赛推广了推荐系统和大规模预测建模。"),
      e(2010, "ImageNet Large Scale Visual Recognition Challenge begins", "ImageNet 大规模视觉识别竞赛开始", "Americas", "United States / global research", "ImageNet gave computer vision a benchmark dataset and competition culture.", "ImageNet 为计算机视觉提供基准数据集和竞赛文化。")
    ],
    "ai-ml-05": [
      e(2012, "AlexNet wins ImageNet", "AlexNet 赢得 ImageNet", "Americas", "Canada / global AI research", "AlexNet made deep convolutional networks central to modern computer vision.", "AlexNet 让深度卷积网络成为现代计算机视觉核心。"),
      e(2016, "AlphaGo defeats Lee Sedol", "AlphaGo 击败李世石", "Asia", "South Korea", "AlphaGo made deep reinforcement learning and neural search visible to a global public.", "AlphaGo 让深度强化学习和神经搜索进入全球公众视野。"),
      e(2017, "AlphaGo Zero announced", "AlphaGo Zero 发布", "Europe", "United Kingdom", "AlphaGo Zero emphasized self-play and learning without human game records.", "AlphaGo Zero 强调自我对弈和不依赖人类棋谱的学习。")
    ],
    "ai-ml-06": [
      e(2017, "Transformer paper published", "Transformer 论文发表", "Americas", "United States / global AI research", "The transformer architecture reshaped language models through attention and scalable training.", "Transformer 架构通过注意力机制和可扩展训练重塑语言模型。"),
      e(2018, "BERT released", "BERT 发布", "Americas", "United States", "BERT made pretraining and fine-tuning a standard pattern in language AI.", "BERT 让预训练与微调成为语言 AI 的标准模式。"),
      e(2020, "GPT-3 announced", "GPT-3 发布", "Americas", "United States", "GPT-3 showed that scale could produce broad few-shot language capabilities.", "GPT-3 显示规模化可以产生广泛的少样本语言能力。")
    ],
    "ai-ml-07": [
      e(2022, "ChatGPT released publicly", "ChatGPT 公开发布", "Americas", "Online AI systems", "ChatGPT made generative AI a mass consumer and workplace technology.", "ChatGPT 让生成式 AI 成为大众消费和工作技术。"),
      e(2023, "GPT-4 released", "GPT-4 发布", "Americas", "Online AI systems", "GPT-4 strengthened multimodal and reasoning-like uses of foundation models.", "GPT-4 强化了基础模型的多模态和类推理用途。"),
      e(2024, "Open-source multimodal model releases accelerate", "开源多模态模型发布加速", "Global", "Global AI communities", "Open releases made generative AI experimentation less dependent on a few closed platforms.", "开源发布让生成式 AI 实验不再完全依赖少数封闭平台。")
    ],
    "ai-ml-08": [
      e(2023, "U.S. executive order on AI issued", "美国 AI 行政令发布", "Americas", "United States", "The order pushed safety testing, standards, and federal coordination for advanced AI systems.", "该行政令推动高级 AI 系统的安全测试、标准和联邦协调。"),
      e(2024, "EU AI Act approved", "欧盟 AI 法案通过", "Europe", "European Union", "The act made risk-based AI regulation a major legal framework for deployment.", "该法案让基于风险的 AI 监管成为部署的重要法律框架。"),
      e(2024, "AI safety institutes coordinate testing", "AI 安全机构协调测试", "Europe", "United Kingdom / United States / international partners", "Safety institutes began turning frontier model evaluation into public institutional practice.", "安全机构开始把前沿模型评估转化为公共制度实践。")
    ],

    "semiconductors-hardware-01": [
      e(1943, "Colossus becomes operational", "Colossus 投入运行", "Europe", "Bletchley Park / United Kingdom", "Colossus used vacuum tubes at scale for electronic wartime computation.", "Colossus 大规模使用真空管进行战时电子计算。"),
      e(1945, "ENIAC completed", "ENIAC 完成", "Americas", "United States", "ENIAC showed electronic computation could operate at unprecedented speed, though with difficult programming.", "ENIAC 显示电子计算可以以前所未有的速度运行，尽管编程困难。"),
      e(1946, "ENIAC publicly dedicated", "ENIAC 公开展示", "Americas", "United States", "The public demonstration made electronic computing visible as a new technological field.", "公开展示让电子计算作为新技术领域进入公众视野。")
    ],
    "semiconductors-hardware-02": [
      e(1947, "Transistor demonstrated at Bell Labs", "贝尔实验室展示晶体管", "Americas", "United States", "The transistor opened a path away from bulky vacuum tubes toward solid-state electronics.", "晶体管开启了从笨重真空管走向固态电子的道路。"),
      e(1954, "First transistor radio sold", "首批晶体管收音机销售", "Americas", "United States / Japan", "Portable consumer electronics made transistor miniaturization commercially visible.", "便携消费电子让晶体管小型化的商业价值变得可见。"),
      e(1956, "Transistor inventors receive Nobel Prize", "晶体管发明者获诺贝尔奖", "Americas", "United States", "The prize recognized the transistor as a foundational scientific and technological breakthrough.", "这一奖项确认晶体管是基础性的科学与技术突破。")
    ],
    "semiconductors-hardware-03": [
      e(1958, "Kilby demonstrates integrated circuit", "基尔比展示集成电路", "Americas", "United States", "The integrated circuit joined multiple components on one substrate and changed electronic scaling.", "集成电路把多个元件放在同一基底上，改变电子缩放路径。"),
      e(1959, "Noyce planar integrated circuit developed", "诺伊斯平面集成电路形成", "Americas", "United States", "The planar process made integrated circuits more manufacturable and scalable.", "平面工艺让集成电路更易制造和扩展。"),
      e(1965, "Moore's Law proposed", "摩尔定律提出", "Americas", "United States", "Moore's observation became a guiding expectation for semiconductor scaling.", "摩尔的观察成为半导体缩放的指导性预期。")
    ],
    "semiconductors-hardware-04": [
      e(1971, "Intel 4004 microprocessor released", "Intel 4004 微处理器发布", "Americas", "United States", "The 4004 placed a programmable processor on a single chip and opened microprocessor markets.", "4004 把可编程处理器放到单芯片上，开启微处理器市场。"),
      e(1975, "Altair 8800 sparks hobbyist microcomputing", "Altair 8800 推动爱好者微机热潮", "Americas", "United States", "The Altair showed how microprocessors could support personal experimentation and software communities.", "Altair 显示微处理器可以支撑个人实验和软件社群。"),
      e(1981, "IBM PC introduced", "IBM PC 发布", "Americas", "United States", "The IBM PC standardized commodity microcomputer hardware for business and home markets.", "IBM PC 为商业和家庭市场标准化了商品化微机硬件。")
    ],
    "semiconductors-hardware-05": [
      e(1985, "ARM architecture project begins", "ARM 架构项目启动", "Europe", "United Kingdom", "ARM showed how reduced instruction set design could support efficient processors.", "ARM 显示精简指令集设计可以支撑高效处理器。"),
      e(1993, "Pentium processor released", "Pentium 处理器发布", "Americas", "United States", "Pentium became a mass-market symbol of PC processor performance.", "Pentium 成为大众市场 PC 处理器性能的象征。"),
      e(1996, "Nintendo 64 released", "Nintendo 64 发布", "Japan", "Japan / United States", "Consumer graphics hardware helped make specialized chips visible through games.", "消费级图形硬件通过游戏让专用芯片变得可见。")
    ],
    "semiconductors-hardware-06": [
      e(1987, "TSMC founded", "台积电成立", "China", "Taiwan / global semiconductor industry", "TSMC pioneered the dedicated foundry model that separated chip design from manufacturing.", "台积电开创专门代工模式，把芯片设计与制造分离。"),
      e(1991, "Linux begins on commodity PC hardware", "Linux 在通用 PC 硬件上启动", "Europe", "Finland / global PC ecosystem", "Open software and commodity hardware together reshaped computing platforms.", "开放软件与通用硬件共同重塑计算平台。"),
      e(2007, "iPhone introduced", "iPhone 发布", "Americas", "California / United States", "Smartphones joined custom chips, sensors, radios, and software into handheld platforms.", "智能手机把定制芯片、传感器、无线电和软件整合进手持平台。")
    ],
    "semiconductors-hardware-07": [
      e(2006, "NVIDIA CUDA released", "NVIDIA CUDA 发布", "Americas", "United States", "CUDA opened GPUs to general-purpose parallel computing beyond graphics.", "CUDA 让 GPU 从图形扩展到通用并行计算。"),
      e(2010, "Apple A4 system-on-chip introduced", "Apple A4 系统级芯片发布", "Americas", "United States", "Mobile SoCs integrated CPU, graphics, memory control, and device-specific efficiency.", "移动 SoC 整合 CPU、图形、内存控制和设备效率。"),
      e(2012, "AlexNet wins ImageNet using GPUs", "AlexNet 借助 GPU 赢得 ImageNet", "Americas", "Canada / global AI research", "GPU acceleration helped make deep learning computationally practical.", "GPU 加速帮助深度学习在计算上变得可行。")
    ],
    "semiconductors-hardware-08": [
      e(2020, "Apple M1 chip introduced", "Apple M1 芯片发布", "Americas", "United States", "The M1 showed how custom ARM-based silicon could reshape personal computer performance and efficiency.", "M1 显示定制 ARM 芯片可以重塑个人电脑性能与能效。"),
      e(2022, "U.S. CHIPS and Science Act signed", "美国《芯片与科学法案》签署", "Americas", "United States", "Semiconductors became a major object of industrial policy and supply-chain strategy.", "半导体成为产业政策和供应链战略的主要对象。"),
      e(2023, "NVIDIA H100 demand surges for AI training", "NVIDIA H100 因 AI 训练需求激增", "Americas", "United States / global data centers", "AI accelerators became central infrastructure for training and deploying foundation models.", "AI 加速器成为训练和部署基础模型的核心基础设施。")
    ]
  };
  return seeds[phaseId]?.[index] || null;
}

function createCuratedPhaseEvent(node, index, seed) {
  const lensTitle = getLensTitle(node.lensId);
  const trackId = (node.trackIds || [])[0] || "";
  const track = trackId ? HISTORY_DATA.lensTracks.find((item) => item.id === trackId) : null;
  const sourceRefs = uniqueValues(seed.sourceRefs || seed.sources || node.sourceRefs || ["britannica", "wikidata"]);
  return {
    id: createCuratedEventId(seed, node, index),
    year: seed.year,
    title: seed.title,
    titleZh: seed.titleZh,
    region: seed.region,
    place: seed.place,
    categories: [lensTitle, ...(track ? [track.title] : [])],
    lensIds: [node.lensId],
    trackIds: trackId ? [trackId] : [],
    phaseIds: [node.id],
    primaryLensId: node.lensId,
    primaryTrackId: trackId || null,
    primaryPhaseId: node.id,
    eventType: "exact-event",
    scope: seed.scope || "representative exact event",
    importance: seed.importance || "supporting",
    summary: seed.summary,
    summaryZh: seed.summaryZh,
    sources: sourceRefs,
    sourceRefs,
    wikiPage: seed.wikiPage || "",
    wikidataId: seed.wikidataId || "",
    eventIntro: seed.eventIntro || "",
    eventIntroZh: seed.eventIntroZh || "",
    whyMatters: seed.whyMatters || "",
    whyMattersZh: seed.whyMattersZh || "",
    phaseRelation: seed.phaseRelation || "",
    phaseRelationZh: seed.phaseRelationZh || "",
    connectionHint: seed.connectionHint || "",
    connectionHintZh: seed.connectionHintZh || "",
    image: seed.image || "",
    imageAlt: seed.imageAlt || "",
    imageCaption: seed.imageCaption || "",
    imageCaptionZh: seed.imageCaptionZh || "",
    imageCredit: seed.imageCredit || "",
    imageSourceUrl: seed.imageSourceUrl || ""
  };
}

function createCuratedEventId(seed, node, index) {
  const slug = slugifyEventId(seed.id || seed.title || `${node.id}-${index + 1}`);
  const year = typeof seed.year === "number"
    ? (seed.year < 0 ? `${Math.abs(seed.year)}bce` : `${seed.year}`)
    : `${index + 1}`;
  return `event-${slug}-${year}`;
}

function slugifyEventId(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72) || "curated-event";
}

function findExistingCuratedEvent(candidate) {
  const titleKey = normalizeEventIdentity(candidate.title);
  return HISTORY_DATA.events.find((event) => (
    event.year === candidate.year
    && normalizeEventIdentity(event.title) === titleKey
  ));
}

function normalizeEventIdentity(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function mergeCuratedEventMetadata(existing, candidate) {
  existing.lensIds = uniqueValues([...(existing.lensIds || []), ...(candidate.lensIds || [])]);
  existing.trackIds = uniqueValues([...(existing.trackIds || []), ...(candidate.trackIds || [])]);
  existing.phaseIds = uniqueValues([...(existing.phaseIds || []), ...(candidate.phaseIds || [])]);
  existing.categories = uniqueValues([...(existing.categories || []), ...(candidate.categories || [])]);
  existing.sources = uniqueValues([...(existing.sources || []), ...(candidate.sources || [])]);
  existing.sourceRefs = uniqueValues([...(existing.sourceRefs || []), ...(candidate.sourceRefs || [])]);
  existing.titleZh = existing.titleZh || candidate.titleZh;
  existing.summaryZh = existing.summaryZh || candidate.summaryZh;
  existing.summary = existing.summary || candidate.summary;
  existing.primaryLensId = existing.primaryLensId || candidate.primaryLensId;
  existing.primaryTrackId = existing.primaryTrackId || candidate.primaryTrackId;
  existing.primaryPhaseId = existing.primaryPhaseId || candidate.primaryPhaseId;
  existing.eventType = existing.eventType === "representative-event" ? "exact-event" : (existing.eventType || "exact-event");
  existing.scope = existing.scope === "phase anchor" ? "representative exact event" : (existing.scope || candidate.scope);
  existing.importance = existing.importance || candidate.importance || "supporting";
}

function inferLensIdsFromCategories(categories = []) {
  const categoryMap = {
    War: "war-military",
    Military: "war-military",
    Politics: "state-empire",
    Empire: "state-empire",
    Economy: "economy-trade",
    Trade: "economy-trade",
    Religion: "religion-belief",
    Science: "science-technology",
    Technology: "science-technology",
    Art: "art",
    Literature: "literature",
    Fashion: "fashion-daily-life",
    Entertainment: "entertainment-media",
    Media: "entertainment-media",
    Disaster: "disaster-climate",
    Climate: "disaster-climate",
    Architecture: "architecture"
  };
  return [...new Set(categories.map((category) => categoryMap[category]).filter(Boolean))];
}
