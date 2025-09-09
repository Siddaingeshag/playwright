import { test } from '@playwright/test';

test('Lab 4: Multiple Navigations in One Test', async ({ page }) => {
  // navigate ro plawright
  await page.goto("https://playwright.dev");
  const title1 = await page.title();
  console.log("Playwright Title:", title1);

  // navigate to Wikipedia
  await page.goto("https://www.wikipedia.org/");
  const title2 = await page.title();
  console.log("Wikipedia Title:", title2);

  // navigate to Google
  await page.goto("https://www.google.com");
  const title3 = await page.title();
  console.log("Google Title:", title3);
});