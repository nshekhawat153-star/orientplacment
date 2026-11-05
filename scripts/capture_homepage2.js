const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

async function captureHomepage2() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }
  });
  const page = await browser.newPage();
  console.log('Navigating to http://localhost:3005/homepage2...');
  await page.goto('http://localhost:3005/homepage2', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  const screenshotsDir = path.join(__dirname, '..', 'screenshots');

  // Hero viewport
  const heroPath = path.join(screenshotsDir, 'home2_hero.png');
  await page.screenshot({ path: heroPath });
  console.log('Captured home2_hero.png');

  // Full page screenshot
  const fullPath = path.join(screenshotsDir, 'home2_full.png');
  await page.screenshot({ path: fullPath, fullPage: true });
  console.log('Captured home2_full.png');

  await browser.close();

  // Slice home2_full.png into 6 slices to inspect
  const meta = await sharp(fullPath).metadata();
  console.log(`Full page image dimensions: ${meta.width}x${meta.height}`);

  const sliceHeight = Math.floor(meta.height / 6);
  for (let i = 0; i < 6; i++) {
    const top = i * sliceHeight;
    const height = (i === 5) ? (meta.height - top) : sliceHeight;
    const outPath = path.join(screenshotsDir, `home2_slice_${i+1}.png`);
    await sharp(fullPath)
      .extract({ left: 0, top: top, width: meta.width, height: height })
      .toFile(outPath);
    console.log(`Saved home2_slice_${i+1}.png`);
  }

  console.log('Capture and slicing complete.');
}

captureHomepage2().catch(console.error);
