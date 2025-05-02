<template>
     <div class="max-w-[890px] mx-auto">
        <h1
          class="hero-description--title text-white text-[24px] md:text-[48px] pb-4 md:pb-8"
        >
          {{ heroContent[0]?.value }}
        </h1>
        <p
          class="hero-description--subtitle text-[#D7D7D7] text-[16px] md:text-[20px]"
        >
          {{ heroContent[1]?.value }}
        </p>
      </div>
</template>

<script setup>
const props = defineProps({
  heroContent: {
    type: Array,
    required: true,
  },
});

</script>

<style lang="scss" scoped>

</style>