import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: '/pricing/:slug', 
    component: () => import('@/views/Pricing.vue'),
    props: true
  },
  {
    path: '/explore/:slug', 
    component: () => import('@/views/Explore.vue'),
    props: true
  },
  {
    path: '/company/:slug',
    component: () => import('@/views/Company.vue'),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      if (to.hash.length > 1) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const element = document.querySelector(to.hash);
            if (element) {
              const topOffset = 100;
              const y = element.getBoundingClientRect().top + window.pageYOffset - topOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
            resolve();
          }, 300);
        });
      } else {
        return { top: 0 };
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
