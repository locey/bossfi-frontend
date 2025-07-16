'use client'

import dynamic from 'next/dynamic'
import { PassportProvider } from '@/components/Passport'

// Dynamically import WalletProvider to prevent SSR issues
const WalletProvider = dynamic(() => import('@/components/Wallet'), {
  ssr: false,
  loading: () => <div>Loading wallet...</div>,
})

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider>
      <PassportProvider>{children}</PassportProvider>
    </WalletProvider>
  )
}
