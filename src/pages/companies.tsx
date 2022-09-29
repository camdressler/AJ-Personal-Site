import React from "react";

import NavBar from "../components/NavBar";

import { FiCopy } from "react-icons/fi";
import { BsFillPhoneFill, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { FiExternalLink } from "react-icons/fi";

import logo1 from "../../public/1.png";
import logo2 from "../../public/2.png";
import logo3 from "../../public/3.png";
import logo4 from "../../public/4.png";

export default function () {
  return (
    <div className="h-screen w-screen max-h-screen max-w-screen mx-auto space-y-4 font-poppins tracking-wide">
      <NavBar />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[85%] flex flex-col space-y-6 justify-center items-center mt-12">
          <div className="w-fulll flex flex-row space-x-8">
            <img src={logo2.src} className="w-20 h-20 xl:w-24 xl:h-24" />
            <a href="https://twitter.com/Atomic_ACO" className="flex flex-row items-center justify-center space-x-4 w-[350px]  border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              Atomic ACO
              <FiExternalLink className="text-white h-3 w-3 ml-2" />
            </a>
          </div>
          <div className="w-fulll flex flex-row space-x-8">
            <img src={logo3.src} className="w-20 h-22 xl:w-24 xl:h-26" />
            <a className="flex flex-row items-center justify-center space-x-4 w-[350px] border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              Reef Labs
              <FiExternalLink className="text-white h-3 w-3 ml-2" />
            </a>
          </div>
          <div className="w-fulll flex flex-row space-x-8">
            <img src={logo4.src} className="w-20 h-20 xl:w-24 xl:h-24" />
            <a className="flex flex-row items-center justify-center space-x-4 w-[350px] border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold px-4 rounded-lg">
              AJ.#0011
              <FiExternalLink className="text-white h-3 w-3 ml-2" />
            </a>
          </div>
          <div className="w-fulll flex flex-row space-x-8">
            <img src={logo1.src} className="w-20 h-20 xl:w-24 xl:h-24" />
            <a className="flex flex-row items-center justify-center space-x-4 w-[350px] border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold px-4 rounded-lg">
              Starter's Square
              <FiExternalLink className="text-white h-3 w-3 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
