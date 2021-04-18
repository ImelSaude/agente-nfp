import React, { useState } from "react";
import Button from "./Button";

export default function TabButton({ className, tabChanged }) {
  const [selected, setSelected] = useState("phone");
  const handleClick = (variant) => {
    setSelected(variant);
    tabChanged && tabChanged(variant);
  };
  return (
    <div className={className}>
      <div className="flex w-full">
        <Button
          className="w-1/2 flex-grow rounded-l-md"
          selected={selected === "phone"}
          onClick={() => handleClick("phone")}
        >
          Celular
        </Button>
        <Button
          className="w-1/2 flex-grow rounded-r-md"
          selected={selected === "laptop"}
          onClick={() => handleClick("laptop")}
        >
          Computador
        </Button>
      </div>
    </div>
  );
}
