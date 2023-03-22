import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import user from "../../../assets/images/user.jpg";

type isNavbar = {
  navbar: boolean;
};

const NavItems: React.FC<isNavbar> = (props: isNavbar) => {
  return (
    <div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          props.navbar ? "block" : "hidden"
        }`}
      >
        <ul className="flex items-center justify-center space-y-8 md:flex md:space-x-2 md:space-y-0">
          <li className="bg-gray-200 h-[40px] mt-8 mr-2 md:mr-0 md:mt-0 flex items-center justify-center w-[40px] rounded-[50px] px-2 py-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3128/3128274.png"
              alt=""
            />
          </li>
          <li className="bg-gray-200 h-[40px] flex items-center justify-center w-[40px] rounded-[50px] px-2 py-2">
            <FontAwesomeIcon icon={faBell} />
          </li>
          <img
            src={user}
            alt=""
            className="w-[55px] h-[55px] rounded-[50px] px-2 py-2"
          />
        </ul>
      </div>
    </div>
  );
};

export default NavItems;
