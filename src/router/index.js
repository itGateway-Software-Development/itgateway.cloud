import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ElasticVM from "../views/products/ElasticVM.vue";
import ElasticDM from "../views/products/ElasticDM.vue";
import ElasticFileServer from "../views/products/ElasticFileServer.vue";
import BareMetal from "../views/products/BareMetal.vue";
import ManageCloudVpn from "../views/products/ManageCloudVpn.vue";
import WebHosting from "../views/products/WebHosting.vue";
import ObjectStorage from "../views/products/ObjectStorage.vue";
import FlexConnect from "../views/products/FlexConnect.vue";

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
    path: "/products/compute/evm",
    name: "elasticvm",
    component: ElasticVM,
    props: true,
  },
  {
    path: "/products/compute/edm",
    name: "elasticdm",
    component: ElasticDM,
    props: true,
  },
  {
    path: "/products/storage/efs",
    name: "elasticfileserver",
    component: ElasticFileServer,
    props: true,
  },
  {
    path: "/products/compute/baremetal",
    name: "baremetal",
    component: BareMetal,
    props: true,
  },
  {
    path: "/products/networking/vpn",
    name: "mnvpn",
    component: ManageCloudVpn,
    props: true,
  },
  {
    path: "/products/web/webhosting",
    name: "webhosting",
    component: WebHosting,
    props: true,
  },
  {
    path: "/products/storage/eos",
    name: "eos",
    component: ObjectStorage,
    props: true,
  },
  {
    path: "/products/workspace/flexconnect",
    name: "flex",
    component: FlexConnect,
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
