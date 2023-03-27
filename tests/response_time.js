const { chromium } = require('playwright');

describe('Website response time', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://example.com/');
  });

  afterEach(async () => {
    await page.close();
  });
