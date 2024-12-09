<template>
  <div class="flex flex-col min-h-screen relative">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">

</script>

<style>
main {
  background: radial-gradient(circle, #121212, #2C1A1A);
}
</style>