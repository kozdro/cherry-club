export const getSectionComponents = (componentName: string) => {
  const components: Record<string, Component> = {
    'sections.hero': defineAsyncComponent(() => import('@/components/HeroBanner.vue')),
    'sections.cards-list': defineAsyncComponent(() => import('@/components/CardsList.vue')),
    'sections.banner': defineAsyncComponent(() => import('@/components/Banner.vue')),
    'sections.text-with-image': defineAsyncComponent(() => import('@/components/TextWithImage.vue')),
    'sections.newsletter-banner': defineAsyncComponent(() => import('@/components/NewsletterBanner.vue')),
  }

  return components[componentName] || null
}
