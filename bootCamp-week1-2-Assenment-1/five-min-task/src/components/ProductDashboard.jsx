import React from "react";

const ProductDashboard = React.memo(({ storeName, products, updateQuantity }) => {
  if (products.length === 0) {
    return <p>No Products Available</p>;
  }

  return (
    <div>
      <h2>Welcome to {storeName} Inventory</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            {product.name} -{" "}
            {product.quantity > 0 ? (
              <span style={{ color: "green" }}>In Stock ({product.quantity})</span>
            ) : (
              <span style={{ color: "red" }}>Out of Stock</span>
            )}
            <button
              onClick={() => updateQuantity(product.id, 1)}
              style={{ marginLeft: "10px" }}
            >
              ➕
            </button>
            <button
              onClick={() => updateQuantity(product.id, -1)}
              style={{ marginLeft: "5px" }}
            >
              ➖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ProductDashboard;
