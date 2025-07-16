import { postAuthLogin, postAuthNonce } from '@/api/auth/auth'
import { useEffect, useState } from 'react'
import { useAccount, useSignMessage } from 'wagmi'
import { useMemoizedFn } from 'ahooks'
export default function useStore() {
  const [isLogged, setIsLogged] = useState(false)

  const { address } = useAccount()
  const { signMessageAsync } = useSignMessage()

  const login = useMemoizedFn((param: { address: string; token?: string | null }) => {
    const { address, token } = param
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

    if (!token && address) {
      onLogin()
    } else if (token && address) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
      localStorage.removeItem('Token')
      localStorage.removeItem('UserInfo')
    }
  })
  useEffect(() => {
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
  }, [address])

  return { isLogged }
}
