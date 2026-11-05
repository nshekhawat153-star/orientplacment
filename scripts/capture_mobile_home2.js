const puppeteer = require('puppeteer-core');
const path = require('path');

async function captureMobileHome2() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3005/homepage2', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));

  const screenshotsDir = path.join(__dirname, '..', 'screenshots');

  // Mobile hero
  await page.screenshot({ path: path.join(screenshotsDir, 'home2_mobile_hero.png') });
  console.log('Captured home2_mobile_hero.png');

  await browser.close();
}

captureMobileHome2().catch(console.error);
