import './App.css';
import React, {useState} from 'react';
import {AddBarContainer} from './Containers/AddBarContainer.js';
import {TaskListContainer} from './Containers/TaskListContainer';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => {
      return [task, ...prev];
    });
  }

  console.log(tasks);

  const removeTask = (task) => {
    setTasks((prev) => {
      return prev.filter((prevTask) => prevTask.id !== task.id);
    })
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddBarContainer addTask={addTask} />
      <TaskListContainer removeTask={removeTask} tasks={tasks} />
    </div>
  );
}

export default App;
