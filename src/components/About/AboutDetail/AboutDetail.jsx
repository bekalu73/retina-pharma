import React from "react";
import "./AboutDetail.css";
import sampleImg from "../../../assets/sample-testing.jpg";

function AboutDetail() {
  return (
    <div className="aboutDetail">
      <div className="aboutDetail__container">
        <div className="aboutDetail__container--left">
          <img src={sampleImg} alt="Sample" />
        </div>
        <div className="aboutDetail__container--right">
          <div className="aboutDetail__paragraph">
            <p>
              Retina Pharmaceuticals is a decade long young and dynamic company
              specialized in trading of quality diagnostics and life sciences
              solutions, Ophthalmic Products, Water Treatment solutions, and
              related products and services.
            </p>
            <p>
              Our personal motivation consists of offering the best quality
              solutions to our customers. As our slogan well reflects we are
              committed to Quality. Retina has installed and commissioned
              hundreds of high-tech medical equipment throughout the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;
