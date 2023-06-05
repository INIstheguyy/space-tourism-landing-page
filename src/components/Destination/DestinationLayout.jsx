const DesLayout = ({ name, description, distance, travel}) => {
    return ( 
        <div>
        <div>
            <div>
            <div className=" text-color3 my-3 text-center lg:text-left">
                <p className=" py-2 font-normal md:py-5  text-5xl md:text-[80px] leading-10 text-center lg:text-left font-heading1">{name}</p>
                <p className=" py-2 font-normal font-heading3 text-color2  text-base md:text-[16px] md:px-[60px] lg:px-0 leading-6  lg:text-justify  md:tracking-widest ">{description}</p>
                <hr className=" my-5" />
                <div className=" text-center py-4 md:flex justify-around md:px-14 lg:justify-start lg:px-[0] lg:text-left ">
                    <div className="">
                        <p className=" font-heading2 text-color2 py-2 font-normal text-sm leading-none  tracking-widest uppercase">AVG. DISTANCE</p>
                        <p className=" py-2  font-normal text-2xl leading-8  uppercase font-heading1">{distance}</p>
                    </div>
                    <div className="px-28">
                        <p className=" font-heading2 text-color2 py-2 font-normal text-sm leading-none tracking-widest uppercase">Est. travel time</p>
                        <p className=" py-2 font-normal text-2xl leading-8  uppercase font-heading1">{travel}</p>
                    </div>
                </div>
            </div>
            </div>
      </div>
        </div>
     );
}
 
export default DesLayout;