import { Page } from '@playwright/test';
import { CartPage } from './CartPage';
import { ItemPage } from './ItemPage';
import { MainPage } from './MainPage';
import { ErrorComponent } from './ErrorComponent';

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
