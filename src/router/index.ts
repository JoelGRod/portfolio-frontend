import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// Routes
import portfolioRoutes from '../domains/portfolio/router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'Portfolio-Home' }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/domains/portfolio/layouts/PortfolioLayout.vue'),
    children: portfolioRoutes
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: "Portfolio-Home" }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
