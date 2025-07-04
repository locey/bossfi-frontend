import axios, { AxiosError, AxiosRequestConfig } from 'axios'

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // API 基础路径
  timeout: 10000, // 请求超时时间
  // withCredentials: true, // 是否携带凭证
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
    if (global.localStorage == null) return config
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('Token')}`
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const { status, data } = response
    if (axios.isCancel(data)) {
      console.log('Request canceled' + data)
      return Promise.reject(data)
    }
    if (status !== 200) {
      return Promise.reject(response)
    }
    // if (data.code !== 0) {
    //   return Promise.reject(data);
    // }
    return response
  },
  error => {
    return Promise.reject(error)
  },
)

// This is the mutator function orval expects

export const axiosInstance = <T>(config: AxiosRequestConfig, queryOptions?: AxiosRequestConfig) => {
  return instance<T>({
    ...config,
    ...queryOptions,
  }).then(({ data }) => data)
}

export const get = <T, U>(url: string, params?: T, config?: AxiosRequestConfig): Promise<U> => {
  return instance({ url, params, method: 'GET', ...config })
}

export const post = <T, U>(url: string, data: T = {} as T, config?: AxiosRequestConfig): Promise<U> => {
  return instance({ url, data, method: 'POST', ...config })
}

export const put = <T, U>(url: string, data: T, config?: AxiosRequestConfig): Promise<U> => {
  return instance({ url, data, method: 'PUT', ...config })
}

export const del = <T, U>(url: string, data?: T, config?: AxiosRequestConfig): Promise<U> => {
  return instance({ url, data, method: 'DELETE', ...config })
}

export type ErrorType<Error> = AxiosError<Error>
