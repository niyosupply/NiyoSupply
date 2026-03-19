import React from "react";

function History(props) {
  const transactions = props.transactions;

  return (
    <div className="history-box">
      <div className="page-heading">Transaction History</div>

      {transactions.map((item) => (
        <div key={item.id} className="list-card" style={{ gridTemplateColumns: "1fr" }}>
          <div className="row-between">
            <strong>{item.id}</strong>
            <strong>{item.status}</strong>
          </div>
          <div>Date: {item.date}</div>
          <div>Payment: {item.payment}</div>
          <div>Receive: {item.receive}</div>
          <div>Total: ₱{item.total.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}

export default History;