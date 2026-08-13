// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettier from 'eslint-config-prettier';

export default withNuxt(
  {
    ignores: ['gitflow/**', 'public/**', '.output/**', '.nuxt/**', 'pages/impressum.vue'],
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/no-unused-refs': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'vue/html-self-closing': 'off',
    },
  },
  prettier
);
