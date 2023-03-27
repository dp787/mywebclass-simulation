const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  
  const assetRequests = await Promise.all([
    page.waitForRequest(request => request.url().endsWith('.js')),
    page.waitForRequest(request => request.url().endsWith('.css'))
  ]);
  
  console.log(assetRequests.length); // prints the number of asset requests made
  
  await browser.close();
})();
