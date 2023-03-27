const { test, expect } = require('@playwright/test');

test('Specific page load time', async ({ page }) => {
  const response = await page.goto('https://www.example.com/page');
  expect(response.timing.domContentLoadedEventEnd - response.timing.navigationStart).toBeLessThan(5000);
});
