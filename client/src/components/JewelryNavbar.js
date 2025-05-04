import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function JewelryNavbar() {
  const categories = [
    "Necklaces",
    "Earrings",
    "Bracelets",
    "Rings",
    "Anklets",
    "Pendants",
    "Gold Jewelry",
    "Silver Jewelry",
    "Diamond Jewelry",
    "Pearl Jewelry",
    "Wedding Collection"
  ];

  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    // Show/hide left button based on scroll position
    setShowLeftButton(scrollLeft > 0);
    
    // Show/hide right button based on whether we can scroll more to the right
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="jewelry-navbar">
      <div className="jewelry-nav-container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
        {showLeftButton && (
          <button 
            className="jewelry-scroll-btn jewelry-scroll-left" 
            onClick={scrollLeft}
            aria-label="Scroll categories left"
          >
            <FaChevronLeft />
          </button>
        )}
        
        <div 
          className="jewelry-categories"
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className={index === 0 ? "active" : ""}
            >
              {category}
            </Link>
          ))}
        </div>
        
        {showRightButton && (
          <button 
            className="jewelry-scroll-btn jewelry-scroll-right" 
            onClick={scrollRight}
            aria-label="Scroll categories right"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default JewelryNavbar;