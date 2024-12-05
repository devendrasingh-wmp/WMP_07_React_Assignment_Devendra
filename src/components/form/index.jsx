import React from "react";


function Form({ onSubmit, inputValue, setInputValue }) {
  return (
    <div>
      <form className="task-input input-group mb-3" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
