import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Women' }).click();
  await expect(page.locator('#desktop-header-cnt').getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Categories To Bag');
  await page.getByRole('textbox', { name: 'Search for products, brands' }).click();
  await expect(page.getByRole('textbox', { name: 'Search for products, brands' })).toBeEmpty();
 // await page.locator('#desktop-header-cnt').getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
 // await expect(page.locator('[id="29132510"]')).toMatchAriaSnapshot(`- text: wishlist`);
});