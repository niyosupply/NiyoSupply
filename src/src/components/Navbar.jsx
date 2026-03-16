import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>NiyoSupply</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/store">Shop</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Account</Link>
      </div>
    </nav>
  );
}

export default Navbar;