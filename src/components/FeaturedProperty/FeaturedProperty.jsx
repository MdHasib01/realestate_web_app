"use client";
import React from "react";
import PropertyCard from "./PropertyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/featuredCarousel";
import Autoplay from "embla-carousel-autoplay";
const FeaturedProperty = () => {
  return (
    <div className="container px-6 mx-auto md:px-32 mt-20 ">
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
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <CarouselItem className="md:basis-1/3" key={item}>
              <PropertyCard />
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
