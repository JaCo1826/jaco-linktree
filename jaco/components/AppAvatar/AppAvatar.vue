<template>
  <div class="avatar-wrap">
    <div class="avatar-ring-2" />
    <div class="avatar-ring" />
    <!-- Wir nutzen die Props src und alt -->
    <img class="avatar" :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
// Definieren Sie die erwarteten Eigenschaften
defineProps<{
  src: string
  alt: string
}>()
</script>

<!-- Wichtig: Der Pfad zur SCSS Datei muss relativ sein oder den Alias nutzen -->
<style lang="scss" scoped src="./AppAvatar.scss" />