import React from "react";
import PagesAndProfiles from "./PagesAndProfiles";
import ContactsComp from "./ContactsComp";

const RightSideBar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col h-screen p-3 w-[300px]">
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <PagesAndProfiles />
            <hr className="border-gray-300" />
            <ContactsComp />
            <hr className="border-gray-300" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
