"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  deleteProperty,
  getAllProperty,
} from "@/lib/store/features/property/propertyThunks";
import { FaTrash } from "react-icons/fa";
import { CiEdit, CiTrash } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";

const handleDelete = (id, dispatch) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(deleteProperty(id));
      dispatch(getAllProperty());
    }
  });
};

export const columns = [
  {
    accessorKey: "avatar",
    header: "Image",
    cell: (props) => {
      const image = props.getValue();
      if (!image) return null;
      return (
        <Image
          width={100}
          height={100}
          alt="property image"
          src={image}
          className="w-20 h-12   object-contain"
        />
      );
    },
  },
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ getValue }) => {
      const roles = [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
        { value: "agent", label: "Agent" },
      ];
      return (
        <select disabled defaultValue={getValue()}>
          {roles.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const apartment = row.original;
      const dispatch = useDispatch();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(apartment.title)}
            >
              <IoCopyOutline />
              Copy title
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <CiEdit />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleDelete(apartment._id, dispatch)}
            >
              <CiTrash /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
