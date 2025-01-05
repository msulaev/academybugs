import { test as base } from '@playwright/test';
import { Api } from '../api/Api';
import { epic, feature } from 'allure-js-commons';

type CustomFixtures = {
  api: Api;
  allureMeta: { epic: string; feature: string };
};

export const test = base.extend<CustomFixtures>({
  api: async ({ request, allureMeta }, use) => {
    if (allureMeta.epic) {
      epic(allureMeta.epic);
    }
    if (allureMeta.feature) {
      feature(allureMeta.feature);
    }
    const api = new Api(request);
    await api.setExtraHeaders();
    await use(api);
  },

  allureMeta: [{ epic: '', feature: '' }, { option: true }],
});

export { expect } from '@playwright/test';
