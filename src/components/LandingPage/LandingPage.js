import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import ItemCard from "../Shop/ItemCard";

function LandingPage(props) {
  return (
    <div>
      <div className="backgroundImage">
        <div>
          <p>
          See more of our farms <br /> 
          </p>
          <button>
            <Link to="/shop">Shop Now</Link>
          </button>
        </div>
      </div>
      <div className="featured-products">
        <h2>The Best Farms</h2>
        <div className="products">
          {props.data.map((item, index) => {
            return index < 10 && index > 5 ? (
              <div key={item.id}>
                <ItemCard
                  data={item}
                  loggedin={props.loggedin}
                  setcartCounter={props.setcartCounter}
                  cartCounter={props.cartCounter}
                  setCartItems={props.setCartItems}
                  cartItems={props.cartItems}
                />
              </div>
            ) : null;
          })}
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-Info">
          <h2>Store Information</h2>
          <div>
            <i className="fas fa-map-marker"></i>
            <p>Furniture and Home Decor Amman,Jordan</p>
          </div>
          <div>
            <i className="fas fa-phone-alt"></i>
            <p>Call us: 077775152</p>
          </div>
          <div>
            <i className="far fa-envelope"></i>
            <p>Email :Homedecore@gmail.com</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div>
              <label>Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Subject</label>
              <input type="text" />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="7" />
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
