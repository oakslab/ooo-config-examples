module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules/*', '/tests/**'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off', // Allow @ts-ignore
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow implicit function return types
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: { regex: '[A-Za-z]{2,}', match: true },
      }, // Disallow one letter generics
    ],
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
    eqeqeq: ['error', 'always'], // Disallow == comparisons
  },
};
