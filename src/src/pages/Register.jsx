import React from "react";

function Register() {
  return (
    <div className="page">

      <h2>Register</h2>

      <input type="text" placeholder="Complete Name" />

      <input type="email" placeholder="Email Address" />

      <input type="text" placeholder="Address" />

      <input type="text" placeholder="Mobile Number" />

      <input type="password" placeholder="Password" />

      <input type="password" placeholder="Confirm Password" />

      <button>Create Account</button>

    </div>
  );
}

export default Register;