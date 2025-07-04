"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, Paperclip, Smile } from "lucide-react"

interface ReplyFormProps {
  threadId: string
  parentId?: string
  onSubmit: () => void
  onCancel?: () => void
  placeholder?: string
}

export default function ReplyForm({
  threadId,
  parentId,
  onSubmit,
  onCancel,
  placeholder = "Write a reply...",
}: ReplyFormProps) {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would make the actual API call to submit the reply
    console.log({
      threadId,
      parentId,
      content: content.trim(),
    })

    setContent("")
    setIsSubmitting(false)
    onSubmit()
  }

  const handleCancel = () => {
    setContent("")
    if (onCancel) {
      onCancel()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <Textarea
            placeholder={placeholder}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[80px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            disabled={isSubmitting}
          />

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-gray-600 p-2"
                disabled={isSubmitting}
              >
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-gray-600 p-2"
                disabled={isSubmitting}
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-gray-600 p-2"
                disabled={isSubmitting}
              >
                <Smile className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              {onCancel && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                  className="text-gray-600"
                >
                  Cancel
                </Button>
              )}
              <Button
                type="submit"
                size="sm"
                disabled={!content.trim() || isSubmitting}
                className="bg-black text-white hover:bg-gray-800 rounded-full px-4"
              >
                {isSubmitting ? "Posting..." : "Reply"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
