import React from "react";
import { data } from "../advanceSlideData";
import "../styles/AdvanceStats.scss";

export default function AdvanceStats() {
  return (
    <div className="advance-stats-background-color">
      <div className="advance-desc-items-container">
        <div className="advance-info-container">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="info-container">
          {data.map((item) => {
            return (
              <div key={item.img} className="advance-container">
                <div className="advance-img-container">
                  <img alt="" src={item.img} />
                </div>
                <div key={item.index} className="advance-img-container-desc">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
