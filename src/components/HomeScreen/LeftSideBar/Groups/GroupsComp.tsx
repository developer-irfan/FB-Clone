import React from "react";
import { Link } from "react-router-dom";
import kustGroupIcon from "../../../../assets/images/kust-group-icon.jpg";
import pGroupIcon from "../../../../assets/images/poetry-group-icon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const GroupsComp: React.FC = () => {
  return (
    <>
      <li className="rounded-sm flex items-center">
        <Link to="#" className="flex items-center p-2 space-x-3 rounded-md ">
          <img
            src={kustGroupIcon}
            alt=""
            className="w-[24px] h-[24px] rounded-md"
          />
          <span className="font-black tracking-wider mt-1">Kust official</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center">
        <Link to="#" className="flex items-center p-2 space-x-3 rounded-md ">
          <img
            src={pGroupIcon}
            alt=""
            className="w-[24px] h-[24px] rounded-md"
          />
          <span className="font-black tracking-wider mt-1">Poetry Group</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center">
        <Link
          to="/main"
          className="flex items-center p-2 space-x-3 rounded-md "
        >
          <div className="bg-gray-300 rounded-[30px] px-[5px] py-[2px]">
            <FontAwesomeIcon icon={faUsers} className="text-[12px]" />
          </div>
          <span className="font-black tracking-wider mt-1">See all groups</span>
        </Link>
      </li>
      <hr className="border-gray-300" />
    </>
  );
};

export default GroupsComp;
