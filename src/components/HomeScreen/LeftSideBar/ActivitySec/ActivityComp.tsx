import React from "react";
import { Link } from "react-router-dom";
import usersIcon from "../../../../assets/images/users-icon.png";
import mostRecentIcon from "../../../../assets/images/most-recent-icon.png";
import memoriesIcon from "../../../../assets/images/memories-icon.png";

const ActivityComp: React.FC = () => {
  return (
    <>
      <li className="rounded-sm flex items-center">
        <Link
          to="/main"
          className="flex items-center p-2 space-x-3 rounded-md "
        >
          <img
            src={usersIcon}
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-black tracking-wider mt-1">Friends</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center">
        <Link
          to="/main"
          className="flex items-center p-2 space-x-3 rounded-md "
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/facebook-watch-6823211-5582795.png?f=avif&w=256"
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-black tracking-wider mt-1">Watch</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center">
        <Link
          to="/main"
          className="flex items-center p-2 space-x-3 rounded-md "
        >
          <img
            src={mostRecentIcon}
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-black tracking-wider mt-1">Most Recents</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center">
        <Link
          to="/main"
          className="flex items-center p-2 space-x-3 rounded-md "
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/marketplace-6823265-5582647.png?f=avif&w=256"
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-black tracking-wider mt-1">Marketplace</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center">
        <Link
          to="/main"
          className="flex items-center p-2 space-x-3 rounded-md "
        >
          <img
            src={memoriesIcon}
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-black tracking-wider mt-1">Memories</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center">
        <Link
          to="/main"
          className="flex items-center p-2 space-x-3 rounded-md "
        >
          <div className="bg-gray-300 rounded-[30px] px-1 py-1">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/menu-3031982-2526509.png?f=avif&w=256"
              alt=""
              className="w-[15px] h-[15px] "
            />
          </div>
          <span className="font-black tracking-wider mt-1">See All</span>
        </Link>
      </li>
    </>
  );
};

export default ActivityComp;
