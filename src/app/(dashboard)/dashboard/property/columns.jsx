"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "divission",
    header: "Divission",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "bedrooms",
    header: "Bedrooms",
  },
  {
    accessorKey: "bathrooms",
    header: "Bathrooms",
  },
  { accessorKey: "garage", header: "Garage" },
  {
    accessorKey: "yearBuilt",
    header: "Year Built",
  },
  {
    accessorKey: "appartmentType",
    header: "Appartment Type",
  },
  {
    accessorKey: "porertyStatus",
    header: "Porerty Status",
  },
];
