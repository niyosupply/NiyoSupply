import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, increaseQty, decreaseQty, cartTotal }) {
  return (
    <div className="cart-page">
      <div className="back-btn">←</div>
      <div className="page-heading">My Basket</div>

      <div className="cart-layout">
        {cartItems.map((item) => (
          <div className="cart-row" key={item.productId}>
            <img src={item.product.image} alt={item.product.name} />

            <div>
              <div className="product-name">{item.product.name}</div>
              <div className="product-desc">{item.product.description}</div>
              <div style={{ marginTop: 12, fontWeight: 800 }}>₱{item.product.price.toFixed(2)}</div>
            </div>

            <div className="qty-box">
              <button className="qty-btn" onClick={() => decreaseQty(item.productId)}>−</button>
              <div className="qty-num">{item.quantity}</div>
              <button className="qty-btn" onClick={() => increaseQty(item.productId)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-box">
        <div className="row-between">
          <strong>Total</strong>
          <strong>₱{cartTotal.toFixed(2)}</strong>
        </div>
        <div style={{ marginTop: 16 }}>
          <Link to="/checkout">
            <button className="btn btn-block">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;