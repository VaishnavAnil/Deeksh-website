import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Shop</h3>
          <ul className="footer-links">
            <li>
              <Link to="/necklaces">Necklaces</Link>
            </li>
            <li>
              <Link to="/earrings">Earrings</Link>
            </li>
            <li>
              <Link to="/rings">Rings</Link>
            </li>
            <li>
              <Link to="/bracelets">Bracelets</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul className="footer-links">
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping & Returns</Link>
            </li>
            <li>
              <Link to="/size-guide">Size Guide</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <ul className="footer-links">
            <li>
              <Link to="/our-story">Our Story</Link>
            </li>
            <li>
              <Link to="/sustainability">Sustainability</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div style={{ display: "flex", gap: "15px", fontSize: "1.5rem" }}>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest">
              <FaPinterest />
            </a>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3>Subscribe</h3>
            <p>Sign up for our newsletter</p>
            <form style={{ display: "flex", marginTop: "10px" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  padding: "8px",
                  borderRadius: "4px 0 0 4px",
                  border: "1px solid #ccc",
                  width: "70%",
                }}
              />
              <button
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "white",
                  border: "none",
                  borderRadius: "0 4px 4px 0",
                  padding: "0 12px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Deeksh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;  