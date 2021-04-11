import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Scrollspy from "react-scrollspy";
import menu, { anchors } from "../../menu";
import MenuIcon from "../../icons/MenuIcon";

export default function AppBar({ onToggleMenu }) {
  return (
    <div className="z-50 shadow-md p-3 font-compact absolute md:fixed flex flex-row items-center bg-white w-full min-h-appbar">
      <nav className="flex justify-between flex-grow">
        <Logo />
        <button className="text-red block md:hidden" onClick={onToggleMenu}>
          <MenuIcon />
        </button>
        <Scrollspy
          items={["intro", ...anchors]}
          currentClassName="text-red"
          className="hidden md:block"
        >
          <a className="hidden">Introdução</a>
          {menu.map((item) => (
            <a
              key={`mobile-${item.text}`}
              href={`#${item.anchor}`}
              className="pr-5 uppercase tracking-wider"
            >
              {item.text}
            </a>
          ))}
        </Scrollspy>
      </nav>
    </div>
  );
}

AppBar.propTypes = {
  onToggleMenu: PropTypes.func,
};

AppBar.defaultProps = {};
