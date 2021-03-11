import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_0b546929 from 'nuxt_plugin_plugin_0b546929' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_templatesplugin8e58b76c_f80e4eec from 'nuxt_plugin_templatesplugin8e58b76c_f80e4eec' // Source: .\\templates.plugin.8e58b76c.js (mode: 'all')
import nuxt_plugin_nuxtmq_0655de58 from 'nuxt_plugin_nuxtmq_0655de58' // Source: .\\nuxt-mq.js (mode: 'all')
import nuxt_plugin_pluginrouting_6ed919ed from 'nuxt_plugin_pluginrouting_6ed919ed' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_6386e0a2 from 'nuxt_plugin_pluginmain_6386e0a2' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_workbox_290084e8 from 'nuxt_plugin_workbox_290084e8' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_5d2c1168 from 'nuxt_plugin_metaplugin_5d2c1168' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_61d3b6dc from 'nuxt_plugin_iconplugin_61d3b6dc' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_534992cc from 'nuxt_plugin_axios_534992cc' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_pluginserver_1a98be1d from 'nuxt_plugin_pluginserver_1a98be1d' // Source: .\\color-mode\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_964166d6 from 'nuxt_plugin_pluginclient_964166d6' // Source: .\\color-mode\\plugin.client.js (mode: 'client')
import nuxt_plugin_carouse_07d8e456 from 'nuxt_plugin_carouse_07d8e456' // Source: ..\\plugins\\carouse (mode: 'all')
import nuxt_plugin_clickOutsideDirective_930b7fc8 from 'nuxt_plugin_clickOutsideDirective_930b7fc8' // Source: ..\\plugins\\clickOutsideDirective (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"es"},"title":"Abexa","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"contentLanguage","http-equiv":"content-language","content":"es"},{"hid":"XUACompatible","http-equiv":"X-UA-Compatible","content":"ie=edge"},{"hid":"cleartype","http-equiv":"cleartype","content":"on"},{"hid":"mobileOptimized","name":"MobileOptimized","content":"320"},{"hid":"themeColor","name":"theme-color","content":"#005c9e"},{"hid":"handheldFriendly","name":"HandheldFriendly","content":"True"},{"hid":"description","name":"description","content":"Abexa \u003C\u003E Articulando Empresas"},{"hid":"og:title","property":"og:title","content":"Abexa"},{"hid":"og:description","property":"og:description","content":"Abexa \u003C\u003E Articulando Empresas"},{"hid":"og:image","property":"og:image","content":"\u002Fpm-meta.jpg"},{"hid":"og:site_name","property":"og:site_name","content":"Abexa"},{"hid":"twitter:title","property":"twitter:title","content":"Abexa"},{"hid":"twitter:description","property":"twitter:description","content":"Abexa \u003C\u003E Articulando Empresas"},{"hid":"twitter:image:src","property":"twitter:image:src","content":"\u002Fpm-meta.jpg"},{"hid":"twitter:card","property":"twitter:card","content":"summary_large_image"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Abexa"},{"hid":"author","name":"author","content":"Abexa || yo@panchoblanco.com"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"}],"link":[{"rel":"icon","type":"image\u002Fsvg+xml","href":"\u002Ffavicon.svg"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicon-16.png","sizes":"16x16"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicon-32.png","sizes":"32x32"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicon-48.png","sizes":"48x48"},{"rel":"apple-touch-icon","href":"\u002Ffavicon-57.png","sizes":"57x57"},{"rel":"apple-touch-icon","href":"\u002Ffavicon-120.png","sizes":"120x120"},{"rel":"apple-touch-icon","href":"\u002Ffavicon-152.png","sizes":"152x152"},{"rel":"apple-touch-icon","href":"\u002Ffavicon-167.png","sizes":"167x167"},{"rel":"apple-touch-icon","href":"\u002Ffavicon-180.png","sizes":"180x180"},{"rel":"icon","href":"\u002Ffavicon-96.png","sizes":"96x96"},{"rel":"icon","href":"\u002Ffavicon-192.png","sizes":"192x192"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Inter:wght@400;700&display=swap"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.a2811a11.json","hid":"manifest"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e9c229.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e9c229.png","sizes":"512x512"}],"style":[],"script":[{"hid":"nuxt-color-mode-script","innerHTML":"!function (){\"use strict\";var e=window,s=document,o=s.documentElement,a=[\"dark\",\"light\"],t=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\",c=\"system\"===t?l():t,i=s.body.getAttribute(\"data-color-mode-forced\");function r(e){var s=\"\"+e+\"\";o.classList?o.classList.add(s):o.className+=\" \"+s}function n(s){return e.matchMedia(\"(prefers-color-scheme\"+s+\")\")}function l(){if(e.matchMedia&&\"not all\"!==n(\"\").media)for(var s of a)if(n(\":\"+s).matches)return s;return\"light\"}i&&(c=i),r(c),e[\"__NUXT_COLOR_MODE__\"]={preference:t,value:c,getColorScheme:l,addClass:r,removeClass:function(e){var s=\"\"+e+\"\";o.classList?o.classList.remove(s):o.className=o.className.replace(new RegExp(s,\"g\"),\"\")}}}();\n","pbody":true}],"__dangerouslyDisableSanitizersByTagID":{"nuxt-color-mode-script":["innerHTML"]}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_0b546929 === 'function') {
    await nuxt_plugin_plugin_0b546929(app.context, inject)
  }

  if (typeof nuxt_plugin_templatesplugin8e58b76c_f80e4eec === 'function') {
    await nuxt_plugin_templatesplugin8e58b76c_f80e4eec(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtmq_0655de58 === 'function') {
    await nuxt_plugin_nuxtmq_0655de58(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_6ed919ed === 'function') {
    await nuxt_plugin_pluginrouting_6ed919ed(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_6386e0a2 === 'function') {
    await nuxt_plugin_pluginmain_6386e0a2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_290084e8 === 'function') {
    await nuxt_plugin_workbox_290084e8(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_5d2c1168 === 'function') {
    await nuxt_plugin_metaplugin_5d2c1168(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_61d3b6dc === 'function') {
    await nuxt_plugin_iconplugin_61d3b6dc(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_534992cc === 'function') {
    await nuxt_plugin_axios_534992cc(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_1a98be1d === 'function') {
    await nuxt_plugin_pluginserver_1a98be1d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_964166d6 === 'function') {
    await nuxt_plugin_pluginclient_964166d6(app.context, inject)
  }

  if (typeof nuxt_plugin_carouse_07d8e456 === 'function') {
    await nuxt_plugin_carouse_07d8e456(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_clickOutsideDirective_930b7fc8 === 'function') {
    await nuxt_plugin_clickOutsideDirective_930b7fc8(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
