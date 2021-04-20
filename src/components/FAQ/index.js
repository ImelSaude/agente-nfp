import React from "react";

export default function FAQ({ pergunta, children }) {
  return (
    <div className="mb-8">
      <h5 className="font-bold">{pergunta}</h5>
      {children}
    </div>
  );
}
