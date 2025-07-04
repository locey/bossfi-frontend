"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import ThreadCard from "@/components/thread-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Calendar, MapPin } from "lucide-react"

const userProfile = {
  name: "John Doe",
  username: "@johndoe",
  avatar: "/placeholder.svg?height=80&width=80",
  bio: "Crypto enthusiast and DeFi researcher. Love sharing insights about blockchain technology.",
  location: "San Francisco, CA",
  joinDate: "Joined March 2023",
  stats: {
    threads: 42,
    replies: 156,
    likes: 1240,
    followers: 89,
  },
}

const myThreads = [
  {
    id: "1",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Just discovered this amazing DeFi protocol that's revolutionizing yield farming. The APY is incredible and the security audit looks solid. What do you all think?",
    timestamp: "2 hours ago",
    likes: 156,
    replies: 23,
    isLiked: false,
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Layer 2 solutions are finally gaining traction. Arbitrum and Optimism are leading the way, but I'm excited to see what other innovations come next.",
    timestamp: "1 day ago",
    likes: 89,
    replies: 15,
    isLiked: true,
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("threads")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <div className="flex items-start space-x-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={userProfile.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-2xl">{userProfile.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-black">{userProfile.name}</h1>
                  <p className="text-gray-500">{userProfile.username}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-gray-800 mb-4">{userProfile.bio}</p>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{userProfile.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{userProfile.joinDate}</span>
                </div>
              </div>

              <div className="flex space-x-8 text-sm">
                <div>
                  <span className="font-semibold text-black">{userProfile.stats.threads}</span>
                  <span className="text-gray-500 ml-1">Threads</span>
                </div>
                <div>
                  <span className="font-semibold text-black">{userProfile.stats.replies}</span>
                  <span className="text-gray-500 ml-1">Replies</span>
                </div>
                <div>
                  <span className="font-semibold text-black">{userProfile.stats.likes}</span>
                  <span className="text-gray-500 ml-1">Likes</span>
                </div>
                <div>
                  <span className="font-semibold text-black">{userProfile.stats.followers}</span>
                  <span className="text-gray-500 ml-1">Followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-white border border-gray-200 rounded-full p-1 mb-6">
            <TabsTrigger value="threads" className="rounded-full px-6">
              My Threads ({myThreads.length})
            </TabsTrigger>
            <TabsTrigger value="replies" className="rounded-full px-6">
              Replies (12)
            </TabsTrigger>
            <TabsTrigger value="likes" className="rounded-full px-6">
              Likes (45)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="threads" className="space-y-4">
            {myThreads.map((thread) => (
              <ThreadCard key={thread.id} thread={thread} />
            ))}
          </TabsContent>

          <TabsContent value="replies" className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <p className="text-gray-500">No replies yet</p>
            </div>
          </TabsContent>

          <TabsContent value="likes" className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <p className="text-gray-500">No liked threads yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
