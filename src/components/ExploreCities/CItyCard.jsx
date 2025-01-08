"use client";
import React, { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Aos from "aos";
const CItyCard = ({ city }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className={` h-[350px] md:h-[500px] ${city.image} bg-cover bg-center rounded cursor-pointer`}
      data-aos="fade-left"
    >
      <div className="p-4 h-full text-white flex flex-col justify-between h-full bg-black bg-opacity-30 hover:bg-opacity-0 duration-300 rounded">
        <div>
          <p className="text-sm">{city.properties} Properties</p>
          <h2 className="text-2xl font-bold">{city.name}</h2>
        </div>
        <div className="w-full flex justify-between items-center">
          <p>More Details</p>
          <FaPlay />
        </div>
      </div>
    </div>
  );
};

export default CItyCard;
