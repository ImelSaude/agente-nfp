import React from "react";
import Image from "next/image";

export default function TextBlock() {
  return (
    <div className="flex justify-center w-full md:max-w-1/3 m-auto">
      <div className="w-1/2 md:w-full m-auto">
        <Image
          src="/images/fundo-square.png"
          className="rounded-full"
          width={500}
          height={500}
          layout="responsive"
          priority={true}
        />
      </div>
    </div>
  );
}
