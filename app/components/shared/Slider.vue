<template>
  <ClientOnly>
    <swiper-container
      ref="containerRef"
      :slides-per-view="perView"
      :space-between="spaceBetween"
      :centered-slides="centered"
    >
      <swiper-slide
        v-for="(slide, index) in items"
        :key="index"
        class="flex items-center justify-center"
      >
        <slot v-bind="slide" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup lang="ts">
interface Props {
  items: any[]
  perView?: number
  spaceBetween?: number
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  perView: 3,
  spaceBetween: 10,
  centered: false,
})

const containerRef = ref(null)

const swiper = useSwiper(containerRef)

onMounted(async() => {
  await swiper
  
  const swiperElement = containerRef.value?.$el || containerRef.value
  
  if (swiperElement?.shadowRoot) {
    const style = document.createElement('style')
    style.textContent = `
      .swiper {
        overflow: visible !important;
      }
    `
    swiperElement.shadowRoot.appendChild(style)
  }
})
</script>
