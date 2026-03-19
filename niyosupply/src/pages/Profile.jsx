import React from "react";

function Profile() {
  const user = {
    name: "Juan Dela Cruz",
    email: "juan@email.com",
    address: "Quezon City",
    mobile: "09123456789",
  };

  return (
    <div className="page">
      <h1>NiyoSupply</h1>

      <h2>User Profile</h2>

      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
      />

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Mobile:</strong> {user.mobile}</p>

      <button>Edit Profile</button>
      <button>Logout</button>

      <footer>
        <p>
          For educational purposes only, and no copyright infringement is intended.
        </p>
      </footer>
    </div>
  );
}

export default Profile;
