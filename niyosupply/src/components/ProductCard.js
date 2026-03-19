import React from "react";

function ProductCard(props) {
  const product = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="product-card" onClick={() => addToCart(product.id)}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />
        <div className="price-pill">₱{product.price.toFixed(2)}</div>
      </div>
      <div className="product-text">
        <div className="product-name">{product.name}</div>
        <div className="product-desc">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductCard;