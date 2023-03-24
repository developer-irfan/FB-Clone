import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../../../assets/images/user.jpg";
import LiveComp from "./LiveSection/LiveComp";

const NewPostComp: React.FC = () => {
  return (
    <div className="px-2 py-2">
      <div className="bg-white rounded-lg md:w-[500px] px-2 py-4 drop-shadow-md">
        <div className="content flex items-center justify-center">
          <img
            src={userIcon}
            alt=""
            className="w-[55px] h-[55px] rounded-[50px] px-2 py-2"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="bg-gray-100 pl-6 h-[40px] pr-16 md:pl-6 md:pr-44 py-1 md:py-2 rounded-[30px] text-[15px] focus:border-gray-400 focus:outline-none"
          />
        </div>
        <hr className="border-gray-300 mt-4" />
        <div>
          <LiveComp />
        </div>
      </div>
    </div>
  );
};

export default NewPostComp;
