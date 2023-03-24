import React from "react";
import PostComp from "../Post/PostComp";

const Posts: React.FC = () => {
  return (
    <div className="space-y-3">
      <PostComp />
      <PostComp />
    </div>
  );
};

export default Posts;
