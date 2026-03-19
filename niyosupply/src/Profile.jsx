import React from "react";
import { Link } from "react-router-dom";

function Profile({ user }) {
  return (
    <div className="profile-box">
      <div className="page-heading">Profile</div>

      <div className="form-group">
        <div className="form-label">Full Name</div>
        <div>{user.fullName}</div>
      </div>

      <div className="form-group">
        <div className="form-label">Email</div>
        <div>{user.email}</div>
      </div>

      <div className="form-group">
        <div className="form-label">Address</div>
        <div>{user.address}</div>
      </div>

      <div className="form-group">
        <div className="form-label">Mobile Number</div>
        <div>{user.mobile}</div>
      </div>

      {!user.signedIn && (
        <Link to="/login">
          <button className="btn">Sign In</button>
        </Link>
      )}
    </div>
  );
}

export default Profile;