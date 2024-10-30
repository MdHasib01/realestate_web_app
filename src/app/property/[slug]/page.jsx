import PropertyDesctiption from "@/components/PropertyDetails/PropertyDesctiption";
import TopDetails from "@/components/PropertyDetails/TopDetails";
import React from "react";

const PropertyDetails = () => {
  return (
    <div className="container lg:px-32 px-2 mx-auto">
      <div className="hidden md:block">
        <TopDetails />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <PropertyDesctiption />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
