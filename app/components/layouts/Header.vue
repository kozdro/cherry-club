<template>
  <header class="fixed z-[999] top-0 left-0 right-0 mx-auto w-[27rem] max-w-full h-full p-4">
    <div
      class="bg-white/10 border border-transparent rounded-full relative transition"
      :class="{ '!bg-black !border-champagne': scrolled }"
    >
      <div class="w-full">
        <div class="flex justify-between items-center z-10 w-full py-1 px-4">
          <NuxtLink
            to="/"
            class="px-2"
          >
            <img
              src="../../assets/images/full_logo.png"
              alt="logo"
              class="w-16"
            />
          </NuxtLink>
          <Button
            :size="ButtonSize.Small"
            :variant="ButtonVariant.Secondary"
            label="Menu"
          />
        </div>
        <!-- <div v-if="isOpen">
          
        </div> -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ButtonSize, ButtonVariant } from '@/types/Button'

const scrolled = ref<boolean>(false)

const handleScroll = () => (scrolled.value = window.scrollY > 50)

onMounted(() => window.addEventListener('scroll', handleScroll))
</script>
