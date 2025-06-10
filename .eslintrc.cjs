// .eslintrc.cjs
/* eslint-env node */
require('@rushstack/eslint-patch/lib/patch-eslint'); // Needed for @vue/eslint-config-prettier with Vite

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting' // Use skip-formatting with prettier
  ],
  parserOptions: {
    ecmaVersion: 'latest' // Allows parsing of modern ECMAScript features
  },
  env: {
    node: true,
    es2022: true
  },
  rules: {
    // Add your custom ESLint rules here
  }
};