import AddProperty from "@/components/AddProperty/AddProperty";
import { getAllProperty } from "@/lib/store/features/property/propertyThunks";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}
const Page = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Page;
