<!-- PullQuote.vue -->
<template>
  <p class="travel-quote"><slot /></p>
</template>

<style lang="scss" scoped>
  .travel-quote {
    border-left: 2px solid var(--gold);
    padding-left: 18px;
    margin: 30px 0;
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.2rem;
    color: var(--gold-light);
  }
</style>
