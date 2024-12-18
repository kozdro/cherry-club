<template>
  <section
    v-editable="blok"
    :id="id"
    class="gallery container py-16 grid grid-cols-4 gap-4 auto-rows-[1fr]"
  >
    <div
      v-if="blok.heading"
      class="col-span-2 row-span-2 flex flex-col p-20"
    >
      <h2
        class="h1 my-auto"
        v-text="blok.heading"
      />
      <Button
        v-if="blok.cta?.[0]"
        :size="ButtonSize.Small"
        :variant="ButtonVariant.Tertiary"
        :href="blok.cta[0].link?.url"
        :target="blok.cta[0].link?.target"
        :label="blok.cta[0].label"
        class="mt-auto"
      />
    </div>

    <a
      v-for="(image, index) in blok.images"
      :key="index"
      :href="image.filename"
      :data-pswp-width="extractImageSize(image.filename)?.width"
      :data-pswp-height="extractImageSize(image.filename)?.height"
      rel="noreferrer"
      target="_blank"
      class="pswp-gallery-item"
      :class="getImageClass(index)"
    >
      <NuxtImg
        :src="image.filename"
        :alt="image.alt"
        format="webp"
        loading="lazy"
        fit="cover"
        class="w-full h-full object-cover object-center rounded-xl hover:scale-105 transition-transform duration-300"
      />
    </a>
  </section>
</template>


<script setup lang="ts">
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

import type { CTA, Image } from '~/types/storyblok'
import { ButtonSize, ButtonVariant } from '~/types/Button'

interface Props {
  blok: {
    heading?: string
    cta?: CTA[]
    mainImage: Image
    images: Image[]
  }
}

defineProps<Props>()

const id = useId()
const lightbox = ref<PhotoSwipeLightbox | null>(null)

const getImageClass = (index: number) => {
  if (index === 0) {
    return 'col-span-2 row-span-3'
  }

  if (index === 1 || index === 2) {
    return 'col-span-1 row-span-1'
  }

  if (index === 3) {
    return 'col-span-2 row-span-2'
  }

  return 'col-span-1 row-span-1'
}

const extractImageSize = (url: string): { width: number; height: number } | null => {
  const sizeMatch = url.match(/\/(\d+)x(\d+)\//)

  if (sizeMatch) {
    const [, width, height] = sizeMatch

    return {
      width: parseInt(width, 10),
      height: parseInt(height, 10),
    }
  }
  return null
}


onMounted(() => {
  if (!lightbox.value) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: '#' + id,
      children: '.pswp-gallery-item',
      pswpModule: () => import('photoswipe'),
    })

    lightbox.value.init()
  }
})

onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy()
    lightbox.value = null
  }
})
</script>
