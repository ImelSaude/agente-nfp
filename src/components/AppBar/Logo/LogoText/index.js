import React from "react";
import PropTypes from "prop-types";

export default function LogoText({ variant, children }) {
  return (
    <span
      className={`font-title py-0.5 px-1 uppercase ${
        variant === "secondary"
          ? "text-red bg-transparent"
          : "text-white bg-red"
      }`}
    >
      {children}
    </span>
  );
}

LogoText.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
};

LogoText.defaultProps = {
  variant: "primary",
};
