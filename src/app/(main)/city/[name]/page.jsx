"use client";
import CitySearch from "@/components/City/CitySearch";
import PropertyCard from "@/components/FeaturedProperty/PropertyCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import {
  setCity,
  setSearch,
  setStatus,
  setType,
} from "@/lib/store/features/property/propertySlice";
import { getQueryProperty } from "@/lib/store/features/property/propertyThunks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleRight } from "react-icons/fa";
import PropertyCardLandscape from "@/components/FeaturedProperty/PropertyCardLandscape";
const page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const { properties, isLoading, type, status, search, city } = useSelector(
    (state) => state.property
  );

  console.log(properties);
  const dispatch = useDispatch();
  const searchParams = {
    type,
    status,
    search,
    city,
    divission: params?.name,
  };

  useEffect(() => {
    setLoading(isLoading);
    dispatch(setSearch(""));
    dispatch(setCity(""));
    dispatch(setStatus(""));
    dispatch(setType(""));
    dispatch(getQueryProperty(searchParams));
  }, [dispatch]);
  return (
    <div>
      <div className="sticky top-0 overflow-hidden  z-50 w-full">
        <CitySearch division={params?.name} setLoading={setLoading} />
      </div>
      <div className="container-main">
        <Breadcrumb className="my-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{params?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="text-3xl font-bold mt-2">{params?.name}</h2>
        <div className="grid gird-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="grid md:col-span-2 grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className="col-span-1">
            <div className="bg-white rounded p-6 mb-4">
              <h2 className="text-2xl font-bold mb-4">Property Type</h2>
              <ul>
                <li className="flex items-center text-blue-500 font-semibold gap-1">
                  <FaAngleRight />
                  Commercial
                </li>
                <div className="pl-6">
                  <li
                    className="flex items-center text-blue-500 font-semibold gap-1 cursor-pointer hover:text-blue-600 hover:translate-x-1 duration-300"
                    onClick={() => {
                      dispatch(setType("office"));
                      dispatch(getQueryProperty(searchParams));
                    }}
                  >
                    <FaAngleRight />
                    Office
                  </li>
                  <li
                    className="flex items-center text-blue-500 font-semibold gap-1 cursor-pointer hover:text-blue-600 hover:translate-x-1 duration-300"
                    onClick={() => {
                      dispatch(setType("shop"));
                      dispatch(getQueryProperty(searchParams));
                    }}
                  >
                    <FaAngleRight />
                    Shop
                  </li>
                  <li
                    className="flex items-center text-blue-500 font-semibold gap-1 cursor-pointer hover:text-blue-600 hover:translate-x-1 duration-300"
                    onClick={() => {
                      dispatch(setType("warehouse"));
                      dispatch(getQueryProperty(searchParams));
                    }}
                  >
                    <FaAngleRight />
                    Warehouse
                  </li>
                </div>
              </ul>
              <ul className="mt-4">
                <li className="flex items-center text-blue-500 font-semibold gap-1">
                  <FaAngleRight />
                  Residential
                </li>
                <div className="pl-6">
                  <li
                    className="flex items-center text-blue-500 font-semibold gap-1 cursor-pointer hover:text-blue-600 hover:translate-x-1 duration-300"
                    onClick={() => {
                      dispatch(setType("apartment"));
                      dispatch(getQueryProperty(searchParams));
                    }}
                  >
                    <FaAngleRight />
                    Apartment
                  </li>
                  <li
                    className="flex items-center text-blue-500 font-semibold gap-1 cursor-pointer hover:text-blue-600 hover:translate-x-1 duration-300"
                    onClick={() => {
                      dispatch(setType("house"));
                      dispatch(getQueryProperty(searchParams));
                    }}
                  >
                    <FaAngleRight />
                    House
                  </li>
                  <li
                    className="flex items-center text-blue-500 font-semibold gap-1 cursor-pointer hover:text-blue-600 hover:translate-x-1 duration-300"
                    onClick={() => {
                      dispatch(setType("studio"));
                      dispatch(getQueryProperty(searchParams));
                    }}
                  >
                    <FaAngleRight />
                    Studio
                  </li>
                  <li
                    className="flex items-center text-blue-500 font-semibold gap-1 cursor-pointer hover:text-blue-600 hover:translate-x-1 duration-300"
                    onClick={() => {
                      dispatch(setType("villa"));
                      dispatch(getQueryProperty(searchParams));
                    }}
                  >
                    <FaAngleRight />
                    Villa
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-white rounded p-6">
              <h2 className="text-2xl font-bold mb-4">Cities</h2>
              <ul>
                <li className="flex items-center text-blue-500 font-semibold gap-1 hover:text-blue-600 hover:translate-x-1 duration-300">
                  <FaAngleRight />
                  <Link href="/city/Dhaka">Dhaka</Link>
                </li>
                <li className="flex items-center text-blue-500 font-semibold gap-1 hover:text-blue-600 hover:translate-x-1 duration-300">
                  <FaAngleRight />
                  <Link href="/city/Khulna">Khula</Link>
                </li>
                <li className="flex items-center text-blue-500 font-semibold gap-1 hover:text-blue-600 hover:translate-x-1 duration-300">
                  <FaAngleRight />
                  <Link href="/city/Chittagong">Chittagong</Link>
                </li>
                <li className="flex items-center text-blue-500 font-semibold gap-1 hover:text-blue-600 hover:translate-x-1 duration-300">
                  <FaAngleRight />
                  <Link href="/city/Rajshahi">Rajshahi</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
