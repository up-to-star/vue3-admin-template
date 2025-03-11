import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponents: { [key: string]: Component } = {
  SvgIcon,
}

export default {
  install(app: App<Element>) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
  },
}
