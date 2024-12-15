"use client";
import { login } from "@/lib/store/features/auth/authThunks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import loginImg from "../../app/assets/image/banner.jpg";
const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login({ email, password }));
      if (result.meta.requestStatus === "fulfilled") {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex w-[500px] mx-auto">
        <Image src={loginImg}></Image>
        <div>
          <h3>This is login page</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
