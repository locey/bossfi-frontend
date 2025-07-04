"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, CornerUpLeft, MoreHorizontal } from "lucide-react"
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

interface CommentItemProps {
  comment: Comment
  threadId: string
  depth?: number
}

export default function CommentItem({ comment, threadId, depth = 0 }: CommentItemProps) {
  const [isLiked, setIsLiked] = useState(comment.isLiked || false)
  const [likesCount, setLikesCount] = useState(comment.likes)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [showReplies, setShowReplies] = useState(true)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
  }

  const handleReply = () => {
    setShowReplyForm(!showReplyForm)
  }

  const maxDepth = 3
  const isMaxDepth = depth >= maxDepth

  return (
    <div className={`${depth > 0 ? "ml-12" : ""}`}>
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-start justify-between">
          <div className="flex space-x-3 flex-1">
            <Avatar className="h-10 w-10">
              <AvatarImage src={comment.author.avatar || "/placeholder.svg?height=40&width=40"} />
              <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold text-black">{comment.author.name}</span>
                <span className="text-sm text-gray-500">{comment.timestamp}</span>
              </div>

              <p className="text-gray-800 mb-4 whitespace-pre-wrap">{comment.content}</p>

              <div className="flex items-center space-x-6">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-1 text-sm ${
                    isLiked ? "text-red-500" : "text-gray-500"
                  } hover:text-red-500 transition-colors`}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                  <span>{likesCount} likes</span>
                </button>

                {comment.children && comment.children.length > 0 && (
                  <button
                    onClick={() => setShowReplies(!showReplies)}
                    className="flex items-center space-x-1 text-sm text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{comment.replies} replies</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            {!isMaxDepth && (
              <Button variant="ghost" size="sm" onClick={handleReply} className="text-gray-500 hover:text-gray-700">
                <CornerUpLeft className="h-4 w-4 mr-1" />
                Reply
              </Button>
            )}
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-2">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Reply form */}
        {showReplyForm && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <ReplyForm
              threadId={threadId}
              parentId={comment.id}
              onSubmit={() => setShowReplyForm(false)}
              onCancel={() => setShowReplyForm(false)}
              placeholder={`Reply to ${comment.author.name}...`}
            />
          </div>
        )}
      </div>

      {/* Nested replies */}
      {comment.children && comment.children.length > 0 && showReplies && (
        <div className="mt-4 space-y-4">
          {comment.children.map((child) => (
            <CommentItem key={child.id} comment={child} threadId={threadId} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
