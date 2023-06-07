const CrewLayout = ({role, name, description}) => {
    return ( 
        <div className=" text-center   lg:text-left ">
            <h3 className="py-2  font-heading1 font-normal text-[16px] leading-[18px] lg:text-[32px] lg:leading-[37px] text-color3 uppercase">{role}</h3>
            <h1 className="py-2  font-heading1 font-normal text-[24px] leading-[28px] lg:text-[56px] lg:leading-[64px] text-color3 uppercase">{name}</h1>
            <p className=" py-2 font-heading2 font-normal text-[15px] leading-[25px] lg:text-[18px] lg:leading-[32px] text-color2 lg:max-w-[450px] lg:max-h-[128px] lg:text-justify ">{description}</p>
        </div> 
     );
}
 
export default CrewLayout;