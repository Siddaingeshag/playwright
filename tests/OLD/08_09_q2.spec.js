/*import { test, expect } from '@playwright/test';

test('drag and drop using locator', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

  const columnA = page.locator('#column-a');
  const columnB = page.locator('#column-b');

  await columnA.dragTo(columnB);
  await page.mouse.move(100, 100);
  await page.mouse.down();
  await page.mouse.move(200, 100)

});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/key_presses');
  await page.locator('#target').click();
  await page.locator('#target').fill('A');
  await page.locator('#target').press('ArrowDown');
  await page.locator('#target').press('ArrowDown');
  await page.locator('#target').click();
  await page.locator('#target').fill('Hello World!');
  await page.locator('#target').press('PageDown');
});
*/
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  await expect(page.locator('frame').first().contentFrame().locator('form[name="name1"]')).toContainText('Frame1');
  await expect(page.locator('frame').nth(2).contentFrame().getByRole('textbox')).toBeEmpty();
  await expect(page.locator('frame').nth(2).contentFrame().getByRole('textbox')).toBeEmpty();
  await expect(page.locator('frame').nth(1).contentFrame().getByRole('textbox')).toBeEmpty();
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').fill('Hello world');
  await expect(page.locator('frame').nth(3).contentFrame().getByRole('textbox')).toBeVisible();
  await expect(page.locator('frame').nth(1).contentFrame().getByText('Frame2')).toBeVisible();
});