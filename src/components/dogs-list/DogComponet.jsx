import React from "react";

const DogComponet = ({ transferItem }) => {
  return (
    <div className="h-[300px] px-[2rem] rounded-md pt-[1rem] border-solid border-[5px] border-[#22211a97]">
      <div className="bg-gradient-to-r from-blue-500 to-[#f7e673] border-solid border-[2px] border-sky-500 h-[190px] p-[1.5rem]">
        <img
          src={transferItem}
          className="h-[180px] border-solid border-[3px] border-sky-600 w-[100%] object-cover  hover:cursor-pointer hover:scale-110 rounded-lg"
          alt="dogs"
        />
      </div>
      <div className="mt-[1.5rem] flex justify-center">

        <p>Breed : {transferItem.slice(30,transferItem.length).split('/')[0]}</p>
      </div>
    </div>
  );
};

export default DogComponet;
