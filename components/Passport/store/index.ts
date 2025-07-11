import { postAuthLogin, postAuthNonce } from '@/api/auth/auth'
import { useEffect, useState } from 'react'
import { useAccount, useSignMessage } from 'wagmi'
import { useMemoizedFn } from 'ahooks'
export default function useStore() {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('Token')
    if (token != null) {
      setIsLogged(true)
    }
  }, [])

  const { isConnected } = useAccount()
  const { signMessageAsync } = useSignMessage()

  const login = useMemoizedFn((address: string, token?: string | null) => {
    const onLogin = async () => {
      const nonce = await postAuthNonce({ wallet_address: address })
      const sig = await signMessageAsync({ message: nonce?.message || '' })
      if (nonce?.message == null) {
        throw new Error('nonce is null')
      }
      const loginParams = {
        wallet_address: address,
        message: nonce.message,
        signature: sig,
      }
      const response = await postAuthLogin(loginParams)
      if (response == null) {
        throw new Error('response is null')
      }
      if (response.token == null) {
        throw new Error('token is null')
      }
      setIsLogged(true)
      localStorage.setItem('Token', response.token)
      localStorage.setItem('UserInfo', JSON.stringify(response.user))
    }

    if (!token && isConnected) {
      onLogin()
    } else if (token && isConnected) {
      setIsLogged(true)
    } else if (!isConnected) {
      setIsLogged(false)
      localStorage.removeItem('Token')
      localStorage.removeItem('UserInfo')
    }
  })

  return { isLogged, login }
}
