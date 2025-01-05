import test from '@playwright/test';
import { ApiRoute } from '../ApiRoute';

export class Challenges extends ApiRoute {
  public async get() {
    return test.step(`Get /challenges`, async () => {
      return this.apiClient.sendRequest('GET', this.url);
    });
  }

  public async getTodos() {
    return test.step(`Get /todos`, async () => {
      return this.apiClient.sendRequest('GET', this.url);
    });
  }

  public async getTodo() {
    return test.step(`Get /todo`, async () => {
      return this.apiClient.sendRequest('GET', this.url);
    });
  }
}
