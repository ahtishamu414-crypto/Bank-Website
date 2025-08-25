import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-6 bg-black px-8">
    
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[82px] h-[23px] object-contain"
        />
      </div>

      <ul className="text-white list-none justify-end flex-1 gap-8 hidden sm:flex">
        {navLinks.map((nav) => (
          <li key={nav.id} className="font-normal cursor-pointer text-[16px]">
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

     
      <div className="sm:hidden justify-end flex flex-1 items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle(!toggle)}
          className="w-[28px] h-[28px] cursor-pointer object-contain"
        />

      
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black absolute top-20 right-0 mx-4 my-3 min-w-[140px] rounded-2xl sidebar`}
        >
          <ul className="text-white list-none flex flex-col gap-8 flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-normal cursor-pointer text-[16px]"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
