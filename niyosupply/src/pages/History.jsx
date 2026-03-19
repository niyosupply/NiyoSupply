import React from "react";

function History() {
  const transactions = [
    {
      id: 1,
      product: "Coco Coir Pot",
      price: "₱200",
      date: "March 15, 2026",
      status: "Delivered",
    },
    {
      id: 2,
      product: "Coir Mat",
      price: "₱350",
      date: "March 10, 2026",
      status: "Delivered",
    },
    {
      id: 3,
      product: "Coco Peat Block",
      price: "₱150",
      date: "March 5, 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="page">
      <h1>NiyoSupply</h1>

      <h2>Transaction History</h2>

      {transactions.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>Product:</strong> {item.product}</p>
          <p><strong>Price:</strong> {item.price}</p>
          <p><strong>Date:</strong> {item.date}</p>
          <p><strong>Status:</strong> {item.status}</p>
        </div>
      ))}

      <footer>
        <p>
          For educational purposes only, and no copyright infringement is intended.
        </p>
      </footer>
    </div>
  );
}

export default History;
