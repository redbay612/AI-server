
import { IndustryType, CSAgentConfig, Language } from './types';

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' }
];

export const TRANSLATIONS: Record<Language, any> = {
  'zh-TW': {
    title: '行業 AI 客服架構師',
    subtitle: '構建智能、具備上下文意識的行業 AI 客服',
    intro: '從電子商務到醫療保健，探索如何利用 Gemini API 創建真正解決用戶問題的代理。',
    processGuide: '流程指南',
    testPrototype: '測試原型',
    poweredBy: '由 Gemini 3 提供支持',
    architectureTitle: 'AI 客服系統架構',
    userQuery: '用戶查詢',
    geminiEngine: 'Gemini 引擎',
    sysInstruction: '系統指令',
    contextWindow: '上下文窗口',
    searchGrounding: '搜索接地',
    dbTools: '數據庫 / 工具',
    funcCalling: '函數調用',
    ragKnowledge: 'RAG 知識',
    companyDocs: '公司文檔',
    builderTitle: '代理配置',
    industryTemplate: '行業模板',
    persona: '角色設定 / 身份',
    tone: '語氣語調',
    knowledgeBase: '知識庫 (RAG 模擬)',
    enableSearch: 'Google 搜索接地',
    enableFunc: '工具函數調用',
    previewTitle: '代理預覽',
    clearHistory: '清除歷史',
    startChatHint: '開始對話以測試您的配置。',
    inputPlaceholder: '向 {industry} 機器人提問...',
    tip: '提示：如果是電子商務，嘗試「查詢訂單 ORD-123」。如果是醫療，嘗試「預約掛號」。',
    readyTitle: '準備好啟動您的 AI 助手了嗎？',
    readyDesc: '實施行業特定的 AI 不再是奢侈品。今天就開始使用 Gemini 3 Flash 進行原型設計。',
    viewDocs: '查看 API 文檔',
    contactSupport: '聯繫企業支持',
    tones: {
      professional: '專業',
      friendly: '友好',
      empathetic: '同理心',
      concise: '簡潔'
    },
    industries: {
      [IndustryType.ECOMMERCE]: '電子商務',
      [IndustryType.MEDICAL]: '醫療保健',
      [IndustryType.REAL_ESTATE]: '房地產',
      [IndustryType.EDUCATION]: '教育培訓',
      [IndustryType.GENERAL]: '通用型'
    },
    stepsTitle: '如何構建您的行業 AI 客服',
    steps: [
      { title: "1. 定義業務價值", desc: "識別重複性查詢和高價值轉化點（例如訂單跟踪、產品推薦）。" },
      { title: "2. 設計角色與語氣", desc: "醫療機器人需要同理心；法律機器人需要精準；零售機器人需要銷售導向的友好。" },
      { title: "3. 準備知識庫 (RAG)", desc: "收集 FAQ、政策文件和手冊。這將成為 Gemini 參考的「大腦」。" },
      { title: "4. 實施工具集成", desc: "通過函數調用將 Gemini 連接到您的 CRM、ERP 或預約系統，以實現實際操作。" },
      { title: "5. 護欄與評估", desc: "設置系統指令以防止幻覺並確保安全、合規的交互。" }
    ]
  },
  'en': {
    title: 'Industry AI CS Architect',
    subtitle: 'Build Intelligent, Context-Aware Industry AI CS',
    intro: 'From e-commerce to medical care, discover how to leverage the Gemini API to create agents that actually solve user problems.',
    processGuide: 'Process Guide',
    testPrototype: 'Test Prototype',
    poweredBy: 'Powered by Gemini 3',
    architectureTitle: 'AI Customer Service Architecture',
    userQuery: 'User Query',
    geminiEngine: 'Gemini Engine',
    sysInstruction: 'System Instruction',
    contextWindow: 'Context Window',
    searchGrounding: 'Search Grounding',
    dbTools: 'Database / Tools',
    funcCalling: 'Function Calling',
    ragKnowledge: 'RAG Knowledge',
    companyDocs: 'Company Docs',
    builderTitle: 'Agent Configuration',
    industryTemplate: 'Industry Template',
    persona: 'Persona / Identity',
    tone: 'Tone of Voice',
    knowledgeBase: 'Knowledge Base (RAG Simulation)',
    enableSearch: 'Google Search Grounding',
    enableFunc: 'Tool Function Calling',
    previewTitle: 'Agent Preview',
    clearHistory: 'Clear History',
    startChatHint: 'Start a conversation to test your configuration.',
    inputPlaceholder: 'Ask the {industry} bot...',
    tip: 'Tip: If E-commerce, try "Check order ORD-123". If Medical, try "Book an appointment".',
    readyTitle: 'Ready to Launch Your AI Assistant?',
    readyDesc: 'Implementing industry-specific AI is no longer a luxury. Start by prototyping with Gemini 3 Flash today.',
    viewDocs: 'View API Documentation',
    contactSupport: 'Contact Enterprise Support',
    tones: {
      professional: 'Professional',
      friendly: 'Friendly',
      empathetic: 'Empathetic',
      concise: 'Concise'
    },
    industries: {
      [IndustryType.ECOMMERCE]: 'E-Commerce',
      [IndustryType.MEDICAL]: 'Healthcare',
      [IndustryType.REAL_ESTATE]: 'Real Estate',
      [IndustryType.EDUCATION]: 'Education',
      [IndustryType.GENERAL]: 'General'
    },
    stepsTitle: 'How to Build Your Industry AI CS',
    steps: [
      { title: "1. Define Business Value", desc: "Identify repetitive queries and high-value conversion points (e.g., order tracking)." },
      { title: "2. Design Persona & Tone", desc: "Medical bots need empathy; legal bots need precision; retail bots need friendliness." },
      { title: "3. Prepare Knowledge (RAG)", desc: "Gather FAQs and policies. This becomes the brain that Gemini references." },
      { title: "4. Implement Tooling", desc: "Connect Gemini to CRM or booking systems via Function Calling." },
      { title: "5. Guardrails & Evaluation", desc: "Set instructions to prevent hallucinations and ensure compliance." }
    ]
  },
  'ko': {
    title: '산업용 AI CS 아키텍트',
    subtitle: '지능형 컨텍스트 인지 산업 AI CS 구축',
    intro: '전자 상거래에서 의료 서비스에 이르기까지 Gemini API를 활용하여 실제 문제를 해결하는 에이전트를 만드는 방법을 알아보세요.',
    processGuide: '프로세스 가이드',
    testPrototype: '프로토타입 테스트',
    poweredBy: 'Gemini 3 지원',
    architectureTitle: 'AI 고객 서비스 아키텍처',
    userQuery: '사용자 질의',
    geminiEngine: 'Gemini 엔진',
    sysInstruction: '시스템 명령',
    contextWindow: '컨텍스트 창',
    searchGrounding: '검색 접지',
    dbTools: '데이터베이스 / 도구',
    funcCalling: '함수 호출',
    ragKnowledge: 'RAG 지식',
    companyDocs: '회사 문서',
    builderTitle: '에이전트 구성',
    industryTemplate: '산업 템플릿',
    persona: '페르소나 / 정체성',
    tone: '말투',
    knowledgeBase: '지식 베이스 (RAG 시뮬레이션)',
    enableSearch: 'Google 검색 접지',
    enableFunc: '도구 함수 호출',
    previewTitle: '에이전트 미리보기',
    clearHistory: '기록 삭제',
    startChatHint: '대화를 시작하여 구성을 테스트하십시오.',
    inputPlaceholder: '{industry} 봇에게 질문하기...',
    tip: '팁: 전자 상거래라면 "주문 ORD-123 확인"을, 의료라면 "예약하기"를 시도해 보세요.',
    readyTitle: 'AI 어시스턴트를 출시할 준비가 되셨나요?',
    readyDesc: '산업별 AI를 구현하는 것은 더 이상 사치가 아닙니다. 오늘 Gemini 3 Flash로 프로토타이핑을 시작하십시오.',
    viewDocs: 'API 문서 보기',
    contactSupport: '기업 지원 문의',
    tones: {
      professional: '전문적인',
      friendly: '친절한',
      empathetic: '공감하는',
      concise: '간결한'
    },
    industries: {
      [IndustryType.ECOMMERCE]: '전자 상거래',
      [IndustryType.MEDICAL]: '의료/헬스케어',
      [IndustryType.REAL_ESTATE]: '부동산',
      [IndustryType.EDUCATION]: '교육',
      [IndustryType.GENERAL]: '일반'
    },
    stepsTitle: '산업용 AI CS 구축 방법',
    steps: [
      { title: "1. 비즈니스 가치 정의", desc: "반복적인 질의와 고가치 전환점을 식별합니다." },
      { title: "2. 페르소나 및 말투 설계", desc: "의료 봇은 공감이 필요하고, 법률 봇은 정밀함이 필요합니다." },
      { title: "3. 지식 베이스 준비 (RAG)", desc: "FAQ와 정책 문서를 수집합니다. 이것이 Gemini가 참조하는 두뇌가 됩니다." },
      { title: "4. 툴링 구현", desc: "함수 호출을 통해 Gemini를 CRM 또는 예약 시스템에 연결합니다." },
      { title: "5. 가드레일 및 평가", desc: "환각을 방지하고 규정 준수를 보장하기 위해 시스템 명령을 설정합니다." }
    ]
  },
  'ja': {
    title: '業界別 AI CS アーキテクト',
    subtitle: 'インテリジェントで文脈を理解する業界別 AI CS の構築',
    intro: '電子商取引から医療まで、Gemini API を活用してユーザーの課題を真に解決するエージェントを作成する方法をご紹介します。',
    processGuide: 'プロセスガイド',
    testPrototype: 'プロトタイプを試す',
    poweredBy: 'Gemini 3 採用',
    architectureTitle: 'AI カスタマーサービス アーキテクチャ',
    userQuery: 'ユーザーの質問',
    geminiEngine: 'Gemini エンジン',
    sysInstruction: 'システム指示',
    contextWindow: 'コンテキストウィンドウ',
    searchGrounding: '検索グラウンディング',
    dbTools: 'データベース / ツール',
    funcCalling: '関数呼び出し',
    ragKnowledge: 'RAG 知識',
    companyDocs: '社内ドキュメント',
    builderTitle: 'エージェント設定',
    industryTemplate: '業界テンプレート',
    persona: 'ペルソナ / アイデンティティ',
    tone: 'トーン（口調）',
    knowledgeBase: 'ナレッジベース (RAG シミュレーション)',
    enableSearch: 'Google 検索グラウンディング',
    enableFunc: 'ツール関数呼び出し',
    previewTitle: 'エージェント プレビュー',
    clearHistory: '履歴をクリア',
    startChatHint: '会話を開始して設定をテストしてください。',
    inputPlaceholder: '{industry} ボットに質問する...',
    tip: 'ヒント：ECなら「注文 ORD-123 を確認」、医療なら「予約したい」と試してみてください。',
    readyTitle: 'AI アシスタントを導入する準備はできましたか？',
    readyDesc: '業界特化型 AI の導入はもはや贅沢品ではありません。今すぐ Gemini 3 Flash でプロトタイプ作成を始めましょう。',
    viewDocs: 'API ドキュメントを見る',
    contactSupport: '法人サポートに問い合わせ',
    tones: {
      professional: 'プロフェッショナル',
      friendly: 'フレンドリー',
      empathetic: '共感的',
      concise: '簡潔'
    },
    industries: {
      [IndustryType.ECOMMERCE]: '電子商取引',
      [IndustryType.MEDICAL]: '医療・ヘルスケア',
      [IndustryType.REAL_ESTATE]: '不動産',
      [IndustryType.EDUCATION]: '教育',
      [IndustryType.GENERAL]: '全般'
    },
    stepsTitle: '業界別 AI CS の構築方法',
    steps: [
      { title: "1. ビジネス価値の定義", desc: "繰り返される質問や価値の高い転換点を特定します。" },
      { title: "2. ペルソナとトーンの設計", desc: "医療ボットには共感、法律ボットには正確さ、小売にはフレンドリーさが必要です。" },
      { title: "3. ナレッジベースの準備 (RAG)", desc: "FAQ やポリシーを収集します。これが Gemini の参照する「脳」になります。" },
      { title: "4. ツールームの実装", desc: "関数呼び出しを通じて、Gemini を CRM や予約システムに接続します。" },
      { title: "5. ガードレールと評価", desc: "ハルシネーションを防ぎ、安全なやり取りを保証するための指示を設定します。" }
    ]
  }
};

