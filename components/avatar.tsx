'use client'

import * as jdenticon from 'jdenticon'
import { Avatar as ShadcnAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAccount } from 'wagmi'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const addressToAvatar = (address: string) => {
  if (typeof window === 'undefined') return ''
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
  const [avatarUrl, setAvatarUrl] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (address) {
      setAvatarUrl(addressToAvatar(address))
    }
  }, [address])

  const fallbackText = mounted && address ? address : '?'

  const avatar = (
    <ShadcnAvatar className="h-10 w-10">
      <AvatarImage src={avatarUrl} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </ShadcnAvatar>
  )
  if (isCurrentUser) return <Link href={'/profile'}>{avatar}</Link>
  return avatar
}
