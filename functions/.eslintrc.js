module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    quotes: ['warn', 'single'],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
  },
  plugins: [
    'jest'
  ]
};
