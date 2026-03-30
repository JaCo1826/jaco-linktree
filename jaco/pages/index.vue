<template>
  <main class="home-content">
    <!-- 1. Hero Bereich mit Profilbild -->
    <AppHero />

    <!-- 3. Kontakt & Socials (falls gewünscht) -->
    <ContactSection />

    <!-- 4. Footer (falls er nur auf dieser Seite sein soll, sonst ins Layout) -->
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
  z-index: 1; // Damit der Inhalt ÜBER dem Hintergrund (Grain/Glow) liegt
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>