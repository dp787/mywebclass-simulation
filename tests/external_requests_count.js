const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  
  const externalRequests = await Promise.all([
    page.waitForRequest(request => !request.url().startsWith('https://example.com'))
  ]);
  
  console.log(externalRequests.length); // prints the number of external requests made
  
  await browser.close();
})();
