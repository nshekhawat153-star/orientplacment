const puppeteer = require('puppeteer-core');
const path = require('path');

async function capturePrototype() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }
  });
  const page = await browser.newPage();
  await page.goto('https://orionplacement-site-prototype.vercel.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  // Full page screenshot
  await page.screenshot({ path: path.join(__dirname, '..', 'screenshots', 'prototype_full.png'), fullPage: true });
  console.log('Captured prototype_full.png');

  // Hero viewport
  await page.screenshot({ path: path.join(__dirname, '..', 'screenshots', 'prototype_hero.png') });
  console.log('Captured prototype_hero.png');

  await browser.close();
  console.log('Prototype capture complete.');
}

capturePrototype().catch(console.error);
