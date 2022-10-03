import React from "react";

import AJLogo from '../../public/4.png'

export default function () {
  return (
    <div className="w-screen h-[75px] md:h-[100px] flex flex-row border-b-2 border-blue">
      <div className="basis-1/2 flex justify-start items-center pl-4">
        <img alt="main logo" src={AJLogo.src} className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="basis-1/2 flex justify-end items-center pr-8">
        <div className="flex flex-row space-x-2 md:space-x-4 text-white select-none">
          <a href="/" className="text-sm md:text-xl opacity-75 hover:opacity-100 duration-200 ease-in-out">Home</a> 
          <a href="/companies" className="text-sm md:text-xl opacity-75 hover:opacity-100 duration-200 ease-in-out">Companies</a>
          <a href="/payments" className="text-sm md:text-xl opacity-75 hover:opacity-100 duration-200 ease-in-out">Payments</a>
          <a href="/contact" className="text-sm md:text-xl opacity-75 hover:opacity-100 duration-200 ease-in-out">Contact</a>
        </div>
      </div>
    </div>
  );
}
