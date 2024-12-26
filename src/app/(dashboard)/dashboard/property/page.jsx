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
  const [open, setOpen] = useState(false);
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
    <div className="p-4">
      <Dialog
        onOpenChange={setOpen}
        open={open}
        className="max-h-[calc(100vh-2rem)] overflow-y-auto"
      >
        <DialogContent
          className={
            " overflow-y-scroll max-h-[calc(100vh-2rem)] scrollbar-hide"
          }
        >
          <DialogHeader>
            <DialogTitle>Add a new property</DialogTitle>
          </DialogHeader>
          <AddProperty open={open} setOpen={setOpen} />
        </DialogContent>
      </Dialog>

      <DataTable
        columns={columns}
        data={properties}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Page;
