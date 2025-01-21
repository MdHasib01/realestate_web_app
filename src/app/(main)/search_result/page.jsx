"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropertyCard from "@/components/FeaturedProperty/PropertyCard";

import { Skeleton } from "@/components/ui/skeleton";

import { getQueryProperty } from "@/lib/store/features/property/propertyThunks";
import Link from "next/link";

import { FaAngleRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { setSearch } from "@/lib/store/features/property/propertySlice";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import cities from "../../../../public/explore/city.json";
const page = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const { type, status, search, city, divission, properties, isLoading } =
    useSelector((state) => state.property);
  const searchParams = {
    type,
    status,
    search,
    city,
    divission,
  };
  useEffect(() => {
    dispatch(getQueryProperty(searchParams));
    setLoading(isLoading);
  }, [dispatch]);
  return (
    <div className="container-main">
      <div className="grid gird-cols-1 md:grid-cols-5 gap-4 my-8">
        <div className="md:col-span-2 bg-blue-300"></div>
        <div className=" md:col-span-3">
          {/* ------------Search cities options starts---------- */}

          <div className="bg-white mb-4">
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
            <div className="grid gird-cols-4 md:grid-cols-2">
              <Select
                className="bg-white"
                onValueChange={(value) => dispatch(setCity(value))}
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  {cities[divission]?.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* ------------Search cities options ends---------- */}
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
            {loading
              ? [1, 2, 3, 4].map((item) => (
                  <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[200px] w-full rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))
              : properties.map((item) => <PropertyCard property={item} />)}
            {!loading && properties.length === 0 && (
              <h2 className="text-2xl font-bold text-center">
                No Properties Found
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
