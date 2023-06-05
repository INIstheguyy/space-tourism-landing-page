import React, { useState } from "react";
import Navbar from "../Navbar";
import './destination.css';
import { destination } from "../consts/constant";
import DesLayout from "./DestinationLayout";
import moon from "../assets/destination/image-moon.webp"
import mars from "../assets/destination/image-mars.webp"
import europa from "../assets/destination/image-europa.webp"
import titan from "../assets/destination/image-titan.webp"

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState("moon");
  function togglePlanetImage(){
    if(selectedPlanet === "moon"){
        return(
          <div>
            <img className="w-full h-full" src={moon} alt="" />
          </div>
        )
    }else if(selectedPlanet === "mars"){
      return(
        <div>
          <img className="w-full h-full" src={mars} alt="" />
        </div>
      )
    }
    else if(selectedPlanet === "europa"){
      return(
        <div>
          <img  className="w-full h-full" src={europa} alt="" />
        </div>
      )
    }
    else if(selectedPlanet === "titan"){
      return(
        <div>
          <img className="w-full h-full" src={titan} alt="" />
        </div>
      )
    }
  }

  function togglePlanet() {
    if (selectedPlanet === "moon") {
      return (
        <div>
          <DesLayout
            description={destination.moon.description}
            distance={destination.moon.distance}
            name={destination.moon.name}
            travel={destination.moon.travel}
          />
        </div>
      );
    } else if (selectedPlanet === "mars") {
      return (
        <div>
          <DesLayout
            description={destination.mars.description}
            distance={destination.mars.distance}
            name={destination.mars.name}
            travel={destination.mars.travel}
          />
        </div>
      );
    } else if (selectedPlanet === "europa") {
      return (
        <div>
          <DesLayout
            description={destination.europa.description}
            distance={destination.europa.distance}
            name={destination.europa.name}
            travel={destination.europa.travel}
          />
        </div>
      );
    } else if (selectedPlanet === "titan") {
      return (
        <div>
          <DesLayout
            description={destination.titan.description}
            distance={destination.titan.distance}
            name={destination.titan.name}
            travel={destination.titan.travel}
          />
        </div>
      );
    }
  }

  return (
    <div className="destination-desktop w-full h-full">
      <Navbar />
      <div className="p-5 lg:p-20">
        <h1 className="md:text-[28px]  text-center md:text-left font-heading2 text-color3 font-normal text-base leading-tight tracking-[0.3rem]">
          <span className="text-base font-semibold tracking-widest leading-tight mix-blend-normal opacity-25 px-2 md:px-4">
            01
          </span>
          PICK YOUR DESTINATION
        </h1>
        <div className=" md:px-20 lg:flex mt-5">
          <div className="px-[100px] py-[25px] lg:w-[100%] lg:p-0  ">
            {togglePlanetImage()}
          </div>
          <div className=" lg:ml-[200px] ">
              <div className="text-color3 flex justify-evenly my-5 md:text-[16px] md:px-[50px] py-3 lg:px-0 ">
                <p
                  className={selectedPlanet  ? "hover-underline-animation " : ""}
                  onClick={() => setSelectedPlanet("moon")}
                >
                  {destination.moon.name}
                </p>
                <p
                  className={selectedPlanet === "mars" ? "hover-underline-animation " : ""}
                  onClick={() => setSelectedPlanet("mars")}
                >
                  {destination.mars.name}
                </p>
                <p
                  className={selectedPlanet === "europa" ? "hover-underline-animation " : ""}
                  onClick={() => setSelectedPlanet("europa")}
                >
                  {destination.europa.name}
                </p>
                <p
                  className={selectedPlanet === "titan" ? "hover-underline-animation " : ""}
                  onClick={() => setSelectedPlanet("titan")}
                >
                  {destination.titan.name}
                </p>
              </div>
              <div>
                {togglePlanet()}
              </div>
          </div>
        </div> 
      </div>
    </div>
  );
};


export default Destination;
