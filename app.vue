<template>
  <div v-if="isInitialLoadComplete" id="__app" dir="rtl">
    <Loading />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <loading v-else />
</template>

<script setup>
  import { onMounted } from "vue";
  import { useSettingsStore } from "~/stores/settingStore";
  import { useLoadingStore } from "~/stores/loadingStore";

  const settingsStore = useSettingsStore();
  const loadingStore = useLoadingStore();
  const { isInitialLoadComplete } = useInitialLoad();

  const initialDataLoading = async () => {
    try {
      loadingStore.startLoading();
      await settingsStore.getSettingData();
    } catch (error) {
      console.error("Failed to load initial data:", error);
    } finally {
      isInitialLoadComplete.value = true;
    }
  };
  onMounted(() => {
    initialDataLoading();
  });
</script>

<style>
  body {
    font-family: "DiodrumArabic";
    font-weight: 400;
  }
  html {
    scroll-behavior: smooth;
  }
</style>
