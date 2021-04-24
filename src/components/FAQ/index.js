import React from "react";
import Accordion from "../Accordion";

export default function FAQ({ pergunta, children }) {
  return <Accordion title={pergunta}>{children}</Accordion>;
}
