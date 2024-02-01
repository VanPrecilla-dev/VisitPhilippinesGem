"use client";
import { NAV_LINKS } from "@/Constant/indexFile";
import React, { useState } from "react";

import { Link } from "react-scroll";

import { RxDropdownMenu } from "react-icons/rx";

interface TypeState {
  openMenu?: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  clickDropDown?: () => void;
}

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const clickDropDown = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="bg-[#4A756E]">
        <nav
          className="relative  flexBetween max-container padding-container z-30 py5 h-20 "
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="regular-24 flexCenter cursor-pointer pb-1.5 tracking-widest transition-all hover:font-bold  text-white"
          >
            VisitPhilippinesGem
          </Link>

          <ul className="hidden h-full gap-12 lg:flex  ">
            {NAV_LINKS.map((link) => (
              <Link
                activeClass="active"
                key={link.key}
                to={link.to}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="regular-24 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold text-white hover:bg-[#9CA48E]"
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <button
            className="inline-block cursor-pointer  rounded z-10 focus:outline-none hover:bg-[#9CA48E] lg:hidden "
            onClick={() => clickDropDown()}
          >
            <RxDropdownMenu
              style={{ width: "30px", height: "30px", color: "white" }}
            />
          </button>
        </nav>
      </header>

      {openMenu ? (
        <ul className=" lg:hidden absolute flex flex-col py-3 px-4 mx-3 right-1 bg-[#4A756E] rounded z-10 focus:outline-none hover:bg-[#9CA48E] ">
          {NAV_LINKS.map((link) => (
            <Link
              activeClass="active"
              key={link.key}
              to={link.to}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="regular-16  text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold  hover:text-[#153F58]"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default NavBar;
