# ZQW 个人作品集改版 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将现有「林一」占位作品集改版为真实本人张倩雯（ZQW）的白底科技杂志风单页作品集，含全站新文案与真实素材占位。

**Architecture:** 沿用 React 18 + Vite 单页应用结构；`src/content/site.js` 承载全部内容数据；按板块拆分独立组件（Manifesto / Works / DesignLab / VisualArchive / Capabilities / AboutMe），共享一个 Media 占位组件；`src/styles/global.css` 定义设计令牌（黑白蓝 + 发丝线 + 等宽标签）。

**Tech Stack:** React 18 + Vite 6 + Space Grotesk（已有）+ JetBrains Mono（新增，npm）+ 系统中文回退字体。无单元测试框架；验证用 `scripts/verify.cjs`（布局/溢出/控制台错误）与 `scripts/screenshot.cjs`（分区截图），编译门禁用 `pnpm build`。

**Spec:** `docs/superpowers/specs/2026-08-28-zqw-portfolio-redesign-design.md`（实施时先读 spec 第 4、5 节，文案以 spec 为准）

## Global Constraints

- 背景色 `#FFFFFF`，墨黑 `#0B0B0F`，电光蓝 `#1E5EFF`，浅蓝底 `#EAF0FF`，发丝线 `#E5E7EB`，辅助灰 `#6B7280`
- 版心 `--max-w: 1400px`（`container` 工具类沿用）
- 语言：英文做结构标签（如 `02 / SELECTED WORKS`），中文做正文；不引入 i18n
- 导航锚点固定为：`#works` `#lab` `#about` `#contact`（Hero 为 `#home`）
- 中文全名「张倩雯」必须出现在 Hero kicker：`张倩雯 ZHANG QIANWEN — UI/UX DESIGNER · AI PRODUCT DESIGNER · SPATIAL DESIGN`
- 联系板块必须有：邮箱 Email / 微信 WeChat / QQ / 电话（值当前为占位）
- 图片素材为空（`src: ''`）时必须渲染浅蓝底占位块（等宽标签 `IMAGE — ...`），不得破版
- 所有节区块标签用等宽小字，格式 `0n / NAME`（如 `01 / ABOUT`）
- 字体：标题英文 Space Grotesk Variable；等宽 JetBrains Mono Variable（npm 包 `@fontsource-variable/jetbrains-mono`，安装失败则回退 `ui-monospace, monospace`）；正文中文回退系统字体
- 单页滚动：`html { scroll-behavior: smooth; scroll-padding-top: calc(var(--nav-h) + 8px) }`
- 动效保留：滚动渐显（`Reveal` 组件沿用）、hover 下划线滑动/图片缩放；移除 Canvas 粒子背景
- git 提交在沙箱内可能因 `.git` 只读被拒，需请求提升权限

## File Structure

- Modify: `src/styles/global.css` — 设计令牌 + 基础工具类（整体重写）
- Modify: `index.html` — title / description / theme-color
- Modify: `public/favicon.svg` — 黑白蓝 ZQ 标识
- Modify: `src/main.jsx` — 引入 JetBrains Mono 字体
- Modify: `package.json` — 新增 `@fontsource-variable/jetbrains-mono`
- Rewrite: `src/content/site.js` — 全部内容数据（新 schema）
- Create: `scripts/check-content.cjs` — 内容 schema 校验（真实测试）
- Create: `src/components/Media.jsx` + `Media.css` — 图片/占位共享组件
- Create: `src/lib/text.jsx` — `renderAccent(line, accent)` 共享高亮
- Rewrite: `src/components/Nav.jsx` + `Nav.css`
- Rewrite: `src/components/Hero.jsx` + `Hero.css`
- Create: `src/components/Manifesto.jsx` + `Manifesto.css`
- Modify: `src/components/Marquee.jsx`（保留结构）+ Rewrite `Marquee.css`
- Create: `src/components/Works.jsx` + `Works.css`
- Create: `src/components/DesignLab.jsx` + `DesignLab.css`
- Create: `src/components/VisualArchive.jsx` + `VisualArchive.css`
- Create: `src/components/Capabilities.jsx` + `Capabilities.css`
- Create: `src/components/AboutMe.jsx` + `AboutMe.css`
- Rewrite: `src/components/Contact.jsx` + `Contact.css`
- Modify: `src/App.jsx` — 组装新组件
- Modify: `scripts/screenshot.cjs` — 更新分区截图选择器
- Delete: `src/components/Projects.jsx` `Projects.css` `Strengths.jsx` `Strengths.css` `About.jsx` `About.css` `ParticleField.jsx`
- Keep: `src/components/Reveal.jsx`（不动）

> 注意：Task 2 重写 `site.js` 后，旧组件（Projects/Strengths/About）会因读取不到 `site.projects` 等键在浏览器运行时报错——这是预期状态；Task 2 到 Task 12 之间只做 `pnpm build` 编译门禁，不做浏览器验证，最终在 Task 13 统一跑 `verify.cjs` 与 `screenshot.cjs`。

---

### Task 1: 设计地基（令牌 / 字体 / 页面元信息）

**Files:**
- Modify: `src/styles/global.css`（整体重写）
- Modify: `index.html`
- Modify: `public/favicon.svg`
- Modify: `src/main.jsx`
- Modify: `package.json`（新增依赖）

**Interfaces:**
- Consumes: 无
- Produces: CSS 变量 `--bg --ink --ink-soft --muted --accent --accent-soft --hairline --hairline-strong --font-display --font-body --font-mono --max-w --nav-h --ease-out`；工具类 `.container .section .section-label .section-title .section-sub .btn .btn-primary .btn-ghost .tag .text-accent`

- [ ] **Step 1: 安装等宽字体**

Run: `pnpm add @fontsource-variable/jetbrains-mono`
（网络受限时需提升权限；失败则跳过，字体栈回退 `ui-monospace, monospace`）

- [ ] **Step 2: 重写 `src/styles/global.css`**

