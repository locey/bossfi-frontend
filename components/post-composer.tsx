'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePostArticles } from '@/api/articles/articles'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ImageIcon, Paperclip, Smile } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { getGetCategoriesQueryKey, useGetCategories } from '@/api/categories/categories'
import { queryClient } from '@/app/queryclient'

export default function PostComposer() {
  const { data: categoriesData } = useGetCategories({
    page_size: 20,
    page: 1,
  })
  const categoriesList = categoriesData?.categories || []
  const [content, setContent] = useState('')
  const [categoryId, setCategoryId] = useState(1)
  // 发布articles
  const router = useRouter()
  const { mutate } = usePostArticles({
    mutation: {
      onSuccess: async () => {
        router.push('/')
        await queryClient.invalidateQueries({ queryKey: getGetCategoriesQueryKey({ page_size: 20, page: 1 }) })
      },
    },
  })

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
      <div className="flex space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="Tell everyone what are you working on..."
            value={content}
            onChange={e => setContent(e.target.value)}
            className="border-none resize-none text-base placeholder:text-gray-400 focus-visible:ring-0  min-h-[60px]"
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-2">
                <ImageIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-2">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 p-2">
                <Smile className="h-5 w-5" />
              </Button>
              {/* 分类选择器移动到底部工具栏 */}
              <div className="ml-4 w-44">
                <Select
                  value={categoryId.toString()}
                  onValueChange={v => {
                    const id = Number(v)
                    if (isNaN(id)) return
                    setCategoryId(id)
                  }}
                  required
                >
                  <SelectTrigger className="w-full border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition text-base font-medium h-10">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoriesList.map(
                      cat =>
                        cat.id && (
                          <SelectItem key={cat.id} value={cat.id.toString()}>
                            {cat.name}
                          </SelectItem>
                        ),
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              className="bg-gray-200 text-gray-700 font-semibold rounded-full px-6 py-2 ml-4 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
              disabled={!content.trim()}
              onClick={() => {
                const title = content.split('\n')[0]
                mutate({ data: { content, title, category_id: categoryId } })
                setContent('')
              }}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
