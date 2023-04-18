import React from "react";
import "../styles/HeroSlide.scss";

export default function HeroSlide() {
  return (
    <div className="hero-slide">
      <img alt="" src="/images/illustration-working.svg" />
      <div className="hero-content-container">
        <h2>More than just shorter links</h2>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
