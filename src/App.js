import React from "react";
import HeroSlide from "./components/HeroSlide";
import AdvanceStats from "./components/AdvanceStats";
import ShortenSlide from "./components/ShortenSlide";
import "./App.scss";
import GetStarted from "./components/GetStarted";
import ShortlyFooter from "./components/ShortlyFooter";

function App() {
  return (
    <div className="App">
      <div className="main-app-container">
        <HeroSlide />
        <ShortenSlide />
        <div className="main-app-advance-stats-container">
          <AdvanceStats />
        </div>
        <GetStarted />
        <ShortlyFooter />
      </div>
    </div>
  );
}

export default App;