```css
/* ============================================================
   Tokens — 白底科技杂志风
============================================================ */
:root {
  --bg: #ffffff;
  --ink: #0b0b0f;
  --ink-soft: #3a3a45;
  --muted: #6b7280;
  --accent: #1e5eff;
  --accent-soft: #eaf0ff;
  --hairline: #e5e7eb;
  --hairline-strong: #d4d4d8;

  --font-display: 'Space Grotesk Variable', 'Space Grotesk', 'Helvetica Neue',
    'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-body: 'Space Grotesk Variable', 'PingFang SC', 'Microsoft YaHei',
    -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace,
    'SFMono-Regular', Consolas, monospace;

  --max-w: 1400px;
  --nav-h: 72px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

*,
*::before,
*::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; scroll-padding-top: calc(var(--nav-h) + 8px); }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

img, video { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; color: inherit; background: none; border: none; cursor: pointer; }
ul, ol { list-style: none; }

::selection { background: rgba(30, 94, 255, 0.18); color: var(--ink); }

::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 8px; border: 2px solid var(--bg); }
::-webkit-scrollbar-thumb:hover { background: #b6b6bd; }

/* Utilities */
.container { width: min(var(--max-w), 100% - 72px); margin-inline: auto; }

.section { padding: clamp(88px, 9vw, 140px) 0; position: relative; border-top: 1px solid var(--hairline); }

.section-label {
  display: inline-flex; align-items: center; gap: 14px;
  font-family: var(--font-mono);
  font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase;
  color: var(--muted); font-weight: 500;
}
.section-label::before { content: ''; width: 36px; height: 1px; background: var(--accent); }

.section-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 72px);
  font-weight: 600; letter-spacing: -0.02em; line-height: 1.12;
  margin-top: 22px;
}

.section-sub { color: var(--muted); max-width: 560px; margin-top: 18px; font-size: 16px; }

.text-accent { color: var(--accent); }

.btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 26px; font-size: 14px; font-weight: 600; letter-spacing: 0.12em;
  border-radius: 999px; transition: background .3s var(--ease-out), color .3s var(--ease-out), border-color .3s var(--ease-out);
}
.btn-primary { background: var(--ink); color: #fff; }
.btn-primary:hover { background: var(--accent); }
.btn-ghost { border: 1px solid var(--hairline-strong); color: var(--ink); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

.tag {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em;
  color: var(--ink-soft); border: 1px solid var(--hairline-strong);
  padding: 5px 10px; border-radius: 999px;
}

/* Reveal on scroll（沿用，仅配色无关） */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.9s var(--ease-out), transform 0.9s var(--ease-out); will-change: opacity, transform; }
.reveal.is-in { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; transition: none; }
  *, *::before, *::after { animation-duration: 0.001s !important; animation-iteration-count: 1 !important; }
}
```

- [ ] **Step 3: 更新 `index.html`**

```html
<meta name="description" content="张倩雯 ZQW · UI/UX 设计师 / AI 产品设计师 / 空间设计师 — 个人作品集" />
<meta name="theme-color" content="#ffffff" />
<title>张倩雯 ZQW — UI/UX · AI Product · Spatial Design</title>
```

- [ ] **Step 4: 更新 `public/favicon.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0b0b0f"/>
  <text x="30" y="43" font-family="Arial, sans-serif" font-size="30" font-weight="700" text-anchor="middle" fill="#ffffff">ZQ</text>
  <circle cx="47" cy="17" r="5.5" fill="#1e5eff"/>
</svg>
```

- [ ] **Step 5: 更新 `src/main.jsx`（新增等宽字体 import）**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/jetbrains-mono'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- [ ] **Step 6: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功，`dist/` 生成。

```bash
git add src/styles/global.css index.html public/favicon.svg src/main.jsx package.json pnpm-lock.yaml
git commit -m "feat: 白底科技杂志风设计地基（令牌/字体/元信息）"
```

---

### Task 2: 内容数据重写（site.js）+ 校验脚本

**Files:**
- Create: `scripts/check-content.cjs`
- Rewrite: `src/content/site.js`

**Interfaces:**
- Consumes: 无
- Produces: `site` 导出，含键 `name nameZh nameEn role email location availability nav hero marquee manifesto works lab archive capabilities aboutMe contact footer`；各节字段见下方数据；后续所有组件只读这些字段

- [ ] **Step 1: 写失败测试 `scripts/check-content.cjs`**

```js
const assert = require('node:assert')
;(async () => {
  const { site } = await import('../src/content/site.js')
  assert.ok(site.name === 'ZQW', 'name')
  assert.ok(site.nameZh === '张倩雯', 'nameZh')
  assert.ok(site.hero.kicker.includes('张倩雯 ZHANG QIANWEN'), 'kicker 含中文全名')
  assert.ok(site.hero.titleA.includes("Hi, I'm ZQW"), 'titleA')
  assert.ok(site.hero.titleB === 'Design beyond the interface.', 'titleB')
  assert.strictEqual(site.works.items.length, 3, 'works 3 件')
  assert.ok(site.works.items[0].title === '暖舍', 'works[0]')
  assert.ok(site.works.items[1].title === '卦了么', 'works[1]')
  assert.ok(site.works.items[2].titleEn === 'SPATIAL DESIGN', 'works[2]')
  assert.strictEqual(site.lab.items.length, 4, 'lab 4 项')
  assert.strictEqual(site.capabilities.items.length, 4, 'capabilities 4 项')
  assert.ok(site.archive.items.length >= 6, 'archive >= 6')
  assert.ok(site.aboutMe.bio.length === 2, 'aboutMe.bio 2 段')
  assert.ok(site.contact.methods.some((m) => m.label.includes('邮箱')), '有邮箱')
  assert.ok(site.contact.methods.some((m) => m.label.includes('微信')), '有微信')
  assert.ok(site.contact.methods.some((m) => m.label.includes('QQ')), '有 QQ')
  assert.ok(site.contact.methods.some((m) => m.label.includes('电话')), '有电话')
  assert.ok(site.nav.links.map((l) => l.id).join() === 'works,lab,about,contact', 'nav 锚点')
  console.log('content check passed')
})().catch((e) => { console.error('content check failed:', e.message); process.exit(1) })
```

