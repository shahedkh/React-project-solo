import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import "./Shop.css";

function Shop(props) {
  const [data, setData] = useState(props.data);
  const [sortValue, setSortValue] = useState("");
  const handleSort = (e) => {
    if (e.target.value == "low") {
      setSortValue("low");
      setData(
        data.sort(function (a, b) {
          return a.price - b.price;
        })
      );
    } else if (e.target.value == "high") {
      setSortValue("high");
      setData(
        data.sort(function (a, b) {
          return b.price - a.price;
        })
      );
    } else if (e.target.value == "All") {
      setSortValue("All");
      setData(
        data.sort(function (a, b) {
          return a.id - b.id;
        })
      );
    }
  };
  return (
    <div>
      <div className="shop-background"></div>
      <div className="shop-container">
        <div className="text">
          <h3>FURNITURE</h3>
          <p>
            Discover our favorites fashionable discoveries, a selection of cool
            items to integrate in your wardrobe. Compose a unique style with
            personality which matches your own.
          </p>
        </div>
        <div className="search-sort">
          <div className="icons">
            <i className="fas fa-th"></i>
            <i className="fas fa-list"></i>
          </div>
          <div className="sort">
            <div>Sort By </div>
            <select onChange={handleSort}>
              <option value="All">Default</option>
              <option value="low">price low to High </option>
              <option value="high">price High to low </option>
            </select>
          </div>
        </div>
        <div className="cards-container">
          {data.map((item) => {
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
