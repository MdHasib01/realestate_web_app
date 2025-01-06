import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const CitySearch = () => {
  return (
    <div className="bg-blue-900 container-main p-4 grid grid-cols-8 gap-2">
      <div className="col-span-5">
        <div className="relative">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            type="text"
            className=" w-full bg-white"
            placeholder="Enter Keyword..."
            style={{ paddingLeft: "2.5rem" }}
          />
        </div>
      </div>
      <Select className="col-span-1 bg-white">
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <Select className="col-span-1 bg-white">
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <Button className="col-span-1 bg-blue-500 hover:bg-blue-600">
        Search
      </Button>
    </div>
  );
};

export default CitySearch;
