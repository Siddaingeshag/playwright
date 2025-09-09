import { test, expect } from '@playwright/test';

test('Lab 8 - GitHub Homepage', async ({ page }) => {
  await page.goto('https://github.com/');
  console.log('Title:', await page.title());
  console.log('URL:', page.url());
  await expect(page).toHaveTitle("Build and ship software on a single, collaborative platform · GitHub");
});