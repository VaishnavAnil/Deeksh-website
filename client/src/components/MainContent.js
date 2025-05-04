import React from "react";
import ProductCard from "./ProductCard";
import CategoryBanner from "./CategoryBanner";
import video from "./../Assets/jewelry-banner/bannerVideo.mp4";
import productData from "../productData";

function MainContent({ addToCart }) {
  // Get featured products (first 4)
  const featuredProducts = productData.slice(0, 4);

  // Get newest products (different from featured)
  const newestProducts = productData.slice(4, 8);

  // Get best sellers (another set)
  const bestSellers = productData.slice(8, 12);

  return (
    <main>
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <video src={video} autoPlay loop muted playsInline />
        <div className="hero-text">
          <h1>Discover Exquisite Jewelry</h1>
          <p>Explore our stunning collection of handcrafted pieces.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>

      {/* Featured Collections with images */}
      <CategoryBanner />

      {/* Featured Collection Section */}
      <section className="featured-products">
        <h2>Featured Collection</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="featured-products">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          {newestProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="featured-products">
        <h2>Best Sellers</h2>
        <div className="product-grid">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default MainContent;
