'use client'

import ConnectWallet from './components/ConnectWallet'
import FAQ from './components/FAQ'
import Statistics from './components/Statistics'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { usePassport, WalletLoginButton } from '@/components/Passport'
import '@rainbow-me/rainbowkit/styles.css'

function StakePage() {
  const { isLogged } = usePassport()

  return (
    <div className="bg-[##f2f4f6]">
      <div className="w-full flex justify-between items-center bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold">BoosFi</h1>
        {isLogged ? <ConnectButton /> : <WalletLoginButton className="" />}
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
  )
}

export default StakePage
