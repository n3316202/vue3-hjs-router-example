import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/one",
    name: "One",
    component: () =>
      import(/* webpackChunkName: "num" */ "../views/OneView.vue"),
  },
  {
    path: "/two",
    name: "Two",
    component: () =>
      import(/* webpackChunkName: "num" */ "../views/TwoView.vue"),
  },
  {
    path: "/three",
    name: "Three",
    component: () =>
      import(/* webpackChunkName: "num" */ "../views/ThreeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
