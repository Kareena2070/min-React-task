import React from "react";

const Cart = React.memo(({ storeName, cartItems, updateQty }) => {
  if (cartItems.length === 0) {
    return <p>Cart is Empty</p>;
  }

  return (
    <div>
      <h2>{storeName} Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            {item.name} -{" "}
            {item.qty > 0 ? (
              <span>Quantity: {item.qty}</span>
            ) : (
              <span style={{ color: "red" }}>Out of Cart</span>
            )}
            <button
              onClick={() => updateQty(item.id, 1)}
              style={{ marginLeft: "10px" }}
            >
              ➕
            </button>
            <button
              onClick={() => updateQty(item.id, -1)}
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

export default Cart;
