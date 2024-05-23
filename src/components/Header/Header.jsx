import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Retina-pharmaceuticals-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={`header__links ${isOpen ? "header__links--open" : ""}`}>
          <div className="header__dropdown">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `underlined ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
          </div>

          <div className="header__dropdown">
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `underlined ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>
            <div className="dropdown__menu">
              <Link to="/about" onClick={handleLinkClick}>
                Mission
              </Link>
              <Link to="/about" onClick={handleLinkClick}>
                Vision
              </Link>
              <Link to="/about" onClick={handleLinkClick}>
                Core Values
              </Link>
              <Link to="/about" onClick={handleLinkClick}>
                Efficient Structure
              </Link>
            </div>
          </div>

          <div className="header__dropdown">
            <NavLink
              to="/customers"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `underlined ${isActive ? "active" : ""}`
              }
            >
              Customers
            </NavLink>
            <div className="dropdown__menu">
              <Link to="/customers" onClick={handleLinkClick}>
                Our Customers
              </Link>
              <Link to="/customers" onClick={handleLinkClick}>
                Partners
              </Link>
            </div>
          </div>

          <div className="header__dropdown">
            <NavLink
              to="/support"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `underlined ${isActive ? "active" : ""}`
              }
            >
              Technical Support
            </NavLink>
            {/* <div className="dropdown__menu">
              <Link to="/sub-support-1" onClick={handleLinkClick}>
                Sub Support 1
              </Link>
              <Link to="/sub-support-2" onClick={handleLinkClick}>
                Sub Support 2
              </Link>
            </div> */}
          </div>

          <NavLink
            className="header__links-contact"
            to="/contact"
            onClick={handleLinkClick}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="header__hamburger">
          {isOpen ? (
            <AiOutlineClose size={30} onClick={() => setOpen(!isOpen)} />
          ) : (
            <GiHamburgerMenu size={30} onClick={() => setOpen(!isOpen)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
