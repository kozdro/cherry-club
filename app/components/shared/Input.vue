<template>
  <div
    class="input flex items-end w-full relative my-2"
    :class="{
      'pointer-events-none': disabled,
    }"
  >
    <FormFieldLabel
      v-if="label || $slots.label"
      :label="label"
      :required="required"
      :invalid="!!errorMessage"
      :disabled="disabled"
      :selected="!!isAffected"
      :focused="isFocused"
      :background-color="backgroundColor"
    >
      <template #label>
        <slot name="label" />
      </template>
    </FormFieldLabel>
    <div
      class="border border-grey rounded-md focus-within:border-gold h-full w-full flex items-center z-base px-3 pb-2 pt-4"
      :class="{
        '!border-red': !!errorMessage,
        '!border-gold': localValue && isFocused,
      }"
    >
      <input
        v-model="localValue"
        v-bind="$attrs"
        :id="id"
        ref="inputRef"
        :aria-label="inputAriaLabel"
        :disabled="disabled"
        :type="type"
        class="w-full bg-transparent focus:outline-0 focus-visible:outline-none text-base leading-normal text-champagne placeholder:text-champagne disabled:text-grey truncate"
        @blur="handleBlur"
        @focus="handleFocus"
      >
    </div>

    <div
      v-if="errorMessage"
      class="absolute top-full text-red text-sm"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import FormFieldLabel from '@/components/shared/FormFieldLabel.vue'

interface Props {
  ariaLabel?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: string
  required?: boolean
  type?: string
  modelValue: string | number
  backgroundColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  ariaLabel: '',
  disabled: false,
  errorMessage: '',
  id: '',
  label: '',
  required: false,
  type: 'text',
  backgroundColor: 'white',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void,
  (e: 'input', value: number | string): void,
  (e: 'blur'): void,
  (e: 'focus'): void,
}>()

const attrs = useAttrs()

const isFocused = ref(false)

const localValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const isAffected = computed(() => !!props.modelValue || isFocused.value || attrs.placeholder)

const inputAriaLabel = computed(() => `${props.ariaLabel || props.label || 'input'}`)

const handleFocus = () => {
  emit('focus')
  isFocused.value = true
}
const handleBlur = () => {
  emit('blur')
  isFocused.value = false
}
</script>
