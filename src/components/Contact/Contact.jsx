import React, { useRef } from "react";
import "./Contact.css";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2>Contact Us</h2>
        <h5>Get In Touch</h5>
        <div className="contact__option">
          <div className="contact__option--info">
            <div className="contact__option--number">
              <p>
                <FaPhone />
                Telephone: <span>+251118218121</span>
              </p>
              <p>
                <FaMobileScreenButton />
                Mobile: <span> +251911-74 35 97, +251912-05 22 33</span>
              </p>
            </div>
            <div className="contact__option--email">
              <TfiEmail />
              Email:
              <p>
                <span>
                  <FaArrowAltCircleRight />
                  info@retina-pharma.com
                </span>
              </p>
              <p>
                <span>
                  <FaArrowAltCircleRight />
                  deme@retina-pharma.com
                </span>
              </p>
              <p>
                <span>
                  <FaArrowAltCircleRight />
                  retinams@gmail.com
                </span>
              </p>
            </div>
            <div className="contact__option--callcenter">
              <PiPhoneCallFill />
              Call Center:
              <p>
                <span>
                  <FaArrowAltCircleRight />
                  +2518218121 (working hours)
                </span>
              </p>
              <p>
                <span>
                  <FaArrowAltCircleRight />
                  +251911938611 (off working hours including weekends &
                  holidays)
                </span>
              </p>
            </div>
            <div className="contact__option--address">
              <MdLocationPin />
              Address:
              <p>
                <span>
                  Bole Subcity, Woreda 03, Yoki Building H.No.724-201, around
                  Adey Ababa stadium.
                </span>
              </p>
            </div>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Full email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Leave Your Message Here"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
