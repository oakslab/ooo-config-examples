module.exports = {
  extends: '../common/.eslintrc.js',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/*', '/codegen/*', '/public/*', '/tests/**'],
  rules: {
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }], // Allow quote marks in text
    'react/prop-types': 'off', // Allow not providing PropTypes as we use FC<Props> to type props
    'react/react-in-jsx-scope': 'off', // Allow not importing React as Next imports it automatically
  },
};
