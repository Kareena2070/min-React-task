import React from "react";

const Library = React.memo(({ libraryName, books, updateCount }) => {
  if (books.length === 0) {
    return <p>No Books in Library</p>;
  }

  return (
    <div>
      <h2>Welcome to {libraryName}</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: "10px" }}>
            {book.title} -{" "}
            {book.available ? (
              <span style={{ color: "green" }}>🟢 Available ({book.count})</span>
            ) : (
              <span style={{ color: "red" }}>🔴 Not Available</span>
            )}
            <button
              onClick={() => updateCount(book.id, 1)}
              style={{ marginLeft: "10px" }}
            >
              ➕ Return
            </button>
            <button
              onClick={() => updateCount(book.id, -1)}
              style={{ marginLeft: "5px" }}
            >
              ➖ Borrow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Library;
