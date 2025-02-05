"use client";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/store/features/auth/authSlice";
import { fetchCurrentUser } from "@/lib/store/features/auth/authThunks";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiCircleAlert, CiMail, CiPhone } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { applyAgent } from "@/lib/store/features/agent/agentThunks";
import { isAgent } from "@/lib/store/features/user/usreThunks";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { user, isLoading } = useSelector((state) => state.auth);
  const currentUser = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.users);
  console.log(users);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(getUser(JSON.parse(user)));
    }
    dispatch(fetchCurrentUser());
    if (currentUser?._id) {
      dispatch(isAgent(currentUser._id));
    }
  }, [dispatch, currentUser?._id]);
  const [licenseNumber, setLicenseNumber] = React.useState("");
  const [yearsOfExperience, setYearsOfExperience] = React.useState(0);
  const [officeAddress, setOfficeAddress] = React.useState("");
  const submitDetails = () => {
    const payload = {
      userID: user?._id,
      licenseNumber,
      yearsOfExperience: parseInt(yearsOfExperience),
      officeAddress,
    };
    dispatch(applyAgent(payload));
    setLicenseNumber("");
    setYearsOfExperience(0);
    setOpen(false);
    console.log(payload);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" px-8">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded my-4">
        {user?.avatar ? (
          <img
            src={user?.avatar}
            alt="profile"
            className="w-full md:col-span-1 border rounded"
          />
        ) : (
          <RxAvatar className="rounded-full w-48 h-48" />
        )}
        <div className="md:col-span-2">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Profile</p>

            {users?.role === "user" &&
              (users?.isApplied ? (
                <Button className="bg-green-600 mb-2 disabled hover:bg-green-500 flex items-center gap-2">
                  <FaCheckCircle /> Applied
                </Button>
              ) : (
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger>
                    <Button className="mb-2 bg-red-500 hover:bg-red-600">
                      Apply for Agent
                      <CiCircleAlert />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Fill this details to apply</DialogTitle>
                      <DialogDescription>
                        <p className="mt-2">Enter License Number</p>
                        <Input
                          type="text"
                          placeholder="License Number"
                          className="mt-2"
                          value={licenseNumber}
                          onChange={(e) => setLicenseNumber(e.target.value)}
                        />
                        <p>Years of Experience</p>
                        <Input
                          type="number"
                          placeholder="Years of Experience"
                          value={yearsOfExperience}
                          className="mb-2"
                          onChange={(e) => setYearsOfExperience(e.target.value)}
                        />
                        <p>Office Address</p>
                        <Input
                          type="text"
                          placeholder="Office Address"
                          value={officeAddress}
                          onChange={(e) => setOfficeAddress(e.target.value)}
                        />
                        <Button className="my-2" onClick={submitDetails}>
                          Submit
                        </Button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
          </div>
          <hr />
          <h1 className="text-2xl font-bold mt-4">{user?.fullName}</h1>
          <p className="text-sm text-gray-500 mb-2">A Housebizz {user?.role}</p>
          <div className="flex items-center mb-1">
            <CiMail className="mr-2" />
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
          <div className="flex items-center mb-1">
            <CiPhone className="mr-2" />
            <p className="text-sm text-gray-500">{user?.phone}</p>
          </div>
          {user?.location ? (
            <div className="flex items-center mb-1">
              <CiLocationOn className="mr-2" />
              <p className="text-sm text-gray-500">{user?.phone}</p>
            </div>
          ) : (
            <Button className="mb-2 bg-red-500 hover:bg-red-600">
              <CiLocationOn />
              Add Location
              <CiCircleAlert />
            </Button>
          )}
          <hr />
          <h2 className="text-xl font-bold mt-4">Bio</h2>
          {user?.bio ? (
            <p className=" text-gray-500"></p>
          ) : (
            <Button className="mb-2 bg-red-500 hover:bg-red-600">
              Add Bio
              <CiCircleAlert />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
