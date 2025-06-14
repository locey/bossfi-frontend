"use client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CommentInput = ({ onAddComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddComment(text);
      setText("");
    }
  };

  return (
    <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
      <Textarea
        placeholder="写下你的评论..."
        value={text}
        onChange={e => setText(e.target.value)}
        className="resize-none min-h-[60px]"
      />
      <div className="flex justify-end">
        <Button type="submit" size="sm">发布评论</Button>
      </div>
    </form>
  );
};

export default CommentInput; 