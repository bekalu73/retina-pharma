import React from "react";
import "./AboutCard.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { PiTarget } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";

function AboutCard() {
  return (
    <div className="aboutCard">
      <div className="aboutCard__container">
        <div className="aboutCards__header">
          <h2>Mission, Vision and Values</h2>
          {/* <p>Major Line of Business</p> */}
        </div>
        <div className="aboutCard__container--item">
          <div className="aboutCard__item">
            <div className="aboutCard__img">
              <PiTarget size={70} />
            </div>
            <div className="aboutCard__title">Mission</div>
            <div className="aboutCard__list">
              <p>
                We are committed to the prosperity of our customers, fellow
                employees, our community, and our company; we build strong
                partnerships with all of them.
              </p>
            </div>
          </div>
          <div className="aboutCard__item">
            <div className="aboutCard__img">
              <FaEye size={70} />
            </div>
            <div className="aboutCard__title">Vision</div>
            <div className="aboutCard__list">
              We see our selves being a leading provider of quality diagnostics
              and life sciences solutions in Ethiopia and the Horn of Africa
            </div>
          </div>
          <div className="aboutCard__item">
            <div className="aboutCard__img">
              <FaHandHolding size={70} />
            </div>
            <div className="aboutCard__title">Core Values</div>
            <div className="aboutCard__list">
              <ul>
                <li>
                  <IoCheckmarkDoneSharp />
                  Quality Obsession
                </li>
                <li>
                  <IoCheckmarkDoneSharp />
                  Excellence of service
                </li>
                <li>
                  <IoCheckmarkDoneSharp />
                  Flexibility in partnership
                </li>
                <li>
                  <IoCheckmarkDoneSharp />
                  Ethical business-standard
                </li>
                <li>
                  <IoCheckmarkDoneSharp />
                  Mutual benefit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
