import { useState } from "react";
import fbLogo from "../../../assets/images/fbLogo.svg";
import SearchBarComp from "./SearchBarComp";
import NavItems from "./NavItems";
import MenuIconComp from "./MenuIconComp";
import { Link } from "react-router-dom";

const NavbarComp: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className=" bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-0 md:block">
            <Link to="/main">
              <img src={fbLogo} alt="" className="h-[55px]" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                <MenuIconComp navbar={navbar} />
              </button>
            </div>
          </div>
        </div>
        <SearchBarComp navbar={navbar} />
        <NavItems navbar={navbar} />
      </div>
    </nav>
  );
};

export default NavbarComp;
