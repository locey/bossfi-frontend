'use client'

import '@rainbow-me/rainbowkit/styles.css'

import ConnectWallet from './components/ConnectWallet'
import FAQ from './components/FAQ'
import Statistics from './components/Statistics'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import WalletInfo from './components/WalletInfo'
import dynamic from 'next/dynamic'
import '@rainbow-me/rainbowkit/styles.css'
import { useEffect } from 'react'
import to from '@/utils/await-to'
import api from '@/apis/auth'
// import StakingPage from "./Test";

const WalletProvider = dynamic(() => import('./components/WalletProvider'), {
  ssr: false,
})

function StakePage() {
  const getAuthNonce = async () => {
    const data = {
      wallet_address: '0x876a229E5350fe1Fa24309d029Efe1a33a63D914',
    }

    const [error, response] = await to(api.nonce(data))

    if (error) {
      console.error('Failed to fetch nonce:', error)
      return
    }

    login({
      wallet_address: data.wallet_address,
      message: response.message,
      signature: response.nonce,
    })
    // const response = await fetch('http://117.72.201.234/api/v1/auth/nonce', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // if (!response.ok) {
    //   throw new Error('Failed to fetch nonce')
    // }

    console.log('getAuthNonce response:', response)
    //   const data = await response.json();
    //   return data.nonce;
  }

  const login = async (params: any) => {
    const [error, response] = await to(api.login(params))
    if (error) {
      console.error('Login failed:', error)
      return
    }
    console.log('Login response:', response)
    // 处理登录成功后的逻辑，比如保存 token 等
  }

  return (
    <WalletProvider>
      <div className="bg-[##f2f4f6]">
        {/* <div className=" p-6">
          <h1 className="text-2xl font-bold mb-4">
            🦄 RainbowKit 钱包连接 Demo
          </h1>

          <ConnectButton />

          <div className="mt-8">
            <WalletInfo />
          </div>
        </div> */}
        <div className="w-full flex justify-between items-center bg-white p-4 shadow-md">
          <h1 className="text-xl font-bold">BoosFi</h1>
          <ConnectButton />
        </div>

        <main className="w-[560px] mx-auto py-2 mt-4">
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-2xl font-bold mb-1">Stake Ether</h1>
            <h4>Stake ETH and receive stETH while staking</h4>
          </div>
          <div className="w-full flex flex-col items-center gap-8">
            <ConnectWallet />
            <Statistics />
            <FAQ />
            {/* Footer */}
            <div className="text-center">
              <p className="text-xs text-gray-500">Powered by Lido Protocol • Secured by Ethereum</p>
            </div>
          </div>
        </main>
      </div>
    </WalletProvider>
  )
}

export default StakePage
