import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, MessageCircle } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

interface PostCardProps {
  title: string
  desc: string
  tag: string
  date: string
  likes: number
  comments: number
}

const PostCard: React.FC<PostCardProps> = ({ title, desc, tag, date, likes, comments }) => {
  return (
    <Link href={`/posts/${title.replace(/\s+/g, '-')}`}>
      <Card className="p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">{title}</span>
          <Badge variant="outline">{tag}</Badge>
        </div>
        <div className="text-muted-foreground text-sm">{desc}</div>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <Heart size={14} className="text-red-500" />
            {likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={14} />
            {comments}
          </span>
        </div>
      </Card>
    </Link>
  )
}

export default PostCard
