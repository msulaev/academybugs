import test from '@playwright/test';
import { ApiRoute } from '../ApiRoute';

export class Challenger extends ApiRoute {
  public async post() {
    return test.step(`POST /challenger`, async () => {
      return this.apiClient.sendRequest('POST', this.url);
    });
  }
}
