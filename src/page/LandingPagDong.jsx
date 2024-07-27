import React from "react";
import Header from "../components/Header";
import ListOfDogs from "../components/dogs-list/ListOfDogs";
import Footer from "../components/Footer";

const LandingPagDong = () => {
  return (
    <div>
      <Header />
      <div className="px-[1rem]">
        <ListOfDogs />
      </div>
        <Footer/>
    </div>
  );
};

export default LandingPagDong;
