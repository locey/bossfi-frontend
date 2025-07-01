import { post, get } from '@/utils/request'

export interface INonceResponse {
  message: string
  nonce: string
  address: string
}

export interface ILoginData {
  wallet_address: string
  message: string
  signature: string
}

export interface IUerProfile {
  id: number
  wallet_address: string
  username: string
  avatar: string
  boss_balance: string
  staked_amount: string
  reward_balance: string
  created_at: string
  last_login_at: string
}

export interface ILoginResponse {
  token: string
  user: IUerProfile
}

interface IAuthAPI {
  nonce(data: { wallet_address: string }): Promise<INonceResponse>
  login(data: ILoginData): Promise<ILoginResponse>
  logout(): Promise<void>
  profile(): Promise<IUerProfile>
}

const api: IAuthAPI = {
  nonce: data => post('/auth/nonce', data),
  login: data => post('/auth/login', data),
  logout: () => post('/auth/logout'),
  profile: () => get('/auth/profile'),
}

export default api
