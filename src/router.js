import { createRouter, createMemoryHistory } from "vue-router";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      name: 'login',
      component: () => import("./components/LoginComponents/Login.vue"),
    },
    {
      path: "/mesa",
      name: "mesa",
      component: () => import("./components/MesaComponents/Mesa.vue")
    }
  ]
});


export default router;
