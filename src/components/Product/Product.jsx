import React from "react";
import "./Product.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

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
            <button className="product__btn">Contact Us</button>
          </div>
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
            <button className="product__btn">Contact Us</button>
          </div>
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
            <button className="product__btn">Contact Us</button>
          </div>
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
            <button className="product__btn">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
