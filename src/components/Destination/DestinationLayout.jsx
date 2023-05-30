const DesLayout = ({image, name, description, distance, travel}) => {
    return ( 
        <div>
        <div>
        <div>
          <img src={image} alt="" className="" />
        </div>
        <div>
          <div className=" text-color3">
            <p className=" py-2 font-normal  text-5xl leading-10 text-center font-heading1">{name}</p>
            <p className=" py-2 font-normal font-heading2  text-base leading-6 text-center">{description}</p>
            <p className=" py-2">{distance}</p>
            <p className=" py-2">{travel}</p>
          </div>
        </div>
      </div>
        </div>
     );
}
 
export default DesLayout;