<template>
  <header class="app-hero">
    <AppAvatar src="/profile_1mb-jaco.webp" alt="Profilbild von JaCo" />
    <h1 class="name">Ja<span>Co</span></h1>

    <p class="role">Videographer &nbsp;·&nbsp; Photographer &nbsp;·&nbsp; Developer</p>

    <!-- Tags -->
    <div class="tags">
      <span class="tag">🌲 Landscapes</span>
      <span class="tag">🐾 Wildlife</span>
      <span class="tag">🎶 Events</span>
      <span class="tag">💻 Code</span>
    </div>

    <!-- Portfolio-->
    <NuxtLink to="/projects" class="portfolio-btn">
      <span class="portfolio-text">Portfolio</span>
      <span class="portfolio-arrow">→</span>
    </NuxtLink>

    <AppDivider />
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped src="./AppHero.scss" />
