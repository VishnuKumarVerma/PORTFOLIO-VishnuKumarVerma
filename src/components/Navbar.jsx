import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="text-white px-6 py-4 flex justify-between items-center z-10">
        <h1 className="logo-text text-3xl font-bold">MyPortfolio</h1>
        <div className="flex">
          <div className="mode">
            <MdOutlineLightMode />
          </div>
        </div>

        <div id="menuToggle">
          <input type="checkbox" id="menuCheckbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <li>
              <label htmlFor="menuCheckbox">
                <a href="#home">Home</a>
              </label>
            </li>
            <li>
              <label htmlFor="menuCheckbox">
                <a href="#services">Services</a>
              </label>
            </li>
            <li>
              <label htmlFor="menuCheckbox">
                <a href="#skills">Skills</a>
              </label>
            </li>
            <li>
              <label htmlFor="menuCheckbox">
                <a href="#portfolio">Projects</a>
              </label>
            </li>
            <li>
              <label htmlFor="menuCheckbox">
                <a href="#contact">Contact Us</a>
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
