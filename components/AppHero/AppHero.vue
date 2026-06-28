<template>
  <header class="app-hero">
    <AppAvatar :src="avatarSrc" alt="Profilbild von JaCo" />

    <h1 class="name">Ja<span>Co</span></h1>
    <p class="role">Videographer &nbsp;·&nbsp; Photographer</p>
    <p class="bio">
      TEXT = WIP || Geschichten zwischen Wald, Wildnis und Straße — eingefangen mit Geduld.
    </p>

    <a class="scroll-cue" href="#showcase">
      Portfolio entdecken
      <svg viewBox="0 0 24 24"><path d="M6 9L12 15L18 9" /></svg>
    </a>

    <AppDivider />
  </header>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();
  const avatarSrc = config.app.baseURL + 'profile_1mb-jaco.webp';
</script>

<style lang="scss" scoped src="./AppHero.scss" />
