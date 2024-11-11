import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Currency } from '../types/currency';
import { step } from '../helpers/allure';

export class ItemPage extends BasePage {
  private readonly currency = this.page.locator('id=ec_currency_conversion');
  private readonly emailInput = this.page.locator(
    'id=ec_account_login_widget_email',
  );
  private readonly signButton = this.page.getByRole('button', {
    name: 'SIGN IN',
  });
  private readonly addToCartButton = this.page.getByRole('button', {
    name: 'ADD TO CART',
  });
  private readonly submitButton = this.page.getByRole('button', {
    name: 'Post Comment',
  });

  constructor(page: Page) {
    super(page);
  }

  @step('Change currency in Item page')
  public async changeCurrency(currency: Currency) {
    await this.select(this.currency, currency);
  }

  @step('Fill email in Item page')
  public async fillEmail(email: string) {
    await this.type(this.emailInput, email);
  }

  @step('Click sign button in Item page')
  public async clickSignButton() {
    await this.click(this.signButton, { force: true });
  }

  @step('Click add to cart button in Item page')
  public async clickAddToCartButton() {
    await this.click(this.addToCartButton);
  }

  @step('Click submit button in Item page')
  public async clickSubmitButton() {
    await this.click(this.submitButton);
  }
}
