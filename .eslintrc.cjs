/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'max-len': ['error', { 'code': 80 }],
    'quotes': ['error', 'single'],
    'vue/html-quotes': ['error', 'single'],
    'indent': ['error', 2],
    'vue/html-indent': ['error', 2]
  }
}
