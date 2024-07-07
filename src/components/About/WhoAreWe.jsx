import React from "react";

import "../../App.css";
import CardAbout from "./CardAbout";
import image1 from "../../assets/about-img-1-768x468.jpg";
import image2 from "../../assets/about-img-2-768x468.jpg";
import image3 from "../../assets/about-img-3-768x468.jpg";
export default function WhoAreWe() {
  return (
    <div className="who-are-we container">
      <header>
        <h1>Who Are We</h1>
        <hr
          style={{
            background: "#c5b358",
            width: "8%",
            height: "3px",
            margin: "-12px  auto 10px",
            border: "0",
            opacity: "1",
          }}
        />
        <p>Everything You Want to Know</p>
      </header>
      <section className="card-about-wrapper">
        <CardAbout
          image={image1}
          title="STRATEGY AND TIMING"
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes."
          }
        />
        <CardAbout
          image={image2}
          title={"LEADERS OF TOMORROW"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes."
          }
        />
        <CardAbout
          image={image3}
          title={"BRAND - CENTERED BUYING"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes."
          }
        />
      </section>
    </div>
  );
}
