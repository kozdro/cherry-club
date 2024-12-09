<template>
  <header
    class="sticky top-0 py-4 z-50"
    :class="scrolled ? 'bg-black/80' : 'bg-transparent'"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <NuxtLink to="/">
          <NuxtImg
            provider="strapi"
            :src="data.logo?.url"
            :alt="data.logo?.alternativeText"
            class="h-10"
          />
        </NuxtLink>
        <nav>
          <ul class="flex gap-4">
            <li
              v-for="link in data.links"
              :key="link.id"
            >
              <NuxtLink
                :to="link.link"
                class="p-2"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { data } = useCmsContent('header')

const scrolled = ref<boolean>(false)

const handleScroll = () => (scrolled.value = window.scrollY > 50)

onMounted(() => window.addEventListener('scroll', handleScroll))
</script>
