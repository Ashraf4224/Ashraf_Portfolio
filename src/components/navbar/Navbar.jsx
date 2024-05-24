import React from "react";
import menuList from "./NavbarData";
import logo from "./images/file.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full h-16 sticky top-0 z-5 flex justify-between items-center font-serif border-b-[1px] border-gray-300">
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="w-12 h-12 flex items-center rounded-full overflow-hidden border-[2px] border-gray-200">
          <img src={logo} alt="logo" className="object-cover" />
        </div>
        <h1 className="text-3xl font-bold hover:text-[#ff015f] duration-500">
          ASHIRAF
        </h1>
      </div>
      <ul className="flex gap-12 pr-10">
        {menuList.map(({ id, name, link }) => {
          return (
            <li key={id} className="hover:text-[#ff015f] duration-300">
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
