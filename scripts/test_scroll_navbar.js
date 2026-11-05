const puppeteer = require('puppeteer-core');
const path = require('path');

async function testVisuals() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));

  // 1. Top of page (large navbar + hero with right-side visible photo & gradient)
  await page.screenshot({ path: path.join(__dirname, '..', 'screenshots', '01_hero_gradient_top.png') });
  console.log('Captured 01_hero_gradient_top.png');

  // 2. Scroll down 400px to test shrunk navbar
  await page.evaluate(() => window.scrollTo(0, 400));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, '..', 'screenshots', '02_navbar_scrolled.png') });
  console.log('Captured 02_navbar_scrolled.png');

  // 3. Wait for placement toast in bottom right
  await new Promise(r => setTimeout(r, 3500));
  await page.screenshot({ path: path.join(__dirname, '..', 'screenshots', '03_bottom_right_toast.png') });
  console.log('Captured 03_bottom_right_toast.png');

  await browser.close();
  console.log('Visual verification complete!');
}

testVisuals().catch(console.error);
