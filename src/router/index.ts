import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'tab2' }
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '/',
        name: 'home',
        redirect: { name: 'tab2' }
      },
      {
        path: 'tab1',
        name: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        name: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: { name: "home" }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
