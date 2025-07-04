"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImageIcon, Paperclip, Smile } from "lucide-react"

const categories = [
  { value: "crypto", label: "Crypto" },
  { value: "nfts", label: "NFTs" },
  { value: "houses", label: "Houses" },
  { value: "trading", label: "Trading" },
  { value: "finance", label: "Finance" },
  { value: "wall-street", label: "Wall Street" },
  { value: "sport-cars", label: "Sport Cars" },
]

export default function CreateThreadPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim() || !category) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    router.push("/")
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
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-4">
                <Input
                  placeholder="Thread title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg font-semibold border-none focus-visible:ring-0 p-0 placeholder:text-gray-400"
                  required
                />

                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger className="w-48 border-gray-200">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="What's on your mind?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[200px] border-none resize-none focus-visible:ring-0 p-0 placeholder:text-gray-400"
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
                  </div>

                  <div className="flex space-x-3">
                    <Button type="button" variant="ghost" onClick={() => router.back()} className="text-gray-600">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={!title.trim() || !content.trim() || !category || isSubmitting}
                      className="bg-black text-white hover:bg-gray-800 rounded-full px-6"
                    >
                      {isSubmitting ? "Publishing..." : "Publish"}
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
