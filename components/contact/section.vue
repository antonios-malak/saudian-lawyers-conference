<template>
  <section class="contact py-20" id="contact">
    <div class="contact-section text-right container mx-auto px-4">
      <h1
        class="contact-section--head relative w-[82px] mx-auto text-[16px] text-gray-400 mb-20 text-center"
      >
        تواصل معنا
      </h1>
      <div
        class="contact-section--content rounded-md w-full flex flex-col lg:flex-row align-center justify-between gap-10 lg:gap-0"
      >
        <div class="contact-section--content--title flex-1">
          <div
            class="ps-25 w-fit me-auto text-[30px] sm:text-[48px] text-gray-300"
          >
            <p>تواصل <span class="text-[#6B6BCD]">معنا</span></p>
            <p
              class="contact-section--content--title-pseude-text relative ps-20"
            >
              للانضمام
            </p>
            <p>للمؤتمر</p>
          </div>
        </div>
        <div class="contact-section--content--form flex-1">
          <ContactForm @handle-submit="submit" :isloading="isloading" :success="success" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  import { homeService } from "~/services/home";

  const isloading = ref(false);
  const success = ref(false);


  const submit = async (values) => {
    isloading.value = true;
    try {
      const res = await homeService.submitContact(values);
      console.log(res);
      success.value = true;
      toast.success(res.message, {
      autoClose: 3000,
      position: toast.POSITION.BOTTOM_CENTER,
      rtl: true,
      theme: "dark",
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message, {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_CENTER,
        rtl: true,
        theme: "dark",
      });
    } finally {
      isloading.value = false;
      if (success.value === true) {
        setTimeout(() => {
          success.value = false;
        }, 3000);
      }
    }
  };
</script>

<style scoped>
  .contact {
    background-image: linear-gradient(to top, #000038, #010116);
  }

  .contact-section--content--title-pseude-text::after {
    content: ""; 
    position: absolute;
    width: 146px; 
    height: 2px; 
    background-color: #6366f1; 
    right: -100px;
    top: 70%;
  }
  .contact-section--head::before,
  .contact-section--head::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 32px;
    height: 2px;
    background-color: #6366f1;
    transform: translateY(-50%);
  }

  .contact-section--head::before {
    right: 100%;
    margin-right: 16px;
  }

  .contact-section--head::after {
    left: 100%;
    margin-left: 16px;
  }
</style>
