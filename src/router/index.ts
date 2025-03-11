import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'layout',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/404',
      name: 'notFound',
      component: () => import('@/views/404/index.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'any',
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    }
  },
})

export default router
