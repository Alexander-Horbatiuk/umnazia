import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: function() {
      return import("../views/About.vue");
    }
  },
  {
    path: "/services",
    name: "Services",
    component: function() {
      return import("../views/Services.vue");
    }
  },
  {
    path: "/technique",
    name: "Technique",
    component: function() {
      return import("../views/Technique.vue");
    }
  },
  {
    path: "/timetable",
    name: "Timetable",
    component: function() {
      return import("../views/Timetable.vue");
    }
  },
  {
    path: "/groups",
    name: "Groups",
    component: function() {
      return import("../views/Groups.vue");
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
