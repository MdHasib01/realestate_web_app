"use client";
import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getQueryProperty } from "@/lib/store/features/property/propertyThunks";
import { useDispatch, useSelector } from "react-redux";
import {
  setCity,
  setSearch,
  setStatus,
  setType,
} from "@/lib/store/features/property/propertySlice";

import cities from "../../../public/explore/city.json";
const CitySearch = ({ division, setLoading }) => {
  const dispatch = useDispatch();
  const { type, status, search, city, isLoading } = useSelector(
    (state) => state.property
  );
  const searchParams = {
    type,
    status,
    search,
    city,
    divission: division,
  };

  return (
    <div className="bg-blue-900 container-main p-4 grid md:grid-cols-8 gap-2">
      <div className="md:col-span-5">
        <div className="relative">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            type="text"
            className=" w-full bg-white"
            placeholder="Enter Keyword..."
            style={{ paddingLeft: "2.5rem" }}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
      </div>
      <div className="md:col-span-3 grid grid-cols-3 gap-2">
        <Select
          className="bg-white"
          onValueChange={(value) => dispatch(setCity(value))}
        >
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            {cities[division]?.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          className="bg-white"
          onValueChange={(value) => {
            dispatch(setStatus(value));
          }}
        >
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rent">Rent</SelectItem>
            <SelectItem value="sale">Sale</SelectItem>
            <SelectItem value="sold">Sold</SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => {
            dispatch(getQueryProperty(searchParams));
            setLoading(isLoading);
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default CitySearch;
