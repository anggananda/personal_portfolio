import React, { useState, useEffect } from "react";
import dataProject from "../data/project.json";
import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

const ProjectList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataProject.data);
  }, []);

  return (
    <div className="flex flex-col gap-8 mt-4 max-w-[1150px] mx-auto border border-[rgba(0,0,0,0.1)] rounded-md shadow-md p-6">
      {data.map((e) => (
        <div key={e.id} className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${e.id < data.length? 'border-b-2 pb-4' : ''} border-b-[rgba(0,0,0,0.1)]`}>
          <div className={`flex justify-center flex-col gap-2 md:px-12 ${e.id % 2 == 0 ? 'md:order-2' : ''}`}>
            <h1 className="font-semibold text-center text-base md:text-lg">{e.judul}</h1>
            <p className="text-justify font-light text-xs md:text-sm">{e.deskripsi}</p>
            <div className="flex justify-center items-center gap-4 md:pt-4">
              <a className="hover:scale-105 p-2 shadow-md border hover:translate-y-[-5px] duration-[0.5s] ease-in-out border-[rgba(0,0,0,0.1)] rounded-md block" href={e.github} target="blank"><FaGithub className="md:text-xl" /></a>
              <a className="hover:scale-105 p-2 shadow-md border hover:translate-y-[-5px] duration-[0.5s] ease-in-out border-[rgba(0,0,0,0.1)] rounded-md block" href={e.demo} target="blank"><GrDeploy className="md:text-xl"/></a>
            </div>
          </div>
          <div>
            <img className="rounded-md w-full border border-[rgba(0,0,0,0.1)] shadow-md" src={`./img/${e.img}`} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
