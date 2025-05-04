import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function CollectionsNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  // Collection categories with subcategories
  const collections = [
    {
      name: "Necklaces",
      subcategories: ["Pendants", "Chains", "Chokers", "Statement Necklaces"],
    },
    {
      name: "Earrings",
      subcategories: ["Studs", "Hoops", "Danglers", "Ear Cuffs"],
    },
    {
      name: "Rings",
      subcategories: [
        "Engagement",
        "Wedding Bands",
        "Cocktail Rings",
        "Stackable",
      ],
    },
    {
      name: "Bracelets",
      subcategories: [
        "Tennis Bracelets",
        "Bangles",
        "Cuffs",
        "Charm Bracelets",
      ],
    },
    {
      name: "Special Collections",
      subcategories: ["Wedding", "Birthstone", "Festive", "Limited Edition"],
    },
    {
      name: "Material",
      subcategories: ["Gold", "Silver", "Rose Gold", "Platinum", "Gemstones"],
    },
  ];

  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="collections-navbar-container" ref={navbarRef}>
      {/* Collections Button */}
      <button
        className={`collections-toggle-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Collections</span>
        <FaChevronRight className={`toggle-icon ${isOpen ? "rotated" : ""}`} />
      </button>

      {/* Vertical Navbar */}
      <div className={`vertical-navbar ${isOpen ? "open" : ""}`}>
        <ul className="collections-list">
          {collections.map((collection, index) => (
            <li key={index} className="collection-item">
              <details>
                <summary>{collection.name}</summary>
                <ul className="subcategory-list">
                  {collection.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={`/collections/${collection.name.toLowerCase()}/${subcategory
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subcategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CollectionsNavbar;