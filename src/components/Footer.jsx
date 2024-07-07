import React from "react";
import { WhatsApp } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import "../App.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="container ">
      <div className="footer-details">
        <h5> Italian Food</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim
          enim.
        </p>
        <div className="icons">
          <Link to={"https://wa.me/+962772756325"} target="_blank">
            <WhatsApp className="social-icon" />
          </Link>
          <Link to={"https://www.facebook.com/hamzawi.hushki"} target="_blank">
            <Facebook className="social-icon" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/hamza-hushki-12644b257/"}
            target="_blank"
          >
            <LinkedIn className="social-icon" />
          </Link>
          <Link to={"https://www.facebook.com/hamzawi.hushki"} target="_blank">
            <Twitter className="social-icon" />
          </Link>
        </div>
      </div>
      <ul>
        <h5> About</h5>
        <li>History</li>
        <li>Our Team</li>
        <li>Brand Guidelines</li>
        <li>Terms & Condition</li>
        <li>Privacy Policy</li>
      </ul>
      <ul>
        <h5> Services</h5>
        <li>How to Order</li>
        <li>Our Product</li>
        <li>Order Status</li>
        <li>Promo</li>
        <li>Payment Method</li>
      </ul>
      <ul>
        <h5> Other</h5>
        <li>Contact us</li>
        <li>Help</li>
        <li>Privacy</li>
      </ul>
    </footer>
  );
}
