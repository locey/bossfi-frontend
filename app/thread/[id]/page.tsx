'use server'

import Navbar from '@/components/navbar'
import ThreadCard from '@/components/thread-card'
import CommentSection from '@/components/comment-section'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Share, Bookmark, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

import { getArticlesId } from '@/api/articles/articles'
import { getComments } from '@/api/comments/comments'

interface ThreadDetailPageProps {
  params: { id: string }
}

export default async function ThreadDetailPage({ params }: ThreadDetailPageProps) {
  // id 需转为 number
  const id = Number(params.id)
  const article = await getArticlesId(id)
  const commentsRes = await getComments({ article_id: id, page: 1, page_size: 10 })

  // 书签状态如需交互可用 client 组件包裹
  // 这里只做展示

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800 p-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to threads
            </Button>
          </Link>
        </div>

        {/* Main thread */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <ThreadCard thread={article} showReplyButton={false} />

          {/* Thread actions */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{article.view_count ?? 0} views</span>
              <span>•</span>
              <span>{article.category?.name ?? ''}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-600">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-600">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Comments section */}
        <CommentSection comments={commentsRes as any} threadId={String(article.id)} />
      </div>
    </div>
  )
}
