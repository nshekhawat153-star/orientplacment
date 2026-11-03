const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function capture() {
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3005', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1500));

  console.log('Capturing full page screenshot...');
  await page.screenshot({
    path: path.join(screenshotsDir, 'full_page.png'),
    fullPage: true
  });

  const sections = [
    { id: '#hero', name: '01_hero.png', offset: 0 },
    { id: '#founders', name: '02_founders.png', offset: 110 },
    { id: '#services', name: '03_services.png', offset: 110 },
    { id: '#industries', name: '04_industries.png', offset: 110 },
    { id: '#process', name: '05_process.png', offset: 110 },
    { id: '#why-orion', name: '06_why_orion.png', offset: 110 },
    { id: '#roi-calculator', name: '07_roi_calculator.png', offset: 110 },
    { id: '#testimonials', name: '08_testimonials.png', offset: 110 },
    { id: '#playbook', name: '09_playbook.png', offset: 110 },
    { id: '#faq', name: '10_faq.png', offset: 110 },
    { id: '#final-cta', name: '11_final_cta.png', offset: 110 }
  ];

  for (const s of sections) {
    try {
      const found = await page.evaluate((id, offset) => {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const targetY = window.pageYOffset + rect.top - offset;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'instant' });
          return true;
        }
        return false;
      }, s.id, s.offset);

      if (found) {
        await new Promise(r => setTimeout(r, 800));
        await page.screenshot({
          path: path.join(screenshotsDir, s.name)
        });
        console.log(`Captured ${s.name}`);
      } else {
        console.warn(`Could not find selector ${s.id}`);
      }
    } catch (e) {
      console.error(`Error capturing ${s.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('Finished capturing all precision screenshots.');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
