import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home(props) {
  const products = props.products;
  const addToCart = props.addToCart;
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="center-title">NiyoSupply</div>

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

      <div className="section-head-row">
        <div className="left">Recommended</div>
        <Link to="/products" className="right">See all</Link>
      </div>

      <div className="card-grid">
        {filtered.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;