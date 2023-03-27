const { test, expect } = require('@playwright/test');

test('Homepage load time', async ({ page }) => {
  const response = await page.goto('https://www.example.com');
  expect(response.timing.domContentLoadedEventEnd - response.timing.navigationStart).toBeLessThan(5000);
});
