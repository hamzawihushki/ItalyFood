import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/client-1.png";
import img2 from "../../assets/client-2.png";
import img3 from "../../assets/client-3.png";
import img4 from "../../assets/client-4.png";
import img5 from "../../assets/client-5.png";
export default function sliderAbout() {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 1500,
    cssEase: "ease",
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div style={{ background: "#000 " }}>
          <img src={img1} />
        </div>
        <div style={{ background: "#000 " }}>
          <img src={img2} />
        </div>
        <div style={{ background: "#000 " }}>
          <img src={img3} />
        </div>
        <div style={{ background: "#000 " }}>
          <img src={img4} />
        </div>
        <div style={{ background: "#000 " }}>
          <img src={img5} />
        </div>
      </Slider>
    </div>
  );
}
