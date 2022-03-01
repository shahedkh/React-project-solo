import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="header">
      <nav>
        <div></div>
        <div className="logo">
        Mazr3a
          <i
            className="burger-menu fas fa-bars"
            onClick={() => setShowNav(!showNav)}
          ></i>
        </div>
        <div>
          <ul
            style={showNav == false ? { display: "none" } : { display: "flex" }}
          >
            <li>
              <Link to="/Furniture-Ecommerce" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop </Link>
            </li>
            <li>
              <Link to="/services">Services </Link>
            </li>
            <li>
              <Link to="/Furniture-Ecommerce">Contact </Link>
            </li>
          </ul>
        </div>
        {props.loggedin ? (
          <div
            className="login"
            style={showNav == false ? { display: "none" } : { display: "flex" }}
          >
            <Link to="/Account"> My Account</Link>

            <Link
              to="/Furniture-Ecommerce"
              onClick={() => {
                props.setLogged(null);
              }}
            >
              Logout
            </Link>
            <Link to="/Checkout">
              <i className="fas fa-shopping-cart"></i>
              <span>{props.cartCounter}</span>
            </Link>
          </div>
        ) : (
          <div
            className="login"
            style={showNav == false ? { display: "none" } : { display: "flex" }}
          >
            <Link to="/Registration">Login</Link>
            <Link to="/Registration">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
