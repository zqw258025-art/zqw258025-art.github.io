# ZQW 个人作品集网站 · 改版设计规格

- 日期：2026-08-28
- 状态：待审阅（草案 v1）
- 站点类型：个人作品集（单页滚动）
- 作者：张倩雯（ZQW）

## 1. 背景与目标

现有站点（`src/content/site.js`）是「林一」的占位人设与虚拟项目，需要整体替换为真实本人 **张倩雯（ZQW）** 的作品集。本次为架构级改版：重写全部内容、更换视觉风格、重组板块结构。

**目标**：
1. 建立真实、可信的个人品牌形象（ZQW / 张倩雯）
2. 用「VISUAL → SPATIAL → DIGITAL → AI」的主线讲清能力范围
3. 用 2 个真实 AI 产品（暖舍、卦了么）+ 空间设计 + 视觉档案证明能力
4. 用「Design Lab」体现前沿实验性，形成差异化

**非目标（范围外）**：多语言切换、多页面、博客系统、后台管理。

## 2. 设计基调：白底科技杂志风

| 维度 | 决定 |
|---|---|
| 风格关键词 | 白底、科技感、编辑排版（editorial）、大标题、发丝线、网格秩序 |
| 主色 | 白 `#FFFFFF` / 墨黑 `#0B0B0F` / 电光蓝 `#1E5EFF` |
| 辅助色 | 灰 `#6B7280`、浅蓝底 `#EAF0FF`、发丝线 `#E5E7EB` |
| 字体 | 标题英文：Space Grotesk；正文中文：系统字体（PingFang SC / 微软雅黑）；编号/标签：等宽字体（JetBrains Mono，npm 引入，可选回退 monospace） |
| 版式 | 单栏，版心约 1400px；节与节之间用发丝线分隔；区块标签用等宽小字如 `01 / WORKS` |
| 动效 | 平滑锚点滚动、滚动渐显（沿用 Reveal）、hover 微交互（下划线滑动、图片缩放）；Hero 用浅蓝网格/光斑点缀，保持轻量 |
| 跑马灯 | 保留一条细窄跑马灯（`VISUAL DESIGN ✦ SPATIAL DESIGN ✦ AI PRODUCT ✦`），置于 Hero 与宣言之间（可选，可删） |

## 3. 信息架构（单页滚动）

```
Nav（吸顶毛玻璃）
├─ 01 Hero            名称 + 角色 + 双 CTA
├─ 02 Manifesto       定位宣言（短）
├─ 03 Selected Works  精选作品（3 件，杂志式交错排版）
├─ 04 Design Lab      实验板块（4 项，蓝色系区分）
├─ 05 Visual Archive  视觉档案（分类标签 + Masonry 图墙）
├─ 06 Capabilities    能力（2×2）
├─ 07 About Me        关于我（介绍 + 经历时间线）
└─ 08 Contact         联系（大标题 + Email + GitHub + 社交）
```

导航：`ZQW.`（品牌） + `WORKS / LAB / ABOUT / CONTACT` 四个锚点 + CTA。

## 4. 分节规格

### 4.1 Nav
- 左侧品牌 `ZQW●`（ZQW + 蓝色圆点）
- 右侧锚点链接 `WORKS / LAB / ABOUT / CONTACT`，滚动后吸顶、毛玻璃白底 + 底部发丝线
- 右上 CTA：`LET'S TALK ↗`

### 4.2 Hero
- 顶部小字（等宽）：`张倩雯 ZHANG QIANWEN — UI/UX DESIGNER · AI PRODUCT DESIGNER · SPATIAL DESIGN`（**在此处加入中文全名**）
- 巨型标题（杂志大字）：
  - `Hi, I'm ZQW.`（白底黑字）
  - `Design beyond the interface.`（`beyond the interface` 蓝色强调，可斜体）
- 中文段落（1 段）
- 按钮：`VIEW WORKS ↓`（实心黑/蓝） / `ABOUT ME`（描边）
- 底部滚动提示：`↓ 视觉作品 / 动态视觉`

### 4.3 Manifesto（定位宣言）
- 标签：`01 / ABOUT`
- 大标题：`More than visual.`
- 中文：`从视觉，到空间，再到数字产品。`
- 流程条（横向，发丝线分隔，等宽编号）：`VISUAL → SPATIAL → DIGITAL → AI`，每步一行小字说明

