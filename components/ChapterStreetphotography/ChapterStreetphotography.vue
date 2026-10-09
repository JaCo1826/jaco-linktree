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
        <img v-if="item.type === 'image'" :src="item.src" alt="" loading="lazy" />
        <video v-else autoplay muted loop playsinline preload="metadata" :poster="item.poster">
          <source
            v-for="source in item.sources"
            :key="source.src"
            :src="source.src"
            :type="source.type"
          />
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
  const streetMedia = [
    { type: 'image' as const, src: 'DSC_5875.webp' },
    {
      type: 'video' as const,
      sources: [
        { src: 'shibuya-crossing-from-above-night.webm', type: 'video/webm' },
        { src: 'shibuya-crossing-from-above-night.mp4', type: 'video/mp4' },
      ],
      poster: 'shibuya-crossing-from-above-night-poster.jpg',
    },
    { type: 'image' as const, src: 'DSC_7008.webp' },
  ];
</script>

<style lang="scss" scoped src="./ChapterStreetphotography.scss"></style>
