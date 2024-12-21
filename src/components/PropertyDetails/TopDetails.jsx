"use client";
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
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/lib/store/features/favourites/favouritesSlice";

const TopDetails = ({ property }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.includes(property._id);
  const handleClick = () => {
    dispatch(toggleFavorite(property._id));
  };
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
          <div
            onClick={handleClick}
            className={`${isFavorite ? "text-red-500" : "text-black"} ${
              isFavorite ? "bg-black" : "bg-white "
            } hover:bg-black hover:text-red-500 border border-black  rounded uppercase text-lg p-2  cursor-pointer`}
          >
            <GoHeart />
          </div>
          <div className="bg-white hover:bg-black hover:text-white border border-black text-black rounded uppercase text-lg p-2  cursor-pointer">
            <AiOutlineShareAlt />
          </div>
          <div className="bg-white hover:bg-black hover:text-white border border-black text-black rounded uppercase text-lg p-2  cursor-pointer">
            <BsPrinter />
          </div>
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
