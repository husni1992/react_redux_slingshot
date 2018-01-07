import React from "react";
import { func } from "prop-types";

const TodoForm = ({ addItem, clearForm }) => {
  const inp = document.getElementById("todoInout");
  clearForm ? (inp.value = null) : null;
  return (
    <div>
      <input id="todoInout" type="text" onKeyDown={addItem} />
    </div>
  );
};

TodoForm.propTypes = {
  addItem: func.isRequired
};

export default TodoForm;
