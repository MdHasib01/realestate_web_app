"use client";

import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import logo from "../../app/assets/image/logo.png";
import Image from "next/image";
import { Damion } from "@next/font/google";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const damion = Damion({
  subsets: ["latin"],
  weight: "400",
});
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about_us" },
  { name: "Contact", path: "/contact" },
];
const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const path = usePathname();
  console.log("path", path);
  const activeClass = "font-bold text-blue-500 border-b-2 border-blue-500 pb-1";
  const liClass =
    "uppercase hover:font-bold hover:text-blue-500 hover:border-b-2 hover:border-blue-500 hover:pb-1 duration-100";
  return (
    <div className="container px-4 mx-auto lg:px-32">
      <div className="flex justify-between items-center mt-4 border-b pb-2 ">
        <div className="block md:hidden">
          <CiMenuFries
            className="font-bold"
            onClick={() => setNavBarOpen(true)}
            size={30}
          />
        </div>
        <div className="logo flex items-center">
          <Image width={100} className="w-[40px]" src={logo} alt="logo"></Image>
          <h1 className={`${damion.className} text-3xl ml-1 text-blue-500`}>
            HouseBiz
          </h1>
        </div>
        <div className="menu flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <li
                className={`text-sm ${liClass} ${
                  path === link.path ? activeClass : ""
                }`}
                key={link.name}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}

            <li>
              <button className="rounded-full border-2 p-1">MD</button>
            </li>
          </ul>

          <Button className="uppercase text-sm bg-blue-500">Login</Button>
        </div>
      </div>
      <div
        className={`${
          navBarOpen ? "left-0" : "left-[-800px]"
        } h-screen  shadow-2xl  z-50 fixed md:hidden p-4 top-0 bg-zinc-50 text-zinc-900 duration-500 sm:w-full w-2/3`}
      >
        <IoMdClose
          className="absolute top-4 right-4"
          onClick={() => setNavBarOpen(!navBarOpen)}
        />
        <div className="logo flex items-center mb-2">
          <Image width={100} className="w-[30px]" src={logo} alt="logo"></Image>
          <h1 className={`${damion.className} text-xl ml-1 text-blue-500`}>
            HouseBiz
          </h1>
        </div>
        <hr />
        <ul className="flex flex-col gap-2 my-4">
          {navLinks.map((link) => (
            <li
              className={`text-sm ${liClass} ${
                path === link.path ? activeClass : ""
              }`}
              key={link.name}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-4 left-4">v.01</div>
      </div>
    </div>
  );
};
export default NavBar;
