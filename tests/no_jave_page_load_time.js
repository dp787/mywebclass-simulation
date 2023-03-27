const { test, expect } = require('@playwright/test');

test('JavaScript disabled load time', async ({ page }) => {
  await page.setJavaScriptEnabled(false);

  const response = await page.goto('https://www.example.com');
  expect(response.timing.domContentLoadedEventEnd - response.timing.navigationStart).toBeLessThan(5000);
});
