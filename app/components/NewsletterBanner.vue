<template>
  <section
    class="newsletter-banner py-16 md:py-24"
    :class="`bg-${backgroundColor?.name}`"
  >
    <div
      class="container flex items-center"
      :class="layout === 'vertical' ? 'flex-col text-center gap-6' : 'flex-col md:flex-row gap-6 md:gap-10'"
    >
      <div
        class="w-full flex flex-col gap-4"
        :class="layout === 'vertical' ? 'items-center' : 'basis-1/2 items-start'"
      >
        <h2
          class="h1"
          :class="`text-${textColor?.name}`"
          v-text="title"
        />
        <div
          v-if="subtitle"
          class="w-3/4"
        >
          <RichText :data="subtitle" />
        </div>
      </div>
      <form
        class="flex flex-col md:flex-row items-center gap-2 w-full md:w-1/2"
        @submit.prevent="handleSubscription"
      >
        <Input
          v-model="email"
          type="email"
          required
          :background-color="backgroundColor?.name"
          label="Email"
        />
        <Button
          :variant="(CTA.variant as ButtonVariant)"
          type="submit"
          :label="CTA.text"
          class="md:w-1/3"
        />
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import RichText from '@/components/RichText.vue'
import Input from '@/components/shared/Input.vue'
import Button from '@/components/shared/Button.vue'

import { ButtonVariant } from '@/types/Button'

interface Props {
  title: string
  subtitle?: string
  textColor?: any
  layout?: 'vertical' | 'horizontal'
  backgroundColor?: any
  inputLabel?: string
  CTA: any
}

defineProps<Props>()

const email = ref<string>('')

const handleSubscription = () => {
  console.log(email.value)
}
</script>
