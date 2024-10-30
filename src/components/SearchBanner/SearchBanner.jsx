import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Reveal from "../ui/Motion/Reveal";

const SearchBanner = () => {
  return (
    <>
      <div className="bg-white-100 flex items-center justify-center mx-auto  rounded-md px-2 lg:px-32 drop-shadow">
        <button className="bg-blue-500 bg-opacity-80 text-white px-4 py-2 font-bold hover:bg-blue-500 hover:bg-opacity-80 rounded-t-md hover:text-white mr-1">
          All Status
        </button>
        <button className="bg-white px-4 py-2 font-bold hover:bg-blue-500 hover:bg-opacity-80 rounded-t-md hover:text-white mr-1">
          For Sell
        </button>
        <button className="bg-white px-4 py-2  font-bold hover:bg-blue-500 hover:bg-opacity-80 rounded-t-md hover:text-white ">
          For Rent
        </button>
      </div>
      <div className="search bg-white p-8  rounded-md mx-2 md:mx-32 drop-shadow-2xl grid grid-cols-1 gap-4 md:grid-cols-5">
        <div>
          <Reveal>
            <label className="uppercase text-sm">Looking For</label>
          </Reveal>
          <Input
            className="border-slate-400"
            placeholder="Property Type"
          ></Input>
        </div>
        <div>
          <Reveal>
            <label className="uppercase text-sm">Location</label>
          </Reveal>
          <Input className="border-slate-400" placeholder="All cities"></Input>
        </div>
        <div>
          <Reveal>
            <label className="uppercase text-sm">Property size</label>
          </Reveal>
          <Input className="border-slate-400" placeholder="Bedrooms"></Input>
        </div>
        <div>
          <Reveal>
            <label className="uppercase text-sm">Your budget</label>
          </Reveal>
          <Input className="border-slate-400" placeholder="Max. Price"></Input>
        </div>

        <div className="flex items-end">
          <Button className="w-full uppercase">Search</Button>
        </div>
      </div>
    </>
  );
};

export default SearchBanner;
