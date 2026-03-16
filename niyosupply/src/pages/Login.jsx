import React from "react";

function Login() {
  return (
    <div className="page">

      <h2>Sign In</h2>

      <input type="email" placeholder="Email address" />

      <input type="password" placeholder="Password" />

      <button>Login</button>

    </div>
  );
}

export default Login;