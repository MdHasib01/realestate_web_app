import PropertyDesctiption from "@/components/PropertyDetails/PropertyDesctiption";
import TopDetails from "@/components/PropertyDetails/TopDetails";
import React from "react";

async function getData(propertyId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/properties/${propertyId}`,
    {
      next: { revalidate: 10 },
    }
  );

  return res.json();
}
const PropertyDetails = async ({ params }) => {
  const data = await getData(params.propertyId);
  console.log(data);
  console.log(params.propertyId);
  return (
    <div className="container lg:px-32 px-2 mx-auto">
      <div className="hidden md:block">
        <TopDetails property={data.data} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <PropertyDesctiption property={data.data} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
