<template>
  <div class="leaves" aria-hidden="true">
    <div
      v-for="(leaf, i) in leaves"
      :key="i"
      class="leaf"
      :style="{
        left: leaf.left,
        width: leaf.width,
        animationDuration: leaf.duration,
        animationDelay: leaf.delay,
      }"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          :opacity="leaf.opacity"
          d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-5 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
  const leaves = [
    { opacity: 0.6, left: '8%', width: '14px', duration: '18s', delay: '0s' },
    { opacity: 0.5, left: '22%', width: '10px', duration: '24s', delay: '3s' },
    { opacity: 0.7, left: '38%', width: '18px', duration: '20s', delay: '7s' },
    { opacity: 0.45, left: '55%', width: '12px', duration: '22s', delay: '1.5s' },
    { opacity: 0.6, left: '70%', width: '16px', duration: '16s', delay: '5s' },
    { opacity: 0.5, left: '85%', width: '11px', duration: '26s', delay: '9s' },
  ];
</script>

<style lang="scss" src="./FloatingLeaves.scss" />
