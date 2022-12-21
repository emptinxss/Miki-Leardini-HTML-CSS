import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import NotFound404 from "../views/NotFound404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound404",
    component: NotFound404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
