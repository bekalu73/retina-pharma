import React from "react";
import "./Technicalsup.css";

function Technicalsup() {
  return (
    <div className="technical" id="technical-supports">
      <div className="technical__header">
        <h2>Technical Supports</h2>
      </div>
      <div className="technical__items">
        <div className="technical__item">
          <h3>Manufacturer Trained Engineers and Application Specialists</h3>
          <p>
            We have highly qualified Field Service Engineers and Field
            Application Specialists trained in different parts of the world that
            support over 100 installed base equipment available in different
            parts of the country. Our Engineers are fully equipped with high
            tech, high precision manufacturer-approved maintenance tools.
          </p>
        </div>
        <div className="technical__item">
          <h3>Manufacturer Approved Tools, Services and spare parts</h3>
          <p>
            Uninterrupted in-country availability of spare parts in stock for
            immediate consumption
          </p>
        </div>
        <div className="technical__item">
          <h3>Periodic and on-demand Maintenance</h3>
          <p>
            Prompt preventive and curative maintenance service of equipment to
            our customers located in every corridor of the country.
          </p>
        </div>
      </div>
      <div className="technical__img">
        <img
          src="https://retina-pharma.com/wp-content/uploads/2015/05/retina-map.png"
          alt="location"
        />
        <p>Regions where installed bases exist</p>
      </div>
    </div>
  );
}

export default Technicalsup;
