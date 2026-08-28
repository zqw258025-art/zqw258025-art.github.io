/* Resume 页专项验证：/resume 在桌面/平板/手机三视口下的溢出、控制台错误与截图 */
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const NODE = 'C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const PW = 'C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright';
const OUT = path.join(__dirname, '..', 'screenshots');
const PORT = 4175;
const VIEWPORTS = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 },
];

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try { const r = await fetch(url); if (r.ok) return true; } catch (_) {}
    await new Promise((r) => setTimeout(r, 400));
  }
  return false;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const server = spawn(NODE, ['node_modules/vite/bin/vite.js', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: path.join(__dirname, '..'), stdio: 'ignore', windowsHide: true,
  });
  if (!(await waitForServer(`http://localhost:${PORT}/resume`))) {
    console.error('no server'); server.kill(); process.exit(1);
  }

  const { chromium } = require(PW);
  const browser = await chromium.launch({ executablePath: EDGE, headless: true, args: ['--no-sandbox'] });
  const results = [];

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    const consoleErrors = [];
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
    page.on('pageerror', (e) => consoleErrors.push('PAGEERROR: ' + e.message));

    await page.goto(`http://localhost:${PORT}/resume`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);

    const data = await page.evaluate(() => ({
      path: window.location.pathname,
      horizontalOverflow: document.body.scrollWidth > window.innerWidth,
      scrollWidth: document.body.scrollWidth,
      sections: [...document.querySelectorAll('.resume-section')].length,
      placeholders: [...document.querySelectorAll('.resume-placeholder')].map((el) => el.textContent.trim()),
      name: (document.querySelector('.resume-name') || {}).textContent || null,
      backLinks: [...document.querySelectorAll('.resume-back')].length,
    }));

    await page.screenshot({ path: path.join(OUT, `resume-${vp.name}.png`), fullPage: true });
    results.push({ viewport: vp.name, ...data, consoleErrors });
    await page.close();
  }

  console.log(JSON.stringify(results, null, 2));
  await browser.close();
  server.kill();
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
