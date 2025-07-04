"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-black">BossFi</span>
        </Link>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Chats, messages and more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-gray-50 border-gray-200 rounded-full h-10 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/create">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 h-10">New thread</Button>
          </Link>
          <Link href="/profile">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  )
}
