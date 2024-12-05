<template>
  <CMSPage :page="data" />
</template>

<script setup lang="ts">
import CMSPage from '@/components/CMSPage.vue'

const route = useRoute()
const { data } = useCmsPage(() => route.params.slug as string)
</script>
