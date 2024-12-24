"use client";
import AddProperty from "@/components/AddProperty/AddProperty";
import { getAllProperty } from "@/lib/store/features/property/propertyThunks";
import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const { loadingProperties, isLoading } = useSelector(
    (state) => state.property
  );
  const properties = useSelector((state) => state.property.properties);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProperty());
  }, [dispatch]);

  return (
    <div className="h-full flex flex-col p-4">
      <Dialog className="max-h-[calc(100vh-2rem)] overflow-y-auto">
        <DialogTrigger>
          <div className="flex justify-end">
            <Button> Add Property</Button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a new property</DialogTitle>
          </DialogHeader>
          <AddProperty />
        </DialogContent>
      </Dialog>
      <DataTable columns={columns} data={properties} className="flex-1" />
    </div>
  );
};

export default Page;
