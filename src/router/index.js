import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/ru/Home.vue";

import admin from "./middlewares/admin";
import isAdmin from "./middlewares/isAdmin";

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
      return import("../views/ru/About.vue");
    }
  },
  {
    path: "/services",
    name: "Services",
    component: function() {
      return import("../views/ru/Services.vue");
    }
  },
  {
    path: "/technique",
    name: "Technique",
    component: function() {
      return import("../views/ru/Technique.vue");
    }
  },
  {
    path: "/timetable",
    name: "Timetable",
    component: function() {
      return import("../views/ru/Timetable.vue");
    }
  },
  {
    path: "/groups",
    name: "Groups",
    component: function() {
      return import("../views/ru/Groups.vue");
    }
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: function() {
      return import("../views/ru/Contacts.vue");
    }
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: function() {
      return import("../views/ru/Gallery.vue");
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: function() {
      return import("../views/Admin.vue");
    },
    meta: {
      middleware: admin
    }
  },
  {
    path: "/admin/files",
    name: "AdminFiles",
    component: function() {
      return import("../views/AdminFiles.vue");
    },
    meta: {
      middleware: admin
    }
  },
  {
    path: "/login",
    name: "Login",
    component: function() {
      return import("../views/Login.vue");
    }
  },
  {
    path: "/manager",
    name: "Manager",
    component: function() {
      return import("../views/Manager.vue");
    },
    meta: {
      middleware: isAdmin
    }
  },
  {
    path: "/ua",
    name: "HomeUA",
    component: function() {
      return import("../views/ua/Home.vue");
    }
  },
  {
    path: "/about/ua",
    name: "AboutUA",
    component: function() {
      return import("../views/ua/About.vue");
    }
  },
  {
    path: "/services/ua",
    name: "ServicesUA",
    component: function() {
      return import("../views/ua/Services.vue");
    }
  },
  {
    path: "/technique/ua",
    name: "TechniqueUA",
    component: function() {
      return import("../views/ua/Technique.vue");
    }
  },
  {
    path: "/timetable/ua",
    name: "TimetableUA",
    component: function() {
      return import("../views/ua/Timetable.vue");
    }
  },
  {
    path: "/groups/ua",
    name: "GroupsUA",
    component: function() {
      return import("../views/ua/Groups.vue");
    }
  },
  {
    path: "/contacts/ua",
    name: "ContactsUA",
    component: function() {
      return import("../views/ua/Contacts.vue");
    }
  },
  {
    path: "/gallery/ua",
    name: "GalleryUA",
    component: function() {
      return import("../views/ua/Gallery.vue");
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
