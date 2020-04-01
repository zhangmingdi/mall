import axios from 'axios'

export function request(config) {
  // 创建一个axios实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/h3',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 返回配置好的axios方法
  return instance(config)
}