### 4.4 Selected Works（3 件）
杂志式交替排版（大图左右交替），每件：编号 + 中文名 + 英文名 + 标签行 + 描述 + `VIEW PROJECT ↗`。

1. **暖舍 / NUANSHE** — AI 室内渲染平台 — `AI PRODUCT · UX/UI · WEB DESIGN` — 横版产品截图
2. **卦了么 / GUALE** — AI 占卜体验 — `MOBILE APP · UX/UI · AI` — 竖版手机 UI（手机 mockup 容器）
3. **SPATIAL DESIGN** — 空间与室内设计 — `3D · INTERIOR · VISUALIZATION` — 3D 效果图大图

素材为空时渲染浅蓝底占位块（等宽标注 `IMAGE — 暖舍 NUANSHE`）。

### 4.5 Design Lab
白底上的「蓝调」区：浅蓝底 `#EAF0FF`，等宽标签 `LAB / 0n`，蓝色编号。
4 项（名称 + 中文说明 + 链接 ↗）：
1. AI Interior Workflow
2. AI Confidence Coach
3. Experimental Interfaces
4. Vibe Coding

### 4.6 Visual Archive
- 顶部一行小分类：`Brand / Logo / Exhibition / Packaging / Typography / Editorial / E-commerce`
- Masonry 瀑布流（CSS columns 实现），占位块用浅蓝/灰交替 + 等宽标签

### 4.7 Capabilities
- 2×2 网格：`UI/UX` `AI PRODUCT` `VISUAL` `SPATIAL`，黑白大字号 + 蓝色等宽编号 01–04，每格一句中文说明

### 4.8 About Me
- 中文自我介绍（2 段）
- 经历时间线（沿用现有样式结构，内容替换为真实履历占位，标注待用户补充）
- 社交入口：Behance / 站酷 / 小红书（保留）

### 4.9 Contact
- 标签：`07 / CONTACT`
- 大标题：`LET'S CREATE SOMETHING MEANINGFUL.`（`MEANINGFUL` 蓝色强调）
- 中文段落 + 联系方式列表（邮箱 / 微信 / QQ / 电话）+ GitHub + 社交平台
- 页脚：`© 2026 ZQW · Designed & Built by ZQW` + 回到顶部

## 5. 内容文案（草稿，待用户审阅）

### Hero
- kicker：`张倩雯 ZHANG QIANWEN — UI/UX DESIGNER · AI PRODUCT DESIGNER · SPATIAL DESIGN`
- titleA：`Hi, I'm ZQW.`
- titleB：`Design beyond the interface.`（强调 `beyond the interface`）
- 段落：`我是张倩雯（ZQW），一名 UI/UX 设计师、AI 产品设计师与空间设计师。我相信设计的边界不止于屏幕——从界面、到空间、再到 AI 体验，让技术被感知，让产品被记住。`
- CTA：`VIEW WORKS` / `ABOUT ME`
- 滚动提示：`↓ 视觉作品 / 动态视觉`

### Manifesto
- 标签：`01 / ABOUT`；标题：`More than visual.`
- 中文：`从视觉，到空间，再到数字产品。`
- 四步：
  - VISUAL — `视觉设计：让信息清晰、让品牌有型`
  - SPATIAL — `空间设计：用光、比例与材质构建体验`
  - DIGITAL — `数字产品：把复杂流程变成自然交互`
  - AI — `AI 产品：让生成式能力真正可用、可感`

### Selected Works
- 标签：`02 / SELECTED WORKS`；标题：`精选作品`；副标题：`从 AI 产品到空间体验，每一件都是「设计解决问题」的证明。`
- 01 暖舍 NUANSHE：
  - 描述：`为室内设计行业打造的 AI 渲染平台：上传户型与风格意向，秒级生成多版效果图。负责产品体验、界面系统与品牌视觉。`
  - 标签：`AI PRODUCT · UX/UI · WEB DESIGN`；年份：2025
- 02 卦了么 GUALE：
  - 描述：`一款融合传统占卜文化与生成式 AI 的移动体验。将玄学内容转化为有温度、可感知的数字交互。`
  - 标签：`MOBILE APP · UX/UI · AI`；年份：2025
- 03 SPATIAL DESIGN：
  - 描述：`从概念到效果图的空间设计实践：用光、材质与比例，构建有情绪的空间叙事。`
  - 标签：`3D · INTERIOR · VISUALIZATION`；年份：2024–至今

