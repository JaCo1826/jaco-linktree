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
        v-for="(post, index) in travelPosts"
        :key="post.to"
        :title="post.title"
        :teaser="post.teaser"
        :cover="post.cover"
        :to="post.to"
        class="travel-grid-item"
        :style="{ animationDelay: `${index * 0.12}s` }"
      />
    </div>
  </main>
</template>
<script setup lang="ts">
  interface TravelPost {
    title: string;
    teaser: string;
    cover: string;
    to: string;
  }

  // Neue Reise hinzufügen = hier einen Eintrag ergänzen!
  const travelPosts: TravelPost[] = [
    {
      title: 'Norwegen',
      teaser: 'Hohe Gebirge, Gletscher und raue Flüsse',
      cover: '/NorwayMountainscapes.webp',
      to: '/projects/travel/norwegen',
    },
  ];

  useSeoMeta({
    title: 'JaCo – Reiseberichte',
    description:
      'Geschichten, Bilder und Eindrücke von unterwegs — jede Reise als eigenes Kapitel.',
    ogTitle: 'JaCo – Reiseberichte',
    ogDescription: 'Fjorde, Gletscher und endloses Licht — Reiseberichte von JaCo.',
    ogImage: '/Norwegen-Berg.webp',
    twitterCard: 'summary_large_image',
  });
</script>
<style lang="scss" scoped src="./travel-overview.scss" />
