import React from "react";
import GroupsComp from "./Groups/GroupsComp";
import PagesComp from "./Pages/PagesComp";
import HomeComp from "./Home/HomeComp";
import ActivityComp from "./ActivitySec/ActivityComp";

const LeftSideBar: React.FC = () => {
  return (
    <div className="flex bg-[#F0F2F5]">
      <div className="flex flex-col h-screen p-3 shadow w-60">
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
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3"></div>
      </div>
    </div>
  );
};

export default LeftSideBar;
