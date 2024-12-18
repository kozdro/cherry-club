import type { Image } from '~/types/storyblok'

export interface AnimatedPlaceholder {
  _uid: string
  text?: string
  image?: Image
  speed?: number | string
  color?: string
  component: string
}
