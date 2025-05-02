<template>
  <swiper
    :modules="modules"
    :slides-per-view="1.3"
    :centered-slides="true"
    :loop="true"
    :navigation="true"
    class="rounded-2xl overflow-hidden"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <a href="#">
        <div
          class="relative h-full w-full rounded-2xl overflow-hidden text-white transform-gpu transition-all duration-300 border border-white"
        >
          <img
            :src="slide.image"
            alt="Slide image"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40"></div>
          <div
            class="absolute bottom-6 p-5 w-full text-lg font-semibold text-right flex justify-around items-center gap-5"
          >
            <div class="text flex-1">{{ slide.text }}</div>
            <div class="arrow-container w-[40px] group">
              <a href="#" class="arrow-link">
                <el-icon class="arrow text-[24px]"
                  ><TopLeft
                    class="group-hover:text-black transition duration-300"
                /></el-icon>
              </a>
            </div>
          </div>
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>

<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation } from "swiper/modules";
  import { TopLeft } from "@element-plus/icons-vue";
  import "swiper/css";
  import "swiper/css/navigation";

  const modules = [Navigation];

  const slides = [
    {
      image: "images/Sections/Slider/slider1.png",
      text: "ملتقى قانوني يغير المستقبل",
    },
    {
      image: "images/Sections/Slider/slider2.png",
      text: "المؤتمر القانوني الدولي",
    },
    {
      image: "images/Sections/Slider/slider3.png",
      text: "التشريعات الحديثة في العالم العربي",
    },
  ];
</script>

<style scoped>
  .swiper-slide {
    transition: all 0.3s ease;
    height: 300px;
    width: 50px;
    border-radius: 20px;
    overflow: hidden;
    transform: scale(0.85);
    opacity: 0.6;
    position: relative;
    z-index: 1;
  }

  .swiper-slide-active {
    transform: scale(1);
    z-index: 2;
    height: 300px;
    opacity: 1;
    position: relative;
  }

  .swiper {
    position: relative;
    padding: 25px 25px 80px 25px ;
  }
  .arrow-link {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }

  .arrow-container:hover .arrow-link {
    background-color: #fff;
  }
  :deep(.swiper-button-prev), :deep(.swiper-button-next) {
    top: auto;
    bottom: 0;
    width: 40px;
    height: 40px;
    border: 1px solid #3C3CB4;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.3s ease;
    color: #fff
  }

  :deep(.swiper-button-prev) {
    right: 35%;
  }

  :deep(.swiper-button-next) {
    left: 35%;
  }

  :deep(.swiper-button-prev:hover), :deep(.swiper-button-next:hover) {
    background-color: #3C3CB4;
    border-color: #fff;
    color: #fff;
  }

  :deep(.swiper-button-prev::after), :deep(.swiper-button-next::after) {
    font-size: 16px;
  }
</style>
