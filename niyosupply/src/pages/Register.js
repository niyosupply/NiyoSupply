import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register(props) {
  const register = props.register;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    birthday: "",
    address: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validateForm() {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.birthday.trim()) newErrors.birthday = "Birthday is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 12) {
      newErrors.password = "Password must be at least 12 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const fullName = `${form.firstName} ${form.middleName} ${form.lastName} ${form.suffix}`
      .replace(/\s+/g, " ")
      .trim();

    register({
      email: form.email,
      fullName: fullName,
      address: form.address,
      mobile: form.mobile,
      birthday: form.birthday,
      signedIn: true,
    });

    navigate("/");
  }

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Create Account</h2>

        <div className="form-group full">
          <label>E-mail Address</label>
          <input
            className="form-input"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="name-row full">
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-input"
              type="text"
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label>Middle Name</label>
            <input
              className="form-input"
              type="text"
              value={form.middleName}
              onChange={(e) => updateField("middleName", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-input"
              type="text"
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <label>Suffix</label>
            <input
              className="form-input"
              type="text"
              placeholder="Jr., Sr., III"
              value={form.suffix}
              onChange={(e) => updateField("suffix", e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Birthday</label>
          <input
            className="form-input"
            type="text"
            placeholder="MM/DD/YY"
            maxLength="8"
            value={form.birthday}
            onChange={(e) => updateField("birthday", e.target.value)}
          />
          {errors.birthday && <span className="error">{errors.birthday}</span>}
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            className="form-input"
            type="text"
            value={form.mobile}
            onChange={(e) => updateField("mobile", e.target.value)}
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div className="form-group full">
          <label>Address</label>
          <input
            className="form-input"
            type="text"
            value={form.address}
            onChange={(e) => updateField("address", e.target.value)}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-input"
            type="password"
            value={form.password}
            onChange={(e) => updateField("password", e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            className="form-input"
            type="password"
            value={form.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        <div className="full">
          <button className="submit-btn" type="submit">
            Create Account
          </button>
        </div>

        <div className="login-link full">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;