<template>
  <header class="fixed z-[999] top-0 left-0 right-0 mx-auto w-[27rem] max-w-full h-auto p-4">
    <div
      class="bg-white/10 border border-transparent rounded-full relative transition-all duration-300"
      :class="{
        '!bg-grey-dark !border-gold': scrolled || isOpen,
      }"
    >
      <div class="flex justify-between items-center py-2 px-4">
        <NuxtLink
          to="/"
          class="flex items-center"
        >
          <img
            src="../../assets/images/full_logo.png"
            alt="logo"
            class="w-16 transition-opacity duration-300"
            :class="scrolled ? 'opacity-80' : 'opacity-100'"
          />
        </NuxtLink>
        <Button
          :size="ButtonSize.Small"
          :variant="isOpen ? ButtonVariant.Primary : ButtonVariant.Secondary"
          label="Menu"
          @click="toggleMenu"
        />
      </div>

      <div
        v-if="isOpen"
        class="absolute top-full left-0 right-0 bg-black text-white rounded-b-xl shadow-lg overflow-hidden"
      >
        <nav class="flex flex-col p-4 gap-y-3">
          <NuxtLink
            to="/about"
            class="hover:text-gold transition"
          >
            O klubie
          </NuxtLink>
          <NuxtLink
            to="/events"
            class="hover:text-gold transition"
          >
            Wydarzenia
          </NuxtLink>
          <NuxtLink
            to="/vip"
            class="hover:text-gold transition"
          >
            VIP
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="hover:text-gold transition"
          >
            Kontakt
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ButtonSize, ButtonVariant } from '@/types/Button'

const scrolled = ref<boolean>(false)
const isOpen = ref<boolean>(false)

const handleScroll = () => (scrolled.value = window.scrollY > 50)

const toggleMenu = () => (isOpen.value = !isOpen.value)

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
