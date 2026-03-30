<template>
  <header class="app-hero">
    <h1>Landscapes Portfolio</h1>
    <AppAvatar
        src="/profile_1mb-jaco.webp"
        alt="Profilbild von JaCo"
    />
  </header>
</template>

<script setup>
// Logik falls nötig (z.B. dynamischer Titel)
</script>

<style lang="scss" scoped>
.app-hero {
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    color: var(--gold);
    text-shadow: 0 0 5px rgba(201, 169, 110, 0.8);
    margin-bottom: 1.5rem;
  }

  .subtitle {
    margin-top: 1rem;
    color: var(--sage);
    font-size: 1.2rem;
  }
}
</style>