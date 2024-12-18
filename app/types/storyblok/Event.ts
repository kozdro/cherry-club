import type { CTA, Image, Url } from '@/types/storyblok'

export interface Event {
  title: string
  description?: string
  image: Image
  date: string
  links?: CTA[]
  facebook_event?: Url
  link?: string
}
