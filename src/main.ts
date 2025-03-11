import { createApp } from 'vue'
import App from './App.vue'

// 全局引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus 国际化配置
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import globalCompoent from '@/components'
import '@/styles/index.scss'

import axios from 'axios'

axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
})

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(globalCompoent)

app.mount('#app')
