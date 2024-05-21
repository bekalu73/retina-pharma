import React from "react";
import "./Suppliers.css";

function Suppliers() {
  return (
    <div className="supplier">
      <div className="supplier__container">
        <div className="supplier__title">Our Suppliers</div>
        <div className="supplier__subtitle">
          Multinational companies we work with
        </div>
      </div>
      <div className="suppliers__img">
        <div className="suppliers__img--item">
          <img
            src="https://retina-pharma.com/wp-content/uploads/2015/05/roche.jpg"
            alt="Roche"
          />
        </div>
        <div className="suppliers__img--item">
          <img
            src="https://retina-pharma.com/wp-content/uploads/2015/05/keeler.jpg"
            alt="Keeler"
          />
        </div>
        <div className="suppliers__img--item">
          <img
            src="https://retina-pharma.com/wp-content/uploads/2015/05/quantel.jpg"
            alt="Quantel"
          />
        </div>
        <div className="suppliers__img--item">
          <img
            src="https://retina-pharma.com/wp-content/uploads/2015/05/elga.jpg"
            alt="Elga"
          />
        </div>
        <div className="suppliers__img--item">
          <img
            src="https://retina-pharma.com/wp-content/uploads/2015/05/evoqua.jpg"
            alt="Evoqua"
          />
        </div>
        <div className="suppliers__img--item">
          <img
            src="https://retina-pharma.com/wp-content/uploads/2015/05/omni.jpg"
            alt="Omni"
          />
        </div>
      </div>
    </div>
  );
}

export default Suppliers;
