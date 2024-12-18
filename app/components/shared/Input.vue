<template>
  <div class="input w-full relative">
    <input
      :id="id"
      v-model="localValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      class="w-full bg-transparent border-b-2 text-champagne text-lg p-2 transition-colors duration-300 focus:outline-none disabled:text-grey disabled:border-grey disabled:pointer-events-none placeholder:text-grey"
      :class="{
        'border-grey': !error && !isFocused,
        'border-gold-dark': isFocused,
        'border-error-dark': error,
      }"
      @input="handleInput"
      @focus="isFocused = true"
      @blur="handleBlur"
    />

    <label
      v-if="label"
      :for="id"
      class="absolute left-0 -top-6 text-sm text-grey transition-all duration-300 pointer-events-none"
      :class="{
        'text-gold-dark': isFocused,
        'text-error-dark': error,
      }"
      v-text="label"
    />

    <span
      v-if="error"
      class="text-error-dark text-sm absolute left-0 top-full mt-2 mx-1 text-left"
      v-text="error"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  type?: string
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  id?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  label: '',
  error: '',
  disabled: false,
  id: 'input',
  required: false,
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const localValue = ref(props.modelValue)
const isFocused = ref<boolean>(false)

const handleInput = () => {
  emit('update:modelValue', localValue.value)
}

const handleBlur = () => {
  isFocused.value = false
  emit('blur')
}
</script>