### Design Lab
- 标签：`03 / DESIGN LAB`；标题：`设计实验室`；副标题：`正式项目之外，我持续探索 AI 与设计的边界。`
- 01 AI Interior Workflow — `AI 室内设计工作流：从概念到效果图的生成式流程实验`
- 02 AI Confidence Coach — `AI 自信教练：用对话式 AI 帮助用户建立表达自信的产品实验`
- 03 Experimental Interfaces — `实验性界面：突破常规的交互与界面形态研究`
- 04 Vibe Coding — `氛围编程：用自然语言与 AI 协作，快速搭建可交互原型`

### Visual Archive
- 标签：`04 / VISUAL ARCHIVE`；标题：`视觉档案`
- 分类：`Brand / Logo / Exhibition / Packaging / Typography / Editorial / E-commerce`

### Capabilities
- 标签：`05 / CAPABILITIES`；标题：`能力`
- 01 UI/UX — `界面与体验设计，从调研、流程到高保真落地`
- 02 AI PRODUCT — `AI 产品的体验设计、提示词工程与生成式工作流`
- 03 VISUAL — `品牌视觉、平面与动态视觉设计`
- 04 SPATIAL — `空间与室内设计，从概念到可视化效果图`

### About Me
- 标签：`06 / ABOUT ME`；标题：`关于我`
- 段落 1：`你好，我是张倩雯（ZQW），一名横跨界面、空间与 AI 产品的设计师。我习惯从问题出发，而不是从风格出发——先弄清楚「为什么」，再决定「长什么样」。`
- 段落 2：`过去几年里，我参与并主导了 AI 产品、移动应用与空间设计项目，也持续用 Design Lab 里的实验保持对新技术的好奇。`
- 时间线：**占位条目（待用户补充真实经历）**——保留现有时间线结构，内容替换为用户真实履历。

### Contact
- 标签：`07 / CONTACT`
- 标题：`LET'S CREATE SOMETHING MEANINGFUL.`（`MEANINGFUL` 蓝色）
- 段落：`目前开放 UI/UX、AI 产品与空间设计合作。聊聊你的想法？`
- 邮箱 Email：`hello@zqw.design`（**占位，待用户确认**）
- 微信 WeChat：`zqw_design`（**占位，待用户确认**）
- QQ：`123456789`（**占位，待用户确认**）
- 电话：`+86 138-0000-0000`（**占位，待用户确认**）
- GitHub：`github.com/zqw`（**占位，待用户确认**）
- 社交：Behance / 站酷 / 小红书（保留）
- 页脚：`© 2026 ZQW · Designed & Built by ZQW`

## 6. 技术方案

- 沿用 React 18 + Vite 6 + Space Grotesk（本地打包）；新增 JetBrains Mono 等宽字体（npm）
- `src/content/site.js` 整体重写为新数据结构（含素材 src 字段）
- 组件调整：
  - 保留：Nav、Hero、Marquee（可选）、About（改 About Me）、Contact、Reveal
  - 改造：Projects → Selected Works（杂志交错排版）
  - 新增：Manifesto、DesignLab、VisualArchive、Capabilities
  - 移除/停用：ParticleField（白底风格不适用），可替换为浅蓝网格/光斑装饰
- 样式：`src/styles/global.css` 定义设计令牌（色板/字体/间距）；组件 CSS 重写
- 占位素材策略：每个图片字段允许 `src: ''`，为空时渲染浅蓝底占位块（等宽标签），用户后续替换为 `public/images/...` 真实文件

## 7. 开放项（待用户提供/确认）

1. 真实素材文件路径与命名（建议放 `public/images/`：`works/nuanshe.png`、`works/guale.png`、`works/spatial-*.jpg`、`archive/*.jpg`）
2. 真实联系方式：邮箱、微信、QQ、电话、GitHub
3. 真实经历时间线内容
4. 项目详情链接（`VIEW PROJECT` 跳转目标）
5. 社交平台链接（Behance / 站酷 / 小红书）
6. 跑马灯文案是否保留

## 8. 验收标准

- `pnpm build` 通过
- 单页滚动、锚点导航、滚动渐显正常
- 全部占位块在无素材时排版完整、不破版
- 白底科技杂志风：黑白蓝、发丝线、等宽标签、大标题
- 中文全名「张倩雯」出现在 Hero kicker（合适位置）
