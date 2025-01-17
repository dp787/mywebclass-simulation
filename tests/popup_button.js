const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');
  await page.click('button#popup-trigger');

  const popup = await page.waitForSelector('div#popup');
  expect(await popup.isVisible()).toBe(true);

  await browser.close();
})();
