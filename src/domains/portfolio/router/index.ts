import { RouteRecordRaw } from "vue-router";

const portfolioRoutes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "Portfolio-Home",
    component: () => import("@/domains/portfolio/pages/Home.vue"),
  },
  {
    path: "works",
    name: "Portfolio-Demos",
    component: () => import("@/domains/portfolio/pages/Projects.vue"),
  },
  {
    path: "about",
    name: "Portfolio-About",
    component: () => import("@/domains/portfolio/pages/About.vue"),
  },
  {
    path: "contact",
    name: "Portfolio-Contact",
    component: () => import("@/domains/portfolio/pages/Contact.vue"),
  },
];

export default portfolioRoutes;