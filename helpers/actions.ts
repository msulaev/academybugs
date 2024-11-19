import { Locator, test } from '@playwright/test';

/* eslint-disable */
export async function click(locator: Locator, options?: any) {
  const description = `Click to : ${await locator.toString()}`;
  await test.step(description, async () => {
    await locator.click(options);
  });
}

export async function type(
  locator: Locator,
  text: string,
  stepName: string = 'Type',
) {
  const description = `${stepName}: Typing '${text}' into ${await locator.toString()}`;
  await test.step(description, async () => {
    await locator.fill(text);
  });
}

export async function select(
  locator: Locator,
  option: any,
  stepName: string = 'Select',
) {
  const description = `${stepName}: Selecting '${option}' in ${await locator.toString()}`;
  await test.step(description, async () => {
    await locator.selectOption(option);
  });
}
