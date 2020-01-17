const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');
module.exports = {
  preset: 'ts-jest',
  reporters: ['detox/runners/jest/streamlineReporter'],
  setupFilesAfterEnv: ['./e2e/init.ts'],
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  verbose: true,
};
