import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);
const router = new Router({
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
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "profile" */ "./views/Profile.vue"),
      meta: {
        requiresAuth: true
      }
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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const { access_token: token, expires_at: expires } = store.getters.getJwt;
    console.log(Date.now(), expires);
    if (token !== "" && expires > Date.now()) {
      next();
      return;
    }
    next("/notfound");
  } else {
    next();
  }
});

export default router;
