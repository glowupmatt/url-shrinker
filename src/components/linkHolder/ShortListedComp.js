import React from "react";

export default function ShortListedComp({ data, link }) {
  return (
    <div className="short-listed-main-container">
      <div className="short-listed-data-container">
        <div className="full-link">
          <p>{data}</p>
          <hr />
          <p>fdsaf</p>
        </div>
        <button>Copy</button>
      </div>
    </div>
  );
}
