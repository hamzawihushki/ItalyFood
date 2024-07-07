import React from "react";
import { useState } from "react";
import "../../App.css";
export default function DiscountItem({ image, index }) {
  return (
    <div
      className="container discount-wrapper "
      style={{ flexDirection: index % 2 == 0 ? "row-reverse" : "row" }}
    >
      <div className="discount-image">
        <img
          src={image}
          alt=""
          style={{
            filter: "drop-shadow(4.185px 59.854px 28.5px rgba(12,13,12,0.45))",
          }}
        />
      </div>
      <div className="discount-details">
        <h2>Discount up to 50% All Excursions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <button type="button" className="dark-btn">
          READ MORE
        </button>{" "}
      </div>
    </div>
  );
}
