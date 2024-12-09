<template>
  <div
    class="title flex flex-col gap-4"
    :class="getAlignmentClasses(alignment)"
  >
    <div :class="titleEffect">
      <RichText :data="title" />
    </div>
    <div
      v-if="subtitle"
      class="w-3/4"
    >
      <RichText :data="subtitle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RichText from '@/components/RichText.vue'

interface Props {
  title: any
  subtitle?: any
  alignment: 'left' | 'center' | 'right'
  titleEffect?: 'city-nights' | 'luminance'
}

const props = defineProps<Props>()
</script>

<style lang="scss">
@keyframes lights {
  0% {
    color: hsl(36, 40%, 85%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.2),
      0 0 0.125em hsla(36, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(348, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }

  30% {
    color: hsl(36, 60%, 90%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.5),
      0 0 0.125em hsla(36, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(348, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  40% {
    color: hsl(36, 80%, 95%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.5),
      0 0 0.125em hsla(36, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(348, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }

  70% {
    color: hsl(36, 60%, 90%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.5),
      0 0 0.125em hsla(36, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(348, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  100% {
    color: hsl(36, 40%, 85%);
    text-shadow:
      0 0 1em hsla(36, 100%, 50%, 0.2),
      0 0 0.125em hsla(36, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(348, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
}

@keyframes glow {
  40% {
    text-shadow: 0 0 8px #fff;
  }
}

.city-nights {
  animation: lights 5s 750ms linear infinite;
}

.luminance {
  animation: glow 2500ms linear infinite 2000ms;
}
</style>
