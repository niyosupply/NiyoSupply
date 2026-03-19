import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const signIn = props.signIn;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    signIn(email, password);
    navigate("/");
  }

  return (
    <div className="login-wrap">
      <div className="logo-row">
        <div className="logo-mark"></div>
        <div className="logo-text">TITLE</div>
      </div>

      <div className="login-caption">I’m Looking for..</div>

      <div className="form-panel">
        <div className="form-title">SIGN IN</div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-block" type="submit">Login</button>
        </form>

        <div style={{ textAlign: "center", marginTop: 20, fontWeight: 800, fontSize: 20 }}>
          <Link to="/register">Don’t have an account? Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;