import React from "react";

/**
 * Form component for adding a new task.
 * It includes an input field for task input and a submit button.
 */
function Form({ onSubmit, inputValue, setInputValue }) {
  return (
    <div>
      {/* Form container with bootstrap styling and onSubmit event handling */}
      <form className="task-input input-group mb-3" onSubmit={onSubmit}>
        
        {/* Input field for user task entry */}
        <input
          type="text"
          className="form-control" // Styling class for input
          placeholder="Add a new task..." // Placeholder text
          value={inputValue} // Controlled component value
          onChange={(e) => setInputValue(e.target.value)} // Updates input state on change
          required // Marks the input as required to prevent empty submissions
        />
        
        {/* Submit button for adding a task */}
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
