import React from "react";
import HomeComp from "../LeftSideBar/Home/HomeComp";
import ActivityComp from "../LeftSideBar/ActivitySec/ActivityComp";
import GroupsComp from "../LeftSideBar/Groups/GroupsComp";
import PagesComp from "../LeftSideBar/Pages/PagesComp";

const RightSideBar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col h-screen p-3 shadow w-[300px]">
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <HomeComp />
            <hr className="border-gray-300" />
            <ActivityComp />
            <hr className="border-gray-300" />
            <GroupsComp />
            <PagesComp />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
