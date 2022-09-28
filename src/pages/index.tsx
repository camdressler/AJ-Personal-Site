import React from "react";
import NavBar from "../components/NavBar";

import Wave from "../../public/Wave.svg";

import logo1 from "../../public/1.png";
import logo2 from "../../public/2.png";
import logo3 from "../../public/3.png";
import logo4 from "../../public/4.png";

export default function Home() {
  return (
    <div className="h-screen w-screen max-w-screen mx-auto space-y-4 font-poppins tracking-wide">
      <NavBar />
      <div className="w-full flex flex-col justify-center pt-16">
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
      <div className="w-full justify-center items-center flex flex-row space-x-8 xl:space-x-[250px] pt-4">
        <div className="flex flex-col items-center justify-center space-y-3 ">
          <img src={logo2.src} className="w-16 h-16 xl:w-24 xl:h-24" />
          <span className="hidden md:flex border-2 cursor-pointer select-none hover:bg-blue border-blue bg-blue bg-opacity-20 rounded-lg text-white text-xs px-4 py-2">
            Info
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3">
          <img src={logo3.src} className="w-24 h-22 xl:w-30 xl:h-28" />
          <span className="hidden md:flex text-white text-xs cursor-pointer select-none hover:bg-blue  border-2 border-blue bg-blue bg-opacity-20 rounded-lg px-4 py-2">
            Info
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3">
          <img src={logo4.src} className="w-24 h-22 xl:w-28 xl:h-28" />
          <span className="hidden md:flex text-white text-opacity-75 select-none hover:text-opacity-100 cursor-pointer text-xs  border-2 border-blue bg-blue hover:bg-blue bg-opacity-20 rounded-lg px-4 py-2">
            Info
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3">
          <img src={logo1.src} className="w-16 h-16 xl:w-24 xl:h-24" />
          <span className="hidden md:flex text-white text-xs select-none border-2 cursor-pointer border-blue bg-blue hover:bg-blue bg-opacity-20 rounded-lg px-4 py-2">
            Info
          </span>
        </div>
      </div>
      <div className="flex md:hidden w-full text-white text-xs opacity-40 justify-center font-thin items-center">
        Click Logo For Info
      </div>
      <div className="w-[75%] mx-auto flex flex-col items-center justify-center text-center pt-4 space-x-2 break-words text-white">
        I am an enterprenuer from the Los Angeles area. I am an enterprenuer
        from the Los Angeles area. I am an enterprenuer from the Los Angeles
        area. I am an enterprenuer from the Los Angeles area. I am an
        enterprenuer from the Los Angeles area. I am an enterprenuer from the
        Los Angeles area. I am an enterprenuer from the Los Angeles area. I am
        an enterprenuer from the Los Angeles area.
      </div>
      {/* <div className="w-full mx-auto flex flex-col items-center justify-start pt-6 space-y-3">
        <div className="w-[75%] space-x-4 items-center flex flex-row">
          <img src={logo3.src} className="w-12 h-13 xl:w-16 xl:h-18" />
          <span className="text-white font-semibold underline">
            Reef Labs Info
          </span>
        </div>
        <div className="w-[75%] space-x-4 items-center flex flex-row">
          <img src={logo1.src} className="w-12 h-13 xl:w-16 xl:h-16" />
          <span className="text-white font-semibold underline">
            Starter's Square Info
          </span>
        </div>
        <div className="w-[75%] space-x-4 flex flex-row items-center ">
          <img src={logo2.src} className="w-12 h-13 xl:w-16 xl:h-16" />
          <span className="text-white font-semibold underline">
            Atomic ACO Info
          </span>
        </div>
      </div> */}
    </div>
  );
}
