<script setup lang="ts">
  interface Props {
    title: string;
    tag: string;
    meta: string;
    cover: string;
  }
  defineProps<Props>();
</script>

<template>
  <article>
    <div class="travel-cover">
      <img :src="cover" :alt="title" />
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
