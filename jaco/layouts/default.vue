<template>
  <div class="app-container">
    <!-- Grain & Glow sind jetzt im CSS des Bodies oder hier als fixe Divs -->
    <NuxtPage />
  </div>
</template>

<style lang="scss">
// Importieren Sie hier ggf. Reset oder Basis-Styles, falls nicht in nuxt.config
@use '~/assets/styles/reset';

body {
  margin: 1rem;
  padding: 1rem;
  font-family: "DM Sans", sans-serif;
  background-color: var(--forest-deep);
  color: var(--cream);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  // Fügen Sie hier Ihre ::before und ::after Pseudo-Elemente für Grain/Glow ein
  // Oder lagern Sie das in eine separate Component <BackgroundEffects /> aus
}
</style>