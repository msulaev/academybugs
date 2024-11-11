import { Locator, Page, test } from '@playwright/test';

export async function clickTo(page: Page, locator: Locator): Promise<void> {
  const description = `Click to element: ${locator}`;
  await test.step(description, async () => {
    await locator.click();
  });
}
