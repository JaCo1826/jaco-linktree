<template>
  <section class="chapter">
    <p class="eyebrow">Kapitel II</p>
    <h2 class="chapter-title">Wildlife</h2>
    <p class="chapter-copy">
      Ausharren, auch wenn die Hoffnung auf einen guten Fang dahinschwindet. Oder das genaue
      Gegenteil: Aus dem Zufall heraus den perfekten Moment und die besten Perspektiven einfangen.
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
  const SAMPLE_VIDEO_2 = '';

  const wildlifeMedia = [
    {
      type: 'video' as const,
      src: SAMPLE_VIDEO_2,
      poster: 'Firefly-tbc.png',
    },
    { type: 'image' as const, src: 'Firefly-tbc.png' },
    { type: 'image' as const, src: 'Firefly-tbc.png' },
  ];
</script>

<style lang="scss" scoped src="./ChapterWildlife.scss"></style>
