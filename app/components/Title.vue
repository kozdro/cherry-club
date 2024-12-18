<template>
  <div
    class="title flex flex-col gap-4"
    :class="getAlignmentClasses(alignment)"
  >
    <div :class="titleEffect">
      <RichText :data="title" />
    </div>
    <div
      v-if="subtitle"
      class="w-3/4"
    >
      <RichText :data="subtitle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RichText from '@/components/RichText.vue'

interface Props {
  title: any
  subtitle?: any
  alignment: 'left' | 'center' | 'right'
  titleEffect?: 'city-nights' | 'luminance'
}

const props = defineProps<Props>()
</script>
