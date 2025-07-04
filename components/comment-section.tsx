"use client"

import { useState } from "react"
import CommentItem from "./comment-item"
import ReplyForm from "./reply-form"

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  replies: number
  isLiked?: boolean
  children?: Comment[]
}

interface CommentSectionProps {
  comments: Comment[]
  threadId: string
}

export default function CommentSection({ comments, threadId }: CommentSectionProps) {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [sortBy, setSortBy] = useState<"popular" | "newest" | "oldest">("popular")

  const sortedComments = [...comments].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.likes - a.likes
      case "newest":
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      case "oldest":
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
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
            {comments.length} {comments.length === 1 ? "Reply" : "Replies"}
          </h3>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "popular" | "newest" | "oldest")}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popular">Most popular</option>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>

        {/* Reply form */}
        <ReplyForm threadId={threadId} onSubmit={() => setShowReplyForm(false)} placeholder="Write a reply..." />
      </div>

      {/* Comments list */}
      <div className="space-y-4">
        {sortedComments.map((comment) => (
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
