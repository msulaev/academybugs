import test, { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected constructor(
    protected page: Page,
    protected url: string = '',
  ) {}

  public async visit() {
    await test.step(`going to '${this.constructor.name}' by url ${this.url}`, async () => {
      await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    });
  }

  public async shouldBeOpened() {
    await test.step(`Checking that ${this.constructor.name} opened with url ${this.url}`, async () => {
      await expect(this.page).toHaveURL(this.url);
    });
  }

  async click(locator: Locator, options?: any) {
    const description = `Click to: ${await locator.toString()}`;
    await test.step(description, async () => {
      await locator.click(options);
    });
  }

  async type(locator: Locator, text: string) {
    const description = `Fill ${text} in ${await locator.toString()}`;
    await test.step(description, async () => {
      await locator.fill(text);
    });
  }

  async select(locator: Locator, option: any) {
    const description = `Select ${option} in ${await locator.toString()}`;
    await test.step(description, async () => {
      await locator.selectOption(option);
    });
  }
}
