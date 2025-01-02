"use client";
import PropertyCard from "@/components/FeaturedProperty/PropertyCard";
import { Button } from "@/components/ui/button";
import { getAllProperty } from "@/lib/store/features/property/propertyThunks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const [loading, setLoading] = useState(true);
  const { properties, isLoading } = useSelector((state) => state.property);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProperty());
    setLoading(isLoading);
  }, [dispatch]);
  return (
    <div className=" container px-4 mx-auto lg:px-32 max-w-7xl mt-20 ">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded my-4">
        <Image
          width={400}
          height={400}
          alt="agent profile"
          className="w-full md:col-span-1 border rounded"
          src="http://res.cloudinary.com/mdhasib/image/upload/v1734136344/zpfk0zhzrwhisloavdhc.png"
        ></Image>
        <div className="md:col-span-2 ">
          <h2 className="text-2xl font-bold text-blue-500 my-2">John Doe</h2>
          <p className="text-md font-bold mb-4">Real Estate Agent</p>
          <hr />
          <p className="mt-4">
            <span className="font-bold">Agent License:</span> 12345
          </p>
          <p className="mt-2">
            <span className="font-bold">Tax Number:</span> 12345
          </p>
          <p className="mt-2 mb-4">
            <span className="font-bold">Specilities: </span>Property Management,
            Real Estate Brokerage
          </p>
          <div className="flex gap-4">
            <Button className="w-28">Send Email</Button>
            <Button variant="outline" className="w-28">
              Call
            </Button>
          </div>
        </div>
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-3 gap-4   my-4">
        <div className="md:col-span-2 bg-white p-4 rounded">
          <h2 className="text-2xl font-bold text-blue-500 my-2">About me</h2>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            facere quidem enim minima nostrum voluptatibus corporis voluptas
            magnam dolores deleniti mollitia vel obcaecati, eius, saepe
            repellendus iusto? Deleniti alias velit modi asperiores minima
            dicta, iste, omnis iure veniam veritatis sint. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Maiores excepturi a aut
            suscipit minus eum recusandae eveniet vero cumque facere non saepe
            nisi sint accusamus laudantium dignissimos dolore, voluptas
            praesentium sapiente. Aliquid error animi quod natus, nulla non
            amet! Voluptatem, laborum quod reiciendis esse cupiditate dolore at
            corrupti, suscipit sint molestias voluptatum rerum quasi maxime,
            quaerat culpa doloribus deleniti quo delectus exercitationem et est!
            Non, ullam? Illo repellat itaque in dolore eum, iure perspiciatis?
            Tempore deleniti sint exercitationem quae qui, eaque, quos fugiat
            earum id rerum culpa. Similique illo autem consequatur laboriosam,
            reprehenderit, quisquam impedit, facilis esse asperiores consectetur
            eaque.
          </p>
        </div>
        <div className="md:col-span-1 bg-white p-4 rounded">
          <h2 className="text-2xl font-bold text-blue-500 my-2">Contact</h2>
          <table className="w-full ">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 font-bold">Phone</td>
                <td className="py-2 px-4">+1234567890</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 font-bold">Email</td>
                <td className="py-2 px-4">john@example.com</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 font-bold">Office</td>
                <td className="py-2 px-4">123 234</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-3 gap-4   my-4">
        <div className="md:col-span-2 bg-white p-4 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {properties.map((item, index) => (
              <PropertyCard key={index} property={item} />
            ))}
          </div>
        </div>
        <div className="md:col-span-1 bg-white p-4 rounded">
          <h2 className="text-2xl font-bold text-blue-500 my-2">Featured</h2>
          {properties.map((item, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <Image
                src={item.image[0]}
                width={100}
                height={100}
                className="rounded"
              ></Image>
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-sm">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
