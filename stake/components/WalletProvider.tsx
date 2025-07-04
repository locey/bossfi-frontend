// components/WalletProvider.tsx
'use client';

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet, sepolia } from 'wagmi/chains';

// const config = getDefaultConfig({
//   appName: 'My Web3 App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains: [mainnet, sepolia],
//   ssr: false,
// });

const config = getDefaultConfig({
  appName: 'My Web3 App',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // 可前往 https://cloud.walletconnect.com 注册
  chains: [mainnet, sepolia],
  ssr: false,
})

const queryClient = new QueryClient();

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
