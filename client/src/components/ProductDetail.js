import React from "react";
import { useParams } from "react-router-dom";
import productData from "../productData";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = productData.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <main className="product-detail-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        {product.variations && (
          <div className="product-variations">
            <p>Variations: {product.variations.join(", ")}</p>
          </div>
        )}
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetail;
