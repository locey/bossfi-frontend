'use client'

import React, { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import clsx from 'clsx'
import { cn } from '@/lib/utils'

function WalletLoginButton(props: { children?: React.ReactNode; className?: string }) {
  const { children, className } = props

  return (
    <ConnectButton.Custom>
      {({ openConnectModal }) => {
        return (
          <button
            onClick={openConnectModal}
            className={cn(
              'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2',
              className,
            )}
          >
            {children || '连接钱包'}
          </button>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default WalletLoginButton
