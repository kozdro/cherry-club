<template>
  <div
    v-editable="blok"
    class="w-full overflow-hidden py-16"
  >
    <AnimatedPlaceholder
      v-if="topAnimation"
      :blok="topAnimation"
      direction="left"
    />

    <section
      class="banner bg-cover bg-center bg-fixed py-52 relative"
      :style="backgroundStyle"
    >
      <div class="bg-black/70 absolute inset-0 w-full h-full z-0" />

      <div
        class="container flex gap-16 z-10 relative items-center"
        :class="blok.layout === 'horizontal' ? 'flex-row' : 'flex-col text-center'"
      >
        <h2
          :class="blok.layout === 'horizontal' ? 'max-w-[30rem] ml-auto' : 'w-1/2'"
          v-text="blok.heading"
        />
        <div
          class="flex flex-col gap-10"
          :class="blok.layout === 'horizontal' ? 'max-w-[30rem] mr-auto' : 'w-1/2 items-center'"
        >
          <p
            v-if="blok.subheading"
            v-text="blok.subheading"
          />
          <Button
            v-if="blok.cta?.[0]"
            :variant="ButtonVariant.Primary"
            :size="ButtonSize.Large"
            :href="blok.cta[0].link?.url"
            :target="blok.cta[0].link?.target"
            :label="blok.cta[0].label"
          />
        </div>
      </div>
    </section>

    <AnimatedPlaceholder
      v-if="bottomAnimation"
      :blok="bottomAnimation"
      direction="right"
    />
  </div>
</template>

<script setup lang="ts">
import { ButtonSize, ButtonVariant } from '~/types/Button'
import type { AnimatedPlaceholder, Image, CTA } from '~/types/storyblok'

interface Props {
  blok: {
    heading: string
    subheading?: string
    cta?: CTA[]
    layout?: 'horizontal' | 'vertical'
    backgroundImage?: Image
    topAnimation?: AnimatedPlaceholder[]
    bottomAnimation?: AnimatedPlaceholder[]
  }
}

const props = defineProps<Props>()

const topAnimation = computed(() => props.blok.topAnimation?.[0])
const bottomAnimation = computed(() => props.blok.bottomAnimation?.[0])

const backgroundStyle = computed(() => props.blok.backgroundImage?.filename
  ? { backgroundImage: `url(${props.blok.backgroundImage?.filename})` }
  : ''
)
</script>
