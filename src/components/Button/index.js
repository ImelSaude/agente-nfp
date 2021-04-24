import React from "react";

export default function Button({ children }) {
  return (
    <a
      href="#como-doar"
      className="md:self-start drop-shadow-lg bg-yellow p-3 rounded-lg uppercase font-bold text-center"
      target="_blank"
    >
      {children}
    </a>
  );
}
