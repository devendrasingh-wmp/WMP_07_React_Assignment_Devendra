import React from 'react';
import './TaskItem.css';

/**
 * Component to display a single task item.
 * Handles toggling the task's completion status and deleting the task.
 * @param {Object} task - The task object containing id, text, and completion status.
 * @param {Function} onToggleTask - Callback function to toggle the completion status of the task.
 * @param {Function} onDeleteTask - Callback function to delete the task.
 */
const TaskItem = ({ task, onToggleTask, onDeleteTask }) => {
  // Determine the CSS class based on the completion status of the task
  const taskStatusClass = task.completed ? 'completed' : 'pending';

  return (
    <div className={`task-item ${taskStatusClass}`}>
      {/* Checkbox for toggling the task completion */}
      <input
        type="checkbox"
        checked={task.completed} // Checked status reflects the task's completion state
        onChange={() => onToggleTask(task.id)} // Calls the callback to toggle the task status
      />
      {/* Displaying the task text */}
      <span>{task.text}</span>

      {/* Button to delete the task */}
      <button onClick={() => onDeleteTask(task.id)}>
        {/* Icon for the delete button */}
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default TaskItem;
