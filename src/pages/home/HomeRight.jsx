import React from "react";
import profile from "../images/profile.png";
const HomeRight = () => {
  return (
    <div className="w-full h-auto  flex items-center justify-center ">
      <div className="w-[400px] h-auto  shadow-2xl shadow-black">
        <img src={profile} alt="profile" className="object-cover " />
      </div>
    </div>
  );
};

export default HomeRight;
