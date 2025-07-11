'use client'

import * as jdenticon from 'jdenticon'
import { Avatar as ShadcnAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAccount } from 'wagmi'
import Link from 'next/link'
const addressToAvatar = (address: string) => {
  const canvas = document.createElement('canvas')
  canvas.width = 20
  canvas.height = 20

  jdenticon.updateCanvas(canvas, address.toLowerCase(), {
    padding: 0,
  })
  return canvas.toDataURL()
}
export default function Avatar({ address }: { address?: string }) {
  const { address: loggedInAddress } = useAccount()
  const isCurrentUser = loggedInAddress === address
  const avatar = (
    <ShadcnAvatar className="h-10 w-10">
      <AvatarImage src={addressToAvatar(address ?? 'unknown')} />
      <AvatarFallback>{address || '?'}</AvatarFallback>
    </ShadcnAvatar>
  )
  if (isCurrentUser) return <Link href={'/profile'}>{avatar}</Link>
  return avatar
}
