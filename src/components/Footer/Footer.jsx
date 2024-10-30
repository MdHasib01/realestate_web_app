import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Damion } from "@next/font/google";
import Image from "next/image";
import logo from "../../app/assets/image/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { version } from "../../../package.json";
const discoverPlaces = [
  {
    name: "New York",
    path: "/new_york",
  },
  {
    name: "Los Angeles",
    path: "/los_angeles",
  },
  {
    name: "Chicago",
    path: "/chicago",
  },
  {
    name: "Houston",
    path: "/houston",
  },
];
const damion = Damion({
  subsets: ["latin"],
  weight: "400",
});
const socialLinks = [
  {
    name: "Facebook",
    Icon: <FaFacebook />,
    path: "/facebook",
  },
  {
    name: "Twitter",
    Icon: <FaXTwitter />,
    path: "/twitter",
  },
  {
    name: "Instagram",
    Icon: <FaSquareInstagram />,
    path: "/instagram",
  },
];
const Footer = () => {
  return (
    <div className="w-full bg-[#004274] text-white">
      <div className="container mx-auto md:px-32 px-8 pt-12 pb-4 grid grid-cols-1 md:grid-cols-4">
        <div className="mb-6">
          <h1 className="mb-6">Discover</h1>
          <ul>
            {discoverPlaces.map((place) => (
              <li key={place.name}>
                <Link
                  href={place.path}
                  className="flex items-center gap-1 text-sm mb-2"
                >
                  <MdArrowForwardIos />
                  {place.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h1 className="mb-6">Contact Us</h1>
          <p className="text-sm mb-2 flex items-center gap-1">
            <CiLocationOn /> 123 Main Street, Anytown, USA
          </p>
          <p className="text-sm mb-2 flex items-center gap-1">
            <FiPhone /> (+880) 123 456 789
          </p>
          <p className="text-sm mb-2 flex items-center gap-1">
            <AiOutlineMail /> 123 Main Street, Anytown, USA
          </p>
        </div>
        <div className="md:col-span-2">
          <h1 className="mb-6">Newsletter</h1>
          <div className="grid grid-cols-3 gap-4">
            <Input
              placeholder="Enter your email"
              className="bg-white col-span-2"
            ></Input>{" "}
            <Button>Submit</Button>
          </div>
          <p className="text-sm mt-4">
            By subscribing to our newsletter you accept our{" "}
            <span className="text-blue-500">Terms and Conditions</span>
          </p>
        </div>
      </div>

      <div className="w-full bg-[#00335A]">
        <div className="container mx-auto md:px-32 px-8 py-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-center justify-center md:justify-start gap-4">
            {socialLinks.map((link) => (
              <Link href={link.path} key={link.name} className="text-xl">
                {link.Icon}
              </Link>
            ))}
          </div>

          <div className="logo flex items-center justify-center w-full">
            <Image
              width={100}
              className="w-[40px]"
              src={logo}
              alt="logo"
            ></Image>
            <h1 className={`${damion.className} text-3xl ml-1 text-blue-500`}>
              HouseBiz
            </h1>
          </div>
          <div>
            <p className="text-sm mb-2 text-center md:text-right">
              © 2023 HouseBiz. All rights reserved.
            </p>
            <p className="text-sm text-center md:text-right">
              Version: {version} Made By Hasib & Iffath
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
