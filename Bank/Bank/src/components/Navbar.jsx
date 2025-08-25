import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-6 bg-black px-8">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[82px] h-[23px] object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="text-white list-none justify-end flex-1 gap-8 hidden sm:flex">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-normal cursor-pointer text-[16px]"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden justify-end flex flex-1 items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle(!toggle)}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
        />
      </div>

      {/* Mobile Dropdown */}
      {toggle && (
        <div className="sm:hidden absolute top-20 right-0 bg-black p-6 rounded-md shadow-lg">
          <ul className="text-white flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-normal cursor-pointer text-[16px]"
              >
                <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
