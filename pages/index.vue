<template>
  <main class="home-content">
    <FloatingLeaves />

    <div class="first-screen-wrapper">
      <div class="home-body">
        <AppHero />
        <SocialLinks />
        <AppDivider />
        <ContactSection />
      </div>
    </div>

    <ImageSplitShowcase id="showcase" />

    <ChapterLandscape id="landscape" />
    <ChapterWildlife id="wildlife" />
    <ChapterStreetphotography id="streetphotography" />
    <MoreSection />
    <BioSection />
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
  import { onMounted, nextTick } from 'vue';

  onMounted(async () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    await nextTick();

    const chapters = document.querySelectorAll('.chapter');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in-view');
        });
      },
      { threshold: 0.2 }
    );
    chapters.forEach((c) => io.observe(c));
  });
</script>

<style lang="scss" scoped>
  .home-content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 0;
  }

  .first-screen-wrapper {
    width: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: clamp(20px, 6vw, 40px);
    padding-block: 40px;
  }
</style>
