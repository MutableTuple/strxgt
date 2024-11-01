import React from "react";
import Link from "next/link";
import Form from "./Form";
import MobileScreen from "./MobileScreen";

export default function Main() {
  return (
    <div className="grid grid-cols-8 min-h-screen text-center grid-rows-2 md:text-start md:grid-rows-1">
      <div className="h-full col-start-1 col-end-9 md:col-end-4 flex flex-col justify-center items-center md:items-start  relative md:mt-0 p-4 md:p-0">
        <div className="md:my-20 text-center md:text-start">
          <h1 className="text-xs mb-1">INTRODUCING</h1>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-3">
            Strontium
          </h1>
          <h2 className="text-lg md:text-xl lg:text-3xl font-black text-transparent bg-clip-text bg-[length:200%_200%] bg-gradient-to-r from-gray-500 via-gray-600 to-gray-300">
            Your personal&nbsp;
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-red-500 animate-gradient">
              gaming portfolio,
            </span>
            &nbsp; just like a resume of your games!
          </h2>
        </div>
        <h3 className="mt-4 text-sm md:text-base">
          🎉 Launching on <strong>November 11th 2024.</strong>
        </h3>
        <div className="flex gap-2 items-center mt-4">
          <span className="text-xs text-stone-600">As seen on:</span>
          <img
            src="https://ph-static.imgix.net/ph-logo-1.png"
            alt="Product Hunt logo"
            className="h-14"
          />
          <img
            src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png"
            alt="X"
            className="h-5"
          />
        </div>
        <Form />
      </div>
      <div className="md:col-start-5 md:col-end-9 flex flex-col justify-center items-center md:row-start-1 row-start-2 col-start-1 col-end-9 md:mt-0">
        <MobileScreen />
      </div>
    </div>
  );
}
