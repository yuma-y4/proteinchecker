import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import indexs from '../views/indexs.vue'
import user from '../views/user.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },{
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/signin.vue')
  },
  {
    path: '/indexs',
    name: 'indexs',
    component: indexs
  },{
    path: '/user/:uid',
    name: 'user',
    component: user
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
