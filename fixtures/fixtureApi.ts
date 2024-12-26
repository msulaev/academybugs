import { test as base } from '@playwright/test';
import { Api } from '../api/api/Api';

type CustomFixtures = {
  api: Api;
};

export const test = base.extend<CustomFixtures>({
  api: async ({ request }, use) => {
    const api = new Api(request);
    await api.setExtraHeaders();
    await use(api);
  },
});

export { expect } from '@playwright/test';
