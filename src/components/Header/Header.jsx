import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { FiMoon, FiSun, FiX } from "react-icons/fi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const headerColor = useHeaderColor();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <section className={`h-wrapper ${darkMode ? "dark" : ""}`} style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="./logo.png" alt="logo" width={100} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className={`flexCenter h-menu ${menuOpened ? "open" : "closed"}`}
            style={getMenuStyles(menuOpened)}
          >
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
            <button className="button">
              <a href="mailto:zainkeepscode@gmail.com">Contact</a>
            </button>
            <a href="#sign-in" className="button">Sign In</a>
            <a href="#login" className="button">Login</a>
            <div className="menu-close" onClick={() => setMenuOpened(false)}>
              <FiX size={24} />
            </div>
          </div>
        </OutsideClickHandler>

        {/* Dark mode toggle */}
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
        </div>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
