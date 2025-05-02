<template>
  <!-- hero section  -->
  <HeroSection :headerContent="useSettingsStore().headerContent" />
   <!-- about section  -->
   <AboutSection :aboutContent="useSettingsStore().aboutContent"/>
  <!-- FAQ Section -->
  <FaqsSection />
  <!-- contact section -->
  <ContactSection />
</template>

<script setup>
useHead({
  title: 'Task code7x',
  meta: [
    { name: 'title', content: 'Task code7x' },
    { name: 'description', content: 'Task code7x description' }
  ]
})
</script>

<style scoped></style>
