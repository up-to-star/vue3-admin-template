import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { reqLogin } from '@/api/user'
import type { loginForm, loginResponseData } from '@/api/user/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'

const useUserStore = defineStore('User', () => {
  const token = ref(GET_TOKEN('x-token') || '')
  const menuRoutes = reactive(constantRoute)
  async function userLogin(data: loginForm) {
    const result: loginResponseData = await reqLogin(data)
    if (result.code === 200) {
      token.value = result.data.token as string
      // 本地存储
      SET_TOKEN('x-token', token.value)
      return 'ok'
    } else {
      return Promise.reject(new Error(result.data.message))
    }
  }

  return {
    token,
    userLogin,
    menuRoutes,
  }
})

export default useUserStore
