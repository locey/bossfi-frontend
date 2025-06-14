"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CategoryTabs from "../components/CategoryTabs";
import { Heart, MessageCircle } from "lucide-react";

const posts = [
  {
    title: "BossFi招聘信息 1-0",
    desc: "这是一个区块链领域的招聘信息，我们正在寻找优秀的前端开发工程师...",
    tag: "招聘",
    date: "5月16日",
    likes: 88,
    comments: 16,
  },
  {
    title: "BossFi招聘信息 1-1",
    desc: "这是一个区块链领域的招聘信息，我们正在寻找优秀的后端开发工程师...",
    tag: "讨论",
    date: "3月28日",
    likes: 63,
    comments: 13,
  },
  {
    title: "BossFi招聘信息 1-2",
    desc: "这是一个区块链领域的招聘信息，我们正在寻找优秀的前端开发工程师...",
    tag: "Web3",
    date: "3月1日",
    likes: 81,
    comments: 17,
  },
  {
    title: "BossFi招聘信息 1-3",
    desc: "这是一个区块链领域的招聘信息，我们正在寻找优秀的后端开发工程师...",
    tag: "招聘",
    date: "2月24日",
    likes: 39,
    comments: 19,
  },
  {
    title: "BossFi招聘信息 1-4",
    desc: "这是一个区块链领域的招聘信息，我们正在寻找优秀的前端开发工程师...",
    tag: "讨论",
    date: "5月5日",
    likes: 16,
    comments: 2,
  },
  {
    title: "BossFi招聘信息 1-5",
    desc: "这是一个区块链领域的招聘信息，我们正在寻找优秀的后端开发工程师...",
    tag: "Web3",
    date: "3月1日",
    likes: 12,
    comments: 1,
  },
];

export default function Main() {
  return (
    <div className="max-w-7xl mx-auto flex gap-8 mt-8">
      {/* 左侧：帖子列表 */}
      <div className="flex-1">
        <CategoryTabs />
        <div className="flex flex-col gap-4">
          {posts.map((post, idx) => (
            <Card key={idx} className="p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">{post.title}</span>
                <Badge variant="outline">{post.tag}</Badge>
              </div>
              <div className="text-muted-foreground text-sm">{post.desc}</div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                <span>{post.date}</span>
                <span className="flex items-center gap-1"><Heart size={14} className="text-red-500" />{post.likes}</span>
                <span className="flex items-center gap-1"><MessageCircle size={14} />{post.comments}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* 右侧：分类和简介 */}
      <div className="w-72 flex flex-col gap-4">
        <Card className="p-4">
          <div className="font-semibold mb-2">分类</div>
          <div className="flex flex-col gap-2">
            <span className="cursor-pointer hover:text-blue-600">全部</span>
            <span className="cursor-pointer hover:text-blue-600">招聘</span>
            <span className="cursor-pointer hover:text-blue-600">讨论</span>
            <span className="cursor-pointer hover:text-blue-600">Web3</span>
            <span className="cursor-pointer hover:text-blue-600">区块链</span>
            <span className="cursor-pointer hover:text-blue-600">DeFi</span>
            <span className="cursor-pointer hover:text-blue-600">NFT</span>
          </div>
        </Card>
        <Card className="p-4">
          <div className="font-semibold mb-2">关于 BossFi</div>
          <div className="text-sm text-muted-foreground">
            BossFi 是区块链领域的求职/招聘平台，连接人才与机会，促进行业发展。
          </div>
          <div className="text-xs text-gray-400 mt-2">© 2025 BossFi</div>
        </Card>
      </div>
    </div>
  );
} 