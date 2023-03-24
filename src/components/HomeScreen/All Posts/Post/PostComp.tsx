import React from "react";
import userIcon from "../../../../assets/images/user.jpg";
import { Link } from "react-router-dom";
import ActionOnPostComp from "./ActionOnPostComp";

const PostComp: React.FC = () => {
  return (
    <div className="px-2 py-0">
      <div className="bg-white rounded-lg md:w-[500px] px-2 py-4 drop-shadow-md">
        <div className="content flex justify-start items-center">
          <img
            src={userIcon}
            alt=""
            className="w-[55px] h-[55px] rounded-[50px] px-2 py-2"
          />
          <div>
            <Link to="#">
              <h3>Irfan Khan</h3>
            </Link>
            <p className="text-[12px]">12m .</p>
          </div>
        </div>
        <div>
          <img src={userIcon} alt="" />
        </div>
        <hr className="border-gray-300 mt-4" />
        <ActionOnPostComp />
      </div>
    </div>
  );
};

export default PostComp;
