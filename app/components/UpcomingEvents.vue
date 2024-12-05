<template>
  <div class="bg-black text-white py-16">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-heading text-gold">Upcoming Events</h2>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="event in events"
          :key="event.id"
          class="bg-darkGray p-6 rounded-lg shadow-lg transition hover:scale-105"
        >
          <div class=" bg-gray-600 flex items-center justify-center rounded-md">
            <img :src="event.src" class="h-full w-full">
          </div>
          <h3 class="mt-4 text-2xl font-heading text-champagnePink">
            {{ event.title }}
          </h3>
          <p class="mt-2 text-lg font-body text-gold">{{ event.date }}</p>
        </div>
      </div>
      <button class="mt-8 bg-cherryRed text-white py-3 px-6 rounded-full text-lg hover:bg-gold transition">
        See All Events
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const events = [
  { id: 1, title: 'DJ Night', date: 'Dec 10, 2024', src: '../dj.jpg' },
  { id: 2, title: 'New Year Party', date: 'Dec 31, 2024', src: '../dj.jpg' },
  { id: 3, title: 'Exclusive Lounge Night', date: 'Jan 15, 2025', src: '../dj.jpg' },
]
</script>
