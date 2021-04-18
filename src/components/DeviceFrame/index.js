import React from "react";
import PropTypes from "prop-types";
import { MarvelDevices } from "./react-css-devices";

export default function DeviceFrame({ images, activeImg, deviceName, scale }) {
  return (
    <div>
      <style>{`
        .marvel-device .screen > div {
          width: 100%;
          height: 100%;
        }

        .img-list {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          position: relative;
          background-color: black;
          left: ${-activeImg * 100}%;
          transition-property: left;
          transition-duration: 0.2s;
        }

        .device-image-content {
          width: 100%;
          height: 100%;
          position: relative;
          margin: auto;
        }
      `}</style>
      <MarvelDevices
        deviceName={deviceName}
        color={"white"}
        orientation={"portrait"}
        transform={scale}
      >
        <div className="img-list">
          {images.map((imgSrc, idx) => (
            <img
              className="device-image-content"
              key={`deviceframe__img__${idx}__${imgSrc}`}
              src={imgSrc}
            />
          ))}
        </div>
      </MarvelDevices>
    </div>
  );
}

DeviceFrame.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeImg: PropTypes.number,
  deviceName: PropTypes.oneOf([
    "iphone6",
    "iphone6",
    "iphone6plus",
    "iphone5s",
    "iphone5c",
    "ipad",
    "iphone4s",
    "nexus5",
    "s5",
    "htc-one",
    "macbook",
  ]),
  scale: PropTypes.number,
};

DeviceFrame.defaultProps = {
  activeImg: 0,
  deviceName: "iphone6",
  scale: 1,
};
