import { faker } from '@faker-js/faker';
import { expect, test } from '../../src/fixtures/fixture';
import { Currency } from '../../src/pages/currency';

test.describe('Academybugs', () => {
  test.use({ allureMeta: { epic: 'Academybugs', feature: 'Bugs' } });

  test('Change pagination @allure.id:35503', async ({ pm }) => {
    await pm.mainPage.clickToPagination('50');
    await expect(pm.errorComponent.bugPopup).toContainText(
      'What type of issue is it?',
    );
  });

  test('Change currency @allure.id:35504', async ({ pm }) => {
    await pm.mainPage.clickToItem();
    await pm.itemPage.changeCurrency(Currency.GBP);
    await expect(pm.errorComponent.errorInfo).toContainText(
      'You found a crash bug, examine the page for',
    );
  });

  test('Login with incorrect email @allure.id:35505', async ({ pm }) => {
    await pm.mainPage.acceptCookies();
    await pm.mainPage.clickToItem();
    await pm.itemPage.fillEmail(faker.internet.email());
    await pm.itemPage.clickSignButton();
    await expect(pm.errorComponent.bugPopup).toContainText(
      'What type of issue is it?',
    );
  });

  test('Change quantity of item @allure.id:35506', async ({ pm }) => {
    await pm.mainPage.acceptCookies();
    await pm.mainPage.clickToItem();
    await pm.itemPage.clickAddToCartButton();
    await pm.cartPage.changeQuantity(3);
    await expect(pm.errorComponent.errorModal).toContainText('Awesome');
  });

  test('Post comment in item @allure.id:35507', async ({ pm }) => {
    await pm.mainPage.clickToItem();
    await pm.itemPage.clickSubmitButton();
    await expect(pm.errorComponent.bugPopup).toContainText(
      'What type of issue is it?',
    );
  });
});
