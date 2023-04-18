import React from "react";
import "../styles/GetStarted.scss";

export default function GetStarted() {
  return (
    <div className="get-started-container">
      <div className="get-started-img-container">
        <img alt="" src="/images/bg-boost-mobile.svg" />
      </div>
      <div className="get-started-info-container">
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>
    </div>
  );
}
