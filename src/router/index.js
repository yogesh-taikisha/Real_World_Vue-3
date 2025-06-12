import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/EventLIstView.vue";
import EventLIstView from "../views/EventLIstView.vue";
// import Home from "../views/Home.vue";

import AboutView from "../views/AboutView.vue"

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventLIstView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
      // Ensure the webpackChunkName comment is compatible if you're using it,
      // but Vite handles chunking automatically.
      // import("../views/About.vue") 
    component: AboutView
  }
];

const router = createRouter({
  // Use import.meta.env.BASE_URL for environment variables in Vite
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;