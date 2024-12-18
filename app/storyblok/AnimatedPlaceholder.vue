<template>
  <NuxtMarquee
    autoFill
    :direction="direction"
    :speed="(blok.speed as number)"
    :class="`animated-placeholder bg-${blok.color} py-2 pointer-events-none select-none`"
  >
    <span
      v-if="blok?.text"
      v-text="blok?.text"
      class="inline-block font-bold text-2xl text-champagne mx-4"
    />
    <NuxtImg
      v-else-if="blok?.image?.filename"
      :src="blok?.image.filename"
      :alt="blok?.image.alt || 'Logo'"
      format="webp"
      loading="lazy"
      class="inline-block h-8 mx-10"
    />
  </NuxtMarquee>
</template>

<script setup lang="ts">
import type { AnimatedPlaceholder } from '~/types/storyblok'

interface Props {
  blok: AnimatedPlaceholder
  direction?: 'left' | 'right'
}

defineProps<Props>()
</script>
