<template>
  <section class="about py-20 relative" id="about">
    <div class="about-section text-right container mx-auto px-4 relative">
      <h1
        class="about-section--head relative w-[107px] mx-auto mb-10 text-[16px] text-gray-400 text-center md:rotate-90 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[-35px] md:m-0"
      >
        عن الحدث
      </h1>

      <div
        class="about-section--content  flex flex-col md:flex-row justify-between items-center gap-12 md:gap-25"
      >
        <div class="about-section--content--right md:pr-10 w-full md:w-1/2">
          <div class="about-section--content--right-count-down flex justify-center items-center gap-2 mb-6">
           <AboutCountDown/>
          </div>
          <div class="about-section--content--right-description text-center md:text-start">
            <h3 class="text-6 md:text-[40px] text-white mb-5">
              {{ aboutContent[0]?.value }}
            </h3>
            <p class="text-[#D7D7D7] text-[14px] md:text-[16px] mb-5">
              {{ aboutContent[1]?.value }}
            </p>

            <NuxtLink
              to="#"
              class="block ms-auto me-auto md:me-auto w-fit text-white text-[14px] md:text-4 mt-8 bg-[#3C3CB4] hover:bg-[#3e4ed6] transition duration-300 px-6 py-2 rounded-lg  "
            >
              معرفة المزيد
            </NuxtLink>
          </div>
        </div>
        <div class="about-section--content--left w-full md:w-1/2 overflow-hidden  ">
          <AboutCarousel />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  aboutContent: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
  .about {
    background-image: linear-gradient(to top, rgba(0, 0, 20), rgba(0, 0, 56)),
      url("images/Sections/sectionBg.png");
    background-blend-mode: saturation;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .about-section--head::before,
  .about-section--head::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 32px;
    height: 2px;
    background-color: #6366f1;
    transform: translateY(-50%);
  }

  .about-section--head::before {
    right: 100%;
    margin-right: 16px;
  }

  .about-section--head::after {
    left: 100%;
    margin-left: 16px;
  }
</style>
