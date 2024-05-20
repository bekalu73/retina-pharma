import React from "react";

import logo from "../../assets/Retina-pharmaceuticals-logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container--logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="footer__container--links">
          <Link to="#">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Customers</Link>
          <Link to="#">Technical Support</Link>
          <Link className="header__links-contact" to="#">
            Contact Us
          </Link>
        </div>
        <div className="footer__container--copyright">
          Copyright © 2024 Retina Pharmaceuticals. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
