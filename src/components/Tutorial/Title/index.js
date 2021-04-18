import React from "react";

export default function Title({ number, title }) {
  return (
    <div className="flex flex-col justify-center w-full relative mb-1">
      <div className="font-compact uppercase text-white flex">
        <span className="text-base md:text-3xl inline-flex bg-red text-white justify-center w-12 font-bold mr-1 p-1">
          {number}
        </span>
        <span className="bg-yellow text-black flex-grow inline-flex content-center p-1 pl-2 text-base md:text-3xl">
          {title}
        </span>
      </div>
    </div>
  );
}
