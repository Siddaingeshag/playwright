import { test, expect } from '@playwright/test';

test('Lab 7 - Navigate and Check Page Content', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.locator('h1')).toHaveText(/Welcome to the-internet/);
});