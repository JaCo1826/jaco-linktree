<template>
  <div class="showcase-container">
    <ul class="slides">
      <li
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: currentIndex === index }"
        @click="handleSlideClick(slide.target)"
      >
        <div class="slide-image-wrapper">
          <img :src="slide.imgMain" :alt="slide.title" loading="lazy" width="1920" height="1080" />
        </div>

        <!-- Vignette -->
        <div class="slide-vignette" aria-hidden="true"></div>

        <!-- Textinhalt -->
        <div class="slide-content">
          <div class="slide-eyebrow" aria-hidden="true">
            <span class="eyebrow-line"></span>
            <span class="eyebrow-text">Photography Series</span>
          </div>
          <h1 class="slide-title">
            <span class="title-inner">{{ slide.title }}</span>
          </h1>
          <div class="slide-underline" aria-hidden="true"></div>
          <p class="slide-sub">{{ slide.subtitle }}</p>
        </div>
      </li>
    </ul>

    <!-- Vertikale Progress-Leiste links -->
    <ul class="progress-bar" aria-hidden="true">
      <li
        v-for="(slide, index) in slides"
        :key="index"
        class="prog-item"
        :class="{ cur: currentIndex === index }"
        @click="handleManualSelect(index)"
      >
        <span class="prog-fill" :style="progressStyle(index)"></span>
      </li>
    </ul>

    <!-- Slide-Zähler -->
    <div class="slide-counter" aria-live="polite">
      {{ padded(currentIndex + 1) }} / {{ padded(slides.length) }}
    </div>

    <!-- Navigations-Pfeile rechts unten -->
    <div class="slide-nav">
      <button class="nav-btn" @click="handlePrev" aria-label="Vorheriger Slide">&#8592;</button>
      <button class="nav-btn" @click="handleNext" aria-label="Nächster Slide">&#8594;</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';

  interface SlideData {
    title: string;
    subtitle: string;
    imgMain: string;
    target: string;
  }

  const router = useRouter();
  const config = useRuntimeConfig();
  const basePath = config.app.baseURL;

  const slidesData: SlideData[] = [
    {
      title: 'Landscapes',
      subtitle: 'Mountains, fjords & open horizon',
      imgMain: `${basePath}NorwayMountainscapes.webp`,
      target: '/projects/landscape-section',
    },
    /* FUTURE
    {
      title: 'Wildlife',
      subtitle: 'Moments of stillness & encounter',
      imgMain: `${basePath}Firefly-tbc.png`,
      target: '/projects/wildlife-section',
    },
     */
    {
      title: 'Streetphotography',
      subtitle: 'Urban rhythm & architectural symmetry',
      imgMain: `${basePath}DSC_5875.webp`,
      target: '/projects/streetphotography-section',
    },
  ];

  const slides = ref<SlideData[]>(slidesData);
  const currentIndex = ref(0);
  const progressPercent = ref(0); // 0–100

  const SLIDE_DURATION = 6000;
  const TICK = 50; // ms pro Tick

  let autoPlayInterval: ReturnType<typeof setInterval> | null = null;
  let progressInterval: ReturnType<typeof setInterval> | null = null;
  let reduceMotion = false;

  // --- Hilfsfunktionen ---

  const padded = (n: number) => String(n).padStart(2, '0');

  const progressStyle = (index: number) => {
    if (index !== currentIndex.value) return { height: '0%', transition: 'none' };
    return {
      height: `${progressPercent.value}%`,
      transition: `height ${TICK}ms linear`,
    };
  };

  // --- Steuerung ---

  const stopProgress = () => {
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
    progressPercent.value = 0;
  };

  const startProgress = () => {
    if (reduceMotion) return;
    stopProgress();
    const steps = SLIDE_DURATION / TICK;
    const increment = 100 / steps;
    progressPercent.value = 0;

    progressInterval = setInterval(() => {
      progressPercent.value = Math.min(progressPercent.value + increment, 100);
    }, TICK);
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  };

  const cycle = (forcedIndex?: number) => {
    const total = slides.value.length;
    if (total === 0) return;
    currentIndex.value =
      typeof forcedIndex === 'number' ? forcedIndex : (currentIndex.value + 1) % total;
    startProgress();
  };

  const startAutoPlay = () => {
    if (reduceMotion) return;
    stopAutoPlay();
    autoPlayInterval = setInterval(cycle, SLIDE_DURATION);
  };

  const goTo = (forcedIndex?: number) => {
    stopAutoPlay();
    stopProgress();
    cycle(forcedIndex);
    startAutoPlay();
  };

  const handleManualSelect = (index: number) => {
    if (index === currentIndex.value) return;
    goTo(index);
  };

  const handleNext = () => goTo();

  const handlePrev = () =>
    goTo((currentIndex.value - 1 + slides.value.length) % slides.value.length);

  const handleSlideClick = (url: string) => {
    if (url) router.push(url).catch(console.warn);
  };

  onMounted(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    startProgress();
    startAutoPlay();
  });

  onUnmounted(() => {
    stopAutoPlay();
    stopProgress();
  });
</script>

<style lang="scss" scoped src="./ImageSplitShowcase.scss"></style>
