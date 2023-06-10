import React, { useState } from 'react';
import Navbar from '../Navbar';
import './Crew.css';
import crew4 from '../assets/crew/image-anousheh-ansari.png';
import crew1 from '../assets/crew/image-douglas-hurley.png'
import crew2 from '../assets/crew/image-mark-shuttleworth.png'
import crew3 from '../assets/crew/image-victor-glover.png'
import CrewLayout from './CrewLayout';
import { crew } from '../consts/constant';

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState('one');

  function toggleCrewImage() {
    if (selectedCrew === 'one') {
      return (
        <div>
          <img className="  " src={crew1} alt="" />
          <hr className="bg-slate-50 h-[70%] lg:hidden" />
        </div>
      );
    } else if (selectedCrew === 'two') {
      return (
        <div className="">
        <img className="" src={crew2} alt="" />
        </div>
      );
    } else if (selectedCrew === 'three') {
      return (
        <div className="">
        <img className="" src={crew3} alt="" />
        </div>
      );
    } else if (selectedCrew === 'four') {
      return (
        <div className="">
        <img className="" src={crew4} alt="" />
        </div>
      );
    }
  }

  function toggleCrewInfo() {
    if (selectedCrew === 'one') {
      return (
        <CrewLayout
          name={crew.one.name}
          role={crew.one.role}
          description={crew.one.bio}
        />
      );
    } else if (selectedCrew === 'two') {
      return (
        <CrewLayout
          name={crew.two.name}
          role={crew.two.role}
          description={crew.two.bio}
        />
      );
    } else if (selectedCrew === 'three') {
      return (
        <CrewLayout
          name={crew.three.name}
          role={crew.three.role}
          description={crew.three.bio}
        />
      );
    } else if (selectedCrew === 'four') {
      return (
        <CrewLayout
          name={crew.four.name}
          role={crew.four.role}
          description={crew.four.bio}
        />
      );
    }
  }

  return (
    <div className="crew-desktop w-full h-full">
      <Navbar />
      <div className=' py-5 lg:px-20 px-5'>
        <h1 className="md:text-[28px] text-center md:text-left font-heading2 text-color3 font-normal text-base leading-tight uppercase tracking-[0.3rem]">
          <span className="text-base font-semibold tracking-widest pr-5 leading-tight mix-blend-normal opacity-25 ">
            02
          </span>
          Meet your crew
        </h1>
        <div className=" lg:flex flex-row-reverse justify-between align-text-bottom mt-5">
          <div className="px-[10px] py-[25px]  lg:p-0">
            {toggleCrewImage()}
          </div>
          <div className=" "> 
                <div className=' lg:flex flex-col-reverse '>
                  <div className="flex justify-center lg:justify-start py-2 lg:pt-[15%]">
                    <span
                      className={`w-[15px] h-[15px] rounded-full mx-3 cursor-pointer ${selectedCrew === 'one' ? 'bg-white' : 'bg-gray-600 hover:bg-white'} `}
                      onClick={() => setSelectedCrew('one')}
                    ></span>
                    <span
                      className={`w-[15px] h-[15px] rounded-full mx-3 cursor-pointer ${selectedCrew === 'two' ? 'bg-white' : 'bg-gray-600 hover:bg-white'} `}
                      onClick={() => setSelectedCrew('two')}
                    ></span>
                    <span
                      className={`w-[15px] h-[15px] rounded-full mx-3 cursor-pointer ${selectedCrew === 'three' ? 'bg-white' : 'bg-gray-600 hover:bg-white'} `}
                      onClick={() => setSelectedCrew('three')}
                    ></span>
                    <span
                      className={`w-[15px] h-[15px] rounded-full mx-3 cursor-pointer ${selectedCrew === 'four' ? 'bg-white' : 'bg-gray-600 hover:bg-white'} `}
                      onClick={() => setSelectedCrew('four')}
                    ></span>
                  </div>
              
                  <div className=' lg:pt-[40%] pt-[20%]'>{toggleCrewInfo()}</div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
