<template>
  
    <div
      v-for="(value, key) in timeLeft"
      :key="key"
      dir="ltr"
      class="flex flex-col gap-1 justify-center items-center text-center bg-transparent border border-[#FFFFFF4D] w-[70px] h-[80px] md:w-[111px] md:h-[113px] rounded-2xl"
    >
      <div class="text-[#fff] text-2xl font-bold">{{ value}}</div>
      <div class="text-sm text-gray-300">{{ labels[key] }}</div>
    </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const timeLeft = ref({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  });

  const labels = {
    seconds: "الثواني",
    minutes: "الدقائق",
    hours: "الساعات",
    days: "الأيام",
  };

  const updateCountdown = () => {
    const target = new Date("2025-06-10T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;

    const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    );

    timeLeft.value = { seconds, minutes, hours, days };
  };

  let interval;

  onMounted(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });

  onUnmounted(() => {
    clearInterval(interval);
  });
</script>

<style scoped></style>
