import React from "react";
import NewPostComp from "./NewPostComp";

const PostSection: React.FC = () => {
  return (
    <div className="container  flex justify-center mt-12">
      <div className="grid grid-cols-1 mb-6">
        <NewPostComp />
      </div>
    </div>
  );
};

export default PostSection;
