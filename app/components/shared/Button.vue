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
    class="button relative transition duration-200 ease-out inline-flex items-center justify-center shrink-0 border rounded-full cursor-pointer disabled:pointer-events-none"
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
    <ArrowRightIcon
      v-if="variant === ButtonVariant.Link"
      class="w-4 ml-4"
    />
  </component>
</template>

<script lang="ts" setup>
import { ButtonWidth, ButtonVariant, ButtonSize } from '@/types/Button'

import ArrowRightIcon from '@/assets/icons/arrow-right.svg?skipsvgo'

const ButtonWidthClasses = {
  [ButtonWidth.Fit]: 'w-fit',
  [ButtonWidth.Full]: 'w-full'
}

const ButtonSizeClasses = {
  [ButtonSize.Small]: 'h-[36px] px-4 text-sm',
  [ButtonSize.Regular]: 'h-[48px] px-6 text-base',
  [ButtonSize.Large]: 'h-[60px] px-8 text-lg',
}

const ButtonVariantClasses = {
  [ButtonVariant.Primary]: 'text-black bg-gold border-transparent hover:text-gold-champagne hover:bg-black disabled:bg-grey-dark disabled:text-grey',
  [ButtonVariant.Secondary]: 'text-gold bg-transparent border-gold hover:text-black hover:bg-gold disabled:border-grey-dark disabled:text-grey',
  [ButtonVariant.Tertiary]: 'text-grey bg-black border-transparent hover:text-gold hover:bg-grey-dark disabled:bg-grey-dark disabled:text-grey',
  [ButtonVariant.Outline]: 'text-black bg-transparent border-black hover:text-gold-champagne hover:bg-black hover:border-gold disabled:border-grey-dark disabled:text-grey',
  [ButtonVariant.Link]: 'text-gold-champagne !font-normal border-transparent'
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
