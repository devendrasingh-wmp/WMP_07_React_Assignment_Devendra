import React, { useState, useEffect } from 'react';

import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './TodoApp.css';

const TodoApp = () => {
  // State to hold the list of tasks, initialized with tasks from localStorage or an empty array.
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

  // State to manage the current filter for displaying tasks.
  const [filter, setFilter] = useState('All');

  // Effect to update localStorage whenever the tasks state changes.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task to the list.
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]); // Assigns a unique ID based on the current task
  };

  // Function to toggle the completion status of a task 
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task // Toggles the completed property.
      )
    );
  };

  // Function to delete a task from the list by its ID.
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Filters out the task with the given ID.
  };

  // Computes the tasks to be displayed based on the current filter.
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed; // Shows only completed tasks.
    if (filter === 'Pending') return !task.completed; // Shows only pending tasks.
    return true; // Shows all tasks.
  });

  return (
    <div className="todolist">
      {/* Header for the to-do list */}
      <h1>To-Do List</h1>
      
      {/* Input component for adding new tasks */}
      <TaskInput onAddTask={addTask} />

      {/* Filter buttons to switch between All, Completed, and Pending tasks */}
      <div className="task-filters">
        <button className="btn btn-primary" onClick={() => setFilter('All')}>
          All
        </button>
        <button className="btn btn-success" onClick={() => setFilter('Completed')}>
          Completed
        </button>
        <button className="btn btn-warning" onClick={() => setFilter('Pending')}>
          Pending
        </button>
      </div>

      {/* List component to display and manage tasks */}
      <TaskList
        tasks={filteredTasks} // Passes the filtered list of tasks.
        onToggleTask={toggleTask} // Function to toggle task completion.
        onDeleteTask={deleteTask} // Function to delete a task.
      />
    </div>
  );
};

export default TodoApp;
