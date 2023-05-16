import React from "react";
import Navbar from "../Navbar";
import './destination.css'
import { useState } from "react";
// import data from '../data.json'

const Destination = () => {
    const [ selectedPlanet,setSelectedPlanet] = useState("moon")
    return ( 
        <div className=" destination-desktop w-full h-full">
            <Navbar/>
            <div>
                <h1 className=" text-center font-heading2 text-color3 font-normal text-base leading-tight tracking-widest"><span className='text-base font-semibold tracking-widest leading-tight mix-blend-normal opacity-25 px-2'>01</span>PICK YOUR DESTINATION</h1>
                <div>
                    <div>
                        <img src={``} alt="" className="" />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Destination;