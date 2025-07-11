'use client'

import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { cn } from '@/lib/utils'
import { usePassport } from '..'

function WalletLoginButton(props: { children?: React.ReactNode; className?: string }) {
  const { children, className } = props
  const { login } = usePassport()

  return (
    <ConnectButton.Custom>
      {({ openConnectModal, ...r }) => {
        return (
          <button
            onClick={() => {
              const address = r.account?.address
              const token = localStorage.getItem('Token')
              if (address == null) {
                throw new Error('address is null')
              }
              openConnectModal()
              login(address, token as string)
            }}
            className={cn(
              'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2',
              className,
            )}
          >
            {children || 'Connect Wallet'}
          </button>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default WalletLoginButton
