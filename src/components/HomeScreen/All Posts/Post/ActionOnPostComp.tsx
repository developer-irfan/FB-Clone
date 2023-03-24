import React from "react";
import liveIcon from "../../../../assets/images/live-icon.png";
import likeIcon from "../../../../assets/images/like-icon.avif";
import comentIcon from "../../../../assets/images/comment-icon.avif";
import shareIcon from "../../../../assets/images/share-icon.avif";

const ActionOnPostComp: React.FC = () => {
  return (
    <div>
      <div>
        <div className="flex space-x-14 justify-center pt-4">
          <div className="flex items-center space-x-2">
            <img src={likeIcon} alt="" className="w-[25px]" />
            <p className="text-[14px] font-medium">Like</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={comentIcon} alt="" className="w-[25px]" />
            <p className="text-[14px] font-medium">Comment</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={shareIcon} alt="" className="w-[25px]" />
            <p className="text-[14px] font-medium">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionOnPostComp;
