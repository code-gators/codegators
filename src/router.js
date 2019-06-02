import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/mission",
      name: "mission",
      component: () =>
        import(/* webpackChunkName: "mission" */ "./views/Mission.vue")
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import(/* webpackChunkName: "jobs" */ "./views/Jobs.vue")
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: () =>
        import(/* webpackChunkName: "sponsors" */ "./views/Sponsors.vue")
    }
  ]
});
