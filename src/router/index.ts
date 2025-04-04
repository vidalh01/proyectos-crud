import { createRouter, createWebHistory } from 'vue-router'
import Array from '../views/Array.vue'
import Objeto from '../views/Objeto.vue'
import LocalStorage from '@/views/LocalStorage.vue'
import IndexedDB from '@/views/IndexedDB.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/array',
      name: 'array',
      component: Array,
    },
    {
      path: '/objeto',
      name: 'objeto',
      component: Objeto,
    },
    {
      path: '/localStorage',
      name: 'localStorage',
      component: LocalStorage,
    },
    {
      path: '/indexeddb',
      name: 'indexeddb',
      component: IndexedDB,
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
