import React from "react";
import resume from "../documnet/Resum_Ashiraf.pdf";
import about from "../images/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-full md:h-screen  pt-6 pb-6 border-b-[1px] border-gray-300 flex flex-col space-y-3 font-serif"
    >
      <h1 className="text-center text-3xl font-bold">About</h1>

      <div className="flex flex-col gap-3 md:flex-row h-full ">
        {/** Left side*/}
        <div className="w-full md:w-1/2 h-auto mx-auto">
          <div className="w-[90%] h-full mx-auto flex justify-center items-center ">
            <div className="w-[75%] h-auto overflow-hidden rounded-lg mx-auto">
              <img src={about} alt="about" className="object-cover " />
            </div>
          </div>
        </div>
        {/** Right Side **/}
        <div className="w-full md:w-1/2 h-auto mx-auto">
          <div className="w-[90%] h-full mx-auto flex flex-col space-y-4 justify-center">
            <p className="w-[90%] mx-auto">
              Hi My name is
              <span className="text-[#170079da] font-bold pl-2 underline uppercase">
                Ashiraf Darubaigari
              </span>
              , Working as software Engineer. Present working on Convergent
              Billing System.
            </p>
            <span className="w-[90%] mx-auto">
              Environment : Scala, Apache Spark, Spray, MySQL, Cassandra
            </span>
            <p className="w-[90%] flex  gap-2 mx-auto items-center">
              <span className="text-[#a39fe0]">Education</span>
              <span>
                Graduated as Bachelor of Technology in the stream of Mechanical
                Engineering from JNTUA Anantapur with the aggregation of 76.29%.
              </span>
            </p>
            <div className="w-[90%] mx-auto flex flex-col">
              <p>
                {" "}
                Email Id:{" "}
                <span className="text-xs md:text-[18px] pl-3 font-semibold underline text-[#170079da] animate-pulse duration-500">
                  {" "}
                  ashirafdarubaigari@gmail.com
                </span>
              </p>
              <p className="pt-6 flex items-center justify-between text-base">
                <span>My Resume </span>
                <a
                  href={resume}
                  download
                  className="ml-12 bg-amber-400 text-black border-[2px] border-white p-2 rounded-lg hover:text-blue-800  hover:scale-105"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
