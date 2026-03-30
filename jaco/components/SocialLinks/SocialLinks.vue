<template>
  <div class="links">
    <div v-for="link in links" :key="link.href" class="link-item">
      <a :href="link.href" target="_blank" rel="noopener" class="link-btn">
        <div class="link-icon" v-html="link.icon" />
        <div class="link-text">
          <span class="link-text-main">{{ link.label }}</span>
          <span class="link-text-sub">{{ link.sub }}</span>
        </div>
        <span class="link-arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// Icons als eigene Dateien oder inline – hier vereinfacht als Beispiel
const links = [
  {
    href: 'https://www.instagram.com/jaco_held/',
    label: 'Instagram',
    sub: '@jaco_held',
    icon: `<svg>...</svg>`  // dein Instagram SVG hier
  },
  {
    href: 'https://www.youtube.com/@jacoheld',
    label: 'YouTube',
    sub: '@jacoheld',
    icon: `<svg>...</svg>`
  },
  {
    href: 'https://github.com/JaCo1826',
    label: 'GitHub',
    sub: 'JaCo1826',
    icon: `<svg>...</svg>`
  }
]
</script>

<style lang="scss" src="SocialLinks.scss" />