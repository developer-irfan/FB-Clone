import React from "react";
import { Link } from "react-router-dom";
import irfanPAgeIcon from "../../../../assets/images/user.jpg";
import erthgrulPageIcon from "../../../../assets/images/erthugrul-page-icon.jpg";

const PagesComp: React.FC = () => {
  return (
    <>
      <li className="rounded-sm flex items-center">
        <Link to="#" className="flex items-center p-2 space-x-3 rounded-md ">
          <img
            src={irfanPAgeIcon}
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-black tracking-wider mt-1">M.Irfan Page</span>
        </Link>
      </li>
      <li className="rounded-sm flex items-center">
        <Link to="#" className="flex items-center p-2 space-x-3 rounded-md ">
          <img
            src={erthgrulPageIcon}
            alt=""
            className="w-[22px] h-[22px] rounded-[50px]"
          />
          <span className="font-black tracking-wider mt-1">
            Ghazi Erthugrul
          </span>
        </Link>
      </li>
    </>
  );
};

export default PagesComp;
