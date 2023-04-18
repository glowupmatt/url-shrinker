import React from "react";

export default function ShortlyFooter() {
  const shortlyFooterArr = [
    {
      title: "Features",
      linkOne: "Link Shortening",
      linkTwo: "Branded Links",
      linkThree: "Analytics",
    },
    {
      title: "Resources",
      linkOne: "Blog",
      linkTwo: "Developers",
      linkThree: "Support",
    },
    {
      title: "Company",
      linkOne: "About",
      linkTwo: "Our Team",
      linkThree: "Careers",
      linkFour: "Contact",
    },
    {
      facebook: "/images/icon-facebook.svg",
      twitter: "/images/icon-twitter.svg",
      pintrest: "/images/icon-pinterest.svg",
      instagram: "/images/icon-instagram.svg",
    },
  ];

  return (
    <div className="footer-container">
      <footer className="main-footer-container">
        <img alt="" src="/images/logo.svg" />
        {shortlyFooterArr.map((data) => {
          return (
            <div key={data.index} className="footer-data-container">
              <h3>{data.title}</h3>
              <p>{data.linkOne}</p>
              <p>{data.linkTwo}</p>
              <p>{data.linkThree}</p>
              <p>{data.linkFour}</p>
            </div>
          );
        })}
        <div className="footer-img-container">
          <img alt="" src={shortlyFooterArr[3].facebook} />
          <img alt="" src={shortlyFooterArr[3].twitter} />
          <img alt="" src={shortlyFooterArr[3].pintrest} />
          <img alt="" src={shortlyFooterArr[3].instagram} />
        </div>
      </footer>
    </div>
  );
}
