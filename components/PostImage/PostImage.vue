<script setup lang="ts">
  withDefaults(
    defineProps<{
      src: string;
      alt?: string;
      caption?: string;
      size?: 'small' | 'inline' | 'wide' | 'full';
      align?: 'left' | 'right' | 'center'; // nur für size="small"
    }>(),
    { alt: '', size: 'inline', align: 'center' }
  );
</script>

<template>
  <figure class="post-image" :class="[`is-${size}`, size === 'small' && `align-${align}`]">
    <img :src="src" :alt="alt" loading="lazy" decoding="async" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style lang="scss" scoped src="./PostImage.scss"></style>
