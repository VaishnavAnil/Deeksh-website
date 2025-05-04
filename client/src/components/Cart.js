import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";

function Cart({ cart, setCart }) {
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div style={{ textAlign: "center", padding: "50px 20px" }}>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link
            to="/"
            className="shop-now-button"
            style={{ display: "inline-block", marginTop: "20px" }}
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h2>Shopping Cart</h2>

      <div className="cart-container" style={{ marginTop: "30px" }}>
        <div
          className="cart-header"
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr 1fr 1fr",
            borderBottom: "1px solid var(--border-color)",
            padding: "10px 0",
            fontWeight: "bold",
          }}
        >
          <div>Product</div>
          <div style={{ textAlign: "center" }}>Price</div>
          <div style={{ textAlign: "center" }}>Quantity</div>
          <div style={{ textAlign: "center" }}>Total</div>
        </div>

        {cart.map((item) => (
          <div
            key={item.id}
            className="cart-item"
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 1fr 1fr 1fr",
              padding: "15px 0",
              borderBottom: "1px solid var(--border-color)",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  marginRight: "15px",
                }}
              />
              <div>
                <h3 style={{ margin: "0 0 5px 0", fontSize: "1rem" }}>
                  {item.name}
                </h3>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--primary-color)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: "0",
                    fontSize: "0.9rem",
                  }}
                >
                  <FaTrash style={{ marginRight: "5px" }} /> Remove
                </button>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>${item.price}</div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  border: "1px solid var(--border-color)",
                  borderRadius: "4px",
                }}
              >
                <button
                  style={{
                    width: "30px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    padding: "0 10px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  1
                </span>
                <button
                  style={{
                    width: "30px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>${item.price}</div>
          </div>
        ))}

        <div
          className="cart-summary"
          style={{
            marginLeft: "auto",
            maxWidth: "300px",
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "var(--light-gray)",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Subtotal:</span>
            <span>${calculateTotal()}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
              paddingTop: "15px",
              borderTop: "1px solid var(--border-color)",
              fontWeight: "bold",
            }}
          >
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>

          <button
            style={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "12px 0",
              fontWeight: "bold",
              cursor: "pointer",
              width: "100%",
              marginTop: "20px",
            }}
          >
            Proceed to Checkout
          </button>

          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15px",
              color: "var(--text-color)",
              textDecoration: "none",
            }}
          >
            <FaArrowLeft style={{ marginRight: "5px" }} /> Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Cart;
