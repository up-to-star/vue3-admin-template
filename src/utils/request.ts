// axios的二次封装：使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 给request实例添加请求拦截器
request.interceptors.request.use((config) => {
  // config 就是请求拦截器携带的参数
  return config
})

// 给request实例添加响应拦截器
request.interceptors.response.use(
  (res) => {
    // 拦截响应成功
    return res.data
  },
  (err) => {
    //拦截响应失败
    let message = ''
    const { status } = err.response
    switch (status) {
      case 401:
        message = 'TOKEN 已过期，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址出错'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误'
        break
      default:
        message = '网络错误'
    }
    ElMessage({
      message,
      type: 'error',
    })
    return Promise.reject(err)
  },
)

export default request
