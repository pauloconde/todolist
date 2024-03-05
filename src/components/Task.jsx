import React from 'react';
import '../styles/Task.css';
// import { TbCircleX } from 'react-icons/tb';
import { TbTrashX } from 'react-icons/tb';

export default function Task({
  text,
  completed,
  id,
  completeTask,
  deleteTask,
}) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div className='task-text' onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className='task-icons-container' onClick={() => deleteTask(id)}>
        <TbTrashX className='task-icon' />
      </div>
    </div>
  );
}
