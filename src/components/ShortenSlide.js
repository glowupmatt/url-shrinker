import React, { useState, useEffect } from "react";
import ShortListedComp from "./linkHolder/ShortListedComp";
import "../styles/ShortenSlide.scss";

export default function ShortenSlide() {
  const [link, setLink] = useState("");
  const [fullLink, setFullLink] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const onClickHandler = (e) => {
  //   if (!link) {
  //     return null;
  //   } else {
  //     const fetchData = async () => {
  //       const result = await fetch(
  //         `https://api.shrtco.de/v2/shorten?url=${link}`
  //       );
  //       const data = await result.json();
  //       console.log(data);
  //     };
  //     fetchData();
  //     // setFullLink((prev) => [...prev, link]);
  //   }
  // };

  console.log(link);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html`,
        {
          method: "POST",
        }
      );
      const data = await result.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="ShortenSlide">
      <form onSubmit={handleSubmit}>
        <div className="shorten-slide-container">
          <img alt="" src="/images/bg-shorten-mobile.svg" />
          <div className="shorten-slide-input-container">
            <input
              onChange={(e) => setLink(e.target.value)}
              placeholder="Shorten a link here..."
              type="text"
            ></input>
            <button>Shorten It!</button>
          </div>
        </div>
        {fullLink.map((data, index) => {
          return (
            <div key={data + index} className="short-listed-container">
              <ShortListedComp key={data + index} link={link} data={data} />
            </div>
          );
        })}
      </form>
    </div>
  );
}
