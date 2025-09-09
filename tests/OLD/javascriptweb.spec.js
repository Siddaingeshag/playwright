import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.getByRole('heading', { name: 'JavaScript Alerts' }).click();
  await expect(page.getByRole('button', { name: 'Click for JS Alert' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  await expect(page.getByRole('button', { name: 'Click for JS Confirm' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  await expect(page.locator('#result')).toContainText('You clicked: Ok');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  await expect(page.locator('#result')).toContainText('You clicked: Cancel');
  await expect(page.getByRole('list')).toContainText('Click for JS Prompt');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  await expect(page.locator('#result')).toContainText('You entered: siddu');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
});