- [ ] **Step 2: 运行确认失败**

Run: `node scripts/check-content.cjs`
Expected: FAIL（当前 `site.js` 是旧 schema，无 `nameZh`/`works` 等键）

- [ ] **Step 3: 重写 `src/content/site.js`**（全文替换，文案以 spec §5 为准）

```js
// ============================================================
// 全站内容配置 —— 改这里即可，不需要动组件代码
// ZQW / 张倩雯 个人作品集（白底科技杂志风）
// ============================================================

export const site = {
  // —— 基本信息 ——
  name: 'ZQW',
  nameZh: '张倩雯',
  nameEn: 'ZHANG QIANWEN',
  role: 'UI/UX Designer · AI Product Designer · Spatial Design',
  email: 'hello@zqw.design',
  location: '中国',
  availability: '开放合作中',

  // —— 顶部导航 ——
  nav: {
    links: [
      { id: 'works', label: 'WORKS' },
      { id: 'lab', label: 'LAB' },
      { id: 'about', label: 'ABOUT' },
      { id: 'contact', label: 'CONTACT' },
    ],
    cta: "LET'S TALK",
  },

  // —— 首页 Hero ——
  hero: {
    kicker: '张倩雯 ZHANG QIANWEN — UI/UX DESIGNER · AI PRODUCT DESIGNER · SPATIAL DESIGN',
    titleA: "Hi, I'm ZQW.",
    titleB: 'Design beyond the interface.',
    titleAccent: 'beyond the interface',
    paragraph:
      '我是张倩雯（ZQW），一名 UI/UX 设计师、AI 产品设计师与空间设计师。我相信设计的边界不止于屏幕——从界面、到空间、再到 AI 体验，让技术被感知，让产品被记住。',
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
}
```

- [ ] **Step 4: 运行确认通过 + 编译门禁**

Run: `node scripts/check-content.cjs`
Expected: `content check passed`

Run: `pnpm build`
Expected: 构建成功

- [ ] **Step 5: 提交**

```bash
git add src/content/site.js scripts/check-content.cjs
git commit -m "feat: 全站内容数据重写为 ZQW 真实人设 + schema 校验脚本"
```

---

### Task 3: 共享组件（Media 占位 + renderAccent）

**Files:**
- Create: `src/components/Media.jsx`
- Create: `src/components/Media.css`
- Create: `src/lib/text.jsx`

**Interfaces:**
- Produces: `Media({ image, className })` — `image` 形如 `{ src, alt?, placeholder?, ratio?, h? }`；`src` 为空渲染占位块；导出默认组件。`renderAccent(line, accent)` — 返回 JSX，命中词包 `<span className="text-accent">`
- Consumes: 无

- [ ] **Step 1: 创建 `src/lib/text.jsx`**

```jsx
export function renderAccent(line, accent) {
  if (!accent || !line.includes(accent)) return line
  const idx = line.indexOf(accent)
  return (
    <>
      {line.slice(0, idx)}
      <span className="text-accent">{accent}</span>
      {line.slice(idx + accent.length)}
    </>
  )
}
```

- [ ] **Step 2: 创建 `src/components/Media.jsx`**

```jsx
import './Media.css'

export default function Media({ image, className = '' }) {
  if (image.src) {
    return <img className={className} src={image.src} alt={image.alt || ''} loading="lazy" />
  }
  return (
    <div
      className={`media-ph ${className}`}
      data-ratio={image.ratio || ''}
      data-fixed={image.h ? 'h' : ''}
      style={image.h ? { minHeight: image.h } : undefined}
    >
      <span className="media-ph-label">{image.placeholder}</span>
      <span className="media-ph-grid" aria-hidden="true" />
    </div>
  )
}
```

- [ ] **Step 3: 创建 `src/components/Media.css`**

```css
.media-ph {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  background: var(--accent-soft);
  border: 1px solid var(--hairline);
  overflow: hidden;
}
.media-ph[data-ratio='landscape'] { aspect-ratio: 16 / 10; }
.media-ph[data-ratio='portrait'] { aspect-ratio: 3 / 4; }
.media-ph[data-fixed='h'] { aspect-ratio: auto; }
.media-ph-label {
  position: relative; z-index: 1;
  font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.22em;
  color: var(--muted); text-align: center; padding: 0 16px;
}
.media-ph-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--hairline) 1px, transparent 1px),
    linear-gradient(90deg, var(--hairline) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.6;
}
```

- [ ] **Step 4: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/Media.jsx src/components/Media.css src/lib/text.jsx
git commit -m "feat: 共享 Media 占位组件与 renderAccent 工具"
```

---

### Task 4: Nav 重写

**Files:**
- Rewrite: `src/components/Nav.jsx`
- Rewrite: `src/components/Nav.css`

**Interfaces:**
- Consumes: `site.nav.links[] {id,label}`、`site.nav.cta`、`site.name`、`site.nameZh`
- Produces: `<header class="nav">`，品牌 `ZQW.` + `张倩雯`，链接带 `0n` 等宽序号，CTA `LET'S TALK ↗`；锚点 `#works #lab #about #contact`

- [ ] **Step 1: 重写 `src/components/Nav.jsx`**

```jsx
import { site } from '../content/site'
import './Nav.css'

export default function Nav() {
  const { nav, name, nameZh } = site
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#home">
          <span className="nav-brand-name">{name}<span className="nav-brand-dot">.</span></span>
          <span className="nav-brand-zh">{nameZh}</span>
        </a>

        <nav className="nav-links" aria-label="主导航">
          {nav.links.map((link, i) => (
            <a key={link.id} className="nav-link" href={`#${link.id}`}>
              <span className="nav-link-index">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          {nav.cta} <span>↗</span>
        </a>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: 重写 `src/components/Nav.css`**

