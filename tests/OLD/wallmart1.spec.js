import { test, expect } from '@playwright/test';

test('Walmart Shopping Journey', async ({ page }) => {
  // Set longer timeout for demo purposes
  test.setTimeout(60_000);  // 60 seconds

  // 1. Navigate to Walmart
  await page.goto('https://www.walmart.com/');
  console.log('1. Navigated to Walmart homepage');

  // 2. Search for "laptops"
  await page.locator('input[aria-label="Search Walmart.com"]').fill('laptops');
  await page.locator('button[aria-label="Search"]').click();
  console.log('2. Searched for laptops');

  // 3. Apply price range filter (example: $300 - $600)
  await page.getByRole('button', { name: 'Price' }).click();
  await page.getByLabel('Min').fill('300');
  await page.getByLabel('Max').fill('600');
  await page.getByRole('button', { name: 'Apply' }).click();
  console.log('3. Applied price range filter: $300 - $600');

  // 4. Apply brand filter (example: HP)
  await page.getByRole('button', { name: 'Brand' }).click();
  await page.getByLabel('HP').check();
  console.log('4. Applied brand filter: HP');

  // 5. Sort results by "Best sellers"
  await page.getByLabel('Sort by').selectOption({ label: 'Best sellers' });
  console.log('5. Sorted results by Best sellers');

  // 6. Click first product in results
  const firstProduct = page.locator('[data-item-id]').first();
  await firstProduct.click();
  console.log('6. Clicked first product in search results');

  // 7. View product details page
  await expect(page).toHaveURL(/\/ip\//);
  console.log('7. Product details page loaded');

  // 8. Check shipping options
  await page.getByText(/Shipping/).first().click();
  console.log('8. Checked shipping options');
});
