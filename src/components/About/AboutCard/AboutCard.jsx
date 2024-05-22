import React from "react";
import "./AboutCard.css";

function AboutCard() {
  return (
    <div className="aboutCard">
      <div className="aboutCard__container">
        <div className="aboutCards__header">
          <h2>aboutCards</h2>
          <p>Major Line of Business</p>
        </div>
        <div className="aboutCard__container--item">
          <div className="aboutCard__item">
            <div className="aboutCard__img">
              <img
                src="https://retina-pharma.com/wp-content/uploads/2015/05/Picture2-150x150.png"
                alt=""
              />
            </div>
            <div className="aboutCard__title">
              Diagnostics and Life Sciences
            </div>
            <div className="aboutCard__list">
              <ul>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Medical Laboratory Equipment
                </li>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Medical Laboratory Reagents
                </li>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Test Kits
                </li>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Scientific and Research tools and kits
                </li>
              </ul>
            </div>
            <button className="aboutCard__btn">Contact Us</button>
          </div>
          <div className="aboutCard__item">
            <div className="aboutCard__img">
              <img
                src="https://retina-pharma.com/wp-content/uploads/2015/05/Picture3-150x150.png"
                alt=""
              />
            </div>
            <div className="aboutCard__title">Ophthalmic aboutCards</div>
            <div className="aboutCard__list">
              <ul>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Ophthalmic Consumables
                </li>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Ophthalmic Surgical Instruments
                </li>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Ophthalmic Equipment
                </li>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Eye drops
                </li>
              </ul>
            </div>
            <button className="aboutCard__btn">Contact Us</button>
          </div>
          <div className="aboutCard__item">
            <div className="aboutCard__img">
              <img
                src="https://retina-pharma.com/wp-content/uploads/2015/05/Picture4-150x150.png"
                alt=""
              />
            </div>
            <div className="aboutCard__title">Water Purification System</div>
            <div className="aboutCard__list">
              <ul>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Laboratory grade water purifiers
                </li>
              </ul>
            </div>
            <button className="aboutCard__btn">Contact Us</button>
          </div>
          <div className="aboutCard__item">
            <div className="aboutCard__img">
              <img
                src="https://retina-pharma.com/wp-content/uploads/2015/05/Picture5-150x150.png"
                alt=""
              />
            </div>
            <div className="aboutCard__title">
              Tender Management and Trade Auxiliary
            </div>
            <div className="aboutCard__list">
              <ul>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  With the Ethiopian Pharmaceutical Supply Agency and other big
                  procuring agencies
                </li>
              </ul>
            </div>
            <button className="aboutCard__btn">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
