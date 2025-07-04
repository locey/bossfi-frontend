'use client'

import type { DtoCommentResponse } from '@/api/model/dtoCommentResponse'
import { useState } from 'react'
import CommentItem from './comment-item'
import ReplyForm from './reply-form'

interface CommentSectionProps {
  comments: DtoCommentResponse[]
  threadId: string
}

export default function CommentSection({ comments, threadId }: CommentSectionProps) {
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'oldest'>('popular')

  // 处理排序，DtoCommentResponse 结构
  const sortedComments = [...comments].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b.like_count || 0) - (a.like_count || 0)
      case 'newest':
        return new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime()
      case 'oldest':
        return new Date(a.created_at || '').getTime() - new Date(b.created_at || '').getTime()
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      {/* Comments header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-black">
            {comments.length} {comments.length === 1 ? 'Reply' : 'Replies'}
          </h3>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as 'popular' | 'newest' | 'oldest')}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popular">Most popular</option>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>

        {/* Reply form */}
        <ReplyForm threadId={threadId} placeholder="Write a reply..." />
      </div>

      {/* Comments list */}
      <div className="space-y-4">
        {sortedComments.map(comment => (
          <CommentItem key={comment.id} comment={comment} threadId={threadId} />
        ))}
      </div>

      {/* Load more comments */}
      {comments.length > 5 && (
        <div className="text-center">
          <button className="text-sm text-gray-600 hover:text-gray-800 font-medium">Load more replies</button>
        </div>
      )}
    </div>
  )
}
