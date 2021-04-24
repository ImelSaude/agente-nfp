import React, { useState } from "react";
import Title from "./Title";
import Content from "./Content";

export default function Accordion({ title, children }) {
  const [visible, setVisible] = useState(false);
  return (
    <button
      onClick={() => {
        setVisible((v) => setVisible(!v));
      }}
      className="bg-white bg-opacity-5 w-full text-left p-4 mb-1 rounded-sm shadow-md"
    >
      <Title expanded={visible}>{title}</Title>
      <Content visible={visible}>{children}</Content>
    </button>
  );
}
