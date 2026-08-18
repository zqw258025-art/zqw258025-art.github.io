# Lin Yi — 个人作品集网站

视觉设计师 / AI 设计师 / 品牌设计师的个人作品集。React + Vite 构建，暗色高级风。

## 本地运行

```bash
pnpm install
pnpm dev        # 开发预览 http://localhost:5173
pnpm build      # 生产构建，输出到 dist/
pnpm preview    # 预览生产构建
```

> 没有 pnpm 也可以使用 npm：`npm install` / `npm run dev`。

## 如何替换成你自己的内容

所有文案、链接、数据都集中在 **`src/content/site.js`** 一个文件里，改这里即可，不需要动组件代码：

- 姓名 / 职位 / 介绍 / 联系方式 / 社交链接
- 项目数据（标题、描述、分类、年份、标签、封面配色）
- 个人优势卡片
- 项目数据（年数、项目数、奖项数、客户数）

## 视频背景

Hero 支持视频背景：把视频命名为 `hero.mp4` 放到 `public/videos/` 目录，
然后在 `src/content/site.js` 中把 `hero.video.enabled` 设为 `true`。
没有视频时，会自动使用内置的粒子动效背景（Canvas 绘制）。

## 头像

把头像图片放到 `public/images/avatar.jpg`，并在 `src/content/site.js` 中设置
`about.avatar.src = '/images/avatar.jpg'`。未设置时会显示字母 Logo 占位。

## 技术栈

- React 18 + Vite 6
- Space Grotesk 可变字体（本地打包，离线可用），中文回退系统字体
- 滚动渐显动画（IntersectionObserver）、粒子背景（Canvas）
- 版心约 1700px，主要面向 PC 端