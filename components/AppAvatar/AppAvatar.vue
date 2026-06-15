<template>
  <div class="avatar-wrap">
    <div class="avatar-ring-2" />
    <div class="avatar-ring" />
    <img
      ref="avatarImg"
      class="avatar"
      :src="src"
      alt="JaCo"
      v-show="!isLoading"
      @load="isLoading = false"
      @error="isLoading = false"
    />

    <div v-if="isLoading" class="avatar-spinner-wrap">
      <div class="avatar-spinner" />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    src: string;
  }>();

  const isLoading = ref(true);
  const avatarImg = ref<HTMLImageElement | null>(null);

  onMounted(() => {
    if (avatarImg.value?.complete) {
      isLoading.value = false;
    }
  });
</script>

<style lang="scss" scoped src="./AppAvatar.scss" />
