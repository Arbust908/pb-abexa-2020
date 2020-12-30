import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {"defaultBreakpoint":"sm","breakpoints":{"sm":640,"md":768,"lg":1024,"xl":Infinity}})
