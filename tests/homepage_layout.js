const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');
  const header = await page.waitForSelector('div#header');
  const main = await page.waitForSelector('div#main');
  const footer = await page.waitForSelector('div#footer');

  expect(await header.isVisible()).toBe(true);
  expect(await main.isVisible()).toBe(true);
  expect(await footer.isVisible()).toBe(true);

  await browser.close();
})();
