"use client";
import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/featuredCarousel";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "@/lib/store/features/property/propertyThunks";
import { Skeleton } from "../ui/skeleton";
const FeaturedProperty = () => {
  const [loading, setLoading] = useState(true);
  const { properties, isLoading } = useSelector((state) => state.property);
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProperty());
    setLoading(isLoading);
  }, [dispatch]);
  console.log("pro", properties);
  return (
    <div className=" container px-6 mx-auto lg:px-32 mt-20 ">
      <h1 className="text-md font-bold text-center text-blue-500">Featured</h1>
      <h1 className="text-2xl font-bold text-center uppercase ">Properties</h1>
      <p className="text-center text-gray-500 mb-4">
        Check out some of our latest properties.
      </p>

      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {loading &&
            [1, 2, 3].map((item) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[200px] w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          {!loading &&
            properties.map((item, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                <PropertyCard property={item} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="flex gap-2 items-center justify-end mt-6">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedProperty;
