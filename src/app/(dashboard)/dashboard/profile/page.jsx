"use client";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/store/features/auth/authSlice";
import { fetchCurrentUser } from "@/lib/store/features/auth/authThunks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiCircleAlert, CiMail, CiPhone } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
const ProfilePage = () => {
  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(getUser(JSON.parse(user)));
    }

    dispatch(fetchCurrentUser());
  }, [dispatch]);
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
          <p className="text-sm text-gray-500 mb-2">Profile</p>
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
