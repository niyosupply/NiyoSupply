import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

function Storefront({ products, addToCart }) {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-heading">Storefront</div>

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

      <div className="card-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Storefront;