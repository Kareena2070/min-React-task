import React from "react";

const TodoList = React.memo(({ ownerName, todos, togglePriority }) => {
  if (todos.length === 0) {
    return <p>No Tasks Yet</p>;
  }

  return (
    <div>
      <h2>{ownerName}'s Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {todo.title} -{" "}
            {todo.highPriority ? (
              <span style={{ color: "red" }}>🔴 High Priority</span>
            ) : (
              <span style={{ color: "green" }}>🟢 Normal</span>
            )}
            <button
              onClick={() => togglePriority(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Toggle Priority
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
