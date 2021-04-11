import React from "react";
import LogoText from "./LogoText";

export default function Logo() {
  return (
    <h5 className="text-logo">
      <LogoText>Agente</LogoText>
      <LogoText variant="secondary">Valorizando gente</LogoText>
    </h5>
  );
}
