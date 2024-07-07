import React from "react";
import "../../App.css";
export default function Information() {
  return (
    <div className="information">
      <div className="container">
        <h1 className="italic-text-light">Lorem Ipsum Dolor</h1>
        <div className="info-details">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex quia voluptas sit aspernatur
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex quia voluptas sit aspernatur
          </div>
        </div>
        <button type="button" className="light-btn">
          READ MORE
        </button>
      </div>
    </div>
  );
}
