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
        <!-- Nur noch ein einzelnes Bild -->
        <div class="slide-image-wrapper">
          <img :src="slide.imgMain" :alt="slide.title" loading="lazy" width="1920" height="1080" />
        </div>

        <h1 class="title">
          <span class="title-text">{{ slide.title }}</span>
        </h1>
      </li>
    </ul>

    <!-- Navigation bleibt gleich -->
    <ul class="slide-select">
      <li class="btn prev" @click="handlePrev" role="button" aria-label="Previous Slide">&lt;</li>
      <li
        v-for="(slide, index) in slides"
        :key="index"
        class="selector"
        :class="{ current: currentIndex === index }"
        @click="handleManualSelect(index)"
        role="button"
        :aria-label="'Go to slide ' + (index + 1)"
      ></li>
      <li class="btn next" @click="handleNext" role="button" aria-label="Next Slide">&gt;</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';

  const BASE_PATH = '/jaco-linktree';

  interface SlideData {
    title: string;
    imgMain: string; // Neu: Nur ein Hauptbild
    target: string;
  }

  const router = useRouter();

  const slidesData: SlideData[] = [
    {
      title: 'Landscapes',
      // Wählen Sie das beste Bild für die Kategorie aus
      imgMain: `${BASE_PATH}/Norwegen-Berg.webp`,
      target: '/projects/landscape-section',
    },
    {
      title: 'Wildlife',
      imgMain: `${BASE_PATH}/Pilze-1.webp`,
      target: '/projects/wildlife-section',
    },
    {
      title: 'Streetphotography',
      imgMain: `${BASE_PATH}/Norwegen-Brücke.webp`,
      target: '/projects/streetphotography-section',
    },
    {
      title: 'More',
      imgMain: `${BASE_PATH}/Frostbaum.webp`,
      target: '/projects',
    },
  ];

  const slides = ref<SlideData[]>(slidesData);
  const currentIndex = ref(0);

  let autoPlayInterval: ReturnType<typeof setInterval> | null = null;
  const SLIDE_DURATION = 6000;

  const cycle = (forcedIndex?: number) => {
    const total = slides.value.length;
    if (total === 0) return;
    currentIndex.value =
      typeof forcedIndex === 'number' ? forcedIndex : (currentIndex.value + 1) % total;
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayInterval = setInterval(cycle, SLIDE_DURATION);
  };

  const handleManualSelect = (index: number) => {
    if (index === currentIndex.value) return;
    stopAutoPlay();
    cycle(index);
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    cycle();
    startAutoPlay();
  };

  const handlePrev = () => {
    stopAutoPlay();
    cycle((currentIndex.value - 1 + slides.value.length) % slides.value.length);
    startAutoPlay();
  };

  const handleSlideClick = (url: string) => {
    if (url) router.push(url).catch(console.warn);
  };

  onMounted(startAutoPlay);
  onUnmounted(stopAutoPlay);
</script>

<style lang="scss" scoped src="./ImageSplitShowcase.scss"></style>