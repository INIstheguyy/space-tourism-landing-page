import React, { useState } from "react";
import Navbar from "../Navbar";
import './destination.css';
import { destination } from "../consts/constant";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState("moon");

  function togglePlanet() {
    if (selectedPlanet === "moon") {
      return (
        <div>
          <div>
            <img src={destination.moon.images.png} alt="" className="" />
          </div>
          <div>
            <div className="">
              <p className="text-colo">{destination.moon.name}</p>
              <p className="">{destination.moon.description}</p>
              <p className="">{destination.moon.distance}</p>
              <p className="">{destination.moon.travel}</p>
            </div>
          </div>
        </div>
      );
    } else if (selectedPlanet === "mars") {
      // Code for Mars planet
    } else if (selectedPlanet === "europa") {
      // Code for Europa planet
    } else if (selectedPlanet === "titan") {
      // Code for Titan planet
    }
  }

  return (
    <div className="destination-desktop w-full h-full">
      <Navbar />
      <div className="p-5">
        <h1 className="md:text-[18px] lg:text-[28px] text-center md:text-left font-heading2 text-color3 font-normal text-base leading-tight tracking-widest">
          <span className="text-base font-semibold tracking-widest leading-tight mix-blend-normal opacity-25 px-2">
            01
          </span>
          PICK YOUR DESTINATION
        </h1>
        {togglePlanet()}
      </div>
    </div>
  );
};

export default Destination;
