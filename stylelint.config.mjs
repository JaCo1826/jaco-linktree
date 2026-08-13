export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
  customSyntax: 'postcss-html',

  ignoreFiles: ['gitflow/**', 'public/**', '.output/**', '.nuxt/**', 'node_modules/**'],

  rules: {
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'custom-property-pattern': null,

    // Hinweis: Für eure Konvention "rgba(hex-triplet)" vermeiden und stattdessen
    // rgba(var(--color-rgb), x) nutzen, gibt es keine passende Stock-Stylelint-Regel.
  },
};
