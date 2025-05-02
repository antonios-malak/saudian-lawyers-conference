<template>
    <div class="hero-socials--links flex flex-row md:flex-col items-center gap-3 ">
      <a
        v-for="icon in icons"
        :key="icon.name"
        :href="icon.link"
        target="_blank"
        class=" hero-socials--links-brand w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300"
      >
        <i :class="`fa-brands fa-${icon.icon}`"></i>
      </a>
    </div>
  </template>
  
  <script setup>
  const icons = [
    { name: 'Facebook', link: 'https://www.facebook.com', icon: 'facebook-f' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com', icon: 'linkedin-in' },
    { name: 'Twitter', link: 'https://www.twitter.com', icon: 'twitter' },
    { name: 'Instagram', link: 'https://www.instagram.com', icon: 'instagram' },
  ]
  </script>
  
  <style scoped>
  </style>
  