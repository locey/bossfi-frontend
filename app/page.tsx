'use server'

import Navbar from '@/components/navbar'
import PostComposer from '@/components/post-composer'
import CategoryGrid from '@/components/category-grid'
import ThreadCard from '@/components/thread-card'
import { getArticles } from '@/api/文章/文章'

const mockThreads = [
  {
    id: '1',
    author: {
      name: 'Elon Musk',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    content: 'Shiba Inu to the moon 🚀🌙',
    timestamp: 'Today, 4:45 PM',
    likes: 954,
    replies: 115,
    isLiked: false,
  },
  {
    id: '2',
    author: {
      name: 'Andrew Tate',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    content: "That's right my friend",
    timestamp: 'Today, 4:45 PM',
    likes: 42,
    replies: 12,
    isLiked: true,
  },
]

const yesterdayThreads = [
  {
    id: '3',
    author: {
      name: 'Morpheus',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    content:
      "Can someone explain to me what crypto and NFTs are? I've spent so much time looking for it, and can't find a right answer. If some man can tell me that in 4 simple words, that would be really appreciated!",
    timestamp: 'Yesterday, 1:13 PM',
    likes: 954,
    replies: 115,
    isLiked: false,
  },
]

export default async function HomePage() {
  const data = await getArticles({
    page: 1,
    page_size: 10,
  })
  console.log(data)
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <PostComposer />

        <CategoryGrid />

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-6">Popular threads</h2>

          <div className="space-y-4">
            {mockThreads.map((thread, index) => (
              <div key={thread.id}>
                <ThreadCard thread={thread} isReply={index > 0} showReplyButton={index === 0} isClickable={true} />
              </div>
            ))}

            <div className="pl-12">
              <button className="text-sm text-gray-600 hover:text-gray-800 font-medium">See other 105 replies</button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Yesterday, 07 May</h3>
          <div className="space-y-4">
            {yesterdayThreads.map(thread => (
              <ThreadCard key={thread.id} thread={thread} isClickable={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
