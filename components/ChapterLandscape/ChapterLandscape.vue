<template>
  <p class="eyebrow">Kapitel I</p>
  <h2 class="chapter-title">Landschaften</h2>
  <p class="chapter-copy">
    Weite Horizonte, stille Lichtstimmungen — Momente, in denen sich Wetter und Geduld zu einem Bild
    verdichten.
  </p>
  <NuxtLink class="chapter-link" to="/projects/landscape-section">Galerie ansehen →</NuxtLink>
  <div class="landscape-grid">
    <div class="landscape-glow"></div>
    <img v-if="landscapeFeature.type === 'image'" :src="landscapeFeature.src" alt="" />
    <video v-else autoplay muted loop playsinline :poster="landscapeFeature.poster || ''">
      <source :src="landscapeFeature.src" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
  const SAMPLE_VIDEO_1 =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

  const landscapeFeature = {
    type: 'image' as 'image' | 'video',
    src: 'https://picsum.photos/seed/jaco-forest-panorama/1600/900',
    poster: '',
  };
</script>

<style lang="scss" scoped src="./ChapterLandscape.scss"></style>
