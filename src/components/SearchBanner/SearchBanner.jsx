"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Reveal from "../ui/Motion/Reveal";
import cities from "../../../public/explore/city.json";
import { useDispatch } from "react-redux";
import {
  setCity,
  setDivision,
  setStatus,
  setType,
} from "@/lib/store/features/property/propertySlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";
const SearchBanner = () => {
  const dispatch = useDispatch();
  const [selectDivision, setSelectDivision] = useState("");
  const allDivission = Object.keys(cities);
  const allCities = Object.values(cities).flat();
  const appartmentType = ["house", "shop", "office", "apartment", "villa"];
  const [selectedStatus, setSelectedStatus] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="bg-white-100 flex items-center justify-center mx-auto rounded-md px-2 lg:px-32 drop-shadow">
        <button
          className={`${
            selectedStatus === "sell"
              ? "bg-white text-black"
              : "bg-blue-500 bg-opacity-80 text-white"
          }   px-4 py-2 font-bold  rounded-t-md  mr-1`}
          onClick={() => {
            setSelectedStatus("sell");
            setStatus("sell");
          }}
        >
          For Sell
        </button>
        <button
          className={`${
            selectedStatus === ""
              ? "bg-white text-black"
              : "bg-blue-500 bg-opacity-80 text-white"
          }   px-4 py-2 font-bold  rounded-t-md  mr-1`}
          onClick={() => {
            setSelectedStatus("");
          }}
        >
          All Status
        </button>
        <button
          className={`${
            selectedStatus === "rent"
              ? "bg-white text-black"
              : "bg-blue-500 bg-opacity-80 text-white"
          }   px-4 py-2 font-bold  rounded-t-md  mr-1`}
          onClick={() => {
            setSelectedStatus("rent");
            setStatus("rent");
          }}
        >
          For Rent
        </button>
      </div>
      <div className="search bg-white p-8 rounded-md mx-2 md:mx-32 drop-shadow-2xl grid grid-cols-1 gap-4 md:grid-cols-5">
        <div>
          <Reveal>
            <label className="uppercase text-sm">Looking For</label>
          </Reveal>
          <Select
            className="bg-white "
            onValueChange={(value) => {
              dispatch(setType(value));
            }}
          >
            <SelectTrigger className=" bg-white">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {appartmentType.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Reveal>
            <label className="uppercase text-sm">Division</label>
          </Reveal>
          <Select
            className="col-span-1 bg-white"
            onValueChange={(value) => {
              dispatch(setDivision(value));
              setSelectDivision(value);
            }}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Division" />
            </SelectTrigger>
            <SelectContent>
              {allDivission?.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Reveal>
            <label className="uppercase text-sm">City</label>
          </Reveal>
          <Select
            className="col-span-1 bg-white"
            onValueChange={(value) => dispatch(setCity(value))}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              {(selectDivision === "" ? allCities : cities[selectDivision]).map(
                (city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Reveal>
            <label className="uppercase text-sm">Your budget</label>
          </Reveal>
          <Input className="border-slate-400" placeholder="Max. Price"></Input>
        </div>
        <div className="flex items-end">
          <Button
            className="w-full uppercase"
            onClick={() => router.push("/search_result")}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchBanner;
