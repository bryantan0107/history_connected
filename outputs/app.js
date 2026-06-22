const state = {
  year: 1453,
  region: "turkey-anatolia",
  lens: "All",
  selectedLensIds: [],
  selectedTrackId: null,
  selectedTrackIds: [],
  selectedRegionIds: [],
  selectedPlaceIds: [],
  timelineRange: { min: null, max: null },
  editingTimelineBoundary: null,
  locale: "zh",
  mode: "Connection Lens",
  selectedEventId: "fall-constantinople",
  selectedItem: { type: "event", id: "fall-constantinople" },
  visiblePathCount: 5,
  visibleNodeCount: 6,
  activeBridge: null,
  view: "time-slice",
  activeLandingYear: 1453,
  isOpeningYear: false,
  timelineActive: false,
  activeLensId: null,
  controlsCollapsed: true,
  lensDrawerOpen: false,
  knowledgeTreeTab: "lenses",
  expandedLensTreeNodeIds: [],
  deepDiveOpen: true,
  mapHighlight: { type: "selected", regions: [] },
  detail: { type: "node", nodeId: "n-fall" },
  currentContext: null,
  localContextScope: null,
  localContextNearbyMode: null,
  activePhaseModalNodeId: null,
  activeRegionPhaseModalNodeId: null,
  activeEventModalEventId: null,
  sectionNavigatorPinned: false
};

const OPENING_DURATION_MS = 3900;
const PROTOTYPE_PRESENT_YEAR = 2026;
let landingHideTimer = null;
let timelineYearsCache = null;
let timelineDomainCache = null;
let controlsCollapseTimer = null;

const I18N = {
  en: {
    searchPlaceholder: "Search a year, event, place, or category...",
    recommendedPaths: "Recommended paths",
    all: "All",
    year: "Year",
    timeline: "Timeline",
    lens: "Lens",
    lensHelper: "Focus themes, keep their bridges.",
    regions: "Regions",
    regionHelper: "Choose places to compare.",
    places: "Regions",
    placeHelper: "Choose reference regions to compare.",
    addLens: "Add Lens",
    addRegion: "Add Region",
    placeTree: "Places",
    lensTreeTab: "Lenses",
    placeTreeTab: "Places",
    referencePlaces: "Reference regions",
    placeReferenceNote: "Regions are modern reference areas; historical phases may refer to earlier states, cultures, or polities in or around that area.",
    regionPhases: "Region Phases",
    regionPhasesHint: "Place-based historical phases for the selected reference areas.",
    selectedPlaces: "Selected Regions",
    noSelectedPlaces: "No region selected",
    resetDefaults: "Reset defaults",
    startItTracks: "Start with IT tracks",
    start2000Showcase: "Start 2000 showcase",
    emptyTimeSliceTitle: "Build a time slice",
    noMatrixSelection: "Add at least one lens and one region to compare this year.",
    mode: "Mode",
    connectionLens: "Connection Lens",
    onlyThisCategory: "Only this category",
    view: "View",
    timeSlice: "Time Slice",
    localExplorer: "Local Explorer",
    connectionExplorer: "Connection Explorer",
    worldAtThisMoment: "World at this moment",
    timeSliceView: "Time Slice View",
    timeSliceSubtitle: "A time slice of regions, lenses, and events happening at the same moment.",
    sameMoment: "Same moment, different worlds.",
    localEvents: "Local Events",
    eventsHere: "Events Here",
    eventsHint: "Exact events in this time and place.",
    noCuratedData: "No curated data yet",
    noEventYet: "No event yet",
    noLensPhaseAtYear: "No phase at this year",
    noRegionPhaseAtYear: "No regional phase at this year",
    exactEvent: "Exact Event",
    regionalPhase: "Regional Phase",
    eventsInYear: "Events in this year",
    thisCell: "This Cell",
    exploreNearby: "Explore nearby",
    sameRegion: "Same Region",
    sameLens: "Same Lens",
    sameRegionHint: "Other exact events in this region during the same year.",
    sameLensHint: "Exact events in this lens across other regions during the same year.",
    noEventsInYear: "No exact events here yet.",
    regionalPhasesActive: "Regional Phases active in this year",
    relatedLensPhases: "Related Lens Phases",
    activePeriod: "Active Period",
    trackPeriod: "Track Period",
    phase: "Phase",
    broadBackground: "Phase",
    snapshotContext: "Snapshot Context",
    phaseRegions: "Regions",
    phaseSideBridges: "Shaping Forces",
    phaseSources: "Sources",
    phaseConfidence: "Confidence",
    representativeEvents: "Representative Exact Events",
    representativeEventsHint: "Concrete moments that anchor this phase in time.",
    relatedEvents: "related events",
    whatHappened: "What happened",
    whyItMatters: "Why it matters",
    whyThisPhase: "Why this belongs to this phase",
    possibleNextConnections: "Possible next connections",
    whatThisPhaseMeans: "What this phase means",
    fromPreviousPhase: "From the previous phase",
    whatDefinesIt: "What defines it",
    towardNextPhase: "Toward the next phase",
    imageCredit: "Image credit",
    openPhaseDetail: "Open phase detail",
    lensPhases: "Lens Phases",
    lensPhasesHint: "Use lineage phases to jump the timeline, then compare the world at that year.",
    selectedLens: "Selected Lens",
    noSelectedLens: "No lens selected",
    focusedTracks: "Focused tracks",
    selectFocusedTrack: "Select a focused track",
    multipleTracksActive: "Multiple technology tracks active",
    trackTimeline: "Track timeline",
    lensTree: "Knowledge Tree",
    exploreKnowledgeTree: "Explore Knowledge Tree",
    lensTreeHint: "Browse lenses and reference places.",
    exploreLensTree: "Open Knowledge Tree",
    allTracks: "All tracks",
    selectedFocuses: "Selected focuses",
    focusTrack: "Focus / Track",
    phases: "Phases",
    noSelectedFocuses: "No focused tracks selected",
    activeDuringYear: "Active during this year",
    noSnapshot: "No same-year snapshot cards yet for {year}. Local Context can still use lineage data.",
    localContext: "Local Context",
    deepDiveTitle: "Local Explorer / Connections",
    deepDiveHint: "Click a time-slice cell to inspect local context and possible bridges.",
    deepDiveConnections: "Deep Dive / Connections",
    followBridges: "Follow historical bridges from left to right.",
    exploreContext: "Explore what this context suggests, without inventing causal paths.",
    noCuratedConnections: "No curated connection paths yet for this context.",
    showDeepDive: "Show deep dive",
    hideDeepDive: "Hide deep dive",
    lensRegion: "Lens / Region",
    artLens: "Art Lens",
    navTop: "Top",
    navTimeSlice: "Slice",
    navLensPhases: "Lens",
    navRegionPhases: "Regions",
    navLocalContext: "Events",
    languageToggle: "中文"
  },
  zh: {
    searchPlaceholder: "搜索年份、事件、地点或类别...",
    recommendedPaths: "推荐入口",
    all: "全部",
    year: "年份",
    timeline: "时间线",
    lens: "视角",
    lensHelper: "聚焦主题，保留连接。",
    regions: "地区",
    regionHelper: "选择要比较的地点。",
    places: "地区",
    placeHelper: "选择要比较的现代参照地区。",
    addLens: "添加视角",
    addRegion: "添加地区",
    placeTree: "地点",
    lensTreeTab: "视角",
    placeTreeTab: "地区",
    referencePlaces: "参照地区",
    placeReferenceNote: "地区是现代参照区域；历史阶段可能指该区域内或周边曾存在的政权、文化或社会。",
    regionPhases: "地区阶段",
    regionPhasesHint: "已选参照地点的历史阶段。",
    selectedPlaces: "已选地区",
    noSelectedPlaces: "未选择地区",
    resetDefaults: "恢复默认",
    startItTracks: "从 IT 轨道开始",
    start2000Showcase: "从 2000 展示切片开始",
    emptyTimeSliceTitle: "建立时间切片",
    noMatrixSelection: "请至少添加一个视角和一个地区来比较这一年。",
    mode: "模式",
    connectionLens: "连接视角",
    onlyThisCategory: "仅此类别",
    view: "视图",
    timeSlice: "时间切片",
    localExplorer: "局部探索",
    connectionExplorer: "连接探索",
    worldAtThisMoment: "此刻的世界",
    timeSliceView: "时间切片视图",
    timeSliceSubtitle: "同一时间中，不同地区、领域与事件的并置。",
    sameMoment: "同一时刻，不同世界。",
    localEvents: "局部事件",
    eventsHere: "此地脉络",
    eventsHint: "这一时间与地点中的精确事件。",
    noCuratedData: "暂无策展数据",
    noEventYet: "暂无事件",
    noLensPhaseAtYear: "该年暂无阶段",
    noRegionPhaseAtYear: "该年暂无地区阶段",
    exactEvent: "精确事件",
    regionalPhase: "地区阶段",
    eventsInYear: "该年的事件",
    thisCell: "此单元格",
    exploreNearby: "邻近探索",
    sameRegion: "同一地区",
    sameLens: "同一视角",
    sameRegionHint: "同一年、同一地区中其他视角的精确事件。",
    sameLensHint: "同一年、同一视角在其他地区的精确事件。",
    noEventsInYear: "这里暂时没有精确事件。",
    regionalPhasesActive: "该年活跃的地区阶段",
    relatedLensPhases: "相关视角阶段",
    activePeriod: "活跃阶段",
    trackPeriod: "专题阶段",
    phase: "阶段",
    broadBackground: "阶段",
    snapshotContext: "快照脉络",
    phaseRegions: "地区",
    phaseSideBridges: "塑造因素",
    phaseSources: "来源",
    phaseConfidence: "可信度",
    representativeEvents: "代表性精确事件",
    representativeEventsHint: "把这个阶段锚定到具体年份的关键时刻。",
    relatedEvents: "相关事件",
    whatHappened: "发生了什么",
    whyItMatters: "为什么重要",
    whyThisPhase: "为什么属于这个阶段",
    possibleNextConnections: "可能连接到什么",
    whatThisPhaseMeans: "这个阶段意味着什么",
    fromPreviousPhase: "相对前一阶段的变化",
    whatDefinesIt: "这个阶段由什么定义",
    towardNextPhase: "走向下一阶段",
    openPhaseDetail: "打开阶段详情",
    imageCredit: "图片来源",
    lensPhases: "视角阶段",
    lensPhasesHint: "用脉络阶段跳转时间线，再比较该年份的世界状态。",
    selectedLens: "已选视角",
    noSelectedLens: "未选择视角",
    focusedTracks: "聚焦轨道",
    selectFocusedTrack: "选择聚焦轨道",
    multipleTracksActive: "多个技术轨道活跃",
    trackTimeline: "轨道时间线",
    lensTree: "知识树",
    exploreKnowledgeTree: "探索知识树",
    lensTreeHint: "浏览视角与参照地点。",
    exploreLensTree: "打开知识树",
    allTracks: "全部专题",
    selectedFocuses: "已选专题",
    focusTrack: "专题 / 轨道",
    phases: "阶段",
    noSelectedFocuses: "未选择专题轨道",
    activeDuringYear: "该年处于此阶段中",
    noSnapshot: "{year} 年暂无同年快照卡片。Local Context 仍可使用 lineage 数据。",
    localContext: "局部脉络",
    deepDiveTitle: "局部探索 / 连接",
    deepDiveHint: "点击时间切片单元格，查看局部脉络和可能的连接。",
    deepDiveConnections: "深入层 / 连接",
    followBridges: "沿着历史桥梁从左到右阅读。",
    exploreContext: "探索此脉络暗示的可能连接，但不伪造因果路径。",
    noCuratedConnections: "此脉络暂无策展连接路径。",
    showDeepDive: "显示深入层",
    hideDeepDive: "隐藏深入层",
    lensRegion: "视角 / 地区",
    artLens: "艺术视角",
    navTop: "顶部",
    navTimeSlice: "切片",
    navLensPhases: "视角",
    navRegionPhases: "地区",
    navLocalContext: "事件",
    languageToggle: "EN"
  }
};

const DISPLAY_TRANSLATIONS = {
  zh: {
    lenses: {
      "war-military": "战争 / 军事",
      "state-empire": "国家 / 帝国",
      "economy-trade": "经济 / 贸易",
      "religion-belief": "宗教 / 信仰",
      "science-technology": "科学 / 技术",
      art: "艺术",
      literature: "文学",
      "fashion-daily-life": "时尚 / 日常生活",
      "entertainment-media": "娱乐 / 媒体",
      "disaster-climate": "灾难 / 气候",
      architecture: "建筑"
    },
    lensTracks: {
      "war-global-conflicts": "大型战争 / 全球冲突",
      "computing-pc": "计算机 / 个人电脑",
      "networks-internet": "网络 / 互联网",
      "software-os": "软件 / 操作系统",
      "databases-information-systems": "数据库 / 信息系统",
      cybersecurity: "网络安全",
      "ai-ml": "AI / 机器学习",
      "semiconductors-hardware": "半导体 / 硬件",
      "film-cinema-industry": "电影 / 影视工业",
      "painting-visual-art": "绘画 / 视觉艺术",
      "sculpture-public-art": "雕塑 / 公共艺术",
      "photography-visual-media": "摄影 / 视觉媒介",
      "digital-new-media-art": "数字 / 新媒体艺术"
    },
    regions: {
      China: "中国",
      Japan: "日本",
      Korea: "韩国",
      India: "印度",
      "Middle East": "中东",
      Europe: "欧洲",
      Africa: "非洲",
      Americas: "美洲",
      Global: "全球",
      global: "全球",
      "Multiple regions": "多个地区",
      "multiple regions": "多个地区",
      Eurasia: "欧亚大陆",
      "Eurasian steppe": "欧亚草原",
      Mediterranean: "地中海",
      "Eastern Mediterranean": "东地中海",
      Mesopotamia: "美索不达米亚",
      Egypt: "埃及",
      Persia: "波斯",
      Asia: "亚洲",
      Africa: "非洲",
      "Ottoman world": "奥斯曼世界",
      "Atlantic world": "大西洋世界",
      Atlantic: "大西洋",
      "Indian Ocean worlds": "印度洋世界",
      "Indian Ocean": "印度洋",
      "Southwest Asia": "西南亚",
      "Near East": "近东",
      "West Africa": "西非",
      "North Africa": "北非",
      "Global North": "全球北方",
      "urban centers": "城市中心",
      "global missions": "全球传教网络",
      "global print centers": "全球印刷中心",
      "Northern Hemisphere": "北半球",
      "Industrial cities": "工业城市",
      "Nile": "尼罗河",
      "Tigris-Euphrates": "底格里斯-幼发拉底",
      "Indus": "印度河",
      "Yellow River": "黄河"
    },
    types: {
      Event: "事件",
      Snapshot: "快照",
      Empty: "暂无",
      "Region Lineage": "地区脉络",
      "Regional Phase": "地区阶段",
      "Lens Lineage": "视角脉络",
      "Exact Event": "精确事件",
      "Active Period": "活跃阶段",
      "Broad Background": "阶段",
      "Snapshot Context": "快照脉络",
      "Focused Track": "聚焦轨道"
    },
    terms: {
      mobilization: "动员",
      "military technology": "军事技术",
      "state power": "国家权力",
      patronage: "赞助",
      religion: "宗教",
      trade: "贸易",
      technology: "技术",
      war: "战争",
      markets: "市场",
      "urban publics": "城市公众",
      "climate pressure": "气候压力",
      "knowledge migration": "知识迁移"
      ,
      legitimacy: "合法性",
      administration: "行政",
      law: "法律",
      "trade routes": "贸易路线",
      "labor systems": "劳动制度",
      money: "货币",
      conversion: "皈依",
      "sacred authority": "神圣权威",
      reform: "改革",
      "knowledge transmission": "知识传递",
      infrastructure: "基础设施",
      automation: "自动化",
      textiles: "纺织品",
      "consumer culture": "消费文化",
      "mass media": "大众媒体",
      electrification: "电气化",
      platforms: "平台",
      "disease ecology": "疾病生态",
      "risk governance": "风险治理",
      "sacred space": "神圣空间",
      engineering: "工程",
      "urban planning": "城市规划",
      "protocol standardization": "协议标准化",
      "network effects": "网络效应",
      miniaturization: "小型化",
      "platform diffusion": "平台扩散"
    },
    events: {
      "fall-constantinople": {
        title: "君士坦丁堡陷落",
        summary: "奥斯曼军队攻占君士坦丁堡，终结拜占庭帝国，并改变东地中海的权力、贸易与知识网络。"
      },
      "edison-light-bulb": {
        title: "爱迪生实用白炽灯",
        summary: "爱迪生的实用白炽灯成为电力照明、配电和城市基础设施体系的一部分。"
      },
      "world-war-i": {
        title: "第一次世界大战爆发",
        summary: "联盟体系、民族主义与帝国竞争把局部危机推向欧洲大陆战争。"
      }
    },
    lineageNodes: {
      "war-military-01": "早期防御工事与组织化冲突",
      "war-military-02": "古典公民军队与帝国",
      "war-military-03": "草原战争与机动帝国",
      "war-military-04": "火药战争",
      "war-military-05": "职业军队与财政国家",
      "war-military-06": "工业化战争与大众动员",
      "war-military-07": "冷战核体系与代理战争",
      "war-military-08": "非对称与网络化战争",
      "state-empire-01": "早期城邦与宫廷统治",
      "state-empire-02": "古典帝国",
      "state-empire-03": "后古典帝国世界",
      "state-empire-04": "火药帝国",
      "state-empire-05": "欧洲殖民帝国",
      "state-empire-06": "民族国家与革命",
      "state-empire-07": "总体战与福利国家",
      "state-empire-08": "后殖民与全球治理",
      "economy-trade-01": "农业剩余与早期交换",
      "economy-trade-02": "青铜时代贸易网络",
      "economy-trade-03": "丝绸之路与印度洋交换",
      "economy-trade-04": "跨撒哈拉与非洲贸易",
      "economy-trade-05": "大西洋贸易与殖民开采",
      "economy-trade-06": "工业资本主义",
      "economy-trade-07": "大众消费经济",
      "economy-trade-08": "数字与平台经济",
      "religion-belief-01": "仪式景观与祖先世界",
      "religion-belief-02": "神庙宗教与祭司制度",
      "religion-belief-03": "轴心时代传统",
      "religion-belief-04": "帝国与传教宗教",
      "religion-belief-05": "伊斯兰世界与学术",
      "religion-belief-06": "改革、教派与印刷",
      "religion-belief-07": "世俗化与复兴",
      "religion-belief-08": "多元主义与数字宗教",
      "science-technology-01": "石器、工具与火",
      "science-technology-02": "农业与冶金",
      "science-technology-03": "古典数学与医学",
      "science-technology-04": "伊斯兰与中世纪知识体系",
      "science-technology-05": "科学革命",
      "science-technology-06": "工业与电气系统",
      "science-technology-07": "计算、太空与核时代",
      "science-technology-08": "互联网、AI 与生物技术",
      "computing-pc-01": "机械计算与制表",
      "computing-pc-02": "战时电子计算",
      "computing-pc-03": "大型机与机构计算",
      "computing-pc-04": "小型机与爱好者计算",
      "computing-pc-05": "个人电脑平台",
      "computing-pc-06": "图形界面、生产力软件与家庭计算",
      "computing-pc-07": "移动与云连接个人设备",
      "computing-pc-08": "AI 辅助个人计算",
      "networks-internet-01": "电报与早期电气网络",
      "networks-internet-02": "电话与交换网络",
      "networks-internet-03": "分组交换与 ARPANET",
      "networks-internet-04": "互联网协议与学术网络",
      "networks-internet-05": "万维网与浏览器",
      "networks-internet-06": "宽带、搜索与平台化网络",
      "networks-internet-07": "社交与移动互联网",
      "networks-internet-08": "云、流媒体与 AI 网络服务",
      "art-01": "古代艺术",
      "art-02": "古典艺术",
      "art-03": "中世纪与拜占庭艺术",
      "art-04": "文艺复兴艺术",
      "art-05": "巴洛克与宫廷奇观",
      "art-06": "印象派与现代生活",
      "art-07": "现代主义",
      "art-08": "当代全球艺术",
      "literature-01": "口传史诗与神话传统",
      "literature-02": "古典文学经典",
      "literature-03": "圣典与手稿文化",
      "literature-04": "宫廷与俗语文学",
      "literature-05": "印刷公共与近世文学",
      "literature-06": "小说与民族文学",
      "literature-07": "现代主义与后殖民写作",
      "literature-08": "数字与跨媒体文学",
      "fashion-daily-life-01": "古代服饰与社会等级",
      "fashion-daily-life-02": "丝绸、羊毛与宫廷纺织",
      "fashion-daily-life-03": "文艺复兴服装与奢侈法令",
      "fashion-daily-life-04": "全球贸易与时尚材料",
      "fashion-daily-life-05": "工业纺织与成衣",
      "fashion-daily-life-06": "现代轮廓与性别角色",
      "fashion-daily-life-07": "青年文化与大众时尚",
      "fashion-daily-life-08": "快时尚与可持续批判",
      "entertainment-media-01": "仪式表演与讲故事",
      "entertainment-media-02": "戏剧、游戏与公共奇观",
      "entertainment-media-03": "宫廷娱乐与节庆",
      "entertainment-media-04": "印刷、民谣与城市公众",
      "entertainment-media-05": "摄影、电影与录音",
      "entertainment-media-06": "广播、电视与大众文化",
      "entertainment-media-07": "电子游戏与有线媒体时代",
      "entertainment-media-08": "流媒体、社交媒体与平台",
      "disaster-climate-01": "全新世气候与农业",
      "disaster-climate-02": "河流洪水与早期国家风险",
      "disaster-climate-03": "连接世界中的瘟疫",
      "disaster-climate-04": "小冰期压力",
      "disaster-climate-05": "工业污染与城市风险",
      "disaster-climate-06": "现代灾害治理",
      "disaster-climate-07": "气候科学与变暖",
      "disaster-climate-08": "适应与韧性辩论",
      "architecture-01": "纪念性宗教与墓葬建筑",
      "architecture-02": "古典柱式与城市纪念物",
      "architecture-03": "佛教、印度教与伊斯兰圣域",
      "architecture-04": "罗曼式与哥特式建筑",
      "architecture-05": "文艺复兴与巴洛克规划",
      "architecture-06": "工业材料与现代城市",
      "architecture-07": "现代主义与国际风格",
      "architecture-08": "可持续与计算建筑",
      "europe-lineage-01": "古典地中海世界",
      "europe-lineage-02": "中世纪基督教与伊斯兰边疆",
      "europe-lineage-03": "文艺复兴与宗教改革",
      "europe-lineage-04": "帝国与商业扩张",
      "europe-lineage-05": "工业与民族国家时代",
      "europe-lineage-06": "世界大战与欧洲整合",
      "middle-east-lineage-01": "古代河流与城市文明",
      "middle-east-lineage-02": "古典与晚期古代帝国",
      "middle-east-lineage-03": "伊斯兰哈里发与学术",
      "middle-east-lineage-04": "突厥、蒙古与地区权力",
      "middle-east-lineage-05": "奥斯曼与萨法维时代",
      "middle-east-lineage-06": "改革、帝国与现代国家",
      "china-lineage-01": "早期王朝基础",
      "china-lineage-02": "帝国统一与汉代秩序",
      "china-lineage-03": "分裂、佛教与唐代世界性",
      "china-lineage-04": "宋元转型",
      "china-lineage-05": "明清帝国秩序",
      "china-lineage-06": "共和、社会主义与改革时代",
      "japan-lineage-01": "弥生与早期国家形成",
      "japan-lineage-02": "奈良与平安宫廷文化",
      "japan-lineage-03": "武家政权与中世社会",
      "japan-lineage-04": "德川秩序",
      "japan-lineage-05": "明治与帝国日本",
      "japan-lineage-06": "战后与当代日本",
      "india-lineage-01": "印度河与早期城市世界",
      "india-lineage-02": "吠陀、孔雀王朝与古典形态",
      "india-lineage-03": "地区王国与印度洋联系",
      "india-lineage-04": "苏丹国与毗奢耶那伽罗",
      "india-lineage-05": "莫卧儿与近世世界",
      "india-lineage-06": "殖民、民族主义与后殖民印度",
      "africa-lineage-01": "古代尼罗河与撒哈拉世界",
      "africa-lineage-02": "跨撒哈拉与斯瓦希里网络",
      "africa-lineage-03": "西非帝国",
      "africa-lineage-04": "大西洋奴隶贸易与非洲国家",
      "africa-lineage-05": "殖民瓜分与抵抗",
      "africa-lineage-06": "去殖民化与当代非洲",
      "americas-lineage-01": "原住民与地区社会",
      "americas-lineage-02": "中美洲与安第斯国家",
      "americas-lineage-03": "征服与殖民世界",
      "americas-lineage-04": "大西洋革命与共和国",
      "americas-lineage-05": "工业与出口经济",
      "americas-lineage-06": "现代美洲",
      "united-states-lineage-01": "北美原住民",
      "united-states-lineage-02": "英属北美殖民地",
      "united-states-lineage-03": "革命与共和国",
      "united-states-lineage-04": "工业化与镀金时代",
      "united-states-lineage-05": "进步主义、战争与新政时代",
      "united-states-lineage-06": "冷战至数字时代"
    }
  }
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindStaticEvents();
  renderAll();
});

function cacheElements() {
  [
    "searchInput",
    "searchResults",
    "currentYearLabel",
    "yearSlider",
    "minYearLabel",
    "maxYearLabel",
    "yearTicks",
    "timelineHoverLabel",
    "timelineRangeEditor",
    "timelineRangeEditorTitle",
    "timelineRangeInput",
    "timelineRangeEra",
    "timelineRangeApplyBtn",
    "timelineRangeResetBtn",
    "timelineRangeError",
    "lensChips",
    "openLensTreeBtn",
    "selectedFocusChips",
    "lensTreeDrawer",
    "lensTreeBackdrop",
    "lensTreeContent",
    "closeLensTreeBtn",
    "regionChips",
    "openLensLineageBtn",
    "viewModeSwitcher",
    "lineagePreviewSection",
    "regionPhasesSection",
    "timeSliceSection",
    "timeSliceTitle",
    "timeSliceSubtitle",
    "trackFocusPanel",
    "timeSliceMatrix",
    "mapCanvas",
    "snapshotCards",
    "deepDivePanel",
    "toggleDeepDiveBtn",
    "contextText",
    "eventCards",
    "explorerKicker",
    "explorerTitle",
    "explorerSubtitle",
    "openExplorerLineageBtn",
    "exitLineageBtn",
    "selectedEventBanner",
    "bridgeChips",
    "showAllBridgesBtn",
    "connectionPaths",
    "showMoreBtn",
    "extendPathBtn",
    "detailKicker",
    "detailContent",
    "connectionModeBtn",
    "strictModeBtn",
    "localeToggle",
    "topControlCenter",
    "controlsPanel",
    "controlsToggle",
    "landingLayer",
    "landingTimeline",
    "landingAnchors",
    "landingActivePoint",
    "landingActiveYear",
    "landingKeywords",
    "compactYearNavigator",
    "compactYearTrack",
    "backToLandingBtn",
    "yearCapsuleSection",
    "yearCapsuleTitle",
    "yearCapsuleSubtitle",
    "yearCapsuleKeywords",
    "yearCapsuleCards",
    "viewFullTimeSliceBtn",
    "exploreMomentBtn",
    "phaseModal",
    "phaseModalContent",
    "phaseModalCloseBtn",
    "eventModal",
    "eventModalContent",
    "eventModalCloseBtn",
    "sectionNavigator",
    "sectionNavigatorToggle"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function t(key, values = {}) {
  const template = (I18N[state.locale] && I18N[state.locale][key]) || I18N.en[key] || key;
  return Object.entries(values).reduce((text, [name, value]) => text.replace(`{${name}}`, value), template);
}

function localizedLensTitle(lensOrId) {
  if (!lensOrId) return "";
  const lensId = typeof lensOrId === "string" ? lensOrId : lensOrId.id;
  return DISPLAY_TRANSLATIONS[state.locale]?.lenses?.[lensId] || (typeof lensOrId === "string" ? getLensTitleById(lensId) : lensOrId.title);
}

function localizedRegionName(region) {
  const place = getPlaceById(region);
  if (place) return localizedPlaceTitle(place);
  return DISPLAY_TRANSLATIONS[state.locale]?.regions?.[region] || region;
}

function localizedTypeLabel(typeLabel) {
  return DISPLAY_TRANSLATIONS[state.locale]?.types?.[typeLabel] || typeLabel;
}

function localizedItemTitle(item) {
  if (!item) return "";
  if (state.locale === "zh" && item.titleZh) return item.titleZh;
  const zh = DISPLAY_TRANSLATIONS[state.locale];
  if (item.id && zh?.events?.[item.id]) return zh.events[item.id].title;
  if (item.id && zh?.lineageNodes?.[item.id]) return zh.lineageNodes[item.id];
  return item.title || item.period || "";
}

function localizedItemSummary(item) {
  if (!item) return "";
  if (state.locale === "zh" && item.summaryZh) return item.summaryZh;
  const zh = DISPLAY_TRANSLATIONS[state.locale];
  if (item.id && zh?.events?.[item.id]) return zh.events[item.id].summary;
  return item.summary || "";
}

function localizedCategoryLabel(category) {
  return localizedLensTitle(categoryToLensId(category)) || category;
}

function localizedTerm(term) {
  return DISPLAY_TRANSLATIONS[state.locale]?.terms?.[String(term).toLowerCase()] || term;
}

function renderI18n() {
  document.documentElement.lang = state.locale === "zh" ? "zh" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  els.searchInput.placeholder = t("searchPlaceholder");
  els.searchInput.setAttribute("aria-label", t("searchPlaceholder"));
  els.localeToggle.textContent = t("languageToggle");
}

function bindStaticEvents() {
  const domain = getTimelineDomain();
  els.yearSlider.min = domain.min;
  els.yearSlider.max = domain.max;
  els.yearSlider.step = 1;
  els.yearSlider.addEventListener("input", (event) => {
    const year = getTimelineYearFromSliderValue(Number(event.target.value));
    event.target.value = year;
    setYear(year);
  });
  els.yearSlider.addEventListener("change", (event) => {
    const year = getTimelineYearFromSliderValue(Number(event.target.value));
    event.target.value = year;
    setYear(year);
  });
  els.yearSlider.addEventListener("click", (event) => {
    const year = getTimelineYearFromClientX(event.clientX);
    event.target.value = year;
    setYear(year);
  });
  els.yearSlider.addEventListener("mousemove", renderTimelineHoverLabel);
  els.yearSlider.addEventListener("mouseleave", () => {
    showTimelineHoverLabel(state.year);
  });
  els.yearSlider.addEventListener("focus", () => {
    showTimelineHoverLabel(state.year);
  });
  els.yearSlider.addEventListener("blur", () => {
    showTimelineHoverLabel(state.year);
  });
  [els.minYearLabel, els.maxYearLabel].forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openTimelineRangeEditor(button.dataset.boundary);
    });
  });
  els.timelineRangeApplyBtn.addEventListener("click", applyTimelineRangeEdit);
  els.timelineRangeResetBtn.addEventListener("click", resetTimelineRange);
  els.timelineRangeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applyTimelineRangeEdit();
    if (event.key === "Escape") closeTimelineRangeEditor();
  });
  els.timelineRangeEra.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applyTimelineRangeEdit();
    if (event.key === "Escape") closeTimelineRangeEditor();
  });
  document.addEventListener("click", (event) => {
    if (!els.timelineRangeEditor || els.timelineRangeEditor.hidden) return;
    if (event.target.closest(".timeline-range-editor") || event.target.closest(".timeline-boundary-btn")) return;
    closeTimelineRangeEditor();
  });

  document.querySelectorAll(".quick-btn").forEach((button) => {
    button.addEventListener("click", () => handleQuickStart(button.dataset.quick));
  });

  [els.connectionModeBtn, els.strictModeBtn].forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      renderAll();
    });
  });

  if (els.controlsToggle) {
    els.controlsToggle.addEventListener("click", () => {
      state.controlsCollapsed = !state.controlsCollapsed;
      renderControlsState();
    });
  }
  if (els.openLensTreeBtn) {
    els.openLensTreeBtn.addEventListener("click", () => {
      toggleKnowledgeTreeTab(state.knowledgeTreeTab || "lenses");
    });
  }
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-tree-tab]");
    if (!button) return;
    toggleKnowledgeTreeTab(button.dataset.openTreeTab || "lenses");
  });
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-reset-defaults]");
    if (!button) return;
    resetDefaultSelections();
  });
  els.closeLensTreeBtn.addEventListener("click", () => {
    state.lensDrawerOpen = false;
    renderLensTreeDrawer();
  });
  els.lensTreeBackdrop.addEventListener("click", () => {
    state.lensDrawerOpen = false;
    renderLensTreeDrawer();
  });

  els.localeToggle.addEventListener("click", () => {
    state.locale = state.locale === "en" ? "zh" : "en";
    renderAll();
  });
  window.addEventListener("resize", updateFloatingRegionHeader);
  window.addEventListener("scroll", updateFloatingRegionHeader, { passive: true });
  window.addEventListener("resize", updateSectionNavigator);
  window.addEventListener("scroll", updateSectionNavigator, { passive: true });

  if (els.sectionNavigator) {
    els.sectionNavigator.addEventListener("click", (event) => {
      const toggle = event.target.closest("#sectionNavigatorToggle");
      if (toggle) {
        state.sectionNavigatorPinned = !state.sectionNavigatorPinned;
        updateSectionNavigator();
        return;
      }
      const button = event.target.closest("[data-section-target]");
      if (!button) return;
      scrollToSection(button.dataset.sectionTarget);
      if (!state.sectionNavigatorPinned) {
        window.setTimeout(updateSectionNavigator, 700);
      }
    });
  }
  document.addEventListener("click", (event) => {
    if (!state.sectionNavigatorPinned || !els.sectionNavigator) return;
    if (event.target.closest("#sectionNavigator")) return;
    state.sectionNavigatorPinned = false;
    updateSectionNavigator();
  });

  [els.openLensLineageBtn, els.openExplorerLineageBtn].forEach((button) => {
    button.addEventListener("click", () => {
      const lens = getSelectedLens();
      if (lens) enterLensLineage(lens.id);
    });
  });

  els.viewModeSwitcher.querySelectorAll(".view-mode-btn").forEach((button) => {
    button.addEventListener("click", () => activateViewMode(button.dataset.view));
  });

  els.toggleDeepDiveBtn.addEventListener("click", () => {
    state.deepDiveOpen = true;
    renderDeepDiveState();
  });

  els.showMoreBtn.addEventListener("click", () => {
    state.visiblePathCount = getCurrentPaths().length;
    state.activeBridge = null;
    renderExplorer();
  });

  els.extendPathBtn.addEventListener("click", () => {
    state.visibleNodeCount += 1;
    renderExplorer();
  });

  els.showAllBridgesBtn.addEventListener("click", () => {
    state.activeBridge = null;
    renderExplorer();
  });

  els.exitLineageBtn.addEventListener("click", () => {
    state.view = "connections";
    state.activeBridge = null;
    reconcileSelectedItemWithContext();
    renderAll();
  });

  els.searchInput.addEventListener("input", renderSearchResults);
  els.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const first = getSearchMatches()[0];
      if (first) activateSearchMatch(first);
    }
    if (event.key === "Escape") {
      els.searchResults.hidden = true;
    }
  });

  els.landingTimeline.addEventListener("mouseenter", showLandingTimeline);
  els.landingTimeline.addEventListener("mousemove", handleLandingTimelineMove);
  els.landingTimeline.addEventListener("mouseleave", hideLandingTimelineSoon);
  els.landingTimeline.addEventListener("focus", showLandingTimeline);
  els.landingTimeline.addEventListener("blur", hideLandingTimelineSoon);
  els.landingTimeline.addEventListener("click", () => openLandingYear(state.activeLandingYear));
  els.landingTimeline.addEventListener("keydown", handleLandingKeydown);
  els.landingLayer.addEventListener("keydown", handleLandingKeydown);

  els.backToLandingBtn.addEventListener("click", () => {
    state.view = "landing";
    state.deepDiveOpen = false;
    state.isOpeningYear = false;
    renderAll();
  });

  els.viewFullTimeSliceBtn.addEventListener("click", () => {
    state.view = "time-slice";
    state.deepDiveOpen = false;
    renderAll();
  });

  els.exploreMomentBtn.addEventListener("click", () => {
    const capsule = getYearCapsule(state.year);
    const eventId = capsule && capsule.relatedEvents[0];
    if (eventId) {
      selectEvent(eventId, { openDeepDive: true });
    } else {
      state.view = "local";
      state.deepDiveOpen = true;
      reconcileSelectedItemWithContext();
      renderAll();
    }
  });

  els.phaseModalCloseBtn.addEventListener("click", closePhaseModal);
  els.phaseModal.querySelector("[data-phase-modal-close]").addEventListener("click", closePhaseModal);
  els.eventModalCloseBtn.addEventListener("click", closeEventModal);
  els.eventModal.querySelector("[data-event-modal-close]").addEventListener("click", closeEventModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && (state.activePhaseModalNodeId || state.activeRegionPhaseModalNodeId)) closePhaseModal();
    if (event.key === "Escape" && state.activeEventModalEventId) closeEventModal();
    if (event.key === "Escape" && els.timelineRangeEditor && !els.timelineRangeEditor.hidden) closeTimelineRangeEditor();
    if (event.key === "Escape" && state.lensDrawerOpen) {
      state.lensDrawerOpen = false;
      renderLensTreeDrawer();
    }
    if (event.key === "Escape" && state.sectionNavigatorPinned) {
      state.sectionNavigatorPinned = false;
      updateSectionNavigator();
    }
  });
}

