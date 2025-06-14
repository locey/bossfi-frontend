'use client'

import dynamic from 'next/dynamic'

const StakePage = dynamic(() => import('@/stake'), {
  ssr: false,
})

export default function App() {
  return <StakePage />
}
