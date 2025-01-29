"use client";
import PropertyCard from "@/components/FeaturedProperty/PropertyCard";
import { Button } from "@/components/ui/button";
import { getAgentDetails } from "@/lib/store/features/agent/agentThunks";
import { getAllProperty } from "@/lib/store/features/property/propertyThunks";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../../../assets/image/loading.gif";
import { PiSpinnerGapBold } from "react-icons/pi";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(true);
  const { properties, isLoading } = useSelector((state) => state.property);
  const agent = useSelector((state) => state.agent);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  console.log(agent);
  useEffect(() => {
    dispatch(getAllProperty());
    if (id) {
      dispatch(getAgentDetails(id));
    }
    setLoading(isLoading);
    setDetailsLoading(agent.isLoading);
  }, [dispatch, id]);
  const {
    _id,
    userID,
    bio,
    licenseNumber,

    yearsOfExperience,
    officeAddress,
  } = agent.agent;

  if (detailsLoading) {
    return (
      <div className="h-[80vh] w-full flex flex-col justify-center items-center">
        <Image
          src={loadingGif}
          alt="loading"
          width={500}
          className="w-20"
        ></Image>
        <p className="text-blue-500 flex items-center gap-2">
          <PiSpinnerGapBold className="animate-spin" />
          loading...
        </p>
      </div>
    );
  } else {
    return (
      <div className=" container-main ">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded my-4">
          <Image
            width={400}
            height={400}
            alt="agent profile"
            className="w-full md:col-span-1 border rounded"
            src="http://res.cloudinary.com/mdhasib/image/upload/v1734136344/zpfk0zhzrwhisloavdhc.png"
          ></Image>
          <div className="md:col-span-2 ">
            <h2 className="text-2xl font-bold text-blue-500 my-2">
              {userID?.fullName}
            </h2>
            <p className="text-md font-bold mb-4">Real Estate Agent</p>
            <hr />
            <p className="mt-4">
              <span className="font-bold">Agent License:</span> {licenseNumber}
            </p>
            <p className="mt-2">
              <span className="font-bold">Office Address:</span> {officeAddress}
            </p>
            <p className="mt-2 mb-4">
              <span className="font-bold">Specilities: </span>Property
              Management, Real Estate Brokerage
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
            <p className="text-justify">{bio}</p>
          </div>
          <div className="md:col-span-1 bg-white p-4 rounded">
            <h2 className="text-2xl font-bold text-blue-500 my-2">Contact</h2>
            <table className="w-full ">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 font-bold">Phone</td>
                  <td className="py-2 px-4">{userID?.phone}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 font-bold">Email</td>
                  <td className="py-2 px-4">{userID?.email}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 font-bold">Office</td>
                  <td className="py-2 px-4">+8801234-123456</td>
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
  }
};

export default page;
