import { list } from "postcss";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HomeLeft = () => {
  const [list] = useTypewriter({
    words: ["Full Stack Developer.", "UI Designer.", "Big Data Developer."],
    loop: true,
    typeSpeed: 20,
    delaySpeed: 2000,
    deleteSpeed: 15,
  });
  return (
    <div className="w-full h-auto text-neutral-300 font-serif">
      <div className="w-[96%] h-auto mx-auto pl-14 flex flex-col gap-8 justify-center ">
        <h3>Welcome to MyWorld</h3>
        <h1 className="text-2xl">
          Hi, I am{" "}
          <span className="font-bold text-4xl text-[#ff014a]  ">
            Ashiraf Darubaigari
          </span>
        </h1>
        <p className=" items-center">
          a <span className="text-[#fc4bd0] font-serif text-xl">{list}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#fc4bd0"
          />
        </p>
      </div>
    </div>
  );
};

export default HomeLeft;
