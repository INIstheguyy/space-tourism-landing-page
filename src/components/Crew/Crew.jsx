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
          <img className="w-full h-full" src={crew1} alt="" />
          <hr className="bg-slate-50 h-[70%]" />
        </div>
      );
    } else if (selectedCrew === 'two') {
      return <img className="w-full h-full" src={crew2} alt="" />;
    } else if (selectedCrew === 'three') {
      return <img className="w-full h-full" src={crew3} alt="" />;
    } else if (selectedCrew === 'four') {
      return <img className="w-full h-full" src={crew4} alt="" />;
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
      <div>
        <h1 className="md:text-[28px] text-center md:text-left font-heading2 text-color3 font-normal text-base leading-tight tracking-[0.3rem]">
          <span className="text-base font-semibold tracking-widest leading-tight mix-blend-normal opacity-25 px-2 md:px-4">
            02
          </span>
          Meet your crew
        </h1>
        <div className="md:px-20 lg:flex flex-row-reverse mt-5">
          <div className="px-[100px] py-[25px] lg:w-[100%] lg:p-0">
            {toggleCrewImage()}
          </div>
          <div className="lg:ml-[200px] pt-10"> 
                <div className=' lg:flex flex-col-reverse'>
                    <div className="flex justify-center lg:justify-start py-2">
                    <span
                        className="w-[15px] h-[15px] bg-color3 rounded-full mx-3 cursor-pointer"
                        onClick={() => setSelectedCrew('one')}
                    ></span>
                    <span
                        className="w-[15px] h-[15px] bg-color3 rounded-full mx-3 cursor-pointer"
                        onClick={() => setSelectedCrew('two')}
                    ></span>
                    <span
                        className="w-[15px] h-[15px] bg-color3 rounded-full mx-3 cursor-pointer"
                        onClick={() => setSelectedCrew('three')}
                    ></span>
                    <span
                        className="w-[15px] h-[15px] bg-color3 rounded-full mx-3 cursor-pointer"
                        onClick={() => setSelectedCrew('four')}
                    ></span>
                    </div>
                    <div>{toggleCrewInfo()}</div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
