import test from '@playwright/test';
import { ApiRoute } from '../ApiRoute';

export class Todo extends ApiRoute {
  public async getTodo() {
    return test.step(`Get /todo`, async () => {
      return this.apiClient.sendRequest('GET', this.url);
    });
  }
}
