"use client";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAgents,
  getVerifiedAgents,
} from "@/lib/store/features/agent/agentThunks";

const Agents = () => {
  const [loading, isLoading] = useState(false);
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agent.verifiedAgents);
  useEffect(() => {
    isLoading(true);
    dispatch(getVerifiedAgents())
      .unwrap()
      .then(() => {
        isLoading(false);
      });
  }, [dispatch]);

  return (
    <div className=" container-main ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Meet Our Agents</h2>
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
            agents.map((_, index) => (
              <CarouselItem className="md:basis-1/3 lg:basis-1/4" key={index}>
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
            agents.map((agent, index) => (
              <CarouselItem className="md:basis-1/3 lg:basis-1/4" key={index}>
                <AgentCard agent={agent} />
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
