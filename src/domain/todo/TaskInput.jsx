import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask({ title: taskTitle, completed: false });
      setTaskTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;