<template>
  <div class="avatar-wrap">
    <div class="avatar-ring-2" />
    <div class="avatar-ring" />
    <img class="avatar" :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    src: string;
    alt: string;
  }>();
</script>

<style lang="scss" scoped src="./AppAvatar.scss" />
