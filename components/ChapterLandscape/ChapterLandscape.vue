<template>
  <section class="chapter">
    <p class="eyebrow">Kapitel I</p>
    <h2 class="chapter-title">Landschaften</h2>
    <p class="chapter-copy">
      Weite Horizonte, stille Orte — Expeditionen, in denen Wetter, Geduld und Perspektiven das Bild
      komponieren
    </p>
    <NuxtLink class="chapter-link" to="/projects/landscape-section">Galerie ansehen →</NuxtLink>
    <div class="landscape-grid">
      <div class="landscape-glow" />
      <img
        v-if="landscapeFeature.type === 'image'"
        :src="landscapeFeature.src"
        alt="Mountainscape"
      />
      <video v-else autoplay muted loop playsinline :poster="landscapeFeature.poster || ''">
        <source :src="landscapeFeature.src" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script setup lang="ts">
  // eslint-disable-next-line
  const SAMPLE_VIDEO_1 = '';

  const landscapeFeature = {
    type: 'image' as 'image' | 'video',
    src: 'NorwayMountainscapes.webp',
    poster: '',
  };
</script>

<style lang="scss" scoped src="./ChapterLandscape.scss"></style>
