"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiGooglegemini } from "react-icons/si";
import { CohereClient, CohereError, CohereTimeoutError } from "cohere-ai";
import { CgSpinner } from "react-icons/cg";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "../ui/select";
import {
  addProperty,
  getAllProperty,
} from "@/lib/store/features/property/propertyThunks";
import { useDispatch } from "react-redux";
import { Textarea } from "../ui/textarea";

const propertySchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z.string().optional(),
  location: z.string().optional(),
  city: z.string().optional(),
  divission: z.string().optional(),
  price: z.preprocess(
    (val) => parseFloat(val),
    z.number().min(1, { message: "Price is required." })
  ),
  image: z.any().optional(),
  size: z.preprocess((val) => parseFloat(val), z.number().optional()),
  bedrooms: z.preprocess((val) => parseFloat(val), z.number().optional()),
  bathrooms: z.preprocess((val) => parseFloat(val), z.number().optional()),
  garage: z.preprocess((val) => parseFloat(val), z.number().optional()),
  yearBuilt: z.preprocess((val) => parseFloat(val), z.number().optional()),
  apartmentType: z.enum(["house", "shop", "office", "apartment", "villa"], {
    required_error: "Apartment type is required.",
  }),
  propertyStatus: z.enum(["rent", "sale", "sold"], {
    required_error: "Property status is required.",
  }),
});

const AddProperty = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const [previewImage, setPreviewImage] = useState(null);
  const form = useForm({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      description: "",
      location: "",
      city: "",
      divission: "",
      price: 0,
      size: 0,
      bedrooms: 0,
      bathrooms: 0,
      garage: 0,
      yearBuilt: new Date().getFullYear(),
    },
  });
  const handleImageChange = (file) => {
    if (file) {
      form.setValue("image", file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "image" && data[key]) {
        formData.append(key, data[key]);
      } else {
        formData.append(key, data[key]);
      }
    });
    console.log("formData", formData);
    dispatch(addProperty(formData)).then(() => {
      setOpen(false);

      dispatch(getAllProperty());
    });
    console.log(form.formState.errors);
  };

  const cohere = new CohereClient({
    token: "AV1BVk7eM9Sf9BTsjQiGynz1DASTLANFmjfsvGUk",
  });
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const generateDescription = () => {
    setIsEditing(true);
    (async () => {
      try {
        console.log("genetaring chat.....");

        const chat = await cohere.chat({
          model: "command",
          message: `Generate a description for a property with the title "${form.getValues(
            "title"
          )}" and some besed of these information - "${form.getValues(
            "description"
          )}"`,
        });
        console.log(chat.text);
        setIsEditing(false);
        form.setValue("description", chat.text, { shouldValidate: true });
      } catch (err) {
        if (err instanceof CohereTimeoutError) {
          console.log("Request timed out", err);
          setIsEditing(false);
        } else if (err instanceof CohereError) {
          // catch all errors
          console.log(err.statusCode);
          console.log(err.message);
          console.log(err.body);
          setIsEditing(false);
        }
      }
    })();
  };
  return (
    <div className="p-4 mx-auto w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the property title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <div className="relative w-full max-w-md">
                    {/* Textarea */}
                    <Textarea
                      className=" pr-16" // Add padding to prevent overlap with the button
                      placeholder={`${
                        isEditing
                          ? "Generating..."
                          : "Type description text here..."
                      } `}
                      {...field}
                      disabled={isEditing}
                    />

                    {/* Button */}
                    <div
                      className="cursor-pointer absolute bottom-2 right-2 rounded-full h-8 w-8 bg-primary text-white flex items-center justify-center"
                      size="sm"
                      onClick={generateDescription}
                    >
                      <SiGooglegemini />{" "}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
                {isEditing && (
                  <div className="text-sm text-gray-500 flex gap-1 items-center">
                    <CgSpinner className="animate-spin" />
                    <p>Generating Description...</p>
                  </div>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="divission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Division</FormLabel>
                <FormControl>
                  <Input placeholder="Division" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter bedrooms"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bathrooms</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter bathrooms"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="garage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Garage</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter garage" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="apartmentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apartment Type</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <Input
                        value={field.value}
                        placeholder="Select apartment type"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="shop">Shop</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="propertyStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Status</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <Input
                        value={field.value}
                        placeholder="Select property status"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rent">Rent</SelectItem>
                      <SelectItem value="sale">Sale</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <label>Image</label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
              className="file-input"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-2 w-32 h-32 object-cover"
              />
            )}
          </div>
          <div className="flex gap-2 justify-end">
            <Button
              onClick={() => setOpen(false)}
              className="bg-red-500 hover:bg-red-600"
            >
              Cancel
            </Button>
            <Button type="submit" className="btn">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddProperty;
