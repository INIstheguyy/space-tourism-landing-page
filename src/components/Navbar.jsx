import icon from '../components/assets/images/icon.png'
const Navbar = () => {
    return ( 
        <nav className=' bg-transparent w-full flex py-6 justify-between items-center  '>
            <img src={icon} alt="" className=" w-[48px] h-[48px] ml-[55px]   " />
            <div className='flex items-center'>
                <hr className=' text-color3 w-[473px] max-h-[10px] lg:block hidden  '/>
                <div className='list-container pr-[8vw] pl-[7vw] pt-[29px] pb-[28px] '>
                    <ul className='list-none sm:list-none sm:flex  justify-end items-center flex-1 flex-wrap  bg-opacity-4 backdrop-blur-41  '>
                        <li className=' text-white  mr-10  h-[19px] text-base font-normal tracking-widest leading-tight font-heading2'> <span className='text-base font-semibold tracking-widest leading-tight'>00</span> HOME</li>
                        <li className=' text-white  mr-10  h-[19px] text-base font-normal tracking-widest leading-tight font-heading2'> <span className='text-base font-semibold tracking-widest leading-tight'>01</span> DESTINATION</li>
                        <li className=' text-white  mr-10  h-[19px] text-base font-normal tracking-widest leading-tight font-heading2'> <span className='text-base font-semibold tracking-widest leading-tight'>02</span> CREW</li>
                        <li className=' text-white  mr-24  h-[19px] text-base font-extralight tracking-widest leading-tight font-heading2'> <span className='text-base font-bold tracking-widest leading-tight'>03</span> TECHNOLOGY</li>
                    </ul>
                </div> 
            </div>
        </nav>
     );
}
 
export default Navbar;