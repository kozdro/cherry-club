<template>
  <div class="flex flex-col min-h-screen relative">
    <Header />
    <main class="flex-grow py-20">
      <div class="container">
        <slot />
      </div>
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">

</script>

<style>
main {
  background: radial-gradient(circle at -20% -40%, rgba(139, 0, 0, 0.7), transparent 50%), radial-gradient(circle at 150% 10%, rgba(139, 0, 0, 0.7), transparent 50%), black;
}
</style>