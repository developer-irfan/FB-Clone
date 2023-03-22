import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type isNavbar = {
  navbar: boolean;
};

const SearchBarComp: React.FC<isNavbar> = (props: isNavbar) => {
  return (
    <div className={`md:block ${props.navbar ? "block" : "hidden"}`}>
      <FontAwesomeIcon
        icon={faSearch}
        className="text-gray-400 relative left-8 top-[1.4px] md:relative md:left-8 md:top-[1.5px] "
      />
      <input
        type="text"
        placeholder="Search Facebook"
        className="bg-gray-100 pl-10 pr-16 md:pl-10 md:pr-52 py-2 rounded-[30px] text-[15px] focus:border-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default SearchBarComp;
