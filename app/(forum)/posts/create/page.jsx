"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CommentItem from "@/components/Post/CommentItem";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const mockComments = [
  { author: "Alice", date: "2024-07-02", content: "很棒的帖子！" },
  { author: "Bob", date: "2024-07-03", content: "学习了！" },
];

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState(mockComments);
  const [category, setCategory] = useState("讨论");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加实际的发布逻辑
    alert("发布成功！");
    setTitle("");
    setContent("");
    setCategory("讨论");
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setCategory("讨论");
  };

  return (
    <div className="mx-auto p-6 ">
      <h1 className="text-2xl font-bold mb-4">发布新帖子</h1>
      <Card className="mb-8 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              标题 <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="请输入标题"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              内容 <span className="text-red-500">*</span>
            </label>
            <Textarea
              placeholder="请输入内容，支持Markdown格式"
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              className="h-[700px]"
            />
            <div className="text-xs text-gray-500 mt-1">
              支持Markdown格式，可以使用 # 标题、**加粗**、*斜体* 等语法
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">分类</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="请选择分类" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="讨论">讨论</SelectItem>
                <SelectItem value="分享">分享</SelectItem>
                <SelectItem value="提问">提问</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              取消
            </Button>
            <Button type="submit">发布</Button>
          </div>
        </form>
      </Card>
 
    </div>
  );
} 