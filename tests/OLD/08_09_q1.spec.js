import { test, expect } from '@playwright/test';
test.setTimeout(120000);
test('test', async ({ page }) => {
// Navigate to the Alerts demo pag
await page.goto('https://demoqa.com/alerts');
// Locate the page heading (role="heading")
// Playwright automatically finds the first heading on the page
// Verification Point
// Assert that the heading contains the text "Alerts"
// This confirms that the correct page has loadd
await expect(page.getByRole('heading')).toContainText('Alerts');
});
