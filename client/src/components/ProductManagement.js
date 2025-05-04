// ProductManagement.js
import React, { useState, useEffect } from "react";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const [currentProductId, setCurrentProductId] = useState(null);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCreateProduct = () => {
    fetch("/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: productName,
        price: productPrice,
        stock: productStock,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
        clearForm();
      })
      .catch((error) => console.error("Error creating product:", error));
  };

  const handleUpdateProduct = () => {
    if (!currentProductId) return;

    fetch(`/products/${currentProductId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: productName,
        price: productPrice,
        stock: productStock,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(
          products.map((product) =>
            product.id === currentProductId ? data : product
          )
        );
        clearForm();
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  const handleDeleteProduct = (id) => {
    fetch(`/products/${id}`, { method: "DELETE" })
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
        if (currentProductId === id) {
          clearForm();
        }
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const editProduct = (product) => {
    setProductName(product.name);
    setProductPrice(product.price);
    setProductStock(product.stock);
    setCurrentProductId(product.id);
  };

  const clearForm = () => {
    setProductName("");
    setProductPrice(0);
    setProductStock(0);
    setCurrentProductId(null);
  };

  return (
    <div>
      <h1>Product Management</h1>

      {/* Product list */}
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price} - Stock: {product.stock}
              <button onClick={() => editProduct(product)}>Edit</button>
              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Product form */}
      <h2>{currentProductId ? "Edit Product" : "Add Product"}</h2>
      <div>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Stock:
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      {currentProductId ? (
        <>
          <button onClick={handleUpdateProduct}>Update Product</button>
          <button onClick={clearForm}>Cancel</button>
        </>
      ) : (
        <button onClick={handleCreateProduct}>Create Product</button>
      )}
    </div>
  );
}

export default ProductManagement;
