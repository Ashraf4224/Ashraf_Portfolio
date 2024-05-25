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
    <div className="w-[90%] h-auto mx-auto text-neutral-300 font-serif">
      <div className="w-[96%] h-auto mx-auto  flex flex-col gap-4 justify-center ">
        <h3>Welcome to MyWorld</h3>
        <h1 className="text-2xl flex flex-col md:flex-row space-x-4">
          <span className="text-base md:text-2xl">Hi, I am </span>
          <span className="font-bold md:text-3xl  md:text-[#ff014a]  ">
            Ashiraf Darubaigari
          </span>
        </h1>
        <p className=" items-center font-bold">
          a{" "}
          <span className=" text-[#170079da] md:text-[#962c47] font-serif text-xl">
            {list}
          </span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#962c47"
          />
        </p>
      </div>
    </div>
  );
};

export default HomeLeft;
