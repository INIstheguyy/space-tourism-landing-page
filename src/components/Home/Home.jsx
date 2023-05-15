import Navbar from "../Navbar";
import './home.css'
// import { useState } from 'react'

const Home = () => {
    return ( 
        <div className="home-desktop  w-full h-full">
         <Navbar/>
         <main>
            <div className=" flex flex-col lg:flex-row items-center pt-1 ">
                <div className=" px-[24px] pt-[56px] max-w-[450px] ">
                    <h3 className=" text-color2 font-heading2 font-normal  text-base leading-[19px] text-center tracking-[2.7px]">SO, YOU WANT TO TRAVEL TO</h3>
                    <h1 className=" text-color3 font-heading1  font-medium text-8xl leading-[100px] text-center">SPACE</h1>
                    <p className=" text-color2 font-heading1 font-normal text-base leading-[25px] text-center">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
                        Well sit back, and relax because 
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className=" pt-5 md:pt-10">
                    <div className=" parent-container ">
                        <div className=" child-container ">
                            <h1 className=" font-heading1 font-medium text-lg leading-[23px] text-center tracking-[1.25px] text-color1">EXPLORE</h1>
                        </div>
                    </div>   
                </div>
            </div>
         </main> 
        </div>
     );
}
 
export default Home;

