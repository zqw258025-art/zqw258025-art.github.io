/* 客观验证脚本：检查布局、溢出、控制台错误、reveal 动画等 */
const { spawn } = require('node:child_process');
const path = require('node:path');

const NODE = 'C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const PW = 'C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright';
const PORT = 4174;

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try { const r = await fetch(url); if (r.ok) return true; } catch (_) {}
    await new Promise((r) => setTimeout(r, 400));
  }
  return false;
}

(async () => {
  const server = spawn(NODE, ['node_modules/vite/bin/vite.js', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: path.join(__dirname, '..'), stdio: 'ignore', windowsHide: true,
  });
  if (!(await waitForServer(`http://localhost:${PORT}/`))) { console.error('no server'); process.exit(1); }

  const { chromium } = require(PW);
  const browser = await chromium.launch({ executablePath: EDGE, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => consoleErrors.push('PAGEERROR: ' + e.message));

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1800);

  const report = await page.evaluate(() => {
    const out = {};
    const vw = window.innerWidth;
    out.viewport = `${vw} x ${window.innerHeight}`;
    out.horizontalOverflow = document.body.scrollWidth > vw;
    out.scrollWidth = document.body.scrollWidth;
    const container = document.querySelector('.container');
    out.containerWidth = container ? Math.round(container.getBoundingClientRect().width) : null;
    out.containerMax = container ? getComputedStyle(container).maxWidth : null;

    const sections = [...document.querySelectorAll('main section, .contact')].map((s) => ({
      id: s.id,
      h: Math.round(s.getBoundingClientRect().height),
    }));
    out.sections = sections;

    const hero = document.querySelector('#home');
    out.heroHeight = hero ? Math.round(hero.getBoundingClientRect().height) : null;
    const title = document.querySelector('.hero-title');
    out.heroTitleFont = title ? getComputedStyle(title).fontSize : null;
    const h1Text = title ? title.innerText.replace(/\s+/g, ' ').trim() : null;
    out.heroTitleText = h1Text;

    out.stuckReveals = document.querySelectorAll('.reveal:not(.is-in)').length;
    out.canvasCount = document.querySelectorAll('canvas.particle-field').length;
    out.fontsReady = document.fonts.status;

    // nav 状态
    const nav = document.querySelector('.nav');
    out.navHeight = nav ? Math.round(nav.getBoundingClientRect().height) : null;

    // 背景色
    out.bodyBg = getComputedStyle(document.body).backgroundColor;

    // 跑马灯
    const marquee = document.querySelector('.marquee-track');
    out.marqueeAnimation = marquee ? getComputedStyle(marquee).animationName : null;
    return out;
  });

  // 滚动到底再查 reveal
  await page.evaluate(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
  });
  await page.waitForTimeout(1200);
  const afterScroll = await page.evaluate(() => ({
    stuckReveals: document.querySelectorAll('.reveal:not(.is-in)').length,
    pageHeight: document.body.scrollHeight,
  }));

  console.log(JSON.stringify({ report, afterScroll, consoleErrors }, null, 2));
  await browser.close();
  server.kill();
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });