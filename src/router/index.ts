import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import ShowView from "../views/ShowView.vue";
import ErrorView from "../views/ErrorPageView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search/:id",
    name: "search",
    component: SearchView,
  },
  {
    path: "/show/:id",
    name: "show",
    component: ShowView,
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
