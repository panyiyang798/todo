import React from "react";

const Input = ({ value, onChange, onAdd, onClearCompleted }) => {
  return (
    <React.Fragment>
      <h1>This is a todo-list!</h1>
      <form>
        <input type="text" value={value} onChange={onChange} />
        <button type="button" onClick={onAdd}>
          add
        </button>
        <button type='button' onClick = {onClearCompleted}>clear completed</button>
      </form>
    </React.Fragment>
  );
};

export default Input;
