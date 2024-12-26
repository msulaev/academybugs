import { test } from '../../fixtures/fixtureApi';

test.describe('API tests', () => {
  test('Get /challenges', async ({ api }) => {
    const responce = await api.challenges.get();
    await responce.statusCode.shouldBe(200);
  });

  test('Get /todos', async ({ api }) => {
    const responce = await api.todos.getTodos();
    await responce.statusCode.shouldBe(200);
  });

  test('Get /todo', async ({ api }) => {
    const responce = await api.todo.getTodo();
    await responce.statusCode.shouldBe(404);
  });

  test('Get /todos/1', async ({ api }) => {
    const responce = await api.todos.getTodosId('1');
    await responce.statusCode.shouldBe(200);
  });

  test('Get /todos/9999', async ({ api }) => {
    const responce = await api.todos.getTodosId('9999');
    await responce.statusCode.shouldBe(404);
  });
});
