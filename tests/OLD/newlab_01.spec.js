// walmart-shopping.spec.js
const { test, expect } = require('@playwright/test');
test('Walmart shopping journey', async ({ page }) => {
test.setTimeout(90000);
// Navigate to Walmart
await page.goto('https://www.walmart.com/');
console.log('1. Walmart homepage loaded');
// Handle location popup if present
try {
await page.click('button:has-text("Continue"):visible', { timeout: 5000 });
console.log('2. Handled location popup');
} catch (error) {
console.log('2. No location popup found');
}
// Search for laptops
await page.fill('input[name="q"]', 'gaming laptops');
await page.click('button[type="submit"]');
console.log('3. Searched for gaming laptops');
// Wait for search results
await page.waitForSelector('[data-item-id]');
console.log('4. Search results loaded');
// Apply price filter
await page.click('button:has-text("Price")');
await page.fill('input[aria-label="Minimum Value, US Dollar"]', '500');
await page.fill('input[aria-label="Maximum Value, US Dollar"]', '1500');
await page.click('button:has-text("Apply")');
console.log('5. Applied price filter ($500-$1500)');
// Wait for filtered results
await page.waitForTimeout(3000);
console.log('6. Filters applied');
// Sort by price low to high
await page.selectOption('select[aria-label="Sort By"]', 'price_low');
console.log('7. Sorted by price: low to high');
// Click on first product
const firstProduct = await page.$('[data-item-id]:first-child a');
await firstProduct.click();
console.log('8. Clicked on first product');
// Wait for product page
await page.waitForSelector('h1[itemprop="name"]');
console.log('9. Product page loaded');
// Check product details
const productTitle = await page.textContent('h1[itemprop="name"]');
console.log('10. Product:', productTitle?.trim());
// Check shipping options
await page.click('button:has-text("Shipping")');
await page.waitForSelector('text="FREE delivery"');
console.log('11. Shipping options checked');
// Take screenshot
await page.screenshot({ path: 'walmart-product.png' });
console.log('12. Screenshot saved');
// Verify we're on product page
expect(await page.title()).toContain('Laptop');
console.log('13. Page title verified');
});

console.log('Walmart shopping test ready!');
