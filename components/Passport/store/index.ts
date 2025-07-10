import api from '@/apis/auth'
import to from '@/utils/await-to'
import { useEffect, useState } from 'react'
import { useAccount, useSignMessage } from 'wagmi'

export default function useStore() {
  const [isLogged, setIsLogged] = useState(false)

  const { address, isConnected } = useAccount()
  const { signMessageAsync, isSuccess, isLoading } = useSignMessage()

  useEffect(() => {
    const token = localStorage.getItem('Token')
    if (token) {
      getUserProfile()
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('Token')

    console.log('Token from localStorage:', token)

    if (!token && address && isConnected) {
      console.log('Wallet connected:', address)
      onLogin(address)
    } else if (token && isConnected) {
      setIsLogged(true)
    } else if (!isConnected) {
      setIsLogged(false)
      localStorage.removeItem('Token')
      localStorage.removeItem('UserInfo')
    }
  }, [address, isConnected])

  const getAuthNonce = async (address: string) => {
    const data = {
      wallet_address: address,
    }

    const [error, response] = await to(api.nonce(data))

    if (error) {
      console.error('Failed to fetch nonce:', error)
      return
    }
    console.log('getAuthNonce response:', response)
    return response
  }

  const onLogin = async (address: string) => {
    const nonce = await getAuthNonce(address)
    console.log('fff 获取的 nonce:-----', nonce)
    const sig = await signMessageAsync({ message: nonce?.data?.message || '' })
    console.log('fff sig:', sig)
    const loginParams = {
      wallet_address: address as string,
      message: nonce?.data?.message || '',
      signature: sig as string,
    }
    const [error, response] = await to(api.login(loginParams))
    if (error) {
      console.error('fff 登录失败:', error)
      return
    }
    setIsLogged(true)
    localStorage.setItem('Token', response.data.token)
    localStorage.setItem('UserInfo', JSON.stringify(response.data.user))
  }

  const getUserProfile = async () => {
    const [error, response] = await to(api.profile())

    if (error) {
      console.error('fff Failed to fetch user profile:', error)
      return
    }

    console.log('fff getAuthNonce response:', response)
    //   const data = await response.json();
    //   return data.nonce;
  }

  return { isLogged }
}
