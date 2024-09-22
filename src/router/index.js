import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ElasticVM from "../views/products/ElasticVM.vue";
import ElasticDM from "../views/products/ElasticDM.vue";
import ElasticFileServer from "../views/products/ElasticFileServer.vue";
import BareMetal from "../views/products/BareMetal.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/pricing/:slug",
    component: () => import("@/views/Pricing.vue"),
    props: true,
  },
  {
    path: "/explore/:slug",
    component: () => import("@/views/Explore.vue"),
    props: true,
  },
  {
    path: "/company/:slug",
    component: () => import("@/views/Company.vue"),
    props: true,
  },
  {
    path: "/evm",
    name: "elasticvm",
    component: ElasticVM,
    props: true,
  },
  {
    path: "/edm",
    name: "elasticdm",
    component: ElasticDM,
    props: true,
  },
  {
    path: "/efs",
    name: "elasticfileserver",
    component: ElasticFileServer,
    props: true,
  },
  {
    path: "/baremetal",
    name: "baremetal",
    component: BareMetal,
    props: true,
  },
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
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset -
                topOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
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
