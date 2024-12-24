"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { addProperty } from "@/lib/store/features/property/propertyThunks";
import { useDispatch } from "react-redux";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z.string().optional(),
  location: z.string().optional(),
  city: z.string().optional(),
  division: z.string().optional(),
  price: z.number().min(1, { message: "Price is required." }),
  image: z.array(z.string()).optional(),
  size: z.number().optional(),
  bedrooms: z.number().optional(),
  bathrooms: z.number().optional(),
  garage: z.number().optional(),
  yearBuilt: z.number().optional(),
  apartmentType: z.enum(["house", "shop", "office", "apartment", "villa"], {
    required_error: "Apartment type is required.",
  }),
  propertyStatus: z.enum(["rent", "sale", "sold"], {
    required_error: "Property status is required.",
  }),
});

const AddProperty = () => {
  const dispatch = useDispatch();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      city: "",
      division: "",
      price: 0,
      image: [],
      size: 0,
      bedrooms: 0,
      bathrooms: 0,
      garage: 0,
      yearBuilt: 0,
      apartmentType: "house",
      propertyStatus: "rent",
    },
  });

  const onSubmit = async (values) => {
    try {
      debugger;
      const result = await dispatch(
        addProperty({
          title: values.title,
          description: values.description,
          location: values.location,
          city: values.city,
          division: values.division,
          price: values.price,
          image: values.image,
          size: values.size,
          bedrooms: values.bedrooms,
          bathrooms: values.bathrooms,
          garage: values.garage,
          yearBuilt: values.yearBuilt,
          apartmentType: values.apartmentType,
          propertyStatus: values.propertyStatus,
        })
      );
      if (result.meta.requestStatus === "fulfilled") {
        router.push("/properties");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 mx-auto w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => onSubmit(values))}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Property Title" {...field} />
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
                  <Input placeholder="Description" {...field} />
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
          />
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
            name="division"
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
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Price"
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Apartment Type" />
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
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Property Status" />
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
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Agree to terms</Label>
          </div>
          <Button className="w-full" type="submit">
            Add Property
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProperty;
