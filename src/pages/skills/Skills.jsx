import React from "react";
import {
  SiReact,
  SiScala,
  SiMysql,
  SiApachespark,
  SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import play from "../images/play.png";
const Skills = () => {
  const skillList = [
    { name: "Scala", rating: 7, logo: <SiScala /> },
    { name: "Apache Spark", rating: 6, logo: <SiApachespark /> },
    { name: "Core Java", rating: 7, logo: <FaJava /> },
    { name: "MySql", rating: 6, logo: <SiMysql /> },
    { name: "Play FrameWork", rating: 7, logo: play },
    { name: "MongoDB", rating: 5, logo: <SiMongodb /> },
    { name: "React", rating: 6, logo: <SiReact /> },
    { name: "Java Script", rating: 7, logo: <TbBrandJavascript /> },
  ];
  return (
    <section
      id="skills"
      className="w-full h-screen pt-6 pd-6 border-b-[1px] border-gray-300 font-serif"
    >
      <div className="flex flex-col gap-2 ">
        <h1 className="text-center text-2xl">Skills</h1>
        <ul className="flex flex-col space-y-3 justify-between">
          {skillList.map(({ name, rating, logo }) => {
            return (
              <li key={name} className="flex items-center justify-center">
                <span className="w-10 h-10  hidden md:flex items-center justify-center  text-2xl rounded-full bg-gradient-to-tr from-rose-700 to-blue-600 via-pink-600 text-gray-200">
                  {name !== "Play FrameWork" ? (
                    logo
                  ) : (
                    <img src={logo} className="w-[90%] h-[90%]" />
                  )}
                </span>
                <span className="w-1/4 pl-2">{name}</span>
                <div className="w-1/2 h-2 bg-gray-400 ml-2">
                  <div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-700"
                    style={{ width: `${rating * 10}%` }}
                  ></div>
                </div>
                <span className="ml-2 ">{rating}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
