import React from "react";
import feelingIcon from "../../../../assets/images/feeling-icon.png";

const FeelingsActivity: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={feelingIcon} alt="" className="w-[25px]" />
      <p className="text-[14px] font-medium">Live video</p>
    </div>
  );
};

export default FeelingsActivity;
