import test from '@playwright/test';
import { ApiRoute } from '../ApiRoute';

export class Todos extends ApiRoute {
  public async getTodos() {
    return test.step(`Get /todos`, async () => {
      return this.apiClient.sendRequest('GET', this.url);
    });
  }

  public async getTodosId(id: string) {
    return test.step(`Get /todos/${id}`, async () => {
      const url = `${this.url}/${id}`;
      return this.apiClient.sendRequest('GET', url);
    });
  }

  public async postTodos(body: Record<string, unknown>) {
    return test.step(`Post /todos`, async () => {
      return this.apiClient.sendRequest('POST', this.url, { body });
    });
  }
}
