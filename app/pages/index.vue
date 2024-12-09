<template>
  <div class="home flex flex-col gap-12 xl:gap-20">
    <CMSSections :sections="data?.components" />
  </div>
</template>

<script setup lang="ts">
import CMSSections from '@/components/CMSSections.vue'

const { data } = useCmsPage('home')
</script>