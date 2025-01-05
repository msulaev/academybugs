import { step } from '../helpers/allure';
import { BasePage } from './BasePage';
import { click, type } from '../helpers/actions';

export class CartPage extends BasePage {
  private readonly cartQuantity = this.page.locator('.ec_quantity');
  private readonly updateButton = this.page.getByText('UPDATE');

  constructor(page) {
    super(page, 'my-cart/');
  }

  @step('Change quantity in cart')
  public async changeQuantity(count: number) {
    await type(this.cartQuantity, count.toString());
    await click(this.updateButton);
  }
}
