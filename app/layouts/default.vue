<template>
  <div class="flex flex-col min-h-screen relative">
    <Header />
    <main class="flex-grow py-20">
      <slot />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">

</script>

<style>
main {
  background: linear-gradient(180deg, #121212, #2C2C2C);

  /* background: linear-gradient(135deg, #121212, #2C2C2C, #B39F6D); */

  /* background: radial-gradient(circle, #121212, #1E1E1E);
  background-size: 200%; */

  /* background: 
    radial-gradient(circle at -20% -40%, rgba(179, 159, 109, 0.3), transparent 50%),
    radial-gradient(circle at 150% 10%, rgba(179, 159, 109, 0.3), transparent 50%),
    linear-gradient(to bottom, #121212, #1E1E1E); */

  /* background:
    radial-gradient(circle at -20% -40%, rgba(179, 159, 109, 0.7), transparent 50%),
    radial-gradient(circle at 150% 10%, rgba(179, 159, 109, 0.7), transparent 50%),
    rgb(15, 15, 15); */
}
</style>