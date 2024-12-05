<template>
  <div class="py-10 bg-black text-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-heading text-gold text-center">Gallery</h2>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="h-40 bg-gray-600 flex items-center justify-center">
          <span class="text-white">[Image Placeholder]</span>
        </div>
      </div>
      <div class="text-center mt-8">
        <button class="bg-cherryRed text-white py-2 px-4 rounded hover:bg-gold transition">
          View Full Gallery
        </button>
      </div>
    </div>
  </div>
</template>
