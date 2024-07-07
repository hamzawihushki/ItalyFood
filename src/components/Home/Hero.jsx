import React from "react";
import "../../App.css";
import heroImage from "../../assets/ImageHere .png";
import heroImage2 from "../../assets/ImageHere2 .png";
import n3n3 from "../../assets/n3n3.png";
import { motion } from "framer-motion";
export default function Hero() {
  let title = "Italian Food";
  const titleVariant = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,

        when: "beforeChildren",
      },
    },
  };

  const charVariant = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="" style={{}}>
      <div className="hero">
        <div className="hero-wrapper container">
          <div className="hero-details">
            <motion.h1
              className="italic-text-light"
              variants={titleVariant}
              initial="hidden"
              animate="visible"
            >
              {title.split("").map((char, index) => {
                return (
                  <motion.span key={index} variants={charVariant}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>
            <p className="hero-subtitle"> LOREMIPSUM DOLOR</p>
            <button type="button" className="light-btn">
              READ MORE
            </button>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              iusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="hero-images">
            <img className="img1" src={heroImage} />
            <img
              className="img2"
              src={heroImage2}
              style={{
                position: "absolute",
                left: "-20%",
                bottom: "-20%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
