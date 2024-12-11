<template>
  <section
    v-editable="blok"
    class="hero flex flex-col items-center text-center py-16"
  >
    <div class="w-1/2">
      <h1 class="text-champagne" v-text="blok.heading" />
      <p class="text-grey-pearl text-lg mt-6 mb-10" v-text="blok.subheading" />
    </div>
    <div class="flex items-center justify-center gap-4">
      <img
        v-for="(image, index) in blok.images"
        :key="image._uid"
        :src="image.filename"
        :alt="image.alt"
        class="w-20 rounded-full object-cover object-center"
        :class="[
          getImageHeight(index + 1),
          `image-${index + 1}`
        ]"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  blok: Object
}

defineProps<Props>()

const getImageHeight = (index: number) => {
  if (index === 1) {
    return 'h-[10rem]'
  }

  if (index === 2) {
    return 'h-[18rem]'
  }

  if (index === 3) {
    return 'h-[24rem]'
  }

  if (index === 4) {
    return 'h-[34rem]'
  }

  if (index === 5) {
    return 'h-[16rem]'
  }

  if (index === 6) {
    return 'h-[30rem]'
  }

  if (index === 7) {
    return 'h-[18rem]'
  }

  if (index === 8) {
    return 'h-[24rem]'
  }

  if (index === 9) {
    return 'h-[16rem]'
  }

  if (index === 10) {
    return 'h-[12rem]'
  }
}
</script>

<style lang="scss" scoped>

</style>