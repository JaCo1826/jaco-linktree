<!-- pages/projects/travel/index.vue -->
<template>
  <main class="travel-overview-page">
    <FloatingLeaves />
    <p class="eyebrow">Reiseberichte</p>
    <h1 class="page-title">Unterwegs</h1>
    <p class="page-copy">
      Geschichten, Bilder und Eindrücke von unterwegs — jede Reise als eigenes Kapitel.
    </p>
    <AppDivider />
    <div class="travel-grid">
      <TravelEntry
        title="Norwegen"
        teaser="Fjorde, Gletscher und endloses Licht im hohen Norden."
        cover="/Norwegen-Berg.webp"
        to="/projects/travel/norwegen"
      />
      <!-- weitere TravelEntry-Einträge hier -->
    </div>
  </main>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'JaCo – Reiseberichte',
  });
</script>

<style lang="scss" scoped src="./travel-overview.scss" />
