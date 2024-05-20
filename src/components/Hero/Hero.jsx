import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero-img.jpg";
function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__left-container">
            <div className="hero__left--welcome">Welcome To</div>
            <div className="hero__left--retina">
              Retina <span>Pharmaceuticals</span>
            </div>
            <div className="hero__left--moto">
              Commited To Quality.Commited To You
            </div>
            <button className="hero__left--btn">Contact Us</button>
          </div>
        </div>
        <div className="hero__right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
