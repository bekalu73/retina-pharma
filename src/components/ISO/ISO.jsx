import React from "react";
import "./ISO.css";
import { LiaCertificateSolid } from "react-icons/lia";

function ISO() {
  return (
    <div className="certified">
      <div className="certified__container">
        <div className="certified-item">
          <div>
            <LiaCertificateSolid />
          </div>
          <div>ISO 45001:2018 Certified</div>
        </div>
        <div className="certified-item">
          <div>
            <LiaCertificateSolid />
          </div>
          <div>ISO 45001:2018 Certified</div>
        </div>
        <div className="certified-item">
          <div>
            <LiaCertificateSolid />
          </div>
          <div>ISO 45001:2018 Certified</div>
        </div>
      </div>
    </div>
  );
}

export default ISO;
