const CrewLayout = ({role, name, description}) => {
    return ( 
        <div className=" text-center  p-5 lg:text-left">
            <h3 className="py-2  font-heading1 font-normal text-[16px] leading-[18px] text-color3 uppercase">{role}</h3>
            <h1 className="py-2  font-heading1 font-normal text-[24px] leding-[28px] text-color3 uppercase">{name}</h1>
            <p className=" py-2 font-heading2 font-normal text-[15px] leading-[25px] text-color2 ">{description}</p>
        </div> 
     );
}
 
export default CrewLayout;