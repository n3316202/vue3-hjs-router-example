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
    // webpackChunkName은 network에서 보일 js 파일 이름
    // 이동하는 순간에 받아와도 될 정도로 사이즈가 작은 페이지는 webpackPrefetch 사용 안 함
    // 사이즈가 크고, 접속할 확률이 높은 페이지는 webpackPrefetch: true
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch: true */ "../views/AboutView.vue"
      ),
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
