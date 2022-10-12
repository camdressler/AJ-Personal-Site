import React from "react";
import NavBar from "../components/NavBar";

import Wave from "../../public/Wave.svg";

import logo1 from "../../public/1.png";
import logo2 from "../../public/2.png";
import logo3 from "../../public/3.png";
import logo4 from "../../public/4.png";

import { BiChevronRight } from "react-icons/bi";

export default function Home() {
  return (
    <div className="h-screen w-screen max-w-screen mx-auto space-y-4 font-poppins tracking-wide">
      <NavBar />
      <div className="w-full flex flex-col justify-center  items-center  pt-16 ">
        <div className="w-full justify-center items-center flex flex-row space-x-4">
          <h1 className="text-white font-semibold text-3xl xl:text-7xl">
            Hello
          </h1>
          <img src={Wave.src} className="w-7 h-7 xl:w-12 xl:h-12" />
        </div>
        <div className="flex items-center justify-center mt-6">
          <h1 className="text-white font-semibold text-5xl xl:text-9xl">
            I'm AJ Matise
          </h1>
        </div>
      </div>
      <div className="w-full justify-center items-center flex flex-row space-x-8 xl:space-x-16 pt-2 pb-4">
        <img src={logo2.src} className="w-14 h-14 md:w-28 md:h-28 xl:w-36 xl:h-36" />
        <img src={logo3.src} className="w-20 h-18 md:w-32 md:h-34 xl:w-48 xl:h-50" />
        <img src={logo4.src} className="w-20 h-20 md:w-32 md:h-32 xl:w-48 xl:h-48" />
        <img src={logo1.src} className="w-14 h-14 md:w-28 md:h-28 xl:w-36 xl:h-36" />
      </div>
      <a href="/companies" className="mx-auto flex text-center items-center justify-center text-sm w-fit border-2 cursor-pointer hover:opacity-100 border-blue bg-blue bg-opacity-20 opacity-75 select-none text-white font-semibold py-1 pl-4 pr-2 rounded-lg duration-200 ease-in-out mt-8">
        See Companies <BiChevronRight className="text-white h-6 w-6 " />
      </a>
      <div className="w-[75%] mx-auto flex flex-col items-center justify-center text-center pt-25 space-x-2 break-words text-white">
        
        <p></p>I'm a 17 year old entrepreneur helping people make <strong>hundreds of thousands of dollars</strong> reselling sneakers! <br></br><br></br><p>My goal in life is to provide value to my customers, elevate my staff teams, and build positive communities in the reselling scene. </p>
      </div>
    </div>
  );
}
