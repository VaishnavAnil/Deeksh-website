import React from "react";
import { Link } from "react-router-dom";

function CategoryBanner() {
  const categories = [
    {
      name: "Wedding Collection",
      image:
        "https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/collections/wedding",
    },
    {
      name: "Luxury Gemstones",
      image:
        "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/collections/gemstones",
    },
    {
      name: "Festival Specials",
      image:
        "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/collections/festival",
    },
  ];

  return (
    <section className="category-banner">
      <h2>Featured Collections</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="category-card">
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>
            <div className="category-overlay">
              <h3>{category.name}</h3>
              <span className="view-collection">View Collection</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryBanner;
