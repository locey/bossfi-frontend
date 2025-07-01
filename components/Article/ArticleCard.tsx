import { Card } from '@/components/ui/card'
import { Heart, MessageCircle } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { DtoArticleResponse } from '@/api/generated'

const ArticleCard: React.FC<DtoArticleResponse> = ({ title, content, created_at, like_count, comment_count }) => {
  return (
    <Link href={`/posts/${title?.replace(/\s+/g, '-')}`}>
      <Card className="p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">{title}</span>
        </div>
        <div className="text-muted-foreground text-sm truncate">{content}</div>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
          <span>{created_at}</span>
          <span className="flex items-center gap-1">
            <Heart size={14} className="text-red-500" />
            {like_count}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={14} />
            {comment_count}
          </span>
        </div>
      </Card>
    </Link>
  )
}

export default ArticleCard
