const puppeteer = require('puppeteer-core');
const path = require('path');

async function testMobile() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(__dirname, '..', 'screenshots', 'mobile_hero.png') });
  console.log('Captured mobile_hero.png');

  // Click mobile hamburger menu
  const menuBtn = await page.$('button[aria-label="Open Mobile Navigation Menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '..', 'screenshots', 'mobile_drawer.png') });
    console.log('Captured mobile_drawer.png');
  }

  await browser.close();
  console.log('Mobile test complete.');
}

testMobile().catch(console.error);
