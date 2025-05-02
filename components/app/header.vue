<template>
  <nav class="bg-transparent absolute top-0 left-0 right-0 z-50 py-5">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="https://saudilawconf.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="/assets/logos/logo.svg"
          alt="مؤتمر المحاميين السعوديين"
        />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMenu()"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div :class="[isMenuOpen ? 'block' : 'hidden', 'w-full md:flex md:w-auto bg-[#000038] md:bg-transparent mt-3 md:mt-0 rounded-lg']" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent"
        >
          <li v-for="link in links" :key="link.path" class="relative">
            <NuxtLink
              :to="link.path"
              class="block py-3 px-2 md:px-0 text-center md:text-sm lg:text-lg text-white rounded-sm hover:bg-gray-400 md:hover:bg-transparent relative transition duration-300 ease-in-out"
              :class="{ 'md:ms-6': link.path === '#contact' }"
            >
              {{ link.name }}
              <span
                class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[7px] h-[7px] bg-white rounded-full opacity-0 transition-all duration-300 ease-in-out"
                :class="{ 'opacity-100': $route.path === link.path }"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from "vue";

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  const links = [
    { name: "عن الحدث", path: "#about" },
    { name: "الجدول الزمني", path: "/schedule" },
    { name: "المتحدثين الرئيسين", path: "/speakers" },
    { name: "الاسئله المتكرره", path: "#faqs" },
    { name: "تواصل معنا", path: "#contact" },
  ];
</script>

<style scoped>
  .nuxt-link-exact-active + span {
    opacity: 1 !important;
  }

  li:hover span {
    opacity: 1 !important;
  }
  @media (max-width: 768px) {
    li:hover span{
      opacity: 0 !important;
    }
    .nuxt-link-exact-active + span {
      opacity: 0 !important;
    }
  }
</style>
