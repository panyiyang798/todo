import React from "react";

const Output = ({ todos, onDelete, onChange }) => {
  return (
    <React.Fragment>
      {todos.map(todo => (
        <ul key={todo.id}>
          <li>{todo.title}</li>
          <button onClick={() => onDelete(todo.id)}>delete</button>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => onChange(todo)}
          />
        </ul>
      ))}
    </React.Fragment>
  );
};

export default Output;
