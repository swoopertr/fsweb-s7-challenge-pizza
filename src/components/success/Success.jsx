import React from "react";
import "./success.css";
import SuccessTitle from "./SuccessTitle";
import SuccessAbout from "./SuccessAbout";
import SuccessResult from "./SuccessResult";

const Success = () => {
  return (
    <div className="success-container">
      <SuccessTitle />

      <div className="success-line">
        <svg height="1" width="200">
          <line
            x1="0"
            y1="0"
            x2="200"
            y2="0"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
        </svg>
      </div>
      <SuccessAbout />
      <SuccessResult />
    </div>
  );
};
export default Success;
