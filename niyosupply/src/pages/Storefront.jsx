import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Coconut Fiber",
    price: 60,
    image: "/images/coconut.jpg",
    description: "Natural coconut coir fiber"
  }
];

function Storefront() {
  return (
    <div className="page">

      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>

    </div>
  );
}

export default Storefront;