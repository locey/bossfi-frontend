'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import CommentItem from '@/components/Post/CommentItem'
import PostCard from '@/components/Post/PostCard'

export default function Mine({ user, posts, comments }: { user: any; posts: any; comments: any }) {
  const [tab, setTab] = useState('posts')

  return (
    <div className="mx-auto p-6">
      {/* 用户信息卡片 */}
      <Card className="mb-6 p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src={user.avatar} alt="avatar" />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <div className="text-2xl font-bold">{user.name}</div>
              <div className="text-muted-foreground text-sm mt-1">{user.desc}</div>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button variant="outline">关注</Button>
              <Button>私信</Button>
            </div>
          </div>
          <div className="flex gap-6 mt-4 text-sm text-muted-foreground">
            <div>
              <span className="font-bold text-lg text-black">{user.postCount}</span> 帖子
            </div>
            <div>
              <span className="font-bold text-lg text-black">{user.commentCount}</span> 评论
            </div>
            <div>加入时间：{user.joinTime}</div>
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
          {posts.map(post => (
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
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  )
}
