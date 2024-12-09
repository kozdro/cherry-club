<template>
  <section
    class="banner py-16 md:py-24"
    :class="`bg-${backgroundColor?.name}`"
  >
    <div class="container flex items-center justify-center">
      <div class="w-4/5 flex flex-col gap-8">
        <RichText :data="content" />
        <div class="flex items-center justify-center gap-4">
          <Button
            v-for="item in CTA"
            :key="item.key"
            :variant="(item.variant as ButtonVariant)"
            :href="item.link"
            :open-in-new-window="item.openInNewWindow"
            :label="item.text"
          />
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import RichText from '@/components/RichText.vue'
import Button from '@/components/shared/Button.vue'

import { ButtonVariant } from '@/types/Button'

interface Props {
  content: any
  CTA?: any
  backgroundColor?: any
}

withDefaults(defineProps<Props>(), {
  backgroundColor: '#8B0000',
})
</script>
