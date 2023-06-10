import Navbar from "../Navbar";
import './Tech.css'
import { useState } from "react";
import tech1 from '../assets/technology/image-launch-vehicle-landscape.jpg'
import techA from '../assets/technology/image-launch-vehicle-portrait.jpg'
import tech2 from '../assets/technology/image-space-capsule-landscape.jpg'
import techB from '../assets/technology/image-space-capsule-portrait.jpg'
import tech3 from '../assets/technology/image-spaceport-landscape.jpg'
import techC  from '../assets/technology/image-spaceport-portrait.jpg'
import TechLayout from "./TechLayout";
import { technology } from "../consts/constant";


const Tech = () => {
    const [selectedTech, setSelectedTech] = useState('one')
    function toggleTechImg(){
        if (selectedTech === 'one') {
            return (
              <div>
                <img className="block lg:hidden" src={tech1} alt="" />
                <img className="hidden lg:block" src={techA}alt="" />
              </div>
            );
          } else if (selectedTech === 'two') {
            return (
              <div className="">
              <img className="block lg:hidden" src={tech2} alt="" />
                <img className="hidden lg:block" src={techB}alt="" />
              </div>
            );
          } else if (selectedTech === 'three') {
            return (
              <div className="">
              <img className="block lg:hidden" src={tech3} alt="" />
                <img className="hidden lg:block" src={techC}alt="" />
              </div>
            );
          } 
    }
    function toggleTechInfo(){
        if (selectedTech === 'one') {
            return (
              <TechLayout
                name={technology.one.name}
                
                description={technology.one.description}
              />
            );
          } else if (selectedTech === 'two') {
            return (
              <TechLayout
                name={technology.two.name}
                
                description={technology.two.description}
              />
            );
          } else if (selectedTech === 'three') {
            return (
              <TechLayout
                name={technology.three.name}
                
                description={technology.three.description}
              />
            );
          }
    }
    return ( 
        <div className=" tech-desktop  w-full h-full">
            <Navbar/>
            <div className=' py-5 lg:px-5 px-0'>
        <h1 className="md:text-[28px] text-center md:text-left font-heading2 text-color3 font-normal text-[16px] leading-[19.2px] uppercase tracking-[0.3rem]">
          <span className="text-base font-semibold tracking-widest pr-5 leading-tight mix-blend-normal opacity-25 ">
            03
          </span>
          Space Launch 101
        </h1>
        <div className=" lg:flex flex-row-reverse justify-between align-text-bottom mt-5">
          <div className=" ">
            {toggleTechImg()}
          </div>
          <div className="  flex items-center"> 
                <div className=' lg:flex flex-row  '>
                  <div className="flex lg:flex-col justify-center lg:justify-between py-8 md:py-14 lg:py-3 lg:mr-8">
                    <span
                      className={`flex justify-center items-center text-[16px] lg:text-[32px] lg:leading-[36.67px]  leading-[18px] tracking-[1px] font-heading1  ring-offset-blue-100 w-[40px] lg:w-[80px] lg:h-[80px] h-[40px] rounded-full mx-3 cursor-pointer ${selectedTech === 'one' ? 'bg-white' : 'bg-gray-600 hover:bg-white'} `}
                      onClick={() => setSelectedTech('one')}
                    >
                    1
                    </span>
                    <span
                      className={`flex justify-center items-center text-[16px] lg:text-[32px] lg:leading-[36.67px]  leading-[18px] tracking-[1px] font-heading1  ring-offset-blue-100 w-[40px] lg:w-[80px] lg:h-[80px] h-[40px] rounded-full mx-3 cursor-pointer ${selectedTech === 'two' ? 'bg-white' : 'bg-gray-600 hover:bg-white'} `}
                      onClick={() => setSelectedTech('two')}
                    >
                    2
                    </span>
                    <span
                      className={`flex justify-center items-center text-[16px] lg:text-[32px] lg:leading-[36.67px]  leading-[18px] tracking-[1px] font-heading1  ring-offset-blue-100 w-[40px] lg:w-[80px] lg:h-[80px] h-[40px] rounded-full mx-3 cursor-pointer ${selectedTech === 'three' ? 'bg-white' : 'bg-gray-600 hover:bg-white'} `}
                      onClick={() => setSelectedTech('three')}
                    >
                    3
                    </span>
                  </div>
              
                  <div className=''>{toggleTechInfo()}</div>
                </div>
          </div>
        </div>
      </div>
        </div>
        
     );
}
 
export default Tech;