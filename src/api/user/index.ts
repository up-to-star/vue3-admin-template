/* eslint-disable @typescript-eslint/no-explicit-any */
// 统一管理用户相关的接口
import request from '@/utils/request'
import type { loginForm, loginResponseData, userInfoResponseData } from './type'

enum API {
  // 登录接口
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 暴露请求函数
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () => request.get<any, userInfoResponseData>(API.USERINFO_URL)
