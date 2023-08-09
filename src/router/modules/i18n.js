import Layout from '@/layout/index.vue'

export default {
  path: '/i18n',
  component: Layout,
  name: 'i18n',
  redirect: '/i18n/index',
  children: [
    {
      path: '/i18n/index',
      component: () => import('@/views/i18n/index.vue'),
      name: 'i18nIndex',
      meta: {
        title: '国际化',
        icon: 'language'
      }
    }
  ]
}
