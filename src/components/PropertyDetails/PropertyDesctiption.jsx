"use client";
import React from "react";
import image from "../../app/assets/image/luxury-homes1.jpg";
import Image from "next/image";
import { GrExpand } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { FiPlusCircle } from "react-icons/fi";
import { FaShower } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { ImAttachment } from "react-icons/im";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
const viewIcon = [
  {
    name: "Favourite",
    icon: <GoHeart />,
  },
  {
    name: "Share",
    icon: <AiOutlineShareAlt />,
  },
  {
    name: "Print",
    icon: <BsPrinter />,
  },
];
const shareIcon = [
  {
    name: "Favourite",
    icon: <GoHeart />,
  },
  {
    name: "Share",
    icon: <AiOutlineShareAlt />,
  },
];
const PropertyDesctiption = ({ property }) => {
  return (
    <div>
      <Image
        src={property?.image[0]}
        className="w-full h-[400px] object-cover mt-2"
        alt="home"
        width={800}
        height={600}
      />
      <div className=" w-full overflow-hidden flex gap-1 mt-1">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Image
            src={property?.image[0]}
            key={item}
            className="w-1/6  object-cover"
            alt="home"
            width={100}
            height={100}
          ></Image>
        ))}
      </div>
      <div className="my-4">
        <div className="flex justify-between">
          <div className="flex gap-2 justify-end">
            {viewIcon.map((item) => (
              <div
                key={item.name}
                className="bg-white hover:bg-black hover:text-white border border-black text-black rounded uppercase text-lg p-2  cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>

          <div className="flex gap-2 justify-end">
            {shareIcon.map((item) => (
              <div
                key={item.name}
                className="bg-white hover:bg-black hover:text-white border border-black text-black rounded uppercase text-lg p-2  cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 my-4">
          <div className="bg-green-500 text-white rounded uppercase text-xs px-2 py-1">
            Featured
          </div>
          {property?.status && (
            <div className="bg-gray-500 text-white rounded uppercase text-xs px-2 py-1">
              For {property?.status}
            </div>
          )}
        </div>
        <h2 className="text-2xl  ">{property?.title}</h2>
        <div className="flex items-center text-gray-500">
          <CiLocationOn className="text-xl mt-1" />
          {property?.location && (
            <p>
              {property?.location}, {property?.city}, {property?.divission}
            </p>
          )}
        </div>
        {property?.price && (
          <h2 className="text-2xl mt-4 mb-1 font-bold">$ {property?.price}</h2>
        )}
        {property?.size && (
          <p className="text-gray-500 text-lg ">$ {property?.size}/sq ft</p>
        )}
      </div>

      {/* Overview */}
      <div className="mt-4 bg-white p-4 rounded-md">
        <div className="flex justify-between mt-4 mb-8">
          <h3 className="text-md">Overview</h3>
          <h3 className="font-bold text-md">
            Property ID:
            <span className="font-normal text-gray-500">12345</span>
          </h3>
        </div>
        <hr />
        <div className="grid grid-cols-2 lg:grid-cols-6 items-center gap-4 my-6 text-sm">
          <div>
            {property?.appartmentType && (
              <p>
                {property?.appartmentType.charAt(0).toUpperCase() +
                  property?.appartmentType.slice(1)}
              </p>
            )}
            <p className="text-gray-500">Property Type</p>
          </div>
          {property?.bedrooms && (
            <div>
              <div className="flex items-center gap-1 ">
                <IoBedOutline className="text-lg font-normal text-gray-500" />{" "}
                {property?.bedrooms}
              </div>
              <p className="text-gray-500">Bedrooms</p>
            </div>
          )}

          {property?.bathrooms && (
            <div>
              <div className="flex items-center gap-1 ">
                <FaShower className="text-lg font-normal text-gray-500" />{" "}
                {property?.bathrooms}
              </div>
              <p className="text-gray-500">Bathrooms</p>
            </div>
          )}
          {property?.garage && (
            <div>
              <div className="flex items-center gap-1 ">
                <IoCarSportOutline className="text-lg font-normal text-gray-500" />{" "}
                {property?.garage}
              </div>
              <p className="text-gray-500">Garage</p>
            </div>
          )}
          {property?.size && (
            <div>
              <div className="flex items-center gap-1 ">
                <TbRulerMeasure className="text-lg font-normal text-gray-500" />{" "}
                {property?.size}
              </div>
              <p className="text-gray-500">Sq Ft</p>
            </div>
          )}
          <div>
            <div className="flex items-center gap-1 ">
              <IoCalendarOutline className="text-lg font-normal text-gray-500" />{" "}
              2016
            </div>
            <p className="text-gray-500">Year Built</p>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white p-4 rounded-md">
        <div className="flex justify-between mt-4 mb-8">
          <h3 className="text-md">Description</h3>
        </div>
        <hr />
        <div className="text-justify  gap-4 my-6 text-sm">
          <p className="mb-4">{property?.description}</p>
          <p>{property?.description}</p>
        </div>
      </div>
      <div className="mt-4 bg-white p-4 rounded-md">
        <div className="flex justify-between mt-4 mb-8">
          <h3 className="text-md">Video</h3>
        </div>
        <hr />
        <div className="w-full mt-4">
          <iframe
            className="w-full"
            height="350"
            src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=5LdFKnNVLG7YqxHr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PropertyDesctiption;
