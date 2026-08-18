/* 临时截图脚本：启动 vite preview，用 Edge 无头模式截图 */
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const NODE = 'C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const PW = 'C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright';
const OUT = path.join(__dirname, '..', 'screenshots');
const PORT = 4173;

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch (_) {}
    await new Promise((r) => setTimeout(r, 400));
  }
  return false;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });

  const server = spawn(NODE, ['node_modules/vite/bin/vite.js', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: path.join(__dirname, '..'),
    stdio: 'ignore',
    windowsHide: true,
  });

  const base = `http://localhost:${PORT}/`;
  if (!(await waitForServer(base))) {
    console.error('server did not start');
    server.kill();
    process.exit(1);
  }
  console.log('server up');

  const { chromium } = require(PW);
  const browser = await chromium.launch({
    executablePath: EDGE,
    headless: true,
    args: ['--disable-gpu', '--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto(base, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2200); // 等首屏动画

  await page.screenshot({ path: path.join(OUT, '01-hero.png') });
  await page.evaluate(() => window.scrollTo(0, 0));

  // 依次滚动到各区块，等待 reveal 动画
  const sections = [
    ['#about', '02-about.png'],
    ['#works', '03-projects.png'],
    ['#strengths', '04-strengths.png'],
    ['#contact', '05-contact.png'],
  ];
  for (const [sel, file] of sections) {
    await page.locator(sel).scrollIntoViewIfNeeded();
    await page.waitForTimeout(1600);
    await page.locator(sel).screenshot({ path: path.join(OUT, file) });
  }

  // 整页长截图
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, '00-full.png'), fullPage: true });

  await browser.close();
  server.kill();
  console.log('done -> ' + OUT);
  process.exit(0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});