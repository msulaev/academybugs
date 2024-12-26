import { expect, test } from '../../fixtures/fixture';
import { Currency } from '../../types/currency';

test.describe('Academybugs', () => {
  test.use({ allureMeta: { epic: 'Academybugs', feature: 'Bugs' } });

  test('Change pagination @allure.id:35503', async ({ pm }) => {
    await pm.mainPage.visit();
    await pm.mainPage.shouldBeOpened();
    await pm.mainPage.clickToPagination50();
    await expect(pm.errorComponent.errorOverlay).toContainText(
      'You found a crash bug, examine the page for',
    );
  });

  test('Change currency @allure.id:35504', async ({ pm }) => {
    await pm.mainPage.visit();
    await pm.mainPage.shouldBeOpened();
    await pm.mainPage.clickToItem();
    await pm.itemPage.changeCurrency(Currency.GBP);
    await expect(pm.errorComponent.errorInfo).toContainText(
      'You found a crash bug, examine the page for',
    );
  });

  test('Login with incorrect email @allure.id:35505', async ({ pm }) => {
    await pm.mainPage.visit();
    await pm.mainPage.shouldBeOpened();
    await pm.mainPage.acceptCookies();
    await pm.mainPage.clickToItem();
    await pm.itemPage.fillEmail('test');
    await pm.itemPage.clickSignButton();
    await expect(pm.errorComponent.errorModal).toContainText('Awesome');
  });

  test('Change quantity of item @allure.id:35506', async ({ pm }) => {
    await pm.mainPage.visit();
    await pm.mainPage.shouldBeOpened();
    await pm.mainPage.acceptCookies();
    await pm.mainPage.clickToItem();
    await pm.itemPage.clickAddToCartButton();
    await pm.cartPage.changeQuantity(3);
    await expect(pm.errorComponent.errorModal).toContainText('Awesome');
  });

  test('Post comment in item @allure.id:35507', async ({ pm }) => {
    await pm.mainPage.visit();
    await pm.mainPage.shouldBeOpened();
    await pm.mainPage.clickToItem();
    await pm.itemPage.clickSubmitButton();
    await expect(pm.errorComponent.errorInfo).toContainText(
      'You found a crash bug, examine the page for',
    );
  });
});
