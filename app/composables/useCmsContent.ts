import type { AsyncData, AsyncDataOptions } from '#app'
import defu from 'defu'

export const useCmsContent = <T = any>(type: MaybeRefOrGetter<string>, options: AsyncDataOptions<string> = {}): AsyncData<T, Error> => {
  const config = useRuntimeConfig()
  const typeRef = computed(() => toValue(type))

  return useAsyncData<T>(`cms:content:${typeRef.value}`, async () => {
    const res = await $fetch<any>(`${config.public.STRAPI_URL}/api/${typeRef.value}?pLevel=5&status=published`)

    return res?.data || null
  }, defu(options, {
    watch: [typeRef]
  })) as any
}
