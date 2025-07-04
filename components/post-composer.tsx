"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, Paperclip, Smile } from "lucide-react"
import { useState } from "react"

export default function PostComposer() {
  const [content, setContent] = useState("")

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
            onChange={(e) => setContent(e.target.value)}
            className="border-none resize-none text-base placeholder:text-gray-400 focus-visible:ring-0 p-0 min-h-[60px]"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
