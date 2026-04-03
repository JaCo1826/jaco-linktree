<template>
  <main class="landscape-page">
    <FloatingLeaves />

    <h1>Landscapes Portfolio</h1>

    <div class="landscape-collage">
      <div class="section-1">
        <h2>Germany</h2>
        <img src="/bench-spring.webp" alt="Bench" />
        <img src="/Bahnschienen.webp" alt="Bahnschienen" class="wideAndHeight" />
        <img src="/Frostbaum.webp" alt="Frostbaum" class="height" />
        <img src="/Herbstblatt.webp" alt="Herbstblatt" />
        <img src="/MoosLichtung.webp" alt="Moos Lichtung" />
        <img src="/Pilze-1.webp" alt="Pilze" />
        <img src="/Pilze-2.webp" alt="Pilze" class="wide" />
        <img src="/Schienen-Licht.webp" alt="Schienen Licht" />
      </div>

      <div class="section-2">
        <h2>Norway</h2>
        <img src="/Norwegen-MiniWasserfall.webp" alt="Mini Wasserfall" class="height" />
        <img src="/Norwegen-Berg.webp" alt="Berg" />
        <img src="/Norwegen-Brücke.webp" alt="Brücke" class="wide" />
        <img src="/Norwegen-Farn.webp" alt="Farn" />
        <img src="/Norwegen-See.webp" alt="See" />
        <img src="/Norwegen-Galdhoeppigen-1.webp" alt="Galdhoeppigen" class="wideAndHeight" />
        <img src="/Norwegen-Galdhoeppigen-2.webp" alt="Galdhoeppigen" class="height" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'JaCo – Landscapes Portfolio',
  });
</script>

<style lang="scss" scoped src="./LandscapeSection.scss" />
