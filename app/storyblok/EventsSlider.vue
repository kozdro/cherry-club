<template>
  <section
    v-editable="blok"
    class="events-slider flex flex-col py-16"
  >
    <div class="container flex items-center justify-between">
      <h2 v-text="blok.title" />
      <Button
        v-if="blok.cta?.[0]"
        :size="ButtonSize.Small"
        :variant="ButtonVariant.Link"
        :href="blok.cta[0].link?.url"
        :label="blok.cta[0].label"
      />
    </div>
    <p
      v-if="blok.description"
      class="text-lg mt-4"
      v-text="blok.description"
    />

    <div class="w-full overflow-hidden py-10">
      <div class="container">
        <Slider
          :items="events"
          :per-view="2.3"
        >
          <template #default="event">
            <EventCard v-bind="event" />
          </template>
        </Slider>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ButtonSize, ButtonVariant } from '~/types/Button'
import type { CTA } from '~/types/storyblok'

interface Props {
  blok: {
    title: string
    description: string
    cta: CTA[]
  }
}

defineProps<Props>()

const storyblokApi = useStoryblokApi()

const { data: events } = await useAsyncData('events', async () => {
  const { data } = await storyblokApi.get('cdn/stories', {
    starts_with: 'pages/events/',
    version: 'draft',
  })

  return data.stories?.map((event) => {
    const { title, date, image, links, facebook_event } = event.content

    return {
      title,
      image,
      date,
      timestamp: new Date(date.replace(' ', 'T')).getTime(),
      links,
      facebook_event,
      link: `/events/${event.slug}`,
    }
  }).sort((a, b) => a.timestamp - b.timestamp)
})
</script>
