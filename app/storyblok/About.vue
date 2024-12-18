<template>
  <section
    v-editable="blok"
    class="about container py-16"
  >
    <div class="mb-10 text-center flex flex-col items-center">
      <h2 v-text="blok.heading" />
      <p
        v-if="blok.description"
        class="text-lg mt-4 md:w-2/3"
        v-text="blok.description"
      />
    </div>

    <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="feature in blok.features"
        :key="feature._uid"
        class="relative flex flex-col gap-4 items-center text-center group"
      >
        <div class="relative overflow-hidden rounded-xl shadow-lg w-full h-40 md:h-56">
          <NuxtImg
            :src="feature.image?.filename"
            :alt="feature.image?.alt"
            format="webp"
            fit="cover"
            laoding="lazy"
            class="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-110"
          />

          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div
            v-if="feature.button_label && feature.button_link?.url"
            class="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 group-hover:bottom-1/3 transition-all duration-300"
          >
            <Button
              :variant="ButtonVariant.Primary"
              :href="feature.button_link.url"
              :label="feature.button_label"
            />
          </div>
        </div>
        <h4 v-text="feature.title" />
      </div>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import Button from '~/components/shared/Button.vue'

import { ButtonVariant } from '~/types/Button'
import type { Image } from '~/types/storyblok'

interface Props {
  blok: {
    heading: string
    description: string
    features: Array<{
      image: Image
      title: string
      button_label: string
      button_link: {
        url: string
        target: string
      }
    }>
  }
}

defineProps<Props>()
</script>
