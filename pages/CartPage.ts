import { step } from "../helpers/allure";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
    private readonly cartQuantity = this.page.locator('.ec_quantity');
    private readonly updateButton = this.page.getByText('UPDATE');

    constructor(page) {
        super(page, 'my-cart/');
    }

    @step('Change quantity in cart')
    public async changeQuantity(count: number) {
        await this.type(this.cartQuantity, count.toString());
        await this.click(this.updateButton);
    }
}