```css
.nav {
  position: sticky; top: 0; z-index: 50;
  height: var(--nav-h);
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--hairline);
}
.nav-inner { height: 100%; display: flex; align-items: center; justify-content: space-between; gap: 24px; }

.nav-brand { display: inline-flex; align-items: baseline; gap: 12px; }
.nav-brand-name { font-family: var(--font-display); font-size: 24px; font-weight: 700; letter-spacing: -0.02em; }
.nav-brand-dot { color: var(--accent); }
.nav-brand-zh { font-size: 12px; letter-spacing: 0.2em; color: var(--muted); }

.nav-links { display: flex; gap: 28px; }
.nav-link {
  position: relative;
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.18em;
  color: var(--ink-soft); padding: 8px 2px;
}
.nav-link::after {
  content: ''; position: absolute; left: 0; bottom: 0;
  height: 2px; width: 0; background: var(--accent);
  transition: width 0.3s var(--ease-out);
}
.nav-link:hover { color: var(--ink); }
.nav-link:hover::after { width: 100%; }
.nav-link-index { color: var(--accent); font-size: 10px; }

.nav-cta {
  font-size: 13px; font-weight: 600; letter-spacing: 0.12em;
  color: var(--accent); border: 1px solid var(--accent);
  padding: 9px 18px; border-radius: 999px;
  transition: background 0.3s, color 0.3s;
}
.nav-cta:hover { background: var(--accent); color: #fff; }

@media (max-width: 760px) {
  .nav-brand-zh, .nav-links { display: none; }
}
```

- [ ] **Step 3: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/Nav.jsx src/components/Nav.css
git commit -m "feat: Nav 白底吸顶导航（ZQW. 品牌 + 等宽锚点）"
```

---

### Task 5: Hero 重写

**Files:**
- Rewrite: `src/components/Hero.jsx`
- Rewrite: `src/components/Hero.css`

**Interfaces:**
- Consumes: `site.hero`（kicker/titleA/titleB/titleAccent/paragraph/ctaPrimary/ctaSecondary/scrollHint）、`renderAccent`
- Produces: `<section id="home" class="hero">`；`.hero-grid` 网格背景、`.hero-glow` 蓝光、`.hero-title`（含 `.text-accent` 高亮）

- [ ] **Step 1: 重写 `src/components/Hero.jsx`**

```jsx
import { site } from '../content/site'
import { renderAccent } from '../lib/text'
import './Hero.css'

export default function Hero() {
  const { hero } = site
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner container">
        <p className="hero-kicker">{hero.kicker}</p>
        <h1 className="hero-title">
          <span className="hero-line">{hero.titleA}</span>
          <span className="hero-line">{renderAccent(hero.titleB, hero.titleAccent)}</span>
        </h1>
        <p className="hero-para">{hero.paragraph}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#works">
            {hero.ctaPrimary} <span>↓</span>
          </a>
          <a className="btn btn-ghost" href="#about">
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
      <p className="hero-scroll">{hero.scrollHint}</p>
    </section>
  )
}
```

- [ ] **Step 2: 重写 `src/components/Hero.css`**

```css
.hero {
  position: relative;
  min-height: calc(100vh - var(--nav-h));
  display: flex; align-items: center;
  overflow: hidden;
}
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--hairline) 1px, transparent 1px),
    linear-gradient(90deg, var(--hairline) 1px, transparent 1px);
  background-size: 72px 72px;
  opacity: 0.5;
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 75%);
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 75%);
}
.hero-glow {
  position: absolute; width: 640px; height: 640px;
  right: -120px; top: -160px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 65%);
  pointer-events: none;
}
.hero-inner { position: relative; z-index: 1; padding: 96px 0; }
.hero-kicker {
  font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.22em;
  color: var(--muted); text-transform: uppercase; margin-bottom: 32px;
  max-width: 640px; line-height: 2;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(56px, 9vw, 132px);
  font-weight: 600; line-height: 1.02; letter-spacing: -0.03em;
}
.hero-line { display: block; }
.hero-para { margin-top: 40px; max-width: 620px; font-size: 17px; color: var(--muted); line-height: 1.9; }
.hero-actions { margin-top: 48px; display: flex; gap: 16px; flex-wrap: wrap; }
.hero-scroll {
  position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.24em;
  color: var(--muted); white-space: nowrap;
}
```

- [ ] **Step 3: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/Hero.jsx src/components/Hero.css
git commit -m "feat: Hero 白底杂志大字 + 网格/蓝光背景"
```

---

### Task 6: Manifesto + Marquee

**Files:**
- Create: `src/components/Manifesto.jsx`
- Create: `src/components/Manifesto.css`
- Modify: `src/components/Marquee.css`（重写为白底样式）

**Interfaces:**
- Consumes: `site.manifesto`（label/title/sub/steps[]）、`site.marquee[]`
- Produces: `<section id="manifesto" class="section manifesto">`，含 `.manifesto-steps` 四步流程条；Marquee 结构不变（`Marquee.jsx` 不动）

- [ ] **Step 1: 创建 `src/components/Manifesto.jsx`**

