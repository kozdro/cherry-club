<template>
  <div class="dj-card p-2 rounded-xl bg-grey-dark flex flex-col gap-2 shadow-xl">
    <div class="grow-0 w-full">
      <NuxtImg
        :src="image.filename"
        :alt="image.alt"
        format="webp"
        fit="cover"
        loading="lazy"
        class="rounded-xl max-h-96"
      />
    </div>

    <div class="grow flex items-center justify-between w-full h-full gap-4 p-4">
      <div class="flex flex-col gap-2">
        <h3 v-text="name" />
        <span
          v-if="type"
          class="text-grey"
          v-text="type"
        />
      </div>
      <a
        v-if="link?.url"
        :href="link.url"
        :target="link.target"
        class="w-10 h-10 p-2 rounded-full bg-gold-dark flex items-center justify-center"
      >
        <PlayIcon class="text-gold-champagne" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayIcon from '~/assets/icons/play.svg?skipsvgo'

import type { DJ } from '~/types/storyblok'

defineProps<DJ>()
</script>
