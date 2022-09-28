import React from "react";

import NavBar from "../components/NavBar";

import { SiZelle, SiVenmo, SiPaypal } from "react-icons/si";
import { FiCopy } from "react-icons/fi";

export default function () {

  const copy = () => {
    navigator.clipboard.writeText("aj@matisecapital.com")
    alert('Copied Email!')
  }

  return (
    <div className="h-screen w-screen max-h-screen max-w-screen mx-auto space-y-4 font-poppins tracking-wide">
      <NavBar />
      <div className="w-full flex flex-col justify-center items-center pt-16">
        <div className="w-[85%] flex flex-col space-y-2 justify-center items-center border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-2 px-4 rounded-lg">
          <h1 className="text-center">Name: Anthony Matise</h1>
          <h1 className="text-center">
            Please make sure all information matches before sending payments
          </h1>
        </div>
        <div className="w-[85%] flex flex-col space-y-6 justify-center items-center mt-12 ">
          <div className="w-fulll flex flex-row space-x-8">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <SiZelle className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4  border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>aj@matisecapital.com</h1>
              <FiCopy className="w-6 h-6 text-white cursor-pointer"  onClick={() => copy()} />
            </div>
          </div>
          <div className="w-fulll flex flex-row space-x-8">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <SiVenmo className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>aj@matisecapital.com</h1>
              <FiCopy className="w-6 h-6 text-white cursor-pointer" onClick={() => copy()}  />
            </div>
          </div>
          <div className="w-fulll flex flex-row space-x-8">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <SiPaypal className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4   border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>aj@matisecapital.com</h1>
              <FiCopy className="w-6 h-6 text-white cursor-pointer" onClick={() => copy()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
