// OrderManagement.js
import React, { useState, useEffect } from "react";

function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [orderDate, setOrderDate] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    fetch("/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const handleCreateOrder = () => {
    fetch("/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: orderDate,
        total: orderTotal,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders([...orders, data]);
        // Clear form fields after successful creation
        setOrderDate("");
        setOrderTotal(0);
      })
      .catch((error) => console.error("Error creating order:", error));
  };

  const handleUpdateOrder = (id) => {
    fetch(`/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: orderDate,
        total: orderTotal,
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        setOrders(orders.map((order) => (order.id === id ? data : order)))
      )
      .catch((error) => console.error("Error updating order:", error));
  };

  const handleDeleteOrder = (id) => {
    fetch(`/orders/${id}`, { method: "DELETE" })
      .then(() => setOrders(orders.filter((order) => order.id !== id)))
      .catch((error) => console.error("Error deleting order:", error));
  };

  return (
    <div>
      <h1>Order Management</h1>

      {/* Order list */}
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Date: {order.date} - Total: ${order.total}
              <button
                onClick={() => {
                  setOrderDate(order.date);
                  setOrderTotal(order.total);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleUpdateOrder(order.id)}>
                Update
              </button>
              <button onClick={() => handleDeleteOrder(order.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Order form */}
      <h2>Add/Edit Order</h2>
      <div>
        <label>
          Order Date:
          <input
            type="date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Order Total:
          <input
            type="number"
            value={orderTotal}
            onChange={(e) => setOrderTotal(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleCreateOrder}>Create Order</button>
    </div>
  );
}

export default OrderManagement;
