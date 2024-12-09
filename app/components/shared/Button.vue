<template>
  <component
    :is="el"
    ref="buttonRef"
    v-bind="{
      ...(el === 'a' ? { href } : {})
    }"
    :to="href"
    :disabled="disabled || loading"
    :type="href ? null : (type === 'submit' ? 'submit' : 'button')"
    :target="openInNewWindow ? '_blank' : '_self'"
    class="button relative px-4 transition duration-200 ease-out inline-flex items-center justify-center shrink-0 border rounded-md cursor-pointer disabled:pointer-events-none"
    :class="[
      ButtonWidthClasses[width],
      ButtonVariantClasses[variant],
      ButtonSizeClasses[size as ButtonSize]
    ]"
    style="wordBreak: break-word;"
    @click="handleClick"
  >
    <slot>
      <span
        :class="{ 'blur-sm': loading }"
        v-text="label"
      />
    </slot>
  </component>
</template>

<script lang="ts" setup>
import { ButtonWidth, ButtonVariant, ButtonSize } from '@/types/Button'

const ButtonWidthClasses = {
  [ButtonWidth.Fit]: 'w-fit',
  [ButtonWidth.Full]: 'w-full md:max-w-80'
}

const ButtonSizeClasses = {
  [ButtonSize.Small]: 'h-[38px]',
  [ButtonSize.Regular]: 'h-[52px]'
}

const ButtonVariantClasses = {
  [ButtonVariant.Primary]: 'text-champagne bg-cherry border-transparent hover:!text-champagne hover:bg-gold disabled:bg-grey disabled:text-champagne',
  [ButtonVariant.Secondary]: 'text-gold bg-transparent border-gold hover:!text-cherry hover:bg-champagne disabled:border-grey disabled:text-black',
  [ButtonVariant.Tertiary]: 'text-champagne bg-black border-transparent hover:!text-champagne hover:bg-cherry disabled:bg-grey disabled:text-champagne',
  [ButtonVariant.Outline]: 'text-black bg-transparent border-black hover:!text-chamapagne hover:bg-black hover:border-black disabled:border-grey disabled:text-grey',
}

interface Props {
  label: string
  variant?: ButtonVariant
  size?: ButtonSize
  width?: ButtonWidth
  type?: string
  href?: any
  disabled?: boolean
  loading?: boolean
  openInNewWindow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: ButtonVariant.Primary,
  size: ButtonSize.Regular,
  width: ButtonWidth.Fit,
  type: '',
  href: '',
  disabled: false,
  loading: false,
  openInNewWindow: false,
})

const emit = defineEmits(['click'])

const buttonRef = ref()

const isInternal = computed(() => {
  const isObject = props.href instanceof Object
  const isUrl = `${props.href}`.startsWith('http') || `${props.href}`.startsWith('www')
  const isContactUrl = `${props.href}`.startsWith('mailto:') || `${props.href}`.startsWith('tel:')

  return isObject || (!!props.href && !isUrl && !isContactUrl)
})

const el = computed(() => {
  return props.href && !props.disabled ? (isInternal.value ? resolveComponent('NuxtLink') : 'a') : 'button'
})

const handleClick = () => {
  emit('click')
  buttonRef.value.blur()
}
</script>
