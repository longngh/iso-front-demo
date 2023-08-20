import Vue from "vue";
import VueRouter from "vue-router";
import { userStore } from "@/stores/userStore";
import alert from "@/plugins/alert";
// import alert from "@/plugins/alert";

// import i18n from "@/i18n";
Vue.use(VueRouter);
const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/pages/login.vue"),
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: () => import("../views/register/pages/register.vue"),
  // },
  {
    path: "/",
    name: "Mainlayout",
    component: () => import("../views/Mainlayout.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/dash-board/pages/dash-board.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/target",
        name: "Target",
        component: () => import("../views/target/pages/target.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const user = userStore();
  console.log("to", to);
  if (to.meta && to.meta.requiresAuth && !user.isConnected) {
    alert.error("You need to login before accessing this site!");
    next("/login");
  }
  next();
});

export default router;
