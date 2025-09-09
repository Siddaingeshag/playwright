import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://nodejs.org/en');
  await page.getByRole('button', { name: 'Get Node.js®' }).click();
});