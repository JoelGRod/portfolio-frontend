import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'Portfolio' }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/domains/portfolio/layouts/PortfolioLayout.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: "Portfolio" }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
