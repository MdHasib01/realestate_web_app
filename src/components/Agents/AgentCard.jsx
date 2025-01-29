import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const AgentCard = ({ agent }) => {
  const { _id, userID, bio } = agent;
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow hover:translate-y-1 duration-300 hover:shadow-2xl rounded rouded-lg">
      <Image
        src={userID.avatar}
        width={100}
        height={100}
        className="w-32 h-32 rounded-full border"
        alt="agent profile"
      />
      <h2 className="text-2xl font-bold text-blue-500 my-2">
        {userID.fullName}
      </h2>
      <p className="text-md font-bold mb-2">Real Estate Agent</p>
      <p className="text-gray-500 text-center">{bio}</p>
      <Link className="w-full" href={`/agent/${_id}`}>
        <Button className="mt-4 w-full">View Profile</Button>
      </Link>
    </div>
  );
};

export default AgentCard;
