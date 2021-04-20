import React from "react";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import HeroTitle from "./HeroTitle";
import Button from "../Button";

export default function Hero() {
  return (
    <section
      id="intro"
      className="pt-appbar bg-gradient-to-t md:bg-gradient-to-r from-red via-red to-yellow"
    >
      <div className="flex flex-col-reverse md:flex-row p-8 md:p-12">
        <div className="flex flex-col justify-between md:pr-8 pt-8 md:pt-0 m-auto">
          <HeroTitle />
          <TextBlock />
          <Button>Doe suas notas fiscais</Button>
        </div>
        <ImageBlock />
      </div>
    </section>
  );
}
