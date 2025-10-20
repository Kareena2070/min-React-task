import React from "react";

const TableReservation = React.memo(({ restaurantName, tables, toggleReserve }) => {
  if (tables.length === 0) {
    return <p>No Tables Available</p>;
  }

  return (
    <div>
      <h2>{restaurantName} Reservations</h2>
      <ul>
        {tables.map((table) => (
          <li key={table.id} style={{ marginBottom: "10px" }}>
            Table {table.tableNumber} -{" "}
            {table.reserved ? (
              <span style={{ color: "green" }}>🟢 Reserved</span>
            ) : (
              <span style={{ color: "red" }}>🔴 Available</span>
            )}
            <button
              onClick={() => toggleReserve(table.id)}
              style={{ marginLeft: "10px" }}
            >
              Reserve
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TableReservation;
