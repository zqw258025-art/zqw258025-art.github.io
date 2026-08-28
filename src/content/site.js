// ============================================================
// 全站内容配置 —— 改这里即可，不需要动组件代码
// ZQW / 张倩雯 个人作品集（白底科技杂志风）
// ============================================================

export const site = {
  // —— 基本信息 ——
  name: 'ZQW',
  nameZh: '张倩雯',
  nameEn: 'ZHANG QIANWEN',
  role: 'UI/UX Design · AI Product Design · Spatial Design',
  email: 'hello@zqw.design',
  location: '中国',
  availability: '开放合作中',

  // —— 顶部导航 ——
  nav: {
    links: [
      { id: 'works', label: 'WORKS' },
      { id: 'lab', label: 'LAB' },
      { id: 'about', label: 'ABOUT' },
      { id: 'resume', label: 'RESUME' },
      { id: 'contact', label: 'CONTACT' },
    ],
    cta: "LET'S TALK",
  },

  // —— 首页 Hero ——
  hero: {
    kicker: '张倩雯 ZHANG QIANWEN — UI/UX DESIGN · AI PRODUCT DESIGN · SPATIAL DESIGN',
    titleA: "Hi, I'm ZQW.",
    titleB: 'Design beyond the interface.',
    titleAccent: 'beyond the interface',
    paragraph:
      '我是张倩雯（ZQW），拥有视觉传达与空间设计背景，目前专注探索 UI/UX Design、AI Product Design 与数字产品体验。',
    ctaPrimary: 'VIEW WORKS',
    ctaSecondary: 'ABOUT ME',
    scrollHint: '↓ 视觉作品 / 动态视觉',
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
    sub: '从 AI 产品到空间体验，每一件都是「设计解决问题」的证明。',
    items: [
      {
        index: '01',
        title: '暖舍',
        titleEn: 'NUANSHE',
        category: 'AI PRODUCT · UX/UI · WEB DESIGN',
        year: '2025',
        description:
          '为室内设计行业打造的 AI 渲染平台：上传户型与风格意向，秒级生成多版效果图。负责产品体验、界面系统与品牌视觉。',
        tags: ['AI PRODUCT', 'UX/UI', 'WEB DESIGN'],
        image: { src: '', alt: '暖舍产品界面', placeholder: 'IMAGE — 暖舍 NUANSHE', ratio: 'landscape' },
        link: '#',
      },
      {
        index: '02',
        title: '卦了么',
        titleEn: 'GUALE',
        category: 'MOBILE APP · UX/UI · AI',
        year: '2025',
        description:
          '一款融合传统占卜文化与生成式 AI 的移动体验。将玄学内容转化为有温度、可感知的数字交互。',
        tags: ['MOBILE APP', 'UX/UI', 'AI'],
        image: { src: '', alt: '卦了么手机界面', placeholder: 'IMAGE — 卦了么 GUALE', ratio: 'portrait' },
        link: '#',
      },
      {
        index: '03',
        title: '空间设计',
        titleEn: 'SPATIAL DESIGN',
        category: '3D · INTERIOR · VISUALIZATION',
        year: '2024–至今',
        description:
          '从概念到效果图的空间设计实践：用光、材质与比例，构建有情绪的空间叙事。',
        tags: ['3D', 'INTERIOR', 'VISUALIZATION'],
        image: { src: '', alt: '空间设计效果图', placeholder: 'IMAGE — SPATIAL DESIGN', ratio: 'landscape' },
        link: '#',
      },
    ],
  },

  // —— 03 Design Lab ——
  lab: {
    label: '03 / DESIGN LAB',
    title: '设计实验室',
    sub: '正式项目之外，我持续探索 AI 与设计的边界。',
    items: [
      { index: '01', title: 'AI Interior Workflow', zh: 'AI 室内设计工作流：从概念到效果图的生成式流程实验', link: '#' },
      { index: '02', title: 'AI Confidence Coach', zh: 'AI 自信教练：用对话式 AI 帮助用户建立表达自信的产品实验', link: '#' },
      { index: '03', title: 'Experimental Interfaces', zh: '实验性界面：突破常规的交互与界面形态研究', link: '#' },
      { index: '04', title: 'Vibe Coding', zh: '氛围编程：用自然语言与 AI 协作，快速搭建可交互原型', link: '#' },
    ],
  },

  // —— 04 视觉档案 ——
  archive: {
    label: '04 / VISUAL ARCHIVE',
    title: '视觉档案',
    categories: ['Brand', 'Logo', 'Exhibition', 'Packaging', 'Typography', 'Editorial', 'E-commerce'],
    items: [
      { src: '', placeholder: 'BRAND — 品牌', h: 240 },
      { src: '', placeholder: 'LOGO', h: 200 },
      { src: '', placeholder: 'EXHIBITION — 展览', h: 320 },
      { src: '', placeholder: 'PACKAGING — 包装', h: 260 },
      { src: '', placeholder: 'TYPOGRAPHY — 字体', h: 220 },
      { src: '', placeholder: 'EDITORIAL — 编辑', h: 300 },
      { src: '', placeholder: 'E-COMMERCE — 电商', h: 240 },
      { src: '', placeholder: 'BRAND — 品牌', h: 280 },
    ],
  },

  // —— 05 能力 ——
  capabilities: {
    label: '05 / CAPABILITIES',
    title: '能力',
    items: [
      { index: '01', en: 'UI/UX', zh: '界面与体验设计，从调研、流程到高保真落地' },
      { index: '02', en: 'AI PRODUCT', zh: 'AI 产品的体验设计、提示词工程与生成式工作流' },
      { index: '03', en: 'VISUAL', zh: '品牌视觉、平面与动态视觉设计' },
      { index: '04', en: 'SPATIAL', zh: '空间与室内设计，从概念到可视化效果图' },
    ],
  },

  // —— 06 关于我 ——
  aboutMe: {
    label: '06 / ABOUT ME',
    title: '关于我',
    bio: [
      '你好，我是张倩雯（ZQW），一名横跨界面、空间与 AI 产品的设计师。我习惯从问题出发，而不是从风格出发——先弄清楚「为什么」，再决定「长什么样」。',
      '过去几年里，我参与并主导了 AI 产品、移动应用与空间设计项目，也持续用 Design Lab 里的实验保持对新技术的好奇。',
    ],
    timeline: [
      { period: '2025 — 至今', title: '独立设计师 / AI 产品设计师', note: '占位：待补充真实经历' },
      { period: '2023 — 2025', title: '产品 / UI 设计师', note: '占位：待补充真实经历' },
      { period: '2021 — 2023', title: '视觉设计师', note: '占位：待补充真实经历' },
    ],
    resumeCta: 'VIEW FULL RESUME',
    socials: [
      { label: 'Behance', href: '#' },
      { label: '站酷', href: '#' },
      { label: '小红书', href: '#' },
    ],
  },

  // —— 07 联系 ——
  contact: {
    label: '07 / CONTACT',
    headingA: "LET'S CREATE",
    headingB: 'SOMETHING MEANINGFUL.',
    headingAccent: 'MEANINGFUL',
    paragraph: '目前开放 UI/UX、AI 产品与空间设计合作。聊聊你的想法？',
    methods: [
      { label: '邮箱 Email', value: 'hello@zqw.design', href: 'mailto:hello@zqw.design' },
      { label: '微信 WeChat', value: 'zqw_design', href: '' },
      { label: 'QQ', value: '123456789', href: '' },
      { label: '电话', value: '+86 138-0000-0000', href: 'tel:+8613800000000' },
    ],
    socials: [
      { label: 'Behance', href: '#' },
      { label: '站酷', href: '#' },
      { label: '小红书', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },

  footer: {
    line: '© 2026 ZQW · Designed & Built by ZQW',
    backToTop: '回到顶部',
  },

  // —— Resume（只建空结构，暂不填真实内容）——
  resume: {
    profile: null,
    experience: [],
    education: null,
    capabilities: [],
    tools: [],
    projects: [],
    contact: null,
  },
}
