import React, { useState } from "react";

function Products({ products, addToCart }) {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search-box">
        <div className="search-left">
          <div className="search-icon">🔍</div>
          <input
            className="search-input"
            placeholder="I’m Looking for.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="search-close">✕</div>
      </div>

      <div className="round-chip">Products</div>

      {filtered.map((product) => (
        <div className="list-card" key={product.id}>
          <div>
            <div className="list-title">{product.name}</div>
            <div className="list-desc">{product.description}</div>
            <div className="inline-actions">
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
              <button className="btn-light">₱{product.price.toFixed(2)}</button>
            </div>
          </div>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
}

export default Products;