import { Page } from '@playwright/test';
import { CartPage, ItemPage, MainPage, ErrorComponent } from './index';

export class PageManager {
  mainPage: MainPage;
  itemPage: ItemPage;
  cartPage: CartPage;
  errorComponent: ErrorComponent;
  page: Page;

  constructor(page: Page) {
    this.mainPage = new MainPage(page);
    this.itemPage = new ItemPage(page);
    this.cartPage = new CartPage(page);
    this.errorComponent = new ErrorComponent(page);
    this.page = page;
  }
}
