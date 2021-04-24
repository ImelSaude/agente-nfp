import React from "react";

export default function Projeto({ src, href, children }) {
  return (
    <a href={href} className="flex flex-col" target="_blank">
      <div className="flex-grow flex flex-col md:flex-row bg-gray-lighter rounded shadow-md">
        <img src={src} className="w-40 md:rounded-l" />
        <div className="flex flex-col justify-center content-center md:mx-8 break-words lg:text-xl text-center md:text-left p-2 md:p-0">
          <h5>{children}</h5>
        </div>
      </div>
    </a>
  );
}
