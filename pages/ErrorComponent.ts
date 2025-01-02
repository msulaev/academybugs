import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ErrorComponent extends BasePage {
  public readonly errorOverlay = this.page.locator('.academy-bug-overlay');
  public readonly errorInfo = this.page.locator('.academy-bug-info-overlay');
  public readonly errorModal = this.page.locator('id=popmake-4406');
  public readonly bugPopup = this.page.locator('#bug-popup');

  constructor(page: Page) {
    super(page);
  }
}
