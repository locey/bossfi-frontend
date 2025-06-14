'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import CommentItem from '@/components/Post/CommentItem'
import PostCard from '@/components/Post/PostCard'

const mockUser = {
  name: 'Userofil',
  desc: '区块链技术爱好者，Web3开发者',
  avatar: '',
  joinDate: '2024年7月2日',
  postCount: 4,
  commentCount: 48,
  joinTime: '2024年7月2日',
}

const mockPosts = [
  {
    id: 0,
    title: '用户 ofil 的帖子 0',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年4月15日',
    tag: '招聘',
    likes: 26,
    comments: 6,
  },
  {
    id: 1,
    title: '用户 ofil 的帖子 1',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年6月2日',
    tag: '讨论',
    likes: 45,
    comments: 0,
  },
  {
    id: 2,
    title: '用户 ofil 的帖子 2',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年3月19日',
    tag: '招聘',
    likes: 2,
    comments: 8,
  },
  {
    id: 3,
    title: '用户 ofil 的帖子 3',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年5月31日',
    tag: '讨论',
    likes: 43,
    comments: 5,
  },
  {
    id: 4,
    title: '用户 ofil 的帖子 4',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年5月10日',
    tag: '招聘',
    likes: 26,
    comments: 2,
  },
]

const mockComments = [
  {
    id: 1,
    author: 'ofil',
    date: '2025年6月2日',
    content: '这是我在某个帖子下的评论内容...',
  },
  {
    id: 2,
    author: 'ofil',
    date: '2025年5月10日',
    content: '另一个参与讨论的评论...',
  },
]

export default function Mine() {
  const [tab, setTab] = useState('posts')

  return (
    <div className="mx-auto p-6">
      {/* 用户信息卡片 */}
      <Card className="mb-6 p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src={mockUser.avatar} alt="avatar" />
          <AvatarFallback>{mockUser.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <div className="text-2xl font-bold">{mockUser.name}</div>
              <div className="text-muted-foreground text-sm mt-1">{mockUser.desc}</div>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button variant="outline">关注</Button>
              <Button>私信</Button>
            </div>
          </div>
          <div className="flex gap-6 mt-4 text-sm text-muted-foreground">
            <div>
              <span className="font-bold text-lg text-black">{mockUser.postCount}</span> 帖子
            </div>
            <div>
              <span className="font-bold text-lg text-black">{mockUser.commentCount}</span> 评论
            </div>
            <div>加入时间：{mockUser.joinTime}</div>
          </div>
        </div>
      </Card>

      {/* tab切换 */}
      <div className="flex gap-8 border-b mb-4">
        <button
          className={`py-2 px-1 border-b-2 text-lg font-medium transition-colors ${
            tab === 'posts' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-primary'
          }`}
          onClick={() => setTab('posts')}
        >
          发布的帖子
        </button>
        <button
          className={`py-2 px-1 border-b-2 text-lg font-medium transition-colors ${
            tab === 'comments' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-primary'
          }`}
          onClick={() => setTab('comments')}
        >
          参与的讨论
        </button>
      </div>

      {/* tab内容 */}
      {tab === 'posts' ? (
        <div className="flex flex-col gap-4">
          {mockPosts.map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              desc={post.content}
              tag={post.tag}
              date={post.date}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {mockComments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  )
}
