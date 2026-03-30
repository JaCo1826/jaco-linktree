<template>
  <main class="home-content">
    <AppHero />
    <SocialLinks />
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
  // Hier müssen Sie KEINE Komponenten importieren!
  // Nuxt macht das automatisch für alles im 'components/' Ordner.
</script>

<style lang="scss" scoped>
  .home-content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
