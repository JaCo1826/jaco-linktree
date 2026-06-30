<template>
  <section class="chapter">
    <p class="eyebrow">Kapitel III — Kontaktbogen</p>
    <h2 class="street-heading">STREET</h2>
    <p class="chapter-copy">
      Unscharfe Ränder, harte Kontraste. Die Straße erzählt am ehrlichsten, wenn niemand stillhält.
    </p>
    <NuxtLink
      class="chapter-link"
      to="/projects/streetphotography-section"
      style="margin-bottom: 10px"
    >
      Galerie ansehen →
    </NuxtLink>
    <div class="street-grid">
      <div v-for="(item, index) in streetMedia" :key="index" class="street-card">
        <span class="frame-no">{{ String(index + 1).padStart(3, '0') }}</span>
        <img v-if="item.type === 'image'" :src="item.src" alt="" />
        <video v-else autoplay muted loop playsinline :poster="item.poster || ''">
          <source :src="item.src" type="video/mp4" />
        </video>
        <div class="scan"></div>
        <svg class="frame-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="0" y="0" width="100" height="100" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const SAMPLE_VIDEO_3 =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';

  const streetMedia = [
    { type: 'image' as 'image', src: 'https://picsum.photos/seed/jaco-street-a/700/880' },
    {
      type: 'video' as 'video',
      src: SAMPLE_VIDEO_3,
      poster: 'https://picsum.photos/seed/jaco-street-b/700/880',
    },
    { type: 'image' as 'image', src: 'https://picsum.photos/seed/jaco-street-c/700/880' },
  ];
</script>

<style lang="scss" scoped src="./ChapterStreetphotography.scss"></style>
