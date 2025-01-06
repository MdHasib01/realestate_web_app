import React from "react";
import CItyCard from "./CItyCard";

const cities = [
  {
    id: 1,
    name: "Dhaka",
    image: "bg-[url('/explore/dhaka.jpg')]",
    properties: 12,
  },
  {
    id: 2,
    name: "Khulna",
    image: "bg-[url('/explore/rajshahi.jpg')]",
    properties: 12,
  },
  {
    id: 3,
    name: "Chittagong",
    image: "bg-[url('/explore/chittagong.jpg')]",
    properties: 12,
  },
  {
    id: 4,
    name: "Rajshahi",
    image: "bg-[url('/explore/rajshahi.jpg')]",
    properties: 12,
  },
];
const ExploreCitiesSection = () => {
  return (
    <div className="container-main">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-2xl mb-4">Explore cities</h3>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            amet ex aperiam temporibus.
          </p>
        </div>
        {cities.map((city) => (
          <CItyCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCitiesSection;
