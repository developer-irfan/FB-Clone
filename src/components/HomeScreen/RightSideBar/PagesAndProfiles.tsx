import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../../../assets/images/user.jpg";
import switchUserIcon from "../../../assets/images/switch-user-icon.avif";
import promotionIcon from "../../../assets/images/promotion-icon.avif";
import { Link } from "react-router-dom";

const PagesAndProfiles: React.FC = () => {
  return (
    <>
      <h2 className="text-[16px] text-center font-medium">
        Your pages and profiles
      </h2>
      <li className="rounded-sm flex items-center">
        <Link
          to="#"
          className="flex items-center px-2 pt-2 space-x-3 rounded-md "
        >
          <img
            src={userIcon}
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-black tracking-wider mt-1">Irfoo Writes</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center pt-1">
        <Link to="#" className="flex items-center p-2 space-x-3 rounded-md ">
          {/* <FontAwesomeIcon
            icon={faBell}
            className="text-[18px] text-[#056BE1]"
          /> */}
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/notification-bell-5109435-4261245.png?f=avif&w=256"
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-normal tracking-wider mt-1">
            6 notifications
          </span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center pt-1">
        <Link to="#" className="flex items-center p-2 space-x-3 rounded-md ">
          {/* <FontAwesomeIcon
            icon={faBell}
            className="text-[18px] text-[#056BE1]"
          /> */}
          <img
            src={switchUserIcon}
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-normal tracking-wider">Switch into page</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center pt-1">
        <Link to="#" className="flex items-center p-2 space-x-3 rounded-md ">
          {/* <FontAwesomeIcon
            icon={faBell}
            className="text-[18px] text-[#056BE1]"
          /> */}
          <img
            src={promotionIcon}
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-normal tracking-wider">Create Promotion</span>
        </Link>
      </li>
    </>
  );
};

export default PagesAndProfiles;
