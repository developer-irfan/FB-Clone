import React from "react";
import RightSideBar from "../RightSideBar/RightSideBar";
import PostSection from "../NewPost/PostSection";
import LeftSideBar from "./LeftSideBar";

const LeftSideBarComp: React.FC = () => {
  return (
    <div className="flex bg-[#F0F2F5]">
      {/* Left Side Bar */}
      <LeftSideBar />
      {/* Middle section */}
      <PostSection />
      {/* Right Side Bar */}
      <RightSideBar />
    </div>
  );
};

export default LeftSideBarComp;
