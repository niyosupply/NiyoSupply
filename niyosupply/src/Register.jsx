import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ register }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    address: "",
    mobile: "",
  });

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    register({
      email: form.email,
      fullName: form.fullName,
      address: form.address,
      mobile: form.mobile,
      signedIn: true,
    });
    navigate("/");
  }

  return (
    <div className="form-panel">
      <div className="form-title">Create Account</div>

      <form onSubmit={handleSubmit} className="form-grid">
        <div>
          <label className="form-label">E-mail Address</label>
          <input className="form-input" type="email" onChange={(e) => updateField("email", e.target.value)} />
        </div>

        <div>
          <label className="form-label">Complete Name</label>
          <input className="form-input" type="text" onChange={(e) => updateField("fullName", e.target.value)} />
        </div>

        <div className="full">
          <label className="form-label">Address</label>
          <input className="form-input" type="text" onChange={(e) => updateField("address", e.target.value)} />
        </div>

        <div>
          <label className="form-label">Mobile Number</label>
          <input className="form-input" type="text" onChange={(e) => updateField("mobile", e.target.value)} />
        </div>

        <div>
          <label className="form-label">Password</label>
          <input className="form-input" type="password" onChange={(e) => updateField("password", e.target.value)} />
        </div>

        <div className="full">
          <label className="form-label">Confirm Password</label>
          <input className="form-input" type="password" onChange={(e) => updateField("confirmPassword", e.target.value)} />
        </div>

        <div className="full">
          <button className="btn btn-block" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;