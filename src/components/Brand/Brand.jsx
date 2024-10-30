"use client";
import React from "react";
import { brands } from "./utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Brand = () => {
  return (
    <div className="bg-white py-10 mt-10">
      <div className="container px-6 mx-auto lg:px-32 ">
        <Carousel
          options={{ loop: true, skipSnaps: false }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {brands.map((brand) => (
              <CarouselItem className="basis-1/2 md:basis-1/5">
                <Image src={brand.image} key={brand.name}></Image>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Brand;
