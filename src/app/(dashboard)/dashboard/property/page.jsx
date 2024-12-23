"use client";
import AddProperty from "@/components/AddProperty/AddProperty";
import { getAllProperty } from "@/lib/store/features/property/propertyThunks";
import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 1100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed522f",
      amount: 100,
      status: "pending",
      email: "m@exaqmple.com",
    },
  ];
}

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
  const data = getData();

  return (
    <div className="h-full flex flex-col p-4">
      <DataTable columns={columns} data={properties} className="flex-1" />
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
