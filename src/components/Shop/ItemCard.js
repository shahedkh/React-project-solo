import React, { useState } from "react";

function ItemCard(props) {
  const addToCart = (itemID) => {
    if (!props.cartItems.includes(itemID)) {
      props.setcartCounter(props.cartCounter + 1);
      props.setCartItems([...props.cartItems, itemID]);
    }
  };
  return (
    <div className="ItemCard-container" data-aos="fade-down">
      <div className="card">
        <img src={props.data.src} />
        <div className="text">
          <h5>{props.data.name}</h5>
          <div className="price"> $ {props.data.price}</div>
          <button
            onClick={() => {
              addToCart(props.data.id);
            }}
          >
            <span> Add to cart</span>
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