function renderAll() {
  state.currentContext = deriveCurrentContext();
  renderLanding();
  renderYearCapsule();
  renderCompactYearNavigator();
  renderAppShellState();
  renderI18n();
  renderChrome();
  renderLensChips();
  renderSelectedFocusChips();
  renderTrackFocusPanel();
  renderLensTreeDrawer();
  renderRegionChips();
  renderViewModeSwitcher();
  renderLineagePreview();
  renderRegionPhasesPreview();
  renderPhaseModal();
  renderEventModal();
  renderTimeSliceView();
  renderMap();
  renderSnapshots();
  renderContext();
  renderEvents();
  renderExplorer();
  renderDetail();
  renderDeepDiveState();
  updateSectionNavigator();
}

function renderAppShellState() {
  document.body.classList.toggle("is-landing", state.view === "landing");
  document.body.classList.toggle("is-opening-year", state.isOpeningYear);
  document.body.classList.toggle("is-capsule", state.view === "capsule");
  document.body.classList.toggle("is-workspace", !["landing", "capsule"].includes(state.view));
  document.body.classList.toggle("lens-drawer-open", state.lensDrawerOpen);
  els.landingLayer.hidden = state.view !== "landing" && !state.isOpeningYear;
  els.compactYearNavigator.hidden = state.view !== "capsule";
  els.compactYearNavigator.style.display = "none";
}

function getSectionNavigatorItems() {
  return [
    { id: "top", target: null },
    { id: "timeSliceSection", target: els.timeSliceSection },
    { id: "lineagePreviewSection", target: els.lineagePreviewSection },
    { id: "regionPhasesSection", target: els.regionPhasesSection },
    { id: "localContextSection", target: document.getElementById("localContextSection") }
  ];
}

function isSectionAvailable(element) {
  return Boolean(element && !element.hidden && element.offsetParent !== null);
}

function isAnyModalOpen() {
  return Boolean(
    state.activePhaseModalNodeId ||
    state.activeRegionPhaseModalNodeId ||
    state.activeEventModalEventId ||
    (els.phaseModal && !els.phaseModal.hidden) ||
    (els.eventModal && !els.eventModal.hidden)
  );
}

function scrollToSection(sectionId) {
  if (sectionId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const target = document.getElementById(sectionId);
  if (!target || target.hidden) return;
  const topBarOffset = els.topControlCenter ? Math.ceil(els.topControlCenter.getBoundingClientRect().height + 14) : 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - topBarOffset;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
}

function updateSectionNavigator() {
  if (!els.sectionNavigator) return;
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const shouldShow = !isMobile && !isAnyModalOpen() && window.scrollY > 220;
  if (!shouldShow) state.sectionNavigatorPinned = false;
  els.sectionNavigator.classList.toggle("visible", shouldShow);
  els.sectionNavigator.classList.toggle("pinned", shouldShow && state.sectionNavigatorPinned);
  els.sectionNavigator.setAttribute("aria-hidden", String(!shouldShow));
  if (els.sectionNavigatorToggle) {
    els.sectionNavigatorToggle.setAttribute("aria-expanded", String(shouldShow && state.sectionNavigatorPinned));
  }

  let activeId = "top";
  const topProbe = els.topControlCenter ? els.topControlCenter.getBoundingClientRect().bottom + 36 : 120;
  getSectionNavigatorItems().forEach(({ id, target }) => {
    const button = els.sectionNavigator.querySelector(`[data-section-target="${id}"]`);
    const available = id === "top" || isSectionAvailable(target);
    if (button) button.hidden = !available;
    if (!available || id === "top") return;
    const rect = target.getBoundingClientRect();
    if (rect.top <= topProbe && rect.bottom > topProbe) {
      activeId = id;
    } else if (rect.top <= topProbe) {
      activeId = id;
    }
  });

  els.sectionNavigator.querySelectorAll("[data-section-target]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sectionTarget === activeId);
  });
}

function renderLanding() {
  const years = getTimelineYears();
  const activeYear = state.activeLandingYear || state.year;
  const position = getYearAnchorPosition(activeYear);
  els.landingLayer.classList.toggle("timeline-active", state.timelineActive || state.isOpeningYear);
  els.landingActivePoint.style.setProperty("--point-x", `${position}%`);
  els.landingActiveYear.style.setProperty("--point-x", `${position}%`);
  els.landingActiveYear.textContent = activeYear;
  els.landingTimeline.setAttribute("aria-valuenow", String(activeYear));
  els.landingAnchors.innerHTML = years.map((year) => `
    <button class="landing-anchor ${year === activeYear ? "active" : ""}" style="left:${getYearAnchorPosition(year)}%" data-year="${year}" type="button">
      <span>${year}</span>
    </button>
  `).join("");
  els.landingAnchors.querySelectorAll(".landing-anchor").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openLandingYear(Number(button.dataset.year));
    });
  });
  const capsule = getYearCapsule(activeYear);
  els.landingKeywords.innerHTML = state.isOpeningYear && capsule
    ? capsule.keywords.map((keyword, index) => `<span style="--keyword-index:${index}">${keyword}</span>`).join("")
    : "";
}

function showLandingTimeline() {
  if (landingHideTimer) window.clearTimeout(landingHideTimer);
  state.timelineActive = true;
  renderLanding();
}

function hideLandingTimelineSoon() {
  if (state.isOpeningYear) return;
  if (landingHideTimer) window.clearTimeout(landingHideTimer);
  landingHideTimer = window.setTimeout(() => {
    state.timelineActive = false;
    renderLanding();
  }, 520);
}

function handleLandingTimelineMove(event) {
  if (state.isOpeningYear) return;
  showLandingTimeline();
  const rect = els.landingTimeline.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  state.activeLandingYear = getNearestAnchorYear(ratio);
  renderLanding();
}

function handleLandingKeydown(event) {
  if (!["ArrowLeft", "ArrowRight", "Enter", " "].includes(event.key)) return;
  event.preventDefault();
  const years = getTimelineYears();
  const currentIndex = Math.max(0, years.indexOf(state.activeLandingYear));
  if (event.key === "ArrowLeft") {
    showLandingTimeline();
    state.activeLandingYear = years[Math.max(0, currentIndex - 1)];
    renderLanding();
  } else if (event.key === "ArrowRight") {
    showLandingTimeline();
    state.activeLandingYear = years[Math.min(years.length - 1, currentIndex + 1)];
    renderLanding();
  } else {
    openLandingYear(state.activeLandingYear);
  }
}

function openLandingYear(year) {
  const capsule = getYearCapsule(year);
  ensureTimelineRangeIncludesYear(year);
  state.year = year;
  state.activeLandingYear = year;
  state.isOpeningYear = true;
  state.timelineActive = true;
  state.selectedItem = null;
  state.selectedEventId = null;
  state.detail = { type: "empty" };
  renderAll();
  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 120 : OPENING_DURATION_MS;
  window.setTimeout(() => {
    state.isOpeningYear = false;
    state.view = "capsule";
    setSelectedLensIds([]);
    state.region = capsule && capsule.relatedRegions[0] ? capsule.relatedRegions[0] : "Europe";
    state.deepDiveOpen = false;
    renderAll();
  }, delay);
}

function renderYearCapsule() {
  const capsule = getYearCapsule(state.year);
  els.yearCapsuleSection.hidden = state.view !== "capsule";
  if (!capsule) return;
  els.yearCapsuleTitle.textContent = `World at ${capsule.year}`;
  els.yearCapsuleSubtitle.textContent = "Same moment, different worlds.";
  els.yearCapsuleKeywords.innerHTML = capsule.keywords.map((keyword) => `<span>${keyword}</span>`).join("");
  els.yearCapsuleCards.innerHTML = capsule.highlights.map((highlight) => `
    <article class="capsule-card">
      <div class="type-pill">Coexistence</div>
      <p>${highlight}</p>
    </article>
  `).join("");
}

function renderCompactYearNavigator() {
  els.compactYearNavigator.hidden = true;
  els.compactYearNavigator.style.display = "none";
  els.compactYearTrack.innerHTML = "";
  return;
  els.compactYearTrack.innerHTML = getTimelineYears().map((year) => `
    <button class="compact-year ${year === state.year ? "active" : ""}" data-year="${year}" type="button">${year}</button>
  `).join("");
  els.compactYearTrack.querySelectorAll(".compact-year").forEach((button) => {
    button.addEventListener("click", () => {
      state.year = Number(button.dataset.year);
      ensureTimelineRangeIncludesYear(state.year);
      state.activeLandingYear = state.year;
      state.selectedItem = null;
      state.selectedEventId = null;
      state.detail = { type: "empty" };
      if (state.view === "capsule") {
        state.deepDiveOpen = false;
      }
      renderAll();
    });
  });
}

function getYearCapsule(year) {
  return HISTORY_DATA.yearCapsules.find((capsule) => capsule.year === year) || null;
}

function getYearAnchorPosition(year) {
  return getYearPosition(year);
}

function getNearestAnchorYear(ratio) {
  const domain = getActiveTimelineDomain();
  const year = domain.min + ratio * (domain.max - domain.min);
  return getNearestAnchorYearForValue(year);
}

function getNearestAnchorYearForValue(year) {
  const domain = getActiveTimelineDomain();
  const years = getTimelineYears().filter((candidate) => candidate >= domain.min && candidate <= domain.max);
  if (!years.length) return clampYearToActiveTimelineRange(Math.round(year));
  return years.reduce((nearest, candidate) => (
    Math.abs(candidate - year) < Math.abs(nearest - year) ? candidate : nearest
  ), years[0]);
}

function getTimelineYears() {
  if (!timelineYearsCache) timelineYearsCache = deriveTimelineYears();
  return timelineYearsCache;
}

function getTimelineDomain() {
  return getActiveTimelineDomain();
}

function getDataTimelineDomain() {
  if (!timelineDomainCache) timelineDomainCache = deriveTimelineDomain();
  return timelineDomainCache;
}

function getActiveTimelineDomain() {
  const dataDomain = getDataTimelineDomain();
  const requestedMin = Number.isFinite(state.timelineRange.min) ? state.timelineRange.min : dataDomain.min;
  const requestedMax = Number.isFinite(state.timelineRange.max) ? state.timelineRange.max : dataDomain.max;
  const min = Math.min(requestedMin, requestedMax - 1);
  const max = Math.max(requestedMax, min + 1);
  return { min, max };
}

function deriveTimelineYears() {
  const years = new Set();
  const addYear = (year) => {
    if (!Number.isFinite(year)) return;
    const normalized = Math.round(year);
    if (!isUsableTimelineYear(normalized)) return;
    years.add(normalized);
  };
  const addRange = (start, end) => {
    if (Number.isFinite(start)) addYear(start);
    if (Number.isFinite(end)) addYear(end);
    if (Number.isFinite(start) && Number.isFinite(end) && end > start) {
      addYear(roundTimelineMidpoint((start + end) / 2));
    }
  };

  (HISTORY_DATA.years || []).forEach(addYear);
  (HISTORY_DATA.yearCapsules || []).forEach((capsule) => addYear(capsule.year));
  (HISTORY_DATA.events || []).forEach((event) => addRange(event.startYear || event.year, event.endYear || event.year));
  (HISTORY_DATA.regionSnapshots || []).forEach((snapshot) => addYear(snapshot.year));
  (HISTORY_DATA.lineageNodes || []).forEach((node) => {
    addRange(node.startYear, node.endYear);
    addYear(node.entryYear);
  });
  (HISTORY_DATA.regionLineages || []).forEach((lineage) => {
    (lineage.nodes || []).forEach((node) => {
      if (typeof node.startYear === "number" || typeof node.endYear === "number") {
        addRange(node.startYear, node.endYear);
        return;
      }
      const periodYears = extractYears(node.period || "");
      if (periodYears.length >= 2) addRange(periodYears[0], periodYears[periodYears.length - 1]);
      if (periodYears.length === 1) addYear(periodYears[0]);
    });
  });

  return [...years].sort((a, b) => a - b);
}

function deriveTimelineDomain() {
  const years = getTimelineYears();
  const fallback = HISTORY_DATA.years || [1453, 2026];
  const min = years.length ? years[0] : Math.min(...fallback);
  const max = years.length ? years[years.length - 1] : Math.max(...fallback);
  return { min, max: Math.max(max, min + 1) };
}

function isUsableTimelineYear(year) {
  if (!Number.isFinite(year)) return false;
  return year >= -3000 && year <= 2200;
}

function roundTimelineMidpoint(year) {
  if (year < 1800) return Math.round(year / 50) * 50;
  if (year < 1950) return Math.round(year / 25) * 25;
  return Math.round(year / 10) * 10;
}

function getClosestTimelineYearIndex(year) {
  return getNearestAnchorYearForValue(year);
}

function getTimelineYearFromSliderValue(value) {
  return getNearestAnchorYearForValue(Number(value));
}

function getTimelineYearFromClientX(clientX) {
  const rect = els.yearSlider.getBoundingClientRect();
  const ratio = rect.width ? (clientX - rect.left) / rect.width : 0;
  const domain = getActiveTimelineDomain();
  const rawYear = domain.min + Math.max(0, Math.min(1, ratio)) * (domain.max - domain.min);
  return getTimelineYearFromSliderValue(rawYear);
}

function getVisibleTimelineTicks(years) {
  const domain = getActiveTimelineDomain();
  return [domain.min, domain.max];
}

function renderTimelineHoverLabel(event) {
  showTimelineHoverLabel(getTimelineYearFromClientX(event.clientX));
}

function showTimelineHoverLabel(year) {
  els.timelineHoverLabel.hidden = false;
  els.timelineHoverLabel.textContent = formatYearLabel(year);
  els.timelineHoverLabel.style.left = getTimelineMarkerOffset(year);
}

function getYearPosition(year) {
  const domain = getActiveTimelineDomain();
  const ratio = (year - domain.min) / (domain.max - domain.min);
  return Math.max(0, Math.min(100, ratio * 100));
}

function getTimelineMarkerOffset(year) {
  if (!els.yearSlider || !els.yearTicks) return `${getYearPosition(year)}%`;
  const sliderRect = els.yearSlider.getBoundingClientRect();
  const parent = els.yearTicks.parentElement || els.yearTicks;
  const parentRect = parent.getBoundingClientRect();
  if (!sliderRect.width || !parentRect.width) return `${getYearPosition(year)}%`;
  const left = sliderRect.left - parentRect.left + (sliderRect.width * getYearPosition(year)) / 100;
  return `${left}px`;
}

function formatYearLabel(year) {
  if (year < 0) return `${Math.abs(year)} BCE`;
  if (year === 0) return "1 BCE/CE";
  return String(year);
}

function clampYearToActiveTimelineRange(year) {
  const domain = getActiveTimelineDomain();
  return Math.max(domain.min, Math.min(domain.max, year));
}

function parseTimelineRangeInput(value, era) {
  const numeric = Math.round(Number(value));
  if (!Number.isFinite(numeric) || numeric < 1) return null;
  return era === "BCE" ? -numeric : numeric;
}

function splitYearForRangeEditor(year) {
  return {
    value: Math.max(1, Math.abs(year)),
    era: year < 0 ? "BCE" : "CE"
  };
}

function openTimelineRangeEditor(boundary) {
  const domain = getActiveTimelineDomain();
  const year = boundary === "max" ? domain.max : domain.min;
  const split = splitYearForRangeEditor(year);
  state.editingTimelineBoundary = boundary === "max" ? "max" : "min";
  els.timelineRangeEditor.hidden = false;
  els.timelineRangeEditorTitle.textContent = state.editingTimelineBoundary === "max" ? "Edit latest timeline year" : "Edit earliest timeline year";
  els.timelineRangeInput.value = split.value;
  els.timelineRangeEra.value = split.era;
  els.timelineRangeError.hidden = true;
  els.timelineRangeInput.focus();
  els.timelineRangeInput.select();
}

function closeTimelineRangeEditor() {
  state.editingTimelineBoundary = null;
  els.timelineRangeEditor.hidden = true;
  els.timelineRangeError.hidden = true;
}

function applyTimelineRangeEdit() {
  const boundary = state.editingTimelineBoundary;
  if (!boundary) return;
  const year = parseTimelineRangeInput(els.timelineRangeInput.value, els.timelineRangeEra.value);
  if (!Number.isFinite(year)) {
    els.timelineRangeError.textContent = "Enter a year greater than 0.";
    els.timelineRangeError.hidden = false;
    return;
  }
  if (!isUsableTimelineYear(year)) {
    els.timelineRangeError.textContent = `Use a year between ${formatYearLabel(-3000)} and ${formatYearLabel(2200)}.`;
    els.timelineRangeError.hidden = false;
    return;
  }
  setTimelineRangeBoundary(boundary, year);
}

function setTimelineRangeBoundary(boundary, year) {
  const dataDomain = getDataTimelineDomain();
  const nextRange = {
    min: Number.isFinite(state.timelineRange.min) ? state.timelineRange.min : dataDomain.min,
    max: Number.isFinite(state.timelineRange.max) ? state.timelineRange.max : dataDomain.max
  };
  nextRange[boundary] = year;
  if (nextRange.min >= nextRange.max) {
    els.timelineRangeError.textContent = "Earliest year must be before latest year.";
    els.timelineRangeError.hidden = false;
    return;
  }
  state.timelineRange = nextRange;
  state.year = getNearestAnchorYearForValue(clampYearToActiveTimelineRange(state.year));
  closeTimelineRangeEditor();
  renderAll();
}

function resetTimelineRange() {
  state.timelineRange = { min: null, max: null };
  state.year = getNearestAnchorYearForValue(clampYearToActiveTimelineRange(state.year));
  closeTimelineRangeEditor();
  renderAll();
}

function ensureTimelineRangeIncludesYear(year) {
  if (!Number.isFinite(year)) return;
  const domain = getActiveTimelineDomain();
  if (year >= domain.min && year <= domain.max) return;
  const dataDomain = getDataTimelineDomain();
  state.timelineRange = {
    min: Math.min(year, Number.isFinite(state.timelineRange.min) ? state.timelineRange.min : dataDomain.min),
    max: Math.max(year, Number.isFinite(state.timelineRange.max) ? state.timelineRange.max : dataDomain.max)
  };
}

function renderChrome() {
  const years = getTimelineYears();
  const domain = getActiveTimelineDomain();
  if (state.year < domain.min || state.year > domain.max) {
    state.year = getNearestAnchorYearForValue(clampYearToActiveTimelineRange(state.year));
  }
  els.currentYearLabel.textContent = formatYearLabel(state.year);
  els.minYearLabel.textContent = formatYearLabel(domain.min);
  els.minYearLabel.setAttribute("aria-label", `Edit earliest timeline year: ${formatYearLabel(domain.min)}`);
  els.maxYearLabel.textContent = formatYearLabel(domain.max);
  els.maxYearLabel.setAttribute("aria-label", `Edit latest timeline year: ${formatYearLabel(domain.max)}`);
  els.yearSlider.min = domain.min;
  els.yearSlider.max = domain.max;
  els.yearSlider.value = state.year;
  renderTimelineTicks();
  showTimelineHoverLabel(state.year);
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(() => {
      renderTimelineTicks();
      showTimelineHoverLabel(state.year);
    });
  }
  els.connectionModeBtn.classList.toggle("active", state.mode === "Connection Lens");
  els.strictModeBtn.classList.toggle("active", state.mode === "Only this category");
  renderQuickStartStates();
  renderControlsState();
  renderLensLineageButtons();
}

function renderTimelineTicks() {
  els.yearTicks.innerHTML = "";
}

function renderControlsState() {
  if (!els.controlsToggle) {
    els.topControlCenter.classList.remove("collapsed");
    return;
  }
  els.topControlCenter.classList.toggle("collapsed", state.controlsCollapsed);
  els.controlsToggle.setAttribute("aria-expanded", String(!state.controlsCollapsed));
  els.controlsToggle.setAttribute("aria-label", state.controlsCollapsed ? "Expand controls" : "Collapse controls");
  els.controlsToggle.querySelector(".toggle-icon").textContent = state.controlsCollapsed ? "⌄" : "⌃";
}

function renderViewModeSwitcher() {
  els.viewModeSwitcher.querySelectorAll(".view-mode-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function activateViewMode(view) {
  if (view === "lineage") {
    state.view = "time-slice";
    state.deepDiveOpen = false;
    renderAll();
    return;
  }
  state.view = view;
  state.deepDiveOpen = view !== "time-slice";
  if (view === "local") {
    state.activeBridge = null;
  }
  if (view === "connections") {
    reconcileSelectedItemWithContext();
  }
  renderAll();
}

function renderDeepDiveState() {
  const open = true;
  state.deepDiveOpen = true;
  els.deepDivePanel.classList.toggle("collapsed", false);
  els.toggleDeepDiveBtn.hidden = true;
  els.toggleDeepDiveBtn.textContent = t("hideDeepDive");
  els.toggleDeepDiveBtn.setAttribute("aria-expanded", String(open));
  els.timeSliceSection.hidden = state.view === "lineage";
}

function renderQuickStartStates() {
  document.querySelectorAll(".quick-btn").forEach((button) => {
    const quick = button.dataset.quick;
    const isActive = quick === "art"
      ? state.view === "time-slice" && getSelectedLensIds().includes("art")
      : quick === String(state.year) && quickMatchesSelectedEvent(quick);
    button.classList.toggle("active", isActive);
  });
}

function renderLensLineageButtons() {
  [els.openLensLineageBtn, els.openExplorerLineageBtn].forEach((button) => {
    if (!button) return;
    button.hidden = true;
  });
}

function setSelectedLensIds(lensIds) {
  state.selectedLensIds = unique((lensIds || []).filter(Boolean));
  state.activeLensId = state.selectedLensIds[0] || null;
  state.lens = state.activeLensId ? getLensTitleById(state.activeLensId) : "All";
  syncSelectedTrackAlias();
}

function getDefaultLensIds() {
  return (HISTORY_DATA.lenses || []).map((lens) => lens.id).filter(Boolean);
}

function applyDefaultSelections() {
  if (!getSelectedLensIds().length && !getSelectedTrackIds().length) {
    setSelectedLensIds(getDefaultLensIds());
  }
  if (!getSelectedPlaceIds().length) {
    setSelectedPlaceIds(getDefaultPlaceIds());
    if (getSelectedPlaceIds().includes("turkey-anatolia")) {
      state.region = "turkey-anatolia";
    }
  }
}

function resetDefaultSelections() {
  setSelectedLensIds([]);
  state.selectedTrackIds = [];
  syncSelectedTrackAlias();
  setSelectedPlaceIds([]);
  state.selectedItem = null;
  state.selectedEventId = null;
  state.detail = { type: "empty" };
  state.view = "time-slice";
  state.deepDiveOpen = true;
  renderAll();
}

function startWithItTracks() {
  setSelectedLensIds([]);
  state.selectedTrackIds = [
    "computing-pc",
    "networks-internet",
    "software-os",
    "ai-ml"
  ].filter((trackId) => getLensTrackById(trackId));
  syncSelectedTrackAlias();
  setSelectedPlaceIds([
    "united-states",
    "japan",
    "china",
    "britain-uk"
  ]);
  state.region = getSelectedPlaceIds()[0] || state.region;
  state.selectedItem = null;
  state.selectedEventId = null;
  state.detail = { type: "empty" };
  state.view = "time-slice";
  state.deepDiveOpen = true;
  renderAll();
}

function startWith2000Showcase() {
  setSelectedLensIds([
    "state-empire",
    "war-military",
    "economy-trade",
    "science-technology",
    "entertainment-media",
    "art",
    "architecture",
    "disaster-climate"
  ]);
  state.selectedTrackIds = [
    "computing-pc",
    "networks-internet",
    "software-os",
    "databases-information-systems",
    "cybersecurity",
    "ai-ml",
    "semiconductors-hardware",
    "film-cinema-industry",
    "digital-new-media-art"
  ].filter((trackId) => getLensTrackById(trackId));
  syncSelectedTrackAlias();
  setSelectedPlaceIds([
    "united-states",
    "china",
    "japan",
    "britain-uk",
    "russia",
    "mexico-mesoamerica",
    "arab-middle-east",
    "east-africa",
    "low-countries",
    "global-transregional"
  ]);
  state.year = 2000;
  ensureTimelineRangeIncludesYear(state.year);
  state.region = "united-states";
  state.selectedItem = null;
  state.selectedEventId = null;
  state.activeEventModalEventId = null;
  state.detail = { type: "empty" };
  state.view = "time-slice";
  state.deepDiveOpen = true;
  renderAll();
}

function toggleLensSelection(lensId) {
  if (!lensId) return;
  const selected = new Set(state.selectedLensIds || []);
  if (selected.has(lensId)) {
    selected.delete(lensId);
  } else {
    selected.add(lensId);
  }
  setSelectedLensIds([...selected]);
}

function quickMatchesSelectedEvent(quick) {
  const eventByYear = {
    1453: "fall-constantinople",
    1879: "edison-light-bulb",
    1914: "world-war-i"
  };
  return state.selectedEventId === eventByYear[quick];
}

function renderTimeSliceView() {
  if (!els.timeSliceMatrix) return;
  els.timeSliceTitle.textContent = state.locale === "zh" ? `${formatYearLabel(state.year)} 年的世界` : `World at ${formatYearLabel(state.year)}`;
  els.timeSliceSubtitle.textContent = t("timeSliceSubtitle");
  const slice = deriveTimeSlice(state.year);
  const hasSelectedPlaces = getSelectedPlaceIds().length > 0;
  if (!slice.rows.length || !slice.regions.length) {
    els.timeSliceMatrix.innerHTML = `
      <div class="matrix-empty-state">
        <strong>${t("emptyTimeSliceTitle")}</strong>
        <p>${t("noMatrixSelection")}</p>
        <div class="matrix-empty-actions">
          <button class="secondary-btn small" type="button" data-open-tree-tab="lenses">${t("addLens")}</button>
          <button class="secondary-btn small" type="button" data-open-tree-tab="places">${t("addRegion")}</button>
          <button class="secondary-btn small" type="button" data-start-it-tracks>${t("startItTracks")}</button>
          <button class="secondary-btn small" type="button" data-start-2000-showcase>${t("start2000Showcase")}</button>
        </div>
      </div>
    `;
    bindMatrixUtilityActions();
    hideFloatingRegionHeader();
    return;
  }
  els.timeSliceMatrix.innerHTML = `
    <div class="matrix-grid" style="--matrix-cols:${slice.regions.length}">
      <div class="matrix-corner matrix-top-left">${t("lensRegion")}</div>
      <div class="matrix-region-strip">
        ${slice.regions.map((region, index) => renderMatrixRegionHeading(region, hasSelectedPlaces, {
          isLast: index === slice.regions.length - 1
        })).join("")}
      </div>
      ${slice.rows.map((row, rowIndex) => {
        const isLastRow = rowIndex === slice.rows.length - 1;
        return `
        ${renderMatrixLensHeading(row, { isLast: isLastRow })}
        ${row.cells.map((cell, cellIndex) => renderTimeSliceCell(cell, {
          isLastRow,
          isLastCol: cellIndex === row.cells.length - 1
        })).join("")}
      `;
      }).join("")}
    </div>
    <div class="matrix-mobile">
      ${slice.regions.map((region) => `
        <article class="matrix-region-card">
          <h3>${localizedRegionName(region)}</h3>
          ${slice.rows.map((row) => {
            const cell = row.cells.find((item) => item.region === region);
            return `
              <button class="matrix-mobile-row ${cell.hasData ? "" : "empty"} ${cell.matchKind || ""}" data-region="${cell.region}" data-lens-id="${cell.lensId}" data-track-id="${cell.trackId || ""}" data-item-type="${cell.itemType || ""}" data-item-id="${cell.itemId || ""}">
                <span>${getMatrixRowLabel(row)}</span>
                <strong><small>${cell.matchKindLabel || localizedTypeLabel(cell.typeLabel)}</small>${cell.title}${cell.supportCount ? `<em>${formatMatrixEventCount(cell.supportCount)}</em>` : ""}</strong>
              </button>
            `;
          }).join("")}
        </article>
      `).join("")}
    </div>
  `;
  renderFloatingRegionHeader(slice, hasSelectedPlaces);

  els.timeSliceMatrix.querySelectorAll(".matrix-cell, .matrix-mobile-row").forEach((button) => {
    button.addEventListener("click", () => activateTimeSliceCell(button.dataset));
  });
  els.timeSliceMatrix.querySelectorAll("[data-remove-matrix-lens]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      removeSelectedLensOrTrack(button.dataset.removeMatrixLens, "lens");
    });
  });
  els.timeSliceMatrix.querySelectorAll("[data-remove-matrix-track]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      removeSelectedLensOrTrack(button.dataset.removeMatrixTrack, "track");
    });
  });
  els.timeSliceMatrix.querySelectorAll("[data-axis-lens-phase-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      scrollToLensPhaseSegment(button.dataset.axisLensPhaseId);
    });
  });
  bindMatrixHeaderEvents(els.timeSliceMatrix);
  els.timeSliceMatrix.removeEventListener("scroll", updateFloatingRegionHeader);
  els.timeSliceMatrix.addEventListener("scroll", updateFloatingRegionHeader, { passive: true });
  bindMatrixUtilityActions();
  updateFloatingRegionHeader();
}

