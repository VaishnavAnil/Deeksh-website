import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "../App.css";
import SearchBar from "./SearchBar";
import JewelryNavbar from "./JewelryNavbar"; // We'll create this component next
import Logo from "../Assets/Logo/logo.jpg";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      <header className={darkMode ? "dark" : ""}>
        <div className="container">
          <div className="logo">
            <Link to="./">
              <img src={Logo} alt="Deeksh Logo" width="80" height="auto" />
            </Link>
          </div>
          <nav>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <SearchBar /> {/* Improved search bar component */}
            <div className="header-icons">
              <Link to="/login" className="user-icon">
                <FaUser />
              </Link>
              <Link to="/wishlist" className="wishlist-icon">
                <FaHeart />
              </Link>
              <Link to="/cart" className="cart-icon">
                <FaShoppingCart />
              </Link>
            </div>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? <BsSun /> : <BsMoonStarsFill />}
            </button>
          </nav>
        </div>
      </header>

      {/* Add the horizontal jewelry navbar beneath the header */}
      <JewelryNavbar />
    </>
  );
}

export default Header;
