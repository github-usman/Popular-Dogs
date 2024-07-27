import React, { useState } from "react";
import dog_log from "../assets/dog_log.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [isShow,setIsShow] = useState(false)
  const handleToggle =()=>{
     setIsShow((value)=>!value);

  }
  return (
    <div className="flex justify-between px-[2rem] py-[0.5rem] items-center bg-sky-600">
      <img
        src={dog_log}
        alt="dog logo "
        className="h-[2rem] border-[2px] border-solid border-[#dafc55] rounded-lg p-1  w-[5rem] object-cover"
      />
      
      <div className="md:flex hidden gap-5 " >
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Found Dog</p>
        <p>Want to Adopt</p>
      </div>
      <div className="md:hidden flex-cols gap-5 " > 
          <RxHamburgerMenu onClick={handleToggle}/>
          
          <div className={`flex-cols  gap-5 ${isShow===true?"flex-cols":"hidden"} `}>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Found Dog</p>
            <p>Want to Adopt</p>
          </div>
      </div>
    </div>
      
  );
};

export default Header;
