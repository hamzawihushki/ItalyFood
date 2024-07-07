import React from "react";
import "../../App.css";
import discount1 from "../../assets/discount1.png";
import discount2 from "../../assets/discount2.png";
import ScrollAnimation from "react-animate-on-scroll";
import DiscountItem from "./DiscountItem";
export default function Discount() {
  return (
    <div className="discount">
      <ScrollAnimation
        animateIn="bounceInRight"
        initiallyVisible={true}
        duration={1}
        animateOnce={true}
      >
        <DiscountItem image={discount1} index={0} />
      </ScrollAnimation>
      {/* ARRAY INDEX Key */}
      <ScrollAnimation
        animateIn="bounceInLeft"
        initiallyVisible={true}
        duration={1}
        animateOnce={true}
      >
        <DiscountItem image={discount2} index={1} />
      </ScrollAnimation>
    </div>
  );
}
