<template>
  <section
    v-editable="blok"
    class="newsletter-banner py-16"
    :class="`bg-${blok.background_color || 'transparent'}`"
  >
    <div class="container flex flex-col items-center justify-center text-center">
      <p
        v-if="blok.subheading"
        class="uppercase"
        v-text="blok.subheading"
      />
      <h2
        class="tracking-wide"
        v-text="blok.heading"
      />
      <form
        v-if="!submitted"
        novalidate
        class="flex gap-4 w-1/2 mt-20"
        @submit.prevent="handleSubmit"
      >
        <Input
          v-model="email"
          id="newsletter-email"
          placeholder="Wpisz swój e-mail"
          :error="v$.email.$error ? 'Podaj poprawny adres e-mail' : ''"
          required
          @blur="v$.email.$touch"
        />
        <Button
          :variant="ButtonVariant.Secondary"
          type="submit"
          :label="blok.button_label || 'Dołącz teraz'"
        />
      </form>
      <p
        v-else
        class="mt-20 text-lg"
        v-text="'Dziękujemy za zapis!'"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, email as emailValidator } from '@vuelidate/validators'
import { ButtonVariant } from '~/types/Button'

interface Props {
  blok: {
    heading: string
    subheading?: string
    button_label?: string
    background_color?: string
  }
}

defineProps<Props>()

const rules = {
  email: { required, email: emailValidator }
}

const email = ref<string>('')
const submitted = ref<boolean>(false)

const v$ = useVuelidate(rules, { email })

const handleSubmit = () => {
  v$.value.$touch()

  if (!v$.value.$invalid) {
    submitted.value = true
    console.log('Zapisano e-mail: ', email.value)
    email.value = ''
    v$.value.$reset()
  }
}
</script>
