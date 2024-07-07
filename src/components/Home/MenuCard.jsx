import React from "react";
import { useState } from "react";
import "../../App.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function MenuCard({ image, index }) {
  return (
    <div className="container menu-wrapper ">
      <div className="discount-image">
        <img
          src={image}
          alt=""
          style={{
            filter: "drop-shadow(4.185px 59.854px 28.5px rgba(12,13,12,0.45))",
            width: "100%",
          }}
        />
      </div>
      <div className="discount-details">
        <h2>See Our Menu</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <Link to="/menu">
          <motion.button
            type="button"
            className="dark-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            {" "}
            READ MORE
          </motion.button>{" "}
        </Link>
      </div>
    </div>
  );
}
