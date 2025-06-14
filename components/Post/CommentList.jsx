import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => (
  <div className="flex flex-col gap-2 mt-2">
    {comments.map(comment => (
      <CommentItem key={comment.id} comment={comment} />
    ))}
  </div>
);

export default CommentList; 