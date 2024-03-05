import React, { useState } from 'react';
import InputTask from './InputTask';
import Task from './Task';
import '../styles/TasksList.css';

export default function TasksList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    
  }

  return (
    <>
      <InputTask />
      <div className='tasks-list-container'>
        {tasks.map((task) => (
          <Task 
            text={task.text}
            completed={task.completed}
           />
        ))}
      </div>
    </>
  );
}
