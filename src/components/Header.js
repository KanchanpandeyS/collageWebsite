import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import facebook from "./../assets/facebook-logo.svg";
import twitter from "./../assets/icon-twitter.svg";
import logo from "./../assets/logo.svg";
import logo2 from "./../assets/Image 33.png";

const Header = () => {
  return (
    <div>
      <div className="upper-container-wrapper">
        <div className="upper-header-container">
          <div className="upper-header">
            <h6>Page Last Updated On: 07th February, 2023</h6>
            <div className="logo">
              <h6>
                Skip to Main Content | Screen Reader Access | A A+ A++ | |
                English
              </h6>
              <div className="logo-container">
                <AiOutlineCaretDown />
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-header-container">
        <div className="mid-header">
          <img src={logo} alt="logo2" />
          <img src={logo2} alt="logo3" />
        </div>
      </div>
      <div className="header-wrapper">
        <div className="header-container">
          <div className="header">
            <a href="#about">About Institute</a>
            <a href="#acdemic">Academics</a>
            <a href="#faculty">Faculty</a>
            <a href="#reserach">Research</a>
            <a href="#placements">Gallery</a>
            <a href="#relations">International Relations</a>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
