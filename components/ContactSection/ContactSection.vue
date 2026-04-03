<template>
  <section class="contact-section">
    <!-- ── Contact tile ── -->
    <div class="contact-section">
      <div class="contact-divider">
        <span class="contact-divider-label">Kontakt</span>
      </div>

      <a href="mailto:jaco1766@proton.me" class="contact-tile">
        <!-- Left accent with camera SVG -->
        <div class="contact-accent">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="position: relative; z-index: 1"
          >
            <path
              d="M9 3L7.17 5H4C2.9 5 2 5.9 2 7v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9z"
              fill="rgba(168,197,160,0.5)"
            />
            <circle
              cx="12"
              cy="13"
              r="3.2"
              fill="none"
              stroke="rgba(168,197,160,0.65)"
              stroke-width="1.5"
            />
            <circle cx="12" cy="13" r="1.3" fill="rgba(168,197,160,0.4)" />
          </svg>
          <span class="contact-accent-label">Mail</span>
        </div>

        <!-- Right body -->
        <div class="contact-body">
          <span class="contact-body-label">Schreib mir</span>
          <span class="contact-email">jaco1766@proton.me</span>
          <span class="contact-cta">
            Mail öffnen
            <span class="contact-cta-arrow">→</span>
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped src="./ContactSection.scss" />
