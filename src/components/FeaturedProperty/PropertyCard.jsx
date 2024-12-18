import React from "react";
import image from "../../app/assets/image/luxury-homes1.jpg";
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
import Link from "next/link";
import getRelativeTime from "../../../utils/getRelativeTime";
import formatDate from "../../../utils/formatDate";

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

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg border  relative">
      <div className="h-[280px] overflow-hidden rounded-t-lg relative">
        <img
          className="bg-gray-500 h-[280px] object-cover w-full rounded-t-lg hover:scale-105 ease-in-out duration-500"
          src={property?.image[0]}
          alt="home"
        ></img>
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
        <Link href="/property/Spacious Apartment">
          <h2 className="text-xl hover:text-blue-500 duration-300 font-bold">
            {property.title}
          </h2>
        </Link>
        {property?.location && (
          <p className="text-blue-500 underline cursor-pointer my-2 flex items-center gap-2">
            <FaLocationDot className="text-blue-500" />
            {property?.location}, {property?.city}, {property?.divission}
          </p>
        )}
        {property?.createdAt && (
          <p className="text-sm text-gray-500 flex">
            <span className="text-black">Added:</span>
            <p>{formatDate(property?.createdAt)}</p>
          </p>
        )}
        <div className="flex items-center gap-4 my-2 text-sm">
          {property?.bedrooms && (
            <div className="flex items-center gap-1 ">
              <IoBedOutline className="text-xl" /> {property?.bedrooms}
            </div>
          )}
          {property?.bathrooms && (
            <div className="flex items-center gap-1 text-sm">
              <FaShower className="text-xl" /> {property?.bathrooms}
            </div>
          )}
          {property?.garage && (
            <div className="flex items-center gap-1 text-sm">
              <FaCar className="text-xl" /> {property?.garage}
            </div>
          )}
          {property?.size && (
            <div className="flex items-center gap-1 text-sm">
              <TbRulerMeasure className="text-xl" /> {property?.size} Sq Ft
            </div>
          )}
        </div>
        <p className="text-xs uppercase ">APARTMENT</p>
      </div>
      <hr />
      <div className="flex justify-between text-gray-700 items-center p-4">
        {property?.ownerDetails && (
          <div className="flex items-center gap-2 text-sm">
            {property?.ownerDetails?.avatar ? (
              <img
                src={property?.ownerDetails?.avatar}
                className="w-8 h-8 rounded rounded-full p-1 border"
                alt="profile"
              />
            ) : (
              <CgProfile className="text-xl" />
            )}
            <p>{property?.ownerDetails?.fullName}</p>
          </div>
        )}
        <div className="flex items-center gap-1 text-sm">
          <ImAttachment className="text-xl" />
          <p>{getRelativeTime(property?.createdAt || new Date())}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
