'use client'

import type React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle, CornerUpLeft } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { DtoArticleResponse } from '@/api/model/dtoArticleResponse'
import * as jdenticon from 'jdenticon'
interface ThreadCardProps {
  thread: DtoArticleResponse
  isReply?: boolean
  showReplyButton?: boolean
  isClickable?: boolean
}

const addressToAvatar = (address: string) => {
  const canvas = document.createElement('canvas')
  canvas.width = 20
  canvas.height = 20
  jdenticon.updateCanvas(canvas, address, {
    padding: 0,
  })
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
            <AvatarImage src={addressToAvatar(thread.user?.wallet_address || '')} />
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
