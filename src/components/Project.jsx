import React from "react";
import ProjectList from "./ProjectList";

const Project = () => {
  return (
    <div id="project" className="px-6">
      <div className="pt-[5rem]">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="uppercase font-bold text-xs md:text-sm text-[#A96A68]">Projects</h1>
          <h1 className="font-semibold md:text-lg ">
          Several simple projects have been crafted by me before ✨
          </h1>
        </div>
      </div>
      <ProjectList />
    </div>
  );
};

export default Project;
