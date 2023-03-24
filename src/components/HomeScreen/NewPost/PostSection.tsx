import React from "react";
import NewPostComp from "./NewPostComp";
import AllPosts from "../All Posts/AllPosts";

const PostSection: React.FC = () => {
  return (
    <div className="container  flex justify-center mt-12">
      <div className="grid grid-cols-1 mb-64">
        <NewPostComp />
        <AllPosts />
      </div>
    </div>
  );
};

export default PostSection;
