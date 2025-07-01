'use server'
import { apiClient } from '@/api'
import CategoryTabs from '../../components/CategoryTabs'
import ArticleCard from '@/components/Article/ArticleCard'

export default async function Main() {
  const list = await apiClient.articlesGet(1, 10)
  const articles = list.data.articles
  return (
    <>
      <CategoryTabs />
      <div className="flex flex-col gap-4">
        {articles?.map((article, idx) => (
          <ArticleCard key={idx} {...article} />
        ))}
      </div>
    </>
  )
}
