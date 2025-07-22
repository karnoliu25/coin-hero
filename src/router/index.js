import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../views/CreateBills.vue"),
    },
    {
      path: "/read",
      name: "read",
      component: () => import("../views/ReadBills.vue"),
    },
    {
      path: "/read/detail",
      name: "read/detail",
      component: () => import("@/components/ReadBills/DetailView.vue"),
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("../views/EditBills.vue"),
    },
    {
      path: "/edit/list",
      name: "edit/list",
      component: () => import("@/components/EditBills/EditList.vue"),
    },
    {
      path: "/edit/label",
      name: "edit/label",
      component: () => import("@/components/EditBills/EditLabel.vue"),
    },
    {
      path: "/edit/label/newlabel",
      name: "edit/label/newlabel",
      component: () => import("@/components/EditBills/EditLabelNew.vue"),
    },
    {
      path: "/edit/about",
      name: "edit/about",
      component: () => import("@/components/EditBills/AppAbout.vue"),
    },
  ],
});

export default router;
