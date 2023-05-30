import React, { useState } from "react";
import Navbar from "../Navbar";
import './destination.css';
import { destination } from "../consts/constant";
import DesLayout from "./DestinationLayout";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState("moon");

  function togglePlanet() {
    if (selectedPlanet === "moon") {
      return (
        <div>
          <DesLayout
            image={destination.moon.images}
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
            image={destination.mars.images.png}
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
            image={destination.europa.images}
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
            image={destination.titan.images}
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
      <div className="p-5">
        <h1 className="md:text-[18px] lg:text-[28px] text-center md:text-left font-heading2 text-color3 font-normal text-base leading-tight tracking-widest">
          <span className="text-base font-semibold tracking-widest leading-tight mix-blend-normal opacity-25 px-2">
            01
          </span>
          PICK YOUR DESTINATION
        </h1>
        <div className="text-color3 flex justify-evenly my-5">
          <p
            className={selectedPlanet === "moon" ? "active cursor-pointer hover:cursor-pointer" : ""}
            onClick={() => setSelectedPlanet("moon")}
          >
            {destination.moon.name}
          </p>
          <p
            className={selectedPlanet === "mars" ? "active cursor-pointer hover:cursor-pointer" : ""}
            onClick={() => setSelectedPlanet("mars")}
          >
            {destination.mars.name}
          </p>
          <p
            className={selectedPlanet === "europa" ? "active cursor-pointer hover:cursor-pointer" : ""}
            onClick={() => setSelectedPlanet("europa")}
          >
            {destination.europa.name}
          </p>
          <p
            className={selectedPlanet === "titan" ? "active cursor-pointer hover:cursor-pointer" : ""}
            onClick={() => setSelectedPlanet("titan")}
          >
            {destination.titan.name}
          </p>
        </div>

        {togglePlanet()}
      </div>
    </div>
  );
};


export default Destination;
