// components/WalletProvider.tsx
'use client'

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { useEffect, useState } from 'react'

// Fallback values for development
const APP_NAME = process.env.NEXT_PUBLIC_WAGAMI_APP_NAME || 'BossFi'
const PROJECT_ID = process.env.NEXT_PUBLIC_WAGAMI_APP_PROJECT_ID || ''

if (!PROJECT_ID) {
  console.warn(
    'NEXT_PUBLIC_WAGAMI_APP_PROJECT_ID is not set. Please get a project ID from https://cloud.walletconnect.com',
  )
}

const config = getDefaultConfig({
  appName: APP_NAME,
  projectId: PROJECT_ID,
  chains: [mainnet, sepolia],
  ssr: true,
})

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div>Loading wallet...</div>
  }

  // If no project ID is set, show a warning message
  if (!PROJECT_ID) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ff6b6b', backgroundColor: '#ffe0e0' }}>
        <h3>WalletConnect Configuration Required</h3>
        <p>Please set NEXT_PUBLIC_WAGAMI_APP_PROJECT_ID in your .env.local file.</p>
        <p>
          Get a project ID from:{' '}
          <a href="https://cloud.walletconnect.com" target="_blank" rel="noopener noreferrer">
            https://cloud.walletconnect.com
          </a>
        </p>
        <div style={{ marginTop: '10px' }}>{children}</div>
      </div>
    )
  }

  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider>{children}</RainbowKitProvider>
    </WagmiProvider>
  )
}
