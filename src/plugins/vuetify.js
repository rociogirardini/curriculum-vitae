import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

// Translation provided by Vuetify (javascript)
import zhHans from 'vuetify/lib/locale/zh-Hans'

// Translation provided by Vuetify (typescript)
import pl from 'vuetify/src/locale/pl'

// Your own translation file
import sv from './i18n/vuetify/sv'

Vue.component('my-component', {
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'sv'
    },
  },
})

export default new Vuetify({
  lang: {
    locales: { zhHans, pl, sv },
    current: 'zhHans',
  },
})