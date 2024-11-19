import { test as base } from '@playwright/test';
import { PageManager } from '../pages/PageManager';
import { epic, feature } from 'allure-js-commons';

type Fixtures = {
  pm: PageManager;
  allureMeta: { epic: string; feature: string };
};

export const test = base.extend<Fixtures>({
  pm: async ({ page, allureMeta }, use) => {
    if (allureMeta.epic) {
      epic(allureMeta.epic);
    }
    if (allureMeta.feature) {
      feature(allureMeta.feature);
    }
    const pm = new PageManager(page);
    await use(pm);
  },

  allureMeta: [{ epic: '', feature: '' }, { option: true }],
});

export { expect } from '@playwright/test';
