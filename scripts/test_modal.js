const puppeteer = require('puppeteer-core');
const path = require('path');

async function testModal() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3005/homepage2', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));

  // Click on "Request profile" button of first candidate
  const btns = await page.$$('button');
  let clicked = false;
  for (const btn of btns) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('Request profile')) {
      await btn.click();
      clicked = true;
      console.log('Clicked Request profile button');
      break;
    }
  }

  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, '..', 'screenshots', 'home2_modal_open.png') });
  console.log('Captured home2_modal_open.png');

  await browser.close();
}

testModal().catch(console.error);
