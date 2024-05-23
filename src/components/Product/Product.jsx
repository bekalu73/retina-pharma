import React from "react";
import "./Product.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="product">
      <div className="product__container">
        <div className="products__header">
          <h2>Products</h2>
          <p>Major Line of Business</p>
        </div>
        <div className="product__container--item">
          <div className="product__item">
            <div className="product__img">
              <img
                src="https://retina-pharma.com/wp-content/uploads/2015/05/Picture2-150x150.png"
                alt=""
              />
            </div>
            <div className="product__title">Diagnostics and Life Sciences</div>
            <div className="product__list">
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
            <Link to="/contact" className="product__btn">
              Contact Us
            </Link>
          </div>
          <div className="product__item">
            <div className="product__img">
              <img
                src="https://retina-pharma.com/wp-content/uploads/2015/05/Picture3-150x150.png"
                alt=""
              />
            </div>
            <div className="product__title">Ophthalmic Products</div>
            <div className="product__list">
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
            <Link to="/contact" className="product__btn">
              Contact Us
            </Link>
          </div>
          <div className="product__item">
            <div className="product__img">
              <img
                src="https://retina-pharma.com/wp-content/uploads/2015/05/Picture4-150x150.png"
                alt=""
              />
            </div>
            <div className="product__title">Water Purification System</div>
            <div className="product__list">
              <ul>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  Laboratory grade water purifiers
                </li>
              </ul>
            </div>
            <Link to="/contact" className="product__btn">
              Contact Us
            </Link>
          </div>
          <div className="product__item">
            <div className="product__img">
              <img
                src="https://retina-pharma.com/wp-content/uploads/2015/05/Picture5-150x150.png"
                alt=""
              />
            </div>
            <div className="product__title">
              Tender Management and Trade Auxiliary
            </div>
            <div className="product__list">
              <ul>
                <li>
                  <IoCheckmarkDoneSharp size={25} />
                  With the Ethiopian Pharmaceutical Supply Agency and other big
                  procuring agencies
                </li>
              </ul>
            </div>
            <Link to="/contact" className="product__btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
