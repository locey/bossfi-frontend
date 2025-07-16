import { postAuthLogin, postAuthNonce } from '@/api/auth/auth'
import { useEffect, useState } from 'react'
import { useAccount, useSignMessage } from 'wagmi'
import { useMemoizedFn } from 'ahooks'

export default function useStore() {
  const [isLogged, setIsLogged] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const { address } = useAccount()
  const { signMessageAsync } = useSignMessage()

  // Ensure we only run client-side code after hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const login = useMemoizedFn((param: { address: string; token?: string | null }) => {
    if (typeof window === 'undefined' || !isClient) return

    const { address, token } = param
    const onLogin = async () => {
      try {
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
        if (typeof window !== 'undefined') {
          localStorage.setItem('Token', response.token)
          localStorage.setItem('UserInfo', JSON.stringify(response.user))
        }
      } catch (error) {
        console.error('Login error:', error)
        setIsLogged(false)
      }
    }

    if (!token && address) {
      onLogin()
    } else if (token && address) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('Token')
        localStorage.removeItem('UserInfo')
      }
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !isClient) return

    const token = localStorage.getItem('Token')
    const isLogged = token != null
    setIsLogged(isLogged)

    if (!address) return
    if (isLogged) return
    if (token != null) return

    login({
      address: address,
      token,
    })
  }, [address, isClient, login])

  return { isLogged }
}
