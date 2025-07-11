'use client'

import type React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ImageIcon, Paperclip, Smile } from 'lucide-react'
import { usePostArticles } from '@/api/articles/articles'
import CategorySelector from '@/components/category-selector'
import Avatar from '@/components/avatar'
import { useAccount } from 'wagmi'

export default function CreateThreadPage() {
  const { address } = useAccount()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categoryId, setCategoryId] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 获取所有categories

  // 发布articles
  const { mutate } = usePostArticles()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim() || !categoryId) return

    setIsSubmitting(true)
    mutate(
      {
        data: {
          title,
          content,
          category_id: categoryId,
        },
      },
      {
        onSuccess: () => {
          setIsSubmitting(false)
          router.push('/')
        },
        onError: () => {
          setIsSubmitting(false)
          // 可以加错误提示
        },
      },
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-black mb-2">Create New Thread</h1>
            <p className="text-gray-600">Share your thoughts with the community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <Avatar address={address} />

              <div className="flex-1 space-y-4">
                <Input
                  placeholder="Thread title..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="text-lg font-semibold border-none focus-visible:ring-0 p-4 placeholder:text-gray-400"
                  required
                />

                <Textarea
                  placeholder="What's on your mind?"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  className="min-h-[200px] border-none resize-none focus-visible:ring-0 p-4 placeholder:text-gray-400"
                  required
                />

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" type="button" className="text-gray-400 hover:text-gray-600 p-2">
                      <ImageIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" type="button" className="text-gray-400 hover:text-gray-600 p-2">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" type="button" className="text-gray-400 hover:text-gray-600 p-2">
                      <Smile className="h-5 w-5" />
                    </Button>
                    {/* Category Selector */}
                    <div className="mx-2 h-4 w-px bg-gray-200"></div>
                    <CategorySelector selectedCategory={categoryId} onCategoryChange={setCategoryId} />
                  </div>

                  <div className="flex space-x-3">
                    <Button type="button" variant="ghost" onClick={() => router.back()} className="text-gray-600">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={!title.trim() || !content.trim() || !categoryId || isSubmitting}
                      className="bg-black text-white hover:bg-gray-800 rounded-full px-6"
                    >
                      {isSubmitting ? 'Publishing...' : 'Publish'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
