<template>
  <component
    v-for="section in sections"
    :key="section.id"
    :is="getSectionComponents(section.__component!)"
    v-bind="section"
  />
</template>

<script setup lang="ts">
interface Props {
  sections: any['components']
}

withDefaults(defineProps<Props>(), {
  sections: [] as any
})
</script>
