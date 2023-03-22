import React from "react";
import NavbarComp from "./Navbar/NavbarComp";
import LeftSideBar from "./LeftSideBar/LeftSideBarComp";

const Main: React.FC = () => {
  return (
    <div>
      <NavbarComp />
      <LeftSideBar />
    </div>
  );
};

export default Main;
