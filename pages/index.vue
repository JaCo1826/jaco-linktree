<template>
  <main class="home-content">
    <FloatingLeaves />
    <div class="home-body">
      <AppHero />
      <SocialLinks />
      <AppDivider />
      <ContactSection />
    </div>
    <AppFooter />
  </main>
</template>

<script setup lang="ts"></script>

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
    min-height: 100dvh;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .home-body {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }
</style>
