// components/WalletProvider.tsx
'use client'

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { mainnet, sepolia } from 'wagmi/chains'

if (process.env.NEXT_PUBLIC_WAGAMI_APP_NAME == null) {
  throw new Error('NEXT_PUBLIC_WAGAMI_APP_NAME is not set')
}
if (process.env.NEXT_PUBLIC_WAGAMI_APP_PROJECT_ID == null) {
  throw new Error('NEXT_PUBLIC_WAGAMI_APP_PROJECT_ID is not set')
}

const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_WAGAMI_APP_NAME,
  projectId: process.env.NEXT_PUBLIC_WAGAMI_APP_PROJECT_ID, // 可前往 https://cloud.walletconnect.com 注册
  chains: [mainnet, sepolia],
  ssr: false,
})

const queryClient = new QueryClient()

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
