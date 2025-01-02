import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const AgentCard = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow hover:translate-y-1 duration-300 hover:shadow-2xl rounded rouded-lg">
      <Image
        src="http://res.cloudinary.com/mdhasib/image/upload/v1734136344/zpfk0zhzrwhisloavdhc.png"
        width={100}
        height={100}
        className="w-32 h-32 rounded-full border"
        alt="agent profile"
      />
      <h2 className="text-2xl font-bold text-blue-500 my-2">John Doe</h2>
      <p className="text-md font-bold mb-2">Real Estate Agent</p>
      <p className="text-gray-500 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        deleniti mollitia esse modi doloremque nesciunt explicabo, odit
        molestiae minima odio fugiat corporis fuga recusandae, consequatur non,
        quod voluptas. Eius, aut.
      </p>
      <Button className="mt-4 w-full">View Profile</Button>
    </div>
  );
};

export default AgentCard;
