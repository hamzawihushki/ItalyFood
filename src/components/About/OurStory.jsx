import React from "react";

import image from "../../assets/Sun dried Tomato and Roasted Aubergine Tagliatelle.jpeg";
import image2 from "../../assets/about-img-6.jpg";

export default function OurStory() {
  return (
    <>
      <div className="our-story">
        <div className="our-story-details">
          <header>
            <h1>OUR STORY</h1>
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
            <p>We aim to inspire</p>
            <h5>
              Lorem ipsum dolor sit amet, repudiare inciderint referrentur qui
              ei, sit apeirian detraxit mnesarchum et. Eos nostro vivendo
              consulatu ea, purto posse quo at. Elit reprehendunt ius an posse
              facilis quaerendum.
            </h5>
            <button type="button" className="light-btn">
              READ MORE
            </button>
          </header>
        </div>
        <div className="our-image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="special-moment">
        <div className="our-story">
          <div className="our-image">
            <img src={image2} alt="" />
          </div>
          <div className="special-moment-details">
            <h1>We Make Every Moment Special</h1>

            <h5>
              Lorem ipsum dolor sit amet, repudiare inciderint referrentur qui
              ei, sit apeirian detraxit mnesarchum et. Eos nostro vivendo
              consulatu ea, purto posse quo at. Elit reprehendunt ius an posse
              facilis quaerendum.
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet, repudiare inciderint Lorem ipsum dolor
              sit amet, repudiare inciderint Lorem ipsum dolor sit amet,
              repudiare inciderint
              <br />
              <br />
              <br /> Lorem ipsum dolor sit amet, repudiare inciderint
              referrentur qui ei, sit apeirian detraxit mnesarchum et. Eos
              nostro vivendo consulatu ea, purto posse quo at. Elit reprehendunt
              ius an posse facilis quaerendum.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
