import type { Image, Url } from '~/types/storyblok'

export interface DJ {
  name: string
  type?: string
  image: Image
  link?: Url
}
