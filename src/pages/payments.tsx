import React from "react";

import NavBar from "../components/NavBar";

import { SiZelle, SiVenmo, SiPaypal } from "react-icons/si";
import { FiCopy } from "react-icons/fi";
import { IoLogoVenmo } from "react-icons/io5";

import Money from "../../public/Money.svg";

export default function () {
  const copy = () => {
    navigator.clipboard.writeText("aj@matisecapital.com");
    alert("Copied Email!");
  };

  return (
    <div className="h-screen w-screen max-h-screen max-w-screen mx-auto space-y-4 font-poppins tracking-wide">
      <NavBar />
      <div className="w-full flex flex-row justify-center items-center pt-16">
        <h1 className="text-white font-semibold  text-5xl xl:text-7xl">
          Payments
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-6">
        <div className="w-[85%] flex flex-col space-y-6 justify-center items-center mt-12 ">
          <div className="w-full flex flex-row justify-center  space-x-8">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <SiZelle className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 w-[350px]  border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>aj@matisecapital.com</h1>
              <FiCopy
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => copy()}
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-center space-x-8 ">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4 ">
              <IoLogoVenmo className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4  w-[350px] border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>@AJ-Matise</h1>
              <FiCopy
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => copy()}
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-center space-x-8 pb-6">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <SiPaypal className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 w-[350px]  border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg ">
              <h1>@ajmatise</h1>
              <FiCopy
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => copy()}
              />
            </div>
          </div>
          <div className="w-[90%] flex flex-col space-y-2 justify-center items-center border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-6 px-6 rounded-lg">
            <h1 className="text-center">Name: Anthony Matise</h1>
            <h1 className="text-center">
              Please make sure all information matches before sending payments
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
