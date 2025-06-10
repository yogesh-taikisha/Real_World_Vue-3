import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // Ensure the webpackChunkName comment is compatible if you're using it,
      // but Vite handles chunking automatically.
      import("../views/About.vue") 
  }
];

const router = createRouter({
  // Use import.meta.env.BASE_URL for environment variables in Vite
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;