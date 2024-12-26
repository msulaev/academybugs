import test, { APIRequestContext } from '@playwright/test';
import { PlaywrightApiClient } from './client/PlaywrightApiClient';
import { Challenger } from './challenger/Challenger';
import { Challenges } from './challenges/Challenges';
import { Todos } from './todos/Todos';
import { Todo } from './todo/Todo';

export class Api {
  private apiClient: PlaywrightApiClient;
  public challenger: Challenger;
  public challenges: Challenges;
  public todos: Todos;
  public todo: Todo;

  constructor(private request: APIRequestContext) {
    this.apiClient = new PlaywrightApiClient(this.request);
    this.challenger = new Challenger(this.apiClient, 'challenger');
    this.challenges = new Challenges(this.apiClient, 'challenges');
    this.todos = new Todos(this.apiClient, 'todos');
    this.todo = new Todo(this.apiClient, 'todo');
  }

  public async setExtraHeaders() {
    return test.step('Set x-challenger ', async () => {
      const responce = await this.challenger.post();
      await responce.statusCode.shouldBe(201);
      this.apiClient.setExtraHeaders({
        'X-CHALLENGER': responce.headers['x-challenger'],
      });
    });
  }
}
