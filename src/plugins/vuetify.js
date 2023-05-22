import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import pt from 'vuetify/lib/locale/pt'
import colors from 'vuetify/lib/util/colors'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'md'
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        info: colors.yellow.accent1,
        success: colors.green.accent1,
        warning: colors.red.darken1,
        error: colors.red.accent3
      },
      dark: {
        primary: colors.red.darken1,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        info: colors.yellow.accent1,
        success: colors.green.accent1,
        warning: colors.red.darken1,
        error: colors.red.accent3
      }
    }
  }
})
