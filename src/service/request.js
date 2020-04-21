
import store from '@/store'
import { getToken } from '@/utils/auth'
import settings from '@/config/baseConfig'

const axios = require('axios');
const httpCode = settings.httpCode;

// create an axios instance
const service = axios.create({
  baseURL: process.env.API_ROOT,
  withCredentials: true, // axios 默认不发送cookie,需要全局设置true发送cookie
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {

    config.headers = {
      'Content-Type': config.contentType || 'application/x-www-form-urlencoded' //标准的编码格式
    }

    if (store.getters.token) {
      config.headers['accesstoken'] = getToken()
    }

    return config
  },
  error => {

    console.log(error);
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
    const res = response.data;

    if (res.code !== httpCode.success) {

      console.log('err' + res.message)

      if (res.code === httpCode.noLogin ) {

        store.dispatch('user/resetToken').then(() => {
          location.reload();  // 刷新or去登录页
        })
      }

      return Promise.reject(new Error(res.message || 'Error'))

    } else {

      return res;
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service;
