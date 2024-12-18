"use client";
import AddProperty from "@/components/AddProperty/AddProperty";
import { getAllProperty } from "@/lib/store/features/property/propertyThunks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const { properties, isLoading } = useSelector((state) => state.property);
  console.log(properties);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProperty());
  }, [dispatch]);
  return (
    <div>
      <AddProperty />
    </div>
  );
};

export default Page;
