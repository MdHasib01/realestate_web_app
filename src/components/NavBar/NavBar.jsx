"use client";

import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import logo from "../../app/assets/image/logo.png";
import Image from "next/image";
import { Damion } from "@next/font/google";

const damion = Damion({
  subsets: ["latin"],
  weight: "400",
});
const NavBar = () => {
  const path = usePathname();
  console.log("path", path);
  const activeClass = "font-bold border-b-2 border-black pb-1";
  const liClass =
    "uppercase hover:font-bold hover:border-b-2 hover:border-black hover:pb-1 duration-100";
  return (
    <div className="container px-4 mx-auto md:px-32">
      <div className="flex justify-between items-center mt-4 border-b pb-2 ">
        <div className="logo flex items-center">
          <Image width={100} className="w-[40px]" src={logo} alt="logo"></Image>
          <h1 className={`${damion.className} text-3xl ml-1 text-blue-500`}>
            HouseBiz
          </h1>
        </div>
        <div className="menu flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-4">
            <li
              className={`text-sm ${liClass} ${
                path === "/" ? activeClass : ""
              }`}
            >
              Home
            </li>
            <li
              className={`text-sm ${liClass} ${
                path === "/about_us" ? activeClass : ""
              }`}
            >
              About us
            </li>
            <li
              className={`text-sm ${liClass} ${
                path === "/contact" ? activeClass : ""
              }`}
            >
              contact
            </li>
            <li
              className={`text-sm ${liClass} ${
                path === "/services " ? activeClass : ""
              }`}
            >
              services
            </li>

            <li>
              <button className="rounded-full border-2 p-1">MD</button>
            </li>
          </ul>

          <Button className="uppercase text-sm bg-blue-500">Login</Button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
