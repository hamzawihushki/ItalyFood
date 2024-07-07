import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import pizza from "../../assets/pizza.png";
import slice from "../../assets/slicePizza.png";
import "../../App.css";
export default function SitAmer() {
  return (
    <div className="sit">
      <div className="container sit-wrapper">
        <h1 className="italic-text-light">Lorem Ipsum Dolor Sit Amer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis{" "}
        </p>
        <div className="pizza">
          <ScrollAnimation
            animateIn="bounceIn"
            initiallyVisible={true}
            duration={5}
            animateOnce={true}
            style={{ Width: "100%" }}
          >
            <img src={slice} className="slice" />
            <img src={pizza} />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
