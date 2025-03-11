import { defineStore } from 'pinia'
import { ref } from 'vue'
import { reqLogin } from '@/api/user'
import type { loginForm, loginResponseData } from '@/api/user/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'

const useUserStore = defineStore('User', () => {
  const token = ref(GET_TOKEN('x-token') || '')

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
  }
})

export default useUserStore
