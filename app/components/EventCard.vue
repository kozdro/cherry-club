<template>
  <article class="event-card p-2 rounded-xl bg-grey-dark flex flex-col gap-2 shadow-xl">
    <div class="grow-0 w-full">
      <NuxtLink
        :to="link"
        class="rounded-xl"
      >
        <NuxtImg
          :src="image.filename"
          :alt="image.alt"
          format="webp"
          fit="cover"
          loading="lazy"
          class="rounded-xl"
        />
      </NuxtLink>
    </div>

    <div class="grow flex flex-col w-full h-full gap-4 p-4">
      <div class="flex justify-between">
        <time class="flex pointer-events-none">
          <div class="flex flex-col items-center justify-center">
            <span
              class="text-sm leading-none"
              v-text="parsedDate.dayShort"
            />
            <span
              class="text-4xl font-medium font-serif"
              v-text="parsedDate.dayNumber"
            />
            <span
              class="text-sm"
              v-text="parsedDate.monthShort"
            />
          </div>
          <div class="flex flex-col items-center justify-center ml-2 pl-4 border-l border-gold-dark">
            <span
              class="flex items-end text-3xl font-medium font-serif"
              v-text="parsedDate.hour"
            />
            <span
              class="flex items-start text-sm"
              v-text="parsedDate.ampm"
            />
          </div>
        </time>

        <NuxtLink
          v-if="facebook_event?.url"
          :to="facebook_event.url"
          class="w-fit h-fit p-2 bg-gold-dark flex items-center justify-center group transition rounded-xl"
        >
          <FacebookIcon class="text-grey-dark group-hover:text-gold-champagne w-6 h-6 transition" />
        </NuxtLink>
      </div>

      <h3
        class="line-clamp-ellipsis h-[90px] pointer-events-none"
        v-text="title"
      />

      <div class="w-full flex gap-4 mt-auto mb-2">
        <Button
          v-for="(link, index) in links"
          :key="link._uid || index"
          :width="ButtonWidth.Full"
          :variant="index === 0 ? ButtonVariant.Primary : ButtonVariant.Secondary"
          :label="link.label"
          :href="link.link?.url"
          :target="link.link?.target"
          class="basis-1/2"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ButtonVariant, ButtonWidth } from '~/types/Button'
import type { Event } from '~/types/storyblok'

import FacebookIcon from '@/assets/icons/facebook.svg?skipsvgo'

interface Props extends Event {
  link?: string
  timestamp?: string
}

const props = defineProps<Props>()

const parseDate = (dateString: string) => {
  const date = new Date(dateString.replace(' ', 'T'))
  const dayShort = new Intl.DateTimeFormat('pl', { weekday: 'short' }).format(date)
  const dayNumber = date.getDate()
  const monthShort = new Intl.DateTimeFormat('pl', { month: 'short' }).format(date)
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
  })
  const [hour, ampm] = time.split(' ')

  return {
    dayShort,
    dayNumber,
    monthShort,
    hour,
    ampm,
  }
}

const parsedDate = parseDate(props.date)
</script>
