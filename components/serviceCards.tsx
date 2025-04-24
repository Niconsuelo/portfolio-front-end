import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  ServiceCardProps from "../app/models/serviceCardProps"



const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="lg:pr-10 pr-4 hover:scale-105 lg:mt-2 mt-4 grid grid-rows-3 grid-flow-col bg-slate-200 bg-opacity-10 lg:w-[90%] w-full p-4 lg:p-6 shadow-[4px_4px_0px_#EC3d65] lg:shadow-[4px_4px_0px_#F6F7FB] hover:bg-gradient-to-b hover:from-[#FA5252] hover:to-[#DD2476] transition-all duration-700 ease-in-out">
      <h1 className="text-white row-span-3 flex justify-center items-center mr-4">
        <FontAwesomeIcon
          className="text-black text-xs lg:p-4 p-3 sm:p-2 hover:text-red-500 transition duration-300 bg-white lg:h-8 lg:w-8 h-4 w-4 border-2 border-black"
          icon={icon}
        />
      </h1>
      <h3 className="ml-1 lg:ml-4 uppercase text-white text-h3 md:text-h3-md lg:text-h3-lg col-span-2 flex items-center">
        {title}
      </h3>
      <p className="ml-1 lg:ml-4 border-t-2 border-gray-50 text-p1 md:text-p1-md lg:text-p1-lg row-span-2 col-span-2 text-white font-thin pb-4 pt-4">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;