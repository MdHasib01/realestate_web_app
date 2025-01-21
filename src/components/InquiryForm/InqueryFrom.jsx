"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import IQForm from "./IQForm";
import AddProperty from "../AddProperty/AddProperty";
const InqueryFrom = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="py-20">
      <div
        className="w-full lg:h-full bg-no-repeat bg-cover bg-fixed relative"
        style={{
          backgroundImage: `url("/explore/parallax-bg.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-[#00335A] opacity-80 pointer-events-none w-full h-full"></div>
        <div className="lg:h-full container-main relative py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-2">
            <div className="md:col-span-3 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <h1 className="text-3xl  text-white mb-12">
                    Why Housebiz is the perfect Choice?
                  </h1>
                  <hr className="w-1/3" />
                </div>
                <div>
                  <h1 className="text-3xl  text-white ">01.</h1>
                  <h2 className="text-2xl  text-white my-4">
                    Design Custom Leads Capture Forms
                  </h2>
                  <p className="text-white mb-5 text-sm">
                    Keep track of your leads without having to pay for an
                    external CRM
                  </p>
                  <hr className="w-1/3" />
                </div>
                <div>
                  <h1 className="text-3xl  text-white ">02.</h1>
                  <h2 className="text-2xl  text-white my-4">
                    Suitable For Agents And Agencies
                  </h2>
                  <p className="text-white mb-5 text-sm">
                    Never miss a sale! It's never been easier to turn leads into
                    real customers
                  </p>
                  <hr className="w-1/3" />
                </div>
                <div>
                  <h1 className="text-3xl  text-white ">03.</h1>
                  <h2 className="text-2xl  text-white my-4">
                    Highly Customizable Theme
                  </h2>
                  <p className="text-white mb-5 text-sm">
                    Customize your website according to your expectations and
                    requirements
                  </p>
                  <hr className="w-1/3" />
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white p-10">
                <AddProperty open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InqueryFrom;
