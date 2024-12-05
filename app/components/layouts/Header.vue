<template>
  <header class="container sticky top-0 bg-transparent py-4 z-50">
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
  </header>
</template>

<script setup lang="ts">
const { data } = useCmsContent('header')
</script>
