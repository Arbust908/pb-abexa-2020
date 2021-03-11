import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { fas as fortawesomeprosolidsvgicons_fas } from '@fortawesome/pro-solid-svg-icons'
    library.add(fortawesomeprosolidsvgicons_fas)

    import  { fal as fortawesomeprolightsvgicons_fal } from '@fortawesome/pro-light-svg-icons'
    library.add(fortawesomeprolightsvgicons_fal)

    import  { far as fortawesomeproregularsvgicons_far } from '@fortawesome/pro-regular-svg-icons'
    library.add(fortawesomeproregularsvgicons_far)

    import  { fad as fortawesomeproduotonesvgicons_fad } from '@fortawesome/pro-duotone-svg-icons'
    library.add(fortawesomeproduotonesvgicons_fad)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
