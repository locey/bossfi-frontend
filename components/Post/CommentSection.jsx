"use client";
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { Card } from "@/components/ui/card";

const initialComments = [
  {
    id: 1,
    author: "Commenter34",
    date: "2025年5月29日 13:05",
    content: "这是对帖子 post-1-0 的评论 0，内容是关于区块链招聘的讨论..."
  },
  {
    id: 2,
    author: "Commenter162",
    date: "2025年6月1日 12:34",
    content: "这是对帖子 post-1-0 的评论 1，内容是关于区块链招聘的讨论..."
  }
];

const CommentSection = () => {
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = (text) => {
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        author: "你",
        date: new Date().toLocaleString(),
        content: text
      }
    ]);
  };

  return (
    <Card className="w-full mx-auto p-6 mt-2">
      <h3 className="text-xl font-semibold mb-4">评论 ({comments.length})</h3>
      <CommentInput onAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </Card>
  );
};

export default CommentSection; 