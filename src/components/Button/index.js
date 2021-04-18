import React from "react";

export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="md:self-start drop-shadow-lg bg-yellow p-3 rounded-lg uppercase font-bold"
    >
      {children}
    </button>
  );
}
