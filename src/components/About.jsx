import React from "react";

const About = () => {
  return (
    <div
      className="pt-[5rem] h-[100dvh] flex justify-center items-center max-w-[850px] mx-auto"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        <div className="flex justify-center items-center">
          <div className="md:w-[400px]">
            <img className="w-full rounded-md" src="./img/about.jpg" alt="" />
          </div>
        </div>
        <div className="">
          <h1 className="text-xs md:text-sm uppercase font-bold text-[#A96A68]">
            About me
          </h1>
          <h1 className="font-semibold md:text-lg">
            A scrappy kid hustling to chase his dreams in this tough world.
          </h1>
          <p className="text-justify font-light text-xs md:text-sm">
            Hello there! I'm a fourth-semester student majoring in Information
            Systems at Universitas Pendidikan Ganesha. I've embarked on a
            journey into the realm of IT with the ambition of becoming a web
            developer. Currently, my toolkit includes HTML, CSS, JavaScript,
            Tailwind, and ReactJS. While I'm still honing my skills, I'm
            determined to navigate the challenges of the IT world and continue
            growing. Join me as I strive to carve my path in the dynamic field
            of web development!✌️
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
