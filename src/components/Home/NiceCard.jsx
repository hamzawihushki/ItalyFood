import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function NiceCard({ image, name, id }) {
  return (
    <Link to={`/menu/${id}`}>
      <motion.div
        className="card1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="content">
          <div className="front">
            <div className="back-content">
              <strong
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  color: "blanchedalmond",
                }}
              >
                {name}
              </strong>
              <p
                style={{
                  fontSize: "30px",
                  color: "#ff9e0c",
                  textAlign: "center",
                  fontFamily: "open Sans",
                }}
              >
                20$
              </p>
            </div>
          </div>

          <div className="back">
            <div className="img" style={{ display: "flex" }}>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
