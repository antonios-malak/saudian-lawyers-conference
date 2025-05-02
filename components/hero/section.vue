<template>
  <section class="hero md:pb-[50px]">
    <div class="hero-description pt-[170px] text-center md:pt-[320px]">
      <HeroDescription :heroContent="props.headerContent"/>
    </div>
    <div class="pt-[50px] md:pt-[90px] grid grid-cols-1 md:grid-cols-3 items-end justify-center gap-[70px] md:gap-0">
      <div class="hero-socials flex justify-center items-center gap-[50px] md:gap-0 md:justify-end md:me-[100px] order-1 md:order-3">
        <HeroSocial />
      </div>
      <div class="hero-nextArrow flex justify-center order-2 md:order-2">
        <a
          href="#about"
          class="hero-nextArrow--link relative w-[80px] h-[80px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300"
        >
          <svg
            class="w-8 h-8 transform rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div class="order-3 md:order-1">
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  headerContent: {
    type: Array,
    required: true,
  },
});

</script>

<style scoped>
  .hero {
    background-image: url("images/Hero/heroBg.png");
    background-size: cover;
    background-position: center;
  }
  .hero-nextArrow--link::after {
    content: "عن الحدث";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    text-align: center;
    margin-bottom: 15px;
    color: #d7d7d7;
    width: fit-content;
    text-wrap: nowrap;
  }
</style>
