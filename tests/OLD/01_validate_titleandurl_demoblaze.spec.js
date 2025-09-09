import { test, expect } from '@playwright/test'
 
test('Validate page title and URL', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 
  const actualTitle = await page.title();
  const actualUrl = page.url();
 
  const expectedTitle = "STORE";
  const expectedUrl = "https://www.demoblaze.com/";
 
  expect(actualTitle).toBe(expectedTitle);
  expect(actualUrl).toBe(expectedUrl);
});