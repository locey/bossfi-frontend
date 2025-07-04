"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import ThreadCard from "@/components/thread-card"
import CommentSection from "@/components/comment-section"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share, Bookmark, MoreHorizontal } from "lucide-react"
import Link from "next/link"

// Mock data for the thread
const mockThread = {
  id: "1",
  author: {
    name: "Morpheus",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  content: `Can someone explain to me what crypto and NFTs are? I've spent so much time looking for it, and can't find a right answer. If some man can tell me that in 4 simple words, that would be really appreciated!

I've been researching for weeks now, reading articles, watching videos, but everything seems so complicated. I'm looking for a simple, straightforward explanation that doesn't require a PhD in computer science.

What I understand so far:
- Crypto = digital money?
- NFTs = digital art ownership?

But I feel like I'm missing something fundamental. Can anyone help clarify this for a complete beginner?`,
  timestamp: "Yesterday, 1:13 PM",
  likes: 954,
  replies: 115,
  views: 2340,
  category: "Question",
  isLiked: false,
}

const mockComments = [
  {
    id: "c1",
    author: {
      name: "Satoshi Nakamoto",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Crypto: Digital money without banks. NFTs: Unique digital certificates proving ownership.",
    timestamp: "Yesterday, 2:15 PM",
    likes: 234,
    replies: 12,
    isLiked: true,
    children: [
      {
        id: "c1-1",
        author: {
          name: "Vitalik Buterin",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "Perfect explanation! I'd add that smart contracts enable programmable money and automated agreements.",
        timestamp: "Yesterday, 2:30 PM",
        likes: 89,
        replies: 3,
        isLiked: false,
        children: [
          {
            id: "c1-1-1",
            author: {
              name: "CryptoNewbie",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "Thanks! This is exactly what I was looking for. Simple and clear!",
            timestamp: "Yesterday, 3:00 PM",
            likes: 15,
            replies: 0,
            isLiked: false,
          },
        ],
      },
      {
        id: "c1-2",
        author: {
          name: "BlockchainExpert",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content: "Great summary! The key is decentralization - no single authority controls the network.",
        timestamp: "Yesterday, 2:45 PM",
        likes: 67,
        replies: 5,
        isLiked: false,
      },
    ],
  },
  {
    id: "c2",
    author: {
      name: "DeFi Degen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Think of crypto as internet money that works globally without needing permission from banks. NFTs are like digital certificates that prove you own something unique online - could be art, music, or even tweets!",
    timestamp: "Yesterday, 3:20 PM",
    likes: 156,
    replies: 8,
    isLiked: false,
    children: [
      {
        id: "c2-1",
        author: {
          name: "ArtCollector",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "The NFT explanation is spot on. It's not about owning the image itself, but owning the certificate that says it's yours.",
        timestamp: "Yesterday, 4:00 PM",
        likes: 43,
        replies: 2,
        isLiked: true,
      },
    ],
  },
  {
    id: "c3",
    author: {
      name: "TradingPro",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Here's my 4-word explanation: 'Decentralized digital value exchange' 😄 But seriously, crypto eliminates middlemen in financial transactions.",
    timestamp: "Today, 9:15 AM",
    likes: 78,
    replies: 4,
    isLiked: false,
  },
]

export default function ThreadDetailPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800 p-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to threads
            </Button>
          </Link>
        </div>

        {/* Main thread */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <ThreadCard thread={mockThread} showReplyButton={false} />

          {/* Thread actions */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{mockThread.views} views</span>
              <span>•</span>
              <span>{mockThread.category}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`${isBookmarked ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-600">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-600">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Comments section */}
        <CommentSection comments={mockComments} threadId={mockThread.id} />
      </div>
    </div>
  )
}
