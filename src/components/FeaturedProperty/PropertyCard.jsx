import React from "react";
import image from "../../app/assets/image/banner.jpg";
import Image from "next/image";
import { GrExpand } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { FiPlusCircle } from "react-icons/fi";
import { FaShower } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { ImAttachment } from "react-icons/im";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const tooltip = [
  {
    id: 1,
    title: "Preview",
    icon: <GrExpand />,
  },
  {
    id: 2,
    title: "Favorite",
    icon: <GoHeart />,
  },
  {
    id: 3,
    title: "Compare",
    icon: <FiPlusCircle />,
  },
];
const PropertyCard = () => {
  return (
    <div className="bg-white rounded-lg drop-shadow-xl relative">
      <div className="h-[280px] overflow-hidden rounded-t-lg relative">
        <Image
          className="bg-gray-500 h-[280px] object-cover rounded-t-lg hover:scale-105 ease-in-out duration-500"
          src={image}
        ></Image>
        <div className="absolute bottom-2 right-2 flex gap-2">
          {tooltip.map((item) => (
            <TooltipProvider key={item.id}>
              <Tooltip>
                <TooltipTrigger className="bg-[#00000084] text-white rounded text-lg hover:bg-[#00000599] p-1">
                  {item.icon}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      <div className="absolute top-2 left-2 bg-green-500 text-white rounded text-xs px-2 py-1">
        Featured
      </div>
      <div className="absolute top-2 right-2 bg-[#00000084] text-white rounded text-xs px-2 py-1">
        For Rent
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">Spacious Apartment</h2>
        <p className="text-blue-500 underline cursor-pointer my-2 flex items-center gap-2">
          <FaLocationDot className="text-blue-500" />
          435 Southwest 12th Avenue, Miami, FL
        </p>
        <p className="text-sm text-gray-500">
          <span className="text-black">Added:</span> June 13, 2020
        </p>
        <div className="flex items-center gap-4 my-2 text-sm">
          <div className="flex items-center gap-1 ">
            <IoBedOutline className="text-xl" /> 3
          </div>
          <div className="flex items-center gap-1 text-sm">
            <FaShower className="text-xl" /> 3
          </div>
          <div className="flex items-center gap-1 text-sm">
            <FaCar className="text-xl" /> 1
          </div>
          <div className="flex items-center gap-1 text-sm">
            <TbRulerMeasure className="text-xl" /> 2400 Sq Ft
          </div>
        </div>
        <p className="text-xs uppercase ">APARTMENT</p>
      </div>
      <hr />
      <div className="flex justify-between text-gray-700 items-center p-4">
        <div className="flex items-center gap-1 text-sm">
          <CgProfile className="text-xl" />
          <p>Mike Taison</p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <ImAttachment className="text-xl" />
          <p>1 Month Ago</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
