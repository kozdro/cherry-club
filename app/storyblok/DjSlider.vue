<template>
  <section
    v-editable="blok"
    class="dj-slider flex items-stretch justify-between gap-16 py-16"
  >
    <div class="flex flex-col pl-24 my-auto">
      <div class="flex flex-col gap-8">
        <h2 v-text="blok.heading" />
        <p
          v-if="blok.subheading"
          v-text="blok.subheading"
        />
      </div>
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
          :items="blok.djs"
          :per-view="2.5"
        >
          <template #default="dj">
            <DJCard v-bind="dj" /> 
          </template>
        </Slider>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ButtonSize, ButtonVariant } from '~/types/Button'
import type { CTA, DJ } from '~/types/storyblok'

interface Props {
  blok: {
    heading: string
    subheading?: string
    cta?: CTA[]
    djs: DJ[]
  }
}

defineProps<Props>()
</script>
