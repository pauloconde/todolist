import React, { useState } from 'react';
import { TbPlus } from 'react-icons/tb';
import '../styles/InputTask.css';
import { v4 as uuidv4 } from 'uuid';

export default function InputTask(props) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newTask = {
        id: uuidv4(),
        text: input.trim(),
        completed: false,
      };
      setInput('');
      props.onSubmit(newTask);
    }
  };

  return (
    <form className='input-task-form' onSubmit={handleSubmit}>
      <input
        className='input-task-input'
        type='text'
        placeholder='Add new task here...'
        name='input-task-input'
        onChange={handleInputChange}
        value = {input}
      />
      <button className='input-task-button'>
        <TbPlus className='input-task-button-icon' />
      </button>
    </form>
  );
}
