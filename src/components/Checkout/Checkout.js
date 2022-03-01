import React, { useState, useEffect } from "react";
import "./Checkout.css";
function Checkout(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [data, setData] = useState(props.data);
  let sum = 0;
  const handleDiscountInput = (e) => {
    setCode(e.target.value);
  };
  const submitDiscount = (e) => {
    e.preventDefault();
    if (code == "save30") {
      setDiscount(totalPrice * (30 / 100));
      console.log(totalPrice - discount);
    }
  };
  const handleDecrement = (id_) => {
    const newADataArray = data.map((element) => {
      if (element.id == id_ && element.quantity >= 1) {
        element.quantity = element.quantity - 1;
        return element;
      } else {
        return element;
      }
    });
    setData(newADataArray);
  };
  const handleIncrement = (id_) => {
    const newADataArray = data.map((element) => {
      if (element.id == id_) {
        element.quantity = element.quantity + 1;
        return element;
      } else {
        return element;
      }
    });
    setData(newADataArray);
  };
  useEffect(() => {
    return props.data.map((item) => {
      if (props.cartItems.includes(item.id)) {
        sum += item.price * item.quantity;
        setTotalPrice(sum);
      }
    });
  });
  return (
    <div>
      <div className="checkout-container">
        <p>SHOPPING CART</p>
        {data.map((item) => {
          return props.cartItems.includes(item.id) ? (
            <div className="cart-items" key={item.id}>
              <img src={item.src} />
              <h5>{item.name}</h5>
              <div className="quantity">
                <button
                  onClick={() => {
                    handleDecrement(item.id);
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => {
                    handleIncrement(item.id);
                  }}
                >
                  +
                </button>
              </div>
              <div className="price"> $ {item.price * item.quantity}</div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <div className="total-price">
        <form onSubmit={submitDiscount}>
          <input
            type="text"
            placeholder="Discount Code"
            onChange={handleDiscountInput}
          />
          <input type="submit" value="Submit" />
        </form>

        <div className="priceAmount">Total Price : {totalPrice} $</div>
        <div className="new">
          {discount ? (
            <p className="newTotal">
              Total : {Math.round(totalPrice - discount)}$
            </p>
          ) : (
            ""
          )}
          {discount ? (
            <p className="discount"> -{Math.round(discount)} $</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
