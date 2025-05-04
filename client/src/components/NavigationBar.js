// NavigationBar.js
import React from "react";

function NavigationBar({ currentSection, onSectionChange }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="/order-management"
            className={currentSection === "orderManagement" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              onSectionChange("orderManagement");
            }}
          >
            Order Management
          </a>
        </li>
        <li>
          <a
            href="/product-management"
            className={currentSection === "productManagement" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              onSectionChange("productManagement");
            }}
          >
            Product Management
          </a>
        </li>
        <li>
          <a
            href="/user-management"
            className={currentSection === "userManagement" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              onSectionChange("userManagement");
            }}
          >
            User Management
          </a>
        </li>
      </ul>
    </nav>
  );
}
