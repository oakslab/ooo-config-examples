module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules/*', '/tests/**'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off', // Allow @ts-ignore
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow implicit function return types
  },
};
