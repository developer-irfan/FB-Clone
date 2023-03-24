import React from "react";
import postVideoOrPhotIcon from "../../../../assets/images/select-photo-icon.png";

const PostVideoPhotoComp: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={postVideoOrPhotIcon} alt="" className="w-[25px]" />
      <p className="text-[14px] font-medium">Photo/video</p>
    </div>
  );
};

export default PostVideoPhotoComp;
