import React from "react";

export default function Backdrop({ children, open, onClick }) {
  return (
    <div
      className={`z-100 fixed inset-x-0 inset-y-0 bg-darktransparent justify-center content-center ${
        open ? "flex" : "hidden"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
