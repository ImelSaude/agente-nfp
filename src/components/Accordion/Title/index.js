import React from "react";
import ChevronUp from "../../../icons/ChevronUp";
import ChevronDown from "../../../icons/ChevronDown";

export default function Title({ expanded, children }) {
  return (
    <div className={`w-full text-left flex ${expanded ? "mb-1" : ""}`}>
      <h5 className="flex-grow font-bold">{children}</h5>
      <div className="min-w-1 text-gray-darker ml-4 mr-2 flex items-center">
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </div>
    </div>
  );
}
