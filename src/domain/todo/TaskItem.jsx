import React from 'react';

const TaskItem = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
