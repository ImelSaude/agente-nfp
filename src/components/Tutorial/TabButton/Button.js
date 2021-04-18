import React from "react";

export default function Button({ className, selected, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : ""} bg-red px-2 py-1 ${
        selected ? "opacity-100" : "opacity-30"
      } font-compact text-white text-lg text-center tracking-wide`}
    >
      {children}
    </button>
  );
}
