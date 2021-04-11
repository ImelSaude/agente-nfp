import React from "react";
import Image from "next/image";

export default function TextBlock() {
  return (
    <div className="flex-grow flex justify-center">
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
