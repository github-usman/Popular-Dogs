import axios from "axios";
import React, { useEffect, useState } from "react";
import DogComponet from "./DogComponet";

const uri = process.env.REACT_APP_BASE_URI;
const ListOfDogs = () => {
  const [dogImage, setDogImage] = useState([]);
  const [numberOfDogs,setNumberOfDogs] = useState(null);
  const [isSubmit,setIsSubmit] = useState(false);

  useEffect(() => {
    const myFun = async () => {
      try {
        const response = await axios.get(uri+`/breeds/image/random/${numberOfDogs===null?6:numberOfDogs}`);
        const { message } = response.data;
        setDogImage(message);
        
      } catch (error) {
        console.log(error);
      }
    };
    myFun();
    setIsSubmit(false);
    // eslint-disable-next-line
  }, [isSubmit]);

  const handDogNumber = (e)=>{
    setNumberOfDogs(e.target.value);
  }

  const handleSubmit = ()=>{
    setIsSubmit(true);
  }
  return (
    <div className="m-auto max-w-[1280px] w-full">

    <div className="my-[1rem] flex flex-col md:flex-row gap-[1rem] justify-between">  
      <h2 className="text-center text-[24px]">List of Popular Dogs</h2>
      <input onChange={handDogNumber} value={numberOfDogs}  className="px-1 border-[3px] border-solid border-sky-500 py-[0.5rem] rounded-lg" type="number" name="number_of_dogs_image" placeholder="Enter number dogs" autoComplete="on"/>
      <button onClick={handleSubmit} type="submit" className="bg-sky-600 text-white px-5 rounded-lg py-[0.5rem]"  name="btn" >Submit</button>
    </div> 



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {dogImage.length &&
          dogImage.map((item) => (
            <DogComponet key={item} transferItem={item} />
          ))}
      </div>
    </div>
  );
};

export default ListOfDogs;
