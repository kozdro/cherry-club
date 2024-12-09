<template>
  <section class="cards-list flex flex-col gap-4 container">
    <Title
      v-if="title"
      v-bind="title"
    />
    <div
      class="flex gap-6 md:gap-10 my-8"
      :class="layoutClasses"
    >
      <Card
        v-for="card in cards"
        :key="card.id"
        v-bind="card"
        :layout="layout === 'vertical' ? 'vertical' : 'horizontal'"
        :class="{ 'basis-1/3': layout === 'vertical' }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue'
import Card from '@/components/Card.vue'

interface Props {
  title?: any
  cards: any[]
  layout?: 'vertical' | 'horizontal-left' | 'horizontal-center' | 'horizontal-right'
}

const props = defineProps<Props>()

const layoutClasses = computed(() => {
  if (props.layout === 'horizontal-left') {
    return 'flex-col items-start'
  }

  if (props.layout === 'horizontal-center') {
    return 'flex-col items-center'
  }

  if (props.layout === 'horizontal-right') {
    return 'flex-col items-end'
  }

  return 'flex-row'
})
</script>
