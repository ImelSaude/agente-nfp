import React from "react";
import PropTypes from "prop-types";
import menu from "../../menu";

export default function AppDrawer({ isOpen, onClickOutside }) {
  return (
    <div className="z-90">
      <div
        className={`${
          isOpen ? "bg-darktransparent" : "hidden"
        } w-full h-full fixed`}
        onClick={onClickOutside}
      ></div>
      <div
        className={`transform top-0 right-0 w-64 bg-purple fixed h-full overflow-auto ease-in-out transition-all duration-300 z-100  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={onClickOutside}
      >
        <ul>
          {menu.map((item) => (
            <li key={`mobile-${item.text}`} className="flex">
              <a
                href={`#${item.anchor}`}
                onClick={onClickOutside}
                className="w-full h-16 flex justify-center items-center active:bg-purple-dark"
              >
                <span className="font-compact uppercase tracking-wider">
                  {item.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

AppDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClickOutside: PropTypes.func,
};

AppDrawer.defaultProps = {
  isOpen: false,
};
