import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/cat2.png";
import Slider from "react-slick";
import DiscountItem from "./DiscountItem";
import MenuCard from "./MenuCard";
export default function MenuInfo() {
  var settings = {
    dots: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1500,
    cssEase: "ease",
  };
  return (
    <div
      className=""
      style={{
        marginBlock: "10% 0",
      }}
    >
      <Slider {...settings}>
        <div style={{ background: "#000 " }}>
          <MenuCard image={image} />
        </div>
        <div style={{ background: "#000 " }}>
          <MenuCard image={image} />
        </div>
        <div style={{ background: "#000 " }}>
          <MenuCard image={image} />
        </div>
      </Slider>
    </div>
  );
}
