import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="section1">
          <h2>Contact Us</h2>
          <p>Amman,Jordan</p>
          <p>077152415</p>
          <p>HomeAndDecor@gmail.com</p>
        </div>
        <div className="section2">
          <h2>Support</h2>
          <p>Shipping and Return</p>
          <p>Our policy</p>
          <p>Terms and conditions</p>
          <p>FAQs</p>
        </div>
        <div className="section3">
          <h2>About Us</h2>
          <p>New Products</p>
          <p>best sellers</p>
          <p>Our stores</p>
        </div>
        <div className="copyright">© 2022 Copyright: Home and Decor</div>
      </footer>
    </div>
  );
}

export default Footer;
