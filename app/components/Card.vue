<template>
  <div class="card flex flex-col gap-4">
    <div
      class="relative"
      :class="{
        'corner-borders': cornerBorder,
        'w-full h-[425px]': layout === 'vertical',
        'w-[600px] h-[400px]': layout === 'horizontal'
      }"
    >
      <div class="w-full h-full relative group overflow-hidden">
        <NuxtImg
          provider="strapi"
          :src="image.url"
          :alt="image.alternativeText"
          class="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
  
        <div
          v-if="CTA"
          class="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          :class="layout === 'vertical' ? 'p-10' : 'py-10 px-32'"
        >
          <Button
            :width="ButtonWidth.Full"
            :variant="(CTA.variant as ButtonVariant)"
            :label="CTA.text"
            :href="CTA.link"
            :open-in-new-window="CTA.openInNewWindow"
            class="group-hover:animate-slideUp"
          />
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <time class="flex items-center gap-4 text-sm text-cherry px-6 border-r border-champagne">
        <div class="flex flex-col items-center">
          {{ monthShort }}
          <span
            class="text-2xl font-semibold font-heading"
            v-text="dayNumber"
          />
          {{ dayShort }}
        </div>
        <span
          v-if="layout === 'horizontal'"
          class="inline-flex text-2xl font-semibold font-heading"
          v-text="time"
        />
      </time>
      <h4
        class="px-6 text-champagne"
        v-text="name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/shared/Button.vue'

import { ButtonVariant, ButtonWidth } from '@/types/Button'

interface Props {
  image: any
  name: string
  date: string | Date
  CTA?: any
  cornerBorder?: boolean
  layout?: 'vertical' | 'horizontal'
}

const props = defineProps<Props>()

const date = new Date(props.date)
const monthShort = new Intl.DateTimeFormat('pl-PL', { month: 'short' }).format(date)
const dayNumber = date.getDate()
const dayShort = new Intl.DateTimeFormat('pl-PL', { weekday: 'long' }).format(date)
const time = date.toLocaleTimeString('pl-PL', {
  hour: '2-digit',
  minute: '2-digit',
})
</script>
