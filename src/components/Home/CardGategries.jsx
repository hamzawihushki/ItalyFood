import React from "react";
import "../../App.css";
export default function CardGategries({ title, description, image }) {
  return (
    <div className="card text-center" style={{ width: "30%", border: "none" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
