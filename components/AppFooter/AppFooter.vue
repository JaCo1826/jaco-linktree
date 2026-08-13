<template>
  <footer class="footer">
    <div class="footer-line">
      <div class="footer-dot" />
      <p class="footer-loc">📍 Germany</p>
      <div class="footer-dot" />
    </div>

    <div class="impressum-section">
      <p class="impressum-name">Colin Noel Held</p>
      <p class="impressum-loc">Soltau, Deutschland</p>
      <p class="impressum-title">Photographer</p>
    </div>

    <div class="footer-links">
      <a href="mailto:jaco1766@proton.me" class="footer-link">Kontakt</a>
      <span class="footer-link-separator">·</span>
      <NuxtLink to="/impressum" class="footer-link">Impressum</NuxtLink>
    </div>

    <p class="footer-credit">
      Template basierend auf
      <a href="https://www.e-recht24.de" target="_blank" rel="noopener" class="footer-credit-link"
        >e-recht24.de</a
      >
    </p>
  </footer>
</template>
<script></script>
<style lang="scss" scoped src="./AppFooter.scss" />