```jsx
import { site } from '../content/site'
import Reveal from './Reveal'
import './Manifesto.css'

export default function Manifesto() {
  const { manifesto } = site
  return (
    <section id="manifesto" className="section manifesto">
      <div className="container">
        <Reveal>
          <p className="section-label">{manifesto.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title manifesto-title">{manifesto.title}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="manifesto-sub">{manifesto.sub}</p>
        </Reveal>

        <div className="manifesto-steps">
          {manifesto.steps.map((s, i) => (
            <Reveal key={s.en} className="manifesto-step" delay={i * 90}>
              <span className="manifesto-step-num">0{i + 1}</span>
              <h3 className="manifesto-step-en">{s.en}</h3>
              <p className="manifesto-step-zh">{s.zh}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: 创建 `src/components/Manifesto.css`**

```css
.manifesto-title { font-size: clamp(48px, 7vw, 104px); }
.manifesto-sub { margin-top: 18px; color: var(--muted); font-size: 18px; }
.manifesto-steps {
  margin-top: 72px;
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--hairline);
}
.manifesto-step { padding: 32px 28px 8px; border-left: 1px solid var(--hairline); }
.manifesto-step:first-child { border-left: none; padding-left: 0; }
.manifesto-step-num { font-family: var(--font-mono); font-size: 11px; color: var(--accent); }
.manifesto-step-en {
  font-family: var(--font-display); font-size: 26px; font-weight: 600;
  letter-spacing: -0.01em; margin-top: 12px;
}
.manifesto-step-zh { margin-top: 10px; font-size: 14px; color: var(--muted); line-height: 1.8; }
@media (max-width: 900px) {
  .manifesto-steps { grid-template-columns: repeat(2, 1fr); }
  .manifesto-step:nth-child(3) { border-left: none; padding-left: 0; }
}
```

- [ ] **Step 3: 重写 `src/components/Marquee.css`**

```css
.marquee {
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
  padding: 18px 0;
  overflow: hidden;
}
.marquee-track {
  display: flex; width: max-content;
  animation: marquee 28s linear infinite;
}
.marquee-item {
  display: inline-flex; align-items: center; gap: 28px; padding-right: 28px;
}
.marquee-text {
  font-family: var(--font-mono); font-size: 13px; letter-spacing: 0.3em;
  color: var(--ink-soft); white-space: nowrap;
}
.marquee-star { color: var(--accent); font-size: 12px; }
@keyframes marquee { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
```

- [ ] **Step 4: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/Manifesto.jsx src/components/Manifesto.css src/components/Marquee.css
git commit -m "feat: 定位宣言板块 + 白底跑马灯"
```

---

### Task 7: Selected Works（杂志式交错排版）

**Files:**
- Create: `src/components/Works.jsx`
- Create: `src/components/Works.css`

**Interfaces:**
- Consumes: `site.works`（label/title/sub/items[]，item: index/title/titleEn/category/year/description/tags/image/link）、`Media`
- Produces: `<section id="works" class="section works">`；`.work-row` 大图左右交替（`.work-flip` 反转），`VIEW PROJECT ↗`

- [ ] **Step 1: 创建 `src/components/Works.jsx`**

```jsx
import { site } from '../content/site'
import Reveal from './Reveal'
import Media from './Media'
import './Works.css'

export default function Works() {
  const { works } = site
  return (
    <section id="works" className="section works">
      <div className="container">
        <Reveal>
          <p className="section-label">{works.label}</p>
        </Reveal>
        <div className="works-head">
          <Reveal delay={80}>
            <h2 className="section-title">{works.title}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-sub">{works.sub}</p>
          </Reveal>
        </div>

        <div className="works-list">
          {works.items.map((item, i) => (
            <Reveal key={item.index} className="work-row-wrap" delay={i % 2 ? 80 : 0}>
              <article className={`work-row ${i % 2 ? 'work-flip' : ''}`}>
                <Media className="work-media" image={item.image} />

                <div className="work-body">
                  <div className="work-meta">
                    <span className="work-index">{item.index}</span>
                    <span className="work-cat">{item.category}</span>
                    <span className="work-year">{item.year}</span>
                  </div>
                  <h3 className="work-title">
                    {item.title}
                    <span className="work-title-en"> / {item.titleEn}</span>
                  </h3>
                  <p className="work-desc">{item.description}</p>
                  <div className="work-tags">
                    {item.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <a className="work-link" href={item.link}>
                    VIEW PROJECT <span>↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: 创建 `src/components/Works.css`**

```css
.works-head {
  display: flex; justify-content: space-between; align-items: flex-end;
  gap: 40px; margin-bottom: 72px;
}
.works-list { display: grid; gap: 140px; }

.work-row {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: clamp(40px, 6vw, 96px);
  align-items: center;
}
.work-flip .work-media { order: 2; }

.work-media { border-radius: 12px; overflow: hidden; border: 1px solid var(--hairline); }
.work-media img { width: 100%; height: 100%; object-fit: cover; }

.work-meta {
  display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em;
  color: var(--muted);
}
.work-index { color: var(--accent); font-size: 13px; }

.work-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 600; letter-spacing: -0.02em; margin-top: 18px;
}
.work-title-en { color: var(--muted); font-size: 0.55em; letter-spacing: 0.06em; }

.work-desc { margin-top: 20px; color: var(--muted); max-width: 520px; line-height: 1.9; }
.work-tags { margin-top: 20px; display: flex; flex-wrap: wrap; gap: 8px; }

.work-link {
  display: inline-flex; align-items: center; gap: 8px;
  margin-top: 28px; font-size: 14px; font-weight: 600; color: var(--ink);
  border-bottom: 2px solid var(--accent); padding-bottom: 4px;
  transition: color 0.3s;
}
.work-link span { color: var(--accent); }
.work-link:hover { color: var(--accent); }

@media (max-width: 900px) {
  .works-head { flex-direction: column; align-items: flex-start; gap: 16px; }
  .work-row { grid-template-columns: 1fr; }
  .work-flip .work-media { order: 0; }
  .works-list { gap: 96px; }
}
```

- [ ] **Step 3: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/Works.jsx src/components/Works.css
git commit -m "feat: 精选作品杂志式交错排版"
```

---

### Task 8: Design Lab

**Files:**
- Create: `src/components/DesignLab.jsx`
- Create: `src/components/DesignLab.css`

**Interfaces:**
- Consumes: `site.lab`（label/title/sub/items[]，item: index/title/zh/link）
- Produces: `<section id="lab" class="section lab">`，浅蓝底 `--accent-soft`，2×2 白卡片网格，`LAB / 0n` 标签

- [ ] **Step 1: 创建 `src/components/DesignLab.jsx`**

