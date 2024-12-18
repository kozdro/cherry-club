<template>
  <section
    v-editable="blok"
    class="hero container flex flex-col items-center text-center py-16 gap-8"
  >
    <div class="w-full md:w-3/4 lg:w-1/2 z-[2]">
      <h1 v-text="blok.heading" />
      <p
        v-if="blok.subheading"
        class="text-lg mt-4"
        v-text="blok.subheading"
      />
    </div>
    <div class="flex items-center justify-center gap-4 z-[0]">
      <NuxtImg
        v-for="(image, index) in blok.images"
        :key="image.id"
        :src="image.filename"
        :alt="image.alt"
        format="webp"
        fit="cover"
        loading="lazy"
        class="w-20 rounded-full object-cover object-center"
        :class="getImageSizeClass(index + 1)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Image } from '~/types/storyblok'

interface Props {
  blok: {
    heading: string
    subheading: string
    images: Image[]
  }
}

defineProps<Props>()

const getImageSizeClass = (index: number) => {
  const sizeMap = {
    1: 'h-[10rem]',
    2: 'h-[18rem]',
    3: 'h-[24rem]',
    4: 'h-[34rem]',
    5: 'h-[16rem]',
    6: 'h-[30rem]',
    7: 'h-[18rem]',
    8: 'h-[24rem]',
    9: 'h-[16rem]',
    10: 'h-[12rem]',
  }

  return sizeMap[index] || 'h-24'
}
</script>
