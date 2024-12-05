<template>
  <footer class="bg-cherry pt-20 pb-4">
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
            class="self-center text-gold-champagne"
            v-text="data.description"
          />
        </div>
        <div class="basis-1/2 ml-auto flex justify-end gap-3">
          <NuxtLink
            v-for="social in data.socials"
            :key="social.id"
            :to="social.link"
            class="w-fit h-fit rounded p-2 bg-gold-champagne hover:bg-gold-dark flex items-center justify-center"
          >
            <FacebookIcon
              v-if="social.link?.includes('facebook')"
              class="text-gray w-6 h-6"
            />
            <InstagramIcon
              v-else-if="social.link?.includes('instagram')"
              class="text-gray w-6 h-6"
            />
          </NuxtLink>
        </div>
      </div>

      <div class="flex gap-10">
        <div class="basis-1/2 flex items-center gap-2">
          <input class="h-[52px] w-1/2 rounded-md p-2" placeholder="Email">
          <Button
            :variant="ButtonVariant.Secondary"
            label="Zapisz się"
          />
        </div>
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
import { ButtonVariant } from '~/types/Button';

const { data } = useCmsContent('footer')
</script>
