module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'import/extensions': 0,
    'consistent-return': 'off',
    'max-classes-per-file': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
  },
};
