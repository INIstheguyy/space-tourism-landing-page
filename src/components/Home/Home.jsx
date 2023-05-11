import Navbar from "../Navbar";
import './home.css'
import { useState } from 'react'

const Home = () => {
    const [isHover, setIsHover] = useState(false)

    function toggle (){
        alert('Toggle')
        setIsHover(!isHover)
    }
    return ( 
        <div className="home-desktop w-full h-full">
            <Navbar/>
            <div className=" flex  flex-wrap px-[10vw] pt-[13vw] ">
                <div className=" flex-1 max-w-[450px] max-h-[382px] ">
                    <p className=" text-color2 font-normal text-[28px] tracking-[1.725px] leading-[34px] font-heading1 ">SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className=" text-color3 text-[150px] leading-[150px] font-heading1 ">SPACE</h1>
                    <p className="text-color2 font-heading2 text-[18px] leading-[32px] ">
                        Let’s face it; if you want to go to space,
                        you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, 
                        and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className=" flex-1 flex justify-end">
                    <div className=" bg-color3 flex justify-center items-center w-[274px] h-[274px] rounded-full">
                        <h1 className="  font-heading1 font-medium text-2xl leading-9 tracking-wider cursor-pointer" onMouseEnter={toggle} onMouseOut={toggle}>EXPLORE</h1>
                    </div>  
                </div>
            </div>
        </div>
     );
}
 
export default Home;