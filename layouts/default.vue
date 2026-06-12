<template>
  <div class="app-container">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
  @use '~/assets/styles/reset';

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    /* Wichtig: Verhindert, dass Body größer wird als nötig, aber erlaubt 100% */
    min-height: 100vh;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: var(--forest-deep);
    color: var(--cream);
    /* Flexbox sorgt dafür, dass Kinder die Höhe erben können */
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    position: relative;
  }

  .app-container {
    height: 100%;
    width: 100%;
    /* Wichtig: Flexbox im Container, damit NuxtPage die Höhe einnimmt */
    display: flex;
    flex-direction: column;
  }

  /* Globaler Fix für das von Nuxt generierte Page-Element, falls nötig */
  /* Oft hilft es, das direkte Kind von .app-container zu targeten */
  .app-container > div {
    height: 100%;
    flex: 1;
  }
</style>