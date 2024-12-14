"use client";
import { login } from "@/lib/store/features/auth/authThunks";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login({ email, password }));
      if (result.meta.requestStatus === "fulfilled") {
        console.log(result);
        window.location.href = "/";
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
