import React, { useState } from 'react';
import Form from '../../components/form';


const TaskInput = ({ onAddTask }) => {

  // Todo task input variable
  const [inputValue, setInputValue] = useState("");

  // Submit the form 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask({ text: inputValue, completed: false });
      setInputValue('');
    }
  };

  return (
      // Calling form component 
      <Form 
      onSubmit={handleSubmit}
      inputValue={inputValue}
      setInputValue={setInputValue}
        />
  );
};

export default TaskInput;
