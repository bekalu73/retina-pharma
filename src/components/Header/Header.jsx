import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
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
          <Link to="/" onClick={handleLinkClick} className="underlined">
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick} className="underlined">
            About
          </Link>
          <Link
            to="/customers"
            onClick={handleLinkClick}
            className="underlined"
          >
            Customers
          </Link>
          <Link to="/support" onClick={handleLinkClick} className="underlined">
            Technical Support
          </Link>
          <Link
            className="header__links-contact"
            to="/contact"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
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
