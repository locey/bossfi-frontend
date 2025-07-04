'use server'

import Navbar from '@/components/navbar'
import PostComposer from '@/components/post-composer'
import CategoryGrid from '@/components/category-grid'
import ThreadCard from '@/components/thread-card'
import { getArticles } from '@/api/articles/articles'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

function MyComponent() {
  return (
    <div>
      <Feather name="home" size={24} color="black" />
      <MaterialIcons name="favorite" size={24} color="red" />
    </div>
  )
}

export default async function HomePage() {
  const data = await getArticles({
    page: 1,
    page_size: 10,
  })
  console.log(data.articles)
  return (
    <div className="min-h-screen bg-gray-50">
      <MyComponent />
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <PostComposer />

        <CategoryGrid />

        {/* <div className="mb-8">
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
        </div> */}

        <div className="mb-4">
          {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">Yesterday, 07 May</h3> */}
          <div className="space-y-4">
            {data.articles?.map(thread => (
              <ThreadCard key={thread.id} thread={thread} isClickable={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
