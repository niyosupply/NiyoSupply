import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar({ user, cartCount }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <>
      {!isLogin && !isRegister && (
        <div className="top-bar">
          <Link to="/profile" className="account-chip">
            <div className="account-icon">👤</div>
            <div className="account-text">
              <div className="big">{user.signedIn ? user.fullName : "Guest Account"}</div>
              <div className="small">{user.signedIn ? "signed in" : "sign in"}</div>
            </div>
          </Link>

          <Link to="/cart" className="cart-circle">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      )}

      <nav className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive || isHome ? "active" : ""}`}>
          <div className="nav-bubble">
            <div className="nav-icon">⌂</div>
          </div>
          <div>Home</div>
        </NavLink>

        <NavLink to="/store" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
          <div className="nav-bubble">
            <div className="nav-icon">🛍</div>
          </div>
          <div>Shop</div>
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
          <div className="nav-bubble">
            <div className="nav-icon">👤</div>
          </div>
          <div>Account</div>
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;