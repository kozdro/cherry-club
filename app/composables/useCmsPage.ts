import type { AsyncData, AsyncDataOptions } from '#app'
import defu from 'defu'

export const useCmsPage = (slug: MaybeRefOrGetter<string>, options: AsyncDataOptions<string> = {}): AsyncData<any, Error> => {
  const config = useRuntimeConfig()
  const slugRef = computed(() => toValue(slug))

  return useAsyncData<any>(`cms:page:${slugRef.value}`, async () => {
    const res = await $fetch<any>(`${config.public.STRAPI_URL}/api/pages?pLevel=5&filters[slug][$eq]=${slugRef.value}&status=published`)

    return res.data?.[0] || null
  }, defu(options, {
    watch: [slugRef]
  })) as any
}
