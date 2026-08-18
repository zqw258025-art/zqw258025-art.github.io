// ============================================================
// 全站内容配置 —— 改这里即可，不需要动组件代码
// All site content lives here. Edit this file to make it yours.
// ============================================================

export const site = {
  // —— 基本信息 ——
  name: '林一',
  nameEn: 'LIN YI',
  role: '视觉设计师 / AI 设计师 / 品牌设计师',
  email: 'hello@linyi.design',
  location: '上海 · 中国',
  availability: '开放合作中',

  // —— 顶部导航 ——
  nav: {
    links: [
      { id: 'about', label: '关于' },
      { id: 'works', label: '作品' },
      { id: 'strengths', label: '优势' },
      { id: 'contact', label: '联系' },
    ],
    cta: '开始合作',
  },

  // —— 首页 Hero ——
  hero: {
    kicker: 'PORTFOLIO 2026 — 视觉 / AI / 品牌设计师',
    titleA: '让每一次看见，',
    titleB: '都成为记忆。',
    titleAccent: '记忆',
    paragraph:
      '我是林一，一名视觉设计师、AI 设计师与品牌设计师。我相信设计是理性与美学的交汇：把技术翻译成语言，把品牌翻译成感受。',
    ctaPrimary: '查看精选作品',
    ctaSecondary: '联系我',
    // 视频背景：把 hero.mp4 放到 public/videos/ 后，把 enabled 改为 true
    video: {
      enabled: false,
      src: '/videos/hero.mp4',
      poster: '',
    },
  },

  // —— Hero 下方跑马灯 ——
  marquee: ['VISUAL DESIGN', 'AI DESIGN', 'BRAND DESIGN', 'DESIGN ENGINEERING', 'SHANGHAI — 2026'],

  // —— 01 个人经历 ——
  about: {
    label: '01 / ABOUT',
    heading: '不止于好看，更在乎「对」',
    avatar: {
      src: '', // 例如 '/images/avatar.jpg'；留空则显示字母 Logo
      alt: '林一个人照片',
    },
    bio: [
      '你好，我是林一，一名视觉设计师、AI 设计师与品牌设计师，现居上海。过去 5 年里，我帮助 30+ 个品牌完成从策略、视觉到落地的全链路设计，横跨科技、消费与互联网行业。',
      '我相信好的设计不是装饰，而是解决问题的语言。AI 时代里，我把生成式工具融入创意工作流，让灵感更快、更准、也更不同。',
    ],
    info: [
      { label: '邮箱', value: 'hello@linyi.design', href: 'mailto:hello@linyi.design' },
      { label: '坐标', value: '上海 · 中国', href: '' },
      { label: '状态', value: '开放合作中', href: '' },
      { label: '站点', value: 'behance.net/linyi', href: 'https://behance.net' },
    ],
    stats: [
      { value: '5+', label: '年设计经验' },
      { value: '60+', label: '完成项目' },
      { value: '12', label: '项设计奖项' },
      { value: '30+', label: '服务品牌' },
    ],
    timeline: [
      { period: '2024 — 至今', title: '独立设计师 / AI 设计顾问', note: '专注品牌视觉与 AI 设计工作流' },
      { period: '2021 — 2024', title: '高级视觉设计师 · 科技公司', note: '负责产品视觉体系与设计系统' },
      { period: '2019 — 2021', title: '品牌设计师 · 创意工作室', note: '服务消费与互联网品牌' },
      { period: '2015 — 2019', title: '视觉传达设计 · 学士', note: '毕业于设计院校' },
    ],
    socials: [
      { label: 'Behance', href: 'https://behance.net' },
      { label: 'Dribbble', href: 'https://dribbble.com' },
      { label: '站酷', href: '#' },
      { label: '小红书', href: '#' },
    ],
  },

  // —— 02 精选项目 ——
  projects: {
    label: '02 / SELECTED WORKS',
    heading: '精选项目',
    sub: '每一个项目，都是策略、美学与技术的共同结果。',
    items: [
      {
        index: '01',
        title: 'NEBULA · AI 生成式界面系统',
        category: 'AI Design',
        year: '2025',
        description: '为 AI 产品打造的一套生成式界面语言：自适应布局、动态组件与情感化反馈，让机器看起来更像伙伴。',
        tags: ['AI Design', 'Design System', 'Motion'],
        art: { from: '#6d5cff', to: '#a78bfa', pattern: 'constellation' },
        link: '#',
      },
      {
        index: '02',
        title: '星屿咖啡 · 品牌重塑',
        category: 'Brand Design',
        year: '2024',
        description: '从品牌故事到门店物料的全新视觉体系。用岛屿、潮汐与温度，重新讲述一杯咖啡的旅程。',
        tags: ['Branding', 'Packaging', 'Art Direction'],
        art: { from: '#f59e6b', to: '#e0527a', pattern: 'waves' },
        link: '#',
      },
      {
        index: '03',
        title: 'MUSE · 智能创作平台',
        category: 'Product Visual',
        year: '2024',
        description: '为创作者打造的一站式智能创作平台，用克制的暗色界面与流畅动效，让工具退后、灵感向前。',
        tags: ['Product Design', 'UI', 'Motion'],
        art: { from: '#22d3ee', to: '#2dd4bf', pattern: 'grid' },
        link: '#',
      },
      {
        index: '04',
        title: '声浪 · 音乐 App 视觉升级',
        category: 'Visual Design',
        year: '2023',
        description: '以「声波」为灵感的视觉语言升级：动态封面、沉浸式播放页与情绪化配色体系。',
        tags: ['Visual Identity', 'App UI', 'Illustration'],
        art: { from: '#f472b6', to: '#a855f7', pattern: 'rings' },
        link: '#',
      },
    ],
  },

  // —— 03 个人优势 ——
  strengths: {
    label: '03 / CAPABILITIES',
    heading: '个人优势',
    sub: '把一件事做到极致，胜过把十件事做到平庸。',
    items: [
      {
        title: '视觉设计',
        en: 'Visual Design',
        desc: '品牌识别、版式、插画与动效，构建完整而统一的视觉语言。',
        icon: 'pen',
      },
      {
        title: 'AI 设计工作流',
        en: 'AI-Driven Design',
        desc: '熟练运用 Midjourney、Stable Diffusion、ComfyUI 等工具，将生成式 AI 融入从概念到成品的创意流程。',
        icon: 'spark',
      },
      {
        title: '品牌策略',
        en: 'Brand Strategy',
        desc: '从市场洞察到品牌定位，让视觉不仅好看，更有效。',
        icon: 'target',
      },
      {
        title: '设计工程化',
        en: 'Design Engineering',
        desc: '理解前端与设计系统，输出可落地的规范与组件，缩短设计与开发的距离。',
        icon: 'code',
      },
    ],
  },

  // —— 04 底部联系 ——
  contact: {
    label: '04 / CONTACT',
    headingA: '一起创造，',
    headingB: '不一样的东西。',
    headingAccent: '不一样',
    paragraph: '目前开放品牌视觉、AI 设计咨询与个人项目合作。回复通常在 24 小时内。',
    socials: [
      { label: 'Behance', href: 'https://behance.net' },
      { label: 'Dribbble', href: 'https://dribbble.com' },
      { label: '站酷', href: '#' },
      { label: '小红书', href: '#' },
      { label: 'GitHub', href: 'https://github.com' },
    ],
  },

  footer: {
    line: '© 2026 Lin Yi · 用 React + Vite 设计与构建',
    backToTop: '回到顶部',
  },
}