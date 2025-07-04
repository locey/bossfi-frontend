import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReactQueryProvider from './queryclient'
import { PassportProvider } from '@/components/Passport'
import WalletProvider from '@/components/Wallet'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BossFi - Community Forum',
  description: 'A modern community forum for crypto, trading, and finance discussions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <WalletProvider>
            <PassportProvider>{children}</PassportProvider>
          </WalletProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
