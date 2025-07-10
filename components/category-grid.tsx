'use client'

import { useGetCategories } from '@/api/categories/categories'
import { Home, Palette, TrendingUp, DollarSign, Building, Car, Bitcoin } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
const IconMap = {
  Crypto: <Bitcoin className="h-5 w-5 text-white" />,
  NFTs: <Palette className="h-5 w-5 text-white" />,
  Houses: <Home className="h-5 w-5 text-white" />,
  Trading: <TrendingUp className="h-5 w-5 text-white" />,
  Finance: <DollarSign className="h-5 w-5 text-white" />,
  'Wall Street': <Building className="h-5 w-5 text-white" />,
  'Sport Cars': <Car className="h-5 w-5 text-white" />,
}
export default function CategoryGrid() {
  const searchParams = useSearchParams()
  const category_id = searchParams?.get('category')
  const router = useRouter()
  const { data: categoriesData } = useGetCategories({
    page_size: 20,
    page: 1,
  })
  const categoriesList = categoriesData?.categories || []
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-black mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoriesList.map(category => {
          const IconComponent = IconMap[category.name as keyof typeof IconMap]
          if (!IconComponent) return null
          const isActive = category_id === category.id?.toString()
          return (
            <div
              onClick={() => {
                router.push(`/?category=${category.id}`)
              }}
              key={category.id}
              className={`relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-all cursor-pointer ${
                isActive
                  ? 'ring-2 ring-blue-400/70 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 border-transparent scale-105'
                  : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform ${
                    isActive ? 'scale-110 ring-2 ring-blue-300' : ''
                  }`}
                  style={{ backgroundColor: category.color }}
                >
                  {IconComponent}
                </div>
                <div>
                  <h3 className="font-semibold text-black">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.article_count} threads</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
