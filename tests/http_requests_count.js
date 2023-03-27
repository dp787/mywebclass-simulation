const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');
  
  const paintTiming = await page.evaluate(() => {
    return window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  });

  console.log(`Paint timing: ${paintTiming} ms`);

  await browser.close();
})();