function renderFloatingRegionHeader(slice, removable) {
  const floatingHeader = getFloatingRegionHeaderElement();
  floatingHeader.innerHTML = `
      <div class="matrix-floating-region-track" style="--matrix-cols:${slice.regions.length}">
        ${slice.regions.map((region, index) => renderMatrixRegionHeading(region, removable, {
          isLast: index === slice.regions.length - 1
        })).join("")}
      </div>
  `;
  bindMatrixHeaderEvents(floatingHeader);
}

function getFloatingRegionHeaderElement() {
  let floatingHeader = document.getElementById("matrixFloatingRegionHeader");
  if (!floatingHeader) {
    floatingHeader = document.createElement("div");
    floatingHeader.id = "matrixFloatingRegionHeader";
    floatingHeader.className = "matrix-floating-region-header";
    floatingHeader.setAttribute("aria-hidden", "true");
    document.body.appendChild(floatingHeader);
  }
  return floatingHeader;
}

function bindMatrixHeaderEvents(root) {
  root.querySelectorAll("[data-remove-matrix-region]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      removeSelectedRegion(button.dataset.removeMatrixRegion);
    });
  });
  root.querySelectorAll("[data-axis-region-phase-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      scrollToRegionPhaseSegment(button.dataset.axisRegionPhaseId);
    });
  });
}

function hideFloatingRegionHeader() {
  const floatingHeader = document.getElementById("matrixFloatingRegionHeader");
  if (!floatingHeader) return;
  floatingHeader.classList.remove("visible");
  floatingHeader.setAttribute("aria-hidden", "true");
}

function updateFloatingRegionHeader() {
  if (!els.timeSliceMatrix) return;
  const floatingHeader = document.getElementById("matrixFloatingRegionHeader");
  const grid = els.timeSliceMatrix.querySelector(".matrix-grid");
  const realHeader = els.timeSliceMatrix.querySelector(".matrix-region-strip");
  const corner = els.timeSliceMatrix.querySelector(".matrix-corner");
  if (!floatingHeader || !grid || !realHeader || !corner) return;

  const gridStyle = window.getComputedStyle(grid);
  const isMobileLayout = gridStyle.display === "none";
  const topBarBottom = els.topControlCenter
    ? Math.ceil(els.topControlCenter.getBoundingClientRect().bottom)
    : 0;
  const gridRect = grid.getBoundingClientRect();
  const realHeaderRect = realHeader.getBoundingClientRect();
  const cornerWidth = Math.round(corner.getBoundingClientRect().width);
  const shouldShow = !isMobileLayout
    && realHeaderRect.top <= topBarBottom
    && gridRect.bottom > topBarBottom + realHeaderRect.height;

  floatingHeader.classList.toggle("visible", shouldShow);
  floatingHeader.setAttribute("aria-hidden", String(!shouldShow));
  if (!shouldShow) return;

  const matrixRect = els.timeSliceMatrix.getBoundingClientRect();
  const left = Math.round(matrixRect.left + cornerWidth);
  const width = Math.max(0, Math.round(matrixRect.width - cornerWidth));
  floatingHeader.style.top = `${topBarBottom}px`;
  floatingHeader.style.left = `${left}px`;
  floatingHeader.style.width = `${width}px`;
  syncFloatingRegionHeaderScroll();
}

function syncFloatingRegionHeaderScroll() {
  if (!els.timeSliceMatrix) return;
  const track = document.querySelector("#matrixFloatingRegionHeader .matrix-floating-region-track");
  if (!track) return;
  track.style.transform = `translateX(${-els.timeSliceMatrix.scrollLeft}px)`;
}

function bindMatrixUtilityActions() {
  if (!els.timeSliceMatrix) return;
  els.timeSliceMatrix.querySelectorAll("[data-start-it-tracks]").forEach((button) => {
    button.addEventListener("click", startWithItTracks);
  });
  els.timeSliceMatrix.querySelectorAll("[data-start-2000-showcase]").forEach((button) => {
    button.addEventListener("click", startWith2000Showcase);
  });
}

function renderMatrixRegionHeading(region, removable, options = {}) {
  const phaseSummary = getActiveRegionAxisPhase(region, state.year);
  return `
    <div class="matrix-region-heading ${removable ? "removable" : ""} ${options.isLast ? "matrix-top-right" : ""}">
      <div class="matrix-axis-copy">
        <span class="matrix-axis-title">${localizedRegionName(region)}</span>
        ${renderMatrixAxisPhase(phaseSummary, "region")}
      </div>
      ${removable ? `<button class="matrix-remove-btn" type="button" data-remove-matrix-region="${region}" aria-label="Remove ${escapeHtml(localizedRegionName(region))}">×</button>` : ""}
    </div>
  `;
}

function renderMatrixLensHeading(row, options = {}) {
  const removable = row.type === "track" ? getSelectedTrackIds().includes(row.track.id) : getSelectedLensIds().includes(row.lens.id);
  const removeAttr = row.type === "track"
    ? `data-remove-matrix-track="${row.track.id}"`
    : `data-remove-matrix-lens="${row.lens.id}"`;
  const phaseSummary = getActiveLensAxisPhase(row, state.year);
  return `
    <div class="matrix-lens-heading ${removable ? "removable" : ""} ${options.isLast ? "matrix-bottom-left" : ""}">
      <div class="matrix-axis-copy">
        <span class="matrix-axis-title">${getMatrixRowLabel(row)}</span>
        ${renderMatrixAxisPhase(phaseSummary, "lens")}
      </div>
      ${removable ? `<button class="matrix-remove-btn" type="button" ${removeAttr} aria-label="Remove ${escapeHtml(getMatrixRowLabel(row))}">×</button>` : ""}
    </div>
  `;
}

function renderMatrixAxisPhase(phaseSummary, axisType) {
  if (!phaseSummary || !phaseSummary.primary) {
    return `<span class="matrix-axis-phase-empty">${axisType === "region" ? t("noRegionPhaseAtYear") : t("noLensPhaseAtYear")}</span>`;
  }
  const node = phaseSummary.primary;
  const attr = axisType === "region"
    ? `data-axis-region-phase-id="${node.id}"`
    : `data-axis-lens-phase-id="${node.id}"`;
  const countMarkup = phaseSummary.count > 1 ? `<span class="matrix-axis-more">+${phaseSummary.count - 1}</span>` : "";
  return `
    <button class="matrix-axis-phase-btn" type="button" ${attr}>
      <span>${localizedItemTitle(node)}</span>
      ${countMarkup}
    </button>
  `;
}

function getActiveLensAxisPhase(row, year) {
  const phases = row.type === "track"
    ? getLineageNodesForTrack(row.track.id)
    : getLineageNodesForLens(row.lens.id).filter((node) => !(node.trackIds || []).length);
  return summarizeActiveAxisPhases(phases.filter((node) => yearInPeriod(year, node)), year);
}

function getActiveRegionAxisPhase(regionId, year) {
  return summarizeActiveAxisPhases(getRegionPhasesForPlace(regionId).filter((node) => yearInPeriod(year, node)), year);
}

function summarizeActiveAxisPhases(phases, year) {
  const ranked = rankActivePhases(phases, year);
  return {
    primary: ranked[0] || null,
    count: ranked.length
  };
}

function rankActivePhases(phases, year) {
  return phases.slice().sort((a, b) => {
    const durationDiff = getPeriodDuration(a) - getPeriodDuration(b);
    if (durationDiff !== 0) return durationDiff;
    const aAnchor = typeof a.entryYear === "number" ? a.entryYear : (typeof a.startYear === "number" ? a.startYear : year);
    const bAnchor = typeof b.entryYear === "number" ? b.entryYear : (typeof b.startYear === "number" ? b.startYear : year);
    const distanceDiff = Math.abs(aAnchor - year) - Math.abs(bAnchor - year);
    if (distanceDiff !== 0) return distanceDiff;
    return (b.startYear || -Infinity) - (a.startYear || -Infinity);
  });
}

function renderTrackFocusPanel() {
  if (!els.trackFocusPanel) return;
  els.trackFocusPanel.hidden = true;
  els.trackFocusPanel.innerHTML = "";
}

function renderSelectedFocusChips() {
  if (!els.selectedFocusChips) return;
  els.selectedFocusChips.innerHTML = "";
}

function renderSelectedLensChipsMarkup() {
  const selectedLensIds = getSelectedLensIds();
  const selectedTrackIds = getSelectedTrackIds();
  const chips = [
    ...selectedLensIds.map((lensId) => {
      const lens = getLensById(lensId);
      if (!lens) return "";
      return `
        <button class="selected-focus-chip" type="button" data-remove-lens-id="${lens.id}" aria-label="Remove ${escapeHtml(localizedLensTitle(lens))}">
          ${localizedLensTitle(lens)} <span aria-hidden="true">×</span>
        </button>
      `;
    }),
    ...selectedTrackIds.map((trackId) => {
      const track = getLensTrackById(trackId);
      if (!track) return "";
      return `
        <button class="selected-focus-chip" type="button" data-remove-track-id="${track.id}" aria-label="Remove ${escapeHtml(localizedTrackTitle(track))}">
          ${localizedTrackTitle(track)} <span aria-hidden="true">×</span>
        </button>
      `;
    })
  ].filter(Boolean);

  return `
    <div class="selected-focus-chips" aria-label="${escapeHtml(t("selectedLens"))}">
      <span class="selected-focus-label">${t("selectedLens")}</span>
      ${chips.length ? chips.join("") : `<span class="selected-focus-empty">${t("noSelectedLens")}</span>`}
    </div>
  `;
}

function bindSelectedLensChipEvents(root) {
  root.querySelectorAll("[data-remove-lens-id]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleLensSelection(button.dataset.removeLensId);
      state.selectedItem = null;
      state.selectedEventId = null;
      state.detail = { type: "empty" };
      renderAll();
    });
  });
  root.querySelectorAll("[data-remove-track-id]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleTrackSelection(button.dataset.removeTrackId);
      state.selectedItem = null;
      state.selectedEventId = null;
      state.detail = { type: "empty" };
      renderAll();
    });
  });
}

function renderLensTreeDrawer() {
  if (!els.lensTreeDrawer || !els.lensTreeContent) return;
  const open = Boolean(state.lensDrawerOpen);
  if (open && els.topControlCenter) {
    const topOffset = Math.ceil(els.topControlCenter.getBoundingClientRect().bottom + 8);
    document.documentElement.style.setProperty("--lens-drawer-top", `${topOffset}px`);
  }
  document.body.classList.toggle("lens-drawer-open", open);
  els.lensTreeDrawer.classList.toggle("open", open);
  els.lensTreeDrawer.setAttribute("aria-hidden", String(!open));
  if (els.openLensTreeBtn) {
    els.openLensTreeBtn.classList.toggle("active", open);
    els.openLensTreeBtn.setAttribute("aria-expanded", String(open));
  }
  els.lensTreeBackdrop.hidden = !open;

  const activeTab = state.knowledgeTreeTab || "lenses";
  els.lensTreeContent.innerHTML = `
    <div class="knowledge-tree-tabs" role="tablist" aria-label="${t("exploreKnowledgeTree")}">
      <button class="${activeTab === "lenses" ? "active" : ""}" type="button" data-tree-tab="lenses">${t("lensTreeTab")}</button>
      <button class="${activeTab === "places" ? "active" : ""}" type="button" data-tree-tab="places">${t("placeTreeTab")}</button>
    </div>
    ${activeTab === "places" ? renderPlaceTreeContent() : renderLensTreeContent()}
  `;
  els.lensTreeContent.querySelectorAll("[data-tree-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.knowledgeTreeTab = button.dataset.treeTab;
      renderLensTreeDrawer();
    });
  });
  els.lensTreeContent.querySelector("[data-tree-toggle-all-lenses]")?.addEventListener("click", () => {
    toggleAllLensTreeItems();
  });
  els.lensTreeContent.querySelector("[data-tree-toggle-all-places]")?.addEventListener("click", () => {
    toggleAllPlaces();
  });
  els.lensTreeContent.querySelectorAll("[data-tree-toggle-all-tracks]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleAllTracksForLens(button.dataset.treeToggleAllTracks);
    });
  });
  els.lensTreeContent.querySelectorAll("[data-tree-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLensTreeNodeExpanded(button.dataset.treeToggle);
    });
  });
  els.lensTreeContent.querySelectorAll("[data-tree-select-lens]").forEach((button) => {
    button.addEventListener("click", () => activateLensTreeNode("lens", button.dataset.treeSelectLens));
  });
  els.lensTreeContent.querySelectorAll("[data-tree-select-track]").forEach((button) => {
    button.addEventListener("click", () => activateLensTreeNode("track", button.dataset.treeSelectTrack));
  });
  els.lensTreeContent.querySelectorAll("[data-tree-select-place]").forEach((button) => {
    button.addEventListener("click", () => activateLensTreeNode("place", button.dataset.treeSelectPlace));
  });
  els.lensTreeContent.querySelectorAll("[data-tree-phase]").forEach((button) => {
    button.addEventListener("click", () => activateLensTreeNode("phase", button.dataset.treePhase));
  });
}

function toggleKnowledgeTreeTab(tab) {
  const targetTab = tab === "places" ? "places" : "lenses";
  if (state.lensDrawerOpen && state.knowledgeTreeTab === targetTab) {
    state.lensDrawerOpen = false;
  } else {
    state.knowledgeTreeTab = targetTab;
    state.lensDrawerOpen = true;
  }
  state.controlsCollapsed = true;
  renderControlsState();
  renderLensTreeDrawer();
}

function renderLensTreeContent() {
  const selectionState = getLensTreeSelectionState();
  return `
    <button class="lens-tree-clear ${selectionState.all ? "active" : ""} ${selectionState.partial ? "partial" : ""}" type="button" data-tree-toggle-all-lenses aria-pressed="${selectionState.all}">
      ${t("all")}
    </button>
    ${HISTORY_DATA.lenses.map((lens) => renderLensTreeLensNode(lens)).join("")}
  `;
}

function renderPlaceTreeContent() {
  ensurePlaceMacroAreasExpanded();
  const selectionState = getPlaceTreeSelectionState();
  return `
    <div class="place-reference-note">${t("placeReferenceNote")}</div>
    <button class="lens-tree-clear ${selectionState.all ? "active" : ""} ${selectionState.partial ? "partial" : ""}" type="button" data-tree-toggle-all-places aria-pressed="${selectionState.all}">
      ${t("all")}
    </button>
    ${(HISTORY_DATA.macroAreas || []).map((area) => renderPlaceTreeMacroArea(area)).join("")}
  `;
}

function ensurePlaceMacroAreasExpanded() {
  if (state.placeTreeInitialized) return;
  const selected = new Set(state.expandedLensTreeNodeIds || []);
  (HISTORY_DATA.macroAreas || []).forEach((area) => selected.add(getLensTreeKey("macro", area.id)));
  state.expandedLensTreeNodeIds = [...selected];
  state.placeTreeInitialized = true;
}

function renderPlaceTreeMacroArea(area) {
  const places = (HISTORY_DATA.places || []).filter((place) => place.macroAreaId === area.id);
  if (!places.length) return "";
  const key = getLensTreeKey("macro", area.id);
  const expanded = isLensTreeNodeExpanded(key);
  const selected = places.some((place) => getSelectedPlaceIds().includes(place.id));
  return `
    <section class="lens-tree-node place-tree-macro ${selected ? "selected" : ""}">
      <div class="lens-tree-row">
        <button class="lens-tree-select" type="button" data-tree-toggle="${key}">
          <span>${localizedMacroAreaTitle(area)}</span>
        </button>
        <button class="lens-tree-expander" type="button" data-tree-toggle="${key}" aria-expanded="${expanded}">
          ${expanded ? "−" : "+"}
        </button>
      </div>
      ${expanded ? `<div class="lens-tree-children">${places.map(renderPlaceTreePlaceNode).join("")}</div>` : ""}
    </section>
  `;
}

function renderPlaceTreePlaceNode(place) {
  const selected = getSelectedPlaceIds().includes(place.id);
  return `
    <section class="lens-tree-node place-tree-place ${selected ? "selected" : ""}">
      <div class="lens-tree-row">
        <button class="lens-tree-select ${selected ? "active" : ""}" type="button" data-tree-select-place="${place.id}">
          <span>${localizedPlaceTitle(place)}</span>
        </button>
      </div>
    </section>
  `;
}

function renderLensTreeLensNode(lens) {
  const tracks = getTracksForLens(lens.id);
  const hasChildren = tracks.length;
  const expanded = isLensTreeNodeExpanded(getLensTreeKey("lens", lens.id));
  const selected = state.selectedLensIds.includes(lens.id);
  const hasSelectedChild = tracks.some((track) => getSelectedTrackIds().includes(track.id));
  const trackSelectionState = getTrackSelectionStateForLens(lens.id);
  return `
    <section class="lens-tree-node lens-tree-lens ${selected || hasSelectedChild ? "selected" : ""}">
      <div class="lens-tree-row">
        <button class="lens-tree-select ${selected ? "active" : ""}" type="button" data-tree-select-lens="${lens.id}">
          <span>${localizedLensTitle(lens)}</span>
        </button>
        <button class="lens-tree-expander" type="button" data-tree-toggle="${getLensTreeKey("lens", lens.id)}" aria-expanded="${expanded}" ${hasChildren ? "" : "disabled"}>
          ${hasChildren ? (expanded ? "−" : "+") : ""}
        </button>
      </div>
      ${expanded ? `
        <div class="lens-tree-children">
          ${tracks.length ? `
            <div class="lens-tree-group-header">
              <div class="lens-tree-group-label">${t("focusTrack")}</div>
              <button class="lens-tree-track-all ${trackSelectionState.all ? "active" : ""} ${trackSelectionState.partial ? "partial" : ""}" type="button" data-tree-toggle-all-tracks="${lens.id}" aria-pressed="${trackSelectionState.all}">
                ${t("allTracks")}
              </button>
            </div>
            ${tracks.map((track) => renderLensTreeTrackNode(track)).join("")}
          ` : ""}
        </div>
      ` : ""}
    </section>
  `;
}

function renderLensTreeTrackNode(track) {
  const selected = getSelectedTrackIds().includes(track.id);
  return `
    <section class="lens-tree-node lens-tree-track ${selected ? "selected" : ""}">
      <div class="lens-tree-row lens-tree-track-row">
        <button class="lens-tree-select ${selected ? "active" : ""}" type="button" data-tree-select-track="${track.id}">
          <span>${localizedTrackTitle(track)}</span>
        </button>
      </div>
    </section>
  `;
}

function renderLensTreePhaseNode(node) {
  const active = state.activePhaseModalNodeId === node.id || yearInRange(state.year, node.startYear, node.endYear);
  return `
    <button class="lens-tree-phase ${active ? "active" : ""}" type="button" data-tree-phase="${node.id}">
      <span>${node.yearLabel}</span>
      <strong>${localizedItemTitle(node)}</strong>
    </button>
  `;
}

function getLensTreeSelectionState() {
  const lensIds = (HISTORY_DATA.lenses || []).map((lens) => lens.id).filter(Boolean);
  const trackIds = (HISTORY_DATA.lensTracks || []).map((track) => track.id).filter(Boolean);
  const allIds = [...lensIds, ...trackIds];
  const selected = new Set([...getSelectedLensIds(), ...getSelectedTrackIds()]);
  const selectedCount = allIds.filter((id) => selected.has(id)).length;
  return {
    all: allIds.length > 0 && selectedCount === allIds.length,
    partial: selectedCount > 0 && selectedCount < allIds.length
  };
}

function getPlaceTreeSelectionState() {
  const placeIds = getAllPlaceIds();
  const selected = new Set(getSelectedPlaceIds());
  const selectedCount = placeIds.filter((id) => selected.has(id)).length;
  return {
    all: placeIds.length > 0 && selectedCount === placeIds.length,
    partial: selectedCount > 0 && selectedCount < placeIds.length
  };
}

function getTrackSelectionStateForLens(lensId) {
  const trackIds = getTracksForLens(lensId).map((track) => track.id);
  const selected = new Set(getSelectedTrackIds());
  const selectedCount = trackIds.filter((id) => selected.has(id)).length;
  return {
    all: trackIds.length > 0 && selectedCount === trackIds.length,
    partial: selectedCount > 0 && selectedCount < trackIds.length
  };
}

function toggleAllLensTreeItems() {
  const selectionState = getLensTreeSelectionState();
  if (selectionState.all) {
    setSelectedLensIds([]);
    state.selectedTrackIds = [];
  } else {
    setSelectedLensIds((HISTORY_DATA.lenses || []).map((lens) => lens.id));
    state.selectedTrackIds = (HISTORY_DATA.lensTracks || []).map((track) => track.id);
  }
  syncSelectedTrackAlias();
  resetSelectionDetail();
  renderAll();
}

function toggleAllPlaces() {
  const selectionState = getPlaceTreeSelectionState();
  setSelectedPlaceIds(selectionState.all ? [] : getAllPlaceIds());
  resetSelectionDetail();
  renderAll();
}

function toggleAllTracksForLens(lensId) {
  const trackIds = getTracksForLens(lensId).map((track) => track.id);
  if (!trackIds.length) return;
  const selectionState = getTrackSelectionStateForLens(lensId);
  const selected = new Set(getSelectedTrackIds());
  trackIds.forEach((trackId) => {
    if (selectionState.all) {
      selected.delete(trackId);
    } else {
      selected.add(trackId);
    }
  });
  state.selectedTrackIds = [...selected];
  syncSelectedTrackAlias();
  resetSelectionDetail();
  renderAll();
}

function resetSelectionDetail() {
  state.selectedItem = null;
  state.selectedEventId = null;
  state.detail = { type: "empty" };
  state.view = "time-slice";
  state.deepDiveOpen = true;
}

function getLensTreeKey(type, id) {
  return `${type}:${id}`;
}

function isLensTreeNodeExpanded(key) {
  return (state.expandedLensTreeNodeIds || []).includes(key);
}

function toggleLensTreeNodeExpanded(key) {
  const selected = new Set(state.expandedLensTreeNodeIds || []);
  if (selected.has(key)) {
    selected.delete(key);
  } else {
    selected.add(key);
  }
  state.expandedLensTreeNodeIds = [...selected];
  renderLensTreeDrawer();
}

function activateLensTreeNode(type, id) {
  if (type === "lens") {
    toggleLensSelection(id);
    state.selectedItem = null;
    state.selectedEventId = null;
    state.detail = { type: "empty" };
    state.view = "time-slice";
    state.deepDiveOpen = false;
    renderAll();
    return;
  }
  if (type === "track") {
    toggleTrackSelection(id);
    const track = getLensTrackById(id);
    if (track && getSelectedTrackIds().includes(id)) {
      const key = getLensTreeKey("lens", track.parentLensId);
      if (!isLensTreeNodeExpanded(key)) {
        state.expandedLensTreeNodeIds = [...(state.expandedLensTreeNodeIds || []), key];
      }
    }
    state.selectedItem = null;
    state.selectedEventId = null;
    state.detail = { type: "empty" };
    state.view = "time-slice";
    state.deepDiveOpen = false;
    renderAll();
    return;
  }
  if (type === "place") {
    togglePlaceSelection(id);
    state.region = id;
    state.selectedItem = null;
    state.selectedEventId = null;
    state.detail = { type: "empty" };
    state.view = "time-slice";
    state.deepDiveOpen = true;
    renderAll();
    return;
  }
  if (type === "phase") {
    activateLineagePreviewNode(id, { openModal: false });
  }
}

function renderTrackSelector(lens) {
  const tracks = getTracksForLens(lens.id);
  return `
    <section class="track-selector-section">
      <div class="section-kicker">${t("focusedTracks")}</div>
      <div class="track-option-row">
        ${tracks.map((track) => `
          <button class="track-option ${getSelectedTrackIds().includes(track.id) ? "active" : ""}" data-track-option="${track.id}" data-parent-lens-id="${lens.id}" type="button">
            ${localizedTrackTitle(track)}
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTrackTimelineStrip(track) {
  const nodes = getLineageNodesForTrack(track.id);
  return `
    <div class="track-strip" aria-label="${track.title}">
      <div class="track-strip-copy">
        <strong>${localizedTrackTitle(track)}</strong>
        <span>${track.shortDescription}</span>
      </div>
      <div class="track-segment-row">
        ${nodes.map((node) => renderTrackSegment(node)).join("")}
      </div>
    </div>
  `;
}

function renderTrackSegment(node) {
  const active = yearInRange(state.year, node.startYear, node.endYear);
  return `
    <button class="track-segment ${active ? "active" : ""}" data-node-id="${node.id}" type="button">
      <span>${node.yearLabel}</span>
      <strong>${localizedItemTitle(node)}</strong>
    </button>
  `;
}

function renderLineagePreview() {
  if (!els.lineagePreviewSection) return;
  const selectedLensIds = getSelectedLensIds();
  const selectedTrackIds = getSelectedTrackIds();
  const sections = [
    ...selectedLensIds.map((lensId) => getLineagePreviewModel(lensId)),
    ...selectedTrackIds.map((trackId) => getTrackLineagePreviewModel(trackId))
  ].filter(Boolean);

  els.lineagePreviewSection.hidden = false;
  els.lineagePreviewSection.innerHTML = `
    <article class="lineage-preview-card">
      <div class="lineage-preview-card-header">
        <div class="lineage-preview-title-group">
          <div>
            <div class="section-kicker">${t("lensPhases")}</div>
            <h2>${t("lensPhases")}</h2>
          </div>
        </div>
        <button class="secondary-btn small lineage-preview-add-btn" type="button" data-open-tree-tab="lenses">${t("addLens")}</button>
        <div class="lineage-preview-selected">
          ${renderSelectedLensChipsMarkup()}
        </div>
      </div>
      <div class="lineage-preview-body">
        ${sections.length ? sections.map(renderLineagePreviewModel).join("") : `<div class="empty-state">${t("noSelectedLens")}</div>`}
      </div>
    </article>
  `;
  bindSelectedLensChipEvents(els.lineagePreviewSection);
  els.lineagePreviewSection.querySelectorAll("[data-phase-navigate-id]").forEach((button) => {
    button.addEventListener("click", () => activateLineagePreviewNode(button.dataset.phaseNavigateId, { openModal: false }));
  });
  els.lineagePreviewSection.querySelectorAll("[data-phase-detail-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      activateLineagePreviewNode(button.dataset.phaseDetailId, { openModal: true });
    });
  });
}

function renderRegionPhasesPreview() {
  if (!els.regionPhasesSection) return;
  const selectedPlaceIds = getSelectedPlaceIds();
  const sections = selectedPlaceIds
    .map((placeId) => {
      const place = getPlaceById(placeId);
      if (!place) return null;
      return {
        place,
        nodes: getRegionPhasesForPlace(place.id)
      };
    })
    .filter((section) => section && section.nodes.length);

  els.regionPhasesSection.hidden = false;
  els.regionPhasesSection.innerHTML = `
    <article class="lineage-preview-card region-phases-card">
      <div class="lineage-preview-card-header">
        <div class="lineage-preview-title-group">
          <div>
            <div class="section-kicker">${t("regionPhases")}</div>
            <h2>${t("regionPhases")}</h2>
            <p class="place-reference-note">${t("placeReferenceNote")}</p>
          </div>
        </div>
        <button class="secondary-btn small lineage-preview-add-btn" type="button" data-open-tree-tab="places">${t("addRegion")}</button>
        <div class="lineage-preview-selected">
          ${renderSelectedPlaceChipsMarkup()}
        </div>
      </div>
      <div class="lineage-preview-body">
        ${sections.length ? sections.map(renderRegionPhasePreviewModel).join("") : `<div class="empty-state">${t("noSelectedPlaces")}</div>`}
      </div>
    </article>
  `;
  bindSelectedPlaceChipEvents(els.regionPhasesSection);
  els.regionPhasesSection.querySelectorAll("[data-region-phase-navigate-id]").forEach((button) => {
    button.addEventListener("click", () => activateRegionPhasePreviewNode(button.dataset.regionPhaseNavigateId, { openModal: false }));
  });
  els.regionPhasesSection.querySelectorAll("[data-region-phase-detail-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      activateRegionPhasePreviewNode(button.dataset.regionPhaseDetailId, { openModal: true });
    });
  });
}

function renderSelectedPlaceChipsMarkup() {
  const selected = getSelectedPlaceIds();
  if (!selected.length) return `<span class="empty-selected">${t("noSelectedPlaces")}</span>`;
  return `
    <div class="selected-focus-chips">
      <span>${t("selectedPlaces")}</span>
      ${selected.map((placeId) => {
        const place = getPlaceById(placeId);
        return `
          <button class="selected-focus-chip" type="button" data-remove-place="${placeId}">
            ${localizedPlaceTitle(place)} ×
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function bindSelectedPlaceChipEvents(scope) {
  scope.querySelectorAll("[data-remove-place]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPlaceIds = getSelectedPlaceIds().filter((placeId) => placeId !== button.dataset.removePlace);
      if (!state.selectedPlaceIds.includes(state.region)) {
        state.region = state.selectedPlaceIds[0] || "turkey-anatolia";
      }
      renderAll();
    });
  });
}

function renderRegionPhasePreviewModel(model) {
  return `
    <section class="lineage-preview-model region-phase-model">
      <div class="lineage-preview-heading">
        <div>
          <h3>${localizedPlaceTitle(model.place)}</h3>
        </div>
        <p>${state.locale === "zh" ? model.place.summaryZh : model.place.summary}</p>
      </div>
      <div class="lineage-preview-strip">
        ${model.nodes.map(renderRegionPhasePreviewSegment).join("")}
      </div>
    </section>
  `;
}

function renderRegionPhasePreviewSegment(node) {
  const active = state.activeRegionPhaseModalNodeId === node.id || yearInRange(state.year, node.startYear, node.endYear);
  const linked = isNodeLinkedToSelectedEvent(node.id, "region");
  return `
    <div class="lineage-preview-segment region-phase-segment ${active ? "active" : ""} ${linked ? "event-linked" : ""}" data-node-id="${node.id}" data-region-phase-node-id="${node.id}">
      <button class="phase-segment-main" data-region-phase-navigate-id="${node.id}" type="button">
        <span>${node.yearLabel}</span>
        <strong>${localizedItemTitle(node)}</strong>
      </button>
      <button class="phase-segment-detail-btn" data-region-phase-detail-id="${node.id}" type="button" aria-label="${t("openPhaseDetail")}">›</button>
    </div>
  `;
}

function getLineagePreviewModel(lensId) {
  const lens = getLensById(lensId);
  if (!lens) return null;
  return {
    title: localizedLensTitle(lens),
    subtitle: lens.shortDescription,
    nodes: getLineageNodesForLens(lens.id).filter((node) => !(node.trackIds || []).length)
  };
}

function getTrackLineagePreviewModel(trackId) {
  const track = getLensTrackById(trackId);
  if (!track) return null;
  const parentLens = getLensById(track.parentLensId);
  return {
    eyebrow: parentLens ? localizedLensTitle(parentLens) : "",
    title: localizedTrackTitle(track),
    subtitle: track.shortDescription,
    nodes: getLineageNodesForTrack(track.id)
  };
}

function renderLineagePreviewModel(model) {
  return `
    <section class="lineage-preview-model">
      <div class="lineage-preview-heading">
        <div>
          ${model.eyebrow ? `<span class="lineage-preview-eyebrow">${model.eyebrow}</span>` : ""}
          <h3>${model.title}</h3>
        </div>
        <p>${model.subtitle}</p>
      </div>
      <div class="lineage-preview-strip">
        ${model.nodes.map((node) => renderLineagePreviewSegment(node)).join("")}
      </div>
    </section>
  `;
}

function renderLineagePreviewSegment(node) {
  const active = state.activePhaseModalNodeId === node.id || yearInRange(state.year, node.startYear, node.endYear);
  const linked = isNodeLinkedToSelectedEvent(node.id, "lens");
  return `
    <div class="lineage-preview-segment ${active ? "active" : ""} ${linked ? "event-linked" : ""}" data-node-id="${node.id}" data-phase-node-id="${node.id}">
      <button class="phase-segment-main" data-phase-navigate-id="${node.id}" type="button">
        <span>${node.yearLabel}</span>
        <strong>${localizedItemTitle(node)}</strong>
      </button>
      <button class="phase-segment-detail-btn" data-phase-detail-id="${node.id}" type="button" aria-label="${t("openPhaseDetail")}">›</button>
    </div>
  `;
}

function scrollToLensPhaseSegment(nodeId) {
  scrollToPhaseSegment(`[data-phase-node-id="${cssEscape(nodeId)}"]`, nodeId);
}

function scrollToRegionPhaseSegment(nodeId) {
  scrollToPhaseSegment(`[data-region-phase-node-id="${cssEscape(nodeId)}"]`, nodeId);
}

function scrollToPhaseSegment(selector, nodeId) {
  const target = document.querySelector(selector);
  if (!target) return;
  const strip = target.closest(".lineage-preview-strip");
  if (strip) {
    strip.scrollTo({
      left: Math.max(0, target.offsetLeft - 24),
      behavior: "smooth"
    });
  }
  target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  flashPhaseSegment(target, nodeId);
}

