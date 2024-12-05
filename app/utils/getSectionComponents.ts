export const getSectionComponents = (componentName: string) => {
  const components: Record<string, Component> = {
    'sections.hero': defineAsyncComponent(() => import('@/components/HeroBanner.vue')),
  }

  return components[componentName] || null
}
