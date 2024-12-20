import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { GoHeart } from "react-icons/go";
import Link from "next/link";
const icons = [
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
const TopDetails = ({ property }) => {
  return (
    <div className="md:flex  justify-between my-10">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/property">Property</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{property?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="text-3xl mt-10 ">{property?.title}</h2>
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
        <div className="flex items-center text-gray-500">
          <CiLocationOn className="text-xl" />
          {property?.location && (
            <p>
              {property?.location}, {property?.city}, {property?.divission}
            </p>
          )}
        </div>
      </div>
      <div className="text-end">
        <div className="flex gap-2 justify-end">
          {icons.map((item) => (
            <div
              key={item.name}
              className="bg-white hover:bg-black hover:text-white border border-black text-black rounded uppercase text-lg p-2  cursor-pointer"
            >
              {item.icon}
            </div>
          ))}
        </div>
        {property?.price && (
          <h2 className="text-3xl my-4 font-bold">$ {property?.price}</h2>
        )}
        {property?.size && (
          <p className="text-gray-500 text-lg ">$ {property?.size}/sq ft</p>
        )}
      </div>
    </div>
  );
};

export default TopDetails;
