import React, { useEffect, useRef, useState } from "react";
import menuList from "./NavbarData";
import logo from "./images/file.png";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const mobileRef = useRef();
  useEffect(() => {
    const outSideClicked = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileView(false);
      }
    };
    document.addEventListener("mousedown", outSideClicked);
    return () => {
      document.removeEventListener("mousedown", outSideClicked);
    };
  });
  return (
    <div
      ref={mobileRef}
      className="w-full h-16 px-5 bg-[#585b5f] sticky top-0 z-5 flex justify-between items-center font-serif border-b-[1px] border-gray-300"
    >
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="w-12 h-12 flex items-center rounded-full overflow-hidden border-[2px] border-gray-200">
          <img src={logo} alt="logo" className="object-cover" />
        </div>
        <h1 className="text-3xl font-bold hover:text-[#ff015f] duration-500">
          ASHIRAF
        </h1>
      </div>
      <ul className="hidden md:flex gap-12 pr-10">
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
      {/** mobile view ***/}
      <div
        className="md:hidden z-10"
        onClick={() => setMobileView(!mobileView)}
      >
        {mobileView ? (
          <AiOutlineClose size={20} className="z-10 text-black" />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <div
        className={
          mobileView
            ? "absolute right-0 top-0 w-[86%]  h-screen  bg-gray-700 px-4 py-2 flex flex-col transform transition-all duration-500 ease-in"
            : "absolute left-[-100%] transform transition-all duration-300  ease-out"
        }
      >
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-12 h-12 flex items-center rounded-full overflow-hidden border-[2px] border-gray-200">
            <img src={logo} alt="logo" className="object-cover" />
          </div>
          <h1 className="text-2xl font-bold hover:text-[#ff015f] duration-500">
            ASHIRAF
          </h1>
        </div>
        <ul className="md:hidden flex flex-col gap-2 pt-5 pl-6 text-xl">
          {menuList.map(({ id, name, link }) => {
            return (
              <li key={id} className="border-b py-2">
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onClick={() => setMobileView(false)}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
