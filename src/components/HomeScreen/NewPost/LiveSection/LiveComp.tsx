import React from "react";
import liveIcon from "../../../../assets/images/live-icon.png";
import PostVideoPhotoComp from "../PostVideoPhoto/PostVideoPhotoComp";
import FeelingsActivity from "../FeelingOrActivity/FeelingsActivity";

const LiveComp: React.FC = () => {
  return (
    <div className="flex space-x-14 justify-center pt-4">
      <div className="flex items-center space-x-2">
        <img src={liveIcon} alt="" className="w-[25px]" />
        <p className="text-[14px] font-medium">Live video</p>
      </div>
      <PostVideoPhotoComp />
      <FeelingsActivity />
    </div>
  );
};

export default LiveComp;
