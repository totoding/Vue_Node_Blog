import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'default',
    component: () => import('../layout/default.vue'),
    redirect: '/home',
    children: [{
        path: "home",
        name: "home",
        component: () => import("@/views/home.vue")
      },
      {
        path: "/blog",
        name: "blog",
        component: () => import("@/views/blog.vue")
      },
      {
        path: "archive",
        name: "archive",
        component: () => import("@/views/archive.vue")
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/about.vue")
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

export default router