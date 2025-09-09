const { test, expect } = require('@playwright/test');
test('Amazon shopping test', async ({ page }) => {
// Navigate to Amazon
await page.goto('https://www.amazon.com/');
// Handle cookie consent if present
try {
await page.click('input[data-cel-widget="sp-cc-accept"]', { timeout: 100000 });
console.log('Cookie consent accepted');
} catch (error) {
console.log('No cookie consent found');
}
// Search for wireless headphones
await page.click('#twotabsearchtextbox');
await page.fill('#twotabsearchtextbox', 'wireless headphones');
await page.click('#nav-search-submit-button');
// Wait for search results
await page.waitForSelector('[data-component-type="s-search-result"]');
// Click on first product
await page.click('[data-component-type="s-search-result"]:first-child h2 a');
// Wait for product page
await page.waitForSelector('#productTitle');
// Go to cart
await page.click('#nav-cart');
// Verify cart has items
});