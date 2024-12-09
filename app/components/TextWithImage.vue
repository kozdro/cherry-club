<template>
  <section class="text-with-image container flex flex-col gap-6">
    <Title
      v-if="title"
      v-bind="title"
    />
    <div
      class="flex gap-16 mt-4"
      :class="ImageWrapperClass[showImageOn]"
    >
      <div class="md:basis-1/2">
        <RichText :data="text" />
      </div>
      <div
        class="relative h-full md:h-[450px]"
        :class="{ 'corner-borders': cornerBorder }"
      >
        <NuxtImg
          provider="strapi"
          :src="image?.url"
          :alt="image?.alternativeText"
          class="h-full md:h-[450px] object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Title from '@/components/Title.vue'
import RichText from '@/components/RichText.vue'

enum AlignmentPosition {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  CENTER_LEFT = 'center-left',
  CENTER_RIGHT = 'center-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right'
}

const ImageWrapperClass = {
  [AlignmentPosition.TOP_LEFT]: 'flex-col-reverse lg:flex-row-reverse',
  [AlignmentPosition.TOP_RIGHT]: 'flex-col lg:flex-row items-end lg:items-start',
  [AlignmentPosition.CENTER_LEFT]: 'flex-col-reverse lg:flex-row-reverse items-center',
  [AlignmentPosition.CENTER_RIGHT]: 'flex-col lg:flex-row items-center',
  [AlignmentPosition.BOTTOM_LEFT]: 'flex-col-reverse lg:flex-row-reverse justify-end lg:justify-start lg:items-end',
  [AlignmentPosition.BOTTOM_RIGHT]: 'flex-col lg:flex-row items-end',
}

interface Props {
  title?: any
  text: string
  image: any
  showImageOn?: AlignmentPosition
  cornerBorder?: boolean
}

withDefaults(defineProps<Props>(), {
  title: null,
  showImageOn: AlignmentPosition.CENTER_RIGHT,
  cornerBorder: true,
})
</script>
