const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  
  const specificRequests = await Promise.all([
    page.waitForRequest(request => request.url().includes('/specific')),
    page.waitForRequest(request => request.url().includes('/specific2'))
  ]);
  
  console.log(specificRequests.length); // prints the number of specific requests made
  
  await browser.close();
})();
