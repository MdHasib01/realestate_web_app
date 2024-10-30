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
const TopDetails = () => {
  return (
    <div className="md:flex  justify-between my-10">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/property">Property</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Equstrian Villa</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="text-3xl mt-10 ">Equstrian Villa</h2>
        <div className="flex gap-2 my-4">
          <div className="bg-green-500 text-white rounded uppercase text-xs px-2 py-1">
            Featured
          </div>
          <div className="bg-gray-500 text-white rounded uppercase text-xs px-2 py-1">
            For Sale
          </div>
        </div>
        <div className="flex items-center text-gray-500">
          <CiLocationOn className="text-xl" />
          <p>123 Main Street, Anytown, USA</p>
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
        <h2 className="text-3xl my-4 font-bold">$ 1,500,000</h2>
        <p className="text-gray-500 text-lg ">$ 15,000/sq ft</p>
      </div>
    </div>
  );
};

export default TopDetails;
