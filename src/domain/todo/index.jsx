import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./TodoApp.css";

/**
 * Main component for the to-do application. Manages tasks, filtering, and interactions.
 */
const TodoApp = () => {
  // State to hold the list of tasks; retrieves from localStorage or initializes with an empty array
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  // State to track the current filter for displaying tasks ("All", "Completed", "Pending")
  const [filter, setFilter] = useState("All");

  // Effect: Updates localStorage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Adds a new task to the task list.
   * @param {Object} task - The new task object to be added.
   */
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]); // Assigns a unique ID to each task
  };

  /**
   * Toggles the completion status of a task.
   * @param {number} taskId - The ID of the task to toggle.
   */
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  /**
   * Deletes a task from the task list.
   * @param {number} taskId - The ID of the task to delete.
   */
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  /**
   * Filters the tasks based on the selected filter type.
   * @returns {Array} Filtered list of tasks.
   */
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true; // Default: Show all tasks
  });

  return (
    <div className="todolist">
      {/* App header */}
      <h1>To-Do List</h1>

      {/* Component to input new tasks */}
      <TaskInput onAddTask={addTask} />

      {/* Filter buttons */}
      <div className="task-filters">
        <button className="btn btn-primary" onClick={() => setFilter("All")}>
          All
        </button>
        <button
          className="btn btn-success"
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
        <button
          className="btn btn-warning"
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
      </div>

      {/* Task list display or a message if no tasks are available */}
      {filteredTasks.length > 0 ? (
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      ) : (
        <div className="text-danger">--No-task--</div>
      )}
    </div>
  );
};

export default TodoApp;
