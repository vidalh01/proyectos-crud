import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Firebase.vue')
    },
    {
      path: '/array',
      name: 'array',
      component: () => import('../views/Array.vue')
    },
    {
      path: '/objeto',
      name: 'objeto',
      component: () => import('../views/Objeto.vue')
    },
    {
      path: '/localStorage',
      name: 'localStorage',
      component: () => import('../views/LocalStorage.vue')
    },
    {
      path: '/indexeddb',
      name: 'indexeddb',
      component: () => import('../views/IndexedDB.vue')
    },
    {
      path: '/fetch',
      name: 'fetch',
      component: () => import('../views/Fetch.vue')
    },
    {
      path: '/firebase',
      name: 'firebase',
      component: () => import('../views/Firebase.vue')
    },
    {
      path: '/set',
      name: 'set',
      component: () => import('../views/Set.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/Map.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Objeto.vue'),
    // },
  ],
})

export default router
