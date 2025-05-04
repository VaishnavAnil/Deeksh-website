import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, addToCart }) {
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <div className="image-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-card-content">
          <h3>{product.name}</h3>
          <p className="price">${product.price}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <FaShoppingCart style={{ marginRight: "5px" }} /> Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
