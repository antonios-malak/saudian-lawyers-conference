<template>
  <footer>
    <div class="footer py-[24px] md:py-[64px]">
      <div class="container mx-auto">
        <div class="footer-logo text-center mx-auto w-fit pb-6">
          <img
            src="/assets/logos/FooterLogo.svg"
            alt="جمعيه المحاميين السعوديين"
            class="footer-logo--image w-50"
          />
        </div>
        <div class="footer-social">
          <div
            class="footer-social--links flex items-center justify-center max-w-[196px] mx-auto pb-6"
          >
            <a
              href="https://www.instagram.com"
              class="w-10 h-10 flex items-center justify-center text-[#9D9DE4] hover:text-white transition duration-300"
            >
              <i class="fa-brands fa-instagram text-[20px]"></i>
            </a>
            <a
              href="https://www.twitter.com"
              class="w-10 h-10 flex items-center justify-center text-[#9D9DE4] hover:text-white transition duration-300"
            >
              <i class="fa-brands fa-twitter text-[20px]"></i>
            </a>

            <a
              href="https://www.linkedin.com"
              class="w-10 h-10 flex items-center justify-center text-[#9D9DE4] hover:text-white transition duration-300"
            >
              <i class="fa-brands fa-linkedin-in text-[20px]"></i>
            </a>
            <a
              href="https://www.facebook.com"
              class="w-10 h-10 flex items-center justify-center text-[#9D9DE4] hover:text-white transition duration-300"
            >
              <i class="fa-brands fa-square-facebook text-[20px]"></i>
            </a>
          </div>
        </div>
        <div class="footer-links max-w-[80%] mx-auto px-4 pb-6 sm:px-6 lg:px-8">
          <div
            class="grid grid-cols-3 justify-between justify-items-center gap-4 md:gap-24"
          >
            <!-- footer Links1 -->
            <div class="footer-links--1">
              <h3
                class="text-[14px] md:text-[18px] font-semibold text-[#D7D7D7] tracking-wider"
              >
                الرئيسيه
              </h3>
              <ul class="mt-4 space-y-2">
                <li v-for="(link, index) in footerLinks1" :key="index">
                  <NuxtLink
                    :to="link.path"
                    class="text-gray-600 hover:text-gray-300 transition duration-300 text-[12px] md:text-[14px]"
                  >
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <!-- footer Links2  -->
            <div class="footer-links--2">
              <h3
                class="text-[14px] md:text-[18px] font-semibold text-[#D7D7D7] tracking-wider"
              >
                عن المؤتمر
              </h3>
              <ul class="mt-4 space-y-2">
                <li v-for="(link, index) in footerLinks2" :key="index">
                  <NuxtLink
                    :to="link.path"
                    class="text-gray-600 hover:text-gray-300 transition duration-300 text-[12px] md:text-[14px]"
                  >
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <!-- Contact Information -->
            <div class="footer-links--contact">
              <h3
                class="text-[14px] md:text-[18px] font-semibold text-gray-200"
              >
                تواصل معنا
              </h3>
              <div class="mt-4 space-y-2 mb-2">
                <a
                  href="mailto:Saudi@Gmail.com"
                  class="text-[12px] md:text-[14px] text-gray-500 hover:text-gray-300 transition duration-300"
                >
                  {{ footerItems[0].value }}
                </a>
              </div>
              <div class="mb-2">
                <a
                  href="tel:051234567"
                  class="text-[12px] md:text-[14px] text-gray-600 hover:text-gray-300 transition duration-300"
                >
                  {{ footerItems[1].value }}
                </a>
              </div>
              <div class="mb-2">
                <span class="text-[12px] md:text-[14px] text-gray-600">{{
                  footerItems[2].value
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/public/images/Footer/frame.png"
          alt="decorated-border"
          class="footer-border w-full"
        />
        <div
          class="footer-copyrights flex items-center justify-between flex-col md:flex-row pt-6 md:pt-16 md:gap-6"
        >
          <div class="footer-copyrights--sponsor flex items-center">
            <p
              class="text-[#A7A7A7] text-[10px] md:text-[16px] text-nowrap pe-4"
            >
              الراعي الرسمي للمؤتمر
            </p>
            <a :href="footerItems[3].value" target="_blank">
              <img
                src="/public/images/Footer/SponsorLogo.svg"
                alt="sponsor"
                class="w-full"
              />
            </a>
          </div>
          <div
            class="footer-copyrights--signature text-center text-[10px] md:text-[16px] text-[#A7A7A7]"
          >
            <p>جميع الحقوق محفوظة للمؤتمر السعودي</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const footerItems = useSettingsStore().footerContent;

  const footerLinks1 = [
    { text: "عن الحدث", path: "#about" },
    { text: "المتحدثون", path: "/" },
    { text: "الاسئله المكررة", path: "#faqs" },
  ];
  const footerLinks2 = [
    { text: "عن الحدث", path: "#about" },
    { text: "الشركاء", path: "/" },
    { text: "الانضمام", path: "#contact" },
  ];
</script>

<style scoped>
  .footer {
    background-image: linear-gradient(
      to top,
      rgba(1, 1, 34, 1),
      rgba(1, 1, 55, 1)
    );
  }
</style>
