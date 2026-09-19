// ============================================================
// 全站内容配置 —— 改这里即可，不需要动组件代码
// ZQW / 张倩雯 个人作品集（白底科技杂志风）
// ============================================================

// 暖舍线上链接（作品卡片 + 简历页共用）
const NUANSHE_PROJECT_URL = 'https://zqw258025-art.github.io/nuanshe-showcase/'

export const site = {
  // —— 基本信息 ——
  name: 'ZQW',
  nameZh: '张倩雯',
  nameEn: 'ZHANG QIANWEN',
  role: 'UI/UX Design · AI Product Design · Visual & Spatial',
  email: '2334227489@qq.com',
  location: '陕西 · 西安',
  availability: '2027 届 · 开放实习机会',

  // —— 顶部导航 ——
  nav: {
    links: [
      { id: 'works', label: 'WORKS' },
      { id: 'lab', label: 'PROCESS' },
      { id: 'about', label: 'ABOUT' },
      { id: 'contact', label: 'CONTACT' },
      { id: 'resume', label: 'RESUME' },
    ],
    cta: "LET'S TALK",
  },

  // —— 首页 Hero ——
  hero: {
    kicker: '张倩雯 ZHANG QIANWEN — 视觉传达设计 · UI/UX · AI 产品设计',
    titleA: "Hi, I'm ZQW.",
    titleB: 'Design beyond the interface.',
    titleAccent: 'beyond the interface',
    paragraph:
      '视觉传达设计专业大三在读（2027 届）。我用 Figma 设计界面、用 C4D 做三维空间，也习惯用 ChatGPT 与 Codex 把想法一路推到能真正跑起来的产品。暖舍与卦了么是我独立完成的个人产品设计实践，并使用 AI 工具辅助开发。',
    note: '从视觉出发，把想法做成能用的东西。',
    badgeText: 'OPEN TO INTERNSHIP · 2027 GRAD · OPEN TO INTERNSHIP · ',
    ctaPrimary: 'VIEW WORKS',
    ctaSecondary: 'ABOUT ME',
    scrollHint: '↓ 个人项目 / 视觉作品',
  },

  // —— Hero 下方跑马灯 ——
  marquee: ['VISUAL DESIGN', 'SPATIAL DESIGN', 'DIGITAL PRODUCT', 'AI PRODUCT'],

  // —— 01 定位宣言 ——
  manifesto: {
    label: '01 / ABOUT',
    title: 'More than visual.',
    sub: '从视觉，到空间，再到数字产品。',
    steps: [
      { en: 'VISUAL', zh: '视觉设计：让信息清晰、让品牌有型' },
      { en: 'SPATIAL', zh: '空间设计：用光、比例与材质构建体验' },
      { en: 'DIGITAL', zh: '数字产品：把复杂流程变成自然交互' },
      { en: 'AI', zh: 'AI 产品：让生成式能力真正可用、可感' },
    ],
  },

  // —— 02 精选作品 ——
  works: {
    label: '02 / SELECTED WORKS',
    title: '精选作品',
    sub: '两个独立完成的 AI 产品设计实践，加上空间效果图方向的积累。',
    sticker: 'A FEW WORKS I AM PROUD OF',
    items: [
      {
        index: '01',
        title: '暖舍',
        titleEn: 'NUANSHE',
        category: 'AI PRODUCT · UX/UI · WEB DESIGN',
        year: '2026.07',
        credit: '个人项目 · 独立完成 · AI 辅助开发',
        description:
          '一个面向室内设计的 AI 效果图工作台：输入户型与风格意向，生成并对比多版效果图。产品定位、功能规划到界面设计由我独立完成，前端用 Codex 辅助实现，目前作为个人工具使用，未对外上线。',
        tags: ['AI PRODUCT', 'UX/UI', 'WEB DESIGN'],
        image: { src: '/images/works/nuanshe-01.jpg', alt: '暖舍 Atelier Render 首页界面', placeholder: 'IMAGE — 暖舍 NUANSHE', ratio: 'landscape' },
        link: NUANSHE_PROJECT_URL,
      },
      {
        index: '02',
        title: '卦了么',
        titleEn: 'GUALE',
        category: 'MOBILE APP · UX/UI · AI',
        year: '2026.08',
        credit: '个人项目 · 独立完成 · AI 辅助开发',
        description:
          '把传统占卜文化做成轻松体验的 AI 小应用。从产品构思、视觉与交互设计，到用 Codex 辅助完成前端功能并部署为可访问的网页，完整走通了一次「想法 → 设计 → 开发 → 部署」的流程。',
        tags: ['MOBILE APP', 'UX/UI', 'AI'],
        image: { src: '/images/works/guale-01.jpg', alt: '卦了么 App 首页 · 三种主题配色', placeholder: 'IMAGE — 卦了么 GUALE', ratio: 'portrait' },
        link: 'https://zqw258025-art.github.io/guale/',
      },
      {
        index: '03',
        title: '空间与效果图',
        titleEn: 'SPATIAL RENDER',
        category: '3D · INTERIOR · VISUALIZATION',
        year: '2026.07–10',
        credit: '实习作品 / 个人练习',
        description:
          '室内效果图方向的实践积累：从 3D 建模、材质与灯光，到 Photoshop 后期精修，并尝试用 AI 辅助生成与优化效果图。素材来自室内设计公司的实习经历与个人练习。',
        tags: ['3D', 'INTERIOR', 'VISUALIZATION'],
        image: { src: '/images/works/spatial-01.jpg', alt: '现代客厅室内效果图', placeholder: 'IMAGE — SPATIAL RENDER', ratio: 'landscape' },
        link: '/works/spatial',
        internal: true,
      },
    ],
  },

  // —— 空间与效果图 详情页（/works/spatial）——
  spatial: {
    title: '空间与效果图',
    titleEn: 'SPATIAL RENDER',
    year: '2026.07–10',
    credit: '实习作品 / 个人练习',
    intro:
      '室内效果图方向的实践积累：从 3ds Max 建模、材质与灯光，到 Photoshop 后期精修，并尝试用 AI 辅助生成与优化效果图。素材来自室内设计公司的实习经历与个人练习。',
    groups: [
      {
        label: '客厅 / LIVING ROOM',
        images: [
          { src: '/images/works/spatial/living-01.jpg', alt: '客厅 室内效果图' },
          { src: '/images/works/spatial/living-02.jpg', alt: '客厅 室内效果图' },
          { src: '/images/works/spatial/living-03.jpg', alt: '客厅 室内效果图' },
        ],
      },
      {
        label: '客厅 · 二 / LIVING ROOM II',
        images: [
          { src: '/images/works/spatial/living2-01.jpg', alt: '客厅 · 二 室内效果图' },
          { src: '/images/works/spatial/living2-02.jpg', alt: '客厅 · 二 室内效果图' },
          { src: '/images/works/spatial/living2-03.jpg', alt: '客厅 · 二 室内效果图' },
          { src: '/images/works/spatial/living2-04.jpg', alt: '客厅 · 二 室内效果图' },
          { src: '/images/works/spatial/living2-05.jpg', alt: '客厅 · 二 室内效果图' },
          { src: '/images/works/spatial/living2-06.jpg', alt: '客厅 · 二 室内效果图' },
          { src: '/images/works/spatial/living2-07.jpg', alt: '客厅 · 二 室内效果图' },
        ],
      },
      {
        label: '卧室 / BEDROOM',
        images: [
          { src: '/images/works/spatial/bedroom-01.jpg', alt: '卧室 室内效果图' },
        ],
      },
      {
        label: '卧室 · 二 / BEDROOM II',
        images: [
          { src: '/images/works/spatial/bedroom2-01.jpg', alt: '卧室 · 二 室内效果图' },
          { src: '/images/works/spatial/bedroom2-02.jpg', alt: '卧室 · 二 室内效果图' },
        ],
      },
      {
        label: '儿童房 / KIDS ROOM',
        images: [
          { src: '/images/works/spatial/kids-01.jpg', alt: '儿童房 室内效果图' },
        ],
      },
      {
        label: '成套练习 / FULL SET PRACTICE',
        images: [
          { src: '/images/works/spatial/set-01.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-02.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-03.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-04.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-05.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-06.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-07.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-08.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-09.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-10.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-11.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-12.jpg', alt: '成套练习 室内效果图' },
          { src: '/images/works/spatial/set-13.jpg', alt: '成套练习 室内效果图' },
        ],
      },
    ],
  },

  // —— 03 工作方式 ——
  lab: {
    label: '03 / HOW I WORK',
    title: '工作方式',
    sub: '我习惯自己把想法推到底：先想清楚要解决什么，再用 AI 把原型做出来。',
    items: [
      { index: '01', title: 'Interface & Interaction', zh: '用 Figma 完成信息结构、界面视觉与交互流程，把复杂流程拆成看得懂的步骤。', link: '' },
      { index: '02', title: 'AI-Assisted Design', zh: '用 ChatGPT、DeepSeek 做资料梳理、方案发散与提示词调试，缩短从想法到方案的距离。', link: '' },
      { index: '03', title: 'AI-Assisted Development', zh: '用 Codex 辅助写前端、调样式、修问题，把设计稿变成能点击、能访问的页面。', link: '' },
      { index: '04', title: '3D & Visualization', zh: '用 C4D 与 Photoshop 完成建模、材质、灯光与效果图后期，把空间关系讲清楚。', link: '' },
    ],
  },

  // —— 04 视觉档案 ——
  archive: {
    label: '04 / VISUAL ARCHIVE',
    title: '视觉档案',
    note: '均为个人练习作品 · 含临摹与再设计',
    categories: ['Brand', 'Logo', 'Exhibition', 'Packaging', 'Editorial', 'Typography', 'E-commerce'],
    items: [
      { src: '/images/archive/archive-01.jpg', alt: '太白酒品牌设计方案（个人练习）', placeholder: 'BRAND — 品牌', h: 240 },
      { src: '/images/archive/logo-popmart.jpg', alt: 'POP MART 标志临摹再设计（个人练习）', placeholder: 'LOGO', h: 200, fit: 'contain' },
      { src: '/images/archive/book-01.jpg', alt: '《生活明朗 万物可爱》书籍排版（个人练习）', placeholder: 'EDITORIAL — 排版', h: 320 },
      { src: '/images/archive/packaging-01.jpg', alt: '美加净净冷酸牙膏包装设计（个人练习）', placeholder: 'PACKAGING — 包装', h: 260 },
      { src: '/images/archive/trifold-01.jpg', alt: '茶道文化三折页排版（个人练习）', placeholder: 'EDITORIAL — 排版', h: 220 },
      { src: '/images/archive/typography-01.png', alt: '中国传统节日字体设计（个人练习）', placeholder: 'TYPOGRAPHY — 字体', h: 300 },
      { src: '/images/archive/magazine-01.jpg', alt: '《非遗之美·苏绣》杂志版式（个人练习）', placeholder: 'EDITORIAL — 排版', h: 240 },
      { src: '/images/archive/ecommerce-01.jpg', alt: '三九胃泰养胃舒颗粒电商 Banner 临摹再设计（个人练习）', placeholder: 'E-COMMERCE — 电商', h: 280 },
      { src: '/images/archive/exhibition-01.jpg', alt: '季羡林国学院导视系统设计（个人练习）', placeholder: 'EXHIBITION — 展览', h: 300, fit: 'contain' },
    ],
  },

  // —— 05 能力 ——
  capabilities: {
    label: '05 / CAPABILITIES',
    title: '能力',
    items: [
      { index: '01', en: 'UI/UX', zh: '界面与体验设计，从调研、流程到高保真落地' },
      { index: '02', en: 'AI PRODUCT', zh: 'AI 产品的体验设计、提示词工程与生成式工作流' },
      { index: '03', en: 'VISUAL', zh: '品牌视觉、平面排版与视觉表现' },
      { index: '04', en: 'SPATIAL', zh: '空间与室内设计，从概念到可视化效果图' },
    ],
  },

  // —— 06 关于我 ——
  aboutMe: {
    label: '06 / ABOUT ME',
    title: '关于我',
    bio: [
      '你好，我是张倩雯（ZQW），陕西服装工程学院视觉传达设计专业大三在读，2027 届。我的路径有点杂：先做视觉，再做三维与室内效果图，现在把重心放在 UI/UX 与 AI 产品设计上。',
      '我习惯把想法自己推到底——用 Figma 定界面，用 C4D 做空间，用 ChatGPT 和 Codex 把原型真的做出来。暖舍与卦了么是我独立完成的个人产品设计实践，并使用 AI 工具辅助开发。',
      '目前我正在寻找 UI/UX 设计或 AI 产品设计方向的实习机会，也乐于参与能让我继续折腾新工具的项目。',
    ],
    timeline: [
      { period: '2026.07–10', title: '西安铂川设计 · 室内设计效果图实习生', note: '3D 建模、效果图制作与 Photoshop 后期，并用 AI 辅助生成与精修' },
      { period: '2026.08', title: '卦了么 · AI 算卦 App（个人项目）', note: '独立完成产品构思与 UI/UX 设计，用 Codex 辅助开发并部署为可访问网页' },
      { period: '2026.07', title: '暖舍 · AI 室内效果图工作台（个人项目）', note: '独立完成产品定位、功能规划与界面设计，AI 辅助实现前端' },
      { period: '2026.06–07', title: '西安点晴科技有限公司 · 游戏建模实习生', note: '参与游戏项目 3D 建模，负责模型制作、调整与优化' },
      { period: '在读 · 2027 届', title: '陕西服装工程学院 · 视觉传达设计（专科）', note: '预计 2027 年毕业' },
    ],
    resumeCta: 'VIEW FULL RESUME',
  },

  // —— 07 联系 ——
  contact: {
    label: '07 / CONTACT',
    headingA: "LET'S CREATE",
    headingB: 'SOMETHING MEANINGFUL.',
    headingAccent: 'MEANINGFUL',
    paragraph: '正在寻找 UI/UX 设计与 AI 产品设计方向的实习机会。想聊作品、聊合作，或者只是想认识一下，都欢迎直接找我。',
    methods: [
      { label: '邮箱 Email', value: '2334227489@qq.com', href: 'mailto:2334227489@qq.com' },
      { label: '微信 WeChat', value: 'zqw06258025', href: '' },
      { label: 'QQ', value: '2334227489', href: '' },
      { label: '电话', value: '15291717916', href: 'tel:+8615291717916' },
    ],
  },

  footer: {
    line: '© 2026 ZQW · Designed & Built by ZQW',
    backToTop: '回到顶部',
  },

  // —— Resume 页数据 ——
  resume: {
    profile: {
      title: 'UI/UX × AI 设计实习生',
      objective: 'UI/UX 设计实习生 · AI 产品设计实习生 · AI 视觉设计实习生',
      summary: [
        '视觉传达设计专业大三在读（2027 届），具备视觉设计、UI/UX、3D 建模与数字产品设计基础。',
        '熟悉 Figma、Photoshop、Illustrator、Cinema 4D，并持续用 ChatGPT、Codex、DeepSeek 等 AI 工具辅助设计与开发。',
        '暖舍与卦了么是我独立完成的个人产品设计实践，并使用 AI 工具辅助开发。',
      ],
      basics: [
        { label: '姓名', value: '张倩雯 / ZQW' },
        { label: '城市', value: '陕西 · 西安' },
        { label: '电话', value: '15291717916', href: 'tel:+8615291717916' },
        { label: '邮箱', value: '2334227489@qq.com', href: 'mailto:2334227489@qq.com' },
        { label: '微信', value: 'zqw06258025' },
      ],
    },
    experience: [
      {
        period: '2026.07–10',
        company: '西安铂川设计',
        role: '室内设计效果图实习生',
        points: [
          '参与室内效果图制作与视觉表现',
          '完成 3D 建模、效果图制作及 Photoshop 后期',
          '使用 AI 辅助效果图生成、精修与视觉优化',
        ],
      },
      {
        period: '2026.06–07',
        company: '西安点晴科技有限公司',
        role: '游戏建模实习生',
        points: [
          '参与游戏项目中的 3D 建模工作',
          '根据项目需求进行模型制作、调整与优化',
          '积累三维空间理解与数字内容视觉表现经验',
        ],
      },
    ],
    education: {
      period: '2027 届 · 大三在读',
      school: '陕西服装工程学院',
      major: '视觉传达设计（专科）',
      note: '预计 2027 年毕业',
    },
    capabilities: [
      { en: 'UI/UX', zh: '界面与体验设计：从信息结构、交互流程到高保真界面' },
      { en: 'AI PRODUCT', zh: 'AI 产品设计：功能规划、提示词设计与生成式工作流' },
      { en: 'VISUAL', zh: '视觉传达：品牌视觉、平面排版与视觉表现' },
      { en: 'SPATIAL / 3D', zh: '三维与效果图：C4D 建模、材质灯光与后期精修' },
    ],
    tools: [
      { name: 'Figma', note: '界面 · 原型' },
      { name: 'Photoshop', note: '图像 · 后期' },
      { name: 'Illustrator', note: '图形 · 排版' },
      { name: 'Cinema 4D', note: '3D 建模 · 渲染' },
      { name: 'ChatGPT / DeepSeek', note: '方案发散 · 内容梳理' },
      { name: 'Codex', note: 'AI 辅助开发' },
    ],
    projects: [
      {
        title: '暖舍 NUANSHE',
        meta: 'AI 室内效果图工作台 · 个人项目 · 2026.07',
        points: [
          '独立完成产品定位、功能规划与 UI/UX 设计',
          '设计 AI 生成、风格选择、局部修改、多版本对比等流程',
          '用 Codex 辅助实现前端，目前作为个人工具使用，未对外上线',
        ],
        link: NUANSHE_PROJECT_URL,
      },
      {
        title: '卦了么 GUALE',
        meta: 'AI 算卦 App · 个人项目 · 2026.08',
        points: [
          '独立完成产品构思、UI 视觉与交互设计',
          '使用 Codex 辅助前端开发与功能实现',
          '完成从产品构思 → UI/UX → AI 辅助开发 → 部署为可访问网页的完整实践',
        ],
        link: 'https://zqw258025-art.github.io/guale/',
      },
    ],
    contact: {
      note: '欢迎通过邮件或电话联系我；微信 zqw06258025，QQ 2334227489。',
      methods: [
        { label: '邮箱 Email', value: '2334227489@qq.com', href: 'mailto:2334227489@qq.com' },
        { label: '电话', value: '15291717916', href: 'tel:+8615291717916' },
        { label: '微信 WeChat', value: 'zqw06258025', href: '' },
      ],
    },
  },
}
