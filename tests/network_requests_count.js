const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  
  const requests = await page.waitForRequestFinished();
  console.log(requests.length); // prints the number of requests made
  
  await browser.close();
})();
