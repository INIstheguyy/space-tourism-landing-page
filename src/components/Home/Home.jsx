import Navbar from "../Navbar";
import './home.css'
// import { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home-desktop  w-full h-full">
         <Navbar/>
         <main>
            <div className=" flex flex-col lg:flex-row justify-center text-center items-center pt-1 lg:pt-[10vh] ">
            <div className="mt-[56px] max-w-[450px] lg:text-left lg:mr-[150px] p-5 lg:p-0">
            <h3 className="text-color2 font-heading2 font-normal lg:text-[28px] lg:py-[30px] pl-1 text-base leading-[19px] text-left tracking-[2.7px]">SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="text-color3 font-heading1 lg:text-[150px] font-medium text-8xl leading-[100px] text-left lg:py-[30px] ">SPACE</h1>
            <p className="text-color2 font-heading2 font-normal lg:text-[18px] text-base leading-[25px] text-left lg:text-left">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
              Well sit back, and relax because 
              we’ll give you a truly out of this world experience!
            </p>
          </div>
          
                <div className="  md:pt-10 lg:ml-[150px] ">
                    <div className=" parent-container ">
                        <div className=" child-container ">
                            <h1 className=" font-heading1 font-medium text-lg leading-[23px] text-center tracking-[1.25px] text-color1 "><Link to='/destination'>EXPLORE</Link></h1>
                        </div>
                    </div>   
                </div>
            </div>
         </main> 
        </div>
     );
}
 
export default Home;

