import React, { useState } from 'react';
import Form from '../../components/form';

/**
 * Component to handle user input for adding new tasks.
 * @param {Function} onAddTask - Callback function to add a task to the task list.
 */
const TaskInput = ({ onAddTask }) => {
  // State to manage the current input value for the task
  const [inputValue, setInputValue] = useState("");

  /**
   * Handles the form submission for adding a new task.
   * Prevents default form submission behavior, validates input,
   * and calls the provided onAddTask callback.
   * @param {Event} e - The form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask({ text: inputValue, completed: false }); // Add the task
      setInputValue(''); // Reset the input field
    }
  };

  return (
    /**
     * Uses the `Form` component to handle user input.
     * Passes down the submit handler and state management functions.
     */
    <Form 
      onSubmit={handleSubmit}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  );
};

export default TaskInput;
