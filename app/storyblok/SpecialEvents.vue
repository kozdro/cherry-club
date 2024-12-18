<template>
  <section
    v-editable="blok"
    class="special-events flex items-stretch justify-between gap-16 py-16"
  >
    <div class="flex flex-col pl-24">
      <h2
        class="mt-auto"
        :class="blok.titleEffect"
        v-text="blok.title"
      />
      <Button
        v-if="blok.cta?.[0]"
        :variant="ButtonVariant.Link"
        :size="ButtonSize.Small"
        :href="blok.cta[0].link?.url"
        :target="blok.cta[0].link?.target"
        :label="blok.cta[0].label"
        class="self-end mt-auto mb-10"
      />
    </div>

    <div class="w-full overflow-hidden py-10">
      <div class="container">
        <Slider
          :items="events"
          :per-view="1.5"
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
    titleEffect?: 'city-nights' | 'luminance'
    events: string[]
    cta: CTA[]
  }
}

const props = defineProps<Props>()

const storyblokApi = useStoryblokApi()

const { data: events } = await useAsyncData('special-events', async () => {
  const { data } = await storyblokApi.get('cdn/stories', {
    by_uuids: props.blok?.events.join(',') || '',
    version: 'draft',
  })

  return data.stories?.map((story) => {
    const { title, date, image, links, facebook_event } = story.content

    return {
      title,
      image,
      date,
      timestamp: new Date(date.replace(' ', 'T')).getTime(),
      links,
      facebook_event,
      link: `/events/${story.slug}`,
    }
  }).sort((a, b) => a.timestamp - b.timestamp)
})
</script>

<style lang="scss" scoped>
@keyframes lights {
  0% {
    color: hsl(36, 40%, 85%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.2),
      0 0 0.125em hsla(36, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(348, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }

  30% {
    color: hsl(36, 60%, 90%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.5),
      0 0 0.125em hsla(36, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(348, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  40% {
    color: hsl(36, 80%, 95%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.5),
      0 0 0.125em hsla(36, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(348, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }

  70% {
    color: hsl(36, 60%, 90%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.5),
      0 0 0.125em hsla(36, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(348, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  100% {
    color: hsl(36, 40%, 85%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.2),
      0 0 0.125em hsla(36, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(348, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
}

@keyframes glow {
  40% {
    text-shadow: 0 0 8px #fff;
  }
}

.city-nights {
  animation: lights 5s 750ms linear infinite;
}

.luminance {
  animation: glow 2500ms linear infinite 2000ms;
}
</style>
