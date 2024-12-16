"use client";

import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import logo from "../../app/assets/image/logo.png";
import Image from "next/image";
import { Damion } from "@next/font/google";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "@/lib/store/features/auth/authThunks";
import { logout } from "@/lib/store/features/auth/authSlice";
import { getUser } from "@/lib/store/features/auth/authSlice";

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
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);
  console.log("user--", user);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(getUser(JSON.parse(user)));
    }

    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };
  const [navBarOpen, setNavBarOpen] = useState(false);
  const path = usePathname();
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
        <Link href={"/"}>
          <div className="logo flex items-center">
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
        </Link>
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
          </ul>
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full border-2">
                  {user?.avatar ? (
                    <img
                      className="rounded-full w-8 h-8"
                      src={user?.avatar}
                      alt="profile picture"
                    />
                  ) : (
                    <RxAvatar className="rounded-full w-8 h-8" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-36 z-50 bg-zinc-100 rounded p-2">
                <DropdownMenuLabel className="px-2">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-2 py-1  bg-zinc-200 hover:bg-zinc-300">
                  <Link href="/profile" className="flex gap-1 items-center">
                    <BsPersonCircle className="text-lg" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-1 items-center px-2 py-1  bg-zinc-200 hover:bg-zinc-300">
                  <Link href="/dashboard" className="flex gap-1 items-center">
                    <MdSpaceDashboard className="text-lg" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex gap-1 items-center p-2 uppercase text-sm bg-blue-500 cursor-pointer"
                  onClick={handleLogout}
                >
                  <FiLogOut className="text-lg text-white " />
                  <span className="text-white font-bold">Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {!user && (
            <Link href="/login">
              <Button
                disabled={isLoading}
                className="uppercase text-sm bg-blue-500"
              >
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </Link>
          )}
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
