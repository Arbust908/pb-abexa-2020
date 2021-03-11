import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _87f3f998 = () => interopDefault(import('..\\node_modules\\@nuxtjs\\tailwindcss\\lib\\ui\\pages\\index.vue' /* webpackChunkName: "" */))
const _73e5ab13 = () => interopDefault(import('..\\pages\\casos.vue' /* webpackChunkName: "pages/casos" */))
const _4e739a1e = () => interopDefault(import('..\\pages\\contactos.vue' /* webpackChunkName: "pages/contactos" */))
const _09a812ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _04cfd196 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _1472dcd6 = () => interopDefault(import('..\\pages\\nosotros.vue' /* webpackChunkName: "pages/nosotros" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_tailwind",
    component: _87f3f998,
    name: "_tailwind"
  }, {
    path: "/casos",
    component: _73e5ab13,
    name: "casos___es___default"
  }, {
    path: "/contactos",
    component: _4e739a1e,
    name: "contactos___es___default"
  }, {
    path: "/es",
    component: _09a812ec,
    name: "index___es"
  }, {
    path: "/home",
    component: _04cfd196,
    name: "home___es___default"
  }, {
    path: "/nosotros",
    component: _1472dcd6,
    name: "nosotros___es___default"
  }, {
    path: "/pt",
    component: _09a812ec,
    name: "index___pt"
  }, {
    path: "/us",
    component: _09a812ec,
    name: "index___us"
  }, {
    path: "/es/casos",
    component: _73e5ab13,
    name: "casos___es"
  }, {
    path: "/es/contactos",
    component: _4e739a1e,
    name: "contactos___es"
  }, {
    path: "/es/home",
    component: _04cfd196,
    name: "home___es"
  }, {
    path: "/es/nosotros",
    component: _1472dcd6,
    name: "nosotros___es"
  }, {
    path: "/pt/casos",
    component: _73e5ab13,
    name: "casos___pt"
  }, {
    path: "/pt/contactos",
    component: _4e739a1e,
    name: "contactos___pt"
  }, {
    path: "/pt/home",
    component: _04cfd196,
    name: "home___pt"
  }, {
    path: "/pt/nosotros",
    component: _1472dcd6,
    name: "nosotros___pt"
  }, {
    path: "/us/casos",
    component: _73e5ab13,
    name: "casos___us"
  }, {
    path: "/us/contactos",
    component: _4e739a1e,
    name: "contactos___us"
  }, {
    path: "/us/home",
    component: _04cfd196,
    name: "home___us"
  }, {
    path: "/us/nosotros",
    component: _1472dcd6,
    name: "nosotros___us"
  }, {
    path: "/",
    component: _09a812ec,
    name: "index___es___default"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
