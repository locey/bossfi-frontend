'use client'

import React, { useState } from 'react'
import { Wallet, Info, Plus, ArrowRight } from 'lucide-react'
import { useAccount, useBalance } from 'wagmi'
import { formatUnits } from 'viem'
import { formatAddress } from '@/utils'
import { useStake } from '@/hooks/useStake'
import { usePassport, WalletLoginButton } from '@/components/Passport'

function ConnectWallet() {
  const { isLogged } = usePassport()

  const { address } = useAccount()
  const { data } = useBalance({ address })
  const stake = useStake()
  const [ethAmount, setEthAmount] = useState('')

  const handleMaxClick = () => {
    setEthAmount('2.5') // Example max amount
  }

  const handleConnectWallet = async () => {
    // setIsWalletConnected(true);
    console.log('Connecting wallet...')
    const result = await stake(ethAmount)
    console.log('Stake result:', result)
  }

  const exchangeRate = ethAmount ? `1 ETH = 1 stETH` : '1 ETH = 1 stETH'
  const youWillReceive = ethAmount ? `${ethAmount} stETH` : '0.0 stETH'

  const formatted = data ? formatUnits(data.value, data.decimals) : '0'

  return (
    <div className="max-w-xl">
      {isLogged && (
        <div className="w-full bg-[#27272e] -mb-6 rounded-2xl text-white p-6 pb-12">
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <div className="">
              ETH 余额：
              <strong>
                {formatted} {data?.symbol}
              </strong>
            </div>
            <div className="border border-gray-200 rounded-full px-2 py-1 flex items-center gap-2">
              <span>{formatAddress(address || '')}</span>
              <Wallet size={18} className="text-gray-400" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="">
              当前质押：
              <strong>0.0 stETH</strong>
            </div>
            <div className="px-2 py-1 flex items-center gap-2">
              <span>Lido APR</span>
              <span className="text-green-400 font-semibold">6.4%</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-6">
        {/* ETH Input Section */}
        <div className="space-y-4">
          <div className="relative">
            <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50 focus-within:border-blue-300 focus-within:bg-white transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Ξ</span>
                </div>
                <span className="text-gray-500 text-sm">ETH amount</span>
              </div>
              <input
                type="number"
                value={ethAmount}
                onChange={e => setEthAmount(e.target.value)}
                placeholder="0.0"
                className="flex-1 bg-transparent text-right text-lg font-medium text-gray-900 outline-none"
              />
              <button
                onClick={handleMaxClick}
                className="text-blue-500 text-sm font-semibold hover:text-blue-600 transition-colors"
              >
                MAX
              </button>
            </div>
          </div>

          <div className="w-full flex items-center justify-between">
            {isLogged ? (
              <button
                onClick={handleConnectWallet}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                质押
              </button>
            ) : (
              <WalletLoginButton className="w-full py-4" />
            )}
          </div>
          {/* Connect Wallet Button */}
        </div>

        {/* APR Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-gray-900">Total 6.4% APR</h3>
            <span className="text-gray-600">+ Mellow points</span>
          </div>
          <p className="text-sm text-gray-600">New way to support Lido decentralization.</p>

          {/* Protocol Icons */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">st</span>
                </div>
                <span className="text-xs text-gray-600">stETH,</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">O</span>
                </div>
                <span className="text-xs text-gray-600">Obol,</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="text-xs text-gray-600">SSV APR</span>
              </div>
            </div>
            <Plus size={16} className="text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="text-sm font-semibold text-gray-700">Mellow points</span>
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-3 leading-relaxed">
            Not financial advice. Info and APR are illustrative, actual rewards may vary. Vaults use carries risk. By
            proceeding, you'll be redirected to a third-party site.
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mt-4">
            Proceed
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Transaction Details */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">You will receive</span>
            <span className="text-sm font-semibold text-gray-900">{youWillReceive}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Exchange rate</span>
            <span className="text-sm font-semibold text-gray-900">{exchangeRate}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Max transaction cost</span>
            <span className="text-sm font-semibold text-gray-900">$0.29</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">Reward fee</span>
              <Info size={14} className="text-gray-400" />
            </div>
            <span className="text-sm font-semibold text-gray-900">10%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectWallet
