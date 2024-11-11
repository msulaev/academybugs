import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { step } from '../helpers/allure';

export class MainPage extends BasePage {
  private readonly item = this.page.locator('id=ec_product_li_4481370');
  private readonly pagination50 = this.page
    .locator('.what-we-offer-pagination-link')
    .filter({ hasText: '50' });
  private readonly acceptCookiesButton = this.page.getByLabel('Accept cookies');

  constructor(page: Page) {
    super(page, 'find-bugs/#');
  }

  @step('Click to pagination 50')
  public async clickToPagination50() {
    await this.click(this.pagination50);
  }

  @step('Click to item yellow snikers')
  public async clickToItem() {
    await this.click(this.item);
    await this.page.waitForURL('store/dnk-yellow-shoes/');
  }

  @step('Accept cookies')
  public async acceptCookies() {
    await this.click(this.acceptCookiesButton);
  }
}
