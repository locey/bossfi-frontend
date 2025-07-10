'use client'

import type React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle, CornerUpLeft } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { DtoArticleResponse } from '@/api/model/dtoArticleResponse'

interface ThreadCardProps {
  thread: DtoArticleResponse
  isReply?: boolean
  showReplyButton?: boolean
  isClickable?: boolean
}
/**
 * 根据加密货币钱包地址生成马赛克图案
 * @param {string} walletAddress - 钱包地址 (如 "0x47D441F5c186b4387efad33A465FdE1b7C7Df858")
 * @param {number} [size=12] - 马赛克网格大小 (N x N)
 * @param {number} [pixelSize=15] - 每个马赛克像素的大小(像素)
 * @returns {HTMLCanvasElement} - 返回包含马赛克图案的canvas元素
 */
function generateMosaicFromWallet(walletAddress: string, size = 12, pixelSize = 15) {
  // 3. 创建Canvas
  const canvas = document.createElement('canvas')
  const canvasSize = size * pixelSize
  canvas.width = canvasSize
  canvas.height = canvasSize
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  // 4. 生成马赛克（使用钱包地址的16进制字符控制颜色）
  const hexChars = walletAddress.replace('0x', '').split('')
  let hexIndex = 0

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // 用16进制字符决定是否填充（偶数字符则填充）
      const shouldFill = parseInt(hexChars[hexIndex % hexChars.length], 16) % 2 === 0
      hexIndex++

      if (shouldFill) {
        // 用地址中的相邻字符生成RGB颜色
        const r = parseInt(hexChars[hexIndex % hexChars.length], 16) * 16
        hexIndex++
        const g = parseInt(hexChars[hexIndex % hexChars.length], 16) * 16
        hexIndex++
        const b = parseInt(hexChars[hexIndex % hexChars.length], 16) * 16
        hexIndex++

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
      }
    }
  }

  return canvas.toDataURL()
}

export default function ThreadCard({
  thread,
  isReply = false,
  showReplyButton = true,
  isClickable = true,
}: ThreadCardProps) {
  const [isLiked, setIsLiked] = useState(false) // DtoArticleResponse does not have isLiked
  const [likesCount, setLikesCount] = useState(thread.like_count ?? 0)

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
  }

  const CardContent = () => (
    <div className={`bg-white rounded-2xl border border-gray-200 p-6 ${isReply ? 'ml-12 mt-4' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex space-x-3 flex-1">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={generateMosaicFromWallet(thread.user?.wallet_address || '') || '/placeholder.svg?height=40&width=40'}
            />
            <AvatarFallback>{thread.user?.wallet_address || '?'}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold text-black">
                {thread.user?.wallet_address?.slice(0, 6) + '...' + thread.user?.wallet_address?.slice(-4)}
              </span>
              <span className="text-sm text-gray-500">
                {thread.created_at ? new Date(thread.created_at).toLocaleString() : ''}
              </span>
            </div>
            <p className="text-gray-800 mb-4 whitespace-pre-wrap">{thread.content}</p>
            <div className="flex items-center space-x-6">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 text-sm ${
                  isLiked ? 'text-red-500' : 'text-gray-500'
                } hover:text-red-500 transition-colors`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likesCount} likes</span>
              </button>
              <div className="flex items-center space-x-1 text-sm text-blue-500">
                <MessageCircle className="h-4 w-4" />
                <span>{thread.comment_count ?? 0} replies</span>
              </div>
            </div>
          </div>
        </div>
        {showReplyButton && (
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
            <CornerUpLeft className="h-4 w-4 mr-1" />
            Reply
          </Button>
        )}
      </div>
    </div>
  )

  if (isClickable && !isReply) {
    return (
      <Link href={`/thread/${thread.id}`} className="block hover:opacity-95 transition-opacity">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}
