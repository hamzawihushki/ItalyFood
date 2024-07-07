import React from "react";
import "../App.css";
import { motion } from "framer-motion";
export default function BasicImage({ title = "", image, description }) {
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
      <div className="basic-image">
        <div className="basic-image-wrapper continer">
          <div className="basic-image-details">
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
            <hr
              style={{
                background: "#e9aa1e",
                width: "50%",
                height: "5px",
                margin: "auto",
              }}
            />
            <p className="basic-description">{description}</p>
          </div>
          <div className="back-image">
            <img className="" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}
