import React from "react";

import FeaturedPropertyCard from "./FeaturedPropertyCard";
const FeaturedProperty = () => {
  return (
    <div className="container px-2 mx-auto md:px-32 mt-20 ">
      <h1 className="text-md font-bold text-center text-blue-500">Featured</h1>
      <h1 className="text-2xl font-bold text-center uppercase ">Properties</h1>
      <p className="text-center text-gray-500">
        Check out some of our latest properties.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-12 mb-20">
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
      </div>
    </div>
  );
};

export default FeaturedProperty;
