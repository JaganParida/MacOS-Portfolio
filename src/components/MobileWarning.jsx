import React from "react";
import "./MobileWarning.scss";

const MobileWarning = () => {
  return (
    <div className="mobile-warning-overlay">
      <div className="warning-content">
        <h1>
          {" "}
          <i class="ri-alert-line"></i> Desktop Mode Required
        </h1>
        <p>
          To experience this macOS portfolio, please switch to a desktop browser
          or a device with a width greater than 768px.
        </p>
      </div>
    </div>
  );
};

export default MobileWarning;
