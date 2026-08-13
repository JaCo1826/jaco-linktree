<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  interface Props {
    title: string;
    tag: string;
    meta: string;
    cover: string;
  }
  defineProps<Props>();

  const loaded = ref(false);
  const imgEl = ref<HTMLImageElement | null>(null);

  onMounted(() => {
    // Cache-Fall: @load feuert nicht, wenn das Bild schon vor der Hydration aus dem Cache kam
    if (imgEl.value?.complete) loaded.value = true;
  });
</script>
<template>
  <article>
    <div class="travel-cover">
      <div v-if="!loaded" class="travel-cover-spinner" aria-hidden="true" />
      <img
        ref="imgEl"
        :src="cover"
        :alt="title"
        fetchpriority="high"
        decoding="async"
        :class="{ 'is-loaded': loaded }"
        @load="loaded = true"
      />
      <span class="travel-tag">{{ tag }}</span>
      <div class="travel-title-block">
        <h1 class="travel-title">{{ title }}</h1>
        <p class="travel-meta">{{ meta }}</p>
      </div>
    </div>
    <div class="travel-body">
      <slot />
    </div>
    <div class="travel-divider" />
    <AppFooter />
  </article>
</template>
<style lang="scss" scoped src="./TravelPost.scss"></style>
