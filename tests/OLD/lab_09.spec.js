import { test, expect } from '@playwright/test';

test('Lab 9 - BBC News Homepage', async ({ page }) => {
  await page.goto('https://www.bbc.com/news');
  await expect(page).toHaveURL('https://www.bbc.com/news');
  console.log('Page Title:', await page.title());
});