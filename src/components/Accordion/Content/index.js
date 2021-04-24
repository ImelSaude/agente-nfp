import React from "react";

export default function Content({ visible, children }) {
  return <div className={`${visible ? "" : "hidden"}`}>{children}</div>;
}