export const INDUSTRY_TEMPLATES: Record<IndustryType, any> = {
  [IndustryType.ECOMMERCE]: {
    persona: {
      'zh-TW': "您是 'GlobalMart' 的得力購物助手。",
      'en': "You are a helpful shopping assistant for 'GlobalMart'.",
      'ko': "'GlobalMart'의 유능한 쇼핑 도우미입니다.",
      'ja': "あなたは 'GlobalMart' の有能なショッピングアシスタントです。"
    },
    knowledgeBase: {
      'zh-TW': "30 天內接受退貨。運送需要 3-5 個工作日。訂單滿 $50 免運費。",
      'en': "Returns are accepted within 30 days. Shipping takes 3-5 business days. We offer free shipping on orders over $50.",
      'ko': "30일 이내 반품이 가능합니다. 배송은 영업일 기준 3-5일이 소요됩니다. 50달러 이상 주문 시 무료 배송입니다.",
      'ja': "30日以内なら返品可能です。配送には3〜5営業日かかります。50ドル以上の注文で送料無料です。"
    }
  },
  [IndustryType.MEDICAL]: {
    persona: {
      'zh-TW': "您是 'HealthyLife Clinic' 的專業醫療分診助手。",
      'en': "You are a professional medical intake assistant for 'HealthyLife Clinic'.",
      'ko': "'HealthyLife Clinic'의 전문 의료 상담 어시스턴트입니다.",
      'ja': "'HealthyLife Clinic' の専門的な医療受付アシスタントです。"
    },
    knowledgeBase: {
      'zh-TW': "預約可以通過我們的門戶網站進行。我們不提供緊急醫療建議。如果是緊急情況，請撥打 119。",
      'en': "Appointments can be booked via our portal. We do not provide emergency medical advice. If this is an emergency, call 911.",
      'ko': "포털을 통해 예약할 수 있습니다. 긴급 의료 조언은 제공하지 않습니다. 응급 상황인 경우 119로 전화하십시오.",
      'ja': "予約はポータルから可能です。緊急の医療アドバイスは提供していません。緊急の場合は119番に電話してください。"
    }
  },
  [IndustryType.REAL_ESTATE]: {
    persona: {
      'zh-TW': "您是 'Prime Realty' 知識淵博的房地產經紀人。",
      'en': "You are a knowledgeable real estate agent for 'Prime Realty'.",
      'ko': "'Prime Realty'의 지식이 풍부한 부동산 중개인입니다.",
      'ja': "'Prime Realty' の知識豊富な不動産エージェントです。"
    },
    knowledgeBase: {
      'zh-TW': "當前市場趨勢顯示房產價值增長了 5%。我們專注於豪華公寓和家庭住宅。",
      'en': "Current market trends show a 5% increase in property value. We specialize in luxury condos and family homes.",
      'ko': "현재 시장 트렌드는 부동산 가치가 5% 상승했음을 보여줍니다. 우리는 고급 콘도와 가족 주택을 전문으로 합니다.",
      'ja': "現在の市場動向では、物件価値が5%上昇しています。高級コンドミニアムとファミリー向け住宅を専門としています。"
    }
  },
  [IndustryType.EDUCATION]: {
    persona: {
      'zh-TW': "您是 'Bright Academy' 的學術顧問。",
      'en': "You are an academic advisor for 'Bright Academy'.",
      'ko': "'Bright Academy'의 학업 상담원입니다.",
      'ja': "'Bright Academy' のアカデミックアドバイザーです。"
    },
    knowledgeBase: {
      'zh-TW': "2024 年春季入學現已開放。獎學金申請截止日期為 12 月 1 日。",
      'en': "Enrollment for Spring 2024 is now open. Scholarship applications are due by December 1st.",
      'ko': "2024년 봄 학기 등록이 시작되었습니다. 장학금 신청 마감일은 12월 1일입니다.",
      'ja': "2024年春学期の入学受付を開始しました。奨学金の申請期限は12月1日です。"
    }
  },
  [IndustryType.GENERAL]: {
    persona: {
      'zh-TW': "您是一個標準的 AI 助手。",
      'en': "You are a standard AI assistant.",
      'ko': "일반적인 AI 어시스턴트입니다.",
      'ja': "標準的な AI アシスタントです。"
    },
    knowledgeBase: {
      'zh-TW': "",
      'en': "",
      'ko': "",
      'ja': ""
    }
  }
};
