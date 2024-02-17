import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center px-6 max-w-[1200px] mx-auto py-4 fixed top-0 right-0 left-0 z-[999] backdrop-blur-[3px]">
      <div>
        <a className="text-xl md:text-2xl font-bold italic" href="/">
          Dwi<span className="text-[#A96A68]">Angga</span>
        </a>
      </div>

      <ul className="hidden items-center gap-2 md:flex">
        <li>
          <a
            className="block hover:translate-y-[-4px] ease-in-out duration-[0.7s] py-2 px-3 rounded-md hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="block hover:translate-y-[-4px] ease-in-out duration-[0.7s] py-2 px-3 rounded-md hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="block hover:translate-y-[-4px] ease-in-out duration-[0.7s] py-2 px-3 rounded-md hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
            href="#project"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="block hover:translate-y-[-4px] ease-in-out duration-[0.7s] py-2 px-3 rounded-md hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
            href="#hobby"
          >
            Hobby
          </a>
        </li>
        <li>
          <a
            className="block hover:translate-y-[-4px] ease-in-out duration-[0.7s] py-2 px-3 rounded-md hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>

      <ul className="hidden md:flex items-center gap-2">
        <li>
          <a
            className=" bg-white block py-2 px-2 border border-[rgbs(0,0,0,0.1)] rounded-md  hover:bg-slate-100"
            href="https://instagram.com/angga_dwinnd"
            target="blank"
          >
            <FaInstagram size={20} />
          </a>
        </li>
        <li>
          <a
            className=" bg-white block py-2 px-2 border border-[rgbs(0,0,0,0.1)] rounded-md  hover:bg-slate-100"
            href="https://github.com/anggananda"
            target="blank"
          >
            <FaGithub size={20} />
          </a>
        </li>
        <li>
          <a
            className=" bg-white block py-2 px-2 border border-[rgbs(0,0,0,0.1)] rounded-md  hover:bg-slate-100"
            href="https://youtube.com/@dwiangga9040"
            target="blank"
          >
            <FaYoutube size={20} />
          </a>
        </li>
      </ul>

      <div className="md:hidden cursor-pointer" onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div className={`absolute md:hidden ${!nav ? 'left-[-250px]' : 'h-[100dvh] left-0 top-0 border-r border-r-[rgba(0,0,0,0.1)] w-[65%] flex flex-col gap-4 bg-[#fff] p-4 ease-in-out duration-150'}`}>

        <div>
          <a className="text-xl font-bold italic " href="/">
            Dwi<span className="text-[#A96A68]">Angga</span>
          </a>
        </div>

        <ul className="flex flex-col gap-4">
          <li>
            <a
              className="block py-2 px-3 border-b border-b-[rgba(0,0,0,0.1)] rounded-sm hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
              href="#home"
              onClick={handleNav}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="block py-2 px-3 border-b border-b-[rgba(0,0,0,0.1)] rounded-sm hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
              href="#about"
              onClick={handleNav}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="block py-2 px-3 border-b border-b-[rgba(0,0,0,0.1)] rounded-sm hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
              href="#project"
              onClick={handleNav}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="block py-2 px-3 border-b border-b-[rgba(0,0,0,0.1)] rounded-sm hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
              href="#hobby"
              onClick={handleNav}
            >
              Hobby
            </a>
          </li>
          <li>
            <a
              className="block py-2 px-3 rounded-sm hover:bg-slate-900 text-sm uppercase hover:text-[#fff] md:text-base"
              href="#contact"
              onClick={handleNav}
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className="flex items-center justify-center gap-2">
        <li>
          <a
            className="block py-2 px-2 border border-[rgbs(0,0,0,0.1)] rounded-md  hover:bg-slate-100"
            href="https://instagram.com/angga_dwinnd"
            target="blank"
          >
            <FaInstagram size={20} />
          </a>
        </li>
        <li>
          <a
            className="block py-2 px-2 border border-[rgbs(0,0,0,0.1)] rounded-md  hover:bg-slate-100"
            href="https://github.com/anggananda"
            target="blank"
          >
            <FaGithub size={20} />
          </a>
        </li>
        <li>
          <a
            className="block py-2 px-2 border border-[rgbs(0,0,0,0.1)] rounded-md  hover:bg-slate-100"
            href="https://youtube.com/@dwiangga9040"
            target="blank"
          >
            <FaYoutube size={20} />
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
