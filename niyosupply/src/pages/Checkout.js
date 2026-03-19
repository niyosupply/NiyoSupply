import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout(props) {
  const cartItems = props.cartItems;
  const cartTotal = props.cartTotal;
  const placeOrder = props.placeOrder;
  const navigate = useNavigate();

  const [payment, setPayment] = useState("GCash");
  const [receive, setReceive] = useState("Delivery");

  function handleOrder() {
    placeOrder({ payment, receive });
    navigate("/history");
  }

  return (
    <div className="checkout-box">
      <div className="page-heading">Checkout</div>

      <div className="form-group">
        <label className="form-label">Payment Method</label>
        <select value={payment} onChange={(e) => setPayment(e.target.value)}>
          <option>GCash</option>
          <option>Cash</option>
          <option>Bank Transfer</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Receive Product</label>
        <select value={receive} onChange={(e) => setReceive(e.target.value)}>
          <option>Delivery</option>
          <option>Pickup</option>
        </select>
      </div>

      <div className="history-box">
        {cartItems.map((item) => (
          <div className="row-between" key={item.productId} style={{ marginBottom: 10 }}>
            <span>{item.product.name} x {item.quantity}</span>
            <span>₱{(item.product.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="row-between">
          <strong>Total</strong>
          <strong>₱{cartTotal.toFixed(2)}</strong>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <button className="btn btn-block" onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;