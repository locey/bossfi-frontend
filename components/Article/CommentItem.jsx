import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const CommentItem = ({ comment }) => (
  <Card className="mb-3 p-3">
    <div className="flex items-start gap-3">
      <Avatar className="w-7 h-7 mt-1">
        <AvatarFallback>{comment.author[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">{comment.author}</span>
          <span className="text-xs text-muted-foreground">{comment.date}</span>
        </div>
        <div className="mt-1 text-base text-gray-800">{comment.content}</div>
      </div>
    </div>
  </Card>
);

export default CommentItem; 