<template>
  <footer class="cherry-background pt-20 pb-4">
    <div class="container flex flex-col gap-6">
      <div class="flex gap-10">
        <div class="basis-1/2 flex gap-6">
          <NuxtImg
            provider="strapi"
            :src="data.logo?.url"
            :alt="data.logo?.alternativeText"
            class="h-48"
          />
          <p
            v-if="data.description"
            class="self-center text-champagne"
            v-text="data.description"
          />
        </div>
        <div class="basis-1/2 ml-auto flex justify-end gap-3">
          <NuxtLink
            v-for="social in data.socials"
            :key="social.id"
            :to="social.link"
            class="w-fit h-fit rounded p-2 bg-gold-dark flex items-center justify-center group transition"
          >
            <FacebookIcon
              v-if="social.link?.includes('facebook')"
              class="text-champagne group-hover:text-cherry w-6 h-6 transition"
            />
            <InstagramIcon
              v-else-if="social.link?.includes('instagram')"
              class="text-champagne group-hover:text-cherry w-6 h-6 transition"
            />
          </NuxtLink>
        </div>
      </div>

      <div class="flex gap-10">
        <form
          class="basis-1/2 flex items-center gap-2"
          @submit.prevent="handleSubscription"
        >
          <Input
            v-model="email"
            type="email"
            required
            background-color="cherry"
            label="Email"
            class="!w-1/2"
          />
          <Button
            :variant="(data.newsletterCTA?.variant as ButtonVariant)"
            type="submit"
            :label="data.newsletterCTA?.text"
          />
        </form>
        <div class="basis-1/2 flex justify-end gap-20">
          <ul
            v-for="group in data.linkGroup"
            :key="group.id"
            class="flex flex-col"
          >
            <h4
              class="mb-2 text-gold-dark"
              v-text="group.title"
            />
            <li
              v-for="link in group.links"
              :key="link.id"
              class="my-1"
            >
              <NuxtLink
                :to="link.link"
                class="py-1"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col text-center text-sm mt-6">
        <span>
          © {{ new Date().getFullYear() }} Cherry Club
        </span>
        All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FacebookIcon from '@/assets/icons/facebook.svg?skipsvgo'
import InstagramIcon from '@/assets/icons/instagram.svg?skipsvgo'
import Input from '@/components/shared/Input.vue'
import Button from '@/components/shared/Button.vue'

import { ButtonVariant } from '@/types/Button'

const { data } = useCmsContent('footer')

const email = ref<string>('')

const handleSubscription = () => {
  console.log(email.value)
}
</script>
