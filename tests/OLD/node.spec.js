import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://nodejs.org/en');
  await page.getByRole('heading', { name: 'Run JavaScript Everywhere' }).click();
  await page.getByRole('heading', { name: 'Run JavaScript Everywhere' }).click();
});