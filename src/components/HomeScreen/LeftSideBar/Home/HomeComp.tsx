import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import usericon from "../../../../assets/images/user.jpg";

const HomeComp: React.FC = () => {
  return (
    <>
      <li className="rounded-sm flex items-center">
        <Link to="#" className="flex items-center p-2 space-x-3 rounded-md ">
          <FontAwesomeIcon
            icon={faHome}
            className="text-[18px] text-[#056BE1]"
          />
          <span className="font-black tracking-wider mt-1">Home</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center">
        <Link to="#" className="flex items-center p-2 space-x-3 rounded-md ">
          <img
            src={usericon}
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-black tracking-wider mt-1">M.Irfan</span>
        </Link>
      </li>
    </>
  );
};

export default HomeComp;