```jsx
import { site } from '../content/site'
import Reveal from './Reveal'
import './DesignLab.css'

export default function DesignLab() {
  const { lab } = site
  return (
    <section id="lab" className="section lab">
      <div className="container">
        <Reveal>
          <p className="section-label">{lab.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{lab.title}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="section-sub">{lab.sub}</p>
        </Reveal>

        <div className="lab-list">
          {lab.items.map((item) => (
            <Reveal key={item.index} className="lab-item-wrap" delay={0}>
              <a className="lab-item" href={item.link}>
                <div className="lab-item-top">
                  <span className="lab-tag">LAB / {item.index}</span>
                  <span className="lab-arrow">↗</span>
                </div>
                <h3 className="lab-title">{item.title}</h3>
                <p className="lab-zh">{item.zh}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: 创建 `src/components/DesignLab.css`**

```css
.lab {
  background: var(--accent-soft);
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
}
.lab-list {
  margin-top: 64px;
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--hairline);
  border: 1px solid var(--hairline);
}
.lab-item {
  display: block; height: 100%;
  background: var(--bg);
  padding: 34px 32px;
  transition: background 0.3s var(--ease-out);
}
.lab-item:hover { background: var(--accent-soft); }
.lab-item-top { display: flex; justify-content: space-between; align-items: center; }
.lab-tag { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.2em; color: var(--accent); }
.lab-arrow { font-size: 16px; color: var(--muted); transition: color 0.3s, transform 0.3s; }
.lab-item:hover .lab-arrow { color: var(--accent); transform: translate(2px, -2px); }
.lab-title {
  font-family: var(--font-display); font-size: 26px; font-weight: 600;
  letter-spacing: -0.01em; margin-top: 22px;
}
.lab-zh { margin-top: 12px; font-size: 14px; color: var(--muted); line-height: 1.8; }
@media (max-width: 860px) {
  .lab-list { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/DesignLab.jsx src/components/DesignLab.css
git commit -m "feat: Design Lab 实验板块（浅蓝底 2x2）"
```

---

### Task 9: Visual Archive（Masonry 图墙）

**Files:**
- Create: `src/components/VisualArchive.jsx`
- Create: `src/components/VisualArchive.css`

**Interfaces:**
- Consumes: `site.archive`（label/title/categories[]/items[]，item: src/placeholder/h）、`Media`
- Produces: `<section id="archive" class="section archive">`，分类胶囊 + CSS columns 瀑布流

- [ ] **Step 1: 创建 `src/components/VisualArchive.jsx`**

```jsx
import { site } from '../content/site'
import Reveal from './Reveal'
import Media from './Media'
import './VisualArchive.css'

export default function VisualArchive() {
  const { archive } = site
  return (
    <section id="archive" className="section archive">
      <div className="container">
        <Reveal>
          <p className="section-label">{archive.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{archive.title}</h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="archive-cats">
            {archive.categories.map((c) => (
              <span className="archive-cat" key={c}>{c}</span>
            ))}
          </div>
        </Reveal>

        <div className="archive-grid">
          {archive.items.map((item, i) => (
            <Reveal key={i} className="archive-item-wrap" delay={(i % 3) * 60}>
              <Media className="archive-item" image={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: 创建 `src/components/VisualArchive.css`**

```css
.archive-cats { margin: 32px 0 48px; display: flex; flex-wrap: wrap; gap: 10px; }
.archive-cat {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
  color: var(--muted); border: 1px solid var(--hairline-strong);
  padding: 6px 14px; border-radius: 999px;
}
.archive-grid { columns: 3 300px; column-gap: 18px; }
.archive-item-wrap { break-inside: avoid; margin-bottom: 18px; display: block; }
.archive-item { border-radius: 10px; }
.archive-item img { width: 100%; object-fit: cover; }
@media (max-width: 1000px) {
  .archive-grid { columns: 2 240px; }
}
```

- [ ] **Step 3: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/VisualArchive.jsx src/components/VisualArchive.css
git commit -m "feat: 视觉档案 Masonry 图墙"
```

---

### Task 10: Capabilities

**Files:**
- Create: `src/components/Capabilities.jsx`
- Create: `src/components/Capabilities.css`

**Interfaces:**
- Consumes: `site.capabilities`（label/title/items[]，item: index/en/zh）
- Produces: `<section id="capabilities" class="section capabilities">`，2×2 网格卡片

- [ ] **Step 1: 创建 `src/components/Capabilities.jsx`**

```jsx
import { site } from '../content/site'
import Reveal from './Reveal'
import './Capabilities.css'

export default function Capabilities() {
  const { capabilities } = site
  return (
    <section id="capabilities" className="section capabilities">
      <div className="container">
        <Reveal>
          <p className="section-label">{capabilities.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{capabilities.title}</h2>
        </Reveal>

        <div className="caps-grid">
          {capabilities.items.map((item, i) => (
            <Reveal key={item.index} className="cap-wrap" delay={i * 80}>
              <div className="cap-item">
                <span className="cap-num">{item.index}</span>
                <h3 className="cap-en">{item.en}</h3>
                <p className="cap-zh">{item.zh}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: 创建 `src/components/Capabilities.css`**

```css
.caps-grid {
  margin-top: 64px;
  display: grid; grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--hairline);
  border-left: 1px solid var(--hairline);
}
.cap-item {
  padding: 48px 36px;
  border-right: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
  transition: background 0.3s var(--ease-out);
}
.cap-item:hover { background: var(--accent-soft); }
.cap-num { font-family: var(--font-mono); font-size: 12px; color: var(--accent); }
.cap-en {
  font-family: var(--font-display);
  font-size: clamp(30px, 3.6vw, 52px);
  font-weight: 600; letter-spacing: -0.02em; margin-top: 18px;
}
.cap-zh { margin-top: 12px; color: var(--muted); font-size: 15px; }
@media (max-width: 800px) {
  .caps-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/Capabilities.jsx src/components/Capabilities.css
git commit -m "feat: 能力 2x2 网格"
```

---

### Task 11: About Me

**Files:**
- Create: `src/components/AboutMe.jsx`
- Create: `src/components/AboutMe.css`

**Interfaces:**
- Consumes: `site.aboutMe`（label/title/bio[]/timeline[]/socials[]）
- Produces: `<section id="about" class="section about-me">`，左介绍右时间线

- [ ] **Step 1: 创建 `src/components/AboutMe.jsx`**

```jsx
import { site } from '../content/site'
import Reveal from './Reveal'
import './AboutMe.css'

export default function AboutMe() {
  const { aboutMe } = site
  return (
    <section id="about" className="section about-me">
      <div className="container">
        <Reveal>
          <p className="section-label">{aboutMe.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{aboutMe.title}</h2>
        </Reveal>

        <div className="about-grid">
          <div className="about-left">
            {aboutMe.bio.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="about-bio">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={140}>
              <div className="about-socials">
                {aboutMe.socials.map((s) => (
                  <a className="about-social" key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    {s.label} <span>↗</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="about-right">
            <Reveal delay={80}>
              <div className="about-timeline">
                {aboutMe.timeline.map((t, i) => (
                  <div className="about-tl-item" key={i}>
                    <span className="about-tl-dot" aria-hidden="true" />
                    <span className="about-tl-period">{t.period}</span>
                    <div className="about-tl-body">
                      <h4 className="about-tl-title">{t.title}</h4>
                      <p className="about-tl-note">{t.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: 创建 `src/components/AboutMe.css`**

```css
.about-grid {
  margin-top: 56px;
  display: grid; grid-template-columns: 1.1fr 1fr;
  gap: clamp(48px, 6vw, 96px);
}
.about-bio { font-size: 20px; line-height: 1.9; color: var(--ink-soft); max-width: 640px; }
.about-bio + .about-bio { margin-top: 24px; }

.about-socials { margin-top: 40px; display: flex; flex-wrap: wrap; gap: 18px; }
.about-social {
  font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.16em;
  color: var(--muted); border-bottom: 1px solid var(--hairline-strong);
  padding-bottom: 4px; transition: color 0.3s, border-color 0.3s;
}
.about-social span { color: var(--accent); }
.about-social:hover { color: var(--accent); border-color: var(--accent); }

.about-timeline {
  position: relative; padding-left: 28px;
  border-left: 1px solid var(--hairline);
  display: grid; gap: 36px;
}
.about-tl-item { position: relative; }
.about-tl-dot {
  position: absolute; left: -33px; top: 6px;
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--accent); border: 2px solid var(--bg);
  box-shadow: 0 0 0 1px var(--accent);
}
.about-tl-period { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; color: var(--muted); }
.about-tl-title { font-family: var(--font-display); font-size: 20px; font-weight: 600; margin-top: 8px; }
.about-tl-note { margin-top: 6px; color: var(--muted); font-size: 14px; }
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/AboutMe.jsx src/components/AboutMe.css
git commit -m "feat: 关于我（介绍 + 时间线）"
```

---

### Task 12: Contact

**Files:**
- Rewrite: `src/components/Contact.jsx`
- Rewrite: `src/components/Contact.css`

**Interfaces:**
- Consumes: `site.contact`（label/headingA/headingB/headingAccent/paragraph/methods[]/socials[]）、`site.footer`、`renderAccent`
- Produces: `<section id="contact" class="section contact">`，联系方式 2×2（邮箱/微信/QQ/电话）+ 社交 + 页脚

- [ ] **Step 1: 重写 `src/components/Contact.jsx`**

```jsx
import { site } from '../content/site'
import Reveal from './Reveal'
import { renderAccent } from '../lib/text'
import './Contact.css'

export default function Contact() {
  const { contact, footer } = site
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <p className="section-label">{contact.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="contact-title">
            {contact.headingA}
            <br />
            {renderAccent(contact.headingB, contact.headingAccent)}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="contact-para">{contact.paragraph}</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="contact-methods">
            {contact.methods.map((m) => {
              const inner = (
                <>
                  <span className="contact-m-label">{m.label}</span>
                  <span className="contact-m-value">
                    {m.value}
                    {m.href && <span className="contact-m-arrow">↗</span>}
                  </span>
                </>
              )
              return m.href ? (
                <a
                  className="contact-method"
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div className="contact-method" key={m.label}>{inner}</div>
              )
            })}
          </div>
        </Reveal>
        <Reveal delay={260}>
          <div className="contact-socials">
            {contact.socials.map((s) => (
              <a className="contact-social" key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="contact-footer">
        <div className="container contact-footer-inner">
          <span className="contact-footer-line">{footer.line}</span>
          <a className="contact-top" href="#home">
            {footer.backToTop} <span>↑</span>
          </a>
        </div>
      </footer>
    </section>
  )
}
```

- [ ] **Step 2: 重写 `src/components/Contact.css`**

```css
.contact { padding-bottom: 0; }
.contact-title {
  font-family: var(--font-display);
  font-size: clamp(44px, 6.5vw, 96px);
  font-weight: 600; letter-spacing: -0.03em; line-height: 1.05;
  margin-top: 24px;
}
.contact-para { margin-top: 28px; color: var(--muted); font-size: 17px; max-width: 560px; }

.contact-methods {
  margin-top: 64px;
  display: grid; grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--hairline);
  border-left: 1px solid var(--hairline);
}
.contact-method {
  display: block; padding: 32px 28px;
  border-right: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
  transition: background 0.3s var(--ease-out);
}
.contact-method:hover { background: var(--accent-soft); }
.contact-m-label {
  display: block;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em;
  color: var(--muted);
}
.contact-m-value {
  display: inline-flex; align-items: center; gap: 8px;
  margin-top: 14px; font-size: 20px; font-weight: 600; color: var(--ink);
  transition: color 0.3s;
}
.contact-m-arrow { color: var(--accent); }
.contact-method:hover .contact-m-value { color: var(--accent); }

.contact-socials { margin-top: 48px; display: flex; flex-wrap: wrap; gap: 26px; }
.contact-social {
  font-size: 14px; color: var(--ink-soft);
  border-bottom: 1px solid var(--hairline-strong); padding-bottom: 4px;
  transition: color 0.3s, border-color 0.3s;
}
.contact-social:hover { color: var(--accent); border-color: var(--accent); }

.contact-footer { margin-top: 96px; border-top: 1px solid var(--hairline); padding: 28px 0; }
.contact-footer-inner {
  display: flex; justify-content: space-between; align-items: center;
  gap: 16px; flex-wrap: wrap;
}
.contact-footer-line { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; color: var(--muted); }
.contact-top { font-size: 13px; color: var(--ink); border-bottom: 1px solid var(--hairline-strong); padding-bottom: 3px; }
.contact-top span { color: var(--accent); }
.contact-top:hover { color: var(--accent); }

@media (max-width: 800px) {
  .contact-methods { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: 编译门禁 + 提交**

Run: `pnpm build`
Expected: 构建成功

```bash
git add src/components/Contact.jsx src/components/Contact.css
git commit -m "feat: 联系板块（邮箱/微信/QQ/电话）+ 页脚"
```

---

### Task 13: App 组装 + 清理旧组件 + 全量验证

**Files:**
- Modify: `src/App.jsx`
- Modify: `scripts/screenshot.cjs`
- Delete: `src/components/Projects.jsx` `src/components/Projects.css` `src/components/Strengths.jsx` `src/components/Strengths.css` `src/components/About.jsx` `src/components/About.css` `src/components/ParticleField.jsx`

**Interfaces:**
- Consumes: 全部新组件
- Produces: 完整可运行站点；截图产物 `screenshots/*.png`；`verify.cjs` 报告无控制台错误、无水平溢出、reveal 全部进入

- [ ] **Step 1: 重写 `src/App.jsx`**

```jsx
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Manifesto from './components/Manifesto'
import Works from './components/Works'
import DesignLab from './components/DesignLab'
import VisualArchive from './components/VisualArchive'
import Capabilities from './components/Capabilities'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import './styles/global.css'

export default function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Works />
        <DesignLab />
        <VisualArchive />
        <Capabilities />
        <AboutMe />
      </main>
      <Contact />
    </div>
  )
}
```

- [ ] **Step 2: 删除旧组件文件**

删除（PowerShell）：

```powershell
Remove-Item -LiteralPath "src/components/Projects.jsx","src/components/Projects.css","src/components/Strengths.jsx","src/components/Strengths.css","src/components/About.jsx","src/components/About.css","src/components/ParticleField.jsx" -Force
```

> 若在沙箱内被拒（.git 之外应可写），改用文件管理工具逐个删除。

- [ ] **Step 3: 更新 `scripts/screenshot.cjs` 的分区列表**

将原有 `sections` 数组替换为：

```js
const sections = [
  ['#manifesto', '02-manifesto.png'],
  ['#works', '03-works.png'],
  ['#lab', '04-lab.png'],
  ['#archive', '05-archive.png'],
  ['#capabilities', '06-capabilities.png'],
  ['#about', '07-about.png'],
  ['#contact', '08-contact.png'],
];
```

- [ ] **Step 4: 编译门禁**

Run: `pnpm build`
Expected: 构建成功

- [ ] **Step 5: 内容校验**

Run: `node scripts/check-content.cjs`
Expected: `content check passed`

- [ ] **Step 6: 布局/溢出/控制台验证**

Run: `node scripts/verify.cjs`
Expected: JSON 报告中 `horizontalOverflow: false`、`consoleErrors: []`、`stuckReveals` 滚动后为 0、`canvasCount: 0`、`bodyBg` 为 `rgb(255, 255, 255)`、`heroTitleText` 含 `Hi, I'm ZQW.` 与 `Design beyond the interface.`

- [ ] **Step 7: 截图检查**

Run: `node scripts/screenshot.cjs`
Expected: `screenshots/` 下生成 `00-full.png` 与 `01-hero.png`、`02-manifesto.png` ... `08-contact.png`；人工抽查关键区（Hero 巨字、Works 交错、Lab 蓝底、Archive 瀑布流、Contact 四宫格）无破版

- [ ] **Step 8: 提交**

```bash
git add -A
git commit -m "feat: 组装 ZQW 新版单页站点并移除旧组件"
```

---

## Self-Review（计划自检）

- **Spec 覆盖**：§2 风格/色板 → Task 1；§3 信息架构 8 区块 → Task 4–12 + Task 13 组装；§4 各分节 → 对应 Task；§5 全部文案 → Task 2 `site.js`；§6 技术方案（Media 占位、组件增删、JetBrains Mono）→ Task 1/3/13；§7 开放项（素材/邮箱/微信/QQ/电话/时间线为占位）→ 数据中显式占位，替换只改 `site.js`；§8 验收 → Task 13 Step 4–7。
- **占位扫描**：无 TBD/TODO；唯一「占位」是产品内容本身（spec 明确要求占位素材策略），非计划缺口。
- **类型一致性**：`site.hero`（kicker/titleA/titleB/titleAccent/paragraph/ctaPrimary/ctaSecondary/scrollHint）在 Task 2 定义、Task 5 消费，一致；`image: {src, alt, placeholder, ratio?, h?}` 在 Task 2 定义、Task 3 Media 消费、Task 7/9 使用，一致；`renderAccent(line, accent)` 在 Task 3 定义、Task 5/12 消费，一致；锚点 id `works/lab/about/contact` 在 Task 2 定义、Task 4/13 使用，一致。
- **已知窗口**：Task 2 后至 Task 13 前浏览器运行态会报错（旧组件读新 schema），属预期，只做编译门禁；最终统一验证。

## Execution Handoff

计划已保存到 `docs/superpowers/plans/2026-08-28-zqw-portfolio-redesign.md`。

两种执行方式：
1. **Subagent-Driven（推荐）** — 每个 Task 派发一个全新子代理，任务间我做审查，迭代快
2. **Inline Execution** — 本会话内按 executing-plans 批量执行，带检查点

请选择执行方式。
