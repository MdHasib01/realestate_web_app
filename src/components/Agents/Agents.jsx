"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import AgentCard from "./AgentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/featuredCarousel";
import { Skeleton } from "../ui/skeleton";
import Autoplay from "embla-carousel-autoplay";

const Agents = () => {
  const [loading, isLoading] = useState(false);
  return (
    <div className=" container-main ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Meet Out Agents</h2>
        <p className="text-gray-500 mb-10 mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
          facere.
        </p>
      </div>

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
                <div className=" flex flex-col justify-center items-center space-y-2">
                  <Skeleton className=" w-32 h-32 p-6 rounded-full" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-2 w-3/4 mb-2" />
                  <Skeleton className="h-2 w-full" />
                  <Skeleton className="h-2 w-full" />
                  <Skeleton className="h-2 w-3/4 mb-2" />
                  <Skeleton className="h-6 w-full" />
                </div>
              </CarouselItem>
            ))}
          {!loading &&
            [1, 2, 3, 4, 5, 6].map((index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                <AgentCard />
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

export default Agents;
