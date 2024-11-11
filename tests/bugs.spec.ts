import { expect, test } from '../fixtures/fixture';
import { Currency } from '../types/currency';

test('Change pagination', async ({ pm }) => {
  await pm.mainPage.visit();
  await pm.mainPage.shouldBeOpened();
  await pm.mainPage.clickToPagination50();
  await expect(pm.errorComponent.errorOverlay).toContainText(
    'You found a crash bug, examine the page for',
  );
});

test('Change currency', async ({ pm }) => {
  await pm.mainPage.visit();
  await pm.mainPage.shouldBeOpened();
  await pm.mainPage.clickToItem();
  await pm.itemPage.changeCurrency(Currency.GBP);
  await expect(pm.errorComponent.errorInfo).toContainText(
    'You found a crash bug, examine the page for',
  );
});

test('Login with incorrect email', async ({ pm }) => {
  await pm.mainPage.visit();
  await pm.mainPage.shouldBeOpened();
  await pm.mainPage.acceptCookies();
  await pm.mainPage.clickToItem();
  await pm.itemPage.fillEmail('test');
  await pm.itemPage.clickSignButton();
  await expect(pm.errorComponent.errorModal).toContainText('Awesome');
});

test('Change quantity of item', async ({ pm }) => {
  await pm.mainPage.visit();
  await pm.mainPage.shouldBeOpened();
  await pm.mainPage.acceptCookies();
  await pm.mainPage.clickToItem();
  await pm.itemPage.clickAddToCartButton();
  await pm.cartPage.changeQuantity(3);
  await expect(pm.errorComponent.errorModal).toContainText('Awesome');
});

test('Post comment in item', async ({ pm }) => {
  await pm.mainPage.visit();
  await pm.mainPage.shouldBeOpened();
  await pm.mainPage.clickToItem();
  await pm.itemPage.clickSubmitButton();
  await expect(pm.errorComponent.errorInfo).toContainText(
    'You found a crash bug, examine the page for',
  );
});
