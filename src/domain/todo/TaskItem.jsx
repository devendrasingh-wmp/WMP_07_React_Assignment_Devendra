import React from 'react';

const TaskItem = ({ task, onToggleTask, onDeleteTask }) => {
  const taskStatusClass = task.completed ? 'completed' : 'pending';

  return (
    <div className={`task-item ${taskStatusClass}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onDeleteTask(task.id)}><i class="fa-solid fa-trash"></i></button>
    </div>
  );
};

export default TaskItem;
