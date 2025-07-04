'use client'
import React, { useState } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { Card } from '@/components/ui/card'

const CommentSection = ({ comments: initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments)

  const handleAddComment = text => {
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        author: '你',
        date: new Date().toLocaleString(),
        content: text,
      },
    ])
  }

  return (
    <Card className="w-full mx-auto p-6 mt-2">
      <h3 className="text-xl font-semibold mb-4">评论 ({comments.length})</h3>
      <CommentInput onAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </Card>
  )
}

export default CommentSection
