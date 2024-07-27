import React from "react";
import dog_log from "../assets/dog_log.jpg";

const Header = () => {
  return (
    <div className="flex justify-between px-[2rem] py-[0.5rem] items-center bg-sky-600">
      <img
        src={dog_log}
        alt="dog logo "
        className="h-[2rem] border-[2px] border-solid border-[#dafc55] rounded-lg p-1  w-[5rem] object-cover"
      />
      <div className="flex gap-5">
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Found Dog</p>
        <p>Want to Adopt</p>
      </div>
    </div>
  );
};

export default Header;
