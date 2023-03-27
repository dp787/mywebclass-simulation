const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  
  const xhrRequests = await Promise.all([
    page.waitForEvent('request', request => request.url().startsWith('https://example.com/api'))
  ]);
  
  console.log(xhrRequests.length); // prints the number of XHR requests made
  
  await browser.close();
})();
