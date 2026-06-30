<template>
  <section class="chapter">
    <p class="eyebrow">Kapitel II</p>
    <h2 class="chapter-title">Wildlife</h2>
    <p class="chapter-copy">
      Geduld im Unterholz. Jede Aufnahme ein Zufall, der lange genug erwartet wurde, um keiner mehr
      zu sein.
    </p>
    <NuxtLink class="chapter-link" to="/projects/wildlife-section">Galerie ansehen →</NuxtLink>
    <div class="wildlife-grid">
      <div v-for="(item, index) in wildlifeMedia" :key="index" class="wildlife-card">
        <img v-if="item.type === 'image'" :src="item.src" alt="" />
        <video v-else autoplay muted loop playsinline :poster="item.poster || ''">
          <source :src="item.src" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const SAMPLE_VIDEO_2 =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';

  const wildlifeMedia = [
    {
      type: 'video' as 'video',
      src: SAMPLE_VIDEO_2,
      poster: 'https://picsum.photos/seed/jaco-wild-a/900/1100',
    },
    { type: 'image' as 'image', src: 'https://picsum.photos/seed/jaco-wild-b/700/520' },
    { type: 'image' as 'image', src: 'https://picsum.photos/seed/jaco-wild-c/700/520' },
  ];
</script>

<style lang="scss" scoped src="./ChapterWildlife.scss"></style>
