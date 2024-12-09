<template>
  <section class="relative top-[-72px] h-screen overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      loading="lazy"
      :poster="config.public.STRAPI_URL + backgroundPlaceholder.url"
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source
        :src="config.public.STRAPI_URL + background.url"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 bg-black/60" />

    <div class="relative z-10 flex flex-col items-center justify-center h-full">
      <NuxtImg
        provider="strapi"
        :src="image.url"
        :alt="image.alternativeText"
        loading="lazy"
        class="w-32 md:w-48 lg:w-80 mb-6"
      />
      
      <h1
        class="hero-heading uppercase text-champagne"
        v-text="heading"
      />
      <h2
        class="text-base-regular text-champagne mt-6 py-2 px-8 border-y border-gold-dark"
        v-text="subtitle"
      />

      <div class="mt-16 flex flex-col md:flex-row gap-6">
        <Button
          v-for="button in CTA"
          :key="button.id"
          :variant="(button.variant as ButtonVariant)"
          :href="button.link"
          :open-in-new-window="button.openInNewWindow"
          :label="button.text"
        />
      </div>
    </div>

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
      <ChevronDownIcon class="w-6 h-6 text-gold animate-bounce" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/shared/Button.vue'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?skipsvgo'

import { ButtonVariant } from '@/types/Button'

interface Props {
  heading: string
  subtitle?: string
  background: any
  backgroundPlaceholder?: any
  image?: any
  CTA?: any[]
}

defineProps<Props>()

const config = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.hero-heading {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(-80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
