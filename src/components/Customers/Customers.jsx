import React from "react";
import "./Customers.css";
import { BiBadgeCheck } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";

function Customers() {
  return (
    <div className="customers" id="customers">
      <div className="customers__header">
        <h2>Customers</h2>
        <p>Our Major customers</p>
      </div>
      <div className="customers__row">
        <div className="customers__list">
          <ul>
            <li>
              <BiBadgeCheck size={35} />
              Ministry of Health
            </li>
            <li>
              <BiBadgeCheck size={35} />
              Pharmaceutical Supply Agency (EPSA)
            </li>
            <li>
              <BiBadgeCheck size={35} />
              Ethiopian Public Health Institute (EPHI)
            </li>
            <li>
              <BiBadgeCheck size={35} />
              Public and Private Hospitals
            </li>
            <li>
              <BiBadgeCheck size={35} />
              Private Clinics
            </li>
          </ul>
        </div>
        <div className="customers__list">
          <ul>
            <li>
              <BiBadgeCheck size={35} />
              Regional Health Bureaus
            </li>
            <li>
              <BiBadgeCheck size={35} />
              Diagnostics Laboratories
            </li>
            <li>
              <BiBadgeCheck size={35} />
              Universities and Research Centres
            </li>
            <li>
              <BiBadgeCheck size={35} />
              African Union, UNOPS and other NGOs{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="customers__header">
        <h2>Partners</h2>
        <p>Our Major partners</p>
      </div>
      <div className="customers__row">
        <div className="customers__list">
          <ul>
            <li>
              <BiRightArrowCircle size={35} />
              Ethiopian Medical Laboratory Association
            </li>
            <li>
              <BiRightArrowCircle size={35} />
              Ethiopian Public Health Laboratory Association
            </li>
            <li>
              <BiRightArrowCircle size={35} />
              Ethiopian Pharmacy Association
            </li>
            <li>
              <BiRightArrowCircle size={35} />
              African Society of Laboratory Medicine
            </li>
            <li>
              <BiRightArrowCircle size={35} />
              Ethiopian Ophthalmology Associations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Customers;
