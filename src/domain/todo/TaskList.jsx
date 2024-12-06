import React from 'react';
import TaskItem from './TaskItem';

/**
 * Component to display a list of tasks.
 * Iterates through the `tasks` array and renders a `TaskItem` for each task.
 * @param {Array} tasks - Array of task objects to be displayed.
 * @param {Function} onToggleTask - Callback function to toggle the completion status of a task.
 * @param {Function} onDeleteTask - Callback function to delete a task.
 */
const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div className="task-list">
      {/* Iterate through the tasks array and render a TaskItem for each task */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id} 
          task={task} 
          onToggleTask={onToggleTask} 
          onDeleteTask={onDeleteTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
