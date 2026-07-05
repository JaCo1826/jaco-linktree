<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  interface Props {
    title: string;
    teaser: string;
    cover: string;
    to: string;
    tag?: string;
    meta?: string;
  }
  const props = defineProps<Props>();

  const loaded = ref(false);
  const currentSrc = ref('');
  const coverEl = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSrc.value = props.cover;
            observer?.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    if (coverEl.value) observer.observe(coverEl.value);
  });

  onUnmounted(() => observer?.disconnect());
</script>
<template>
  <NuxtLink class="travel-entry" :to="to">
    <div class="travel-entry-cover" ref="coverEl">
      <div v-if="!loaded" class="travel-entry-spinner" aria-hidden="true"></div>
      <img
        v-if="currentSrc"
        :src="currentSrc"
        :alt="title"
        decoding="async"
        :class="{ 'is-loaded': loaded }"
        @load="loaded = true"
      />
      <span v-if="tag" class="travel-entry-tag">{{ tag }}</span>
    </div>
    <div class="travel-entry-content">
      <h3 class="travel-entry-title">{{ title }}</h3>
      <p v-if="meta" class="travel-entry-meta">{{ meta }}</p>
      <p class="travel-entry-teaser">{{ teaser }}</p>
      <span class="travel-entry-link">Mehr lesen →</span>
    </div>
  </NuxtLink>
</template>
<style lang="scss" scoped src="./TravelEntry.scss"></style>
