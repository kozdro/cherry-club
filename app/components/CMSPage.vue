<template>
  <div>
    <CMSSections :sections="page?.components" />
  </div>
</template>

<script setup lang="ts">
import CMSSections from '@/components/CMSSections.vue'

interface Props {
  page?: any
}

defineProps<Props>()
</script>
