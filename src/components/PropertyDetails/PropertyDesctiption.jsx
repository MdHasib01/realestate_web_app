"use client";
import React from "react";
import image from "../../app/assets/image/luxury-homes1.jpg";
import Image from "next/image";
import { GrExpand } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { FiPlusCircle } from "react-icons/fi";
import { FaShower } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { ImAttachment } from "react-icons/im";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
const viewIcon = [
  {
    name: "Favourite",
    icon: <GoHeart />,
  },
  {
    name: "Share",
    icon: <AiOutlineShareAlt />,
  },
  {
    name: "Print",
    icon: <BsPrinter />,
  },
];
const shareIcon = [
  {
    name: "Favourite",
    icon: <GoHeart />,
  },
  {
    name: "Share",
    icon: <AiOutlineShareAlt />,
  },
];
const PropertyDesctiption = () => {
  return (
    <div>
      <Image
        src={image}
        className="w-full h-[400px] object-cover mt-2"
        alt="home"
      />
      <div className=" w-full overflow-hidden flex gap-1 mt-1">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Image
            src={image}
            key={item}
            className="w-1/6  object-cover"
            alt="home"
          ></Image>
        ))}
      </div>
      <div className="my-4">
        <div className="flex justify-between">
          <div className="flex gap-2 justify-end">
            {viewIcon.map((item) => (
              <div
                key={item.name}
                className="bg-white hover:bg-black hover:text-white border border-black text-black rounded uppercase text-lg p-2  cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>

          <div className="flex gap-2 justify-end">
            {shareIcon.map((item) => (
              <div
                key={item.name}
                className="bg-white hover:bg-black hover:text-white border border-black text-black rounded uppercase text-lg p-2  cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 my-4">
          <div className="bg-green-500 text-white rounded uppercase text-xs px-2 py-1">
            Featured
          </div>
          <div className="bg-gray-500 text-white rounded uppercase text-xs px-2 py-1">
            For Sale
          </div>
        </div>
        <h2 className="text-2xl  ">Equstrian Villa</h2>
        <div className="flex items-center text-gray-500">
          <CiLocationOn className="text-xl mt-1" />
          <p>123 Main Street, Anytown, USA</p>
        </div>
        <h2 className="text-2xl mt-4 mb-1 font-bold">$ 1,500,000</h2>
        <p className="text-gray-500 text-lg ">$ 15,000/sq ft</p>
      </div>

      {/* Overview */}
      <div className="mt-4 bg-white p-4 rounded-md">
        <div className="flex justify-between mt-4 mb-8">
          <h3 className="text-md">Overview</h3>
          <h3 className="font-bold text-md">
            Property ID:
            <span className="font-normal text-gray-500">12345</span>
          </h3>
        </div>
        <hr />
        <div className="grid grid-cols-2 lg:grid-cols-6 items-center gap-4 my-6 text-sm">
          <div>
            <p>Villa</p>
            <p className="text-gray-500">Property Type</p>
          </div>
          <div>
            <div className="flex items-center gap-1 ">
              <IoBedOutline className="text-lg font-normal text-gray-500" /> 3
            </div>
            <p className="text-gray-500">Property Type</p>
          </div>

          <div>
            <div className="flex items-center gap-1 ">
              <FaShower className="text-lg font-normal text-gray-500" /> 3
            </div>
            <p className="text-gray-500">Bathrooms</p>
          </div>
          <div>
            <div className="flex items-center gap-1 ">
              <IoCarSportOutline className="text-lg font-normal text-gray-500" />{" "}
              1
            </div>
            <p className="text-gray-500">Garage</p>
          </div>
          <div>
            <div className="flex items-center gap-1 ">
              <TbRulerMeasure className="text-lg font-normal text-gray-500" />{" "}
              1200
            </div>
            <p className="text-gray-500">Sq Ft</p>
          </div>
          <div>
            <div className="flex items-center gap-1 ">
              <IoCalendarOutline className="text-lg font-normal text-gray-500" />{" "}
              2016
            </div>
            <p className="text-gray-500">Year Built</p>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white p-4 rounded-md">
        <div className="flex justify-between mt-4 mb-8">
          <h3 className="text-md">Description</h3>
        </div>
        <hr />
        <div className="text-justify  gap-4 my-6 text-sm">
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            asperiores delectus ad deserunt, animi eum eveniet, praesentium,
            adipisci veniam eos ullam voluptates iure! Blanditiis iusto
            quibusdam numquam id dicta! Excepturi repudiandae voluptates
            voluptatem qui eveniet laborum, voluptas ipsa praesentium. Commodi
            at nihil alias recusandae, magnam illum nam quos doloremque,
            repellendus quia, mollitia veritatis necessitatibus possimus
            perspiciatis quo error consequuntur non veniam pariatur doloribus
            quaerat quas? Blanditiis, nisi cumque necessitatibus adipisci labore
            possimus nam facere ipsum culpa repudiandae cupiditate fugiat magni
            voluptas distinctio asperiores atque ea odit veritatis, dolorem
            sequi. Nesciunt deleniti tempore inventore mollitia asperiores minus
            perferendis magnam consectetur repudiandae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            asperiores delectus ad deserunt, animi eum eveniet, praesentium,
            adipisci veniam eos ullam voluptates iure! Blanditiis iusto
            quibusdam numquam id dicta! Excepturi repudiandae voluptates
            voluptatem qui eveniet laborum, voluptas ipsa praesentium. Commodi
            at nihil alias recusandae, magnam illum nam quos doloremque,
            repellendus quia, mollitia veritatis necessitatibus possimus
            perspiciatis quo error consequuntur non veniam pariatur doloribus
            quaerat quas? Blanditiis, nisi cumque necessitatibus adipisci labore
            possimus nam facere ipsum culpa repudiandae cupiditate fugiat magni
            voluptas distinctio asperiores atque ea odit veritatis, dolorem
            sequi. Nesciunt deleniti tempore inventore mollitia asperiores minus
            perferendis magnam consectetur repudiandae!
          </p>
        </div>
      </div>
      <div className="mt-4 bg-white p-4 rounded-md">
        <div className="flex justify-between mt-4 mb-8">
          <h3 className="text-md">Video</h3>
        </div>
        <hr />
        <div className="w-full mt-4">
          <iframe
            className="w-full"
            height="350"
            src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=5LdFKnNVLG7YqxHr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PropertyDesctiption;
