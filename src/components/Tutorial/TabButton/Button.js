import React from "react";

export default function Button({ className, selected, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : ""} border-2 border-red px-2 py-1 ${
        selected ? "opacity-100" : "opacity-30"
      } font-compact text-red text-lg text-center tracking-wide`}
    >
      {children}
    </button>
  );
}
