import React from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-[700px] pt-6 pd-6 border-b-[1px] border-gray-300 flex flex-col 
      md:flex-row items-center gap-2"
    >
      <div className="md:w-1/2 w-full h-full flex items-center">
        <HomeLeft />
      </div>
      <div className="md:w-1/2 w-full h-full flex items-center">
        <HomeRight />
      </div>
    </section>
  );
};

export default Home;
