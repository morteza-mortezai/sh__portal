import Vue from "vue";
import VueRouter from "vue-router";
import profile from "../views/profile.vue";
import authPage from "../views/auth-page.vue";
import stats from "../views/stats.vue";
import DefaultLayout from "../views/layout/DefaultLayout.vue";
import mapView from "../views/map/mapView.vue";
import zabete from "../views/zabete/zabete.vue";
import TasdighGovahi from "../views/TasdighGovahi/TasdighGovahi.vue";
import darkhastmardomi from "../views/darkhastmardomi/darkhastmardomi.vue";
import forgetpassword from "../views/forgetpassword/forgetpassword.vue";
import pigiridarkhast from "../views/darkhastmardomi/pigiridarkhast/pigiridarkhast.vue";
import SabtPigiri from "../views/SabtPigiri/SabtPigiri.vue";
import adamkhelaf from "../views/adamkhelaf/adamkhelaf.vue";
import tosehbana from "../views/tosehbana/tosehbana.vue";
import sodorparvaneh from "../views/sodorparvaneh/sodorparvaneh.vue";
import eslahparvaneh from "../views/eslahparvaneh/eslahparvaneh.vue";
import estellame from "../views/estellame/estellame.vue";
import avarez from "../views/avarez/avarez.vue";
import avareznosazi from "../views/avarez/avareznosazi/avareznosazi.vue";

// import store from '../store/index.js';
Vue.use(VueRouter);

const routes = [
  {
    path: "/authPage",
    name: "authPage",
    component: authPage,
  },
  {
    path: "/tosehbana",
    name: "tosehbana",
    component: tosehbana,
  },

  {
    path: "/forgetpassword",
    name: "forgetpassword",
    component: forgetpassword,
  },
  {
    path: "/sodorparvaneh",
    name: "sodorparvaneh",
    component: sodorparvaneh,
  },
  {
    path: "/estellame",
    name: "estellame",
    component: estellame,
  },
  {
    path: "/avarez",
    name: "avarez",
    component: avarez,
  },
  {
    path: "/avareznosazi",
    name: "avareznosazi",
    component: avareznosazi,
  },
  {
    path: "/eslahparvaneh",
    name: "eslahparvaneh",
    component: eslahparvaneh,
  },
  {
    path: "/mapView",
    name: "mapView",
    component: mapView,
  },
  {
    path: "/adamkhelaf",
    name: "adamkhelaf",
    component: adamkhelaf,
  },
  {
    path: "/pigiridarkhast",
    name: "pigiridarkhast",
    component: pigiridarkhast,
  },
  {
    path: "/zabete",
    name: "zabete",
    component: zabete,
  
  },
  {
    path: "/darkhastmardomi",
    name: "darkhastmardomi",
    component: darkhastmardomi,
  },
  {
    path: "/TasdighGovahi",
    name: "TasdighGovahi",
    component: TasdighGovahi,
  },
  {
    path: "/stats",
    name: "stats",
    component: stats,
  },
  {
    path: "/SabtPigiri",
    name: "SabtPigiri",
    component: SabtPigiri,
  },
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {

  const authRequiredroute = ['/zabete','/darkhastmardomi','/SabtPigiri'];
  const loggedIn = localStorage.getItem('auth_token');

  const authRequired = authRequiredroute.includes(to.path);

  if (authRequired && !loggedIn) {
    localStorage.setItem('return_url',to.path)
    next('/authPage');
  } else {
    next();
  }
});

export default router;
