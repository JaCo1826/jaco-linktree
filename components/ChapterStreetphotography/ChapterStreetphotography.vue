<template>
  <section class="chapter">
    <p class="eyebrow">Kapitel II</p>
    <h2 class="street-heading">STREET</h2>
    <p class="chapter-copy">
      Symmetrie, klare Farben und Ordnung. Klare Linien, in denen man sich verlieren kann.
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
        <div class="scan" />
        <svg class="frame-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="0" y="0" width="100" height="100" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const SAMPLE_VIDEO_3 = '';

  const streetMedia = [
    { type: 'image' as const, src: 'DSC_5875.webp' },
    {
      type: 'video' as const,
      src: SAMPLE_VIDEO_3,
      poster: 'DSC_6113.webp',
    },
    { type: 'image' as const, src: 'DSC_6033.webp' },
  ];
</script>

<style lang="scss" scoped src="./ChapterStreetphotography.scss"></style>
