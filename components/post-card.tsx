"use client"

import type React from "react"

import { Heart, MessageCircle, Eye, Clock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

interface Post {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
  }
  category: string
  likes: number
  comments: number
  views: number
  createdAt: string
  isLiked?: boolean
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      技术讨论: "bg-blue-100 text-blue-800",
      DeFi: "bg-green-100 text-green-800",
      NFT: "bg-purple-100 text-purple-800",
      交易策略: "bg-orange-100 text-orange-800",
      行业资讯: "bg-red-100 text-red-800",
      问答: "bg-yellow-100 text-yellow-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <Link href={`/post/${post.id}`}>
      <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{post.createdAt}</span>
                </div>
              </div>
            </div>
            <Badge className={`text-xs ${getCategoryColor(post.category)}`}>{post.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.content}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center space-x-1 ${
                isLiked ? "text-red-500 hover:text-red-600" : "text-muted-foreground"
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              <span>{likesCount}</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
