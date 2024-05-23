import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__title">About Us</div>
        <div className="about__subtitle">Who we are</div>
        <div className="about__paragraph">
          <p>
            Retina Pharmaceuticals is a decade long young and dynamic company
            specialized in trading of quality diagnostics and life sciences
            solutions, Ophthalmic Products, Water Treatment solutions, and
            related products and services.
          </p>
          <p>
            Our personal motivation consists of offering the best quality
            solutions to our customers. As our slogan well reflects we are
            committed to Quality. Retina has installed and commissioned hundreds
            of high-tech medical equipment throughout the country.
          </p>
        </div>
        <Link to="/about" className="about__btn">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default About;
