import React from "react";
import { ReactTyped } from "react-typed";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Hero = () => {
  return (
    <div
      id="home"
      className="pt-[5rem] md:pt-0 md:h-[100dvh] flex justify-center flex-col max-w-[950px] mx-auto"
    >
      <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 w-full p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 md:gap-4">
            <ReactTyped
              className="font-semibold text-2xl md:text-4xl md:text-left"
              strings={["Junior Front-end Web Developer 👋"]}
              typeSpeed={120}
              showCursor={false}
            />
            <ReactTyped
              className="font-semibold uppercase text-base"
              strings={["Hello...", "Welcome to my Portfolio ✨"]}
              loop
              typeSpeed={120}
              backSpeed={50}
            />
            <h1 className="text-justify text-xs md:text-sm font-light">
              {" "}
              Hi, I'm{" "}
              <span className="text-[#A96A68] font-semibold italic">
                Dwi Angga
              </span>
              , a computer science student chasing my dreams in the IT world to
              face the real world full of challenges. Cheers! 🌟
            </h1>

            <div className="flex justify-center items-center py-6 md:p-6">
              <h1 className="italic font-light tracking-wider text-xs text-justify md:text-left md:text-sm">
                " Code your{" "}
                <span className="text-[#A96A68] font-semibold">dreams</span>{" "}
                into reality – where creativity meets functionality! "
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-normal">
          <div
            className="w-[250px] h-[250px] overflow-hidden shadow-lg border-r-4"
            style={{ borderRadius: "10px 80px 10px 80px" }}
          >
            <img
              className=" w-full h-full object-cover hover:scale-105 shadow-lg border-r-8 border-r-[#A96A68] border-b-4 border-b-[#A96A68]"
              style={{ borderRadius: "10px 80px 10px 80px" }}
              src="./img/angga.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-center md:justify-normal gap-1 md:gap-8">
        <div className="flex p-6 flex-col md:flex-row items-center gap-2 md:gap-8">
          <h1 className="text-xs md:text-sm font-semibold">Tech Stack : </h1>
          <ul className="flex items-center gap-4 md:gap-10 justify-center">
            <li>
              <a
                className="block hover:translate-y-[-5px] duration-[0.5s] ease-in-out hover:scale-105 p-2 text-[#E44D26] rounded-md hover:bg-slate-100 shadow-md"
                href=""
                target="blank"
              >
                <FaHtml5 size={20} />
              </a>
            </li>
            <li>
              <a
                className="block hover:translate-y-[-5px] duration-[0.5s] ease-in-out hover:scale-105 p-2 text-[#264de4] rounded-md hover:bg-slate-100 shadow-md"
                href=""
                target="blank"
              >
                <FaCss3Alt size={20} />
              </a>
            </li>
            <li>
              <a
                className="block hover:translate-y-[-5px] duration-[0.5s] ease-in-out hover:scale-105 p-2 text-[#F0DB4F] rounded-md hover:bg-slate-100 shadow-md"
                href=""
                target="blank"
              >
                <IoLogoJavascript size={20} />
              </a>
            </li>
            <li>
              <a
                className="block hover:translate-y-[-5px] duration-[0.5s] ease-in-out hover:scale-105 p-2 text-[#38B2AC] rounded-md hover:bg-slate-100 shadow-md"
                href="https://tailwindcss.com/"
                target="blank"
              >
                <SiTailwindcss size={20} />
              </a>
            </li>
            <li>
              <a
                className="block hover:translate-y-[-5px] duration-[0.5s] ease-in-out hover:scale-105 p-2 text-[#61DAFB] rounded-md hover:bg-slate-100 shadow-md"
                href="https://react.dev/"
                target="blank"
              >
                <FaReact size={20} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <a
            className="block font-semibold py-2 text-xs md:text-sm px-4 shadow-md rounded-md border border-[rgba(0,0,0,0.1)] hover:bg-slate-800 hover:text-white"
            href="#about"
          >
            Who's Me?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
