import React, { useState } from 'react';
import InputTask from './InputTask';
import Task from './Task';
import '../styles/TasksList.css';

export default function TasksList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
    console.log(task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((tarea) => tarea.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  return (
    <>
      <InputTask onSubmit={addTask} />
      <div className='tasks-list-container'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </>
  );
}
