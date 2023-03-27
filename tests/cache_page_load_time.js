const { test, expect } = require('@playwright/test');

test('Cached page load time', async ({ page }) => {
  await page.goto('https://www.example.com');
  const response = await page.goto('https://www.example.com', { waitUntil: 'networkidle' });
  expect(response.timing.domContentLoadedEventEnd - response.timing.navigationStart).toBeLessThan(2000);
});
