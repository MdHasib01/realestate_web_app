"use client";
import { register } from "@/lib/store/features/auth/authThunks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import loginImg from "../../app/assets/image/login_bg.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import logo from "../../app/assets/image/logo.png";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Damion } from "@next/font/google";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(1, {
    message: "Phone number must not be empty.",
  }),
  password: z.string().min(1, {
    message: "Password must not be empty.",
  }),
});

const damion = Damion({
  subsets: ["latin"],
  weight: "400",
});
const RegisterContainer = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullName: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (values) => {
    const { fullName, username, email, password, phone } = values;
    try {
      const result = await dispatch(
        register({ fullName, username, phone, email, password })
      );
      if (result.meta.requestStatus === "fulfilled") {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container px-2 mx-auto lg:px-32  flex items-center justify-center h-screen max-w-6xl ">
      <div className="md:grid md:grid-cols-7 my-10 w-full drop-shadow shadow-xl items-center justify-center rounded">
        <Image
          src={loginImg}
          alt="login"
          className="h-full object-cover rounded-l-lg hidden md:block md:col-span-4 h-[600px]"
        ></Image>
        <div className="bg-white h-full rounded-lg md:rounded-r-lg p-4 md:col-span-3 ">
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
          <h2 className="text-3xl font-bold my-2">Register</h2>
          <p className="text-gray-500 mb-4">Register to housebizz</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((values) => onSubmit(values))}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Name</FormLabel>
                    <FormControl>
                      <Input placeholder="User Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Remember me</Label>
              </div>
              <Button className="w-full" type="submit">
                Register
              </Button>
            </form>
          </Form>
          <div className="flex flex-col w-full justify-center items-center mt-10">
            <p className="text-gray-500">
              Already Have an account?{" "}
              <Link href={"/login"}>
                <span className="text-blue-500">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
