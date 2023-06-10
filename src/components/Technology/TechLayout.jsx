const TechLayout = ({ name, description}) => {
    return ( 
        <div className=" text-center md:px-[155px] px-5 lg:px-[0] lg:text-left ">
            <h3 className=" text-[14px] md:text-[16px] leading-[16.8px] md:leading-[19.2px] md:tracking-[2.7px] font-heading2 text-color2 tracking-[2.36px]   ">THE TERMINOLOGY…</h3>
            <h1 className="py-2 lg:py-5  font-heading1 font-normal text-[24px] leading-[28px] lg:text-[56px] lg:leading-[64px] text-color3 uppercase">{name}</h1>
            <p className=" py-2 lg:py-5 font-heading2 font-normal text-[15px] leading-[25px] md:text-[16px] md:leading-[28px]  lg:text-[18px] lg:leading-[32px] text-color2 lg:max-w-[450px] lg:max-h-[190px] lg:text-justify ">{description}</p>
        </div> 
     );
}
 
export default TechLayout;