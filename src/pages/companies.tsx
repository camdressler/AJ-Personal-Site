import React, { useState } from "react";

import NavBar from "../components/NavBar";

import logo1 from "../../public/1.png";
import logo2 from "../../public/2.png";
import logo3 from "../../public/3.png";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function () {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <div className="h-screen w-screen max-h-screen max-w-screen mx-auto space-y-4 font-poppins tracking-wide">
      <NavBar />
      <div className="w-full flex flex-row justify-center items-center pt-16">
        <h1 className="text-white font-semibold text-5xl xl:text-7xl">
          Companies
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[85%] flex flex-col space-y-6 justify-center items-center mt-12">
          <div className="flex flex-row space-x-8">
            <div className="flex flex-row space-x-4 w-[350px] items-center border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-2 px-4 rounded-lg">
              <img
                src={logo3.src}
                className="w-20 h-22 xl:w-24 xl:h-26 select-none"
              />
              <span className="basis-2/3 flex justify-center">Reef Labs</span>
              <span className="flex justify-end">
                {dropdown1 ? (
                  <AiOutlineMinus
                    onClick={() => setDropdown1(!dropdown1)}
                    className="opacity-100 w-5 h-5 cursor-pointer"
                  />
                ) : (
                  <AiOutlinePlus
                    onClick={() => setDropdown1(!dropdown1)}
                    className="opacity-100 w-5 h-5 cursor-pointer"
                  />
                )}
              </span>
            </div>
          </div>
          {dropdown1 ? (
            <div className="flex flex-row">
              <div className="flex w-[350px] items-center justify-center text-center border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-2 px-4 rounded-lg">
                This is some example test to fill space.
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-row space-x-8">
            <div className="flex flex-row space-x-4 w-[350px] items-center border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-3 px-4 rounded-lg">
              <img
                src={logo1.src}
                className="w-20 h-20 xl:w-24 xl:h-24 select-none"
              />
              <span className="basis-2/3 flex justify-center">
                Starter's Square
              </span>
              <span className=" justify-end">
                {dropdown2 ? (
                  <AiOutlineMinus
                    onClick={() => setDropdown2(!dropdown2)}
                    className="opacity-100 w-5 h-5 cursor-pointer"
                  />
                ) : (
                  <AiOutlinePlus
                    onClick={() => setDropdown2(!dropdown2)}
                    className="opacity-100 w-5 h-5 cursor-pointer"
                  />
                )}
              </span>
            </div>
          </div>
          {dropdown2 ? (
            <div className="flex flex-row">
              <div className="flex w-[350px] items-center justify-center text-center border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-2 px-4 rounded-lg">
                This is some example test to fill space.
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-row space-x-8">
            <div className="flex flex-row space-x-4 w-[350px] items-center border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-1 px-4 rounded-lg">
              <img
                src={logo2.src}
                className="w-20 h-20 xl:w-24 xl:h-24 select-none"
              />
              <span className="basis-2/3 flex justify-center">Atomic ACO</span>
              <span className=" flex justify-end">
                {dropdown3 ? (
                  <AiOutlineMinus
                    onClick={() => setDropdown3(!dropdown3)}
                    className="opacity-100 w-5 h-5 cursor-pointer"
                  />
                ) : (
                  <AiOutlinePlus
                    onClick={() => setDropdown3(!dropdown3)}
                    className="opacity-100 w-5 h-5 cursor-pointer"
                  />
                )}
              </span>
            </div>
          </div>
          {dropdown3 ? (
            <div className="flex flex-row">
              <div className="flex w-[350px] items-center justify-center text-center border-2 border-blue bg-blue bg-opacity-20 text-white font-semibold py-2 px-4 rounded-lg">
                This is some example test to fill space.
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
