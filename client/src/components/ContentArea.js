// ContentArea.js
import React from "react";
import ProductManagement from "./ProductManagement";
import OrderManagement from "./OrderManagement";
import UserManagement from "./UserManagement";

function ContentArea({ currentSection }) {
  switch (currentSection) {
    case "productManagement":
      return <ProductManagement />;
    case "orderManagement":
      return <OrderManagement />;
    case "userManagement":
      return <UserManagement />;
    default:
      return <div>Invalid section</div>;
  }
}

export default ContentArea;
