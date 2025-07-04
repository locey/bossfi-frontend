"use client"

import { useState } from "react"
import { Heart, MessageCircle, Eye, Clock, Share2, Bookmark } from "lucide-react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

const mockPost = {
  id: "1",
  title: "DeFi 协议安全性分析：如何避免常见的智能合约漏洞",
  content: `随着 DeFi 生态系统的快速发展，智能合约安全性变得越来越重要。本文将深入分析常见的安全漏洞类型，并提供相应的防护措施。

## 常见的智能合约漏洞

### 1. 重入攻击（Reentrancy Attack）
重入攻击是最常见的智能合约漏洞之一。攻击者利用合约在状态更新前调用外部合约的特性，重复调用同一个函数来提取资金。

**防护措施：**
- 使用 Checks-Effects-Interactions 模式
- 实现重入锁（Reentrancy Guard）
- 在状态更新后再进行外部调用

### 2. 整数溢出/下溢
在 Solidity 0.8.0 之前的版本中，整数运算可能发生溢出或下溢，导致意外的结果。

**防护措施：**
- 使用 SafeMath 库
- 升级到 Solidity 0.8.0+ 版本
- 进行充分的边界检查

### 3. 权限管理问题
不当的权限设置可能导致未授权的用户执行敏感操作。

**防护措施：**
- 实现基于角色的访问控制
- 使用多重签名钱包
- 定期审查权限设置

## 最佳实践

1. **代码审计**：在部署前进行专业的安全审计
2. **测试覆盖**：确保测试覆盖率达到 100%
3. **渐进式部署**：先在测试网部署，再逐步迁移到主网
4. **监控系统**：建立实时监控和告警系统

通过遵循这些安全实践，可以大大降低智能合约的安全风险。`,
  author: {
    name: "区块链安全专家",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  category: "技术讨论",
  likes: 156,
  comments: 23,
  views: 1240,
  createdAt: "2小时前",
  isLiked: false,
}

const mockComments = [
  {
    id: "1",
    author: {
      name: "智能合约开发者",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content:
      "非常详细的分析！重入攻击确实是需要特别注意的问题。我在开发中也遇到过类似的情况，使用 OpenZeppelin 的 ReentrancyGuard 是个不错的选择。",
    createdAt: "1小时前",
    likes: 12,
  },
  {
    id: "2",
    author: {
      name: "DeFi研究员",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: "补充一点，除了技术层面的防护，经济模型的设计也很重要。合理的激励机制可以减少恶意攻击的动机。",
    createdAt: "45分钟前",
    likes: 8,
  },
]

export default function PostDetailPage() {
  const [isLiked, setIsLiked] = useState(mockPost.isLiked)
  const [likesCount, setLikesCount] = useState(mockPost.likes)
  const [comment, setComment] = useState("")

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
  }

  const handleSubmitComment = () => {
    if (comment.trim()) {
      // 这里处理评论提交逻辑
      setComment("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={mockPost.author.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{mockPost.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{mockPost.author.name}</p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{mockPost.createdAt}</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-800">{mockPost.category}</Badge>
            </div>

            <h1 className="text-2xl font-bold mb-4">{mockPost.title}</h1>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{mockPost.views} 浏览</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{mockPost.comments} 评论</span>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="prose prose-gray max-w-none mb-6">
              <div className="whitespace-pre-wrap">{mockPost.content}</div>
            </div>

            <Separator className="my-6" />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  onClick={handleLike}
                  className={`flex items-center space-x-2 ${isLiked ? "text-red-500 hover:text-red-600" : ""}`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                  <span>{likesCount}</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Bookmark className="h-5 w-5" />
                  <span>收藏</span>
                </Button>
              </div>

              <Button variant="ghost" className="flex items-center space-x-2">
                <Share2 className="h-5 w-5" />
                <span>分享</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 评论区 */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">评论 ({mockComments.length})</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <Textarea
                placeholder="写下你的评论..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex justify-end">
                <Button onClick={handleSubmitComment} disabled={!comment.trim()}>
                  发表评论
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-6">
              {mockComments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.author.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-sm">{comment.author.name}</span>
                      <span className="text-xs text-muted-foreground">{comment.createdAt}</span>
                    </div>
                    <p className="text-sm mb-2">{comment.content}</p>
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Heart className="h-3 w-3 mr-1" />
                      {comment.likes}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
