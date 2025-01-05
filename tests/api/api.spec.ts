import { faker } from '@faker-js/faker';
import { test } from '../../src/fixtures/fixtureApi';

test.describe('API tests', () => {
  test.use({ allureMeta: { epic: 'API', feature: 'Challenges' } });

  test('Get /challenges @allure.id:35508', async ({ api }) => {
    const responce = await api.challenges.get();
    await responce.statusCode.shouldBe(200);
  });

  test('Get /todos @allure.id:35511', async ({ api }) => {
    const responce = await api.todos.getTodos();
    await responce.statusCode.shouldBe(200);
  });

  test('Get /todo @allure.id:35510', async ({ api }) => {
    const responce = await api.todo.getTodo();
    await responce.statusCode.shouldBe(404);
  });

  test('Get /todos/1 @allure.id:35512', async ({ api }) => {
    const responce = await api.todos.getTodosId('1');
    responce.shouldBe({
      todos: [
        {
          id: 1,
          title: 'scan paperwork',
          doneStatus: false,
          description: '',
        },
      ],
    });
    await responce.statusCode.shouldBe(200);
  });

  test('Post /todos @allure.id:35509', async ({ api }) => {
    const body = {
      title: faker.lorem.words(2),
      doneStatus: false,
      description: faker.lorem.words(5),
    };
    const responce = await api.todos.postTodos(body);
    await responce.statusCode.shouldBe(201);
    await responce.shouldBe({
      title: body.title,
      doneStatus: body.doneStatus,
      description: body.description,
    });
  });
});
