const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  
  const ajaxRequests = await Promise.all([
    page.waitForResponse(response => response.request().url().startsWith('https://example.com/ajax')),
    page.waitForResponse(response => response.request().url().startsWith('https://example.com/api'))
  ]);
  
  console.log(ajaxRequests.length); // prints the number of Ajax requests made
  
  await browser.close();
})();
