import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(120_000);  // 120 seconds
  await page.goto('https://www.myntra.com/');
  await page.getByRole('textbox', { name: 'Search for products, brands' }).click();
  await page.getByRole('textbox', { name: 'Search for products, brands' }).fill('pants men');
  await page.getByRole('textbox', { name: 'Search for products, brands' }).press('Enter');
  await page.getByText('Sort by :').click();
  await page.getByText('Price: High to Low').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Men Slim Fit Mid-Rise Heavy Fade Jeans Jacob Cohen Sizes: 34 Rs. 72000 Only Few Left!', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'Delivery Options' }).click();
});