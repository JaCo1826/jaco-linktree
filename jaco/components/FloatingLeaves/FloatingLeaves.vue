<template>
  <div class="leaves" aria-hidden="true">
    <div v-for="(opacity, i) in leaves" :key="i" class="leaf">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path :opacity="opacity" d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-5 8z"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const leaves = [0.6, 0.5, 0.7, 0.45, 0.6, 0.5]
</script>

<style lang="scss" src="FloatingLeaves.scss" />