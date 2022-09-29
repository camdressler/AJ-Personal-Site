import React from "react";

import NavBar from "../components/NavBar";

import { FiCopy } from "react-icons/fi";
import { BsFillPhoneFill, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function () {
  const copy = (data: string) => {
    navigator.clipboard.writeText(data);
    alert(`Copied ${data}!`);
  };

  return (
    <div className="h-screen w-screen max-h-screen max-w-screen mx-auto space-y-4 font-poppins tracking-wide">
      <NavBar />
      <div className="w-full flex flex-col justify-center items-center pt-16">
        <div className="w-[85%] flex flex-col space-y-6 justify-center items-center">
          <div className="w-fulll flex flex-row space-x-8">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <BsFillPhoneFill className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 w-[350px]  border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>+1 (310) 968-5792</h1>
              <FiCopy
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => copy("13109685792")}
              />
            </div>
          </div>
          <div className="w-fulll flex flex-row space-x-8">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <MdEmail className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 w-[350px] border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>aj@reeflabs.io</h1>
              <FiCopy
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => copy("aj@reeflabs.io")}
              />
            </div>
          </div>
          <div className="w-fulll flex flex-row space-x-8">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <FaDiscord className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 w-[350px] border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>AJ.#0011</h1>
              <FiCopy
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => copy("AJ.#0011")}
              />
            </div>
          </div>
          <div className="w-fulll flex flex-row space-x-8">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <BsTwitter className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 w-[350px]  border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>@Reef_labs</h1>
              <FiCopy
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => copy("@Reef_labs")}
              />
            </div>
          </div>
          <div className="w-fulll flex flex-row space-x-8">
            <div className="border-2 border-blue bg-blue bg-opacity-20 rounded-full p-4">
              <AiFillInstagram className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 w-[350px] sn:max-w-screen border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <h1>@reef_labs_reselling</h1>
              <FiCopy
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => copy("@reef_labs_reselling")}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-12 border-2 text-white border-blue bg-blue bg-opacity-20 rounded-lg px-4 py-4">
          <h1 className="text-center">
            I check all forms of communication regularly and I am always open to
            chat!
          </h1>
        </div>
      </div>
    </div>
  );
}