function flashPhaseSegment(target, nodeId) {
  target.classList.remove("jump-highlight");
  void target.offsetWidth;
  target.classList.add("jump-highlight");
  window.setTimeout(() => {
    const current = target.matches(`[data-node-id="${cssEscape(nodeId)}"]`) ? target : document.querySelector(`[data-node-id="${cssEscape(nodeId)}"]`);
    if (current) current.classList.remove("jump-highlight");
  }, 1400);
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(String(value));
  return String(value).replace(/["\\]/g, "\\$&");
}

function getSelectedEventForPhaseHighlight() {
  if (!state.selectedEventId) return null;
  return HISTORY_DATA.events.find((event) => event.id === state.selectedEventId) || null;
}

function isNodeLinkedToSelectedEvent(nodeId, kind) {
  const event = getSelectedEventForPhaseHighlight();
  if (!event) return false;
  const ids = kind === "region" ? event.regionPhaseIds || [] : event.phaseIds || [];
  return ids.includes(nodeId);
}

function syncSelectionToEventPhases(event) {
  if (!event) return;
  (event.phaseIds || []).forEach((phaseId) => flashPhaseSegmentById(phaseId, "lens"));
  (event.regionPhaseIds || []).forEach((phaseId) => flashPhaseSegmentById(phaseId, "region"));
}

function flashPhaseSegmentById(nodeId, kind) {
  const selector = kind === "region"
    ? `[data-region-phase-node-id="${cssEscape(nodeId)}"]`
    : `[data-phase-node-id="${cssEscape(nodeId)}"]`;
  const target = document.querySelector(selector);
  if (target) flashPhaseSegment(target, nodeId);
}

function selectTrackOption(trackId, parentLensId) {
  toggleTrackSelection(trackId);
  if (parentLensId && !state.selectedLensIds.includes(parentLensId)) {
    state.activeLensId = parentLensId;
    state.lens = getLensTitleById(parentLensId);
  }
  state.selectedItem = null;
  state.selectedEventId = null;
  state.detail = { type: "empty" };
  state.view = "time-slice";
  state.deepDiveOpen = false;
  renderAll();
}

function activateLineagePhaseNode(nodeId) {
  const node = HISTORY_DATA.lineageNodes.find((item) => item.id === nodeId);
  if (!node) return;
  state.year = getRepresentativeYearForNode(node);
  ensureTimelineRangeIncludesYear(state.year);
  state.region = getBestRegionForNode(node);
  setSelectedLensIds([node.lensId]);
  state.selectedTrackIds = node.trackIds || [];
  syncSelectedTrackAlias();
  state.view = "local";
  state.deepDiveOpen = true;
  state.selectedItem = { type: "lens-lineage", id: node.id };
  state.selectedEventId = null;
  state.detail = { type: "lineage-node", nodeId: node.id };
  state.mapHighlight = { type: "selected", regions: [state.region] };
  resetProgressiveDisclosure();
  renderAll();
  els.deepDivePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function activateLineagePreviewNode(nodeId, options = {}) {
  const node = HISTORY_DATA.lineageNodes.find((item) => item.id === nodeId);
  if (!node) return;
  const openModal = options.openModal !== false;
  state.year = getRepresentativeYearForNode(node, { source: "preview" });
  ensureTimelineRangeIncludesYear(state.year);
  syncSelectedTrackAlias();
  state.view = "time-slice";
  state.deepDiveOpen = true;
  state.selectedItem = { type: "lens-lineage", id: node.id };
  state.selectedEventId = null;
  state.detail = { type: "lineage-node", nodeId: node.id };
  state.activePhaseModalNodeId = openModal ? node.id : null;
  state.activeRegionPhaseModalNodeId = null;
  resetProgressiveDisclosure();
  renderAll();
}

function activateRegionPhasePreviewNode(nodeId, options = {}) {
  const node = findRegionPhaseById(nodeId);
  if (!node) return;
  const openModal = options.openModal !== false;
  state.year = getRepresentativeYearForNode(node, { source: "preview" });
  ensureTimelineRangeIncludesYear(state.year);
  state.region = node.placeId;
  state.view = "time-slice";
  state.deepDiveOpen = true;
  state.selectedItem = { type: "region-lineage", id: node.id };
  state.selectedEventId = null;
  state.detail = { type: "region-lineage", nodeId: node.id };
  state.activePhaseModalNodeId = null;
  state.activeRegionPhaseModalNodeId = openModal ? node.id : null;
  resetProgressiveDisclosure();
  renderAll();
}

function renderPhaseModal() {
  if (!els.phaseModal || !els.phaseModalContent) return;
  const node = state.activePhaseModalNodeId
    ? HISTORY_DATA.lineageNodes.find((item) => item.id === state.activePhaseModalNodeId)
    : state.activeRegionPhaseModalNodeId
      ? findRegionPhaseById(state.activeRegionPhaseModalNodeId)
      : null;
  if (!node) {
    els.phaseModal.hidden = true;
    els.phaseModalContent.innerHTML = "";
    return;
  }
  const isRegionPhase = Boolean(state.activeRegionPhaseModalNodeId);
  const lens = getLensById(node.lensId);
  const track = (node.trackIds || []).map(getLensTrackById).filter(Boolean)[0] || null;
  const place = isRegionPhase ? getPlaceById(node.placeId) : null;
  const nodeLensLabels = isRegionPhase ? (node.lensIds || []).map((lensId) => localizedLensTitle(lensId)) : [];
  const sources = (node.sourceRefs || []).map(getSourceTitle);
  const hasPhaseEssay = ["phaseIntro", "fromPrevious", "towardNext"].some((field) => getLocalizedPhaseField(node, field))
    || (Array.isArray(getLocalizedPhaseField(node, "definingFeatures")) && getLocalizedPhaseField(node, "definingFeatures").length);
  els.phaseModal.hidden = false;
  els.phaseModalContent.innerHTML = `
    <div class="phase-modal-kicker">${isRegionPhase ? t("regionalPhase") : t("phase")}</div>
    <h2 id="phaseModalTitle">${localizedItemTitle(node)}</h2>
    <div class="phase-modal-meta">
      <span>${node.yearLabel}</span>
      ${lens ? `<span>${localizedLensTitle(lens)}</span>` : ""}
      ${track ? `<span>${localizedTrackTitle(track)}</span>` : ""}
      ${place ? `<span>${localizedPlaceTitle(place)}</span>` : ""}
      ${nodeLensLabels.length ? `<span>${nodeLensLabels.join(" / ")}</span>` : ""}
      ${!place ? `<span>${(node.primaryRegions || []).map(localizedRegionName).join(" / ") || localizedRegionName("Global")}</span>` : ""}
    </div>
    ${renderPhaseImage(node)}
    ${hasPhaseEssay ? `
      ${renderPhaseEssaySection("whatThisPhaseMeans", getLocalizedPhaseField(node, "phaseIntro"))}
      ${renderPhaseEssaySection("fromPreviousPhase", getLocalizedPhaseField(node, "fromPrevious"))}
      ${renderPhaseEssaySection("whatDefinesIt", getLocalizedPhaseField(node, "definingFeatures"))}
      ${renderPhaseEssaySection("towardNextPhase", getLocalizedPhaseField(node, "towardNext"))}
    ` : `<p class="phase-modal-summary">${localizedItemSummary(node)}</p>`}
    ${node.sideBridges && node.sideBridges.length ? `
      <div class="phase-modal-section">
        <h3>${t("phaseSideBridges")}</h3>
        ${renderSimpleChips(node.sideBridges)}
      </div>
    ` : ""}
    ${renderPhaseRepresentativeEvents(node)}
    ${sources.length ? `
      <div class="phase-modal-section">
        <h3>${t("phaseSources")}</h3>
        <p>${sources.join(" · ")}</p>
      </div>
    ` : ""}
    <div class="phase-modal-footer">
      <span>${t("phaseConfidence")}: ${node.confidence || "medium"}</span>
      ${node.notes ? `<span>${node.notes}</span>` : ""}
    </div>
  `;
  els.phaseModalContent.querySelectorAll("[data-phase-event-id]").forEach((button) => {
    button.addEventListener("click", () => activateRepresentativeEvent(button.dataset.phaseEventId));
  });
  resetPhaseModalScroll();
}

function resetPhaseModalScroll() {
  window.requestAnimationFrame(() => {
    const card = els.phaseModal?.querySelector(".phase-modal-card");
    if (card) card.scrollTop = 0;
    if (els.phaseModalContent) els.phaseModalContent.scrollTop = 0;
  });
}

function getLocalizedPhaseField(node, field) {
  if (!node) return "";
  const zhField = `${field}Zh`;
  if (state.locale === "zh" && node[zhField]) return node[zhField];
  return node[field] || "";
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderPhaseImage(node) {
  if (!node.image) return "";
  const caption = getLocalizedPhaseField(node, "imageCaption") || node.imageCaption || "";
  const credit = node.imageCredit || "";
  const fallbacks = [node.image, ...(node.imageFallbacks || [])].filter(Boolean);
  const fallbackAttr = fallbacks.length > 1
    ? ` data-fallbacks="${fallbacks.slice(1).map(escapeHtml).join("|")}"`
    : "";
  return `
    <figure class="phase-modal-image">
      <img src="${escapeHtml(node.image)}" alt="${escapeHtml(node.imageAlt || localizedItemTitle(node))}" loading="lazy"${fallbackAttr} onerror="handlePhaseImageError(this)">
      ${caption || credit ? `
        <figcaption>
          ${caption ? `<span>${caption}</span>` : ""}
          ${credit ? `<small>${t("imageCredit")}: ${credit}</small>` : ""}
        </figcaption>
      ` : ""}
    </figure>
  `;
}

function handlePhaseImageError(img) {
  const fallbacks = (img.dataset.fallbacks || "").split("|").filter(Boolean);
  if (fallbacks.length) {
    const next = fallbacks.shift();
    img.dataset.fallbacks = fallbacks.join("|");
    img.src = next;
    return;
  }
  const figure = img.closest("figure");
  if (figure) figure.hidden = true;
}

function renderPhaseRepresentativeEvents(node) {
  const events = getRepresentativeEventsForPhase(node.id);
  if (!events.length) return "";
  return `
    <div class="phase-modal-section phase-events-section">
      <div class="phase-section-heading-row">
        <h3>${t("representativeEvents")}</h3>
        <span>${t("representativeEventsHint")}</span>
      </div>
      <div class="phase-event-list">
        ${events.map((event) => `
          <button class="phase-event-card" type="button" data-phase-event-id="${event.id}">
            <span>${formatYearLabel(event.year)}</span>
            <strong>${localizedItemTitle(event)}</strong>
            <small>${localizedPlaceTitle(event.primaryPlaceId) || localizedRegionName(event.region)}${event.place ? ` · ${event.place}` : ""}</small>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function getRepresentativeEventsForPhase(phaseId) {
  const node = HISTORY_DATA.lineageNodes.find((item) => item.id === phaseId) || findRegionPhaseById(phaseId);
  const eventIds = node && node.representativeEvents ? node.representativeEvents : [];
  const ordered = eventIds
    .map((id) => HISTORY_DATA.events.find((event) => event.id === id))
    .filter(Boolean);
  const linked = HISTORY_DATA.events
    .filter((event) => ((event.phaseIds || []).includes(phaseId) || (event.regionPhaseIds || []).includes(phaseId)) && !eventIds.includes(event.id))
    .sort((a, b) => a.year - b.year);
  return [...ordered, ...linked].slice(0, 6);
}

function activateRepresentativeEvent(eventId) {
  const event = HISTORY_DATA.events.find((item) => item.id === eventId);
  if (!event) return;
  const previousLensIds = [...getSelectedLensIds()];
  const previousTrackIds = [...getSelectedTrackIds()];
  const previousPlaceIds = [...getSelectedPlaceIds()];
  state.activePhaseModalNodeId = null;
  state.activeRegionPhaseModalNodeId = null;
  state.activeEventModalEventId = null;
  state.year = event.year;
  ensureTimelineRangeIncludesYear(state.year);
  state.region = event.primaryPlaceId || (event.placeIds || [])[0] || event.region;
  state.localContextScope = getEventLocalContextScope(event);
  state.localContextNearbyMode = null;
  state.selectedItem = { type: "event", id: event.id };
  state.selectedEventId = event.id;
  if (!previousLensIds.length && !previousTrackIds.length) {
    const lensIds = event.lensIds && event.lensIds.length
      ? [event.primaryLensId || event.lensIds[0], ...event.lensIds.filter((id) => id !== (event.primaryLensId || event.lensIds[0]))]
      : [];
    if (lensIds.length) setSelectedLensIds(lensIds);
    state.selectedTrackIds = event.trackIds ? [...event.trackIds] : [];
  } else {
    setSelectedLensIds(previousLensIds);
    state.selectedTrackIds = previousTrackIds;
  }
  if (previousPlaceIds.length) {
    state.selectedPlaceIds = previousPlaceIds;
  } else if (event.placeIds && event.placeIds.length) {
    setSelectedPlaceIds(event.placeIds);
  }
  syncSelectedTrackAlias();
  state.view = "local";
  state.deepDiveOpen = true;
  state.detail = getDetailForLocalItem("event", event.id);
  state.mapHighlight = { type: "selected", regions: [event.region] };
  resetProgressiveDisclosure();
  renderAll();
  window.requestAnimationFrame(() => syncSelectionToEventPhases(event));
  scrollToLocalContext(event.id);
}

function renderPhaseEssaySection(titleKey, content) {
  if (!content || (Array.isArray(content) && !content.length)) return "";
  const body = Array.isArray(content)
    ? `<ul>${content.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : `<p>${content}</p>`;
  return `
    <div class="phase-modal-section phase-essay-section">
      <h3>${t(titleKey)}</h3>
      ${body}
    </div>
  `;
}

function closePhaseModal() {
  state.activePhaseModalNodeId = null;
  state.activeRegionPhaseModalNodeId = null;
  const card = els.phaseModal?.querySelector(".phase-modal-card");
  if (card) card.scrollTop = 0;
  if (els.phaseModalContent) els.phaseModalContent.scrollTop = 0;
  renderPhaseModal();
  updateSectionNavigator();
}

function renderTimeSliceCell(cell, options = {}) {
  const cornerClass = [
    options.isLastRow && options.isLastCol ? "matrix-bottom-right" : ""
  ].filter(Boolean).join(" ");
  return `
    <button class="matrix-cell ${cell.hasData ? "" : "empty"} ${cell.matchKind || ""} ${cornerClass}" data-region="${cell.region}" data-lens-id="${cell.lensId}" data-track-id="${cell.trackId || ""}" data-item-type="${cell.itemType || ""}" data-item-id="${cell.itemId || ""}" title="${cell.title}">
      <span class="matrix-cell-type">${cell.matchKindLabel || localizedTypeLabel(cell.typeLabel)}</span>
      <strong>${cell.title}</strong>
      ${cell.sourceTypeLabel && cell.sourceTypeLabel !== cell.typeLabel ? `<span class="matrix-source-type">${localizedTypeLabel(cell.sourceTypeLabel)}</span>` : ""}
      <span>${cell.period || ""}</span>
      ${cell.supportCount ? `<span class="matrix-context-count">${formatMatrixEventCount(cell.supportCount)}</span>` : ""}
    </button>
  `;
}

function formatMatrixEventCount(count) {
  if (state.locale === "zh") return `+${count} 事件`;
  return `+${count} ${count === 1 ? "event" : "events"}`;
}

function getMatrixRowLabel(rowOrLens) {
  const lens = rowOrLens.lens || rowOrLens;
  const track = rowOrLens.track || null;
  if (track && track.parentLensId === lens.id) {
    return localizedTrackTitle(track);
  }
  return localizedLensTitle(lens);
}

function activateTimeSliceCell(dataset) {
  state.activeEventModalEventId = null;
  const lens = getLensById(dataset.lensId);
  state.region = dataset.region;
  state.localContextScope = {
    year: state.year,
    region: dataset.region,
    lensId: dataset.lensId || "",
    trackId: dataset.trackId || ""
  };
  state.localContextNearbyMode = null;
  const node = dataset.itemType === "lens-lineage"
    ? HISTORY_DATA.lineageNodes.find((item) => item.id === dataset.itemId)
    : null;
  syncSelectedTrackAlias();
  state.view = "local";
  state.deepDiveOpen = true;
  state.activeBridge = null;
  if (dataset.itemType && dataset.itemId) {
    state.selectedItem = { type: dataset.itemType, id: dataset.itemId };
    state.selectedEventId = dataset.itemType === "event" ? dataset.itemId : null;
    state.detail = getDetailForLocalItem(dataset.itemType, dataset.itemId);
  } else {
    state.selectedItem = null;
    state.selectedEventId = null;
    state.detail = { type: "empty" };
  }
  state.mapHighlight = { type: "selected", regions: [state.region] };
  resetProgressiveDisclosure();
  renderAll();
  if (dataset.itemType === "event") {
    const event = HISTORY_DATA.events.find((item) => item.id === dataset.itemId);
    window.requestAnimationFrame(() => syncSelectionToEventPhases(event));
  }
  scrollToLocalContext(dataset.itemType === "event" ? dataset.itemId : "");
}

function removeSelectedLensOrTrack(id, type) {
  if (type === "track") {
    state.selectedTrackIds = getSelectedTrackIds().filter((trackId) => trackId !== id);
    syncSelectedTrackAlias();
  } else {
    setSelectedLensIds(getSelectedLensIds().filter((lensId) => lensId !== id));
  }
  state.selectedItem = null;
  state.selectedEventId = null;
  state.detail = { type: "empty" };
  state.view = "time-slice";
  state.deepDiveOpen = true;
  renderAll();
}

function removeSelectedRegion(regionId) {
  setSelectedPlaceIds(getSelectedPlaceIds().filter((placeId) => placeId !== regionId));
  if (state.region === regionId) {
    state.region = getSelectedPlaceIds()[0] || getDefaultPlaceIds()[0] || "turkey-anatolia";
  }
  state.selectedItem = null;
  state.selectedEventId = null;
  state.detail = { type: "empty" };
  state.view = "time-slice";
  state.deepDiveOpen = true;
  renderAll();
}

function renderLensChips() {
  els.lensChips.innerHTML = HISTORY_DATA.categories.map((category) => {
    const lens = getLensByTitle(category);
    const active = category === "All" ? !state.selectedLensIds.length && !getSelectedTrackIds().length : lens && state.selectedLensIds.includes(lens.id);
    const label = category === "All" ? t("all") : localizedLensTitle(lens);
    return `<button class="chip ${active ? "active" : ""}" data-lens="${category}" data-lens-id="${lens ? lens.id : ""}">${label}</button>`;
  }).join("");

  els.lensChips.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.lens === "All") {
        setSelectedLensIds([]);
        state.selectedTrackIds = [];
        syncSelectedTrackAlias();
        if (state.view === "lineage") state.view = "time-slice";
        reconcileSelectedItemWithContext();
        renderAll();
        return;
      }
      const lens = getLensById(button.dataset.lensId);
      if (lens) toggleLensSelection(lens.id);
      if (state.view === "lineage") state.view = "time-slice";
      state.activeBridge = null;
      reconcileSelectedItemWithContext();
      renderAll();
    });
  });
}

function renderRegionChips() {
  if (!els.regionChips) return;
  const places = getMatrixRegions();
  els.regionChips.innerHTML = [
    `<button class="chip ${getSelectedPlaceIds().length ? "" : "active"}" data-place-filter="All">${t("all")}</button>`,
    ...places.map((placeId) => {
      const active = getSelectedPlaceIds().includes(placeId);
      return `<button class="chip ${active ? "active" : ""}" data-place-filter="${placeId}">${localizedPlaceTitle(placeId)}</button>`;
    })
  ].join("");

  els.regionChips.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const placeId = button.dataset.placeFilter;
      if (placeId === "All") {
        setSelectedPlaceIds([]);
      } else if (getSelectedPlaceIds().includes(placeId)) {
        setSelectedPlaceIds(getSelectedPlaceIds().filter((item) => item !== placeId));
      } else {
        setSelectedPlaceIds([...getSelectedPlaceIds(), placeId]);
        state.region = placeId;
      }
      renderAll();
    });
  });
}

function renderMap() {
  els.mapCanvas.innerHTML = HISTORY_DATA.regions.map((region) => {
    const mapLabel = getMapLabelForRegion(region.id);
    const highlightClass = getMapHighlightClass(region.id);
    const regionSelected = state.selectedRegionIds.includes(region.id) || (!state.selectedRegionIds.length && region.id === state.region);
    return `
      <button class="region-block ${regionSelected ? "active" : ""} ${highlightClass}"
        style="left:${region.x}%; top:${region.y}%; width:${region.w}%; height:${region.h}%"
        data-region="${region.id}"
        aria-label="${region.label}: ${mapLabel}">
        <span class="region-name">${localizedRegionName(region.label)}</span>
        <span class="region-period">${mapLabel}</span>
      </button>
    `;
  }).join("");

  els.mapCanvas.querySelectorAll(".region-block").forEach((button) => {
    button.addEventListener("click", () => {
      state.region = button.dataset.region;
      if (state.selectedRegionIds.includes(state.region)) {
        state.selectedRegionIds = state.selectedRegionIds.filter((region) => region !== state.region);
      } else {
        state.selectedRegionIds = [...state.selectedRegionIds, state.region];
      }
      state.view = "time-slice";
      state.deepDiveOpen = false;
      state.selectedItem = null;
      state.selectedEventId = null;
      state.detail = { type: "empty" };
      state.mapHighlight = { type: "selected", regions: [state.region] };
      resetProgressiveDisclosure();
      renderAll();
    });
  });
}

function getMapLabelForRegion(regionName) {
  const selectedLens = getSelectedLens();
  const lens = selectedLens || getLensById("state-empire");
  const lensCell = lens ? deriveTimeSliceCell(state.year, regionName, lens) : null;
  if (lensCell && lensCell.hasData) return lensCell.title;
  const stateCell = deriveTimeSliceCell(state.year, regionName, getLensById("state-empire"));
  if (stateCell && stateCell.hasData) return stateCell.title;
  const snapshot = getSnapshotForRegion(regionName);
  return snapshot ? snapshot.period : t("noCuratedData");
}

function getMapHighlightClass(regionId) {
  const regions = state.mapHighlight.regions || [];
  if (!regions.includes(regionId)) return "";
  if (state.mapHighlight.type === "path") return "path-highlight";
  if (state.mapHighlight.type === "connection") return "connection-endpoint";
  if (state.mapHighlight.type === "node") return "node-highlight";
  return "";
}

function renderSnapshots() {
  const snapshots = HISTORY_DATA.snapshots[state.year] || [];
  if (!snapshots.length) {
    els.snapshotCards.innerHTML = `<div class="empty-state">${t("noSnapshot", { year: formatYearLabel(state.year) })}</div>`;
    return;
  }
  els.snapshotCards.innerHTML = snapshots.map((snapshot) => `
    <article class="snapshot-card ${snapshot.region === state.region ? "active" : ""}">
      <div class="snapshot-copy">
        <h3>${localizedRegionName(snapshot.region)}</h3>
        <div class="meta-line">${snapshot.period}</div>
        <p class="summary-text">${snapshot.summary}</p>
      </div>
      ${snapshot.thumbnail ? `<img class="snapshot-thumb" src="${snapshot.thumbnail}" alt="" loading="lazy">` : ""}
    </article>
  `).join("");
}

function renderContext() {
  const context = state.currentContext || deriveCurrentContext();
  const scope = getLocalContextScope();
  const place = localizedPlaceTitle(scope.region) || context.selectedPlace || localizedPlaceTitle(state.region);
  const viewLabel = getLocalContextScopeLabel(scope);
  els.contextText.textContent = `Viewing: ${formatYearLabel(scope.year)} · ${place} · Lens: ${viewLabel}`;
}

function renderEvents() {
  const context = state.currentContext || deriveCurrentContext();
  const hub = deriveLocalContextEventHub();
  const heading = document.querySelector(".events-section h2");
  if (heading) heading.textContent = t("eventsHere");
  const hint = document.getElementById("eventsHint");
  if (hint) hint.textContent = t("eventsHint");

  els.eventCards.innerHTML = renderLocalContextHub(hub, state.selectedItem || context.selectedItem);

  els.eventCards.querySelectorAll(".event-card").forEach((button) => {
    button.addEventListener("click", () => {
      activateLocalContextItem(button.dataset.itemType, button.dataset.itemId);
    });
  });
  els.eventCards.querySelectorAll("[data-nearby-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.nearbyMode;
      state.localContextNearbyMode = state.localContextNearbyMode === mode ? null : mode;
      renderAll();
    });
  });
}

function renderLocalContextHub(hub, selectedItem) {
  const nearbyMode = state.localContextNearbyMode;
  const activeNearbyGroups = nearbyMode === "same-region" ? hub.sameRegionGroups : nearbyMode === "same-lens" ? hub.sameLensGroups : [];
  const activeNearbyTitle = nearbyMode === "same-region" ? t("sameRegionHint") : nearbyMode === "same-lens" ? t("sameLensHint") : "";
  return `
    <section class="local-context-group exact">
      <div class="local-context-group-heading">
        <h3>${t("thisCell")} · ${hub.thisCell.length}</h3>
      </div>
      ${hub.thisCell.length
        ? `<div class="local-context-group-grid">${hub.thisCell.map((match) => renderLocalContextCard(match, selectedItem)).join("")}</div>`
        : `<div class="empty-state">${t("noEventsInYear")}</div>`}
    </section>
    <section class="local-nearby-panel">
      <div class="local-nearby-heading">
        <h3>${t("exploreNearby")}</h3>
        <div class="local-nearby-tabs" role="group" aria-label="${t("exploreNearby")}">
          <button class="${nearbyMode === "same-region" ? "active" : ""}" type="button" data-nearby-mode="same-region">${t("sameRegion")} <span>${hub.sameRegion.length}</span></button>
          <button class="${nearbyMode === "same-lens" ? "active" : ""}" type="button" data-nearby-mode="same-lens">${t("sameLens")} <span>${hub.sameLens.length}</span></button>
        </div>
      </div>
      ${nearbyMode ? `
        <p class="local-nearby-hint">${activeNearbyTitle}</p>
        ${activeNearbyGroups.length
          ? activeNearbyGroups.map((group) => `
            <section class="local-context-subgroup">
              <h4>${group.title} <span>${group.matches.length}</span></h4>
              <div class="local-context-group-grid">
                ${group.matches.map((match) => renderLocalContextCard(match, selectedItem)).join("")}
              </div>
            </section>
          `).join("")
          : `<div class="empty-state">${t("noEventsInYear")}</div>`}
      ` : ""}
    </section>
  `;
}

function deriveLocalContextEventHub() {
  const scope = getLocalContextScope();
  const yearEvents = HISTORY_DATA.events.filter((event) => event.year === scope.year);
  const thisCellEvents = yearEvents.filter((event) => eventMatchesLocalContextCell(event, scope));
  const thisCellIds = new Set(thisCellEvents.map((event) => event.id));
  const sameRegionEvents = yearEvents
    .filter((event) => !thisCellIds.has(event.id))
    .filter((event) => eventMatchesPlace(event, scope.region));
  const sameLensEvents = yearEvents
    .filter((event) => !thisCellIds.has(event.id))
    .filter((event) => !eventMatchesPlace(event, scope.region))
    .filter((event) => eventMatchesLocalContextLens(event, scope));
  return {
    scope,
    thisCell: localContextEventsToMatches(thisCellEvents, scope),
    sameRegion: localContextEventsToMatches(sameRegionEvents, scope),
    sameLens: localContextEventsToMatches(sameLensEvents, scope),
    sameRegionGroups: groupLocalContextMatches(localContextEventsToMatches(sameRegionEvents, scope), "lens"),
    sameLensGroups: groupLocalContextMatches(localContextEventsToMatches(sameLensEvents, scope), "region")
  };
}

function getLocalContextScope() {
  const existing = state.localContextScope;
  if (existing) {
    return {
      year: typeof existing.year === "number" ? existing.year : state.year,
      region: existing.region || state.region,
      lensId: Object.prototype.hasOwnProperty.call(existing, "lensId") ? existing.lensId : (getSelectedLensId() || ""),
      trackId: Object.prototype.hasOwnProperty.call(existing, "trackId") ? existing.trackId : (getPrimarySelectedTrackId() || "")
    };
  }
  return {
    year: state.year,
    region: state.region,
    lensId: getSelectedLensId() || "",
    trackId: getPrimarySelectedTrackId() || ""
  };
}

function getEventLocalContextScope(event) {
  const trackId = (event.trackIds || [])[0] || "";
  return {
    year: event.year,
    region: event.primaryPlaceId || (event.placeIds || [])[0] || event.region,
    lensId: event.primaryLensId || (event.lensIds || [])[0] || categoryToLensId((event.categories || [])[0] || ""),
    trackId
  };
}

function getLocalContextScopeLabel(scope) {
  if (scope.trackId) return localizedTrackTitle(scope.trackId);
  if (scope.lensId) return localizedLensTitle(scope.lensId);
  return "All";
}

function eventMatchesLocalContextCell(event, scope) {
  return eventMatchesPlace(event, scope.region) && eventMatchesLocalContextLens(event, scope);
}

function eventMatchesLocalContextLens(event, scope) {
  if (scope.trackId) return (event.trackIds || []).includes(scope.trackId);
  if (scope.lensId) {
    const lensTracks = getTracksForLens(scope.lensId);
    if (lensTracks.length && (event.trackIds || []).length) return false;
    return eventMatchesPrimaryLens(event, scope.lensId);
  }
  return true;
}

function localContextEventsToMatches(events, scope) {
  return sortLocalMatches(events.map((event) => eventToLocalMatch(event, scope.lensId)));
}

function groupLocalContextMatches(matches, mode) {
  const groups = new Map();
  matches.forEach((match) => {
    const key = mode === "region"
      ? (match.item.primaryPlaceId || (match.item.placeIds || [])[0] || match.item.region || "unknown")
      : getEventGroupLensKey(match.item);
    const title = mode === "region"
      ? (localizedPlaceTitle(key) || localizedRegionName(key))
      : getEventGroupLensTitle(match.item);
    if (!groups.has(key)) groups.set(key, { key, title, matches: [] });
    groups.get(key).matches.push(match);
  });
  return [...groups.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function getEventGroupLensKey(event) {
  return (event.trackIds || [])[0] || event.primaryLensId || (event.lensIds || [])[0] || categoryToLensId((event.categories || [])[0] || "") || "other";
}

function getEventGroupLensTitle(event) {
  const trackId = (event.trackIds || [])[0];
  if (trackId) return localizedTrackTitle(trackId);
  const lensId = event.primaryLensId || (event.lensIds || [])[0];
  return lensId ? localizedLensTitle(lensId) : t("exactEvent");
}

function getExactLocalEventMatches(matches) {
  return (matches || []).filter((match) => match.matchKind === "exact-event" || match.matchKind === "track-exact-event");
}

function renderLocalContextCard(match, selectedItem) {
  const item = match.item;
  const isActive = selectedItem && selectedItem.type === match.type && selectedItem.id === match.id;
  const dimClass = match.dimmed ? "dimmed" : "";
  const compactCategories = (match.categories || []).filter(Boolean).slice(0, 2);
  const extraCategoryCount = Math.max(0, (match.categories || []).filter(Boolean).length - compactCategories.length);
  return `
    <button class="event-card local-card compact-event-card ${match.matchKind || ""} ${isActive ? "active" : ""} ${dimClass}" data-item-type="${match.type}" data-item-id="${match.id}">
      <div class="compact-local-main">
        <h3>${localizedItemTitle(item)}</h3>
        <div class="compact-local-meta">
          ${match.place ? `<span>${match.place}</span>` : ""}
          <span>${localizedRegionName(match.regionLabel)}</span>
          ${compactCategories.map((category) => `<span>${category}</span>`).join("")}
          ${extraCategoryCount ? `<span>+${extraCategoryCount}</span>` : ""}
        </div>
      </div>
    </button>
  `;
}

function activateLocalContextItem(type, id) {
  state.view = type === "event" ? "local" : "connections";
  state.selectedItem = { type, id };
  state.activeBridge = null;
  const match = (state.currentContext || deriveCurrentContext()).localMatches.find((item) => item.type === type && item.id === id);
  const event = type === "event" ? HISTORY_DATA.events.find((item) => item.id === id) : null;
  if (type === "event" && (match || event)) {
    state.selectedEventId = id;
    state.detail = getDetailForLocalItem(type, id);
    state.activeEventModalEventId = id;
  } else {
    state.selectedEventId = null;
    state.detail = getDetailForLocalItem(type, id);
    state.activeEventModalEventId = null;
  }
  resetProgressiveDisclosure();
  renderAll();
  if (type === "event" && (match || event)) {
    window.requestAnimationFrame(() => syncSelectionToEventPhases(event || match.item));
  }
}

function scrollToLocalContext(eventId = "") {
  const scroll = () => {
    const eventTarget = eventId
      ? document.querySelector(`.event-card[data-item-type="event"][data-item-id="${escapeCssIdentifier(eventId)}"]`)
      : null;
    const target = eventTarget || document.getElementById("localContextSection") || els.eventCards || els.deepDivePanel;
    if (target) target.scrollIntoView({ behavior: "smooth", block: eventTarget ? "center" : "start" });
  };
  window.requestAnimationFrame(() => window.requestAnimationFrame(scroll));
  window.setTimeout(scroll, 140);
  window.setTimeout(scroll, 360);
}

function escapeCssIdentifier(value) {
  if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
  return String(value).replace(/["\\]/g, "\\$&");
}

function getDetailForLocalItem(type, id) {
  if (type === "event") return { type: "event", eventId: id };
  if (type === "lens-lineage") return { type: "lineage-node", nodeId: id };
  if (type === "region-lineage") return { type: "region-lineage", nodeId: id };
  if (type === "snapshot") return { type: "snapshot", snapshotId: id };
  return { type: "empty" };
}

function renderEventDetail() {
  const event = HISTORY_DATA.events.find((item) => item.id === state.detail.eventId);
  els.detailKicker.textContent = "EXACT EVENT DETAIL";
  if (!event) {
    els.detailContent.innerHTML = `<div class="empty-state">Select an exact event to inspect it.</div>`;
    return;
  }
  const phaseLabels = (event.phaseIds || [])
    .map((id) => HISTORY_DATA.lineageNodes.find((node) => node.id === id))
    .filter(Boolean)
    .map((node) => localizedItemTitle(node));
  const lensLabels = (event.lensIds || []).map(getLensById).filter(Boolean).map(localizedLensTitle);
  const trackLabels = (event.trackIds || []).map(getLensTrackById).filter(Boolean).map(localizedTrackTitle);
  const sources = (event.sourceRefs || event.sources || []).map(getSourceTitle).filter(Boolean);
  els.detailContent.innerHTML = `
    <div class="detail-box">
      <h3>${localizedItemTitle(event)}</h3>
      <div class="detail-grid">
        <div class="detail-field"><strong>Year</strong><span>${formatYearLabel(event.year)}</span></div>
        <div class="detail-field"><strong>Region</strong><span>${localizedRegionName(event.region)}</span></div>
        <div class="detail-field"><strong>Scope</strong><span>${event.scope || "regional"}</span></div>
      </div>
      ${event.place ? `<div class="why-matters"><strong>Place</strong><span>${event.place}</span></div>` : ""}
      ${lensLabels.length ? `<div class="why-matters"><strong>Lens</strong><span>${lensLabels.join(", ")}</span></div>` : ""}
      ${trackLabels.length ? `<div class="why-matters"><strong>${t("focusedTracks")}</strong><span>${trackLabels.join(", ")}</span></div>` : ""}
      ${phaseLabels.length ? `<div class="why-matters"><strong>${t("phase")}</strong><span>${phaseLabels.join(", ")}</span></div>` : ""}
      <p>${localizedItemSummary(event)}</p>
      ${sources.length ? `<div class="why-matters"><strong>${t("phaseSources")}</strong><span>${sources.join(", ")}</span></div>` : ""}
    </div>
  `;
}

function renderEventModal() {
  if (!els.eventModal || !els.eventModalContent) return;
  const event = state.activeEventModalEventId
    ? HISTORY_DATA.events.find((item) => item.id === state.activeEventModalEventId)
    : null;
  if (!event) {
    els.eventModal.hidden = true;
    els.eventModalContent.innerHTML = "";
    return;
  }
  const enhancedEvent = {
    ...event,
    ...getEventImageEnhancement(event),
    ...getEventDetailEnhancementByIdentity(event),
    ...getEventDetailEnhancement(event.id)
  };
  const phases = getEventPhases(event);
  const lensLabels = (event.lensIds || []).map(getLensById).filter(Boolean).map(localizedLensTitle);
  const trackLabels = (event.trackIds || []).map(getLensTrackById).filter(Boolean).map(localizedTrackTitle);
  const sources = (event.sourceRefs || event.sources || []).map(getSourceTitle).filter(Boolean);
  els.eventModal.hidden = false;
  els.eventModalContent.innerHTML = `
    <div class="phase-modal-kicker">${t("exactEvent")}</div>
    <h2 id="eventModalTitle">${localizedItemTitle(enhancedEvent)}</h2>
    <div class="phase-modal-meta">
      <span>${formatYearLabel(event.year)}</span>
      <span>${localizedRegionName(event.region)}</span>
      ${event.place ? `<span>${event.place}</span>` : ""}
      ${event.scope ? `<span>${event.scope}</span>` : ""}
    </div>
    ${renderEventImage(enhancedEvent, phases)}
    ${renderEventModalChips(lensLabels, trackLabels, phases)}
    ${renderEventEssaySection("whatHappened", getLocalizedEventField(enhancedEvent, "eventIntro") || localizedItemSummary(enhancedEvent))}
    ${renderEventEssaySection("whyItMatters", getEventWhyMatters(enhancedEvent, phases))}
    ${renderEventEssaySection("whyThisPhase", getEventPhaseRelation(enhancedEvent, phases))}
    ${renderEventEssaySection("possibleNextConnections", getEventConnectionHint(enhancedEvent))}
    ${sources.length ? `
      <div class="phase-modal-section">
        <h3>${t("phaseSources")}</h3>
        <p>${sources.join(" · ")}</p>
      </div>
    ` : ""}
  `;
}

function renderEventImage(event, phases) {
  const image = event.image;
  if (!image) return "";
  const caption = getLocalizedEventField(event, "imageCaption")
    || event.imageCaption
    || "";
  const credit = event.imageCredit || "";
  const fallbacks = [image, ...(event.imageFallbacks || [])].filter(Boolean);
  const fallbackAttr = fallbacks.length > 1
    ? ` data-fallbacks="${fallbacks.slice(1).map(escapeHtml).join("|")}"`
    : "";
  return `
    <figure class="phase-modal-image event-modal-image">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(event.imageAlt || localizedItemTitle(event))}" loading="lazy"${fallbackAttr} onerror="handlePhaseImageError(this)">
      ${caption || credit ? `
        <figcaption>
          ${caption ? `<span>${caption}</span>` : ""}
          ${credit ? `<small>${t("imageCredit")}: ${credit}</small>` : ""}
        </figcaption>
      ` : ""}
    </figure>
  `;
}

function renderEventModalChips(lensLabels, trackLabels, phases) {
  const chips = [
    ...lensLabels.map((label) => ({ label, kind: "lens" })),
    ...trackLabels.map((label) => ({ label, kind: "track" })),
    ...phases.map((phase) => ({ label: localizedItemTitle(phase), kind: "phase" }))
  ];
  if (!chips.length) return "";
  return `
    <div class="event-modal-chipset">
      ${chips.map((chip) => `<span class="event-modal-chip ${chip.kind}">${chip.label}</span>`).join("")}
    </div>
  `;
}

function renderEventEssaySection(titleKey, content) {
  if (!content) return "";
  return `
    <div class="phase-modal-section phase-essay-section">
      <h3>${t(titleKey)}</h3>
      <p>${content}</p>
    </div>
  `;
}

function getLocalizedEventField(event, field) {
  const zhField = `${field}Zh`;
  if (state.locale === "zh" && event[zhField]) return event[zhField];
  return event[field] || "";
}

function getEventImageEnhancement(event) {
  const details = {
    "event-linux-kernel-announced-1991": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tux.svg",
      imageAlt: "Tux, the Linux mascot",
      imageCaption: "Tux is a recognizable visual marker for Linux and open-source operating-system culture.",
      imageCaptionZh: "Tux 是 Linux 与开源操作系统文化最容易识别的视觉符号之一。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Tux.svg"
    },
    "event-kubernetes-announced-2014": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kubernetes_logo_without_workmark.svg",
      imageAlt: "Kubernetes logo",
      imageCaption: "The Kubernetes logo represents the container orchestration platform that became central to cloud-native infrastructure.",
      imageCaptionZh: "Kubernetes 标志代表了后来成为云原生基础设施核心的容器编排平台。",
      imageCredit: "Image: Wikimedia Commons / CNCF",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Kubernetes_logo_without_workmark.svg"
    },
    "event-playstation-2-launches-2000": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/PS2-Versions.png",
      imageAlt: "Sony PlayStation 2 console versions",
      imageCaption: "The PlayStation 2 became one of the defining console platforms of early-2000s entertainment and home media.",
      imageCaptionZh: "PlayStation 2 成为 2000 年代初娱乐与家庭媒体的代表性主机平台之一。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:PS2-Versions.png"
    },
    "event-tate-modern-opens-2000": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tate_Modern_London.jpg",
      imageAlt: "Tate Modern in London",
      imageCaption: "Tate Modern turned a former power station into a major museum for contemporary art.",
      imageCaptionZh: "泰特现代美术馆把旧发电站转化为当代艺术的重要博物馆空间。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Tate_Modern_London.jpg"
    },
    "event-millennium-bridge-opens-2000": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Millennium_Bridge%2C_London.jpg",
      imageAlt: "Millennium Bridge in London",
      imageCaption: "The Millennium Bridge is a visible marker of late-twentieth-century engineering, urban design, and public spectacle.",
      imageCaptionZh: "伦敦千禧桥是二十世纪末工程、城市设计和公共景观的可见标志。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Millennium_Bridge,_London.jpg"
    },
    "event-kursk-submarine-disaster-2000": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/K-141_Kursk.jpg",
      imageAlt: "Russian submarine Kursk",
      imageCaption: "Kursk became a symbol of post-Soviet military risk, state crisis management, and public grief.",
      imageCaptionZh: "库尔斯克号成为后苏联军事风险、国家危机管理与公共哀悼的象征。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:K-141_Kursk.jpg"
    },
    "event-usb-flash-drive-enters-market-2000": {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/USB_flash_drive.jpg",
      imageAlt: "USB flash drive",
      imageCaption: "USB flash drives made portable solid-state storage part of everyday personal computing.",
      imageCaptionZh: "USB 闪存盘让便携式固态存储进入日常个人计算。",
      imageCredit: "Image: Wikimedia Commons",
      imageSourceUrl: "https://commons.wikimedia.org/wiki/File:USB_flash_drive.jpg"
    }
  };
  return details[event.id] || {};
}

function getEventDetailEnhancement(id) {
  const details = {
    "fall-constantinople": {
      eventIntro: "In 1453, Ottoman forces under Mehmed II captured Constantinople after a long siege. The city, once the Byzantine imperial capital, became an Ottoman capital and a hinge point between eastern Mediterranean politics, Orthodox Christianity, trade anxieties, and Renaissance knowledge movement.",
      eventIntroZh: "1453 年，穆罕默德二世率领的奥斯曼军队在长期围城后攻下君士坦丁堡。这座曾经的拜占庭帝国首都成为奥斯曼都城，也成为连接东地中海政治、东正教世界、贸易焦虑与文艺复兴知识迁移的关键节点。",
      whyMatters: "Its importance is not only that an empire ended. The event changed who controlled a strategic city and strait, altered the symbolic map of Christianity and Islam, and became a reference point for later stories about sea routes, scholars, empire, and Orthodox political identity.",
      whyMattersZh: "它的重要性不只是一个帝国的终结。它改变了战略城市与海峡的控制权，重塑基督教与伊斯兰世界的象征地图，并成为之后关于海上航线、学者迁移、帝国竞争和东正教政治身份的参照点。",
      phaseRelation: "This event sits inside the gunpowder-empires phase because siege artillery, imperial administration, dynastic legitimacy, and control of capital cities all mattered to how large early modern empires consolidated power.",
      phaseRelationZh: "这个事件属于火药帝国阶段，因为攻城火炮、帝国行政、王朝合法性和首都控制，都是近世早期大帝国巩固权力的核心机制。",
      connectionHint: "From here, the prototype already has curated bridges into trade-route pressure, knowledge migration, Ottoman-Habsburg rivalry, Orthodox identity, and global silver flows.",
      connectionHintZh: "从这里出发，prototype 已经有策展连接：贸易路线压力、知识迁移、奥斯曼—哈布斯堡竞争、东正教身份，以及全球白银流动。"
    },
    "edison-light-bulb": {
      eventIntro: "Edison's 1879 lamp mattered because it was designed as part of a workable electrical lighting system, not as an isolated object. The bulb, generator, wiring, meters, business model, and urban demonstration all belonged together.",
      eventIntroZh: "1879 年爱迪生电灯的重要性在于，它不是孤立物件，而是可运行电力照明系统的一部分。灯泡、发电机、线路、电表、商业模式和城市示范共同构成这个事件。",
      whyMatters: "It helped make electricity visible as everyday infrastructure. Electric light changed working hours, streets, shops, theaters, advertising, domestic life, and the expectations people had for modern cities.",
      whyMattersZh: "它帮助电力作为日常基础设施变得可见。电灯改变工作时间、街道、商店、剧院、广告、家庭生活，以及人们对现代城市的期待。",
      phaseRelation: "It belongs to industrial and electrical systems because invention here only becomes historical when it is embedded in grids, companies, urban infrastructure, and patterns of adoption.",
      phaseRelationZh: "它属于工业与电气系统阶段，因为这里的发明只有嵌入电网、公司、城市基础设施和采用模式之后，才真正成为历史力量。",
      connectionHint: "This event can connect toward urban electrification, night life, entertainment districts, factory work, and the wider Second Industrial Revolution.",
      connectionHintZh: "这个事件可以连接到城市电气化、夜生活、娱乐区、工厂劳动，以及更广泛的第二次工业革命。"
    },
    "world-war-i": {
      eventIntro: "World War I began in 1914 as a European crisis escalated through alliances, mobilization plans, imperial commitments, and nationalist politics. It quickly became a global imperial war rather than a contained regional conflict.",
      eventIntroZh: "第一次世界大战在 1914 年爆发，欧洲危机通过同盟体系、动员计划、帝国承诺和民族主义政治迅速升级。它很快从地区冲突变成全球帝国战争。",
      whyMatters: "The war reorganized states, empires, labor, gender roles, literature, trauma, propaganda, and political legitimacy. It is a concrete event that many twentieth-century phases bend around.",
      whyMattersZh: "这场战争重组了国家、帝国、劳动、性别角色、文学、创伤、宣传和政治合法性。它是许多二十世纪阶段围绕其转折的具体事件。",
      phaseRelation: "It belongs to industrialized war and mass mobilization because armies, factories, railways, propaganda, finance, and civilian societies all became part of war-making.",
      phaseRelationZh: "它属于工业化战争与大众动员阶段，因为军队、工厂、铁路、宣传、金融和民间社会都被纳入战争机器。",
      connectionHint: "It can connect toward modernist literature, empire collapse, state power, propaganda, postwar fashion, and new political orders.",
      connectionHintZh: "它可以连接到现代主义文学、帝国瓦解、国家权力、宣传、战后时尚和新的政治秩序。"
    },
    "altair-8800": {
      eventIntro: "The Altair 8800 was a microcomputer kit sold to hobbyists in the mid-1970s. It did not arrive as a polished consumer appliance; its power came from making computing feel buildable, ownable, and discussable by individuals outside large institutions.",
      eventIntroZh: "Altair 8800 是 1970 年代中期面向爱好者销售的微型计算机套件。它并不是成熟消费品；它的重要性在于让大型机构之外的个人也能组装、拥有和讨论计算机。",
      whyMatters: "The Altair helped create the social world around personal computing: clubs, magazines, small software firms, user experiments, and the expectation that a computer could be a personal machine.",
      whyMattersZh: "Altair 帮助创造了个人计算周围的社会世界：俱乐部、杂志、小型软件公司、用户实验，以及“计算机可以属于个人”的期待。",
      phaseRelation: "It belongs to personal computer platforms because it marks the moment when microcomputing moved from technical possibility into communities, markets, and software expectations.",
      phaseRelationZh: "它属于个人电脑平台阶段，因为它标志着微型计算从技术可能性走向社群、市场和软件期待。",
      connectionHint: "It points forward to Apple II, Microsoft BASIC, IBM PC compatibility, hobbyist culture, and the idea of software ecosystems around small machines.",
      connectionHintZh: "它向后连接到 Apple II、Microsoft BASIC、IBM PC 兼容性、爱好者文化，以及围绕小型机器形成的软件生态。"
    },
    "ibm-pc": {
      eventIntro: "The IBM PC entered the market in 1981 as a business-oriented personal computer built from relatively open, off-the-shelf components. Its importance came from the platform that formed around it: hardware compatibility, operating systems, software, peripherals, and corporate trust.",
      eventIntroZh: "IBM PC 于 1981 年进入市场，是一台面向商业用户、使用相对开放现成组件的个人电脑。它的重要性来自围绕它形成的平台：硬件兼容性、操作系统、软件、外设和企业信任。",
      whyMatters: "It helped standardize what a mass-market personal computer could be. The PC-compatible ecosystem made personal computing less about one machine and more about a repeatable platform for business and consumer markets.",
      whyMattersZh: "它帮助标准化了大众市场个人电脑的形态。PC 兼容生态让个人计算不再只是某台机器，而成为商业和消费市场中可复制的平台。",
      phaseRelation: "It belongs to personal computer platforms because compatibility and software markets became as historically important as the computer hardware itself.",
      phaseRelationZh: "它属于个人电脑平台阶段，因为兼容性和软件市场变得和硬件本身一样重要。",
      connectionHint: "It connects toward Microsoft software dominance, PC clones, office productivity, home computing, and later internet-connected personal devices.",
      connectionHintZh: "它连接到微软软件优势、PC 克隆机、办公室生产力、家庭计算，以及之后联网的个人设备。"
    },
    "macintosh": {
      eventIntro: "The Macintosh introduced a graphical user interface, mouse-centered interaction, and a different imagination of personal computing to a wider audience. It treated the computer less as a command-line machine and more as a visual workspace.",
      eventIntroZh: "Macintosh 将图形用户界面、鼠标交互和另一种个人计算想象带给更广泛用户。它把电脑从命令行机器转向视觉化工作空间。",
      whyMatters: "Its importance lies in interface culture: icons, windows, desktop metaphors, typography, publishing, and design became part of what personal computing meant.",
      whyMattersZh: "它的重要性在于界面文化：图标、窗口、桌面隐喻、字体、出版和设计，成为个人计算意义的一部分。",
      phaseRelation: "It belongs to personal computer platforms and the next GUI/home-computing phase because it made usability and visual interaction central to the platform story.",
      phaseRelationZh: "它属于个人电脑平台以及之后的图形界面/家庭计算阶段，因为它让可用性和视觉交互成为平台故事的核心。",
      connectionHint: "It points toward desktop publishing, creative software, interface design, consumer computing, and later mobile interface expectations.",
      connectionHintZh: "它通向桌面出版、创意软件、界面设计、消费计算，以及后来的移动界面期待。"
    },
    "world-wide-web-proposal": {
      eventIntro: "Tim Berners-Lee's 1989 proposal at CERN described a linked information system for organizing and sharing knowledge across computers. It was not yet the mass web, but it named the logic of pages, links, addresses, and networked documents.",
      eventIntroZh: "1989 年，Tim Berners-Lee 在 CERN 提出的方案描述了一种跨计算机组织和共享知识的链接式信息系统。它还不是大众网络，但已经提出网页、链接、地址和联网文档的逻辑。",
      whyMatters: "The proposal mattered because it translated network infrastructure into a human-facing information layer. It made the internet imaginable as a space to browse and publish, not only a technical network.",
      whyMattersZh: "这个提案的重要性在于，它把网络基础设施转译成面向人的信息层。它让互联网可以被想象为浏览与发布的空间，而不只是技术网络。",
      phaseRelation: "It belongs to the World Wide Web and browsers phase because it defines the conceptual bridge between protocols and public navigation.",
      phaseRelationZh: "它属于万维网与浏览器阶段，因为它定义了协议与公共导航之间的概念桥梁。",
      connectionHint: "It leads toward public web access, browsers, search engines, web publishing, and platform internet economies.",
      connectionHintZh: "它通向公共网页访问、浏览器、搜索引擎、网页出版和平台互联网经济。"
    },
    "world-wide-web-public": {
      eventIntro: "In 1991 the World Wide Web became publicly accessible outside its initial CERN context. This made the web an open publishing and navigation layer that could spread through universities, institutions, hobbyists, and eventually the public.",
      eventIntroZh: "1991 年，万维网开始在 CERN 初始语境之外公开可用。这让网页成为开放的出版与导航层，可以通过大学、机构、爱好者，最终进入公众世界。",
      whyMatters: "The event matters because it turned a proposal into an accessible infrastructure. Public access made later browsers, websites, search engines, online communities, and platform economies possible.",
      whyMattersZh: "它的重要性在于把一个方案变成可访问的基础设施。公开访问让之后的浏览器、网站、搜索引擎、在线社群和平台经济成为可能。",
      phaseRelation: "It belongs to the web-and-browser phase because it anchors the shift from specialist network use to public linked information.",
      phaseRelationZh: "它属于万维网与浏览器阶段，因为它锚定了从专业网络使用转向公共链接信息的变化。",
      connectionHint: "It connects forward to Mosaic, Netscape, search, e-commerce, social platforms, and the everyday web.",
      connectionHintZh: "它向后连接到 Mosaic、Netscape、搜索、电子商务、社交平台和日常网页。"
    },
    "great-exhibition": {
      eventIntro: "The Great Exhibition of 1851 displayed machines, materials, commodities, and imperial goods inside the Crystal Palace. It turned industrial production into a public spectacle of progress, empire, engineering, and commerce.",
      eventIntroZh: "1851 年万国工业博览会在水晶宫中展示机器、材料、商品和帝国物产。它把工业生产变成关于进步、帝国、工程和商业的公共奇观。",
      whyMatters: "It made industrial modernity visible. Visitors could see technology, trade, empire, architecture, and consumer goods arranged as one connected world system.",
      whyMattersZh: "它让工业现代性变得可见。观众可以看到技术、贸易、帝国、建筑和消费品被组织成一个相互连接的世界系统。",
      phaseRelation: "It belongs to industrial and electrical systems because it stages the infrastructure, materials, and confidence of industrial society before electricity became fully everyday.",
      phaseRelationZh: "它属于工业与电气系统阶段，因为它展示了工业社会的基础设施、材料和信心，虽然电力尚未完全日常化。",
      connectionHint: "It connects to industrial capitalism, exhibition culture, colonial display, engineering, architecture, and global commodity networks.",
      connectionHintZh: "它连接到工业资本主义、展览文化、殖民展示、工程、建筑和全球商品网络。"
    },
    "printing-press-europe": {
      eventIntro: "Movable-type printing spread through Europe from the mid-fifteenth century, turning books, images, pamphlets, and editions into reproducible objects. It changed the speed and scale at which humanist, religious, scientific, and artistic material could circulate.",
      eventIntroZh: "十五世纪中期起，活字印刷在欧洲扩散，使书籍、图像、小册子和校勘本成为可复制的对象。它改变了人文主义、宗教、科学和艺术材料传播的速度与规模。",
      whyMatters: "Printing made Renaissance learning less dependent on single manuscripts and local copying. It created a wider infrastructure for schools, collectors, printers, scholars, and artists.",
      whyMattersZh: "印刷让文艺复兴学习不再那么依赖单一手稿和地方抄写。它为学校、收藏家、印刷商、学者和艺术家创造了更广的基础设施。",
      phaseRelation: "It belongs to Renaissance art because printed texts and images helped spread classical forms, visual models, anatomy, ornament, and humanist learning.",
      phaseRelationZh: "它属于文艺复兴艺术阶段，因为印刷文本和图像帮助传播古典形式、视觉模型、解剖学、装饰和人文主义学习。",
      connectionHint: "It connects Renaissance art to literature, religion, science, education, and later mass media.",
      connectionHintZh: "它把文艺复兴艺术连接到文学、宗教、科学、教育和之后的大众媒介。"
    },
    "school-of-athens": {
      eventIntro: "Raphael's School of Athens gathered imagined ancient philosophers into a mathematically ordered architectural space. The fresco made humanist learning visible as a balanced world of bodies, debate, geometry, and classical memory.",
      eventIntroZh: "拉斐尔《雅典学院》把想象中的古代哲学家聚集在数学化秩序的建筑空间中。这幅壁画让人文主义学习以身体、辩论、几何和古典记忆的平衡世界呈现出来。",
      whyMatters: "It is a compact visual statement of Renaissance confidence: perspective organizes space, classical antiquity becomes present, and intellectual life becomes an image of civic order.",
      whyMattersZh: "它是文艺复兴信心的浓缩视觉宣言：透视法组织空间，古典传统重回当下，知识生活成为公民秩序的图像。",
      phaseRelation: "It belongs to Renaissance art because it combines perspective, classical revival, patronage, and named artistic authorship.",
      phaseRelationZh: "它属于文艺复兴艺术阶段，因为它结合了透视法、古典复兴、赞助体系和有名艺术家的作者身份。",
      connectionHint: "It connects to humanism, papal patronage, architecture, classical texts, and later ideas of the artist as intellectual.",
      connectionHintZh: "它连接到人文主义、教皇赞助、建筑、古典文本，以及之后艺术家作为知识人的观念。"
    },
    "east-india-company": {
      eventIntro: "The English East India Company was chartered in 1600 as a commercial corporation with state-backed privileges. Over time, its trading rights, forts, armies, diplomacy, and revenue claims blurred the boundary between business and empire.",
      eventIntroZh: "英国东印度公司于 1600 年获得特许，成为拥有国家支持特权的商业公司。随着时间推移，它的贸易权、堡垒、军队、外交和税收要求模糊了商业与帝国的边界。",
      whyMatters: "It shows colonial empire forming through corporations as well as kings and armies. Company rule made commerce into a tool of territorial power.",
      whyMattersZh: "它显示殖民帝国不只通过国王和军队形成，也通过公司形成。公司统治把商业变成领土权力的工具。",
      phaseRelation: "It belongs to European colonial empires because chartered companies were one of the main mechanisms connecting maritime trade, state power, and overseas rule.",
      phaseRelationZh: "它属于欧洲殖民帝国阶段，因为特许公司是连接海洋贸易、国家权力和海外统治的主要机制之一。",
      connectionHint: "It connects to Indian Ocean trade, colonial administration, financial capitalism, military power, and later British rule in South Asia.",
      connectionHintZh: "它连接到印度洋贸易、殖民行政、金融资本主义、军事力量，以及之后英国在南亚的统治。"
    },
    "battle-plassey": {
      eventIntro: "The Battle of Plassey in 1757 was a military and political turning point in Bengal. Company forces and local alliances helped transform a trading corporation into a territorial power with revenue and administrative influence.",
      eventIntroZh: "1757 年普拉西战役是孟加拉的军事与政治转折点。公司军队与地方联盟帮助把贸易公司转化为拥有税收和行政影响力的领土权力。",
      whyMatters: "The battle matters because it shows empire emerging from local politics, finance, military force, and corporate ambition rather than from simple overseas conquest alone.",
      whyMattersZh: "这场战役重要，因为它显示帝国并不只是海外征服的结果，也来自地方政治、金融、军事力量和公司野心的交织。",
      phaseRelation: "It belongs to European colonial empires because it marks the movement from trade privilege toward territorial and fiscal control.",
      phaseRelationZh: "它属于欧洲殖民帝国阶段，因为它标志着从贸易特权转向领土和财政控制。",
      connectionHint: "It connects to British rule in India, colonial revenue systems, global textile trade, military finance, and imperial state formation.",
      connectionHintZh: "它连接到英国在印度的统治、殖民税收体系、全球纺织贸易、军事财政和帝国国家形成。"
    },
    "berlin-conference": {
      eventIntro: "The Berlin Conference of 1884-1885 gathered European powers to formalize rules for colonial claims in Africa. African societies and rulers were not treated as equal participants in decisions about territorial division.",
      eventIntroZh: "1884 至 1885 年柏林会议召集欧洲列强，为非洲殖民主张制定规则。非洲社会和统治者没有被当作关于领土划分的平等参与者。",
      whyMatters: "It matters as a symbol of high imperialism: maps, diplomacy, extraction, and racialized power converged to accelerate colonial partition.",
      whyMattersZh: "它是高度帝国主义的象征：地图、外交、开采和种族化权力汇合，加速殖民瓜分。",
      phaseRelation: "It belongs to European colonial empires because it shows empire becoming a coordinated international system of claims, borders, and extraction.",
      phaseRelationZh: "它属于欧洲殖民帝国阶段，因为它显示帝国变成由主张、边界和开采构成的国际协调体系。",
      connectionHint: "It connects to African colonial rule, resource extraction, border-making, anti-colonial nationalism, and postcolonial state problems.",
      connectionHintZh: "它连接到非洲殖民统治、资源开采、边界制造、反殖民族主义和后殖民国家问题。"
    },
    "cromford-mill": {
      eventIntro: "Cromford Mill opened in 1771 as a water-powered cotton spinning site associated with Richard Arkwright. It helped define the factory as a place where machines, labor discipline, capital, and energy were organized together.",
      eventIntroZh: "克罗姆福德纺织厂于 1771 年开工，是与理查德·阿克莱特相关的水力棉纺厂。它帮助定义了工厂：机器、劳动纪律、资本和能源被组织在同一空间。",
      whyMatters: "It matters because industrial capitalism needed not only inventions but new labor spaces and production routines.",
      whyMattersZh: "它的重要性在于，工业资本主义需要的不只是发明，还需要新的劳动空间和生产节奏。",
      phaseRelation: "It belongs to industrial capitalism because it anchors the shift toward mechanized production and factory organization.",
      phaseRelationZh: "它属于工业资本主义阶段，因为它锚定了机械化生产和工厂组织的转变。",
      connectionHint: "It connects to textile labor, urbanization, wage work, industrial discipline, and global cotton supply chains.",
      connectionHintZh: "它连接到纺织劳动、城市化、工资劳动、工业纪律和全球棉花供应链。"
    },
    "stockton-darlington": {
      eventIntro: "The Stockton and Darlington Railway opened in 1825 and became an early public railway using steam locomotion. It showed how industrial transport could move coal, goods, and people in new rhythms.",
      eventIntroZh: "斯托克顿—达灵顿铁路于 1825 年开通，是早期使用蒸汽机车的公共铁路。它展示了工业交通如何以新的节奏移动煤、商品和人。",
      whyMatters: "Railways compressed distance, reorganized markets, and made industrial capitalism spatially faster and more integrated.",
      whyMattersZh: "铁路压缩距离，重组市场，使工业资本主义在空间上更快、更整合。",
      phaseRelation: "It belongs to industrial capitalism and industrial technology because railways connected energy, machinery, finance, labor, and national markets.",
      phaseRelationZh: "它属于工业资本主义和工业技术阶段，因为铁路连接了能源、机器、金融、劳动和全国市场。",
      connectionHint: "It connects to coal, steel, time standardization, urban growth, imperial logistics, and mass mobility.",
      connectionHintZh: "它连接到煤、钢铁、时间标准化、城市成长、帝国物流和大众流动。"
    },
    "communist-manifesto": {
      eventIntro: "The Communist Manifesto, published in 1848, interpreted modern society through class conflict, capital accumulation, labor, and historical transformation. It turned industrial capitalism into a political and theoretical problem.",
      eventIntroZh: "1848 年出版的《共产党宣言》通过阶级冲突、资本积累、劳动和历史转化来解释现代社会。它把工业资本主义变成政治和理论问题。",
      whyMatters: "It matters because it gave industrial society a language of critique that shaped labor movements, revolutions, states, and twentieth-century politics.",
      whyMattersZh: "它的重要性在于，它为工业社会提供了一套批判语言，影响劳工运动、革命、国家和二十世纪政治。",
      phaseRelation: "It belongs to industrial capitalism because it responds directly to wage labor, class formation, global markets, and bourgeois power.",
      phaseRelationZh: "它属于工业资本主义阶段，因为它直接回应工资劳动、阶级形成、全球市场和资产阶级权力。",
      connectionHint: "It connects economic history to political ideology, labor organization, revolution, literature, and state power.",
      connectionHintZh: "它把经济史连接到政治意识形态、劳工组织、革命、文学和国家权力。"
    },
    "villa-savoye": {
      eventIntro: "Villa Savoye, completed in 1931, staged Le Corbusier's modernist principles in built form: pilotis, roof garden, open plan, horizontal windows, and a free facade. It made the house look like an instrument for modern life.",
      eventIntroZh: "1931 年完成的萨伏伊别墅把勒·柯布西耶的现代主义原则转化为建筑形式：底层架空柱、屋顶花园、开放平面、横向长窗和自由立面。它让住宅看起来像现代生活的工具。",
      whyMatters: "It matters because it condensed modernist architectural ideology into one highly legible object.",
      whyMattersZh: "它的重要性在于，它把现代主义建筑意识形态浓缩成一个高度可读的建筑物。",
      phaseRelation: "It belongs to modernism and international style because it rejects historical ornament and treats space, structure, and function as an abstract system.",
      phaseRelationZh: "它属于现代主义与国际风格阶段，因为它拒绝历史装饰，把空间、结构和功能视为抽象系统。",
      connectionHint: "It connects to housing reform, machine-age aesthetics, global modernism, preservation debates, and later critiques of universal design.",
      connectionHintZh: "它连接到住宅改革、机器时代美学、全球现代主义、保护争论和之后对普遍主义设计的批判。"
    },
    "bauhaus-founded": {
      eventIntro: "The Bauhaus was founded in 1919 as a school that tried to reconnect art, craft, design, architecture, and industrial production. It treated modern design as a social and material problem, not only a style.",
      eventIntroZh: "包豪斯于 1919 年成立，试图重新连接艺术、工艺、设计、建筑和工业生产。它把现代设计视为社会与材料问题，而不只是风格。",
      whyMatters: "It matters because it helped make modernism teachable, reproducible, and connected to everyday objects, buildings, typography, and visual systems.",
      whyMattersZh: "它的重要性在于，它让现代主义变得可教学、可复制，并连接到日常物品、建筑、字体和视觉系统。",
      phaseRelation: "It belongs to both modernist art and modernist architecture because it joined visual experiment to design education and industrial production.",
      phaseRelationZh: "它同时属于现代主义艺术和现代主义建筑，因为它把视觉实验连接到设计教育与工业生产。",
      connectionHint: "It connects to graphic design, furniture, architecture, mass production, exile, and the international spread of modernism.",
      connectionHintZh: "它连接到平面设计、家具、建筑、大规模生产、流亡和现代主义的国际传播。"
    },
    "apple-ii": {
      eventIntro: "The Apple II turned microcomputing from an enthusiast kit culture into a more approachable personal computer market. Its color graphics, expansion slots, software ecosystem, and school/home presence made small computers feel useful outside laboratories and clubs.",
      eventIntroZh: "Apple II 把微型计算从爱好者套件文化推向更可接近的个人电脑市场。它的彩色图形、扩展槽、软件生态，以及在学校和家庭中的存在，让小型计算机在实验室和俱乐部之外也显得有用。",
      whyMatters: "It helped make personal computing a social and commercial category. The machine mattered less as one object than as a platform for education, games, small business, programming, and early software markets.",
      whyMattersZh: "它帮助个人计算成为一个社会和商业类别。它的重要性不只在机器本身，而在于它成为教育、游戏、小型商业、编程和早期软件市场的平台。",
      phaseRelation: "It belongs to personal computer platforms because it shows the move from isolated hardware toward expandable machines, software libraries, user communities, and repeatable use cases.",
      phaseRelationZh: "它属于个人电脑平台阶段，因为它体现了从孤立硬件转向可扩展机器、软件库、用户社群和可复制使用场景的变化。",
      connectionHint: "It can connect to classroom computing, home software, early game culture, small-business spreadsheets, and the expectation that computers could become everyday tools.",
      connectionHintZh: "它可以连接到课堂计算、家庭软件、早期游戏文化、小型商业电子表格，以及电脑会成为日常工具的期待。"
    },
    visicalc: {
      eventIntro: "VisiCalc made the spreadsheet one of the first unmistakable reasons to buy a personal computer for work. It translated accounting, forecasting, and planning into an interactive grid that changed when users changed assumptions.",
      eventIntroZh: "VisiCalc 让电子表格成为购买个人电脑用于工作的最早明确理由之一。它把会计、预测和计划转化为可交互网格，用户改变假设时结果也随之改变。",
      whyMatters: "It mattered because software, not hardware alone, drove adoption. The spreadsheet showed that personal computers could reorganize office labor and decision-making.",
      whyMattersZh: "它的重要性在于，推动采用的不只是硬件，也是软件。电子表格显示个人电脑可以重组办公室劳动与决策方式。",
      phaseRelation: "It belongs to personal computer platforms because it demonstrates platform value: a machine becomes historically important when software gives people a concrete reason to use it.",
      phaseRelationZh: "它属于个人电脑平台阶段，因为它展示了平台价值：机器之所以重要，是因为软件给人们一个具体使用理由。",
      connectionHint: "It connects to office productivity, business software, financial modeling, spreadsheet culture, and later knowledge work.",
      connectionHintZh: "它连接到办公生产力、商业软件、金融建模、电子表格文化和后来的知识工作。"
    },
    "windows-1": {
      eventIntro: "Windows 1.0 introduced Microsoft's graphical environment for IBM-compatible PCs. It was limited compared with later versions, but it marked a long shift toward visual interfaces on the dominant PC platform.",
      eventIntroZh: "Windows 1.0 把微软的图形环境带到 IBM 兼容 PC 上。它相比后来的版本很有限，但标志着主流 PC 平台向视觉界面的长期转变。",
      whyMatters: "Its importance lies in the direction it points: graphical interaction, software standardization, and operating-system ecosystems would become central to personal computing.",
      whyMattersZh: "它的重要性在于它指向的方向：图形交互、软件标准化和操作系统生态会成为个人计算的核心。",
      phaseRelation: "It sits between personal computer platforms and GUI/home computing because it links PC compatibility to the interface expectations that later became normal.",
      phaseRelationZh: "它位于个人电脑平台与图形界面/家庭计算之间，因为它把 PC 兼容性连接到后来成为常态的界面期待。",
      connectionHint: "It connects to Microsoft Windows dominance, desktop metaphors, office software, and the standardization of user interfaces.",
      connectionHintZh: "它连接到 Microsoft Windows 的主导地位、桌面隐喻、办公软件和用户界面的标准化。"
    },
    "arpanet-first-nodes": {
      eventIntro: "The first ARPANET nodes connected research computers in 1969, demonstrating that machines at different sites could communicate across a packet-switched network. It began as a specialized research and defense infrastructure, not a public internet.",
      eventIntroZh: "1969 年 ARPANET 首批节点连接研究计算机，展示了不同地点的机器可以通过分组交换网络通信。它最初是专业研究与国防基础设施，而不是公共互联网。",
      whyMatters: "It matters because it made networked computing practical as a system, not just an idea. The event anchors the movement from isolated computers toward communication between institutions.",
      whyMattersZh: "它的重要性在于，它让联网计算成为实际系统，而不只是概念。这个事件锚定了从孤立计算机转向机构之间通信的变化。",
      phaseRelation: "It belongs to packet switching and ARPANET because it is one of the concrete moments where protocol ideas, hardware, funding, and research communities became a working network.",
      phaseRelationZh: "它属于分组交换与 ARPANET 阶段，因为它是协议思想、硬件、资助和研究社群变成可运行网络的具体时刻之一。",
      connectionHint: "It connects to packet switching, research universities, military funding, internet protocols, and later public network culture.",
      connectionHintZh: "它连接到分组交换、研究型大学、军事资助、互联网协议和后来的公共网络文化。"
    },
    "tcp-ip-transition": {
      eventIntro: "The 1983 TCP/IP transition standardized a common protocol suite across ARPANET. Instead of separate networks speaking incompatible languages, TCP/IP made interconnection itself the organizing principle.",
      eventIntroZh: "1983 年 TCP/IP 转换让 ARPANET 采用共同协议套件。它让互联本身成为组织原则，而不是让不同网络继续使用互不兼容的语言。",
      whyMatters: "It matters because the internet is not just wires and machines; it is also agreement on how networks talk to one another. Protocol standardization made expansion possible.",
      whyMattersZh: "它的重要性在于，互联网不只是线路和机器，也是一套网络彼此通信的约定。协议标准化让扩张成为可能。",
      phaseRelation: "It belongs to internet protocols and academic networks because it turns network experiments into a more scalable, interoperable infrastructure.",
      phaseRelationZh: "它属于互联网协议与学术网络阶段，因为它把网络实验转化为更可扩展、可互操作的基础设施。",
      connectionHint: "It connects to academic networking, domain systems, email, global interoperability, and the later public web.",
      connectionHintZh: "它连接到学术网络、域名系统、电子邮件、全球互操作性和之后的公共网页。"
    },
    "mosaic-browser": {
      eventIntro: "Mosaic made the web visually approachable by combining text and images in a graphical browser. It helped ordinary users understand the web as something to browse, not merely a technical document system.",
      eventIntroZh: "Mosaic 浏览器通过图形界面把文字和图像结合起来，让网页变得更容易接近。它帮助普通用户把 web 理解为可以浏览的空间，而不只是技术文档系统。",
      whyMatters: "It mattered because browsers became the everyday doorway into the internet. The interface changed who could use the web and what the web seemed to be for.",
      whyMattersZh: "它的重要性在于，浏览器成为进入互联网的日常入口。界面改变了谁能使用 web，以及人们认为 web 可以做什么。",
      phaseRelation: "It belongs to the web-and-browsers phase because it turns linked information into a mass-facing visual practice.",
      phaseRelationZh: "它属于万维网与浏览器阶段，因为它把链接信息转化为面向大众的视觉实践。",
      connectionHint: "It connects to Netscape, web publishing, online media, e-commerce, and the browser wars.",
      connectionHintZh: "它连接到 Netscape、网页出版、在线媒体、电子商务和浏览器竞争。"
    },
    "netscape-navigator": {
      eventIntro: "Netscape Navigator became one of the first widely used commercial web browsers. It helped make the web a public consumer medium and a commercial frontier.",
      eventIntroZh: "Netscape Navigator 成为最早被广泛使用的商业浏览器之一。它帮助 web 成为公共消费媒介和商业前沿。",
      whyMatters: "It mattered because browser distribution, standards, companies, and user habits became part of internet history. The browser was no longer just a tool; it was a platform gateway.",
      whyMattersZh: "它的重要性在于，浏览器分发、标准、公司和用户习惯都成为互联网史的一部分。浏览器不再只是工具，而是平台入口。",
      phaseRelation: "It belongs to the web-and-browsers phase because it shows the web shifting from research infrastructure to consumer software and market competition.",
      phaseRelationZh: "它属于万维网与浏览器阶段，因为它显示 web 从研究基础设施转向消费软件和市场竞争。",
      connectionHint: "It connects to browser standards, the dot-com boom, Microsoft Internet Explorer, web media, and platform competition.",
      connectionHintZh: "它连接到浏览器标准、互联网泡沫、Microsoft Internet Explorer、网络媒体和平台竞争。"
    },
    "sistine-ceiling": {
      eventIntro: "Michelangelo's Sistine Chapel ceiling joined biblical narrative, monumental bodies, architectural illusion, and papal patronage into one of the most ambitious visual programs of the Renaissance.",
      eventIntroZh: "米开朗基罗的西斯廷礼拜堂天顶画把圣经叙事、纪念碑式人体、建筑幻象和教皇赞助结合成文艺复兴最雄心勃勃的视觉工程之一。",
      whyMatters: "It mattered because it made the human body, religious imagination, artistic authorship, and elite patronage visible at monumental scale.",
      whyMattersZh: "它的重要性在于，它以纪念碑尺度呈现人体、宗教想象、艺术家作者身份和精英赞助。",
      phaseRelation: "It belongs to Renaissance art because it combines classical body study, Christian narrative, workshop labor, and papal court culture.",
      phaseRelationZh: "它属于文艺复兴艺术阶段，因为它结合了古典人体研究、基督教叙事、工作坊劳动和教皇宫廷文化。",
      connectionHint: "It connects to patronage, theology, anatomy, artistic fame, and later ideas of genius.",
      connectionHintZh: "它连接到赞助、神学、解剖学、艺术声望和后来的天才观念。"
    },
    "vasari-lives": {
      eventIntro: "Vasari's Lives of the Artists organized art history around biographies, progress, style, and named masters. It did not merely describe Renaissance art; it helped create a way to narrate it.",
      eventIntroZh: "瓦萨里的《艺苑名人传》围绕传记、进步、风格和大师姓名组织艺术史。它不只是描述文艺复兴艺术，也帮助创造了叙述它的方式。",
      whyMatters: "It mattered because art became a historical sequence with heroes, schools, and development. The text shaped later ideas about Renaissance achievement.",
      whyMattersZh: "它的重要性在于，艺术被写成由英雄、流派和发展构成的历史序列。这本书影响了后人理解文艺复兴成就的方式。",
      phaseRelation: "It belongs to Renaissance art because it reflects the period's concern with artistic authorship, memory, and stylistic comparison.",
      phaseRelationZh: "它属于文艺复兴艺术阶段，因为它反映了这个时期对艺术家作者身份、记忆和风格比较的关注。",
      connectionHint: "It connects to art criticism, biography, canon formation, collecting, and museum history.",
      connectionHintZh: "它连接到艺术批评、传记、经典形成、收藏和博物馆史。"
    },
    "bessemer-process": {
      eventIntro: "The Bessemer process made large-scale steel production faster and cheaper. It transformed steel from a specialized material into a foundation for railways, bridges, machines, weapons, and cities.",
      eventIntroZh: "贝塞麦炼钢法让大规模钢铁生产更快、更便宜。它把钢从专门材料转变为铁路、桥梁、机器、武器和城市的基础。",
      whyMatters: "It mattered because industrial society needed material systems, not only isolated inventions. Cheap steel changed what could be built and at what scale.",
      whyMattersZh: "它的重要性在于，工业社会需要材料系统，而不只是孤立发明。廉价钢铁改变了什么可以被建造，以及建造的尺度。",
      phaseRelation: "It belongs to industrial and electrical systems because it links energy, metallurgy, infrastructure, machinery, and industrial capital.",
      phaseRelationZh: "它属于工业与电气系统阶段，因为它连接能源、冶金、基础设施、机器和工业资本。",
      connectionHint: "It connects to railways, skyscrapers, armaments, factories, and global industrial competition.",
      connectionHintZh: "它连接到铁路、摩天楼、军备、工厂和全球工业竞争。"
    },
    "transatlantic-cable": {
      eventIntro: "The transatlantic telegraph cable linked Europe and North America through near-instant electrical communication. Messages that once took days by ship could move across the ocean in minutes.",
      eventIntroZh: "跨大西洋电报电缆通过近乎即时的电通信连接欧洲与北美。过去需要船只传递数天的信息，可以在几分钟内跨越海洋。",
      whyMatters: "It mattered because communication speed became infrastructure for markets, news, diplomacy, empire, and finance.",
      whyMattersZh: "它的重要性在于，通信速度成为市场、新闻、外交、帝国和金融的基础设施。",
      phaseRelation: "It belongs to industrial and electrical systems because electricity reorganized distance before electric light and household power became ordinary.",
      phaseRelationZh: "它属于工业与电气系统阶段，因为电在电灯和家庭用电日常化之前，已经先重组了距离。",
      connectionHint: "It connects to telegraph networks, global finance, journalism, empire administration, and later networked media.",
      connectionHintZh: "它连接到电报网络、全球金融、新闻业、帝国行政和之后的网络媒介。"
    },
    "pearl-street-station": {
      eventIntro: "Pearl Street Station opened in 1882 as an early central power station for electric lighting in New York. It showed that electricity could be sold as an urban service through generation, distribution, and metering.",
      eventIntroZh: "珍珠街电站于 1882 年在纽约启用，是早期为电力照明服务的中央电站。它显示电力可以通过发电、配电和计量作为城市服务出售。",
      whyMatters: "It mattered because electric light required systems. The station made electricity a networked utility rather than a spectacular demonstration.",
      whyMattersZh: "它的重要性在于，电灯需要系统。电站让电力从奇观式示范转变为网络化公用事业。",
      phaseRelation: "It belongs to industrial and electrical systems because it anchors the infrastructure side of electrification: grids, companies, meters, and urban customers.",
      phaseRelationZh: "它属于工业与电气系统阶段，因为它锚定了电气化的基础设施面：电网、公司、电表和城市用户。",
      connectionHint: "It connects to urban lighting, utility regulation, nighttime economies, electric appliances, and modern infrastructure politics.",
      connectionHintZh: "它连接到城市照明、公用事业监管、夜间经济、电器和现代基础设施政治。"
    },
    "columbus-americas": {
      eventIntro: "Columbus's 1492 voyage connected Atlantic crossings, Iberian expansion, Indigenous American worlds, and European imperial imagination. It did not begin the Americas, but it began a new and violent phase of sustained Atlantic contact.",
      eventIntroZh: "哥伦布 1492 年航行连接了大西洋航行、伊比利亚扩张、美洲原住民世界和欧洲帝国想象。它并不是美洲的开始，却开启了持续且暴力的大西洋接触阶段。",
      whyMatters: "It mattered because contact became conquest, colonization, exchange, disease, forced labor, Christianity, and global trade.",
      whyMattersZh: "它的重要性在于，接触很快变成征服、殖民、交换、疾病、强迫劳动、基督教传播和全球贸易。",
      phaseRelation: "It belongs to European colonial empires because it anchors the Atlantic turn in overseas expansion and colonial rule.",
      phaseRelationZh: "它属于欧洲殖民帝国阶段，因为它锚定了海外扩张与殖民统治中的大西洋转向。",
      connectionHint: "It connects to Spanish colonization, global silver, Indigenous resilience, Atlantic slavery, and ecological exchange.",
      connectionHintZh: "它连接到西班牙殖民、全球白银、原住民抵抗、大西洋奴隶制和生态交换。"
    },
    "ford-assembly-line": {
      eventIntro: "Ford's moving assembly line reorganized automobile production around standardized parts, timed labor, and continuous flow. It made the factory itself into a system of speed and coordination.",
      eventIntroZh: "福特移动装配线围绕标准化零件、计时劳动和连续流程重组汽车生产。它让工厂本身成为速度与协调的系统。",
      whyMatters: "It mattered because mass production changed labor discipline, wages, consumption, transport, and the scale of industrial capitalism.",
      whyMattersZh: "它的重要性在于，大规模生产改变了劳动纪律、工资、消费、交通和工业资本主义的尺度。",
      phaseRelation: "It belongs to industrial capitalism because it shows production, labor, management, and consumer markets becoming one integrated model.",
      phaseRelationZh: "它属于工业资本主义阶段，因为它显示生产、劳动、管理和消费市场被整合成一种模式。",
      connectionHint: "It connects to consumer culture, labor conflict, standardization, suburbs, petroleum, and twentieth-century industry.",
      connectionHintZh: "它连接到消费文化、劳动冲突、标准化、郊区、石油和二十世纪工业。"
    },
    "international-style-exhibition": {
      eventIntro: "The 1932 International Style exhibition at MoMA helped package modern architecture as a coherent visual language of volume, regularity, and absence of ornament.",
      eventIntroZh: "1932 年 MoMA 的“国际风格”展览把现代建筑包装成一种由体量、规则性和去装饰构成的连贯视觉语言。",
      whyMatters: "It mattered because exhibitions and criticism helped turn a scattered modernist movement into a named style that could travel globally.",
      whyMattersZh: "它的重要性在于，展览和批评帮助把分散的现代主义运动变成可以全球传播的命名风格。",
      phaseRelation: "It belongs to modernism and international style because it explicitly defines and circulates that architectural category.",
      phaseRelationZh: "它属于现代主义与国际风格阶段，因为它明确界定并传播了这个建筑类别。",
      connectionHint: "It connects to museum authority, corporate architecture, design education, housing debates, and global modernism.",
      connectionHintZh: "它连接到博物馆权威、企业建筑、设计教育、住宅争论和全球现代主义。"
    },
    "lever-house": {
      eventIntro: "Lever House brought the glass-and-steel corporate tower into New York's postwar business landscape. Its curtain wall and plaza made modernism into a language of corporate identity.",
      eventIntroZh: "利华大厦把玻璃与钢结构企业塔楼带入纽约战后商业景观。它的幕墙和广场让现代主义成为企业身份的语言。",
      whyMatters: "It mattered because modern architecture entered everyday skylines through offices, corporations, zoning, and real-estate development.",
      whyMattersZh: "它的重要性在于，现代建筑通过办公室、公司、分区制度和房地产开发进入日常城市天际线。",
      phaseRelation: "It belongs to modernism and international style because it shows the style moving from manifesto buildings into corporate urban practice.",
      phaseRelationZh: "它属于现代主义与国际风格阶段，因为它显示这种风格从宣言式建筑进入企业城市实践。",
      connectionHint: "It connects to postwar capitalism, office labor, urban planning, glass curtain walls, and critiques of corporate modernism.",
      connectionHintZh: "它连接到战后资本主义、办公室劳动、城市规划、玻璃幕墙和对企业现代主义的批评。"
    },
    "pruitt-igoe-demolition": {
      eventIntro: "The demolition of Pruitt-Igoe became a powerful symbol in debates about modernist planning, public housing, race, poverty, and state failure. The event is often over-simplified, but it marked a crisis in confidence.",
      eventIntroZh: "普鲁伊特—伊戈住宅区的拆除成为关于现代主义规划、公共住房、种族、贫困和国家失败争论中的强烈象征。这个事件常被过度简化，但它确实标志着信心危机。",
      whyMatters: "It mattered because architecture could no longer be discussed as form alone. Social policy, maintenance, segregation, funding, and urban politics became unavoidable.",
      whyMattersZh: "它的重要性在于，建筑不再能只作为形式被讨论。社会政策、维护、隔离、资金和城市政治变得无法回避。",
      phaseRelation: "It belongs to modernism and international style as a critical endpoint: the promises of rational planning met the realities of unequal urban systems.",
      phaseRelationZh: "它属于现代主义与国际风格阶段的批判性终点：理性规划的承诺遭遇不平等城市系统的现实。",
      connectionHint: "It connects to postmodern architecture, public housing policy, urban renewal, racial inequality, and planning critique.",
      connectionHintZh: "它连接到后现代建筑、公共住房政策、城市更新、种族不平等和规划批评。"
    }
  };
  return details[id] || {};
}

function getEventPhases(event) {
  return (event.phaseIds || [])
    .map((id) => HISTORY_DATA.lineageNodes.find((node) => node.id === id))
    .filter(Boolean);
}

function getEventDetailEnhancementByIdentity(event) {
  const key = `${normalizeEventDetailKey(event.title)}:${event.year}`;
  const details = {
    "qin-unifies-china:-221": {
      eventIntro: "Qin conquest ended the Warring States period by bringing rival states under one imperial court. The unification joined military conquest with standardized administration, law, measures, roads, and written authority.",
      eventIntroZh: "秦的统一以一个帝国朝廷结束了战国诸侯并立的局面。这次统一把军事征服与行政、法律、度量衡、道路和书写权威的标准化结合起来。",
      whyMatters: "It matters because later Chinese statecraft repeatedly returned to the problem Qin made visible: how to govern a vast territory through centralized institutions without losing control to regional power.",
      whyMattersZh: "它的重要性在于，之后中国国家治理不断回到秦所提出的问题：如何用中央制度治理广阔领土，同时避免地方权力失控。",
      phaseRelation: "It belongs to classical empires because it turns war-making, bureaucracy, legal order, and territorial rule into a durable imperial model.",
      phaseRelationZh: "它属于古典帝国阶段，因为它把战争、官僚、法律秩序和领土统治转化为持久的帝国模型。",
      connectionHint: "It connects to Han governance, imperial examinations, frontier administration, legalism, and later debates about centralization.",
      connectionHintZh: "它连接到汉代治理、科举与官僚传统、边疆行政、法家思想和之后关于中央集权的争论。"
    },
    "battle-of-marathon:-490": {
      eventIntro: "At Marathon, an Athenian-led force defeated a Persian expeditionary army. The battle became a remembered moment in which polis identity, citizen soldiers, and imperial pressure met on the battlefield.",
      eventIntroZh: "在马拉松，雅典为主的军队击败了波斯远征军。这场战役后来被记忆为城邦身份、公民士兵与帝国压力在战场上相遇的时刻。",
      whyMatters: "It matters less as a simple story of East versus West than as evidence of how small political communities organized war, memory, and civic identity.",
      whyMattersZh: "它的重要性不在于简单的“东西方对抗”叙事，而在于显示小型政治共同体如何组织战争、记忆和公民身份。",
      phaseRelation: "It belongs to classical citizen armies because hoplite warfare linked military service to the political life of the polis.",
      phaseRelationZh: "它属于古典公民军队阶段，因为重装步兵战争把军事服役与城邦政治生活连接起来。",
      connectionHint: "It connects to Persian imperial expansion, Athenian democracy, Greek memory culture, and later classical political ideals.",
      connectionHintZh: "它连接到波斯帝国扩张、雅典民主、希腊记忆文化和后来的古典政治理想。"
    },
    "battle-of-kadesh:-1274": {
      eventIntro: "The Battle of Kadesh brought Egyptian and Hittite power into direct military confrontation in Syria. Chariots, royal propaganda, diplomacy, and imperial rivalry all shaped how the battle was fought and remembered.",
      eventIntroZh: "卡迭石战役让埃及与赫梯势力在叙利亚直接军事对抗。战车、王室宣传、外交和帝国竞争共同塑造了这场战争及其记忆。",
      whyMatters: "It matters because it shows Bronze Age warfare as a system of mobility, palace logistics, written claims, and negotiated settlement, not only battlefield violence.",
      whyMattersZh: "它的重要性在于，它显示青铜时代战争是一套机动、宫廷后勤、书面宣称和谈判解决的系统，而不只是战场暴力。",
      phaseRelation: "It belongs to early fortified and organized conflict because it reveals how palace states projected power beyond their core regions.",
      phaseRelationZh: "它属于早期组织化冲突阶段，因为它揭示宫殿国家如何把权力投射到核心地区之外。",
      connectionHint: "It connects to Egyptian kingship, Hittite diplomacy, chariot warfare, and the late Bronze Age international order.",
      connectionHintZh: "它连接到埃及王权、赫梯外交、战车战争和晚期青铜时代国际秩序。"
    },
    "french-revolution-begins:1789": {
      eventIntro: "The French Revolution began as a crisis of monarchy, debt, representation, and social privilege. It quickly turned into a wider struggle over sovereignty, citizenship, rights, violence, and the meaning of the nation.",
      eventIntroZh: "法国大革命最初是君主制、债务、代表权和社会特权的危机。它很快变成关于主权、公民身份、权利、暴力和民族意义的更大斗争。",
      whyMatters: "It matters because it made modern political language explosive: people, nation, constitution, rights, republic, terror, and reaction became linked in practice.",
      whyMattersZh: "它的重要性在于，它让现代政治语言变得具有爆炸性：人民、民族、宪法、权利、共和国、恐怖与反动在实践中被连接起来。",
      phaseRelation: "It belongs to nations and revolutions because it transformed political legitimacy from dynastic monarchy toward popular sovereignty and citizenship.",
      phaseRelationZh: "它属于民族国家与革命阶段，因为它把政治合法性从王朝君主制转向人民主权和公民身份。",
      connectionHint: "It connects to Napoleon, nationalism, slave emancipation in the Atlantic world, conservative reaction, and later revolutionary movements.",
      connectionHintZh: "它连接到拿破仑、民族主义、大西洋世界的奴隶解放、保守反动和后来的革命运动。"
    },
    "peace-of-westphalia:1648": {
      eventIntro: "The Peace of Westphalia ended the Thirty Years' War through a complex diplomatic settlement. It reorganized authority among rulers, territories, confessions, and imperial institutions in Central Europe.",
      eventIntroZh: "威斯特伐利亚和约通过复杂外交安排结束三十年战争。它重新组织了中欧统治者、领土、宗派和帝国制度之间的权力关系。",
      whyMatters: "It matters because it shows state power emerging through war finance, diplomacy, confession, and negotiated limits, not through a single invention of sovereignty.",
      whyMattersZh: "它的重要性在于，它显示国家权力是在战争财政、外交、宗派和协商限制中形成的，而不是由某个单一主权概念发明出来。",
      phaseRelation: "It belongs to professional armies and fiscal states because prolonged war forced rulers to manage taxation, armies, diplomacy, and legitimacy together.",
      phaseRelationZh: "它属于职业军队与财政国家阶段，因为长期战争迫使统治者同时管理税收、军队、外交和合法性。",
      connectionHint: "It connects to fiscal-military states, religious toleration, balance-of-power diplomacy, and later ideas of international order.",
      connectionHintZh: "它连接到财政军事国家、宗教宽容、均势外交和后来的国际秩序观念。"
    },
    "united-states-declaration-of-independence:1776": {
      eventIntro: "The Declaration of Independence turned colonial resistance into a claim of political separation and popular legitimacy. It used rights language to justify a new sovereign project.",
      eventIntroZh: "《独立宣言》把殖民地抵抗转化为政治分离和人民合法性的主张。它用权利语言为新的主权工程辩护。",
      whyMatters: "It matters because revolutionary state-making could speak in universal rights while remaining entangled with slavery, Indigenous dispossession, and imperial war.",
      whyMattersZh: "它的重要性在于，革命建国可以使用普遍权利语言，同时仍与奴隶制、原住民土地剥夺和帝国战争纠缠在一起。",
      phaseRelation: "It belongs to nations and revolutions because it links sovereignty, citizenship, anti-imperial argument, and constitutional state-building.",
      phaseRelationZh: "它属于民族国家与革命阶段，因为它连接主权、公民身份、反帝国论证和宪政建国。",
      connectionHint: "It connects to Atlantic revolutions, constitutionalism, abolition debates, settler expansion, and later independence movements.",
      connectionHintZh: "它连接到大西洋革命、宪政、废奴争论、定居者扩张和后来的独立运动。"
    },
    "united-nations-founded:1945": {
      eventIntro: "The United Nations was founded at the end of World War II to institutionalize collective security, diplomacy, development, and international law. It reflected both hope for cooperation and the power realities of the postwar order.",
      eventIntroZh: "联合国在第二次世界大战结束时成立，试图把集体安全、外交、发展和国际法制度化。它既反映合作希望，也反映战后秩序中的权力现实。",
      whyMatters: "It matters because global governance became an arena where states, empires, new nations, humanitarian claims, and great-power vetoes all interacted.",
      whyMattersZh: "它的重要性在于，全球治理成为国家、帝国、新兴民族国家、人道主张和大国否决权相互作用的场域。",
      phaseRelation: "It belongs to total war and welfare states because the devastation of global war made international institutions part of postwar reconstruction.",
      phaseRelationZh: "它属于总体战与福利国家阶段，因为全球战争的破坏使国际制度成为战后重建的一部分。",
      connectionHint: "It connects to decolonization, human rights, Cold War diplomacy, peacekeeping, development, and international law.",
      connectionHintZh: "它连接到非殖民化、人权、冷战外交、维和、发展和国际法。"
    },
    "india-and-pakistan-become-independent:1947": {
      eventIntro: "Independence and Partition ended British rule in South Asia while creating India and Pakistan amid mass migration, communal violence, and unresolved border questions.",
      eventIntroZh: "独立与分治终结了英国在南亚的统治，同时在大规模迁徙、族群暴力和边界问题中创造了印度和巴基斯坦。",
      whyMatters: "It matters because decolonization was not a clean transfer of sovereignty. It could produce new states, trauma, displacement, and long geopolitical conflicts at the same time.",
      whyMattersZh: "它的重要性在于，非殖民化并不是主权的平滑转交。它可能同时产生新国家、创伤、流离失所和长期地缘冲突。",
      phaseRelation: "It belongs to postcolonial and global governance because it shows empire giving way to sovereign nation-states under extreme social pressure.",
      phaseRelationZh: "它属于后殖民与全球治理阶段，因为它显示帝国在巨大社会压力下转向主权民族国家。",
      connectionHint: "It connects to Partition memory, Kashmir, Cold War alignments, migration, citizenship, and postcolonial development.",
      connectionHintZh: "它连接到分治记忆、克什米尔、冷战阵营、迁徙、公民身份和后殖民发展。"
    },
    "battle-of-lepanto:1571": {
      eventIntro: "The Battle of Lepanto was a major naval battle between the Holy League and Ottoman forces in the Mediterranean. It combined galley warfare, gunpowder weapons, religious propaganda, and imperial rivalry.",
      eventIntroZh: "勒班陀海战是神圣同盟与奥斯曼力量在地中海进行的大型海战。它结合桨帆船战争、火药武器、宗教宣传和帝国竞争。",
      whyMatters: "It matters because Mediterranean power was not only territorial. Naval logistics, coalition politics, slavery, commerce, and sacred conflict all shaped the region.",
      whyMattersZh: "它的重要性在于，地中海权力并不只是领土问题。海军后勤、联盟政治、奴役、商业和神圣冲突共同塑造该地区。",
      phaseRelation: "It belongs to gunpowder warfare because firearms and artillery were embedded in older naval forms rather than replacing them overnight.",
      phaseRelationZh: "它属于火药战争阶段，因为火器和炮兵嵌入旧有海战形式，而不是一夜之间取代它们。",
      connectionHint: "It connects to Ottoman-Habsburg rivalry, Mediterranean slavery, Venetian commerce, crusading memory, and naval technology.",
      connectionHintZh: "它连接到奥斯曼—哈布斯堡竞争、地中海奴役、威尼斯商业、十字军记忆和海军技术。"
    }
  };
  return details[key] || {};
}

function normalizeEventDetailKey(title) {
  return String(title || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getEventWhyMatters(event, phases) {
  const explicit = getLocalizedEventField(event, "whyMatters");
  if (explicit) return explicit;
  return "";
}

function getEventPhaseRelation(event, phases) {
  const explicit = getLocalizedEventField(event, "phaseRelation");
  if (explicit) return explicit;
  return "";
}

function getEventConnectionHint(event) {
  const explicit = getLocalizedEventField(event, "connectionHint");
  if (explicit) return explicit;
  return "";
}

function openEventModal(eventId) {
  state.activeEventModalEventId = eventId;
  renderEventModal();
  updateSectionNavigator();
}

function closeEventModal() {
  state.activeEventModalEventId = null;
  renderEventModal();
  updateSectionNavigator();
}

function renderExplorer() {
  if (state.view === "lineage") {
    renderLineageExplorer();
    return;
  }

  const context = state.currentContext || deriveCurrentContext();
  const selected = context.selectedItemDetail;
  const paths = context.availableConnectionPaths;
  const visiblePaths = getVisiblePaths(paths);
  els.explorerKicker.textContent = t("deepDiveConnections");
  els.explorerTitle.textContent = t("deepDiveConnections");
  els.explorerSubtitle.textContent = paths.length ? t("followBridges") : t("exploreContext");
  els.exitLineageBtn.hidden = true;
  renderLensLineageButtons();
  els.selectedEventBanner.hidden = false;
  els.selectedEventBanner.innerHTML = selected ? `
    <strong>Selected context:</strong> ${selected.yearLabel || selected.year || selected.period || state.year} · ${selected.title}
    <div class="meta-line">${selected.regionLabel || selected.region || selected.regionName || state.region}${selected.place ? ` · ${selected.place}` : ""}</div>
  ` : "";

  if (paths.length) {
    renderBridgeChips(paths);
    renderPaths(visiblePaths);
    els.showMoreBtn.hidden = state.activeBridge || state.visiblePathCount >= paths.length;
    els.extendPathBtn.hidden = !visiblePaths.some((path) => path.nodes.length > state.visibleNodeCount);
    return;
  }

  renderCandidateChips(context.bridgeCandidates);
  renderExplorerFallback(context);
  els.showMoreBtn.hidden = true;
  els.extendPathBtn.hidden = true;
}

function renderLineageExplorer() {
  const lens = getActiveLens() || getLensById("art");
  const nodes = getLineageNodesForLens(lens.id);
  els.explorerKicker.textContent = "Category Lineage View";
  els.explorerTitle.textContent = `${lens.title} Lineage`;
  els.explorerSubtitle.textContent = lens.shortDescription;
  els.exitLineageBtn.hidden = false;
  els.selectedEventBanner.hidden = false;
  els.selectedEventBanner.innerHTML = `
    <strong>Lineage first:</strong> ${nodes.length} curated seed nodes
    <div class="meta-line">Related lenses: ${lens.relatedLenses.map((id) => getLensTitleById(id)).join(", ")}</div>
  `;
  els.bridgeChips.innerHTML = lens.bridgeMechanisms.map((bridge) => (
    `<button class="chip ${bridge === state.activeBridge ? "spotlight" : ""}" data-bridge="${bridge}">${bridge}</button>`
  )).join("");
  els.bridgeChips.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeBridge = button.dataset.bridge;
      renderExplorer();
      scrollFirstPathIntoView();
    });
  });
  els.showAllBridgesBtn.hidden = !state.activeBridge;
  renderLineageNodes(lens, nodes);
  els.showMoreBtn.hidden = true;
  els.extendPathBtn.hidden = true;
}

function renderBridgeChips(paths) {
  const available = unique(paths.map((path) => path.bridge));
  const extras = HISTORY_DATA.bridgeOverview.filter((bridge) => !available.includes(bridge));
  const chips = [...available, ...extras];
  els.bridgeChips.innerHTML = chips.map((bridge) => {
    const disabled = available.includes(bridge) ? "" : "aria-disabled=\"true\"";
    const activeClass = bridge === state.activeBridge ? "spotlight" : "";
    return `<button class="chip ${activeClass}" data-bridge="${bridge}" ${disabled}>${bridge}</button>`;
  }).join("");

  els.bridgeChips.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.getAttribute("aria-disabled") === "true") return;
      state.activeBridge = button.dataset.bridge;
      renderExplorer();
      scrollFirstPathIntoView();
    });
  });
  els.showAllBridgesBtn.hidden = !state.activeBridge;
}

function renderPaths(paths) {
  if (!paths.length) {
    els.connectionPaths.innerHTML = `<div class="empty-state">No bridge path matches this category lens yet.</div>`;
    return;
  }

  els.connectionPaths.innerHTML = paths.map((path) => renderPathRow(path)).join("");
  bindPathInteractions();
}

function renderCandidateChips(candidates) {
  const mechanisms = unique(candidates.map((candidate) => candidate.mechanism).filter(Boolean));
  els.bridgeChips.innerHTML = mechanisms.length
    ? mechanisms.map((mechanism) => `<span class="chip muted">${mechanism}</span>`).join("")
    : "";
  els.showAllBridgesBtn.hidden = true;
}

function renderExplorerFallback(context) {
  if (context.bridgeCandidates.length) {
    els.connectionPaths.innerHTML = `
      <div class="candidate-note">These are possible bridges from lineage data. They are not full curated connection paths yet.</div>
      <div class="candidate-grid">
        ${context.bridgeCandidates.map((candidate) => `
          <article class="candidate-card">
            <div class="local-card-topline">
              <span class="type-pill">Candidate</span>
              <span class="status-pill">Not yet curated</span>
            </div>
            <h3>${candidate.name}</h3>
            <div class="meta-line">${candidate.relatedLens || "Related context"} · ${candidate.mechanism}</div>
            <p class="summary-text">${candidate.explanation}</p>
          </article>
        `).join("")}
      </div>
    `;
    return;
  }

  const nodeTitles = context.localMatches
    .filter((match) => match.type !== "event")
    .slice(0, 4)
    .map((match) => match.item.title)
    .join(", ") || "No lineage match";
  els.connectionPaths.innerHTML = `
    <div class="empty-state">
      <strong>${t("noCuratedConnections")}</strong>
      <div class="context-summary">
        <span>Year: ${context.selectedYear}</span>
        <span>Region: ${context.selectedRegion}</span>
        <span>Lens: ${context.selectedLens}</span>
        <span>Matched lineage nodes: ${nodeTitles}</span>
      </div>
    </div>
  `;
}

function renderLineageNodes(lens, nodes) {
  els.connectionPaths.innerHTML = `
    <div class="lineage-timeline" data-lens-id="${lens.id}">
      ${nodes.map((node, index) => renderLineageNodeCard(node, index)).join("")}
    </div>
  `;
  els.connectionPaths.querySelectorAll(".lineage-node-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.detail = { type: "lineage-node", nodeId: button.dataset.nodeId };
      renderDetail();
    });
  });
}

function renderLineageNodeCard(node, index) {
  const sourceCount = node.sourceRefs ? node.sourceRefs.length : 0;
  return `
    <button class="lineage-node-card" data-node-id="${node.id}">
      <span class="node-year">${node.yearLabel}</span>
      <h3>${String(index + 1).padStart(2, "0")} · ${node.title}</h3>
      <div class="meta-line">${node.primaryRegions.join(" / ")}</div>
      <p class="node-summary">${node.summary}</p>
      ${renderSimpleChips(node.sideBridges)}
      <div class="source-indicator">${sourceCount} source${sourceCount === 1 ? "" : "s"}</div>
    </button>
  `;
}

function renderPathRow(path, isLineage = false) {
  const visibleNodes = isLineage ? path.nodes : path.nodes.slice(0, Math.min(state.visibleNodeCount, path.nodes.length));
  const visibleEdges = path.edges.slice(0, Math.max(0, visibleNodes.length - 1));
  const highlighted = state.activeBridge && (path.bridge === state.activeBridge || path.categories.includes(state.activeBridge));
  const threadNumber = getThreadNumber(path.id);

  return `
    <article id="path-${path.id}" class="path-row ${highlighted ? "highlighted" : ""}" data-path-id="${path.id}">
      <div class="path-header">
        <div>
          <div class="thread-label">Thread ${threadNumber} · ${path.title}</div>
          <div class="meta-line">${path.bridge}</div>
        </div>
        <p>${path.explanation}</p>
      </div>
      <div class="path-track">
        ${visibleNodes.map((node, index) => {
          const edge = visibleEdges[index];
          const nodeHtml = renderNodeCard(node, path, index);
          if (!edge) return nodeHtml;
          return `${nodeHtml}${renderArrow(edge, path.id, index)}`;
        }).join("")}
      </div>
    </article>
  `;
}

function getThreadNumber(pathId) {
  if (pathId === "art-lineage-path") return "01";
  const index = getCurrentPaths().findIndex((path) => path.id === pathId);
  return String(Math.max(index + 1, 1)).padStart(2, "0");
}

function renderNodeCard(node, path, index) {
  const dimClass = shouldDimByLens(node.categories) ? "dimmed" : "";
  const period = node.year || node.period;
  const why = getNodeWhyConnected(path, index);
  return `
    <button class="node-card ${dimClass}" data-node-id="${node.id}" data-path-id="${path.id}" data-node-index="${index}">
      <span class="node-year">${period}</span>
      <h3>${localizedItemTitle(node)}</h3>
      <div class="meta-line">${node.region}</div>
      <p class="node-summary">${node.summary}</p>
      ${why ? `<span class="node-why">${why}</span>` : ""}
      ${renderTags(node.categories, matchesLens(node.categories))}
    </button>
  `;
}

function getNodeWhyConnected(path, index) {
  const node = path.nodes[index];
  if (node && node.whyMatters) return node.whyMatters;
  const incoming = path.edges[index - 1];
  const outgoing = path.edges[index];
  const edge = incoming || outgoing;
  if (!edge) return "";
  return `${edge.label}: ${edge.explanation}`;
}

function renderArrow(edge, pathId, edgeIndex) {
  const isActive = state.detail.type === "connection"
    && state.detail.from === edge.from
    && state.detail.to === edge.to
    && state.detail.pathId === pathId
    && state.detail.edgeIndex === edgeIndex;
  return `
    <button class="arrow-btn ${isActive ? "active" : ""}" title="Click to explain this connection" data-edge-from="${edge.from}" data-edge-to="${edge.to}" data-path-id="${pathId}" data-edge-index="${edgeIndex}">
      <span>
        <span class="arrow-icon">→</span>
        <span class="arrow-label">${edge.label}</span>
        <span class="arrow-preview">${edge.explanation}</span>
        <span class="arrow-hint">Click to explain</span>
      </span>
    </button>
  `;
}

function bindPathInteractions() {
  els.connectionPaths.querySelectorAll(".path-row").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      const path = findPathById(row.dataset.pathId);
      if (path) setMapHighlight("path", getRegionsForPath(path));
    });
    row.addEventListener("mouseleave", () => {
      clearMapHighlight();
    });
    row.addEventListener("focusin", () => {
      const path = findPathById(row.dataset.pathId);
      if (path) setMapHighlight("path", getRegionsForPath(path));
    });
    row.addEventListener("focusout", () => {
      clearMapHighlight();
    });
  });

  els.connectionPaths.querySelectorAll(".node-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.detail = {
        type: "node",
        nodeId: button.dataset.nodeId,
        pathId: button.dataset.pathId,
        nodeIndex: Number(button.dataset.nodeIndex)
      };
      const node = findNodeById(button.dataset.nodeId, button.dataset.pathId, Number(button.dataset.nodeIndex));
      setMapHighlight("node", getRegionsFromValue(node ? node.region : ""));
      renderDetail();
    });
  });

  els.connectionPaths.querySelectorAll(".arrow-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.detail = {
        type: "connection",
        from: button.dataset.edgeFrom,
        to: button.dataset.edgeTo,
        pathId: button.dataset.pathId,
        edgeIndex: Number(button.dataset.edgeIndex)
      };
      const fromNode = findNodeById(button.dataset.edgeFrom);
      const toNode = findNodeById(button.dataset.edgeTo);
      setMapHighlight("connection", unique([
        ...getRegionsFromValue(fromNode ? fromNode.region : ""),
        ...getRegionsFromValue(toNode ? toNode.region : "")
      ]));
      renderExplorer();
      renderDetail();
    });
  });
}

function renderDetail() {
  if (state.detail.type === "lineage-node") {
    renderLineageNodeDetail();
    return;
  }
  if (state.detail.type === "region-lineage" || state.detail.type === "region-phase") {
    renderRegionLineageDetail();
    return;
  }
  if (state.detail.type === "snapshot") {
    renderSnapshotDetail();
    return;
  }
  if (state.detail.type === "event") {
    renderEventDetail();
    return;
  }
  if (state.detail.type === "empty") {
    els.detailKicker.textContent = "CONTEXT DETAIL";
    els.detailContent.innerHTML = `<div class="empty-state">Select a local context card, node, or arrow to inspect it.</div>`;
    return;
  }
  if (state.detail.type === "connection") {
    renderConnectionDetail();
    return;
  }
  renderNodeDetail();
}

function renderLineageNodeDetail() {
  const node = HISTORY_DATA.lineageNodes.find((item) => item.id === state.detail.nodeId);
  const lens = node ? getLensById(node.lensId) : null;
  els.detailKicker.textContent = "LINEAGE NODE";
  if (!node || !lens) {
    els.detailContent.innerHTML = `<div class="empty-state">Select a lineage node to inspect it.</div>`;
    return;
  }
  const trackLabels = (node.trackIds || []).map(localizedTrackTitle);
  els.detailContent.innerHTML = `
    <div class="detail-box">
      <h3>${localizedItemTitle(node)}</h3>
      <div class="detail-grid">
        <div class="detail-field"><strong>Year / Period</strong><span>${node.yearLabel}</span></div>
        <div class="detail-field"><strong>Primary Regions</strong><span>${node.primaryRegions.map(localizedRegionName).join(" / ")}</span></div>
        <div class="detail-field"><strong>Confidence</strong><span>${node.confidence}</span></div>
      </div>
      ${trackLabels.length ? `<div class="why-matters"><strong>${t("focusedTracks")}</strong><span>${trackLabels.join(", ")}</span></div>` : ""}
      <p>${localizedItemSummary(node)}</p>
      <div class="why-matters"><strong>${t("phaseSideBridges")}</strong><span>${node.sideBridges.map(localizedTerm).join(", ")}</span></div>
      <div class="why-matters"><strong>Related Lenses</strong><span>${lens.relatedLenses.map(localizedLensTitle).join(", ")}</span></div>
      <div class="why-matters"><strong>Sources</strong><span>${node.sourceRefs.map((id) => getSourceTitle(id)).join(", ")}</span></div>
      <p class="summary-text">${node.notes}</p>
    </div>
  `;
}

function renderRegionLineageDetail() {
  const node = findRegionLineageNodeById(state.detail.nodeId);
  els.detailKicker.textContent = "REGION LINEAGE DETAIL";
  if (!node) {
    els.detailContent.innerHTML = `<div class="empty-state">Select a region lineage card to inspect it.</div>`;
    return;
  }
  els.detailContent.innerHTML = `
    <div class="detail-box">
      <h3>${localizedItemTitle(node)}</h3>
      <div class="detail-grid">
        <div class="detail-field"><strong>Period</strong><span>${node.yearLabel || node.period}</span></div>
        <div class="detail-field"><strong>Place</strong><span>${localizedPlaceTitle(node.placeId) || localizedRegionName(node.regionName || state.region)}</span></div>
        <div class="detail-field"><strong>Confidence</strong><span>${node.confidence}</span></div>
      </div>
      ${renderSimpleChips((node.lensIds || []).map(localizedLensTitle))}
      <p>${localizedItemSummary(node)}</p>
      <div class="why-matters"><strong>Related Regions</strong><span>${(node.relatedRegionIds || []).join(", ") || "None yet"}</span></div>
      <div class="why-matters"><strong>Sources</strong><span>${(node.sources || node.sourceRefs || []).map(getSourceTitle).join(", ")}</span></div>
    </div>
  `;
}

function renderSnapshotDetail() {
  const snapshot = findRegionSnapshotById(state.detail.snapshotId);
  els.detailKicker.textContent = "SNAPSHOT DETAIL";
  if (!snapshot) {
    els.detailContent.innerHTML = `<div class="empty-state">Select a snapshot context card to inspect it.</div>`;
    return;
  }
  els.detailContent.innerHTML = `
    <div class="detail-box">
      <h3>${localizedItemTitle(snapshot)}</h3>
      <div class="detail-grid">
        <div class="detail-field"><strong>Year</strong><span>${snapshot.year}</span></div>
        <div class="detail-field"><strong>Region</strong><span>${localizedRegionName(snapshot.regionName)}</span></div>
        <div class="detail-field"><strong>Confidence</strong><span>${snapshot.confidence}</span></div>
      </div>
      ${renderSimpleChips((snapshot.primaryLensIds || []).map(localizedLensTitle))}
      <p>${snapshot.summary}</p>
      <div class="why-matters"><strong>Lineage Tags</strong><span>${(snapshot.lineageTags || []).join(", ") || "None yet"}</span></div>
      <div class="why-matters"><strong>Sources</strong><span>${(snapshot.sources || []).map(getSourceTitle).join(", ")}</span></div>
    </div>
  `;
}

function renderNodeDetail() {
  const node = findNodeById(state.detail.nodeId, state.detail.pathId, state.detail.nodeIndex) || getSelectedEventAsNode();
  els.detailKicker.textContent = "NODE DETAIL";
  if (!node) {
    els.detailContent.innerHTML = `<div class="empty-state">Select a node or arrow to inspect it.</div>`;
    return;
  }

  els.detailContent.innerHTML = `
    <div class="detail-box">
      <h3>${localizedItemTitle(node)}</h3>
      <div class="detail-grid">
        <div class="detail-field"><strong>Year / Period</strong><span>${node.year || node.period}</span></div>
        <div class="detail-field"><strong>Region</strong><span>${localizedRegionName(node.region)}</span></div>
        ${node.place ? `<div class="detail-field"><strong>Place</strong><span>${node.place}</span></div>` : ""}
      </div>
      ${renderTags(node.categories || [], matchesLens(node.categories || []))}
      <p>${localizedItemSummary(node)}</p>
      ${node.whyMatters ? `<div class="why-matters"><strong>Why it matters in this thread</strong><span>${node.whyMatters}</span></div>` : ""}
      <div class="detail-actions">
        <button class="secondary-btn small" id="focusNodeBtn">Focus this node</button>
        <button class="secondary-btn small" id="showOnMapBtn">Show on map</button>
      </div>
    </div>
  `;

  document.getElementById("focusNodeBtn").addEventListener("click", () => {
    focusNode(node.id);
  });
  document.getElementById("showOnMapBtn").addEventListener("click", () => {
    const regions = getRegionsFromValue(node.region);
    if (regions.length) setMapHighlight("node", regions);
  });
}

function renderConnectionDetail() {
  const edge = findEdge(state.detail.from, state.detail.to, state.detail.pathId, state.detail.edgeIndex);
  const path = findPathById(state.detail.pathId);
  const fromNode = path ? path.nodes.find((node) => node.id === state.detail.from) : findNodeById(state.detail.from);
  const toNode = path ? path.nodes.find((node) => node.id === state.detail.to) : findNodeById(state.detail.to);
  els.detailKicker.textContent = "CONNECTION DETAIL";
  if (!edge || !fromNode || !toNode) {
    els.detailContent.innerHTML = `<div class="empty-state">Select an arrow to inspect the mechanism.</div>`;
    return;
  }

  els.detailContent.innerHTML = `
    <div class="detail-box">
      <h3>Connection: ${fromNode.title} → ${toNode.title}</h3>
      <div class="mechanism-callout">${edge.mechanism}</div>
      <div class="detail-grid">
        <div class="detail-field"><strong>Through</strong><span>${edge.mechanism}</span></div>
        <div class="detail-field"><strong>Relation Type</strong><span>${edge.type}</span></div>
        <div class="detail-field"><strong>Strength</strong><span>${edge.strength}</span></div>
      </div>
      <p>${edge.detailExplanation || edge.explanation}</p>
    </div>
  `;
}

function renderSearchResults() {
  const matches = getSearchMatches();
  if (!els.searchInput.value.trim() || !matches.length) {
    els.searchResults.hidden = true;
    els.searchResults.innerHTML = "";
    return;
  }

  els.searchResults.hidden = false;
  els.searchResults.innerHTML = matches.map((match, index) => `
    <button class="search-result" data-index="${index}">
      <strong>${match.title}</strong>
      <div class="meta-line">${match.description}</div>
    </button>
  `).join("");
  els.searchResults.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => activateSearchMatch(matches[Number(button.dataset.index)]));
  });
}

function getSearchMatches() {
  const q = els.searchInput.value.trim().toLowerCase();
  if (!q) return [];
  const searchedYear = parseSearchYear(q);
  const yearMatches = searchedYear !== null
    ? [{ type: "year", id: searchedYear, title: formatYearLabel(searchedYear), description: `Set year to ${formatYearLabel(searchedYear)}` }]
    : [];
  const regionMatches = (HISTORY_DATA.places || [])
    .filter((place) => searchTextIncludes(q, [place.title, place.titleZh, place.id, place.summary, place.summaryZh, place.macroAreaId]))
    .map((place) => ({ type: "place", id: place.id, title: localizedPlaceTitle(place), description: t("placeReferenceNote") }));
  const eventMatches = HISTORY_DATA.events
    .filter((event) => searchTextIncludes(q, [
      event.id,
      event.year,
      event.title,
      event.titleZh,
      event.summary,
      event.summaryZh,
      event.eventIntro,
      event.eventIntroZh,
      event.whyMatters,
      event.whyMattersZh,
      event.phaseRelation,
      event.phaseRelationZh,
      event.connectionHint,
      event.connectionHintZh,
      event.region,
      event.place,
      (event.categories || []).join(" "),
      (event.lensIds || []).join(" "),
      (event.trackIds || []).join(" "),
      (event.placeIds || []).join(" ")
    ]))
    .map((event) => ({ type: "event", id: event.id, title: localizedItemTitle(event), description: `${formatYearLabel(event.year)} · ${localizedPlaceTitle(event.primaryPlaceId) || event.place || event.region || ""}` }));

  const categoryMatches = HISTORY_DATA.categories
    .filter((category) => category !== "All")
    .filter((category) => category.toLowerCase().includes(q))
    .map((category) => {
      const lens = getLensByTitle(category);
      return lens
        ? [{ type: "lens-context", id: lens.id, title: `Add ${localizedLensTitle(lens)}`, description: "Lens" }]
        : [{ type: "category", id: category, title: category, description: "Category lens" }];
    });

  const lensMatches = HISTORY_DATA.lenses
    .filter((lens) => searchTextIncludes(q, [lens.title, lens.titleZh, lens.id, lens.description, lens.descriptionZh]))
    .map((lens) => ({ type: "lens-context", id: lens.id, title: `Add ${localizedLensTitle(lens)}`, description: "Lens" }));

  const trackMatches = (HISTORY_DATA.lensTracks || [])
    .filter((track) => searchTextIncludes(q, [track.id, track.title, track.titleZh, track.shortDescription, track.shortDescriptionZh, track.parentLensId]))
    .map((track) => ({
      type: "track-context",
      id: track.id,
      title: `Add ${localizedTrackTitle(track)}`,
      description: `${localizedLensTitle(track.parentLensId)} · Focus track`
    }));

  const lensPhaseMatches = (HISTORY_DATA.lineageNodes || [])
    .filter((node) => searchTextIncludes(q, [
      node.id,
      node.title,
      node.titleZh,
      node.summary,
      node.summaryZh,
      node.phaseIntro,
      node.phaseIntroZh,
      node.yearLabel,
      node.period,
      node.lensId,
      (node.trackIds || []).join(" ")
    ]))
    .map((node) => {
      const trackTitle = node.trackIds?.length ? localizedTrackTitle(node.trackIds[0]) : "";
      const lensTitle = localizedLensTitle(node.lensId);
      return {
        type: "lens-phase",
        id: node.id,
        title: localizedItemTitle(node),
        description: `${node.yearLabel || node.period || formatYearLabel(getRepresentativeYearForNode(node))} · ${trackTitle || lensTitle} · Phase`
      };
    });

  const regionPhaseMatches = (HISTORY_DATA.regionPhases || [])
    .filter((phase) => searchTextIncludes(q, [
      phase.id,
      phase.title,
      phase.titleZh,
      phase.summary,
      phase.summaryZh,
      phase.phaseIntro,
      phase.phaseIntroZh,
      phase.yearLabel,
      phase.placeId,
      (phase.lensIds || []).join(" ")
    ]))
    .map((phase) => ({
      type: "region-phase",
      id: phase.id,
      title: localizedItemTitle(phase),
      description: `${localizedPlaceTitle(phase.placeId)} · ${phase.yearLabel || formatYearLabel(getRepresentativeYearForNode(phase))} · Region phase`
    }));

  return uniqueMatches([
    ...yearMatches,
    ...eventMatches,
    ...trackMatches,
    ...lensPhaseMatches,
    ...regionPhaseMatches,
    ...regionMatches,
    ...categoryMatches.flat(),
    ...lensMatches
  ]).slice(0, 10);
}

function searchTextIncludes(query, values) {
  return values
    .filter((value) => value !== undefined && value !== null)
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function parseSearchYear(value) {
  const match = String(value || "").trim().match(/^(\d{1,4})(?:\s*(bce|bc|ce|ad))?$/i);
  if (!match) return null;
  const year = Number(match[1]);
  const suffix = (match[2] || "").toLowerCase();
  if (suffix === "bce" || suffix === "bc") return -year;
  return year;
}

function activateSearchMatch(match) {
  if (match.type === "event") {
    selectEvent(match.id, { openDeepDive: true });
  } else if (match.type === "region" || match.type === "place") {
    state.region = match.id;
    if (match.type === "place" && !getSelectedPlaceIds().includes(match.id)) {
      setSelectedPlaceIds([...getSelectedPlaceIds(), match.id]);
    }
    state.view = "time-slice";
    state.deepDiveOpen = true;
    state.selectedItem = null;
    state.selectedEventId = null;
    state.detail = { type: "empty" };
    renderAll();
  } else if (match.type === "year") {
    setYear(Number(match.id));
  } else if (match.type === "lens-context") {
    const lens = getLensById(match.id);
    if (lens && !getSelectedLensIds().includes(lens.id)) {
      setSelectedLensIds([...getSelectedLensIds(), lens.id]);
    }
    state.view = "time-slice";
    state.deepDiveOpen = false;
    state.selectedItem = null;
    state.selectedEventId = null;
    state.detail = { type: "empty" };
    renderAll();
  } else if (match.type === "track-context") {
    const track = getLensTrackById(match.id);
    if (track && !getSelectedTrackIds().includes(track.id)) {
      state.selectedTrackIds = [...getSelectedTrackIds(), track.id];
      syncSelectedTrackAlias();
    }
    state.view = "time-slice";
    state.deepDiveOpen = false;
    state.selectedItem = null;
    state.selectedEventId = null;
    state.detail = { type: "empty" };
    renderAll();
  } else if (match.type === "lens-phase") {
    const node = HISTORY_DATA.lineageNodes.find((item) => item.id === match.id);
    if (node) {
      if ((node.trackIds || []).length) {
        state.selectedTrackIds = unique([...getSelectedTrackIds(), ...node.trackIds]);
        syncSelectedTrackAlias();
      } else if (node.lensId && !getSelectedLensIds().includes(node.lensId)) {
        setSelectedLensIds([...getSelectedLensIds(), node.lensId]);
      }
      activateLineagePreviewNode(node.id, { openModal: true });
    }
  } else if (match.type === "region-phase") {
    const phase = findRegionPhaseById(match.id);
    if (phase) {
      if (phase.placeId && !getSelectedPlaceIds().includes(phase.placeId)) {
        setSelectedPlaceIds([...getSelectedPlaceIds(), phase.placeId]);
      }
      activateRegionPhasePreviewNode(phase.id, { openModal: true });
    }
  } else if (match.type === "lens") {
    const lens = getLensById(match.id);
    if (lens && !getSelectedLensIds().includes(lens.id)) {
      setSelectedLensIds([...getSelectedLensIds(), lens.id]);
    }
    state.view = "time-slice";
    state.deepDiveOpen = false;
    renderAll();
  } else {
    const lens = getLensByTitle(match.id);
    setSelectedLensIds(lens ? [lens.id] : []);
    state.view = "time-slice";
    state.deepDiveOpen = false;
    renderAll();
  }
  els.searchInput.value = "";
  els.searchResults.hidden = true;
}

function handleQuickStart(value) {
  if (value === "art") {
    const lens = getLensById("art");
    setSelectedLensIds([lens.id]);
    state.view = "time-slice";
    state.deepDiveOpen = false;
    state.selectedItem = null;
    state.selectedEventId = null;
    state.detail = { type: "empty" };
    renderAll();
    return;
  }
  const eventByYear = {
    1453: "fall-constantinople",
    1879: "edison-light-bulb",
    1914: "world-war-i"
  };
  setSelectedLensIds([]);
  selectEvent(eventByYear[value], { openDeepDive: true });
}

function selectEvent(eventId, options = {}) {
  const event = HISTORY_DATA.events.find((item) => item.id === eventId);
  if (!event) return;
  state.selectedEventId = event.id;
  state.selectedItem = { type: "event", id: event.id };
  state.year = event.year;
  ensureTimelineRangeIncludesYear(state.year);
  state.region = event.primaryPlaceId || (event.placeIds || [])[0] || event.region;
  state.localContextScope = getEventLocalContextScope(event);
  state.localContextNearbyMode = null;
  if (event.placeIds && event.placeIds.length && !getSelectedPlaceIds().length) {
    setSelectedPlaceIds(event.placeIds);
  }
  state.view = options.openDeepDive ? "connections" : "time-slice";
  state.deepDiveOpen = Boolean(options.openDeepDive);
  setSelectedLensIds([]);
  state.activeBridge = null;
  state.mapHighlight = { type: "selected", regions: [event.region] };
  state.detail = { type: "node", nodeId: getSelectedEventStartNodeId() };
  resetProgressiveDisclosure();
  renderAll();
}

function setYear(year) {
  state.year = clampYearToActiveTimelineRange(year);
  if (state.localContextScope) {
    state.localContextScope = { ...state.localContextScope, year: state.year };
  }
  state.view = "time-slice";
  state.deepDiveOpen = true;
  state.selectedItem = null;
  state.selectedEventId = null;
  reconcileSelectedItemWithContext();
  state.mapHighlight = { type: "selected", regions: [state.region] };
  resetProgressiveDisclosure();
  renderAll();
}

function resetProgressiveDisclosure() {
  state.visiblePathCount = state.selectedEventId === "fall-constantinople" ? 5 : 3;
  state.visibleNodeCount = state.selectedEventId === "fall-constantinople" ? 6 : 3;
}

function deriveCurrentContext() {
  const selectedLens = state.lens;
  const selectedLensId = getSelectedLensId();
  const activeSnapshotItems = getRegionSnapshotsForContext();
  const localEvents = getEventsForCurrentState();
  const activeRegionLineageNodes = getRegionLineageMatches();
  const activeLensLineageNodes = getLensLineageMatches(selectedLensId);
  const localMatches = sortLocalMatches([
    ...localEvents.map((event) => eventToLocalMatch(event, selectedLensId)),
    ...activeRegionLineageNodes.map((node) => regionLineageToLocalMatch(node, selectedLensId)),
    ...activeLensLineageNodes.map((node) => lensLineageToLocalMatch(node, selectedLensId))
  ]);

  const selectedItem = resolveSelectedItem(localMatches);
  const selectedItemDetail = selectedItem ? selectedItem.item : null;
  const selectedEvent = selectedItem && selectedItem.type === "event" ? selectedItem.item : null;
  const availableConnectionPaths = selectedEvent
    ? HISTORY_DATA.connectionPaths.filter((path) => path.eventId === selectedEvent.id && pathIsRelatedToLens(path))
    : [];
  const bridgeCandidates = availableConnectionPaths.length ? [] : buildBridgeCandidates(selectedItem, selectedLensId);

  if (selectedEvent) {
    state.selectedEventId = selectedEvent.id;
  } else if (state.selectedItem && state.selectedItem.type !== "event") {
    state.selectedEventId = null;
  }

  return {
    selectedYear: state.year,
    selectedRegion: state.region,
    selectedPlace: selectedItemDetail && selectedItemDetail.place ? selectedItemDetail.place : localizedPlaceTitle(state.region),
    selectedLens,
    selectedMode: state.mode,
    selectedItem: selectedItem ? { type: selectedItem.type, id: selectedItem.id } : null,
    selectedEvent,
    selectedLineageNode: selectedItem && selectedItem.type.includes("lineage") ? selectedItem.item : null,
    selectedItemDetail,
    activeSnapshotItems,
    activeRegionLineageNodes,
    activeLensLineageNodes,
    localEvents,
    localMatches,
    availableConnectionPaths,
    bridgeCandidates
  };
}

function deriveTimeSlice(year) {
  const regions = getVisibleMatrixRegions();
  const rows = getTimeSliceRows();
  return {
    year,
    regions,
    rows: rows.map((row) => ({
      ...row,
      cells: regions.map((region) => deriveTimeSliceCell(year, region, row.lens, row.track || null))
    }))
  };
}

function getTimeSliceRows() {
  const selectedLensIds = getSelectedLensIds();
  const selectedTrackIds = getSelectedTrackIds();
  const lensRows = selectedLensIds
    .map((lensId) => getLensById(lensId))
    .filter(Boolean)
    .map((lens) => ({ type: "lens", lens, track: null }));
  const trackRows = selectedTrackIds
    .map((trackId) => getLensTrackById(trackId))
    .filter(Boolean)
    .map((track) => ({ type: "track", lens: getLensById(track.parentLensId), track }))
    .filter((row) => row.lens);
  return [...lensRows, ...trackRows];
}

function getMatrixRegions() {
  return getDefaultPlaceIds();
}

function getVisibleMatrixRegions() {
  return getVisibleMatrixPlaces();
}

function deriveTimeSliceCell(year, region, lens, track = null) {
  const selectedLensId = lens.id;
  const selectedTrackApplies = track && track.parentLensId === selectedLensId;
  const lensTracks = getTracksForLens(selectedLensId);
  const buckets = {
    exactEvents: [],
    regionalPhases: [],
    relatedLensPhases: []
  };

  HISTORY_DATA.events.filter((item) => {
    const start = item.startYear || item.year;
    const end = item.endYear || item.year;
    const itemTracks = item.trackIds || [];
    const trackMatch = selectedTrackApplies
      ? itemTracks.includes(track.id)
      : !lensTracks.length || !itemTracks.length;
    return start <= year
      && end >= year
      && trackMatch
      && eventMatchesPlace(item, region)
      && eventMatchesPrimaryLens(item, selectedLensId);
  }).forEach((event) => {
    buckets.exactEvents.push(timeSliceCellFromMatch(year, region, lens, eventToLocalMatch(event, selectedLensId), track));
  });

  HISTORY_DATA.events.filter((item) => {
    const start = item.startYear || item.year;
    const end = item.endYear || item.year;
    const itemTracks = item.trackIds || [];
    const trackMatch = selectedTrackApplies
      ? itemTracks.includes(track.id)
      : !lensTracks.length || !itemTracks.length;
    return start <= year
      && end >= year
      && trackMatch
      && eventMatchesPlace(item, region)
      && !eventMatchesPrimaryLens(item, selectedLensId)
      && eventMatchesLens(item, selectedLensId);
  }).forEach((event) => {
    buckets.relatedLensPhases.push(timeSliceCellFromMatch(year, region, lens, eventToLocalMatch(event, selectedLensId), track));
  });

  if (!selectedTrackApplies) {
    const regionNodes = (HISTORY_DATA.regionPhases || [])
      .filter((node) => node.placeId === region)
      .filter((node) => yearInPeriod(year, node))
      .filter((node) => (node.lensIds || []).includes(selectedLensId))
      .sort((a, b) => getPeriodDuration(a) - getPeriodDuration(b));
    regionNodes.forEach((node) => {
      buckets.regionalPhases.push(timeSliceCellFromMatch(year, region, lens, regionLineageToLocalMatch(node, selectedLensId), track));
    });
  }

  const primaryCandidates = buckets.exactEvents.sort(compareTimeSliceCells);

  if (primaryCandidates.length) {
    return decorateTimeSliceCellWithContext(primaryCandidates[0], buckets);
  }

  return decorateTimeSliceCellWithContext({
    year,
    region,
    lensId: lens.id,
    trackId: track ? track.id : "",
    hasData: false,
    itemType: "",
    itemId: "",
    title: t("noEventYet"),
    period: "",
    typeLabel: "Empty",
    matchKind: "empty",
    matchKindLabel: localizedTypeLabel("Empty"),
    sourceTypeLabel: "Empty"
  }, buckets);
}

function timeSliceCellFromMatch(year, region, lens, match, track = null) {
  const matchKind = match.matchKind || getMatchKind(match);
  return {
    year,
    region,
    lensId: lens.id,
    trackId: track ? track.id : "",
    hasData: true,
    itemType: match.type,
    itemId: match.id,
    title: localizedItemTitle(match.item),
    period: match.yearLabel,
    typeLabel: getMatchKindLabel(matchKind),
    matchKind,
    matchKindLabel: getMatchKindLabel(matchKind),
    sourceTypeLabel: match.typeLabel.replace("Exact ", "").replace(" Context", ""),
    rangeDuration: getMatchDuration(match),
    rangeStart: getMatchStartYear(match)
  };
}

function decorateTimeSliceCellWithContext(cell, buckets) {
  const supportCount = buckets.exactEvents
    .filter((item) => item.itemId !== cell.itemId || item.itemType !== cell.itemType)
    .length;
  return {
    ...cell,
    supportCount: cell.hasData ? supportCount : 0
  };
}

function trackPromptCell(year, region, lens) {
  return {
    year,
    region,
    lensId: lens.id,
    hasData: false,
    itemType: "",
    itemId: "",
    title: t("multipleTracksActive"),
    period: t("selectFocusedTrack"),
    typeLabel: "Empty",
    matchKind: "track-prompt",
    matchKindLabel: t("selectFocusedTrack"),
    sourceTypeLabel: ""
  };
}

function compareTimeSliceCells(a, b) {
  const rank = {
    "exact-event": 0,
    "track-exact-event": 0,
    "regional-phase": 1,
    phase: 4,
    "track-prompt": 8,
    empty: 9
  };
  const aRank = rank[a.matchKind] ?? 9;
  const bRank = rank[b.matchKind] ?? 9;
  if (aRank !== bRank) return aRank - bRank;
  return (a.rangeDuration ?? Infinity) - (b.rangeDuration ?? Infinity);
}

function getMatchKind(match) {
  if (match.type === "event") return (match.item.trackIds || []).length ? "track-exact-event" : "exact-event";
  if (match.type === "snapshot") return "snapshot-context";
  if (match.type === "region-lineage") return "regional-phase";
  if (match.type === "lens-lineage") return "phase";
  return "empty";
}

function getMatchKindLabel(matchKind) {
  const labels = {
    "exact-event": t("exactEvent"),
    "track-exact-event": t("exactEvent"),
    "regional-phase": t("regionalPhase"),
    phase: t("phase"),
    "track-prompt": t("selectFocusedTrack"),
    empty: localizedTypeLabel("Empty")
  };
  return labels[matchKind] || matchKind;
}

function getMatchDuration(match) {
  if (!match || !match.item) return Infinity;
  return getPeriodDuration(match.item);
}

function getMatchStartYear(match) {
  if (!match || !match.item) return -Infinity;
  const item = match.item;
  if (typeof item.startYear === "number") return item.startYear;
  if (typeof item.year === "number") return item.year;
  const years = extractYears(item.yearLabel || item.period || "");
  return years[0] || -Infinity;
}

function getPeriodDuration(item) {
  if (!item) return Infinity;
  const start = typeof item.startYear === "number" ? item.startYear : null;
  const end = typeof item.endYear === "number" ? item.endYear : null;
  if (start !== null && end !== null) return Math.max(0, end - start);
  if (typeof item.year === "number") return 0;
  const years = extractYears(item.yearLabel || item.period || "");
  if (years.length >= 2) return Math.max(0, years[years.length - 1] - years[0]);
  return Infinity;
}

function resolveSelectedItem(localMatches) {
  if (state.selectedItem) {
    const selected = localMatches.find((match) => match.type === state.selectedItem.type && match.id === state.selectedItem.id);
    if (selected) return selected;
  }
  const event = localMatches.find((match) => match.type === "event" && match.id === state.selectedEventId);
  if (event) return event;
  return localMatches[0] || null;
}

function reconcileSelectedItemWithContext() {
  const context = deriveCurrentContext();
  state.selectedItem = context.selectedItem;
  if (context.selectedEvent) {
    state.selectedEventId = context.selectedEvent.id;
    state.detail = { type: "node", nodeId: getSelectedEventStartNodeId() };
  } else if (context.selectedItem) {
    state.selectedEventId = null;
    state.detail = getDetailForLocalItem(context.selectedItem.type, context.selectedItem.id);
  } else {
    state.selectedEventId = null;
    state.detail = { type: "empty" };
  }
}

function getEventsForCurrentState() {
  const selectedTrackIds = getSelectedTrackIds();
  return HISTORY_DATA.events.filter((event) => {
    const start = event.startYear || event.year;
    const end = event.endYear || event.year;
    const trackMatches = !selectedTrackIds.length || !(event.trackIds || []).length || (event.trackIds || []).some((trackId) => selectedTrackIds.includes(trackId));
    return start <= state.year
      && end >= state.year
      && trackMatches
      && eventMatchesPlace(event, state.region);
  });
}

function getRegionSnapshotsForContext() {
  const regionId = normalizeRegionId(state.region);
  return (HISTORY_DATA.regionSnapshots || []).filter((snapshot) => (
    snapshot.year === state.year && snapshot.regionId === regionId
  ));
}

function getRegionLineageMatches() {
  return (HISTORY_DATA.regionPhases || [])
    .filter((node) => node.placeId === state.region)
    .filter((node) => yearInPeriod(state.year, node));
}

function getLensLineageMatches(selectedLensId) {
  if (!selectedLensId) return [];
  const selectedTrackIds = getSelectedTrackIds();
  return HISTORY_DATA.lineageNodes
    .filter((node) => node.lensId === selectedLensId)
    .filter((node) => {
      const nodeTrackIds = node.trackIds || [];
      if (!selectedTrackIds.length) return true;
      if (!nodeTrackIds.length) return true;
      return nodeTrackIds.some((trackId) => selectedTrackIds.includes(trackId));
    })
    .filter((node) => yearInRange(state.year, node.startYear, node.endYear))
    .filter((node) => regionMatchesLineageNodeForTimeSlice(state.region, node));
}

function eventToLocalMatch(event, selectedLensId) {
  const categories = [...new Set([
    ...(event.categories || []),
    ...(event.lensIds || []).map(getLensTitleById),
    ...(event.trackIds || []).map(getLensTrackTitleById)
  ].filter(Boolean))];
  const lensMatched = !selectedLensId || eventMatchesLens(event, selectedLensId);
  return {
    type: "event",
    typeLabel: "Exact Event",
    id: event.id,
    item: event,
    yearLabel: String(event.year),
    regionLabel: localizedPlaceTitle(event.primaryPlaceId) || event.region,
    place: event.place,
    categories,
    sideBridges: [],
    sources: event.sources || [],
    matchKind: (event.trackIds || []).length ? "track-exact-event" : "exact-event",
    matchKindLabel: getMatchKindLabel((event.trackIds || []).length ? "track-exact-event" : "exact-event"),
    lensMatched,
    dimmed: shouldDimLocalMatch(lensMatched, categories)
  };
}

function eventMatchesLens(event, lensId) {
  if (!lensId) return true;
  if ((event.lensIds || []).includes(lensId)) return true;
  if (event.primaryLensId === lensId) return true;
  return (event.categories || []).some((category) => categoryToLensId(category) === lensId);
}

function eventMatchesPrimaryLens(event, lensId) {
  if (!lensId) return true;
  if (event.primaryLensId) return event.primaryLensId === lensId;
  return eventMatchesLens(event, lensId);
}

function eventMatchesPlace(event, placeId) {
  if (!placeId) return true;
  if ((event.placeIds || []).includes(placeId)) return true;
  if (event.primaryPlaceId === placeId) return true;
  if ((event.placeIds || []).length || event.primaryPlaceId) return false;
  const values = [event.region, event.place, event.involvedRegions || []];
  return regionMatchesValue(placeId, values);
}

function snapshotToLocalMatch(snapshot, selectedLensId) {
  const categories = (snapshot.primaryLensIds || []).map(getLensTitleById);
  const lensMatched = !selectedLensId || (snapshot.primaryLensIds || []).includes(selectedLensId);
  return {
    type: "snapshot",
    typeLabel: "Snapshot Context",
    id: snapshot.id,
    item: snapshot,
    yearLabel: String(snapshot.year),
    regionLabel: snapshot.regionName,
    place: "",
    categories,
    sideBridges: snapshot.lineageTags || [],
    sources: snapshot.sources || [],
    matchKind: "snapshot-context",
    matchKindLabel: getMatchKindLabel("snapshot-context"),
    lensMatched,
    dimmed: shouldDimLocalMatch(lensMatched, categories)
  };
}

function regionLineageToLocalMatch(node, selectedLensId) {
  const categories = (node.lensIds || []).map(getLensTitleById);
  const lensMatched = !selectedLensId || (node.lensIds || []).includes(selectedLensId);
  return {
    type: "region-lineage",
    typeLabel: "Regional Phase",
    id: node.id,
    item: node,
    yearLabel: node.yearLabel || node.period,
    regionLabel: localizedPlaceTitle(node.placeId) || node.regionName || state.region,
    place: "",
    categories,
    sideBridges: node.relatedRegionIds || [],
    sources: node.sources || node.sourceRefs || [],
    matchKind: "regional-phase",
    matchKindLabel: getMatchKindLabel("regional-phase"),
    lensMatched,
    dimmed: shouldDimLocalMatch(lensMatched, categories)
  };
}

function lensLineageToLocalMatch(node, selectedLensId) {
  const categories = [getLensTitleById(node.lensId), ...(node.trackIds || []).map(getLensTrackTitleById)];
  const lensMatched = !selectedLensId || node.lensId === selectedLensId;
  return {
    type: "lens-lineage",
    typeLabel: (node.trackIds || []).length ? "Focused Track" : "Lens Lineage",
    id: node.id,
    item: node,
    yearLabel: node.yearLabel,
    regionLabel: (node.primaryRegions || []).join(" / "),
    place: "",
    categories,
    sideBridges: node.sideBridges || [],
    sources: node.sourceRefs || [],
    matchKind: "phase",
    matchKindLabel: getMatchKindLabel("phase"),
    lensMatched,
    dimmed: shouldDimLocalMatch(lensMatched, categories)
  };
}

function sortLocalMatches(matches) {
  const selectedLensId = getSelectedLensId();
  const rank = { event: 0, "region-lineage": 1, "lens-lineage": 2, snapshot: 3 };
  return uniqueLocalMatches(matches).sort((a, b) => {
    if (selectedLensId && a.lensMatched !== b.lensMatched) return a.lensMatched ? -1 : 1;
    const kindCompare = compareTimeSliceCells(
      { matchKind: a.matchKind || getMatchKind(a), rangeDuration: getMatchDuration(a) },
      { matchKind: b.matchKind || getMatchKind(b), rangeDuration: getMatchDuration(b) }
    );
    if (kindCompare !== 0) return kindCompare;
    return (rank[a.type] || 9) - (rank[b.type] || 9);
  });
}

function uniqueLocalMatches(matches) {
  const seen = new Set();
  return matches.filter((match) => {
    const key = getLocalMatchDedupeKey(match);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getLocalMatchDedupeKey(match) {
  if (match.type === "event" && match.item) {
    const event = match.item;
    const title = String(event.titleZh || event.title || "")
      .toLowerCase()
      .replace(/\bconnected\b/g, "connect")
      .replace(/\bconnects\b/g, "connect")
      .replace(/\bfirst nodes?\b/g, "first node")
      .replace(/[\u3000\s·・,，.。:：;；'"“”‘’()（）/\\-]/g, "");
    const place = event.primaryPlaceId || (event.placeIds || [])[0] || event.place || event.region || "";
    return `event:${event.year}:${place}:${title}`;
  }
  return `${match.type}:${match.id}`;
}

function shouldDimLocalMatch(lensMatched, categories) {
  if (!getSelectedLensIds().length) return false;
  if (state.mode === "Only this category") return !lensMatched;
  return categories && categories.length ? !lensMatched : false;
}

function buildBridgeCandidates(selectedMatch, selectedLensId) {
  if (!selectedMatch) return [];
  const item = selectedMatch.item;
  const candidates = [];
  const activeLens = selectedLensId ? getLensById(selectedLensId) : null;
  const mechanisms = [
    ...(item.sideBridges || []),
    ...(item.bridgeMechanisms || []),
    ...(item.lineageTags || []),
    ...(activeLens ? activeLens.bridgeMechanisms.slice(0, 3) : []),
    ...(item.relatedRegionIds || []).map((regionId) => `Regional link: ${regionId}`),
    ...(item.relatedLenses || []).map(getLensTitleById)
  ];
  unique(mechanisms).slice(0, 6).forEach((mechanism) => {
    candidates.push({
      name: mechanism,
      mechanism,
      relatedLens: activeLens ? activeLens.title : selectedMatch.typeLabel,
      explanation: `Possible bridge suggested by ${selectedMatch.typeLabel.toLowerCase()} metadata for ${state.year} in ${state.region}. This needs curated connection work before it becomes a path.`
    });
  });
  if (!candidates.length && selectedMatch.sources && selectedMatch.sources.length) {
    candidates.push({
      name: "Source-backed context",
      mechanism: "contextual evidence",
      relatedLens: activeLens ? activeLens.title : selectedMatch.typeLabel,
      explanation: "This item has source-backed context, but no bridge mechanism has been curated yet."
    });
  }
  return candidates;
}

function getSelectedEvent() {
  return HISTORY_DATA.events.find((event) => event.id === state.selectedEventId);
}

function getCurrentPaths() {
  if (state.currentContext) return state.currentContext.availableConnectionPaths || [];
  const event = getSelectedEvent();
  if (!event) return [];
  return HISTORY_DATA.connectionPaths.filter((path) => path.eventId === event.id && pathIsRelatedToLens(path));
}

function getVisiblePaths(paths) {
  let visible = paths;
  if (state.activeBridge) {
    visible = paths.filter((path) => path.bridge === state.activeBridge || path.categories.includes(state.activeBridge));
  } else {
    visible = paths.slice(0, state.visiblePathCount);
  }
  return visible;
}

function getSnapshotForRegion(region) {
  return (HISTORY_DATA.snapshots[state.year] || []).find((snapshot) => snapshot.region === region);
}

function findSnapshotByRegionAndYear(region, year) {
  return (HISTORY_DATA.snapshots[year] || []).find((snapshot) => snapshot.region === region) || null;
}

function getSelectedEventStartNodeId() {
  const firstPath = HISTORY_DATA.connectionPaths.find((path) => path.eventId === state.selectedEventId);
  return firstPath ? firstPath.nodes[0].id : null;
}

function getSelectedEventAsNode() {
  const event = getSelectedEvent();
  if (!event) return null;
  return {
    id: event.id,
    year: event.year,
    title: event.title,
    region: event.region,
    place: event.place,
    categories: event.categories,
    summary: event.summary
  };
}

function findNodeById(nodeId, pathId, nodeIndex) {
  if (!nodeId) return null;
  if (pathId) {
    const path = findPathById(pathId);
    const node = path && path.nodes[nodeIndex];
    if (node && node.id === nodeId) return node;
    const fallbackNode = path && path.nodes.find((item) => item.id === nodeId);
    if (fallbackNode) return fallbackNode;
  }
  for (const path of HISTORY_DATA.connectionPaths) {
    const node = path.nodes.find((item) => item.id === nodeId);
    if (node) return node;
  }
  return HISTORY_DATA.lineageNodes.find((node) => node.id === nodeId)
    || HISTORY_DATA.artLineage.nodes.find((node) => node.id === nodeId)
    || null;
}

function findPathById(pathId) {
  return HISTORY_DATA.connectionPaths.find((path) => path.id === pathId)
    || (pathId === "art-lineage-path" ? {
      id: "art-lineage-path",
      nodes: HISTORY_DATA.artLineage.nodes,
      edges: HISTORY_DATA.artLineage.edges
    } : null);
}

function findEdge(from, to, pathId, edgeIndex) {
  if (pathId) {
    const path = findPathById(pathId);
    const edge = path && path.edges[edgeIndex];
    if (edge && edge.from === from && edge.to === to) return edge;
  }
  for (const path of HISTORY_DATA.connectionPaths) {
    const edge = path.edges.find((item) => item.from === from && item.to === to);
    if (edge) return edge;
  }
  return HISTORY_DATA.artLineage.edges.find((edge) => edge.from === from && edge.to === to) || null;
}

function setMapHighlight(type, regions) {
  state.mapHighlight = { type, regions: unique(regions).filter(Boolean) };
  renderMap();
}

function clearMapHighlight() {
  if (state.detail.type === "connection") {
    const path = findPathById(state.detail.pathId);
    const fromNode = path ? path.nodes.find((node) => node.id === state.detail.from) : findNodeById(state.detail.from);
    const toNode = path ? path.nodes.find((node) => node.id === state.detail.to) : findNodeById(state.detail.to);
    setMapHighlight("connection", unique([
      ...getRegionsFromValue(fromNode ? fromNode.region : ""),
      ...getRegionsFromValue(toNode ? toNode.region : "")
    ]));
    return;
  }
  if (state.detail.type === "node") {
    const node = findNodeById(state.detail.nodeId, state.detail.pathId, state.detail.nodeIndex);
    if (node) {
      setMapHighlight("node", getRegionsFromValue(node.region));
      return;
    }
  }
  state.mapHighlight = { type: "selected", regions: [state.region] };
  renderMap();
}

function getRegionsForPath(path) {
  return unique(path.nodes.flatMap((node) => getRegionsFromValue(node.region)));
}

function getRegionsFromValue(value) {
  if (!value) return [];
  return HISTORY_DATA.regions
    .map((region) => region.id)
    .filter((region) => value.includes(region));
}

function focusNode(nodeId) {
  const button = els.connectionPaths.querySelector(`[data-node-id="${nodeId}"]`);
  if (!button) return;
  button.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  button.classList.add("highlighted");
  window.setTimeout(() => button.classList.remove("highlighted"), 1100);
}

function scrollFirstPathIntoView() {
  const row = els.connectionPaths.querySelector(".path-row:not(.hidden)");
  if (row) row.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getSelectedLens() {
  return getLensById(getSelectedLensId());
}

function syncSelectedTrackAlias() {
  state.selectedTrackIds = unique((state.selectedTrackIds || []).filter(Boolean));
  state.selectedTrackId = state.selectedTrackIds[0] || null;
}

function getSelectedTrackIds() {
  if (state.selectedTrackIds && state.selectedTrackIds.length) return state.selectedTrackIds;
  return state.selectedTrackId ? [state.selectedTrackId] : [];
}

function getPrimarySelectedTrackId() {
  return getSelectedTrackIds()[0] || null;
}

function toggleTrackSelection(trackId) {
  if (!trackId) return;
  const selected = new Set(getSelectedTrackIds());
  if (selected.has(trackId)) {
    selected.delete(trackId);
  } else {
    selected.add(trackId);
  }
  state.selectedTrackIds = [...selected];
  syncSelectedTrackAlias();
}

function getSelectedLensIds() {
  if (state.selectedLensIds && state.selectedLensIds.length) return state.selectedLensIds;
  const legacyLensId = getSelectedLensId();
  return legacyLensId ? [legacyLensId] : [];
}

function getSelectedLensId() {
  if (state.selectedLensIds && state.selectedLensIds.length) return state.selectedLensIds[0];
  if (state.lens === "All") return null;
  const byTitle = getLensByTitle(state.lens);
  if (byTitle) return byTitle.id;
  if (state.activeLensId) return state.activeLensId;
  return categoryToLensId(state.lens);
}

function matchesLens(categories) {
  const selectedLensIds = getSelectedLensIds();
  if (!selectedLensIds.length) return true;
  return categories.some((category) => selectedLensIds.includes(categoryToLensId(category)));
}

function shouldDimByLens(categories) {
  if (!getSelectedLensIds().length) return false;
  return !matchesLens(categories);
}

function pathIsRelatedToLens(path) {
  if (!getSelectedLensIds().length) return true;
  return matchesLens(path.categories) || path.nodes.some((node) => matchesLens(node.categories));
}

function renderTags(categories, isMatch) {
  if (!categories || !categories.length) return "";
  const selectedLensId = getSelectedLensId();
  const selectedLensIds = getSelectedLensIds();
  return `
    <div class="tag-row">
      ${categories.map((category) => {
        const tagMatches = !selectedLensIds.length || selectedLensIds.includes(categoryToLensId(category)) || (selectedLensId && categoryToLensId(category) === selectedLensId);
        return `<span class="tag ${isMatch && tagMatches ? "match" : ""}">${localizedCategoryLabel(category)}</span>`;
      }).join("")}
    </div>
  `;
}

function renderSimpleChips(items) {
  if (!items || !items.length) return "";
  return `<div class="tag-row">${items.map((item) => `<span class="tag">${localizedTerm(item)}</span>`).join("")}</div>`;
}

function enterLensLineage(lensId) {
  const lens = getLensById(lensId);
  if (!lens) return;
  state.view = "lineage";
  state.deepDiveOpen = true;
  setSelectedLensIds([lens.id]);
  state.activeBridge = null;
  state.mapHighlight = { type: "selected", regions: [state.region] };
  const firstNode = getLineageNodesForLens(lens.id)[0];
  state.detail = firstNode ? { type: "lineage-node", nodeId: firstNode.id } : { type: "node", nodeId: getSelectedEventStartNodeId() };
  renderAll();
}

function getActiveLens() {
  return getLensById(state.activeLensId);
}

function getLensById(lensId) {
  return HISTORY_DATA.lenses.find((lens) => lens.id === lensId) || null;
}

function getLensByTitle(title) {
  return HISTORY_DATA.lenses.find((lens) => lens.title === title) || null;
}

function getLensTitleById(lensId) {
  const lens = getLensById(lensId);
  return lens ? lens.title : lensId;
}

function getLensTrackById(trackId) {
  return (HISTORY_DATA.lensTracks || []).find((track) => track.id === trackId) || null;
}

function getTracksForLens(lensId) {
  return (HISTORY_DATA.lensTracks || []).filter((track) => track.parentLensId === lensId);
}

function getLensTrackTitleById(trackId) {
  const track = getLensTrackById(trackId);
  return track ? track.title : trackId;
}

function localizedTrackTitle(trackOrId) {
  const trackId = typeof trackOrId === "string" ? trackOrId : trackOrId.id;
  return DISPLAY_TRANSLATIONS[state.locale]?.lensTracks?.[trackId] || (typeof trackOrId === "string" ? getLensTrackTitleById(trackId) : trackOrId.title);
}

function getPlaceById(placeId) {
  return (HISTORY_DATA.places || []).find((place) => place.id === placeId) || null;
}

function localizedPlaceTitle(placeOrId) {
  const place = typeof placeOrId === "string" ? getPlaceById(placeOrId) : placeOrId;
  if (!place) return typeof placeOrId === "string" ? placeOrId : "";
  return state.locale === "zh" && place.titleZh ? place.titleZh : place.title;
}

function getMacroAreaById(macroAreaId) {
  return (HISTORY_DATA.macroAreas || []).find((area) => area.id === macroAreaId) || null;
}

function localizedMacroAreaTitle(macroAreaOrId) {
  const area = typeof macroAreaOrId === "string" ? getMacroAreaById(macroAreaOrId) : macroAreaOrId;
  if (!area) return typeof macroAreaOrId === "string" ? macroAreaOrId : "";
  return state.locale === "zh" && area.titleZh ? area.titleZh : area.title;
}

function getDefaultPlaceIds() {
  return [
    "china",
    "japan",
    "korea",
    "india",
    "turkey-anatolia",
    "france",
    "britain-uk",
    "german-lands",
    "italian-states",
    "russia",
    "united-states",
    "mexico-mesoamerica",
    "andes-peru",
    "west-africa",
    "egypt-north-africa"
  ].filter((placeId) => getPlaceById(placeId));
}

function getAllPlaceIds() {
  return (HISTORY_DATA.places || []).map((place) => place.id).filter((placeId) => getPlaceById(placeId));
}

function getSelectedPlaceIds() {
  return unique((state.selectedPlaceIds || []).filter((placeId) => getPlaceById(placeId)));
}

function setSelectedPlaceIds(placeIds) {
  state.selectedPlaceIds = unique((placeIds || []).filter((placeId) => getPlaceById(placeId)));
  if (state.selectedPlaceIds.length && !state.selectedPlaceIds.includes(state.region)) {
    state.region = state.selectedPlaceIds[0];
  }
}

function togglePlaceSelection(placeId) {
  if (!getPlaceById(placeId)) return;
  const selected = new Set(getSelectedPlaceIds());
  if (selected.has(placeId)) {
    selected.delete(placeId);
  } else {
    selected.add(placeId);
  }
  setSelectedPlaceIds([...selected]);
}

function getVisibleMatrixPlaces() {
  return getSelectedPlaceIds();
}

function getRegionPhasesForPlace(placeId) {
  return (HISTORY_DATA.regionPhases || [])
    .filter((phase) => phase.placeId === placeId)
    .slice()
    .sort((a, b) => a.startYear - b.startYear);
}

function findRegionPhaseById(phaseId) {
  return (HISTORY_DATA.regionPhases || []).find((phase) => phase.id === phaseId) || null;
}

function getTrackParentLensId(trackId) {
  const track = getLensTrackById(trackId);
  return track ? track.parentLensId : null;
}

function getLineageNodesForLens(lensId) {
  return HISTORY_DATA.lineageNodes
    .filter((node) => node.lensId === lensId)
    .slice()
    .sort((a, b) => a.startYear - b.startYear);
}

function getLineageNodesForTrack(trackId) {
  return HISTORY_DATA.lineageNodes
    .filter((node) => (node.trackIds || []).includes(trackId))
    .slice()
    .sort((a, b) => a.startYear - b.startYear);
}

function getRepresentativeYearForNode(node, options = {}) {
  if (typeof node.entryYear === "number") return node.entryYear;
  if (typeof node.focusYear === "number") return node.focusYear;
  if (typeof node.startYear === "number" && typeof node.endYear === "number") {
    const isTrackNode = (node.trackIds || []).length > 0;
    if (isTrackNode && yearInRange(state.year, node.startYear, node.endYear)) return state.year;
    if (options.source === "preview") return node.startYear;
    if (yearInRange(state.year, node.startYear, node.endYear)) return state.year;
    return node.startYear;
  }
  if (typeof node.startYear === "number") return node.startYear;
  if (typeof node.endYear === "number") return node.endYear;
  const years = extractYears(node.yearLabel || node.period || "");
  return years[0] || state.year;
}

function getBestRegionForNode(node) {
  const matrixRegions = getMatrixRegions();
  const values = [node.primaryRegions || [], node.relatedRegions || []];
  return matrixRegions.find((region) => regionMatchesValue(region, values)) || state.region;
}

function getSourceTitle(sourceId) {
  const source = HISTORY_DATA.sources[sourceId];
  return source ? source.title : sourceId;
}

function findRegionLineageNodeById(nodeId) {
  const regionPhase = findRegionPhaseById(nodeId);
  if (regionPhase) return regionPhase;
  for (const lineage of HISTORY_DATA.regionLineages || []) {
    const node = lineage.nodes.find((item) => item.id === nodeId);
    if (node) return { ...node, regionName: lineage.regionName };
  }
  return null;
}

function findRegionSnapshotById(snapshotId) {
  return (HISTORY_DATA.regionSnapshots || []).find((snapshot) => snapshot.id === snapshotId) || null;
}

function regionMatchesValue(region, values) {
  const targetId = normalizeRegionId(region);
  const targetLabel = normalizeText(region);
  return values.flat(Infinity).filter(Boolean).some((value) => {
    const text = normalizeText(String(value));
    const id = normalizeRegionId(String(value));
    if (text === "global" || id === "global") return true;
    return id === targetId || text.includes(targetLabel) || text.includes(targetId);
  });
}

function regionMatchesLineageNodeForTimeSlice(region, node) {
  const values = [node.primaryRegions || [], node.relatedRegions || []].flat(Infinity).filter(Boolean);
  const hasSpecificRegion = values.some((value) => {
    const id = normalizeRegionId(String(value));
    return id !== "global" && getMatrixRegions().some((matrixRegion) => normalizeRegionId(matrixRegion) === id);
  });
  if (!hasSpecificRegion) return regionMatchesValue(region, values);
  const targetId = normalizeRegionId(region);
  const targetLabel = normalizeText(region);
  return values.some((value) => {
    const text = normalizeText(String(value));
    const id = normalizeRegionId(String(value));
    if (id === "global" || text === "global") return false;
    return id === targetId || text.includes(targetLabel) || text.includes(targetId);
  });
}

function normalizeRegionId(value) {
  const text = normalizeText(value);
  const aliases = {
    europe: "europe",
    "middle east": "middle-east",
    middleeast: "middle-east",
    china: "china",
    japan: "japan",
    india: "india",
    africa: "africa",
    americas: "americas",
    america: "americas",
    "united states": "united-states",
    unitedstates: "united-states",
    "latin america": "latin-america",
    latinamerica: "latin-america",
    korea: "korea",
    "turkey anatolia": "turkey-anatolia",
    turkey: "turkey-anatolia",
    anatolia: "turkey-anatolia",
    constantinople: "turkey-anatolia",
    istanbul: "turkey-anatolia",
    france: "france",
    britain: "britain-uk",
    "united kingdom": "britain-uk",
    uk: "britain-uk",
    germany: "german-lands",
    "german lands": "german-lands",
    italy: "italian-states",
    "italian states": "italian-states",
    russia: "russia",
    "mexico mesoamerica": "mexico-mesoamerica",
    mexico: "mexico-mesoamerica",
    mesoamerica: "mexico-mesoamerica",
    "andes peru": "andes-peru",
    andes: "andes-peru",
    peru: "andes-peru",
    "west africa": "west-africa",
    egypt: "egypt-north-africa",
    "north africa": "egypt-north-africa"
  };
  return aliases[text] || aliases[text.replace(/\s+/g, "")] || text.replace(/\s+/g, "-");
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/[/,]+/g, " ").replace(/\s+/g, " ").trim();
}

function yearInRange(year, startYear, endYear) {
  const start = typeof startYear === "number" ? startYear : -Infinity;
  const end = typeof endYear === "number" ? endYear : Infinity;
  if (year < start) return false;
  if (end === Infinity) return true;
  if (start === end) return year === start;
  if (end >= PROTOTYPE_PRESENT_YEAR) return year <= end;
  return year < end;
}

function yearInPeriod(year, node) {
  if (typeof node.startYear === "number" || typeof node.endYear === "number") {
    return yearInRange(year, node.startYear, node.endYear);
  }
  const period = node.period || "";
  if (/present/i.test(period)) {
    const start = extractYears(period)[0] || -Infinity;
    return year >= start;
  }
  if (/before/i.test(period)) {
    const years = extractYears(period);
    return years.length ? year <= years[0] : false;
  }
  const years = extractYears(period);
  if (years.length >= 2) return yearInRange(year, years[0], years[1]);
  if (years.length === 1) return Math.abs(year - years[0]) <= 75;
  return false;
}

function extractYears(value) {
  const text = String(value || "");
  const onlyBce = /BCE/i.test(text) && !/\bCE\b/i.test(text.replace(/BCE/gi, ""));
  return [...text.matchAll(/(\d{3,4})(?:\s*(BCE|CE))?/gi)]
    .map((match) => {
      const year = Number(match[1]);
      const suffix = (match[2] || "").toUpperCase();
      return suffix === "BCE" || (!suffix && onlyBce) ? -year : year;
    })
    .sort((a, b) => a - b);
}

function uniqueMatches(matches) {
  const seen = new Set();
  return matches.filter((match) => {
    const key = `${match.type}:${match.id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function categoryToLensId(category) {
  return HISTORY_DATA.categoryAliases[category] || (getLensByTitle(category) ? getLensByTitle(category).id : category);
}

function unique(values) {
  return [...new Set(values)];
}
