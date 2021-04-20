import React, { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Title from "../Title";
import LeftArrow from "../../../icons/LeftArrow";
import RightArrow from "../../../icons/RightArrow";
import Backdrop from "../../Backdrop";
import slideDecks from "../slideDecks";

export default function Tab({ variant, slideDeck }) {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [showFullImg, setShowFullImg] = useState(false);

  const currentSlide = slideDeck[currentSlideIdx];
  const maxSteps = slideDeck.length;

  useEffect(() => {
    setCurrentSlideIdx(0);
  }, [variant]);

  return (
    <div className="font-body text-lg md:text-xl leading-loose">
      <Title
        number={currentSlideIdx + 1}
        title={currentSlide.titulo}
        icon={currentSlide.icone}
      />
      <div className="flex content-center mt-2 bg-gradient-to-br from-yellow-light to-gray-lighter py-4 min-h-40">
        <button
          onClick={() => setCurrentSlideIdx((prevSlideIdx) => prevSlideIdx - 1)}
          disabled={currentSlideIdx === 0}
          className="disabled:opacity-20 p-4"
        >
          <LeftArrow />
        </button>
        <div className="flex flex-grow flex-wrap justify-evenly">
          <button
            onClick={() => setShowFullImg(true)}
            className={`p-0 self-stretch focus:outline-none ${
              variant === "phone"
                ? "max-w-1/2 w-1/2 md:max-w-1/4 md:w-1/4"
                : "max-w-full w-full md:max-w-1/3 md:w-1/3"
            }`}
          >
            <div
              className={`relative w-full ${
                variant === "phone" ? "pt-phone" : "pt-pc"
              }`}
            >
              <div className="absolute inset-0">
                <Image
                  // phone: 616x1007
                  // laptop: 1327x716}
                  src={slideDecks[variant][currentSlideIdx].img}
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </button>
          <div className="relative flex-grow overflow-hidden md:w-6/12 md:max-w-1/2">
            {slideDeck.map((slide, idx) => {
              const isCurrent = idx === currentSlideIdx;
              return (
                <div
                  key={`slide__text__${idx}`}
                  className={`md:w-full md:h-full flex flex-col content-center justify-center text-center md:text-left p-2 md:p-4 md:absolute leading-relaxed ${
                    !isCurrent ? "hidden md:block" : ""
                  }`}
                  style={{
                    left: `${(idx - currentSlideIdx) * 100}%`,
                    top: 0,
                  }}
                >
                  <style>{"p {margin-bottom: 1rem}"}</style>
                  {slide.texto}
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => setCurrentSlideIdx((prevSlideIdx) => prevSlideIdx + 1)}
          disabled={currentSlideIdx === maxSteps - 1}
          className="disabled:opacity-20 p-4"
        >
          <RightArrow />
        </button>
        <Backdrop open={showFullImg} onClick={() => setShowFullImg(false)}>
          <div className="p-4 flex justify-center content-center">
            <img
              src={currentSlide.img}
              alt={currentSlide.titulo}
              className="max-w-full max-h-full w-auto h-auto block mx-auto my-auto"
            />
          </div>
        </Backdrop>
      </div>
    </div>
  );
}

Tab.propTypes = {
  slideDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.oneOf(["phone", "laptop"]),
};

Tab.defaultProps = {
  variant: "phone",
};
