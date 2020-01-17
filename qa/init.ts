/* eslint-env detox/detox, jest */
// tslint: disable: no-var-requires
import { cleanup, init } from 'detox';
import * as adapter from 'detox/runners/jest/adapter';
import * as specReporter from 'detox/runners/jest/specReporter';
const config = require('../package.json').detox;

jest.setTimeout(120000);
// eslint-disable-next-line no-undef
jasmine.getEnv().addReporter(adapter);
// eslint-disable-next-line no-undef
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
  await init(config, { initGlobals: false });
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});
