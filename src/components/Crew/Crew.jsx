import Navbar from "../Navbar";
import './Crew.css'
import { useState } from 'react'
import crew1 from '../assets/crew/image-anousheh-ansari.png'
// import { Link } from 'react-router-dom';

const Crew = () => {
    const [selectedCrew, setSelectedCrew] = useState('one')
    function toggleCrewImage() {
        if(selectedCrew === "one"){
            return(
                <div>
                    <img className="w-full h-full" src={crew1} alt="" />
                    <hr className="bg-slate-50 h-[70%]"/>
                </div>
            )
        }else if(selectedCrew === "two"){
            return(
                <div>
                    <img className="w-full h-full" src={crew1} alt="" />
                </div>
            )
        }else if(selectedCrew === "three"){
            return(
                <div>
                    <img className="w-full h-full" src={crew1} alt="" />
                </div>
            )
        }else if(selectedCrew === "four"){
            return(
                <div>
                    <img className="w-full h-full" src={crew1} alt="" />
                </div>
            )
        }
    }
    return ( 
        <div className=" crew-desktop w-full h-full">
            <Navbar/>
            <div>
                <h1 className="md:text-[28px]  text-center md:text-left font-heading2 text-color3 font-normal text-base leading-tight tracking-[0.3rem]">
                    <span className="text-base font-semibold tracking-widest leading-tight mix-blend-normal opacity-25 px-2 md:px-4">
                    02
                    </span>
                    Meet your crew
                </h1>
                <div className="md:px-20 lg:flex mt-5">
                    <div className="px-[100px] py-[25px] lg:w-[100%] lg:p-0">
                        {toggleCrewImage()}
                    </div>
                    <div className="lg:ml-[200px]">
                        <div className="flex justify-evenly my-5 md:text-[16px] md:px-[50px] py-3 lg:px-0">
                            <span className=""></span>
                            <span className=""></span>
                            <span className=""></span>
                            <span className=""></span>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Crew;