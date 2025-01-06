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
import { getQueryProperty } from "@/lib/store/features/property/propertyThunks";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = ({ params }) => {
  const properties = useSelector((state) => state.property.properties);
  console.log(properties);
  const dispatch = useDispatch();
  const searchParams = {
    search: "villa",
    city: "Jashore",
    divission: params?.name,
  };
  useEffect(() => {
    dispatch(getQueryProperty(searchParams));
  }, [dispatch]);
  return (
    <div>
      <div className="sticky top-0 overflow-hidden  z-50 w-full">
        <CitySearch />
      </div>
      <div className="container-main">
        <Breadcrumb>
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
        <h2 className="text-3xl font-bold">{params?.name}</h2>
        <div className="grid gird-cols-1 md:grid-cols-3 gap-4">
          <div className="grid md:col-span-2 grid-cols-1 md:grid-cols-2 gap-4">
            {properties.map((item) => (
              <PropertyCard property={item} />
            ))}
          </div>
          <div className="col-span-1 bg-white rounded"></div>
        </div>
      </div>
    </div>
  );
};
export default page;
