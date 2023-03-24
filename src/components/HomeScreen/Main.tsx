import React from "react";
import NavbarComp from "./Navbar/NavbarComp";
import LeftSideBarComp from "./LeftSideBar/LeftSideBarComp";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../redux/types";

const Main: React.FC = () => {
  const hasSplashScreen = useSelector(
    (state: RootState) => state.splashScreenReducer
  );

  return (
    <>
      {!hasSplashScreen && (
        <div>
          <NavbarComp />
          <LeftSideBarComp />
        </div>
      )}
    </>
  );
};

export default Main;
